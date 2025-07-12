// Simple test translations
console.log('Loading simple translations...');

const translations = {
  en: {
    // Navigation
    nav: {
      home: "Home",
      services: "Services",
      fleet: "Fleet",
      destinations: "Destinations",
      tourism_packages: "Tourism",
      contact: "Contact",
      book_now: "Book Now",
      language: "Language"
    },
    // Hero section
    hero: {
      title: "Our Premier Chauffeur Services",
      subtitle: "Excellence in motion, tailored to your every need.",
      bookNow: "Book Now",
      bookButton: "Book Your Journey"
    },
    // Services section
    services: {
      // Hero section
      heroTitle1: "Our Premium",
      heroTitle2: "Services",
      heroSubtitle: "PREMIUM SERVICES",
      heroTitle: "Professional Chauffeur Services",
      heroDescription: "Experience luxury transportation with our comprehensive range of professional chauffeur services. From executive travel to VIP transportation, we provide unparalleled comfort, safety, and discretion for every journey.",

      // Executive service
      executive: {
        title: "Executive Chauffeur Service",
        description: "Designed for the discerning business professional, our executive service guarantees punctuality, discretion, and a seamless travel experience. We provide a mobile office environment, allowing you to remain productive while on the move.",
        feature1: "On-time guarantee for all appointments",
        feature2: "Confidentiality and discretion assured",
        feature3: "In-car Wi-Fi and charging ports"
      },
      executiveTitle: "Executive Chauffeur Service",
      executiveDescription: "Designed for the discerning business professional, our executive service guarantees punctuality, discretion, and a seamless travel experience. We provide a mobile office environment, allowing you to remain productive while on the move.",
      executiveFeature1: "On-time guarantee for all appointments",
      executiveFeature2: "Confidentiality and discretion assured",
      executiveFeature3: "In-car Wi-Fi and charging ports",

      // VIP service
      vip: {
        title: "VIP Transportation",
        description: "For those who require the utmost in luxury, security, and exclusivity. Our VIP service caters to celebrities, dignitaries, and high-profile clients for red carpet events, state visits, and private engagements. Your safety and privacy are our highest priorities.",
        feature1: "Security-trained chauffeurs available",
        feature2: "Bespoke travel coordination",
        feature3: "Premium amenities and refreshments"
      },
      vipTitle: "VIP Transportation",
      vipDescription: "For those who require the utmost in luxury, security, and exclusivity. Our VIP service caters to celebrities, dignitaries, and high-profile clients for red carpet events, state visits, and private engagements. Your safety and privacy are our highest priorities.",
      vipFeature1: "Security-trained chauffeurs available",
      vipFeature2: "Bespoke travel coordination",
      vipFeature3: "Premium amenities and refreshments",

      // Airport service
      airport: {
        title: "Airport Transfer",
        description: "Reliable airport pickup and drop-off services."
      },
      airportTitle: "Airport Transfer Service",
      airportDescription: "Begin or end your journey in complete comfort and style. We offer premium, reliable transfers to and from all major airports. Our service includes flight tracking, meet-and-greet services, and luggage assistance for a stress-free experience.",
      airportFeature1: "Real-time flight monitoring",
      airportFeature2: "Personalized welcome at arrivals",
      airportFeature3: "Ample space for luggage",

      // Other services
      wedding: {
        title: "Wedding Transportation",
        description: "Elegant transportation for your special day."
      },
      events: {
        title: "Event Transportation",
        description: "Professional transportation for corporate events and special occasions."
      },

      // Service comparison table
      comparisonTitle: "Service Comparison",
      comparisonSubtitle: "Choose the perfect service level for your needs. All our services include professional chauffeurs and luxury vehicles.",
      tableFeatures: "Features",
      tableExecutive: "Executive",
      tableVip: "VIP",
      tableAirport: "Airport",
      tableTourism: "Tourism",
      rowProfessionalChauffeur: "Professional Chauffeur",
      rowLuxuryVehicle: "Luxury Vehicle",
      rowFlightMonitoring: "Flight Monitoring",
      rowMeetGreet: "Meet & Greet",
      rowPersonalConcierge: "Personal Concierge",
      rowPremiumAmenities: "Premium Amenities",
      rowTourGuide: "Tour Guide",

      // Pricing section
      pricingTitle: "Transparent & Fair Pricing",
      pricingDescription: "Our rates are competitive and tailored to your specific needs. For a detailed quote based on your choice of service, vehicle, and duration, please contact our booking team.",
      getQuoteBtn: "Request a Personalized Quote"
    },
    // Fleet section
    fleet: {
      title: "Our Premium Fleet",
      subtitle: "Luxury vehicles for every occasion",
      heroSubtitle: "LUXURY FLEET",
      heroTitle: "Premium Vehicle Collection",
      heroDescription: "Experience unparalleled luxury with our meticulously maintained fleet of premium vehicles. Each car is equipped with state-of-the-art amenities and driven by professional chauffeurs to ensure your journey is nothing short of extraordinary.",
      specs: {
        engine: "Engine",
        capacity: "Capacity",
        luggage: "Luggage"
      },
      sclass: {
        title: "Mercedes S-Class",
        description: "The definitive luxury sedan, the S-Class sets the standard for first-class travel with its elegant design and pioneering technology.",
        engine: "3.0L V6 Turbo",
        capacity: "2-3 Passengers",
        luggage: "2 Large Bags",
        feature1: "Nappa leather seats",
        feature2: "Burmester® surround sound",
        feature3: "Ambient lighting",
        feature4: "Complimentary Wi-Fi & refreshments"
      },
      bmw7: {
        title: "BMW 7 Series",
        description: "Experience dynamic luxury. The BMW 7 Series combines exhilarating performance with a sophisticated interior designed for ultimate comfort.",
        engine: "4.4L V8",
        capacity: "2-3 Passengers",
        luggage: "2 Large Bags",
        feature1: "Merino leather upholstery",
        feature2: "Bowers & Wilkins sound system",
        feature3: "Panoramic Sky Lounge LED Roof",
        feature4: "Rear-seat entertainment system"
      },
      vclass: {
        title: "Mercedes V-Class",
        description: "The V-Class is the epitome of versatile luxury, offering generous space for families, groups, or business teams without compromising on style or comfort.",
        engine: "2.0L Diesel",
        capacity: "Up to 7 Passengers",
        luggage: "5-6 Large Bags",
        feature1: "Conference-style leather seating",
        feature2: "Ample legroom and headroom",
        feature3: "Separate rear climate control",
        feature4: "USB ports for all passengers"
      },
      mercedes_s: {
        title: "Mercedes S-Class",
        description: "The epitome of luxury and comfort for executive travel."
      },
      bmw_7: {
        title: "BMW 7 Series",
        description: "Sophisticated luxury sedan with cutting-edge technology."
      },
      mercedes_v: {
        title: "Mercedes V-Class",
        description: "Spacious luxury van perfect for group transportation."
      }
    },
    // Destinations section
    destinations: {
      heroSubtitle: "TOURISM SERVICES",
      heroTitle: "Popular Destinations",
      heroDescription: "Discover Germany's most beloved destinations with our premium transportation services. Our expert chauffeurs will take you to iconic landmarks, historical sites, and breathtaking natural wonders in comfort and style.",
      exploreBtn: "Explore",
      bookTourBtn: "Book Tour",
      munich: {
        title: "Munich",
        subtitle: "Bavaria's Cultural Capital",
        description: "Experience the perfect blend of traditional Bavarian culture and modern sophistication in Germany's third-largest city."
      },
      hamburg: {
        title: "Hamburg",
        subtitle: "Gateway to the World",
        description: "Discover the maritime charm of Germany's second-largest city, famous for its historic port and vibrant nightlife."
      },
      frankfurt: {
        title: "Frankfurt",
        subtitle: "Financial Metropolis",
        description: "Explore Germany's financial hub, where modern skyscrapers meet historic charm in this cosmopolitan city."
      },
      heidelberg: {
        title: "Heidelberg",
        subtitle: "Romantic University Town",
        description: "Visit one of Germany's most beautiful cities, famous for its historic university and stunning castle ruins."
      },
      blackForest: {
        title: "Black Forest",
        subtitle: "Enchanted Wilderness",
        description: "Journey through Germany's most famous forest region, known for its dense woodlands, charming villages, and cuckoo clocks."
      },
      badenBaden: {
        title: "Baden-Baden",
        subtitle: "Elegant Spa Town",
        description: "Relax in this sophisticated spa town, renowned for its thermal baths, casinos, and Belle Époque architecture."
      },
      amsterdam: {
        title: "Amsterdam",
        subtitle: "Venice of the North",
        description: "Explore the charming canals, world-class museums, and vibrant culture of the Netherlands' capital city."
      },
      geneva: {
        title: "Geneva",
        subtitle: "International Hub",
        description: "Discover this cosmopolitan Swiss city, home to international organizations and stunning Alpine scenery."
      },
      interlaken: {
        title: "Interlaken",
        subtitle: "Alpine Adventure Gateway",
        description: "Experience breathtaking mountain views and outdoor adventures in this picturesque Swiss resort town."
      },
      luxembourg: {
        title: "Luxembourg",
        subtitle: "Grand Duchy Charm",
        description: "Explore this small but mighty European capital, known for its medieval old town and modern financial district."
      },
      northSeaCoast: {
        title: "North Sea Coast",
        subtitle: "Coastal Beauty",
        description: "Discover the rugged beauty of Germany's northern coastline, with its pristine beaches and charming seaside towns."
      },
      paris: {
        title: "Paris",
        subtitle: "City of Light",
        description: "Experience the romance and elegance of France's capital, home to world-famous landmarks and cultural treasures."
      },
      ctaTitle: "Ready for Your Journey?",
      ctaDescription: "Contact us today to plan your perfect destination experience. Our premium chauffeur services ensure you travel in comfort and style to any of these magnificent locations."
    },
    // Tourism section
    tourism: {
      heroSubtitle: "LUXURY TRAVEL EXPERIENCES",
      heroTitle: "Tourism Everywhere",
      heroDescription: "Experience Germany's finest attractions with our curated tourism packages. From vibrant cities to thrilling theme parks, we provide luxury transportation for unforgettable journeys.",
      themeParksTitle: "Theme Parks & Entertainment",
      shoppingToursTitle: "Luxury Shopping Tours",
      bookVisitBtn: "Book Visit",
      bookShoppingTourBtn: "Book Shopping Tour",
      europaPark: {
        title: "Europa Park",
        description: "Germany's largest theme park with thrilling rides and European-themed areas."
      },
      legoland: {
        title: "LEGOLAND",
        description: "Perfect family destination with LEGO-themed attractions and interactive experiences."
      },
      phantasialand: {
        title: "Phantasialand",
        description: "Award-winning theme park with world-class roller coasters and themed worlds."
      },
      heidePark: {
        title: "Heide Park Resort",
        description: "Northern Germany's largest amusement park with extreme rides and attractions."
      },
      moviePark: {
        title: "Movie Park Germany",
        description: "Hollywood-themed park with movie-inspired rides and shows."
      },
      disneylandParis: {
        title: "Disneyland Paris",
        description: "Magical Disney experience with classic attractions and European charm."
      },
      outletcityMetzingen: {
        title: "Outletcity Metzingen",
        description: "Premium outlet with luxury brands like Hugo Boss, Escada, and more."
      },
      wertheimVillage: {
        title: "Wertheim Village",
        description: "Chic outlet village near Frankfurt with international designer brands."
      },
      designerOutletRoermond: {
        title: "Designer Outlet Roermond",
        description: "Dutch outlet center with over 200 designer brands and boutiques."
      },
      laValleeVillage: {
        title: "La Vallée Village",
        description: "Parisian outlet village near Disneyland with luxury French brands."
      },
      serravaIleDesignerOutlet: {
        title: "Serravalle Designer Outlet",
        description: "Italy's largest outlet with premium Italian and international brands."
      },
      ctaTitle: "Ready for Your Journey?",
      ctaDescription: "Contact us today to plan your perfect tourism experience with our premium chauffeur services."
    },
    // Contact section
    contact: {
      sectionTitle: "CONTACT US",
      title: "Get In Touch",
      description: "Contact us today to arrange your premium transportation. Our team is available 24/7 to assist you with all your chauffeur service needs.",
      readyToBook: "Ready to Book?",
      ctaDescription: "Get in touch with us through our dedicated contact page. Fill out our detailed form or use our quick contact options.",
      contactUsButton: "Contact Us",
      infoTitle: "Contact Information",
      phone: "Phone",
      email: "Email",
      availability: "Availability",
      availabilityText: "24/7 Service Available",
      serviceArea: "Service Area",
      serviceAreaText: "Germany & Surrounding Areas",
      quickContact: "Quick Contact",
      callNow: "Call Now",
      sendEmail: "Send Email",
      // Contact form
      heroSubtitle: "CONTACT US",
      heroTitle: "Get In Touch",
      heroDescription: "Contact us today to arrange your premium transportation. Our team is available 24/7 to assist you with all your chauffeur service needs.",
      heroExtendedDescription: "Whether you need executive transportation for business meetings, luxury airport transfers, special event chauffeur services, or personalized city tours, our professional team is ready to exceed your expectations. We pride ourselves on punctuality, discretion, and delivering an unparalleled travel experience.",
      availability24: "24/7 Availability",
      availabilityDesc: "Round-the-clock service for all your transportation needs",
      instantResponse: "Instant Response",
      responseDesc: "Quick replies to all inquiries and booking requests",
      professionalService: "Professional Service",
      professionalDesc: "Experienced chauffeurs and premium vehicle fleet",
      formTitle: "Send us a Message",
      formDescription: "Ready to experience premium chauffeur services? Share your transportation needs with us and we'll craft the perfect journey for you. Whether it's airport transfers, business meetings, special events, or city tours - our team is here to provide you with exceptional service tailored to your requirements.",
      nameLabel: "Your Name",
      namePlaceholder: "Enter your full name",
      emailLabel: "Email Address",
      emailPlaceholder: "Enter your email address",
      phoneLabel: "Phone Number",
      phonePlaceholder: "Enter your phone number",
      serviceLabel: "Service Type",
      selectService: "Select a service",
      executiveChauffeur: "Executive Chauffeur",
      vipTransportation: "VIP Transportation",
      airportTransfer: "Airport Transfer",
      tourismServices: "Tourism Services",
      other: "Other",
      messageLabel: "Message",
      messagePlaceholder: "Tell us about your transportation needs...",
      sending: "Sending...",
      whatsapp: "WhatsApp",
      contactInfoTitle: "Contact Information",
      phoneTitle: "Phone",
      emailTitle: "Email",
      availabilityTitle: "Availability",
      serviceAreaTitle: "Service Area",
      // Quick Contact section
      quickContactTitle: "Quick Contact",
      bookNow: "Book Now",
      callNow: "Call Now",
      sendEmail: "Send Email",
      // Business Card section
      businessCardTitle: "Our Business Card",
      businessCardDesc: "Click the card to see both sides of our business card",
      // Exploration section
      exploreTitle: "Explore Our Services",
      exploreDescription: "Discover our premium destinations and tourism packages designed for your perfect journey.",
      tourismButton: "Tourism Packages",
      tourismDesc: "Luxury travel experiences",
      destinationsButton: "Premium Destinations",
      destinationsDesc: "Exclusive travel locations"
    },
    // Booking section
    booking: {
      heroSubtitle: "BOOK YOUR SERVICE",
      heroTitle: "Reserve Your Premium Transportation",
      heroDescription: "Complete our booking form to reserve your luxury chauffeur service. Our team will confirm your booking within 24 hours.",
      formTitle: "Book Your Service",
      step1Label: "Travel Details",
      step2Label: "Vehicle & Extras",
      step3Label: "Personal Details",
      step1Title: "Step 1: Travel Details",
      step2Title: "Step 2: Vehicle & Extras",
      step3Title: "Step 3: Personal Details",
      startLocationLabel: "Start Location",
      startLocationPlaceholder: "Enter pickup location",
      serviceTypeLabel: "Service Type",
      selectServiceType: "Select service type",
      executiveChauffeur: "Executive Chauffeur",
      vipTransportation: "VIP Transportation",
      airportTransfer: "Airport Transfer",
      tourismServices: "Tourism Services",
      other: "Other",
      destinationLabel: "Destination",
      selectDestination: "Select destination",
      dateLabel: "Date",
      timeLabel: "Time",
      durationLabel: "Duration",
      oneDay: "1 Day",
      twoDays: "2 Days",
      threeDays: "3 Days",
      fourDays: "4 Days",
      fiveDays: "5 Days",
      sixDays: "6 Days",
      sevenDays: "7 Days",
      moreThanSevenDays: "More than 7 Days",
      passengersLabel: "Number of Passengers",
      onePerson: "1 Person",
      twoPeople: "2 People",
      threePeople: "3 People",
      fourPeople: "4 People",
      fivePeople: "5 People",
      sixPeople: "6 People",
      sevenPeople: "7 People",
      eightPeople: "8 People",
      moreThanEightPeople: "More than 8 People",
      nextStep: "Next Step",
      selectVehicleType: "Select Vehicle Type",
      bmw7Series: "BMW 7 Series",
      bmw7SeriesDesc: "Luxury sedan for executive travel",
      mercedesSClass: "Mercedes S-Class",
      mercedesSClassDesc: "Premium comfort and style",
      mercedesVClass: "Mercedes V-Class",
      mercedesVClassDesc: "Spacious van for groups",
      additionalServices: "Additional Services",
      wifiAccess: "WiFi Access",
      wheelchairAccess: "Wheelchair Access"
    },
    // Footer
    footer: {
      copyright: "© 2024 Premium Chauffeur Services. All rights reserved.",
      privacy: "Privacy Policy",
      terms: "Terms of Service",
      companyDescription: "Experience luxury transportation with our premium chauffeur services. Professional drivers, luxury vehicles, and exceptional service across Germany and Europe.",
      quickLinks: "Quick Links",
      servicesTitle: "Services",
      airportTransfer: "Airport Transfer",
      chauffeurService: "Chauffeur Service",
      vipService: "VIP Service",
      businessTravel: "Business Travel",
      eventTransportation: "Event Transportation",
      contactInfo: "Contact Info",
      address: "Address",
      addressText: "Luxusstraße 123, 10115 Berlin, Germany",
      phone: "Phone",
      email: "Email",
      hours: "Hours",
      hoursText: "24/7 Available",
      weAccept: "We Accept",
      followUs: "Follow Us",
      privacyPolicy: "Privacy Policy",
      termsOfService: "Terms of Service",
      cookiePolicy: "Cookie Policy",
      imprint: "Imprint"
    },
    // Slideshow
    slideshow: {
      slides: [
        {
          title: "Frankfurt",
          description: "Financial metropolis with impressive skyline and rich cultural heritage."
        },
        {
          title: "Paris",
          description: "The city of love with the iconic Eiffel Tower and charming cafés."
        },
        {
          title: "Amsterdam",
          description: "Picturesque canal city with unique flair and historic architecture."
        },
        {
          title: "Hamburg",
          description: "Hanseatic metropolis with maritime charm and the impressive Elbphilharmonie."
        },
        {
          title: "Heidelberg",
          description: "Romantic university town with picturesque old town and famous castle."
        },
        {
          title: "Geneva",
          description: "International city on Lake Geneva with the famous Jet d'Eau."
        },
        {
          title: "Geneva",
          description: "Home of the United Nations and the Red Cross with views of Mont Blanc."
        },
        {
          title: "Interlaken",
          description: "Picturesquely situated between Lake Thun and Lake Brienz with views of the Alps."
        },
        {
          title: "Interlaken",
          description: "The gateway to the Bernese Oberland with spectacular Alpine panorama."
        },
        {
          title: "Luxembourg",
          description: "Small grand duchy with picturesque capital and historic fortifications."
        },
        {
          title: "North Sea",
          description: "Popular holiday region with wide beaches and unique mudflats."
        },
        {
          title: "Wagrain",
          description: "Idyllic Alpine village with breathtaking mountain panoramas and winter sports."
        }
      ]
    },
    // Chatbot
    chatbot: {
      title: "Premium Chauffeur Assistant",
      placeholder: "Ask about our services..."
    },
    // Common
    common: {
      readMore: "Read More",
      learnMore: "Learn More",
      bookNow: "Book Now",
      viewDetails: "View Details"
    }
  },
  ar: {
    // Navigation
    nav: {
      home: "الرئيسية",
      services: "الخدمات",
      fleet: "الأسطول",
      destinations: "الوجهات",
      tourism_packages: "السياحة",
      contact: "اتصل بنا",
      book_now: "احجز الآن",
      language: "اللغة"
    },
    // Hero section
    hero: {
      title: "خدمة السائق الخاص المتميزة",
      subtitle: "التميز في الحركة، مصمم خصيصاً لتلبية جميع احتياجاتك",
      bookNow: "احجز الآن",
      bookButton: "احجز رحلتك"
    },
    // Services section
    services: {
      // Hero section
      heroSubtitle: "الخدمات المتميزة",
      heroTitle: "خدمات السائق المحترف",
      heroDescription: "استمتع بخدمات النقل الفاخرة مع مجموعتنا الشاملة من خدمات السائق المحترف. من السفر التنفيذي إلى نقل كبار الشخصيات، نوفر راحة وأماناً وسرية لا مثيل لها في كل رحلة.",
      executive: {
        title: "خدمة السائق التنفيذي",
        description: "مصممة للمحترف التجاري المميز، تضمن خدمتنا التنفيذية الدقة في المواعيد والسرية وتجربة سفر سلسة. نوفر بيئة مكتب متنقل، مما يتيح لك البقاء منتجاً أثناء التنقل.",
        feature1: "ضمان الوصول في الوقت المحدد لجميع المواعيد",
        feature2: "ضمان السرية والكتمان",
        feature3: "واي فاي داخل السيارة ومنافذ شحن"
      },
      vip: {
        title: "نقل كبار الشخصيات",
        description: "لأولئك الذين يتطلبون أقصى درجات الفخامة والأمان والحصرية. تخدم خدمة كبار الشخصيات لدينا المشاهير والشخصيات المهمة وعملاء رفيعي المستوى في فعاليات السجادة الحمراء والزيارات الرسمية والمناسبات الخاصة. سلامتك وخصوصيتك هما أولويتنا القصوى.",
        feature1: "سائقون مدربون أمنياً متاحون",
        feature2: "تنسيق سفر مخصص",
        feature3: "وسائل راحة ومرطبات متميزة"
      },
      airport: {
        title: "نقل المطار",
        description: "خدمات موثوقة لاستقبال وتوصيل المطار."
      },
      wedding: {
        title: "نقل الزفاف",
        description: "نقل أنيق ليومك المميز."
      },
      events: {
        title: "نقل الفعاليات",
        description: "نقل محترف للفعاليات الشركاتية والمناسبات الخاصة."
      },

      // Additional service page translations
      heroTitle1: "خدماتنا",
      heroTitle2: "المتميزة",
      heroSubtitle: "استمتع بالنقل الفاخر مع مجموعتنا الشاملة من خدمات السائق المحترف",

      executiveTitle: "خدمة السائق التنفيذي",
      executiveDescription: "مصممة للمحترف التجاري المميز، تضمن خدمتنا التنفيذية الدقة في المواعيد والسرية وتجربة سفر سلسة. نوفر بيئة مكتب متنقل، مما يتيح لك البقاء منتجاً أثناء التنقل.",
      executiveFeature1: "ضمان الوصول في الوقت المحدد لجميع المواعيد",
      executiveFeature2: "ضمان السرية والكتمان",
      executiveFeature3: "واي فاي داخل السيارة ومنافذ شحن",

      vipTitle: "نقل كبار الشخصيات",
      vipDescription: "لأولئك الذين يتطلبون أقصى درجات الفخامة والأمان والحصرية. تخدم خدمة كبار الشخصيات لدينا المشاهير والشخصيات المهمة وعملاء رفيعي المستوى في فعاليات السجادة الحمراء والزيارات الرسمية والمناسبات الخاصة. سلامتك وخصوصيتك هما أولويتنا القصوى.",
      vipFeature1: "سائقون مدربون أمنياً متاحون",
      vipFeature2: "تنسيق سفر مخصص",
      vipFeature3: "وسائل راحة ومرطبات متميزة",

      airportTitle: "خدمة نقل المطار",
      airportDescription: "ابدأ أو اختتم رحلتك بكل راحة وأناقة. نقدم خدمات نقل متميزة وموثوقة من وإلى جميع المطارات الرئيسية. تشمل خدمتنا تتبع الرحلات وخدمات الاستقبال والترحيب ومساعدة الأمتعة لتجربة خالية من التوتر.",
      airportFeature1: "مراقبة الرحلات في الوقت الفعلي",
      airportFeature2: "ترحيب شخصي في قاعة الوصول",
      airportFeature3: "مساحة واسعة للأمتعة",

      comparisonTitle: "مقارنة الخدمات",
      comparisonSubtitle: "اختر مستوى الخدمة المثالي لاحتياجاتك. جميع خدماتنا تشمل سائقين محترفين ومركبات فاخرة.",
      tableFeatures: "المميزات",
      tableExecutive: "تنفيذي",
      tableVip: "كبار الشخصيات",
      tableAirport: "المطار",
      tableTourism: "السياحة",
      rowProfessionalChauffeur: "سائق محترف",
      rowLuxuryVehicle: "مركبة فاخرة",
      rowFlightMonitoring: "مراقبة الرحلات",
      rowMeetGreet: "الاستقبال والترحيب",
      rowPersonalConcierge: "خدمة الكونسيرج الشخصي",
      rowPremiumAmenities: "وسائل الراحة المتميزة",
      rowTourGuide: "مرشد سياحي",

      pricingTitle: "أسعار شفافة وعادلة",
      pricingDescription: "أسعارنا تنافسية ومصممة خصيصاً لاحتياجاتك المحددة. للحصول على عرض أسعار مفصل بناءً على اختيارك للخدمة والمركبة والمدة، يرجى الاتصال بفريق الحجز لدينا.",
      getQuoteBtn: "طلب عرض أسعار شخصي"
    },
    // Fleet section
    fleet: {
      title: "أسطولنا المتميز",
      subtitle: "سيارات فاخرة لكل مناسبة",
      heroSubtitle: "الأسطول الفاخر",
      heroTitle: "مجموعة المركبات المتميزة",
      heroDescription: "استمتع بتجربة فاخرة لا مثيل لها مع أسطولنا من المركبات المتميزة المُصانة بعناية فائقة. كل سيارة مجهزة بأحدث وسائل الراحة ويقودها سائقون محترفون لضمان رحلة استثنائية.",
      specs: {
        engine: "المحرك",
        capacity: "السعة",
        luggage: "الأمتعة"
      },
      sclass: {
        title: "مرسيدس الفئة S",
        description: "السيارة السيدان الفاخرة المثالية، تضع الفئة S معايير السفر من الدرجة الأولى بتصميمها الأنيق وتقنياتها الرائدة.",
        engine: "محرك V6 تيربو 3.0 لتر",
        capacity: "2-3 ركاب",
        luggage: "حقيبتان كبيرتان",
        feature1: "مقاعد جلد نابا",
        feature2: "نظام صوت محيطي Burmester®",
        feature3: "إضاءة محيطية",
        feature4: "واي فاي ومرطبات مجانية"
      },
      bmw7: {
        title: "بي إم دبليو الفئة 7",
        description: "استمتع بالفخامة الديناميكية. تجمع بي إم دبليو الفئة 7 بين الأداء المثير والتصميم الداخلي المتطور المصمم للراحة القصوى.",
        engine: "محرك V8 4.4 لتر",
        capacity: "2-3 ركاب",
        luggage: "حقيبتان كبيرتان",
        feature1: "تنجيد جلد ميرينو",
        feature2: "نظام صوت Bowers & Wilkins",
        feature3: "سقف LED بانورامي Sky Lounge",
        feature4: "نظام ترفيه للمقاعد الخلفية"
      },
      vclass: {
        title: "مرسيدس الفئة V",
        description: "الفئة V هي قمة الفخامة المتعددة الاستخدامات، تقدم مساحة سخية للعائلات والمجموعات أو فرق العمل دون التنازل عن الأناقة أو الراحة.",
        engine: "محرك ديزل 2.0 لتر",
        capacity: "حتى 7 ركاب",
        luggage: "5-6 حقائب كبيرة",
        feature1: "مقاعد جلدية بنمط المؤتمرات",
        feature2: "مساحة واسعة للأرجل والرأس",
        feature3: "تحكم منفصل في المناخ الخلفي",
        feature4: "منافذ USB لجميع الركاب"
      },
      mercedes_s: {
        title: "مرسيدس الفئة S",
        description: "قمة الفخامة والراحة للسفر التنفيذي."
      },
      bmw_7: {
        title: "بي إم دبليو الفئة 7",
        description: "سيارة سيدان فاخرة متطورة مع أحدث التقنيات."
      },
      mercedes_v: {
        title: "مرسيدس الفئة V",
        description: "فان فاخر واسع مثالي لنقل المجموعات."
      }
    },
    // Destinations section
    destinations: {
      heroSubtitle: "خدمات السياحة",
      heroTitle: "الوجهات الشعبية",
      heroDescription: "اكتشف أحب الوجهات في ألمانيا مع خدمات النقل المتميزة لدينا. سائقونا الخبراء سيأخذونك إلى المعالم الأيقونية والمواقع التاريخية والعجائب الطبيعية الخلابة بكل راحة وأناقة.",
      exploreBtn: "استكشف",
      bookTourBtn: "احجز جولة",
      munich: {
        title: "ميونيخ",
        subtitle: "عاصمة بافاريا الثقافية",
        description: "استمتع بالمزج المثالي بين الثقافة البافارية التقليدية والرقي الحديث في ثالث أكبر مدن ألمانيا."
      },
      hamburg: {
        title: "هامبورغ",
        subtitle: "بوابة العالم",
        description: "اكتشف السحر البحري لثاني أكبر مدن ألمانيا، المشهورة بميناءها التاريخي وحياتها الليلية النابضة بالحياة."
      },
      frankfurt: {
        title: "فرانكفورت",
        subtitle: "العاصمة المالية",
        description: "استكشف المركز المالي لألمانيا، حيث تلتقي ناطحات السحاب الحديثة بالسحر التاريخي في هذه المدينة العالمية."
      },
      heidelberg: {
        title: "هايدلبرغ",
        subtitle: "مدينة الجامعة الرومانسية",
        description: "زر إحدى أجمل مدن ألمانيا، المشهورة بجامعتها التاريخية وأطلال قلعتها المذهلة."
      },
      blackForest: {
        title: "الغابة السوداء",
        subtitle: "البرية المسحورة",
        description: "سافر عبر أشهر منطقة غابات في ألمانيا، المعروفة بغاباتها الكثيفة وقراها الساحرة وساعات الوقواق."
      },
      badenBaden: {
        title: "بادن بادن",
        subtitle: "مدينة المنتجع الأنيقة",
        description: "استرخ في هذه المدينة المنتجعية المتطورة، المشهورة بحماماتها الحرارية وكازينوهاتها وعمارة بيل إيبوك."
      },
      amsterdam: {
        title: "أمستردام",
        subtitle: "فينيسيا الشمال",
        description: "استكشف القنوات الساحرة والمتاحف العالمية والثقافة النابضة بالحياة في عاصمة هولندا."
      },
      geneva: {
        title: "جنيف",
        subtitle: "المركز الدولي",
        description: "اكتشف هذه المدينة السويسرية العالمية، موطن المنظمات الدولية والمناظر الطبيعية الألبية المذهلة."
      },
      interlaken: {
        title: "إنترلاكن",
        subtitle: "بوابة المغامرة الألبية",
        description: "استمتع بإطلالات جبلية خلابة ومغامرات في الهواء الطلق في هذه المدينة المنتجعية السويسرية الخلابة."
      },
      luxembourg: {
        title: "لوكسمبورغ",
        subtitle: "سحر الدوقية الكبرى",
        description: "استكشف هذه العاصمة الأوروبية الصغيرة ولكن القوية، المعروفة بمدينتها القديمة من العصور الوسطى ومنطقتها المالية الحديثة."
      },
      northSeaCoast: {
        title: "ساحل بحر الشمال",
        subtitle: "الجمال الساحلي",
        description: "اكتشف الجمال الوعر للساحل الشمالي لألمانيا، بشواطئه البكر ومدنه الساحلية الساحرة."
      },
      paris: {
        title: "باريس",
        subtitle: "مدينة النور",
        description: "استمتع بالرومانسية والأناقة في عاصمة فرنسا، موطن المعالم الشهيرة عالمياً والكنوز الثقافية."
      },
      ctaTitle: "جاهز لرحلتك؟",
      ctaDescription: "اتصل بنا اليوم لتخطيط تجربة الوجهة المثالية. خدمات السائق المتميزة لدينا تضمن سفرك بكل راحة وأناقة إلى أي من هذه المواقع الرائعة."
    },
    // Tourism section
    tourism: {
      heroSubtitle: "تجارب السفر الفاخرة",
      heroTitle: "السياحة في كل مكان",
      heroDescription: "استمتع بأفضل معالم ألمانيا مع باقاتنا السياحية المنسقة. من المدن النابضة بالحياة إلى المتنزهات المثيرة، نوفر وسائل نقل فاخرة لرحلات لا تُنسى.",
      themeParksTitle: "المتنزهات الترفيهية والتسلية",
      shoppingToursTitle: "جولات التسوق الفاخرة",
      bookVisitBtn: "احجز زيارة",
      bookShoppingTourBtn: "احجز جولة تسوق",
      europaPark: {
        title: "يوروبا بارك",
        description: "أكبر متنزه ترفيهي في ألمانيا مع ألعاب مثيرة ومناطق ذات طابع أوروبي."
      },
      legoland: {
        title: "ليجولاند",
        description: "وجهة عائلية مثالية مع معالم جذب بطابع ليجو وتجارب تفاعلية."
      },
      phantasialand: {
        title: "فانتازيالاند",
        description: "متنزه ترفيهي حائز على جوائز مع أفعوانيات عالمية المستوى وعوالم ذات طابع خاص."
      },
      heidePark: {
        title: "منتجع هايده بارك",
        description: "أكبر متنزه ترفيهي في شمال ألمانيا مع ألعاب ومعالم جذب متطرفة."
      },
      moviePark: {
        title: "موفي بارك ألمانيا",
        description: "متنزه بطابع هوليوود مع ألعاب وعروض مستوحاة من الأفلام."
      },
      disneylandParis: {
        title: "ديزني لاند باريس",
        description: "تجربة ديزني السحرية مع معالم جذب كلاسيكية وسحر أوروبي."
      },
      outletcityMetzingen: {
        title: "أوتليت سيتي ميتزينجن",
        description: "أوتليت متميز مع علامات تجارية فاخرة مثل هوجو بوس وإسكادا وغيرها."
      },
      wertheimVillage: {
        title: "قرية فيرتهايم",
        description: "قرية أوتليت أنيقة بالقرب من فرانكفورت مع علامات تجارية عالمية للمصممين."
      },
      designerOutletRoermond: {
        title: "أوتليت المصممين روريموند",
        description: "مركز أوتليت هولندي مع أكثر من 200 علامة تجارية للمصممين ومتاجر."
      },
      laValleeVillage: {
        title: "قرية لا فاليه",
        description: "قرية أوتليت باريسية بالقرب من ديزني لاند مع علامات تجارية فرنسية فاخرة."
      },
      serravaIleDesignerOutlet: {
        title: "أوتليت سيرافالي للمصممين",
        description: "أكبر أوتليت في إيطاليا مع علامات تجارية إيطالية وعالمية متميزة."
      },
      ctaTitle: "جاهز لرحلتك؟",
      ctaDescription: "اتصل بنا اليوم لتخطيط تجربة السياحة المثالية مع خدمات السائق المتميزة لدينا."
    },
    // Contact section
    contact: {
      sectionTitle: "اتصل بنا",
      title: "تواصل معنا",
      description: "اتصل بنا اليوم لترتيب وسائل النقل المتميزة الخاصة بك. فريقنا متاح على مدار الساعة طوال أيام الأسبوع لمساعدتك في جميع احتياجات خدمة السائق الخاص.",
      readyToBook: "جاهز للحجز؟",
      ctaDescription: "تواصل معنا من خلال صفحة الاتصال المخصصة لدينا. املأ النموذج التفصيلي أو استخدم خيارات الاتصال السريع.",
      contactUsButton: "اتصل بنا",
      infoTitle: "معلومات الاتصال",
      phone: "الهاتف",
      email: "البريد الإلكتروني",
      availability: "التوفر",
      availabilityText: "خدمة متاحة على مدار الساعة",
      serviceArea: "منطقة الخدمة",
      serviceAreaText: "ألمانيا والمناطق المحيطة",
      quickContact: "اتصال سريع",
      callNow: "اتصل الآن",
      sendEmail: "أرسل بريد إلكتروني",
      // Contact form
      heroSubtitle: "اتصل بنا",
      heroTitle: "تواصل معنا",
      heroDescription: "اتصل بنا اليوم لترتيب وسائل النقل المتميزة الخاصة بك. فريقنا متاح على مدار الساعة طوال أيام الأسبوع لمساعدتك في جميع احتياجات خدمة السائق الخاص.",
      heroExtendedDescription: "سواء كنت تحتاج إلى نقل تنفيذي لاجتماعات العمل، أو نقل فاخر من وإلى المطار، أو خدمات سائق للمناسبات الخاصة، أو جولات مدينة مخصصة، فإن فريقنا المحترف مستعد لتجاوز توقعاتك. نحن نفخر بالالتزام بالمواعيد والسرية وتقديم تجربة سفر لا مثيل لها.",
      availability24: "متاح على مدار الساعة",
      availabilityDesc: "خدمة على مدار الساعة لجميع احتياجات النقل الخاصة بك",
      instantResponse: "استجابة فورية",
      responseDesc: "ردود سريعة على جميع الاستفسارات وطلبات الحجز",
      professionalService: "خدمة مهنية",
      professionalDesc: "سائقون ذوو خبرة وأسطول مركبات متميز",
      formTitle: "أرسل لنا رسالة",
      formDescription: "هل أنت مستعد لتجربة خدمات السائق المتميزة؟ شاركنا احتياجاتك في النقل وسنصمم لك الرحلة المثالية. سواء كانت خدمات نقل المطار أو اجتماعات العمل أو المناسبات الخاصة أو جولات المدينة - فريقنا هنا لتقديم خدمة استثنائية مصممة خصيصاً لمتطلباتك.",
      nameLabel: "اسمك",
      namePlaceholder: "أدخل اسمك الكامل",
      emailLabel: "عنوان البريد الإلكتروني",
      emailPlaceholder: "أدخل عنوان بريدك الإلكتروني",
      phoneLabel: "رقم الهاتف",
      phonePlaceholder: "أدخل رقم هاتفك",
      serviceLabel: "نوع الخدمة",
      selectService: "اختر خدمة",
      executiveChauffeur: "سائق تنفيذي",
      vipTransportation: "نقل كبار الشخصيات",
      airportTransfer: "نقل المطار",
      tourismServices: "خدمات السياحة",
      other: "أخرى",
      messageLabel: "الرسالة",
      messagePlaceholder: "أخبرنا عن احتياجات النقل الخاصة بك...",
      sending: "جاري الإرسال...",
      whatsapp: "واتساب",
      contactInfoTitle: "معلومات الاتصال",
      phoneTitle: "الهاتف",
      emailTitle: "البريد الإلكتروني",
      availabilityTitle: "التوفر",
      serviceAreaTitle: "منطقة الخدمة",
      // Quick Contact section
      quickContactTitle: "اتصال سريع",
      bookNow: "احجز الآن",
      callNow: "اتصل الآن",
      sendEmail: "أرسل بريد إلكتروني",
      // Business Card section
      businessCardTitle: "بطاقة أعمالنا",
      businessCardDesc: "انقر على البطاقة لرؤية كلا الجانبين من بطاقة أعمالنا",
      // Exploration section
      exploreTitle: "استكشف خدماتنا",
      exploreDescription: "اكتشف وجهاتنا المتميزة وباقات السياحة المصممة لرحلتك المثالية.",
      tourismButton: "باقات السياحة",
      tourismDesc: "تجارب سفر فاخرة",
      destinationsButton: "الوجهات المتميزة",
      destinationsDesc: "مواقع سفر حصرية"
    },
    // Booking section
    booking: {
      heroSubtitle: "احجز خدمتك",
      heroTitle: "احجز وسائل النقل المتميزة الخاصة بك",
      heroDescription: "أكمل نموذج الحجز لحجز خدمة السائق الفاخرة. سيؤكد فريقنا حجزك خلال 24 ساعة.",
      formTitle: "احجز خدمتك",
      step1Label: "تفاصيل السفر",
      step2Label: "المركبة والإضافات",
      step3Label: "التفاصيل الشخصية",
      step1Title: "الخطوة 1: تفاصيل السفر",
      step2Title: "الخطوة 2: المركبة والإضافات",
      step3Title: "الخطوة 3: التفاصيل الشخصية",
      startLocationLabel: "موقع البداية",
      startLocationPlaceholder: "أدخل موقع الاستلام",
      serviceTypeLabel: "نوع الخدمة",
      selectServiceType: "اختر نوع الخدمة",
      executiveChauffeur: "سائق تنفيذي",
      vipTransportation: "نقل كبار الشخصيات",
      airportTransfer: "نقل المطار",
      tourismServices: "خدمات السياحة",
      other: "أخرى",
      destinationLabel: "الوجهة",
      selectDestination: "اختر الوجهة",
      dateLabel: "التاريخ",
      timeLabel: "الوقت",
      durationLabel: "المدة",
      oneDay: "يوم واحد",
      twoDays: "يومان",
      threeDays: "ثلاثة أيام",
      fourDays: "أربعة أيام",
      fiveDays: "خمسة أيام",
      sixDays: "ستة أيام",
      sevenDays: "سبعة أيام",
      moreThanSevenDays: "أكثر من 7 أيام",
      passengersLabel: "عدد الركاب",
      onePerson: "شخص واحد",
      twoPeople: "شخصان",
      threePeople: "ثلاثة أشخاص",
      fourPeople: "أربعة أشخاص",
      fivePeople: "خمسة أشخاص",
      sixPeople: "ستة أشخاص",
      sevenPeople: "سبعة أشخاص",
      eightPeople: "ثمانية أشخاص",
      moreThanEightPeople: "أكثر من 8 أشخاص",
      nextStep: "الخطوة التالية",
      selectVehicleType: "اختر نوع المركبة",
      bmw7Series: "بي إم دبليو الفئة السابعة",
      bmw7SeriesDesc: "سيدان فاخرة للسفر التنفيذي",
      mercedesSClass: "مرسيدس الفئة S",
      mercedesSClassDesc: "راحة وأناقة متميزة",
      mercedesVClass: "مرسيدس الفئة V",
      mercedesVClassDesc: "فان واسعة للمجموعات",
      additionalServices: "خدمات إضافية",
      wifiAccess: "الوصول إلى الواي فاي",
      wheelchairAccess: "الوصول للكراسي المتحركة"
    },
    // Footer
    footer: {
      copyright: "© 2024 خدمات السائق المتميزة. جميع الحقوق محفوظة.",
      privacy: "سياسة الخصوصية",
      terms: "شروط الخدمة",
      companyDescription: "استمتع بخدمات النقل الفاخرة مع خدمات السائق المتميزة لدينا. سائقون محترفون وسيارات فاخرة وخدمة استثنائية في جميع أنحاء ألمانيا وأوروبا.",
      quickLinks: "روابط سريعة",
      servicesTitle: "الخدمات",
      airportTransfer: "نقل المطار",
      chauffeurService: "خدمة السائق",
      vipService: "خدمة كبار الشخصيات",
      businessTravel: "السفر التجاري",
      eventTransportation: "نقل الفعاليات",
      contactInfo: "معلومات الاتصال",
      address: "العنوان",
      addressText: "لوكسوسشتراسه 123، 10115 برلين، ألمانيا",
      phone: "الهاتف",
      email: "البريد الإلكتروني",
      hours: "ساعات العمل",
      hoursText: "متاح على مدار الساعة",
      weAccept: "نقبل",
      followUs: "تابعنا",
      privacyPolicy: "سياسة الخصوصية",
      termsOfService: "شروط الخدمة",
      cookiePolicy: "سياسة ملفات تعريف الارتباط",
      imprint: "بيانات الناشر"
    },
    // Slideshow
    slideshow: {
      slides: [
        {
          title: "فرانكفورت",
          description: "العاصمة المالية مع أفق مثير للإعجاب وتراث ثقافي غني."
        },
        {
          title: "باريس",
          description: "مدينة الحب مع برج إيفل الشهير والمقاهي الساحرة."
        },
        {
          title: "أمستردام",
          description: "مدينة القنوات الخلابة مع طابع فريد وعمارة تاريخية."
        },
        {
          title: "هامبورغ",
          description: "العاصمة الهانزية مع السحر البحري وقاعة الألبفيلهارموني المثيرة للإعجاب."
        },
        {
          title: "هايدلبرغ",
          description: "مدينة جامعية رومانسية مع بلدة قديمة خلابة وقلعة مشهورة."
        },
        {
          title: "جنيف",
          description: "مدينة دولية على بحيرة جنيف مع نافورة جيت دو الشهيرة."
        },
        {
          title: "جنيف",
          description: "موطن الأمم المتحدة والصليب الأحمر مع إطلالات على مون بلان."
        },
        {
          title: "إنترلاكن",
          description: "تقع بشكل خلاب بين بحيرة ثون وبحيرة برينز مع إطلالات على جبال الألب."
        },
        {
          title: "إنترلاكن",
          description: "بوابة منطقة بيرنيز أوبرلاند مع بانوراما جبال الألب الرائعة."
        },
        {
          title: "لوكسمبورغ",
          description: "دوقية كبرى صغيرة مع عاصمة خلابة وتحصينات تاريخية."
        },
        {
          title: "بحر الشمال",
          description: "منطقة عطلات شعبية مع شواطئ واسعة ومسطحات طينية فريدة."
        },
        {
          title: "فاغرين",
          description: "قرية جبلية مثالية مع بانوراما جبلية خلابة ورياضات شتوية."
        }
      ]
    },
    // Chatbot
    chatbot: {
      title: "مساعد السائق المتميز",
      placeholder: "اسأل عن خدماتنا..."
    },
    // Common
    common: {
      readMore: "اقرأ المزيد",
      learnMore: "تعرف على المزيد",
      bookNow: "احجز الآن",
      viewDetails: "عرض التفاصيل"
    }
  },
  de: {
    // Navigation
    nav: {
      home: "Startseite",
      services: "Dienstleistungen",
      fleet: "Flotte",
      destinations: "Reiseziele",
      tourism_packages: "Tourismus",
      contact: "Kontakt",
      book_now: "Jetzt buchen",
      language: "Sprache"
    },
    // Hero section
    hero: {
      title: "Unser Premium Chauffeur Service",
      subtitle: "Exzellenz in Bewegung, maßgeschneidert für Ihre Bedürfnisse.",
      bookNow: "Jetzt buchen",
      bookButton: "Ihre Reise buchen"
    },
    // Services section
    services: {
      // Hero section
      heroSubtitle: "PREMIUM-DIENSTLEISTUNGEN",
      heroTitle: "Professionelle Chauffeur-Services",
      heroDescription: "Erleben Sie luxuriöse Transportdienstleistungen mit unserem umfassenden Angebot an professionellen Chauffeur-Services. Von Executive-Reisen bis hin zu VIP-Transport bieten wir unvergleichlichen Komfort, Sicherheit und Diskretion für jede Reise.",
      executive: {
        title: "Executive Chauffeur Service",
        description: "Entwickelt für den anspruchsvollen Geschäftsprofi, garantiert unser Executive Service Pünktlichkeit, Diskretion und ein nahtloses Reiseerlebnis. Wir bieten eine mobile Büroumgebung, die es Ihnen ermöglicht, während der Fahrt produktiv zu bleiben.",
        feature1: "Pünktlichkeitsgarantie für alle Termine",
        feature2: "Vertraulichkeit und Diskretion gewährleistet",
        feature3: "WLAN und Ladeanschlüsse im Fahrzeug"
      },
      vip: {
        title: "VIP-Transport",
        description: "Für diejenigen, die höchsten Luxus, Sicherheit und Exklusivität benötigen. Unser VIP-Service betreut Prominente, Würdenträger und hochkarätige Kunden bei Red-Carpet-Events, Staatsbesuchen und privaten Veranstaltungen. Ihre Sicherheit und Privatsphäre haben höchste Priorität.",
        feature1: "Sicherheitsgeschulte Chauffeure verfügbar",
        feature2: "Maßgeschneiderte Reisekoordination",
        feature3: "Premium-Annehmlichkeiten und Erfrischungen"
      },
      airport: {
        title: "Flughafentransfer",
        description: "Zuverlässige Abholung und Bringdienste zum Flughafen."
      },
      wedding: {
        title: "Hochzeitstransport",
        description: "Eleganter Transport für Ihren besonderen Tag."
      },
      events: {
        title: "Veranstaltungstransport",
        description: "Professioneller Transport für Firmenveranstaltungen und besondere Anlässe."
      },

      // Additional service page translations
      heroTitle1: "Unsere Premium",
      heroTitle2: "Dienstleistungen",
      heroSubtitle: "Erleben Sie luxuriösen Transport mit unserem umfassenden Angebot an professionellen Chauffeur-Services",

      executiveTitle: "Executive Chauffeur Service",
      executiveDescription: "Entwickelt für den anspruchsvollen Geschäftsprofi, garantiert unser Executive-Service Pünktlichkeit, Diskretion und ein nahtloses Reiseerlebnis. Wir bieten eine mobile Büroumgebung, die es Ihnen ermöglicht, während der Fahrt produktiv zu bleiben.",
      executiveFeature1: "Pünktlichkeitsgarantie für alle Termine",
      executiveFeature2: "Vertraulichkeit und Diskretion gewährleistet",
      executiveFeature3: "WLAN und Ladeanschlüsse im Fahrzeug",

      vipTitle: "VIP-Transport",
      vipDescription: "Für diejenigen, die das Höchstmaß an Luxus, Sicherheit und Exklusivität benötigen. Unser VIP-Service richtet sich an Prominente, Würdenträger und hochkarätige Kunden für rote Teppich-Events, Staatsbesuche und private Veranstaltungen. Ihre Sicherheit und Privatsphäre haben höchste Priorität.",
      vipFeature1: "Sicherheitsgeschulte Chauffeure verfügbar",
      vipFeature2: "Maßgeschneiderte Reisekoordination",
      vipFeature3: "Premium-Annehmlichkeiten und Erfrischungen",

      airportTitle: "Flughafentransfer-Service",
      airportDescription: "Beginnen oder beenden Sie Ihre Reise in völligem Komfort und Stil. Wir bieten Premium-, zuverlässige Transfers zu und von allen großen Flughäfen. Unser Service umfasst Flugverfolgung, Meet-and-Greet-Services und Gepäckassistenz für ein stressfreies Erlebnis.",
      airportFeature1: "Echtzeit-Flugüberwachung",
      airportFeature2: "Persönlicher Empfang bei der Ankunft",
      airportFeature3: "Ausreichend Platz für Gepäck",

      comparisonTitle: "Service-Vergleich",
      comparisonSubtitle: "Wählen Sie das perfekte Service-Level für Ihre Bedürfnisse. Alle unsere Services umfassen professionelle Chauffeure und Luxusfahrzeuge.",
      tableFeatures: "Funktionen",
      tableExecutive: "Executive",
      tableVip: "VIP",
      tableAirport: "Flughafen",
      tableTourism: "Tourismus",
      rowProfessionalChauffeur: "Professioneller Chauffeur",
      rowLuxuryVehicle: "Luxusfahrzeug",
      rowFlightMonitoring: "Flugüberwachung",
      rowMeetGreet: "Meet & Greet",
      rowPersonalConcierge: "Persönlicher Concierge",
      rowPremiumAmenities: "Premium-Annehmlichkeiten",
      rowTourGuide: "Reiseführer",

      pricingTitle: "Transparente & faire Preise",
      pricingDescription: "Unsere Preise sind wettbewerbsfähig und auf Ihre spezifischen Bedürfnisse zugeschnitten. Für ein detailliertes Angebot basierend auf Ihrer Wahl von Service, Fahrzeug und Dauer kontaktieren Sie bitte unser Buchungsteam.",
      getQuoteBtn: "Persönliches Angebot anfordern"
    },
    // Fleet section
    fleet: {
      title: "Unsere Premium-Flotte",
      subtitle: "Luxusfahrzeuge für jeden Anlass",
      heroSubtitle: "LUXUS-FLOTTE",
      heroTitle: "Premium Fahrzeugkollektion",
      heroDescription: "Erleben Sie unvergleichlichen Luxus mit unserer sorgfältig gewarteten Flotte von Premium-Fahrzeugen. Jedes Auto ist mit modernsten Annehmlichkeiten ausgestattet und wird von professionellen Chauffeuren gefahren, um sicherzustellen, dass Ihre Reise außergewöhnlich ist.",
      specs: {
        engine: "Motor",
        capacity: "Kapazität",
        luggage: "Gepäck"
      },
      sclass: {
        title: "Mercedes S-Klasse",
        description: "Die definitive Luxuslimousine, die S-Klasse setzt den Standard für erstklassiges Reisen mit ihrem eleganten Design und ihrer wegweisenden Technologie.",
        engine: "3.0L V6 Turbo",
        capacity: "2-3 Passagiere",
        luggage: "2 große Koffer",
        feature1: "Nappa-Ledersitze",
        feature2: "Burmester® Surround-Sound",
        feature3: "Ambientebeleuchtung",
        feature4: "Kostenloses WLAN & Erfrischungen"
      },
      bmw7: {
        title: "BMW 7er Serie",
        description: "Erleben Sie dynamischen Luxus. Die BMW 7er Serie kombiniert aufregende Leistung mit einem anspruchsvollen Interieur für ultimativen Komfort.",
        engine: "4.4L V8",
        capacity: "2-3 Passagiere",
        luggage: "2 große Koffer",
        feature1: "Merino-Lederausstattung",
        feature2: "Bowers & Wilkins Soundsystem",
        feature3: "Panorama Sky Lounge LED-Dach",
        feature4: "Rücksitz-Entertainment-System"
      },
      vclass: {
        title: "Mercedes V-Klasse",
        description: "Die V-Klasse ist der Inbegriff vielseitigen Luxus und bietet großzügigen Raum für Familien, Gruppen oder Geschäftsteams ohne Kompromisse bei Stil oder Komfort.",
        engine: "2.0L Diesel",
        capacity: "Bis zu 7 Passagiere",
        luggage: "5-6 große Koffer",
        feature1: "Konferenz-Ledersitze",
        feature2: "Reichlich Bein- und Kopffreiheit",
        feature3: "Separate Klimaregelung hinten",
        feature4: "USB-Anschlüsse für alle Passagiere"
      },
      mercedes_s: {
        title: "Mercedes S-Klasse",
        description: "Der Inbegriff von Luxus und Komfort für Executive-Reisen."
      },
      bmw_7: {
        title: "BMW 7er Serie",
        description: "Anspruchsvolle Luxuslimousine mit modernster Technologie."
      },
      mercedes_v: {
        title: "Mercedes V-Klasse",
        description: "Geräumiger Luxusvan, perfekt für Gruppentransporte."
      }
    },
    // Destinations section
    destinations: {
      heroSubtitle: "TOURISMUSDIENSTLEISTUNGEN",
      heroTitle: "Beliebte Reiseziele",
      heroDescription: "Entdecken Sie Deutschlands beliebteste Reiseziele mit unseren Premium-Transportdiensten. Unsere erfahrenen Chauffeure bringen Sie zu ikonischen Wahrzeichen, historischen Stätten und atemberaubenden Naturwundern in Komfort und Stil.",
      exploreBtn: "Erkunden",
      bookTourBtn: "Tour buchen",
      munich: {
        title: "München",
        subtitle: "Bayerns Kulturhauptstadt",
        description: "Erleben Sie die perfekte Mischung aus traditioneller bayerischer Kultur und moderner Raffinesse in Deutschlands drittgrößter Stadt."
      },
      hamburg: {
        title: "Hamburg",
        subtitle: "Tor zur Welt",
        description: "Entdecken Sie den maritimen Charme von Deutschlands zweitgrößter Stadt, berühmt für ihren historischen Hafen und das lebendige Nachtleben."
      },
      frankfurt: {
        title: "Frankfurt",
        subtitle: "Finanzmetropole",
        description: "Erkunden Sie Deutschlands Finanzzentrum, wo moderne Wolkenkratzer auf historischen Charme in dieser kosmopolitischen Stadt treffen."
      },
      heidelberg: {
        title: "Heidelberg",
        subtitle: "Romantische Universitätsstadt",
        description: "Besuchen Sie eine der schönsten Städte Deutschlands, berühmt für ihre historische Universität und beeindruckende Schlossruinen."
      },
      blackForest: {
        title: "Schwarzwald",
        subtitle: "Verzauberte Wildnis",
        description: "Reisen Sie durch Deutschlands berühmteste Waldregion, bekannt für ihre dichten Wälder, charmanten Dörfer und Kuckucksuhren."
      },
      badenBaden: {
        title: "Baden-Baden",
        subtitle: "Eleganter Kurort",
        description: "Entspannen Sie sich in diesem anspruchsvollen Kurort, berühmt für seine Thermalbäder, Casinos und Belle-Époque-Architektur."
      },
      amsterdam: {
        title: "Amsterdam",
        subtitle: "Venedig des Nordens",
        description: "Erkunden Sie die charmanten Kanäle, Weltklasse-Museen und lebendige Kultur der niederländischen Hauptstadt."
      },
      geneva: {
        title: "Genf",
        subtitle: "Internationales Zentrum",
        description: "Entdecken Sie diese kosmopolitische Schweizer Stadt, Heimat internationaler Organisationen und atemberaubender Alpenlandschaften."
      },
      interlaken: {
        title: "Interlaken",
        subtitle: "Alpen-Abenteuer-Tor",
        description: "Erleben Sie atemberaubende Bergblicke und Outdoor-Abenteuer in diesem malerischen Schweizer Ferienort."
      },
      luxembourg: {
        title: "Luxemburg",
        subtitle: "Großherzogtum-Charme",
        description: "Erkunden Sie diese kleine aber mächtige europäische Hauptstadt, bekannt für ihre mittelalterliche Altstadt und das moderne Finanzviertel."
      },
      northSeaCoast: {
        title: "Nordseeküste",
        subtitle: "Küstenschönheit",
        description: "Entdecken Sie die raue Schönheit von Deutschlands nördlicher Küste mit ihren unberührten Stränden und charmanten Küstenstädten."
      },
      paris: {
        title: "Paris",
        subtitle: "Stadt des Lichts",
        description: "Erleben Sie die Romantik und Eleganz der französischen Hauptstadt, Heimat weltberühmter Wahrzeichen und kultureller Schätze."
      },
      ctaTitle: "Bereit für Ihre Reise?",
      ctaDescription: "Kontaktieren Sie uns noch heute, um Ihr perfektes Reiseziel-Erlebnis zu planen. Unsere Premium-Chauffeur-Services sorgen dafür, dass Sie komfortabel und stilvoll zu jedem dieser herrlichen Orte reisen."
    },
    // Tourism section
    tourism: {
      heroSubtitle: "LUXURIÖSE REISEERLEBNISSE",
      heroTitle: "Tourismus Überall",
      heroDescription: "Erleben Sie Deutschlands schönste Attraktionen mit unseren kuratierten Tourismuspaketen. Von lebendigen Städten bis hin zu aufregenden Freizeitparks bieten wir luxuriöse Transportmöglichkeiten für unvergessliche Reisen.",
      themeParksTitle: "Freizeitparks & Unterhaltung",
      shoppingToursTitle: "Luxuriöse Shopping-Touren",
      bookVisitBtn: "Besuch buchen",
      bookShoppingTourBtn: "Shopping-Tour buchen",
      europaPark: {
        title: "Europa-Park",
        description: "Deutschlands größter Freizeitpark mit aufregenden Fahrgeschäften und europäisch gestalteten Bereichen."
      },
      legoland: {
        title: "LEGOLAND",
        description: "Perfektes Familienziel mit LEGO-thematischen Attraktionen und interaktiven Erlebnissen."
      },
      phantasialand: {
        title: "Phantasialand",
        description: "Preisgekrönter Freizeitpark mit Weltklasse-Achterbahnen und thematischen Welten."
      },
      heidePark: {
        title: "Heide Park Resort",
        description: "Norddeutschlands größter Freizeitpark mit extremen Fahrgeschäften und Attraktionen."
      },
      moviePark: {
        title: "Movie Park Germany",
        description: "Hollywood-thematischer Park mit filminspirierten Fahrgeschäften und Shows."
      },
      disneylandParis: {
        title: "Disneyland Paris",
        description: "Magisches Disney-Erlebnis mit klassischen Attraktionen und europäischem Charme."
      },
      outletcityMetzingen: {
        title: "Outletcity Metzingen",
        description: "Premium-Outlet mit Luxusmarken wie Hugo Boss, Escada und mehr."
      },
      wertheimVillage: {
        title: "Wertheim Village",
        description: "Schickes Outlet-Dorf in der Nähe von Frankfurt mit internationalen Designermarken."
      },
      designerOutletRoermond: {
        title: "Designer Outlet Roermond",
        description: "Niederländisches Outlet-Center mit über 200 Designermarken und Boutiquen."
      },
      laValleeVillage: {
        title: "La Vallée Village",
        description: "Pariser Outlet-Dorf in der Nähe von Disneyland mit luxuriösen französischen Marken."
      },
      serravaIleDesignerOutlet: {
        title: "Serravalle Designer Outlet",
        description: "Italiens größtes Outlet mit Premium-italienischen und internationalen Marken."
      },
      ctaTitle: "Bereit für Ihre Reise?",
      ctaDescription: "Kontaktieren Sie uns heute, um Ihr perfektes Tourismus-Erlebnis mit unseren Premium-Chauffeur-Services zu planen."
    },
    // Contact section
    contact: {
      sectionTitle: "KONTAKT",
      title: "Kontakt aufnehmen",
      description: "Kontaktieren Sie uns noch heute, um Ihren Premium-Transport zu arrangieren. Unser Team steht Ihnen rund um die Uhr zur Verfügung, um Sie bei allen Ihren Chauffeur-Service-Bedürfnissen zu unterstützen.",
      readyToBook: "Bereit zu buchen?",
      ctaDescription: "Nehmen Sie über unsere spezielle Kontaktseite Kontakt mit uns auf. Füllen Sie unser detailliertes Formular aus oder nutzen Sie unsere schnellen Kontaktoptionen.",
      contactUsButton: "Kontakt aufnehmen",
      infoTitle: "Kontaktinformationen",
      phone: "Telefon",
      email: "E-Mail",
      availability: "Verfügbarkeit",
      availabilityText: "24/7 Service verfügbar",
      serviceArea: "Servicebereich",
      serviceAreaText: "Deutschland und Umgebung",
      quickContact: "Schnellkontakt",
      callNow: "Jetzt anrufen",
      sendEmail: "E-Mail senden",
      // Contact form
      heroSubtitle: "KONTAKT",
      heroTitle: "Kontakt aufnehmen",
      heroDescription: "Kontaktieren Sie uns noch heute, um Ihren Premium-Transport zu arrangieren. Unser Team steht Ihnen rund um die Uhr zur Verfügung, um Sie bei allen Ihren Chauffeur-Service-Bedürfnissen zu unterstützen.",
      heroExtendedDescription: "Ob Sie Executive-Transport für Geschäftstermine, luxuriöse Flughafentransfers, Chauffeur-Services für besondere Anlässe oder personalisierte Stadttouren benötigen - unser professionelles Team ist bereit, Ihre Erwartungen zu übertreffen. Wir sind stolz auf Pünktlichkeit, Diskretion und die Bereitstellung eines unvergleichlichen Reiseerlebnisses.",
      availability24: "24/7 Verfügbarkeit",
      availabilityDesc: "Rund-um-die-Uhr-Service für alle Ihre Transportbedürfnisse",
      instantResponse: "Sofortige Antwort",
      responseDesc: "Schnelle Antworten auf alle Anfragen und Buchungsanfragen",
      professionalService: "Professioneller Service",
      professionalDesc: "Erfahrene Chauffeure und Premium-Fahrzeugflotte",
      formTitle: "Senden Sie uns eine Nachricht",
      formDescription: "Bereit für Premium-Chauffeur-Services? Teilen Sie uns Ihre Transportbedürfnisse mit und wir gestalten die perfekte Reise für Sie. Ob Flughafentransfers, Geschäftstermine, besondere Anlässe oder Stadttouren - unser Team ist hier, um Ihnen außergewöhnlichen Service zu bieten, der auf Ihre Anforderungen zugeschnitten ist.",
      nameLabel: "Ihr Name",
      namePlaceholder: "Geben Sie Ihren vollständigen Namen ein",
      emailLabel: "E-Mail-Adresse",
      emailPlaceholder: "Geben Sie Ihre E-Mail-Adresse ein",
      phoneLabel: "Telefonnummer",
      phonePlaceholder: "Geben Sie Ihre Telefonnummer ein",
      serviceLabel: "Service-Typ",
      selectService: "Wählen Sie einen Service",
      executiveChauffeur: "Executive Chauffeur",
      vipTransportation: "VIP-Transport",
      airportTransfer: "Flughafentransfer",
      tourismServices: "Tourismus-Services",
      other: "Andere",
      messageLabel: "Nachricht",
      messagePlaceholder: "Erzählen Sie uns von Ihren Transportbedürfnissen...",
      sending: "Wird gesendet...",
      whatsapp: "WhatsApp",
      contactInfoTitle: "Kontaktinformationen",
      phoneTitle: "Telefon",
      emailTitle: "E-Mail",
      availabilityTitle: "Verfügbarkeit",
      serviceAreaTitle: "Servicebereich",
      // Quick Contact section
      quickContactTitle: "Schnellkontakt",
      bookNow: "Jetzt buchen",
      callNow: "Jetzt anrufen",
      sendEmail: "E-Mail senden",
      // Business Card section
      businessCardTitle: "Unsere Visitenkarte",
      businessCardDesc: "Klicken Sie auf die Karte, um beide Seiten unserer Visitenkarte zu sehen",
      // Exploration section
      exploreTitle: "Entdecken Sie unsere Services",
      exploreDescription: "Entdecken Sie unsere Premium-Reiseziele und Tourismuspakete, die für Ihre perfekte Reise konzipiert sind.",
      tourismButton: "Tourismuspakete",
      tourismDesc: "Luxuriöse Reiseerlebnisse",
      destinationsButton: "Premium-Reiseziele",
      destinationsDesc: "Exklusive Reiseorte"
    },
    // Booking section
    booking: {
      heroSubtitle: "BUCHEN SIE IHREN SERVICE",
      heroTitle: "Reservieren Sie Ihren Premium-Transport",
      heroDescription: "Füllen Sie unser Buchungsformular aus, um Ihren luxuriösen Chauffeur-Service zu reservieren. Unser Team bestätigt Ihre Buchung innerhalb von 24 Stunden.",
      formTitle: "Buchen Sie Ihren Service",
      step1Label: "Reisedetails",
      step2Label: "Fahrzeug & Extras",
      step3Label: "Persönliche Daten",
      step1Title: "Schritt 1: Reisedetails",
      step2Title: "Schritt 2: Fahrzeug & Extras",
      step3Title: "Schritt 3: Persönliche Daten",
      startLocationLabel: "Startort",
      startLocationPlaceholder: "Abholort eingeben",
      serviceTypeLabel: "Service-Typ",
      selectServiceType: "Service-Typ auswählen",
      executiveChauffeur: "Executive Chauffeur",
      vipTransportation: "VIP-Transport",
      airportTransfer: "Flughafentransfer",
      tourismServices: "Tourismus-Services",
      other: "Andere",
      destinationLabel: "Ziel",
      selectDestination: "Ziel auswählen",
      dateLabel: "Datum",
      timeLabel: "Zeit",
      durationLabel: "Dauer",
      oneDay: "1 Tag",
      twoDays: "2 Tage",
      threeDays: "3 Tage",
      fourDays: "4 Tage",
      fiveDays: "5 Tage",
      sixDays: "6 Tage",
      sevenDays: "7 Tage",
      moreThanSevenDays: "Mehr als 7 Tage",
      passengersLabel: "Anzahl der Passagiere",
      onePerson: "1 Person",
      twoPeople: "2 Personen",
      threePeople: "3 Personen",
      fourPeople: "4 Personen",
      fivePeople: "5 Personen",
      sixPeople: "6 Personen",
      sevenPeople: "7 Personen",
      eightPeople: "8 Personen",
      moreThanEightPeople: "Mehr als 8 Personen",
      nextStep: "Nächster Schritt",
      selectVehicleType: "Fahrzeugtyp auswählen",
      bmw7Series: "BMW 7er Serie",
      bmw7SeriesDesc: "Luxuslimousine für Executive-Reisen",
      mercedesSClass: "Mercedes S-Klasse",
      mercedesSClassDesc: "Premium-Komfort und Stil",
      mercedesVClass: "Mercedes V-Klasse",
      mercedesVClassDesc: "Geräumiger Van für Gruppen",
      additionalServices: "Zusätzliche Services",
      wifiAccess: "WLAN-Zugang",
      wheelchairAccess: "Rollstuhlzugang"
    },
    // Footer
    footer: {
      copyright: "© 2024 Premium Chauffeur Services. Alle Rechte vorbehalten.",
      privacy: "Datenschutzrichtlinie",
      terms: "Nutzungsbedingungen",
      companyDescription: "Erleben Sie luxuriöse Transportdienstleistungen mit unseren Premium-Chauffeur-Services. Professionelle Fahrer, Luxusfahrzeuge und außergewöhnlicher Service in ganz Deutschland und Europa.",
      quickLinks: "Schnellzugriff",
      servicesTitle: "Dienstleistungen",
      airportTransfer: "Flughafentransfer",
      chauffeurService: "Chauffeur-Service",
      vipService: "VIP-Service",
      businessTravel: "Geschäftsreisen",
      eventTransportation: "Veranstaltungstransport",
      contactInfo: "Kontaktinformationen",
      address: "Adresse",
      addressText: "Luxusstraße 123, 10115 Berlin, Deutschland",
      phone: "Telefon",
      email: "E-Mail",
      hours: "Öffnungszeiten",
      hoursText: "24/7 verfügbar",
      weAccept: "Wir akzeptieren",
      followUs: "Folgen Sie uns",
      privacyPolicy: "Datenschutzrichtlinie",
      termsOfService: "Nutzungsbedingungen",
      cookiePolicy: "Cookie-Richtlinie",
      imprint: "Impressum"
    },
    // Slideshow
    slideshow: {
      slides: [
        {
          title: "Frankfurt",
          description: "Finanzmetropole mit beeindruckender Skyline und reichem kulturellen Erbe."
        },
        {
          title: "Paris",
          description: "Die Stadt der Liebe mit dem ikonischen Eiffelturm und charmanten Cafés."
        },
        {
          title: "Amsterdam",
          description: "Malerische Grachtenstadt mit einzigartigem Flair und historischer Architektur."
        },
        {
          title: "Hamburg",
          description: "Hanseatische Metropole mit maritimem Charme und der beeindruckenden Elbphilharmonie."
        },
        {
          title: "Heidelberg",
          description: "Romantische Universitätsstadt mit malerischer Altstadt und berühmtem Schloss."
        },
        {
          title: "Genf",
          description: "Internationale Stadt am Genfer See mit der berühmten Fontäne Jet d'Eau."
        },
        {
          title: "Genf",
          description: "Heimat der Vereinten Nationen und des Roten Kreuzes mit Blick auf den Mont Blanc."
        },
        {
          title: "Interlaken",
          description: "Malerisch zwischen Thuner- und Brienzersee gelegen mit Blick auf die Alpen."
        },
        {
          title: "Interlaken",
          description: "Das Tor zum Berner Oberland mit spektakulärem Alpenpanorama."
        },
        {
          title: "Luxemburg",
          description: "Kleines Großherzogtum mit malerischer Hauptstadt und historischen Befestigungen."
        },
        {
          title: "Nordsee",
          description: "Beliebte Urlaubsregion mit weiten Stränden und einzigartigem Wattenmeer."
        },
        {
          title: "Wagrain",
          description: "Idyllisches Alpendorf mit atemberaubenden Bergpanoramen und Wintersport."
        }
      ]
    },
    // Chatbot
    chatbot: {
      title: "Premium Chauffeur Assistent",
      placeholder: "Fragen Sie nach unseren Dienstleistungen..."
    },
    // Common
    common: {
      readMore: "Mehr lesen",
      learnMore: "Mehr erfahren",
      bookNow: "Jetzt buchen",
      viewDetails: "Details anzeigen"
    }
  }
};

