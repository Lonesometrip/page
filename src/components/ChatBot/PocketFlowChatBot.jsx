import React, { useState, useRef, useEffect } from 'react';
import { translations } from '../../translations/translations';
import DirectContactLinks from './DirectContactLinks';
import FullPageChatBot from './FullPageChatBot';

// This is a React component that integrates with our PocketFlow chat bot
// It uses OpenRouter API for AI-powered responses and handles form submissions

// OpenRouter API integration via Cloudflare Worker
const callOpenRouterAPI = async (messages, systemPrompt = null, setAiConnectedFn = null) => {
  try {
    // Prepare the messages array
    const formattedMessages = [];

    // Add system prompt if provided
    if (systemPrompt) {
      formattedMessages.push({
        role: "system",
        content: systemPrompt
      });
    }

    // Add conversation messages
    formattedMessages.push(...messages);

    // Call OpenRouter API via Cloudflare Worker - using environment variable
    const CLOUDFLARE_WORKER_URL = import.meta.env.VITE_CLOUDFLARE_WORKER_URL || "";

    if (!CLOUDFLARE_WORKER_URL) {
      console.error("Cloudflare Worker URL not configured");
      throw new Error("API endpoint not configured");
    }

    const response = await fetch(CLOUDFLARE_WORKER_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: "qwen/qwen3-32b", // Using Qwen3 32B model for better quality responses
        messages: formattedMessages,
        temperature: 0.1, // Very low temperature for extremely consistent, precise responses
        max_tokens: 200, // Significantly reduced to enforce concise responses
        top_p: 0.1 // Narrow sampling for more predictable outputs
      })
    });

    if (!response.ok) {
      console.error(`API error: ${response.status} - ${await response.text()}`);
      // Update AI connection status if function is provided
      if (setAiConnectedFn) setAiConnectedFn(false);
      throw new Error(`API error: ${response.status}`);
    }

    const data = await response.json();
    // Update AI connection status if function is provided
    if (setAiConnectedFn) setAiConnectedFn(true);
    return data.choices[0].message.content;
  } catch (error) {
    console.error("Error in callOpenRouterAPI:", error);
    // Fall back to simulation if the API call fails
    console.log("API call failed, falling back to simulated response");
    // Update AI connection status if function is provided
    if (setAiConnectedFn) setAiConnectedFn(false);
    return simulateAIResponse(messages, systemPrompt);
  }
};

// Function to simulate AI responses without making API calls
const simulateAIResponse = (messages, systemPrompt = null) => {
  // Get the last user message if available
  const lastUserMessage = messages.length > 0 ?
    messages[messages.length - 1].content.toLowerCase() : "";

  // Check if this is an intent detection request
  if (systemPrompt && systemPrompt.includes("intent classifier")) {
    // Simple intent detection based on keywords
    if (lastUserMessage.includes("book") ||
        lastUserMessage.includes("reservation") ||
        lastUserMessage.includes("schedule") ||
        lastUserMessage.includes("ride") ||
        lastUserMessage.includes("pickup")) {
      return "booking";
    } else if (lastUserMessage.includes("contact") ||
               lastUserMessage.includes("email") ||
               lastUserMessage.includes("call") ||
               lastUserMessage.includes("talk to")) {
      return "contact";
    } else {
      return "general";
    }
  }

  // Check if this is a contact form greeting
  if (systemPrompt && systemPrompt.includes("contact your company")) {
    return "I'd be happy to help you get in touch with our team. Could you please tell me your name?";
  }

  // Check if this is a booking form greeting
  if (systemPrompt && systemPrompt.includes("booking request")) {
    return "I'd be delighted to help you book our chauffeur service. Where would you like to be picked up?";
  }

  // Check if this is a thank you message for contact form
  if (systemPrompt && systemPrompt.includes("thank you message") && systemPrompt.includes("contact form")) {
    const name = systemPrompt.match(/for (.*?) who/)?.[1] || "there";
    return `Thank you, ${name}! Your message has been sent successfully. Our team will review it and get back to you soon.`;
  }

  // Check if this is a confirmation message for booking
  if (systemPrompt && systemPrompt.includes("booking confirmation")) {
    const name = systemPrompt.match(/for (.*?) who/)?.[1] || "there";
    const pickup = systemPrompt.match(/Pickup: (.*?)$/m)?.[1] || "your location";
    const date = systemPrompt.match(/Date: (.*?)$/m)?.[1] || "the requested date";
    return `Thank you for your booking, ${name}! Your chauffeur service from ${pickup} on ${date} has been confirmed. Our team will contact you shortly with final details. We look forward to providing you with an exceptional travel experience.`;
  }

  // Check if this is a conversational transition in booking form
  if (systemPrompt && systemPrompt.includes("conversational response that acknowledges")) {
    const field = systemPrompt.match(/provided: (.*?):/)?.[1] || "";
    const nextField = systemPrompt.match(/ask them for their (.*?)\\./)?.[1] || "";

    if (nextField === "destination") {
      return `Perfect! Now, where would you like to go from there?`;
    } else if (nextField === "time") {
      return `Got it. And what time would you like to be picked up?`;
    } else if (nextField === "vehicleType") {
      return `Thanks for that information. We have several luxury vehicles available. Would you prefer a Mercedes S-Class, BMW 7 Series, or Mercedes V-Class?`;
    } else if (nextField === "name") {
      return `Great! Now I just need some information to complete your booking. What's your full name?`;
    } else if (nextField === "specialRequests") {
      return `Almost done! Do you have any special requests for your journey, such as child seats or wheelchair access?`;
    }
  }

  // For general inquiries, provide concise, direct responses based on keywords
  if (lastUserMessage.includes("price") || lastUserMessage.includes("cost") || lastUserMessage.includes("rate")) {
    return "Competitive rates tailored to your needs. S-Class from €80/hour, BMW 7 Series from €75/hour, V-Class from €90/hour. Contact: +49 176 3145 4340";
  } else if (lastUserMessage.includes("airport") || lastUserMessage.includes("transfer")) {
    return "Premium airport transfers with real-time flight tracking and 60 minutes waiting time for international flights. Contact: +49 176 3145 4340";
  } else if (lastUserMessage.includes("vehicle") || lastUserMessage.includes("car") || lastUserMessage.includes("mercedes") || lastUserMessage.includes("bmw")) {
    return "Our fleet includes **Mercedes S-Class**, **BMW 7 Series**, and **Mercedes V-Class** vehicles—each offering comfort, style, and top-tier safety. Contact: +49 176 3145 4340";
  } else if (lastUserMessage.includes("chauffeur") || lastUserMessage.includes("driver")) {
    return "Professional multilingual chauffeurs, formally dressed and trained in discretion and local knowledge. Contact: +49 176 3145 4340";
  } else if (lastUserMessage.includes("tour") || lastUserMessage.includes("sightseeing") || lastUserMessage.includes("tourism")) {
    return "Premium guided tours available: City Explorer (€300), Shopping Excursion (€450), Coastal Journey (€600), Cultural Heritage (€500). Contact: +49 176 3145 4340";
  } else {
    return "Thank you for reaching out to Premium Chauffeur Service. Our fleet includes **Mercedes S-Class**, **BMW 7 Series**, and **Mercedes V-Class** vehicles. 24/7 support via +49 176 3145 4340 or info@premium-chauffer.com.";
  }
};

// Form submission functions
const submitContactForm = async (contactData) => {
  try {
    const response = await fetch("https://formspree.io/f/myzerjwz", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...contactData,
        _subject: "New Contact Request from Chat Bot",
      }),
    });

    return response.ok;
  } catch (error) {
    console.error("Error submitting contact form:", error);
    return false;
  }
};

const submitBookingForm = async (bookingData) => {
  try {
    const response = await fetch("https://formspree.io/f/myzerjwz", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...bookingData,
        _subject: "New Booking Request from Chat Bot",
      }),
    });

    return response.ok;
  } catch (error) {
    console.error("Error submitting booking form:", error);
    return false;
  }
};

