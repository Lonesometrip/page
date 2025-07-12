// Enhanced DotGrid Component with GSAP animations
import { gsap } from 'gsap';

class DotGrid {
  constructor(container, options = {}) {
    this.container = container;
    this.options = {
      dotSize: options.dotSize || 10,
      gap: options.gap || 15,
      baseColor: options.baseColor || '#5227FF',
      activeColor: options.activeColor || '#5227FF',
      proximity: options.proximity || 120,
      shockRadius: options.shockRadius || 250,
      shockStrength: options.shockStrength || 5,
      resistance: options.resistance || 750,
      returnDuration: options.returnDuration || 1.5,
      speedTrigger: options.speedTrigger || 100,
      maxSpeed: options.maxSpeed || 5000
    };
    
    this.canvas = null;
    this.ctx = null;
    this.dots = [];
    this.pointer = {
      x: 0,
      y: 0,
      vx: 0,
      vy: 0,
      speed: 0,
      lastTime: 0,
      lastX: 0,
      lastY: 0
    };
    
    this.animationId = null;
    this.resizeObserver = null;
    
    this.init();
  }
  
  init() {
    this.createCanvas();
    this.buildGrid();
    this.bindEvents();
    this.startAnimation();
  }
  
  createCanvas() {
    this.canvas = document.createElement('canvas');
    this.canvas.style.position = 'absolute';
    this.canvas.style.top = '0';
    this.canvas.style.left = '0';
    this.canvas.style.width = '100%';
    this.canvas.style.height = '100%';
    this.canvas.style.pointerEvents = 'none';
    this.container.appendChild(this.canvas);
    this.ctx = this.canvas.getContext('2d');
  }
  
  hexToRgb(hex) {
    const match = hex.match(/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i);
    if (!match) return { r: 0, g: 0, b: 0 };
    return {
      r: parseInt(match[1], 16),
      g: parseInt(match[2], 16),
      b: parseInt(match[3], 16)
    };
  }
  
  buildGrid() {
    const rect = this.container.getBoundingClientRect();
    const { width, height } = rect;
    const dpr = window.devicePixelRatio || 1;
    
    this.canvas.width = width * dpr;
    this.canvas.height = height * dpr;
    this.canvas.style.width = `${width}px`;
    this.canvas.style.height = `${height}px`;
    this.ctx.scale(dpr, dpr);
    
    const { dotSize, gap } = this.options;
    const cols = Math.floor((width + gap) / (dotSize + gap));
    const rows = Math.floor((height + gap) / (dotSize + gap));
    const cell = dotSize + gap;
    
    const gridW = cell * cols - gap;
    const gridH = cell * rows - gap;
    
    const extraX = width - gridW;
    const extraY = height - gridH;
    
    const startX = extraX / 2 + dotSize / 2;
    const startY = extraY / 2 + dotSize / 2;
    
    this.dots = [];
    for (let y = 0; y < rows; y++) {
      for (let x = 0; x < cols; x++) {
        const cx = startX + x * cell;
        const cy = startY + y * cell;
        this.dots.push({
          cx,
          cy,
          xOffset: 0,
          yOffset: 0,
          originalX: cx,
          originalY: cy,
          _inertiaApplied: false
        });
      }
    }
  }
  
  bindEvents() {
    const throttledMove = this.throttle((e) => {
      this.handlePointerMove(e);
    }, 16);
    
    this.container.addEventListener('mousemove', throttledMove);
    this.container.addEventListener('touchmove', (e) => {
      e.preventDefault();
      if (e.touches.length > 0) {
        throttledMove(e.touches[0]);
      }
    });
    
    // Setup resize observer
    if ('ResizeObserver' in window) {
      this.resizeObserver = new ResizeObserver(() => {
        this.buildGrid();
      });
      this.resizeObserver.observe(this.container);
    } else {
      window.addEventListener('resize', () => this.buildGrid());
    }
  }
  