console.log('Translations loaded:', translations);

// Simple LanguageManager
class LanguageManager {
  constructor() {
    console.log('LanguageManager constructor called');
    this.currentLanguage = localStorage.getItem('language') || 'en';
    this.translations = translations;
    this.init();
  }

  init() {
    console.log('LanguageManager init called, current language:', this.currentLanguage);
    this.updatePageDirection();
    this.translatePage();
    // Delay slideshow update to ensure slideshow is initialized
    setTimeout(() => {
      this.updateSlideshow();
    }, 100);
  }

  setLanguage(lang) {
    console.log('Setting language to:', lang);
    this.currentLanguage = lang;
    localStorage.setItem('language', lang);
    this.updatePageDirection();
    this.translatePage();
    this.updateSlideshow();
    this.updateLanguageButtonStates();
  }

  updatePageDirection() {
    document.documentElement.dir = this.currentLanguage === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = this.currentLanguage;
    console.log('Page direction updated to:', document.documentElement.dir);
  }

  translate(key) {
    const keys = key.split('.');
    let value = this.translations[this.currentLanguage];
    
    for (const k of keys) {
      value = value?.[k];
    }
    
    return value || key;
  }

  translatePage() {
    console.log('Translating page...');
    const elements = document.querySelectorAll('[data-translate]');
    console.log('Found elements to translate:', elements.length);

    elements.forEach(element => {
      const key = element.getAttribute('data-translate');
      const translation = this.translate(key);
      console.log(`Translating "${key}" to "${translation}"`);

      if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
        element.placeholder = translation;
      } else {
        element.textContent = translation;
      }
    });