// Knowledge base data with multilingual support
const KNOWLEDGE_BASE = {
  en: [
    {
      title: "About Us",
      content: "We are a premium transportation and chauffeur service offering luxury vehicles including Mercedes S-Class, BMW 7 Series, and Mercedes V-Class. Our services include chauffeur service, airport transfers, VIP services, and customized tourism packages. With over 10 years of experience, we pride ourselves on exceptional service, professional chauffeurs, and immaculate vehicles. Our mission is to provide the ultimate luxury transportation experience with attention to every detail."
    },
    {
      title: "Our Vehicles",
      content: "We offer a fleet of luxury vehicles including Mercedes S-Class, BMW 7 Series, and Mercedes V-Class. Each vehicle is meticulously maintained, regularly serviced, and thoroughly cleaned before every journey. All vehicles feature premium leather interiors, climate control, complimentary Wi-Fi, bottled water, and charging ports. Our vehicles are equipped with the latest safety features and are fully insured for your peace of mind."
    },
    {
      title: "Mercedes S-Class",
      content: "The Mercedes S-Class is our flagship luxury sedan, representing the pinnacle of comfort and sophistication. Features include: handcrafted Nappa leather seats with heating, cooling, and massage functions; 4-zone climate control; ambient lighting with 64 colors; panoramic sunroof; MBUX infotainment system with AI voice assistant; Burmester 4D surround sound; and advanced driver assistance systems. The S-Class accommodates up to 3 passengers with 2 medium-sized suitcases. Ideal for business executives, airport transfers, and special occasions like weddings and anniversaries."
    },
    {
      title: "BMW 7 Series",
      content: "The BMW 7 Series combines luxury with dynamic performance. Features include: premium Dakota leather seats with memory and massage functions; BMW iDrive system with gesture control; Harman Kardon surround sound; panoramic glass roof with LED light graphics; ambient air package with fragrance control; and executive lounge seating with extended legroom. The 7 Series offers a more sporty driving experience while maintaining exceptional comfort. It accommodates up to 3 passengers with 2 large suitcases. Perfect for executives who appreciate both luxury and performance."
    },
    {
      title: "Mercedes V-Class",
      content: "The Mercedes V-Class is our premium luxury van, providing exceptional space and comfort. Features include: configurable seating for up to 7 passengers; premium leather seats with individual climate control; panoramic roof; privacy glass; sliding doors with electric closing; ambient lighting; and advanced sound insulation for a quiet ride. The V-Class offers generous luggage space even at full passenger capacity (up to 4 large suitcases). Ideal for group travel, family outings, corporate teams, and airport transfers with multiple passengers or extensive luggage."
    },
    {
      title: "Vehicle Comparison",
      content: "When choosing between our vehicles: The Mercedes S-Class offers the highest level of luxury and comfort for up to 3 passengers, perfect for VIP transportation and special occasions. The BMW 7 Series provides a balance of luxury and sporty performance for up to 3 passengers, ideal for executives who appreciate responsive driving. The Mercedes V-Class accommodates up to 7 passengers with extensive luggage space, making it perfect for groups, families, or clients with substantial luggage requirements. All vehicles feature professional chauffeurs, premium amenities, and immaculate presentation."
    },
    {
      title: "Our Services",
      content: "We offer a comprehensive range of premium transportation services designed to meet diverse needs. Our core services include chauffeur service for business and leisure travel, airport transfers with flight tracking, VIP and executive transportation, tourism and sightseeing tours, event transportation for weddings and special occasions, corporate travel solutions, and multi-day hire options. Each service is customizable to your specific requirements, ensuring a personalized experience that exceeds expectations."
    },
    {
      title: "Chauffeur Service",
      content: "Our professional chauffeurs are the cornerstone of our service excellence. They undergo rigorous background checks, professional training, and regular assessments. All chauffeurs are multilingual (speaking at least English, German, and Arabic), knowledgeable about local areas and attractions, and trained in etiquette and discretion. They arrive 15 minutes early for every pickup, assist with luggage, and can adapt routes based on traffic conditions. Our chauffeurs are dressed in formal attire and maintain the highest standards of professionalism at all times."
    },
    {
      title: "Airport Transfer",
      content: "Our airport transfer service provides seamless transportation to and from all major airports. We monitor flight arrivals in real-time to adjust for early arrivals or delays, ensuring your chauffeur is waiting when you land. For arrivals, your chauffeur will meet you inside the terminal with a personalized sign and assist with luggage. We include 60 minutes of complimentary waiting time for international flights and 30 minutes for domestic flights. Our service includes terminal-to-door service, ensuring a stress-free start or end to your journey."
    },
    {
      title: "Airport Transfers",
      content: "Our premium airport transfer service ensures a smooth transition between the airport and your destination. We serve all major international and regional airports with punctual, reliable service. Your chauffeur tracks your flight in real-time and adjusts for any delays or early arrivals. For arrivals, your chauffeur will greet you inside the terminal with a personalized sign, assist with luggage, and escort you to your waiting vehicle. We provide 60 minutes of complimentary waiting time for international flights and 30 minutes for domestic flights. All transfers include bottled water, Wi-Fi, and reading materials to enhance your comfort."
    },
    {
      title: "VIP Service",
      content: "Our VIP service offers the highest level of luxury, privacy, and personalization. We can arrange for security personnel, coordinate with event organizers, and provide customized amenities based on your preferences. VIP service includes priority booking, dedicated account management, premium vehicle options with enhanced features, and chauffeurs specially trained in security protocols and discretion. We can accommodate last-minute changes and special requests, ensuring a seamless experience for high-profile clients, executives, and those requiring additional privacy or security measures."
    },
    {
      title: "VIP Services",
      content: "Our exclusive VIP services cater to clients who require the utmost in luxury, discretion, and personalization. This premium offering includes priority scheduling, dedicated account management, and chauffeurs with specialized training in security and privacy protocols. We can arrange additional security personnel if required, coordinate with event staff or personal assistants, and customize the vehicle with specific amenities based on client preferences. Our VIP service ensures complete confidentiality and can accommodate last-minute changes or special requests with minimal notice. Perfect for celebrities, executives, diplomats, and high-net-worth individuals."
    },
    {
      title: "Tourism Services",
      content: "Our tourism services combine luxury transportation with expert local knowledge to create memorable experiences. We offer guided tours to popular destinations, shopping excursions to premium outlets and boutiques, cultural tours of historical sites and museums, and customized itineraries based on your interests. Our chauffeurs double as knowledgeable guides, providing insights about local history, culture, and hidden gems. All tourism services include a luxury vehicle with amenities, flexible scheduling to adjust the pace as needed, and recommendations for dining and activities."
    },
    {
      title: "Tourism Packages",
      content: "We offer several premium tourism packages designed to showcase the best experiences in the region. Our packages include: City Explorer (4-hour city tour of major landmarks and districts), Shopping Excursion (6-hour luxury shopping experience at premium destinations), Coastal Journey (full-day tour along scenic coastal routes with stops at beaches and towns), and Cultural Heritage (exploration of historical sites and museums). All packages include a luxury vehicle with professional chauffeur, bottled water, Wi-Fi, flexible itinerary adjustments, and insider recommendations for dining and activities."
    },
    {
      title: "Tour Packages",
      content: "Our carefully curated tour packages offer exceptional experiences combining luxury transportation with expert guidance. Choose from our City Explorer package (4-hour tour of urban highlights), Shopping Excursion (6-hour premium shopping experience), Coastal Journey (full-day scenic coastal tour), or Cultural Heritage tour (immersion in historical and cultural sites). Each package includes a luxury vehicle with professional chauffeur who serves as both driver and knowledgeable guide, complimentary refreshments, Wi-Fi, and the flexibility to customize the experience based on your interests. Prices range from €300 to €600 depending on duration and itinerary."
    },
    {
      title: "City Explorer Package",
      content: "Our City Explorer package is a 4-hour guided tour of the city's main attractions designed to provide a comprehensive overview for first-time visitors or those with limited time. Your chauffeur will take you to iconic landmarks, scenic viewpoints, popular districts, and hidden gems that most tourists miss. The tour includes brief stops for photos and short walks at key locations, with commentary on historical significance and local culture. This package accommodates up to 3 passengers in an S-Class or 7 passengers in a V-Class, and includes bottled water, Wi-Fi, and flexible routing based on your interests. Price starts at €300."
    },
    {
      title: "Shopping Excursion Package",
      content: "The Shopping Excursion is a 6-hour luxury shopping experience tailored to serious shoppers and fashion enthusiasts. Your chauffeur will take you to premium shopping districts, luxury boutiques, designer outlets, and exclusive shopping centers based on your preferences. The chauffeur will assist with carrying bags, store recommendations, and can arrange for purchases to be delivered to your hotel if needed. The package includes refreshment breaks, lunch recommendations, and the flexibility to spend more time at preferred locations. Your purchases remain secure in the vehicle while you continue shopping. Price starts at €450."
    },
    {
      title: "Coastal Journey Package",
      content: "The Coastal Journey is a full-day tour (8-10 hours) along the scenic coastal routes, offering breathtaking views and memorable experiences. Visit beautiful beaches, charming seaside towns, coastal viewpoints, and local attractions. The itinerary includes scheduled stops for photos, leisure time at beaches or towns, and a lunch break at a recommended seafood restaurant (meal cost not included). Your chauffeur will provide commentary on points of interest and local history throughout the journey. This package is ideal for nature lovers and photography enthusiasts seeking to experience the coastal beauty at a relaxed pace. Price starts at €600."
    },
    {
      title: "Cultural Heritage Package",
      content: "The Cultural Heritage tour is an immersive full-day experience (8 hours) focusing on historical sites, museums, architectural landmarks, and cultural attractions. Your knowledgeable chauffeur will provide detailed commentary on the historical significance and cultural context of each location. The tour can be customized based on specific interests such as medieval history, religious sites, art, or architecture. The package includes admission recommendations, flexible timing at each site, and suggestions for authentic local dining experiences. This tour is perfect for history enthusiasts and those seeking deeper insights into the region's cultural heritage. Price starts at €500."
    },
    {
      title: "Contact Information",
      content: "You can reach our customer service team through multiple channels: Phone: +49 176 3145 4340 (available 24/7), Email: info@premium-chauffer.com, WhatsApp: +49 176 3145 4340, or through the contact form on our website. Our office is open Monday to Friday from 9:00 AM to 6:00 PM, but our booking and support services are available 24/7 for urgent requests. For immediate assistance, we recommend calling our direct line. All inquiries receive a response within 2 hours during business hours or by the next business morning for after-hours contacts."
    },
    {
      title: "Contact Us",
      content: "Our dedicated customer service team is available to assist you 24/7 through multiple channels. For immediate assistance, call us at +49 176 3145 4340. You can also reach us via email at info@premium-chauffer.com, WhatsApp at +49 176 3145 4340, or through the contact form on our website. Our multilingual team speaks English, German, and Arabic to ensure clear communication. For booking inquiries, service questions, or special requests, we aim to respond within 2 hours during business hours. Our physical office is located in central Munich, though most client interactions are handled remotely for your convenience."
    },
    {
      title: "Booking Process",
      content: "Booking our services is simple and convenient. You can book through our website using the online reservation form, call our booking line at +49 176 3145 4340, email your request to bookings@premium-chauffer.com, or use WhatsApp. To complete a booking, we require the date and time of service, pickup location, destination (if applicable), number of passengers, amount of luggage, preferred vehicle type, and any special requirements. For airport pickups, we also need flight details. Once we receive your request, we'll confirm availability and provide a quote within 2 hours. After your approval, you'll receive a booking confirmation with all details and chauffeur contact information."
    },
    {
      title: "Reservation Process",
      content: "Our reservation process is designed to be straightforward and efficient. You can make a reservation through our website, by phone (+49 176 3145 4340), email (bookings@premium-chauffer.com), or WhatsApp. We require essential information including service date and time, pickup location, destination, passenger count, luggage details, and any special requirements. For airport pickups, please provide flight information for tracking. Once we receive your request, our team will confirm availability and send a detailed quote within 2 hours. Upon your approval, we'll process the reservation and send a confirmation email with all relevant details. For last-minute bookings, we recommend calling directly for the fastest response."
    },
    {
      title: "Pricing",
      content: "Our pricing structure is transparent and based on several factors: vehicle type (S-Class, BMW 7 Series, or V-Class), service duration, distance traveled, time of day (standard or premium hours), and any special requirements. We offer hourly rates starting from €80 per hour for S-Class, €75 for BMW 7 Series, and €90 for V-Class. Half-day rates (4 hours) start from €300, and full-day rates (8 hours) from €550. Airport transfers have fixed rates based on destination, starting from €120. For tourism packages, prices range from €300 to €600 depending on duration and itinerary. All prices include professional chauffeur, fuel, insurance, and standard amenities. Additional services like extra waiting time or specific amenities may incur additional charges."
    },
    {
      title: "Service Areas",
      content: "We provide our premium chauffeur services throughout major metropolitan areas and their surrounding regions. Our primary service areas include Munich, Berlin, Frankfurt, Hamburg, and Cologne/Düsseldorf in Germany. We also operate in neighboring countries including Austria (Vienna, Salzburg), Switzerland (Zurich, Geneva), France (Strasbourg, Paris), and the Benelux region. For long-distance journeys between cities or countries, we offer competitive rates and experienced chauffeurs familiar with international travel requirements. If you're unsure whether we service your specific location, please contact our customer service team who can confirm availability and provide options for your journey."
    },
    {
      title: "Payment Methods",
      content: "We accept a variety of payment methods to accommodate our international clientele. These include major credit cards (Visa, MasterCard, American Express), bank transfers (domestic and international), PayPal, and cash payments (for certain services). For corporate clients, we offer invoice payment with net-30 terms upon credit approval. Prepayment is required for first-time clients and certain premium services. For tourism packages and multi-day bookings, we typically require a 50% deposit at the time of booking with the balance due before service begins. All transactions are secure, and we provide detailed receipts for all payments."
    }
  ],
  ar: [
    {
      title: "من نحن",
      content: "نحن خدمة نقل وسائقين متميزة نقدم سيارات فاخرة تشمل مرسيدس S-Class، وBMW الفئة السابعة، ومرسيدس V-Class. تشمل خدماتنا خدمة السائق، ونقل المطار، وخدمات كبار الشخصيات."
    },
    {
      title: "خدمات السيارات",
      content: "نقدم مجموعة من السيارات الفاخرة بما في ذلك مرسيدس S-Class، وBMW الفئة السابعة، ومرسيدس V-Class. تأتي كل سيارة مع سائق محترف وتتم صيانتها وفقًا لأعلى المعايير."
    },
    {
      title: "مرسيدس S-Class",
      content: "مرسيدس S-Class هي سيارتنا الرائدة الفاخرة، تمثل قمة الراحة والتطور. تتميز بمقاعد جلد نابا مصنوعة يدويًا مع وظائف التدفئة والتبريد والتدليك، تحكم في المناخ رباعي المناطق، إضاءة محيطة بـ 64 لونًا، فتحة سقف بانورامية، ونظام صوت محيطي متطور. تستوعب حتى 3 ركاب مع حقيبتين متوسطتي الحجم. مثالية للتنفيذيين، ونقل المطار، والمناسبات الخاصة."
    },
    {
      title: "BMW الفئة السابعة",
      content: "تجمع BMW الفئة السابعة بين الفخامة والأداء الديناميكي. تتميز بمقاعد جلدية فاخرة مع وظائف الذاكرة والتدليك، نظام BMW iDrive مع التحكم بالإيماءات، نظام صوت محيطي، سقف زجاجي بانورامي، وتقنيات متطورة للراحة. توفر تجربة قيادة رياضية مع الحفاظ على الراحة الاستثنائية. تستوعب حتى 3 ركاب مع حقيبتين كبيرتين. مثالية للتنفيذيين الذين يقدرون الفخامة والأداء."
    },
    {
      title: "مرسيدس V-Class",
      content: "مرسيدس V-Class هي سيارتنا الفان الفاخرة، توفر مساحة واسعة وراحة استثنائية. تتميز بمقاعد قابلة للتعديل تستوعب حتى 7 ركاب، مقاعد جلدية فاخرة مع تحكم فردي بالمناخ، سقف بانورامي، زجاج للخصوصية، أبواب منزلقة مع إغلاق كهربائي، وعزل صوتي متقدم. توفر مساحة واسعة للأمتعة حتى مع وجود كامل الركاب (تصل إلى 4 حقائب كبيرة). مثالية للسفر الجماعي، والرحلات العائلية، وفرق الشركات، ونقل المطار."
    },
    {
      title: "مقارنة السيارات",
      content: "عند الاختيار بين سياراتنا: توفر مرسيدس S-Class أعلى مستوى من الفخامة والراحة لما يصل إلى 3 ركاب، مثالية لنقل كبار الشخصيات والمناسبات الخاصة. توفر BMW الفئة السابعة توازنًا بين الفخامة والأداء الرياضي لما يصل إلى 3 ركاب، مثالية للتنفيذيين الذين يقدرون القيادة المستجيبة. تستوعب مرسيدس V-Class ما يصل إلى 7 ركاب مع مساحة واسعة للأمتعة، مما يجعلها مثالية للمجموعات والعائلات. جميع السيارات تأتي مع سائقين محترفين ومزايا فاخرة."
    },
    {
      title: "خدمة السائق",
      content: "سائقونا المحترفون مدربون على تقديم خدمة استثنائية. هم دقيقون، ومتحفظون، وعلى دراية بالمنطقة المحلية. جميع السائقين يتحدثون لغات متعددة ويرتدون الزي الرسمي."
    },
    {
      title: "خدمة نقل المطار",
      content: "نقدم خدمات نقل موثوقة من وإلى جميع المطارات الرئيسية. يتتبع سائقونا وصول الرحلات في الوقت الفعلي لضمان انتظارهم لك عند الهبوط. نشمل 60 دقيقة من وقت الانتظار للرحلات الدولية."
    },
    {
      title: "خدمة كبار الشخصيات",
      content: "تقدم خدمة كبار الشخصيات لدينا أعلى مستوى من الفخامة والتحفظ. يمكننا ترتيب أفراد الأمن، والتنسيق مع منظمي الفعاليات، وتقديم خدمات مخصصة لتلبية متطلباتك المحددة."
    },
    {
      title: "خدمات السياحة",
      content: "نقدم جولات مصحوبة بمرشدين إلى الوجهات الشهيرة، وجولات التسوق، والمدن الترفيهية، وزيارات المزارع. سائقونا على دراية بالمعالم السياحية المحلية ويمكنهم تقديم توصيات بناءً على اهتماماتك."
    },
    {
      title: "باقات السياحة",
      content: "نقدم العديد من باقات السياحة المميزة بما في ذلك مستكشف المدينة (جولة مدينة لمدة 4 ساعات)، ورحلة التسوق (تجربة تسوق فاخرة لمدة 6 ساعات)، ورحلة ساحلية (جولة ساحلية ليوم كامل)، والتراث الثقافي (جولة المواقع التاريخية). تشمل جميع الباقات سيارة فاخرة مع سائق محترف، ومياه معبأة، وخدمة واي فاي."
    },
    {
      title: "باقة مستكشف المدينة",
      content: "باقة مستكشف المدينة هي جولة مرشدة لمدة 4 ساعات لأهم معالم المدينة. سيأخذك السائق إلى المعالم الشهيرة، ونقاط المشاهدة الخلابة، والأحياء الشعبية. مثالية للزوار لأول مرة الذين يرغبون في الحصول على نظرة عامة على المدينة. تبدأ الأسعار من 300 يورو."
    },
    {
      title: "باقة رحلة التسوق",
      content: "رحلة التسوق هي تجربة تسوق فاخرة لمدة 6 ساعات. سيأخذك السائق إلى مناطق التسوق الراقية، والمتاجر الفاخرة، ومنافذ المصممين. سيساعد السائق في حمل الحقائب ويمكنه التوصية بأفضل المتاجر بناءً على تفضيلاتك. تبدأ الأسعار من 450 يورو."
    },
    {
      title: "باقة الرحلة الساحلية",
      content: "الرحلة الساحلية هي جولة ليوم كامل على طول الطرق الساحلية الخلابة. قم بزيارة الشواطئ الجميلة، والبلدات الساحلية الساحرة، واستمتع بإطلالات خلابة على المحيط. تتضمن وقتًا لتناول الغداء في مطعم مأكولات بحرية موصى به. تبدأ الأسعار من 600 يورو."
    },
    {
      title: "باقة التراث الثقافي",
      content: "تركز جولة التراث الثقافي على المواقع التاريخية، والمتاحف، والمعالم الثقافية. تعرف على التاريخ الغني للمنطقة وأهميتها الثقافية مع تعليق من سائقك المطلع. تبدأ الأسعار من 500 يورو ليوم كامل."
    },
    {
      title: "معلومات الاتصال",
      content: "يمكنك الوصول إلينا عبر الهاتف، أو البريد الإلكتروني، أو من خلال نموذج الاتصال على موقعنا. نحن متاحون على مدار الساعة طوال أيام الأسبوع للمساعدة في الحجوزات والاستفسارات."
    },
    {
      title: "عملية الحجز",
      content: "لحجز خدماتنا، يمكنك استخدام نموذج الاتصال على موقعنا، أو الاتصال بنا مباشرة، أو إرسال بريد إلكتروني. نحتاج إلى التاريخ، والوقت، وموقع الالتقاط، والوجهة، وعدد الركاب، وأي متطلبات خاصة."
    },
    {
      title: "الأسعار",
      content: "تعتمد أسعارنا على نوع السيارة، ومدة الرحلة، والمسافة. نقدم أسعارًا بالساعة، ونصف يوم، ويوم كامل. يرجى الاتصال بنا للحصول على عرض سعر مخصص."
    }
  ]
};