  throttle(func, limit) {
    let lastCall = 0;
    return function(...args) {
      const now = performance.now();
      if (now - lastCall >= limit) {
        lastCall = now;
        func.apply(this, args);
      }
    };
  }
  
  handlePointerMove(e) {
    const now = performance.now();
    const rect = this.container.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const dt = this.pointer.lastTime ? now - this.pointer.lastTime : 16;
    const dx = x - this.pointer.lastX;
    const dy = y - this.pointer.lastY;
    
    let vx = (dx / dt) * 1000;
    let vy = (dy / dt) * 1000;
    let speed = Math.hypot(vx, vy);
    
    if (speed > this.options.maxSpeed) {
      const scale = this.options.maxSpeed / speed;
      vx *= scale;
      vy *= scale;
      speed = this.options.maxSpeed;
    }
    
    this.pointer = {
      x,
      y,
      vx,
      vy,
      speed,
      lastTime: now,
      lastX: x,
      lastY: y
    };
    
    // Apply shock wave effect
    if (speed > this.options.speedTrigger) {
      this.applyShockWave(x, y, speed);
    }
  }
  
  applyShockWave(centerX, centerY, speed) {
    const { shockRadius, shockStrength, resistance, returnDuration } = this.options;
    
    this.dots.forEach(dot => {
      const dist = Math.hypot(dot.cx - centerX, dot.cy - centerY);
      
      if (dist < shockRadius && !dot._inertiaApplied) {
        const force = (1 - dist / shockRadius) * shockStrength * (speed / 1000);
        const angle = Math.atan2(dot.cy - centerY, dot.cx - centerX);
        
        const pushX = Math.cos(angle) * force;
        const pushY = Math.sin(angle) * force;
        
        dot._inertiaApplied = true;
        
        gsap.to(dot, {
          xOffset: pushX,
          yOffset: pushY,
          duration: 0.1,
          ease: 'power2.out',
          onComplete: () => {
            gsap.to(dot, {
              xOffset: 0,
              yOffset: 0,
              duration: returnDuration,
              ease: 'elastic.out(1, 0.3)',
              onComplete: () => {
                dot._inertiaApplied = false;
              }
            });
          }
        });
      }
    });
  }
  
  startAnimation() {
    const baseRgb = this.hexToRgb(this.options.baseColor);
    const activeRgb = this.hexToRgb(this.options.activeColor);
    const proximitySq = this.options.proximity * this.options.proximity;
    
    const animate = () => {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      
      const { x: px, y: py } = this.pointer;
      
      this.dots.forEach(dot => {
        const ox = dot.cx + dot.xOffset;
        const oy = dot.cy + dot.yOffset;
        const dx = dot.cx - px;
        const dy = dot.cy - py;
        const dsq = dx * dx + dy * dy;
        
        let fillStyle = this.options.baseColor;
        
        if (dsq <= proximitySq) {
          const dist = Math.sqrt(dsq);
          const t = 1 - dist / this.options.proximity;
          const r = Math.round(baseRgb.r + (activeRgb.r - baseRgb.r) * t);
          const g = Math.round(baseRgb.g + (activeRgb.g - baseRgb.g) * t);
          const b = Math.round(baseRgb.b + (activeRgb.b - baseRgb.b) * t);
          fillStyle = `rgb(${r},${g},${b})`;
        }
        
        this.ctx.beginPath();
        this.ctx.arc(ox, oy, this.options.dotSize / 2, 0, Math.PI * 2);
        this.ctx.fillStyle = fillStyle;
        this.ctx.fill();
      });
      
      this.animationId = requestAnimationFrame(animate);
    };
    
    animate();
  }
  
  destroy() {
    if (this.animationId) {
      cancelAnimationFrame(this.animationId);
    }
    
    if (this.resizeObserver) {
      this.resizeObserver.disconnect();
    }
    
    if (this.canvas && this.canvas.parentNode) {
      this.canvas.parentNode.removeChild(this.canvas);
    }
  }
}

export default DotGrid;