    // Translate elements with data-translate-placeholder attribute
    const placeholderElements = document.querySelectorAll('[data-translate-placeholder]');
    console.log('Found placeholder elements to translate:', placeholderElements.length);

    placeholderElements.forEach(element => {
      const key = element.getAttribute('data-translate-placeholder');
      const translation = this.translate(key);
      console.log(`Translating placeholder "${key}" to "${translation}"`);
      element.placeholder = translation;
    });
  }

  updateSlideshow() {
    console.log('Updating slideshow translations...');
    // Update slideshow with translated content
    if (window.slideshowData && typeof window.updateSlideContent === 'function') {
      const slides = this.translate('slideshow.slides');
      if (Array.isArray(slides)) {
        console.log('Found slideshow translations:', slides.length, 'slides');
        // Update the global slideshow data with translated content
        window.slideshowData = slides.map((slide, index) => ({
          image: window.slideshowData[index]?.image || `assets/slideshow/slide-${index + 1}.jpg`,
          title: slide.title,
          description: slide.description
        }));

        // Update current slide if slideshow is initialized
        if (window.currentSlide !== undefined) {
          console.log('Updating current slide:', window.currentSlide);
          window.updateSlideContent(window.currentSlide);
        }
      } else {
        console.log('No slideshow translations found for language:', this.currentLanguage);
      }
    } else {
      console.log('Slideshow not initialized yet');
    }
  }

  updateLanguageButtonStates() {
    console.log('Updating language button states for:', this.currentLanguage);
    const languageButtons = document.querySelectorAll('.language-btn');
    languageButtons.forEach(btn => {
      const btnLang = btn.getAttribute('data-lang');
      if (btnLang === this.currentLanguage) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });
  }
}

// Make available globally
if (typeof window !== 'undefined') {
  window.LanguageManager = LanguageManager;
  window.translations = translations;
  
  window.switchLanguage = function(lang) {
    console.log('Global switchLanguage called with:', lang);
    if (window.languageManager) {
      window.languageManager.setLanguage(lang);
    } else {
      window.languageManager = new LanguageManager();
      window.languageManager.setLanguage(lang);
    }
  };
  
  // Auto-initialize
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
      console.log('Auto-initializing LanguageManager on DOMContentLoaded');
      if (!window.languageManager) {
        window.languageManager = new LanguageManager();
      }
    });
  } else {
    console.log('Auto-initializing LanguageManager immediately');
    if (!window.languageManager) {
      window.languageManager = new LanguageManager();
    }
  }
}

console.log('Simple translations script loaded successfully');