// Function to search the knowledge base with language support
const searchKnowledgeBase = (query, language = 'en', maxResults = 3) => {
  // Normalize query
  const normalizedQuery = query.toLowerCase();

  // Get knowledge base for current language
  const languageKnowledgeBase = KNOWLEDGE_BASE[language] || KNOWLEDGE_BASE.en;

  // Calculate relevance for each entry
  const results = languageKnowledgeBase.map(entry => {
    const title = entry.title.toLowerCase();
    const content = entry.content.toLowerCase();

    // Simple relevance calculation based on word matching
    let relevance = 0;

    // Check title and content for query terms
    normalizedQuery.split(' ').forEach(word => {
      if (word.length > 2) { // Ignore short words
        if (title.includes(word)) {
          relevance += 2;  // Title matches are weighted more heavily
        }
        if (content.includes(word)) {
          relevance += 1;
        }
      }
    });

    return {
      ...entry,
      relevance
    };
  })
  .filter(entry => entry.relevance > 0) // Only keep relevant entries
  .sort((a, b) => b.relevance - a.relevance) // Sort by relevance (highest first)
  .slice(0, maxResults); // Limit results

  return results;
};
const PocketFlowChatBot = () => {
  // Language state
  const [language, setLanguage] = useState('en'); // Default language is English
  const t = translations[language]; // Get translations for current language

  const [isOpen, setIsOpen] = useState(false);
  const [isFullPage, setIsFullPage] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content: translations[language].initialGreeting,
      read: true
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [currentForm, setCurrentForm] = useState(null); // 'contact', 'booking', or null
  const [formData, setFormData] = useState({});
  const [formStep, setFormStep] = useState(0);
  const [aiConnected, setAiConnected] = useState(true); // AI connection status indicator
  const [conversationHistory, setConversationHistory] = useState([
    {
      role: 'assistant',
      content: translations[language].initialGreeting
    }
  ]); // For AI context
  const [showQuickReplies, setShowQuickReplies] = useState(true); // Show quick replies initially
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);
  const messagesContainerRef = useRef(null);

  // Toggle language between English and Arabic
  const toggleLanguage = () => {
    const newLanguage = language === 'en' ? 'ar' : 'en';
    setLanguage(newLanguage);

    // Update initial message with new language
    if (messages.length === 1) {
      setMessages([
        {
          role: 'assistant',
          content: translations[newLanguage].initialGreeting,
          read: true
        }
      ]);
      setConversationHistory([
        {
          role: 'assistant',
          content: translations[newLanguage].initialGreeting
        }
      ]);
    }
  };

  // Toggle chat open/closed
  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  // Toggle full-page mode
  const toggleFullPageMode = () => {
    setIsFullPage(!isFullPage);
  };

  // Scroll to bottom of messages when messages change and mark messages as read
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });

      // Mark all assistant messages as read when they're visible
      if (isOpen) {
        const markMessagesAsRead = () => {
          setMessages(prevMessages =>
            prevMessages.map(msg =>
              msg.role === 'assistant' && !msg.read ? { ...msg, read: true } : msg
            )
          );
        };

        // Use a small timeout to ensure the messages are rendered
        setTimeout(markMessagesAsRead, 1000);
      }
    }
  }, [messages, isOpen]);

  // Focus input when chat is opened
  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  // Hide quick replies when user starts typing
  useEffect(() => {
    if (inputValue.trim().length > 0) {
      setShowQuickReplies(false);
    } else if (messages.length === 1) {
      // Show quick replies again if the user clears the input and we're at the start
      setShowQuickReplies(true);
    }
  }, [inputValue, messages.length]);

  // Function to detect intent from user message using AI
  const detectIntent = async (message, history) => {
    // First, try a simple keyword-based detection for faster response
    const lowerMessage = message.toLowerCase();

    // Contact intent keywords (English and Arabic)
    if (
      // English keywords
      lowerMessage.includes('contact') ||
      lowerMessage.includes('talk to someone') ||
      lowerMessage.includes('speak to a representative') ||
      lowerMessage.includes('get in touch') ||
      lowerMessage.includes('send a message') ||
      lowerMessage.includes('leave my details') ||
      lowerMessage.includes('email you') ||
      lowerMessage.includes('phone number') ||
      lowerMessage.includes('call you') ||
      lowerMessage.includes('need a contact') ||
      lowerMessage.includes('contact information') ||
      lowerMessage.includes('contact number') ||
      lowerMessage.includes('contact info') ||
      lowerMessage.includes('real person') ||
      lowerMessage.includes('human assistant') ||
      lowerMessage.includes('speak to human') ||
      lowerMessage.includes('speak with human') ||
      lowerMessage.includes('talk to human') ||
      lowerMessage.includes('talk with human') ||
      lowerMessage.includes('contact your team') ||
      lowerMessage.includes('reach out') ||
      // Arabic keywords
      lowerMessage.includes('اتصال') ||
      lowerMessage.includes('تواصل') ||
      lowerMessage.includes('التحدث') ||
      lowerMessage.includes('ممثل') ||
      lowerMessage.includes('رسالة') ||
      lowerMessage.includes('بريد إلكتروني') ||
      lowerMessage.includes('معلوماتي') ||
      lowerMessage.includes('رقم الهاتف') ||
      lowerMessage.includes('شخص حقيقي') ||
      lowerMessage.includes('مساعد بشري')
    ) {
      return 'contact';
    }

    // Booking intent keywords (English and Arabic)
    if (
      // English keywords
      lowerMessage.includes('book') ||
      lowerMessage.includes('reservation') ||
      lowerMessage.includes('schedule a ride') ||
      lowerMessage.includes('arrange transport') ||
      lowerMessage.includes('hire a car') ||
      lowerMessage.includes('need a chauffeur') ||
      lowerMessage.includes('make an appointment') ||
      lowerMessage.includes('reserve') ||
      lowerMessage.includes('pickup') ||
      // Arabic keywords
      lowerMessage.includes('حجز') ||
      lowerMessage.includes('حجوزات') ||
      lowerMessage.includes('موعد') ||
      lowerMessage.includes('سيارة') ||
      lowerMessage.includes('سائق') ||
      lowerMessage.includes('نقل') ||
      lowerMessage.includes('رحلة') ||
      lowerMessage.includes('توصيل')
    ) {
      return 'booking';
    }

    // For more complex queries, use AI to determine intent
    try {
      const systemPrompt = `You are an intent classifier for a transportation and chauffeur service chatbot.
The user may be writing in English or Arabic.

Analyze the user's message and determine if they want to:
1. Make a booking/reservation (return "booking")
2. Contact the company (return "contact")
3. Just ask a general question (return "general")

Return ONLY ONE of these three values: "booking", "contact", or "general". No other text.`;

      // Format conversation history for context
      const formattedHistory = history.slice(-5).map(msg => ({
        role: msg.role,
        content: msg.content
      }));

      // Add the current message
      formattedHistory.push({
        role: 'user',
        content: message
      });

      // Call the AI to determine intent
      const intentResponse = await callOpenRouterAPI(formattedHistory, systemPrompt, setAiConnected);

      // Parse the response
      const cleanedResponse = intentResponse.trim().toLowerCase();

      if (cleanedResponse.includes('booking')) {
        return 'booking';
      } else if (cleanedResponse.includes('contact')) {
        return 'contact';
      } else {
        return 'general';
      }
    } catch (error) {
      console.error('Error detecting intent with AI:', error);
      // Fall back to general intent if AI fails
      return 'general';
    }
  };

  // Function to handle the contact form process with AI-powered conversational flow
  const handleContactForm = async (userInput) => {
    // Check if user is explicitly asking for contact information again during contact form
    const lowerInput = userInput.toLowerCase();
    if (
      lowerInput.includes('contact information') ||
      lowerInput.includes('contact info') ||
      lowerInput.includes('need contact') ||
      lowerInput.includes('want contact') ||
      lowerInput.includes('real person') ||
      lowerInput.includes('human assistant') ||
      lowerInput.includes('speak to human') ||
      lowerInput.includes('talk to human') ||
      lowerInput.includes('contact number') ||
      lowerInput.includes('phone number')
    ) {
      // Force contact response with direct contact information
      const contactResponse = language === 'en'
        ? "Contact us: +49 176 3145 4340 or info@premium-chauffer.com (available 24/7)"
        : "معلومات الاتصال: +49 176 3145 4340 أو info@premium-chauffer.com (متاح على مدار الساعة)";

      const assistantMsg = {
        role: 'assistant',
        content: contactResponse,
        read: false,
        showDirectContact: true // Always show direct contact links
      };

      setMessages(prev => [...prev, assistantMsg]);
      setConversationHistory(prev => [...prev, assistantMsg]);

      // Continue with the contact form
      return;
    }

    // Define the steps for collecting contact information with translations
    const steps = [
      { field: 'name', prompt: t.contactFormGreeting },
      { field: 'email', prompt: t.contactFormEmail },
      { field: 'message', prompt: t.contactFormMessage },
      { field: 'confirm', prompt: t.contactFormConfirm }
    ];

    // If we're just starting the form
    if (formStep === 0) {
      // Use AI to generate a welcoming response
      const systemPrompt = `You are Alexander Weber, Executive Manager of Premium Chauffeur Service.

CRITICAL INSTRUCTIONS - FOLLOW EXACTLY:
- EXTREMELY CONCISE response - maximum 2 sentences only
- Respond in ${language === 'en' ? 'English' : 'Arabic'} only
- Include ONLY this contact information: "+49 176 3145 4340 or info@premium-chauffer.com"
- Ask for their name in a direct way
- NO long explanations or paragraphs

EXACT RESPONSE FORMAT:
"Thank you for contacting Premium Chauffeur Service. Please share your name so our team can assist you. Contact: +49 176 3145 4340"`;

      try {
        // Get AI response for the initial contact greeting
        const aiResponse = await callOpenRouterAPI([{ role: 'user', content: userInput }], systemPrompt, setAiConnected);

        // Add the response to messages and conversation history with direct contact links
        const assistantMsg = {
          role: 'assistant',
          content: aiResponse,
          showDirectContact: true // Always show direct contact links immediately
        };
        setMessages(prev => [...prev, assistantMsg]);
        setConversationHistory(prev => [...prev, assistantMsg]);

        // Initialize form data and move to next step
        setFormData({});
        setFormStep(1);
      } catch (error) {
        console.error('Error generating contact form greeting:', error);
        // Fall back to standard prompt if AI fails
        setMessages(prev => [...prev, {
          role: 'assistant',
          content: steps[0].prompt,
          showDirectContact: true // Always show direct contact links immediately
        }]);
        setFormData({});
        setFormStep(1);
      }
      return;
    }

    // Update form data with user input
    const updatedFormData = { ...formData };

    // Handle the current step
    if (formStep <= steps.length) {
      const currentStepIndex = formStep - 1;
      const currentStep = steps[currentStepIndex];

      // If this is the confirmation step
      if (currentStep.field === 'confirm') {
        const userConfirms = userInput.toLowerCase().includes('yes') ||
                            userInput.toLowerCase().includes('sure') ||
                            userInput.toLowerCase().includes('ok') ||
                            userInput.toLowerCase().includes('send');

        if (userConfirms) {
          // Submit the form
          setIsLoading(true);
          const success = await submitContactForm(updatedFormData);
          setIsLoading(false);

          if (success) {
            // Use AI to generate a personalized thank you message
            try {
              const thankYouPrompt = `You are Alexander Weber, Executive Manager of Premium Chauffeur Service.

CRITICAL INSTRUCTIONS - FOLLOW EXACTLY:
- EXTREMELY CONCISE response - maximum 2 sentences only
- Respond in ${language === 'en' ? 'English' : 'Arabic'} only
- Thank ${updatedFormData.name} by name
- Confirm message received
- NO long explanations

EXACT RESPONSE FORMAT:
"Thank you, ${updatedFormData.name}! Your message has been received and our team will contact you shortly. ✓"`;

              const thankYouResponse = await callOpenRouterAPI([], thankYouPrompt, setAiConnected);
              setMessages(prev => [...prev, { role: 'assistant', content: thankYouResponse }]);
              setConversationHistory(prev => [...prev, { role: 'assistant', content: thankYouResponse }]);
            } catch (error) {
              // Fall back to standard message if AI fails
              const thankYouMsg = {
                role: 'assistant',
                content: t.contactFormSuccess.replace('{name}', updatedFormData.name).replace('{email}', updatedFormData.email),
                read: false
              };
              setMessages(prev => [...prev, thankYouMsg]);
              setConversationHistory(prev => [...prev, thankYouMsg]);
            }
          } else {
            setMessages(prev => [...prev, {
              role: 'assistant',
              content: t.contactFormError.replace('{name}', updatedFormData.name),
              read: false
            }]);
          }

          // Reset form state
          setCurrentForm(null);
          setFormStep(0);
          setFormData({});
        } else {
          // User doesn't want to submit
          setMessages(prev => [...prev, {
            role: 'assistant',
            content: t.contactFormCancelled.replace('{name}', updatedFormData.name),
            read: false
          }]);

          // Reset form state
          setCurrentForm(null);
          setFormStep(0);
          setFormData({});
        }
        return;
      }

      // Store the user's input for the current field
      updatedFormData[currentStep.field] = userInput;
      setFormData(updatedFormData);

      // Move to the next step
      const nextStep = steps[formStep];
      if (nextStep) {
        // Replace placeholders in the prompt with actual values
        let nextPrompt = nextStep.prompt;
        Object.keys(updatedFormData).forEach(key => {
          nextPrompt = nextPrompt.replace(`{${key}}`, updatedFormData[key]);
        });

        // Add the next prompt to messages
        const nextMsg = { role: 'assistant', content: nextPrompt };
        setMessages(prev => [...prev, nextMsg]);
        setConversationHistory(prev => [...prev, nextMsg]);
        setFormStep(formStep + 1);
      }
    }
  };

  // Function to handle the booking form process with AI-powered conversational flow
  const handleBookingForm = async (userInput) => {
    // Check if user is asking for contact information during booking process
    const lowerInput = userInput.toLowerCase();
    if (
      lowerInput.includes('contact information') ||
      lowerInput.includes('contact info') ||
      lowerInput.includes('need contact') ||
      lowerInput.includes('want contact') ||
      lowerInput.includes('real person') ||
      lowerInput.includes('human assistant') ||
      lowerInput.includes('speak to human') ||
      lowerInput.includes('talk to human') ||
      lowerInput.includes('contact number') ||
      lowerInput.includes('phone number')
    ) {
      // Force contact response with direct contact information
      const contactResponse = language === 'en'
        ? "Contact us: +49 176 3145 4340 or info@premium-chauffer.com (available 24/7)"
        : "معلومات الاتصال: +49 176 3145 4340 أو info@premium-chauffer.com (متاح على مدار الساعة)";

      const assistantMsg = {
        role: 'assistant',
        content: contactResponse,
        read: false,
        showDirectContact: true // Always show direct contact links
      };

      setMessages(prev => [...prev, assistantMsg]);
      setConversationHistory(prev => [...prev, assistantMsg]);

      // Don't reset the booking form - allow the user to continue after getting contact info
      return;
    }

    // Define the steps for collecting booking information with translations
    const steps = [
      { field: 'startLocation', prompt: t.bookingFormGreeting },
      { field: 'destination', prompt: t.bookingFormDestination },
      { field: 'date', prompt: t.bookingFormDate },
      { field: 'time', prompt: t.bookingFormTime },
      { field: 'passengers', prompt: t.bookingFormPassengers },
      { field: 'vehicleType', prompt: t.bookingFormVehicle },
      { field: 'name', prompt: t.bookingFormName },
      { field: 'email', prompt: t.bookingFormEmail },
      { field: 'phone', prompt: t.bookingFormPhone },
      { field: 'specialRequests', prompt: t.bookingFormSpecialRequests },
      { field: 'confirm', prompt: t.bookingFormConfirm }
    ];

    // If we're just starting the form
    if (formStep === 0) {
      // Use AI to generate a welcoming response
      const systemPrompt = `You are Alexander Weber, Executive Manager of Premium Chauffeur Service.

CRITICAL INSTRUCTIONS - FOLLOW EXACTLY:
- EXTREMELY CONCISE response - maximum 2 sentences only
- Respond in ${language === 'en' ? 'English' : 'Arabic'} only
- Ask ONLY for pickup location
- NO long explanations or paragraphs

EXACT RESPONSE FORMAT:
"Thank you for choosing Premium Chauffeur Service. Please provide your pickup location to begin your booking."`;

      try {
        // Get AI response for the initial booking greeting
        const aiResponse = await callOpenRouterAPI([{ role: 'user', content: userInput }], systemPrompt, setAiConnected);

        // Add the response to messages and conversation history
        const assistantMsg = { role: 'assistant', content: aiResponse };
        setMessages(prev => [...prev, assistantMsg]);
        setConversationHistory(prev => [...prev, assistantMsg]);

        // Initialize form data and move to next step
        setFormData({});
        setFormStep(1);
      } catch (error) {
        console.error('Error generating booking form greeting:', error);
        // Fall back to standard prompt if AI fails
        setMessages(prev => [...prev, { role: 'assistant', content: steps[0].prompt }]);
        setFormData({});
        setFormStep(1);
      }
      return;
    }

    // Update form data with user input
    const updatedFormData = { ...formData };

    // Handle the current step
    if (formStep <= steps.length) {
      const currentStepIndex = formStep - 1;
      const currentStep = steps[currentStepIndex];

      // If this is the confirmation step
      if (currentStep.field === 'confirm') {
        const userConfirms = userInput.toLowerCase().includes('yes') ||
                            userInput.toLowerCase().includes('sure') ||
                            userInput.toLowerCase().includes('ok') ||
                            userInput.toLowerCase().includes('confirm') ||
                            userInput.toLowerCase().includes('book');

        if (userConfirms) {
          // Submit the form
          setIsLoading(true);
          const success = await submitBookingForm(updatedFormData);
          setIsLoading(false);

          if (success) {
            // Use AI to generate a personalized confirmation message
            try {
              const confirmationPrompt = `You are Alexander Weber, Executive Manager of Premium Chauffeur Service.

CRITICAL INSTRUCTIONS - FOLLOW EXACTLY:
- EXTREMELY CONCISE response - maximum 2 sentences only
- Respond in ${language === 'en' ? 'English' : 'Arabic'} only
- Thank ${updatedFormData.name} by name
- Mention ONLY date and vehicle type
- NO long explanations

EXACT RESPONSE FORMAT:
"Booking confirmed, ${updatedFormData.name}! Your ${updatedFormData.vehicleType} will arrive on ${updatedFormData.date} at ${updatedFormData.time}. Our team will contact you shortly with final details. ✓"`;

              const confirmationResponse = await callOpenRouterAPI([], confirmationPrompt, setAiConnected);
              setMessages(prev => [...prev, { role: 'assistant', content: confirmationResponse }]);
              setConversationHistory(prev => [...prev, { role: 'assistant', content: confirmationResponse }]);
            } catch (error) {
              // Fall back to standard message if AI fails
              const confirmationMsg = {
                role: 'assistant',
                content: t.bookingFormSuccess
                  .replace('{name}', updatedFormData.name)
                  .replace('{vehicleType}', updatedFormData.vehicleType)
                  .replace('{date}', updatedFormData.date)
                  .replace('{time}', updatedFormData.time)
                  .replace('{email}', updatedFormData.email),
                read: false
              };
              setMessages(prev => [...prev, confirmationMsg]);
              setConversationHistory(prev => [...prev, confirmationMsg]);
            }
          } else {
            setMessages(prev => [...prev, {
              role: 'assistant',
              content: t.bookingFormError.replace('{name}', updatedFormData.name),
              read: false
            }]);
          }

          // Reset form state
          setCurrentForm(null);
          setFormStep(0);
          setFormData({});
        } else {
          // User doesn't want to submit
          setMessages(prev => [...prev, {
            role: 'assistant',
            content: t.bookingFormCancelled.replace('{name}', updatedFormData.name),
            read: false
          }]);

          // Reset form state
          setCurrentForm(null);
          setFormStep(0);
          setFormData({});
        }
        return;
      }

      // Special handling for vehicle type to validate input
      if (currentStep.field === 'vehicleType') {
        const lowerInput = userInput.toLowerCase();
        let vehicleType = '';

        if (lowerInput.includes('s-class') || lowerInput.includes('s class') || lowerInput.includes('mercedes s')) {
          vehicleType = 'Mercedes S-Class';
        } else if (lowerInput.includes('bmw') || lowerInput.includes('7 series')) {
          vehicleType = 'BMW 7 Series';
        } else if (lowerInput.includes('v-class') || lowerInput.includes('v class') || lowerInput.includes('mercedes v') || lowerInput.includes('van')) {
          vehicleType = 'Mercedes V-Class';
        } else {
          // If input doesn't match any vehicle, ask again
          setMessages(prev => [...prev, {
            role: 'assistant',
            content: t.bookingFormVehicleError,
            read: false
          }]);
          return;
        }

        // Store the normalized vehicle type
        updatedFormData[currentStep.field] = vehicleType;
      } else {
        // Store the user's input for other fields
        updatedFormData[currentStep.field] = userInput;
      }

      setFormData(updatedFormData);

      // Move to the next step
      const nextStep = steps[formStep];
      if (nextStep) {
        // Replace placeholders in the prompt with actual values
        let nextPrompt = nextStep.prompt;
        Object.keys(updatedFormData).forEach(key => {
          nextPrompt = nextPrompt.replace(`{${key}}`, updatedFormData[key]);
        });

        // Try to use AI to make the response more conversational
        try {
          // Only use AI for certain transitions to keep the form flow efficient
          if (['destination', 'time', 'vehicleType', 'name', 'specialRequests'].includes(nextStep.field)) {
            const transitionPrompt = `You are a helpful assistant for a premium transportation service.
The user is in the middle of making a booking and has just provided: ${currentStep.field}: ${updatedFormData[currentStep.field]}.
Now you need to ask them for their ${nextStep.field}.

LANGUAGE:
- The user is communicating in ${language === 'en' ? 'English' : 'Arabic'}
- You MUST respond in ${language === 'en' ? 'English' : 'Arabic'} only

The standard prompt would be: "${nextPrompt}"

Rewrite this as a more natural, conversational response that acknowledges what they just told you and smoothly transitions to asking for the next piece of information.
Keep it concise (1-2 sentences).`;

            const aiNextPrompt = await callOpenRouterAPI([], transitionPrompt, setAiConnected);
            const nextMsg = { role: 'assistant', content: aiNextPrompt };
            setMessages(prev => [...prev, nextMsg]);
            setConversationHistory(prev => [...prev, nextMsg]);
          } else {
            // Use standard prompt for other fields
            const nextMsg = { role: 'assistant', content: nextPrompt };
            setMessages(prev => [...prev, nextMsg]);
            setConversationHistory(prev => [...prev, nextMsg]);
          }
        } catch (error) {
          console.error('Error generating conversational transition:', error);
          // Fall back to standard prompt
          const nextMsg = { role: 'assistant', content: nextPrompt };
          setMessages(prev => [...prev, nextMsg]);
          setConversationHistory(prev => [...prev, nextMsg]);
        }

        setFormStep(formStep + 1);
      }
    }
  };

  // Function to handle feedback submission
  const handleFeedback = (isPositive) => {
    // Here you could send the feedback to your analytics system
    // For now, we'll just acknowledge it with a message
    const feedbackMsg = isPositive
      ? t.feedbackThanksPositive
      : t.feedbackThanksNegative;

    setMessages(prev => [...prev, {
      role: 'assistant',
      content: feedbackMsg,
      read: false
    }]);

    // Hide feedback UI after submission
    const lastMsgIndex = messages.length - 1;
    setMessages(prev =>
      prev.map((msg, idx) =>
        idx === lastMsgIndex ? { ...msg, showFeedback: false } : msg
      )
    );
  };

  // This function processes messages using AI and handles forms
  const processMessage = async (message) => {
    // Get the user message
    const userMessage = message;
    const lowerMessage = userMessage.toLowerCase();

    // Add user message to chat and conversation history
    const userMsg = { role: 'user', content: userMessage };
    setMessages(prev => [...prev, userMsg]);
    setConversationHistory(prev => [...prev, userMsg]);
    setIsLoading(true);

    // Check for direct contact keywords - override everything else for these specific phrases
    if (
      lowerMessage.includes('contact information') ||
      lowerMessage.includes('contact info') ||
      lowerMessage.includes('need contact') ||
      lowerMessage.includes('want contact') ||
      lowerMessage.includes('real person') ||
      lowerMessage.includes('human assistant') ||
      lowerMessage.includes('speak to human') ||
      lowerMessage.includes('talk to human') ||
      lowerMessage.includes('contact number') ||
      lowerMessage.includes('phone number')
    ) {
      // Force contact response with direct contact information
      const contactResponse = language === 'en'
        ? "Contact us: +49 176 3145 4340 or info@premium-chauffer.com (available 24/7)"
        : "معلومات الاتصال: +49 176 3145 4340 أو info@premium-chauffer.com (متاح على مدار الساعة)";

      const assistantMsg = {
        role: 'assistant',
        content: contactResponse,
        read: false,
        showDirectContact: true // Always show direct contact links
      };

      setMessages(prev => [...prev, assistantMsg]);
      setConversationHistory(prev => [...prev, assistantMsg]);
      setIsLoading(false);
      return;
    }

    try {
      // If we're in the middle of a form, continue with it
      if (currentForm === 'contact') {
        await handleContactForm(userMessage);
        setIsLoading(false);
        return;
      } else if (currentForm === 'booking') {
        await handleBookingForm(userMessage);
        setIsLoading(false);
        return;
      }

      // Detect intent if we're not in a form
      const intent = await detectIntent(userMessage, conversationHistory);

      // Handle different intents
      if (intent === 'contact') {
        setCurrentForm('contact');
        await handleContactForm(userMessage);
        setIsLoading(false);
        return;
      } else if (intent === 'booking') {
        setCurrentForm('booking');
        await handleBookingForm(userMessage);
        setIsLoading(false);
        return;
      }

      // For general inquiries, use AI with knowledge base context
      // First, get relevant information from the knowledge base in the current language
      const knowledgeBaseResults = searchKnowledgeBase(userMessage, language);

      // Check for vehicle-related questions
      const isVehicleQuestion = userMessage.toLowerCase().includes('vehicle') ||
                               userMessage.toLowerCase().includes('car') ||
                               userMessage.toLowerCase().includes('mercedes') ||
                               userMessage.toLowerCase().includes('bmw');

      // Check if this is a contact information request
      const isContactRequest = userMessage.toLowerCase().includes('contact') ||
                              userMessage.toLowerCase().includes('phone') ||
                              userMessage.toLowerCase().includes('email') ||
                              userMessage.toLowerCase().includes('whatsapp') ||
                              userMessage.toLowerCase().includes('reach') ||
                              userMessage.toLowerCase().includes('call');

      // Create a system prompt with the knowledge base information
      let systemPrompt = `You are Alexander Weber, Executive Manager of Premium Chauffeur Service.

CRITICAL INSTRUCTIONS - FOLLOW EXACTLY:
- EXTREMELY CONCISE responses - maximum 2-3 short sentences only
- Respond in ${language === 'en' ? 'English' : 'Arabic'} only
- NO long explanations or paragraphs
- DIRECT answers only
- Use ** for emphasis (e.g., **Mercedes S-Class**)
- ONE emoji maximum per response
- DO NOT include contact information unless specifically asked for it
${isContactRequest ? '- For contact requests, mention that contact options will appear below your message' : ''}

${isVehicleQuestion ? 'VEHICLE QUESTION DETECTED - USE THIS EXACT RESPONSE FORMAT:' : 'EXACT RESPONSE FORMAT:'}
${isVehicleQuestion ?
  '"Our fleet includes **Mercedes S-Class**, **BMW 7 Series**, and **Mercedes V-Class** vehicles—each offering comfort, style, and top-tier safety."' :
  isContactRequest ?
    '"You can reach our team via phone, email, or WhatsApp. Contact options will appear below this message."' :
    '"[Concise answer to question in 1-2 sentences]"'}

REMEMBER: EXTREME BREVITY IS MANDATORY. Your entire response should be 2-3 lines maximum.

SERVICES INFORMATION:
Here is detailed information about our services that you can use to answer questions:`;

      // Add knowledge base information to the system prompt
      if (knowledgeBaseResults.length > 0) {
        knowledgeBaseResults.forEach(entry => {
          systemPrompt += `\n\n${entry.title}:\n${entry.content}`;
        });
      } else {
        // Add general information if no specific matches
        if (language === 'en') {
          systemPrompt += `\n\nWe offer premium chauffeur services including:
- Luxury vehicles (Mercedes S-Class, BMW 7 Series, Mercedes V-Class)
- Airport transfers
- VIP services
- Tourism and sightseeing
- Corporate transportation`;
        } else {
          systemPrompt += `\n\nنقدم خدمات سائق متميزة تشمل:
- سيارات فاخرة (مرسيدس S-Class، BMW الفئة السابعة، مرسيدس V-Class)
- خدمات نقل المطار
- خدمات كبار الشخصيات
- السياحة ومشاهدة المعالم
- خدمات النقل للشركات`;
        }
      }

      // Format conversation history for context (last 5 messages)
      const formattedHistory = conversationHistory.slice(-5).map(msg => ({
        role: msg.role,
        content: msg.content
      }));

      // Get AI response
      const aiResponse = await callOpenRouterAPI(formattedHistory, systemPrompt, setAiConnected);

      // Always show direct contact links for contact requests
      const needsDirectContact = isContactRequest ||
        aiResponse.toLowerCase().includes("contact us directly") ||
        aiResponse.toLowerCase().includes("contact our team") ||
        aiResponse.toLowerCase().includes("reach out to us") ||
        aiResponse.toLowerCase().includes("get in touch with us") ||
        aiResponse.toLowerCase().includes("call us") ||
        aiResponse.toLowerCase().includes("send us an email") ||
        aiResponse.toLowerCase().includes("whatsapp") ||
        aiResponse.toLowerCase().includes("contact options") ||
        aiResponse.toLowerCase().includes("التواصل معنا مباشرة") ||
        aiResponse.toLowerCase().includes("الاتصال بفريقنا") ||
        aiResponse.toLowerCase().includes("التواصل معنا") ||
        aiResponse.toLowerCase().includes("اتصل بنا") ||
        aiResponse.toLowerCase().includes("أرسل لنا بريدًا إلكترونيًا") ||
        aiResponse.toLowerCase().includes("واتساب");

      // Add the response to messages and conversation history with feedback option
      const assistantMsg = {
        role: 'assistant',
        content: aiResponse,
        read: false,
        showFeedback: true, // Add feedback UI for AI responses
        showDirectContact: needsDirectContact // Show direct contact links if needed
      };
      setMessages(prev => [...prev, assistantMsg]);
      setConversationHistory(prev => [...prev, assistantMsg]);
    } catch (error) {
      console.error('Error processing message:', error);
      const errorMsg = {
        role: 'assistant',
        content: t.generalError,
        read: false,
        showDirectContact: true // Always show direct contact links on error
      };
      setMessages(prev => [...prev, errorMsg]);
      setConversationHistory(prev => [...prev, errorMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() && !isLoading) {
      processMessage(inputValue.trim());
      setInputValue('');
    }
  };

  // Clear chat history
  const clearChat = () => {
    const initialMessage = {
      role: 'assistant',
      content: t.initialGreeting,
      read: true
    };

    setMessages([initialMessage]);
    setConversationHistory([initialMessage]);

    // Reset form state
    setCurrentForm(null);
    setFormStep(0);
    setFormData({});

    // Show quick replies again
    setShowQuickReplies(true);
  };

  return (
    <>
      {/* Full Page Chat Interface */}
      {isFullPage && (
        <FullPageChatBot
          messages={messages}
          inputValue={inputValue}
          setInputValue={setInputValue}
          isLoading={isLoading}
          handleSubmit={handleSubmit}
          language={language}
          t={t}
          aiConnected={aiConnected}
          showQuickReplies={showQuickReplies}
          handleFeedback={handleFeedback}
          clearChat={clearChat}
          toggleLanguage={toggleLanguage}
          onClose={toggleFullPageMode}
        />
      )}

      {/* Chat Interface */}
      {isOpen && !isFullPage && (
        <div
          className="fixed bottom-24 right-6 z-40 w-96 sm:w-[450px] md:w-[500px] h-[600px] bg-black-100 rounded-lg shadow-xl flex flex-col overflow-hidden border border-secondary"
          style={{
            boxShadow: '0 0 20px rgba(0, 0, 0, 0.5), 0 0 10px rgba(212, 175, 55, 0.3)',
            animation: 'fadeIn 0.3s ease-out',
            direction: language === 'ar' ? 'rtl' : 'ltr'
          }}
        >
          {/* Chat header */}
          <div className="flex items-center justify-between p-4 bg-gradient-to-r from-black-200 to-black-100 border-b border-secondary">
            <div className="flex items-center">
              {/* Luxury car icon with AI connection indicator */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-6 w-6 mr-2 text-secondary ${aiConnected ? 'ai-connected' : ''}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
              </svg>
              {/* Clickable chat title to open full-page mode */}
              <div
                className="flex items-center cursor-pointer group"
                onClick={toggleFullPageMode}
                title="Open full-page chat"
              >
                <h3 className="font-medium text-secondary group-hover:text-gold-200 transition-colors duration-300">
                  {t.chatTitle}
                </h3>
                {/* Expand icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 ml-1 text-secondary group-hover:text-gold-200 transition-colors duration-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5v-4m0 4h-4m4 0l-5-5"
                  />
                </svg>
              </div>

            </div>
            <div className="flex space-x-2">
              {/* Language toggle button */}
              <button
                onClick={toggleLanguage}
                className="p-1 hover:bg-black-200 rounded transition-colors duration-300"
                aria-label="Switch language"
                title="Switch language"
              >
                <span className="text-secondary text-sm font-medium">{t.switchLanguage}</span>
              </button>

              {/* Clear chat button */}
              <button
                onClick={clearChat}
                className="p-1 hover:bg-black-200 rounded transition-colors duration-300"
                aria-label="Clear chat"
                title={t.clearChat}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
              </button>
            </div>
          </div>

          {/* Chat messages */}
          <div className="flex-1 p-4 overflow-y-auto bg-black-100" ref={messagesContainerRef}>
            {messages.map((message, index) => (
              <div
                key={index}
                className={`mb-4 ${message.role === 'user' ?
                  (language === 'ar' ? 'text-left' : 'text-right') :
                  (language === 'ar' ? 'text-right' : 'text-left')}`}
              >
                <div className="relative">
                  <div
                    className={`inline-block p-3 rounded-lg max-w-[80%] ${
                      message.role === 'user'
                        ? language === 'ar'
                          ? 'bg-tertiary border border-secondary text-white-100 rounded-bl-none'
                          : 'bg-tertiary border border-secondary text-white-100 rounded-br-none'
                        : language === 'ar'
                          ? 'bg-black-200 border border-gold-200 text-white-100 rounded-br-none'
                          : 'bg-black-200 border border-gold-200 text-white-100 rounded-bl-none'
                    }`}
                    style={{
                      animation: 'slideIn 0.3s ease-out',
                      animationDelay: `${index * 0.1}s`
                    }}
                  >
                    {message.content}
                  </div>

                  {/* Read receipt for user messages */}
                  {message.role === 'user' && (
                    <div className="text-xs text-gold-200 mt-1 mr-1 text-right">
                      {index < messages.length - 1 && messages[index + 1].role === 'assistant' ? (
                        <span className="flex items-center justify-end">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {t.readReceipt}
                        </span>
                      ) : (
                        <span className="flex items-center justify-end">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
                          </svg>
                          {t.sentReceipt}
                        </span>
                      )}
                    </div>
                  )}

                  {/* Feedback UI for assistant messages */}
                  {message.role === 'assistant' && message.showFeedback && (
                    <div className="mt-2 flex justify-start space-x-2">
                      <button
                        onClick={() => handleFeedback(true)}
                        className="flex items-center px-2 py-1 bg-black-200 border border-gold-200 text-gold-200 rounded-lg hover:bg-black-300 transition-colors duration-300 text-xs"
                        aria-label="Helpful"
                        title="This was helpful"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                        </svg>
                        {t.helpful}
                      </button>
                      <button
                        onClick={() => handleFeedback(false)}
                        className="flex items-center px-2 py-1 bg-black-200 border border-gold-200 text-gold-200 rounded-lg hover:bg-black-300 transition-colors duration-300 text-xs"
                        aria-label="Not helpful"
                        title="This was not helpful"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14H5.236a2 2 0 01-1.789-2.894l3.5-7A2 2 0 018.736 3h4.018a2 2 0 01.485.06l3.76.94m-7 10v5a2 2 0 002 2h.096c.5 0 .905-.405.905-.904 0-.715.211-1.413.608-2.008L17 13V4m-7 10h2" />
                        </svg>
                        {t.notHelpful}
                      </button>
                    </div>
                  )}

                  {/* Direct Contact Links */}
                  {message.role === 'assistant' && message.showDirectContact && (
                    <div className="mt-3">
                      <DirectContactLinks language={language} />
                    </div>
                  )}
                </div>
              </div>
            ))}

            {/* Typing indicator with improved animation */}
            {isLoading && (
              <div className="text-left mb-4">
                <div
                  className="inline-block p-3 rounded-lg max-w-[80%] bg-black-200 border border-gold-200 text-white-100 rounded-bl-none"
                  style={{ animation: 'fadeIn 0.3s ease-out' }}
                >
                  <div className="flex items-center">
                    <span className="text-sm text-gold-200 mr-2">{t.typingIndicator}</span>
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-secondary rounded-full animate-typing"></div>
                      <div className="w-2 h-2 bg-secondary rounded-full animate-typing" style={{ animationDelay: '0.2s' }}></div>
                      <div className="w-2 h-2 bg-secondary rounded-full animate-typing" style={{ animationDelay: '0.4s' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Quick reply buttons */}
            {showQuickReplies && messages.length === 1 && (
              <div className="mt-4 mb-2 flex flex-wrap gap-2 justify-center" style={{ animation: 'fadeIn 0.5s ease-out' }}>
                <button
                  onClick={() => {
                    setInputValue(language === 'en' ? "I'd like to book a chauffeur service" : "أرغب في حجز خدمة سائق");
                    handleSubmit({ preventDefault: () => {} });
                  }}
                  className="px-3 py-2 bg-black-200 border border-secondary text-secondary rounded-lg hover:bg-black-300 transition-colors duration-300 text-sm"
                >
                  {t.bookChauffeur}
                </button>
                <button
                  onClick={() => {
                    setInputValue(language === 'en' ? "I need contact information" : "أحتاج معلومات الاتصال");
                    handleSubmit({ preventDefault: () => {} });
                  }}
                  className="px-3 py-2 bg-black-200 border border-secondary text-secondary rounded-lg hover:bg-black-300 transition-colors duration-300 text-sm"
                >
                  {t.contactUs}
                </button>
                <button
                  onClick={() => {
                    setInputValue(language === 'en' ? "What vehicles do you offer?" : "ما هي السيارات التي تقدمونها؟");
                    handleSubmit({ preventDefault: () => {} });
                  }}
                  className="px-3 py-2 bg-black-200 border border-secondary text-secondary rounded-lg hover:bg-black-300 transition-colors duration-300 text-sm"
                >
                  {t.ourVehicles}
                </button>
                <button
                  onClick={() => {
                    setInputValue(language === 'en' ? "Tell me about your services" : "أخبرني عن خدماتكم");
                    handleSubmit({ preventDefault: () => {} });
                  }}
                  className="px-3 py-2 bg-black-200 border border-secondary text-secondary rounded-lg hover:bg-black-300 transition-colors duration-300 text-sm"
                >
                  {t.ourServices}
                </button>
                <button
                  onClick={() => {
                    setInputValue(language === 'en' ? "What tourism packages do you offer?" : "ما هي باقات السياحة التي تقدمونها؟");
                    handleSubmit({ preventDefault: () => {} });
                  }}
                  className="px-3 py-2 bg-black-200 border border-secondary text-secondary rounded-lg hover:bg-black-300 transition-colors duration-300 text-sm"
                >
                  {t.tourPackages}
                </button>
              </div>
            )}

            {/* Invisible element to scroll to */}
            <div ref={messagesEndRef} />
          </div>

          {/* Chat input */}
          <form onSubmit={handleSubmit} className="p-4 border-t border-secondary bg-black-200">
            <div className="flex space-x-2">
              <input
                ref={inputRef}
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder={t.inputPlaceholder}
                className="flex-1 p-2 bg-tertiary border border-gold-200 text-white-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
                style={{ animation: 'borderPulse 3s infinite' }}
                disabled={isLoading}
              />
              <button
                type="submit"
                className="p-2 bg-black-100 border border-secondary text-secondary rounded-lg hover:bg-black-200 focus:outline-none focus:ring-2 focus:ring-secondary disabled:opacity-50 transition-colors duration-300"
                disabled={!inputValue.trim() || isLoading}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Chat Bubble Button - only show when not in full-page mode */}
      {!isFullPage && (
        <button
          onClick={toggleChat}
          className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-16 h-16
                    rounded-full bg-black-100 border-2 border-secondary text-secondary shadow-lg cursor-pointer
                    hover:bg-black-200 transition-all duration-300"
          style={{
            boxShadow: '0 0 15px rgba(212, 175, 55, 0.5)',
            animation: 'textGlow 3s infinite alternate'
          }}
          aria-label={isOpen ? "Close chat" : "Open chat"}
        >
        {isOpen ? (
          // X icon when chat is open
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          // Chat icon when chat is closed
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
            />
          </svg>
        )}
      </button>
      )}
    </>
  );
};

export default PocketFlowChatBot;
