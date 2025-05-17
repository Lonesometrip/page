import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Define resources manually to avoid issues with direct imports
const resources = {
  en: {
    translation: {
      "navbar": {
        "carpool": "Carpool",
        "services": "Services",
        "tourism": "Tourism",
        "contact": "Contact"
      },
      "carpool": {
        "title": "Carpool",
        "subtitle": "Premium Vehicles",
        "description": "Our premium carpool service offers comfortable and reliable transportation options for groups of all sizes. Whether you're traveling for business or leisure, our fleet of luxury vehicles ensures a smooth and enjoyable journey. We prioritize safety, punctuality, and customer satisfaction with every ride.",
        "viewDetails": "Click to view details",
        "mercedes-sclass": "Mercedes S-Class",
        "bmw-7": "BMW 7",
        "mercedes-vclass": "Mercedes V-Class"
      },
      "services": {
        "title": "Our Services",
        "subtitle": "Premium Transportation",
        "chauffeurservice": "Chauffeur Service",
        "airporttransfer": "Airport Transfer",
        "vip-service": "VIP Service"
      },
      "tourism": {
        "title": "Tourism Packages",
        "subtitle": "Luxury Travel Experiences",
        "description": "Discover our exclusive tourism packages designed to provide unforgettable experiences. Each package includes luxury transportation in our premium vehicles, expert guides, and carefully selected accommodations for your comfort.",
        "exploreCategories": "Explore Our Tourism Categories:",
        "beliebte-zielorte": "Popular Destinations",
        "beliebte-zielorte-desc": "Discover Germany's most beloved tourist attractions and landmarks.",
        "shoppingtours": "Shopping Tours",
        "shoppingtours-desc": "Exclusive shopping experiences at Germany's finest retail destinations.",
        "freizeitparks": "Theme Parks",
        "freizeitparks-desc": "Visit Germany's best theme parks and amusement attractions.",
        "bauernhofe": "Farms",
        "bauernhofe-desc": "Experience authentic German farm life and rural traditions."
      },
      "hero": {
        "title": "PREMIUM CHAUFFEUR SERVICE",
        "subtitle": "Your Limousine Service",
        "typewriter": [
          "Luxury Limousine Service",
          "Business Chauffeur Service",
          "Executive Transfer Service",
          "VIP Chauffeur Service",
          "Airport Transfer Service",
          "Mercedes S-Class with Driver",
          "24h Premium Driver Service"
        ]
      },
      "footer": {
        "copyright": "© {{year}} Premium Chauffeur Services. All rights reserved.",
        "address": "Address",
        "phone": "Phone",
        "email": "Email",
        "quickLinks": "Quick Links",
        "legal": "Legal",
        "privacyPolicy": "Privacy Policy",
        "termsOfService": "Terms of Service",
        "cookiePolicy": "Cookie Policy",
        "imprint": "Imprint",
        "companyInfo": "Premium transportation services for discerning clients."
      },
      "contact": {
        "title": "Get in Touch",
        "subtitle": "Get in touch",
        "section_title": "CONTACT",
        "name": "Your Name",
        "email": "Your Email",
        "message": "Your Message",
        "send": "Send",
        "sending": "Sending...",
        "success": "Thank you! We will get back to you as soon as possible.",
        "error": "Something went wrong. Please try again."
      },
      "common": {
        "readMore": "Read More",
        "learnMore": "Learn More",
        "bookNow": "Book Now",
        "bookTour": "Book This Tour",
        "ourVehicles": "Our Vehicles",
        "clickToView": "Click to view details",
        "planCustomTour": "Plan Your Custom Tour"
      },
      "booking": {
        "title": "Booking Request",
        "step1": "Step 1: Travel Details",
        "step2": "Step 2: Vehicle & Extras",
        "step3": "Step 3: Personal Details",
        "step4": "Confirmation",
        "startLocation": "Start Location",
        "startLocationPlaceholder": "e.g. Berlin Central Station",
        "service": "Service",
        "servicePlaceholder": "Please select a service",
        "otherService": "Other",
        "customServicePlaceholder": "Please enter your desired service",
        "destination": "Destination",
        "destinationPlaceholder": "Please select a destination",
        "otherDestination": "Other",
        "customDestinationPlaceholder": "Please enter your destination",
        "date": "Date",
        "time": "Time",
        "duration": "Duration (Days)",
        "day": "Day",
        "days": "Days",
        "moreThan7Days": "More than 7 days",
        "passengers": "Number of Passengers",
        "person": "Person",
        "people": "People",
        "moreThan8People": "More than 8 people",
        "next": "Next",
        "back": "Back",
        "vehicleType": "Vehicle Type",
        "upTo3People": "Up to 3 people",
        "premiumVehicle": "Premium vehicle",
        "upTo8People": "Up to 8 people",
        "extras": "Extras",
        "wifi": "WiFi in vehicle",
        "wheelchair": "Wheelchair",
        "childSeat": "Child seat",
        "tourGuide": "Tour guide",
        "name": "Name",
        "namePlaceholder": "Your full name",
        "email": "Email",
        "emailPlaceholder": "Your email address",
        "phone": "Phone",
        "phonePlaceholder": "Your phone number",
        "notes": "Notes",
        "notesPlaceholder": "Additional information or requests for your tour",
        "privacyPolicy": "I have read and accept the",
        "privacyPolicyLink": "privacy policy",
        "requestTour": "Request Tour",
        "successMessage": "Your request has been successfully sent!",
        "errorMessage": "There was an error submitting your booking. Please try again later."
      },
      "vehicles": {
        "mercedes-sclass": {
          "title": "Mercedes S-Class",
          "subtitle": "Premium Vehicle",
          "cta-title": "Ready to Experience Luxury?",
          "cta-description": "Book your premium Mercedes S-Class chauffeur service today and enjoy the ultimate in comfort and style.",
          "description": "The pinnacle of luxury sedans, offering unparalleled comfort and sophisticated design.",
          "gallery": "Gallery",
          "premium-services": "Premium Services & Luxury Experience",
          "services-list": [
            "Professional chauffeur service",
            "Complimentary Wi-Fi onboard",
            "Premium refreshments",
            "Daily newspapers and magazines",
            "Advanced driver assistance systems for maximum safety",
            "Premium Burmester® surround sound system",
            "Ambient lighting with 64 colors",
            "Spacious cabin with executive rear seating"
          ],
          "book-cta": "Book your premium Mercedes S-Class chauffeur service today and enjoy the ultimate in comfort and style."
        },
        "bmw-7": {
          "title": "BMW 7 Series",
          "subtitle": "Premium Vehicle",
          "cta-title": "Experience Ultimate Driving Luxury",
          "cta-description": "Book your premium BMW 7 Series chauffeur service today and enjoy the perfect blend of performance and luxury.",
          "description": "Executive luxury sedan combining advanced technology with exceptional comfort.",
          "gallery": "Gallery",
          "premium-services": "Premium Services & Luxury Experience",
          "services-list": [
            "Professional chauffeur service",
            "Complimentary Wi-Fi onboard",
            "Premium refreshments",
            "Daily newspapers and magazines",
            "Advanced technology and driver assistance features",
            "Premium entertainment system",
            "Spacious cabin with premium amenities",
            "Powerful performance with sophisticated driving dynamics"
          ],
          "book-cta": "Book your premium BMW 7 Series chauffeur service today and enjoy the perfect blend of performance and luxury."
        },
        "mercedes-vclass": {
          "title": "Mercedes V-Class",
          "subtitle": "Premium Vehicle",
          "cta-title": "Perfect for Group Travel",
          "cta-description": "Book your premium Mercedes V-Class chauffeur service today and enjoy spacious luxury for your group or family.",
          "description": "Spacious luxury MPV perfect for group travel with exceptional comfort.",
          "gallery": "Gallery",
          "premium-services": "Premium Services & Group Travel",
          "services-list": [
            "Professional chauffeur service",
            "Complimentary Wi-Fi onboard",
            "Premium refreshments",
            "Daily newspapers and magazines",
            "Premium leather upholstery with ambient lighting",
            "Burmester® surround sound system",
            "Panoramic sliding sunroof",
            "Electric sliding doors for easy access"
          ],
          "book-cta": "Book your premium Mercedes V-Class chauffeur service today and enjoy spacious luxury for your group or family."
        }
      },
      "service-details": {
        "executive": {
          "title": "Executive Chauffeur Service",
          "company": "Premium Chauffeur | Business Travel",
          "date": "Available 24/7",
          "points": [
            "Professional chauffeur service for executives and business professionals with luxury Mercedes S-Class and BMW 7 Series vehicles.",
            "Discreet, reliable transportation with experienced drivers who understand the needs of corporate clients.",
            "Complimentary amenities including Wi-Fi, refreshments, and daily newspapers for productive travel time."
          ]
        },
        "airport": {
          "title": "Airport Transfer Service",
          "company": "Premium Chauffeur | Airport Transfers",
          "date": "All Major Airports",
          "points": [
            "Seamless airport transfers with flight monitoring and adjusted pickup times for early arrivals or delays.",
            "Meet and greet service with luggage assistance and priority pickup at all major European airports.",
            "Comfortable, stress-free transportation in luxury vehicles after long flights with 60 minutes of complimentary waiting time."
          ]
        },
        "group": {
          "title": "Group Transportation",
          "company": "Premium Chauffeur | Group Travel",
          "date": "Up to 7 Passengers",
          "points": [
            "Spacious Mercedes V-Class vehicles for comfortable group transportation with ample luggage space.",
            "Perfect for family vacations, corporate teams, or small group tours with personalized service.",
            "Wheelchair accessible options available with professional assistance for passengers with mobility needs."
          ]
        }
      },
      "service-pages": {
        "common": {
          "our-services": "Our Services",
          "book-now": "Book Now",
          "inquire": "Inquire About Service",
          "service-features": "Service Features:",
          "service-options": "Service Options:"
        },
        "chauffeur-service": {
          "title": "Chauffeur Service",
          "description": "Experience the ultimate in luxury transportation with our premium chauffeur service. Our professional drivers are dedicated to providing exceptional service, ensuring your journey is comfortable, safe, and tailored to your specific needs.",
          "experience-title": "Our Premium Chauffeur Experience:",
          "professional-chauffeurs": "Professional Chauffeurs",
          "professional-chauffeurs-desc": "Our uniformed chauffeurs provide exceptional service with attention to detail.",
          "luxury-vehicles": "Luxury Vehicles",
          "luxury-vehicles-desc": "Travel in comfort with our premium vehicles equipped with amenities for a relaxing journey.",
          "personalized-service": "Personalized Service",
          "personalized-service-desc": "Customized transportation solutions tailored to your specific requirements and preferences.",
          "business-travel": "Business Travel",
          "business-travel-desc": "Perfect for executives and business professionals. Our chauffeurs ensure you arrive at meetings, conferences, and corporate events on time and in style.",
          "special-occasions": "Special Occasions",
          "special-occasions-desc": "Make your special day even more memorable with our luxury chauffeur service for weddings, anniversaries, and other celebrations.",
          "airport-transfers": "Airport Transfers",
          "airport-transfers-desc": "Stress-free transportation to and from airports with flight monitoring and adjusted pickup times for early arrivals or delays.",
          "city-tours": "City Tours",
          "city-tours-desc": "Explore cities with a knowledgeable chauffeur who can provide insights and recommendations for an enhanced experience.",
          "vip-service": "VIP Service",
          "vip-service-desc": "Exclusive service for VIPs with enhanced privacy, security, and personalized attention to detail."
        },
        "airport-transfer": {
          "title": "Airport Transfer",
          "description": "Start and end your journey in comfort and style with our premium airport transfer service. We provide seamless transportation to and from airports, ensuring a stress-free travel experience with our professional chauffeurs and luxury vehicles.",
          "features": [
            "Flight monitoring to adjust for early arrivals or delays",
            "Meet and greet service with personalized welcome sign",
            "Assistance with luggage handling",
            "Comfortable, climate-controlled luxury vehicles",
            "Complimentary waiting time (45 minutes for domestic, 60 minutes for international flights)"
          ],
          "services-title": "Premium Airport Transfer Services:",
          "meet-greet": "Meet & Greet",
          "meet-greet-desc": "Our chauffeurs will meet you at the arrivals hall with a personalized welcome sign.",
          "luxury-vehicles": "Luxury Vehicles",
          "luxury-vehicles-desc": "Travel in comfort with our premium vehicles equipped with amenities for a relaxing journey.",
          "vip-terminal": "VIP Terminal Access",
          "vip-terminal-desc": "Enjoy expedited service with our VIP terminal access at select airports.",
          "airports-title": "Airports We Serve:",
          "major-airports": "Major International Airports",
          "major-airports-list": [
            "Frankfurt Airport (FRA)",
            "Munich Airport (MUC)",
            "Berlin Brandenburg Airport (BER)",
            "Düsseldorf Airport (DUS)"
          ],
          "regional-airports": "Regional Airports",
          "regional-airports-list": [
            "Stuttgart Airport (STR)",
            "Cologne Bonn Airport (CGN)",
            "Hamburg Airport (HAM)",
            "Nuremberg Airport (NUE)"
          ],
          "booking-process": "Booking Process:",
          "booking-steps": [
            "Provide your flight details and pickup/drop-off locations",
            "Select your preferred vehicle",
            "Receive confirmation with chauffeur details",
            "Enjoy your stress-free airport transfer"
          ]
        },
        "vip-service": {
          "title": "VIP Service",
          "description": "Our exclusive VIP service offers the highest level of luxury, privacy, and security for discerning clients. From celebrities and executives to diplomats and high-profile individuals, we provide discreet, personalized transportation with enhanced security measures and premium amenities.",
          "services-title": "Exclusive VIP Services:",
          "security": "Enhanced Security",
          "security-desc": "Comprehensive security protocols for high-profile clients requiring discretion and protection.",
          "privacy": "Complete Privacy",
          "privacy-desc": "Tinted windows, privacy partitions, and confidentiality agreements ensure your journey remains private.",
          "luxury": "Ultimate Luxury",
          "luxury-desc": "Premium vehicles with exclusive amenities tailored to your preferences for an unparalleled experience.",
          "options-title": "VIP Service Options:",
          "protection": "Executive Protection",
          "protection-desc": "Comprehensive security service with trained personnel and secure vehicles for high-profile clients requiring enhanced protection.",
          "celebrity": "Celebrity Transportation",
          "celebrity-desc": "Discreet, secure transportation for celebrities and public figures with privacy and security as top priorities.",
          "features": [
            "Professionally trained chauffeurs with security expertise",
            "Secure vehicle fleet with enhanced safety features",
            "Confidentiality agreements and NDAs for all staff",
            "Advanced route planning to avoid public exposure",
            "Vehicles with privacy glass and enhanced security features"
          ]
        }
      },
      "legal": {
        "privacy-policy": {
          "title": "Privacy Policy",
          "subtitle": "Legal Information"
        }
      },
      "tourism-pages": {
        "popular-destinations": {
          "title": "Popular Destinations",
          "subtitle": "Tourism Services",
          "description": "Discover Germany's most beloved destinations with our premium transportation services. Our expert chauffeurs will take you to iconic landmarks, historical sites, and breathtaking natural wonders in comfort and style. Customize your journey or choose from our curated selection of popular destinations.",
          "custom-tours": "Custom Tours:",
          "custom-tours-description": "Can't find what you're looking for? We specialize in creating custom tours tailored to your interests and preferences. Contact us to design your perfect German adventure with a luxury transportation experience.",
          "destinations": {
            "munich": {
              "name": "Munich",
              "description": "Bavarian metropolis with a view of the Alps, the Frauenkirche with characteristic onion domes, and the English Garden, one of the largest urban parks in the world."
            },
            "hamburg": {
              "name": "Hamburg",
              "description": "The Hanseatic city impresses with its maritime flair, the Elbphilharmonie, and the UNESCO World Heritage Speicherstadt with neo-Gothic brick buildings and canals."
            },
            "frankfurt": {
              "name": "Frankfurt am Main",
              "description": "Impressive skyline and international flair characterize the banking metropolis with contrasts between modern skyscrapers and historical treasures."
            },
            "heidelberg": {
              "name": "Heidelberg",
              "description": "Romantic university town with a picturesque old town and famous castle that majestically towers over the city."
            },
            "black-forest": {
              "name": "Black Forest",
              "description": "Picturesque region with dense forests, traditional villages, cuckoo clocks, and the Feldberg (1,493m), the highest mountain in the low mountain range."
            },
            "baden-baden": {
              "name": "Baden-Baden",
              "description": "Elegant spa town with thermal baths, world-famous casino, and the Lichtentaler Allee, a 2.3 km long park along the Oos River."
            }
          }
        },
        "shopping-tours": {
          "title": "Shopping Tours",
          "subtitle": "Tourism Services",
          "description": "Experience exclusive shopping adventures with our premium chauffeur service. Visit Europe's most prestigious outlet villages and shopping destinations in comfort and style. Our professional drivers will handle all logistics while you focus on finding the perfect items.",
          "custom-tours": "Custom Shopping Experiences:",
          "custom-tours-description": "Looking for a personalized shopping experience? We can create custom shopping tours based on your preferences, whether you're interested in luxury brands, local boutiques, or specific items.",
          "destinations": {
            "la-vallee": {
              "name": "La Vallée Village (Paris)",
              "description": "Luxurious outlet near Disneyland Paris with over 110 designer brands including Armani, Burberry, and Gucci."
            },
            "serravalle": {
              "name": "Serravalle Designer Outlet (Milan)",
              "description": "Italy's largest outlet center with over 300 luxury brands in typical Italian style."
            },
            "metzingen": {
              "name": "Outletcity Metzingen",
              "description": "Europe's largest outlet and hometown of Hugo Boss with the world's largest BOSS outlet."
            },
            "wertheim": {
              "name": "Wertheim Village",
              "description": "Idyllically located on the Main river with over 110 boutiques of international brands in traditional Franconian village architecture."
            },
            "roermond": {
              "name": "Roermond Designer Outlet (Netherlands)",
              "description": "One of the largest outlets in the Benelux countries with over 150 stores in a picturesque Dutch village setting."
            },
            "ingolstadt": {
              "name": "Ingolstadt Village",
              "description": "Exclusive outlet with over 110 boutiques of international designers in a Bavarian ambiance, just 50 minutes from Munich."
            }
          }
        },
        "theme-parks": {
          "title": "Theme Parks",
          "subtitle": "Tourism Services",
          "description": "Enjoy a stress-free visit to Europe's best theme parks with our premium transportation service. Our professional chauffeurs will handle all driving and parking logistics, allowing you to focus on creating unforgettable memories with your family or friends.",
          "custom-tours": "Multi-Park Tours:",
          "custom-tours-description": "Looking to experience multiple theme parks during your stay? We offer custom multi-park tour packages with luxury transportation between destinations, premium accommodations, and personalized itineraries. Contact us to create your perfect amusement park adventure.",
          "parks": {
            "disneyland": {
              "name": "Disneyland Paris (France)",
              "description": "Europe's largest theme park spans 2,100 hectares with Disneyland Park and Walt Disney Studios Park."
            },
            "europa-park": {
              "name": "Europa-Park (Rust)",
              "description": "Multiple-time winner of 'Best Theme Park in the World', featuring 15 European themed areas with country-specific architecture."
            },
            "phantasialand": {
              "name": "Phantasialand (Brühl)",
              "description": "Known for innovative roller coasters and themed areas like 'Klugheim' with detailed design."
            },
            "heide-park": {
              "name": "Heide Park Resort (Soltau)",
              "description": "Northern Germany's largest theme park with legendary attractions and themed accommodations."
            },
            "legoland": {
              "name": "LEGOLAND Deutschland (Günzburg)",
              "description": "Ideal for families with younger children with over 60 attractions in eight themed areas."
            },
            "movie-park": {
              "name": "Movie Park Germany (Bottrop)",
              "description": "Film-themed park with Hollywood flair and six themed areas such as 'Hollywood Street Set' and 'Nickland'."
            }
          }
        },
        "farms": {
          "title": "Farms",
          "subtitle": "Tourism Services",
          "description": "Discover authentic rural experiences at Germany's most charming farms with our premium transportation service. Our professional chauffeurs will take you on a comfortable journey to experience traditional farming, local produce, and the peaceful countryside.",
          "custom-tours": "Custom Farm Tours:",
          "custom-tours-description": "Interested in specific agricultural experiences? We can arrange custom farm tours focusing on vineyards, organic farming, animal experiences, or traditional crafts. Contact us to plan your perfect rural adventure.",
          "farms": {
            "ferienhof-konig": {
              "name": "Ferienhof König (Baden-Württemberg)",
              "description": "Award-winning organic farm with a view of Lake Constance and spacious grounds."
            },
            "wohlfuhlhof-zeh": {
              "name": "Wohlfühlhof Zeh e.V. (Allgäu)",
              "description": "Therapeutic farm with a special focus on animal-assisted therapies for children."
            },
            "staller-ferienhof": {
              "name": "Staller Ferienhof",
              "description": "Voted Germany's most popular holiday farm in 2017 and 2020, with traditional Bavarian style."
            },
            "huberhof": {
              "name": "Ferienparadies Huberhof (Chiemgau)",
              "description": "Organic farm with diverse offerings for families and its own cheese and sausage production."
            },
            "marchenbauernhof": {
              "name": "Märchenbauernhof Weidelshof (Hessen)",
              "description": "Particularly family-friendly farm with fairy-tale design and themed vacation apartments."
            },
            "biohof-schlossberg": {
              "name": "Biohof Schlossberg (Bayern)",
              "description": "Traditional farm focusing on ecological agriculture and direct marketing of regional products."
            }
          }
        }
      },
      "tourism-details": {
        "popular_cities": {
          "title": "Popular Destinations",
          "subtitle": "Premium Chauffeur | Tourism Services",
          "points": [
            "Discover Germany's most beloved tourist attractions and landmarks with our luxury transportation services.",
            "Visit iconic cities like Berlin, Munich, Frankfurt, and Hamburg with a professional chauffeur.",
            "Customize your itinerary to include historical sites, cultural attractions, and natural wonders."
          ]
        },
        "shopping_tours": {
          "title": "Shopping Tours",
          "subtitle": "Premium Chauffeur | Tourism Services",
          "points": [
            "Exclusive shopping experiences at Germany's finest retail destinations with VIP transportation.",
            "Visit premium outlet villages, luxury department stores, and boutique shopping districts.",
            "Enjoy door-to-door service with a professional chauffeur who handles all logistics and packages."
          ]
        },
        "theme_parks": {
          "title": "Theme Parks",
          "subtitle": "Premium Chauffeur | Tourism Services",
          "points": [
            "Visit Germany's best theme parks and amusement attractions with comfortable luxury transportation.",
            "Skip the parking hassles and enjoy direct drop-off and pick-up service at the entrance.",
            "Perfect for families with children, with child seats available upon request."
          ]
        },
        "farms": {
          "title": "Farm Experiences",
          "subtitle": "Premium Chauffeur | Tourism Services",
          "points": [
            "Experience authentic German farm life and rural traditions with our guided farm tours.",
            "Visit traditional farms, vineyards, and countryside attractions with luxury transportation.",
            "Enjoy farm-to-table dining experiences and local product shopping with convenient transportation."
          ]
        },
        "why_choose_title": "Why Choose Our Tourism Services?",
        "customized_experiences": "Customized Experiences",
        "customized_experiences_desc": "We tailor each journey to your unique needs and preferences to ensure an unforgettable experience.",
        "professional_guides": "Professional Guides",
        "professional_guides_desc": "Our multilingual professional guides ensure a rich and enjoyable cultural experience.",
        "luxury_transportation": "Luxury Transportation",
        "luxury_transportation_desc": "Enjoy comfort and elegance with our fleet of luxury vehicles and professional chauffeurs.",
        "ready_to_book": "Ready to Explore Europe in Style?",
        "booking_description": "Contact us today to book your tourism package and enjoy an unparalleled travel experience."
      }
    }
  },
  ar: {
    translation: {
      "navbar": {
        "carpool": "أسطول السيارات",
        "services": "الخدمات",
        "tourism": "السياحة",
        "contact": "اتصل بنا"
      },
      "carpool": {
        "title": "أسطولنا الفاخر",
        "subtitle": "سيارات فاخرة",
        "description": "توفر خدمة السائق الفاخر لدينا خيارات نقل مريحة وموثوقة لمجموعات من جميع الأحجام. سواء كنت مسافرًا للعمل أو للترفيه، فإن أسطولنا من السيارات الفاخرة يضمن رحلة سلسة وممتعة. نحن نعطي الأولوية للسلامة والدقة في المواعيد ورضا العملاء في كل رحلة.",
        "viewDetails": "انقر لعرض التفاصيل",
        "mercedes-sclass": "مرسيدس الفئة S",
        "bmw-7": "بي إم دبليو الفئة 7",
        "mercedes-vclass": "مرسيدس الفئة V"
      },
      "services": {
        "title": "خدماتنا المميزة",
        "subtitle": "خدمات نقل فاخرة",
        "description": "نقدم خدمات نقل فاخرة مصممة خصيصًا لتلبية احتياجاتك. من خدمة السائق الخاص إلى خدمة المطار وخدمة كبار الشخصيات، نحن نضمن تجربة سفر استثنائية.",
        "chauffeurservice": "خدمة سائق فاخر",
        "airporttransfer": "خدمة نقل من المطار",
        "vip-service": "خدمة نقل كبار الشخصيات"
      },
      "tourism": {
        "title": "خدمات السياحة",
        "subtitle": "استكشف بأناقة",
        "description": "اكتشف باقات السياحة الحصرية المصممة لتوفير تجارب لا تُنسى. تتضمن كل حزمة نقلًا فاخرًا في سياراتنا الفاخرة ومرشدين خبراء وأماكن إقامة مختارة بعناية لراحتك.",
        "exploreCategories": "استكشف فئات السياحة لدينا:",
        "beliebte-zielorte": "الوجهات الشهيرة",
        "beliebte-zielorte-desc": "اكتشف أكثر المعالم السياحية شهرة في أوروبا مع سائق يتحدث العربية",
        "shoppingtours": "جولات التسوق الفاخرة",
        "shoppingtours-desc": "تجارب تسوق حصرية في أفضل وجهات التسوق الفاخرة في أوروبا",
        "freizeitparks": "مدن الملاهي والترفيه",
        "freizeitparks-desc": "زيارة أفضل مدن الملاهي في أوروبا مع سائق خاص",
        "bauernhofe": "جولات ريفية",
        "bauernhofe-desc": "تجربة حياة المزرعة الأوروبية الأصيلة والتقاليد الريفية مع سائق يتحدث العربية",
        "why-choose-title": "لماذا تختار خدمات السياحة لدينا؟",
        "customized-experiences": "تجارب مخصصة",
        "customized-experiences-desc": "نصمم كل رحلة وفقًا لاحتياجاتك وتفضيلاتك الفريدة لضمان تجربة لا تُنسى.",
        "professional-guides": "مرشدون محترفون",
        "professional-guides-desc": "مرشدونا المحترفون متعددو اللغات يضمنون تجربة ثقافية غنية وممتعة.",
        "luxury-transportation": "وسائل نقل فاخرة",
        "luxury-transportation-desc": "استمتع بالراحة والأناقة مع أسطولنا من السيارات الفاخرة وسائقينا المحترفين.",
        "ready-to-book": "هل أنت مستعد لاستكشاف أوروبا بأسلوب؟",
        "booking-description": "اتصل بنا اليوم لحجز باقة السياحة الخاصة بك واستمتع بتجربة سفر لا مثيل لها."
      },
      "hero": {
        "title": "خدمة سائق فاخر",
        "subtitle": "شريكك للسفر الفاخر في أوروبا",
        "typewriter": [
          "خدمة سائق فاخر في باريس",
          "سائق فاخر في ميونخ ألمانيا",
          "خدمة نقل كبار الشخصيات في لندن",
          "سائق خاص في سويسرا",
          "خدمة نقل من مطار فيينا",
          "سائق خلال أسبوع الموضة في ميلانو",
          "سائق لجولة في مدينة برشلونة"
        ]
      },
      "footer": {
        "copyright": "© {{year}} خدمات السائق الفاخر. جميع الحقوق محفوظة.",
        "address": "العنوان",
        "phone": "الهاتف",
        "email": "البريد الإلكتروني",
        "quickLinks": "روابط سريعة",
        "legal": "قانوني",
        "privacyPolicy": "سياسة الخصوصية",
        "termsOfService": "شروط الخدمة",
        "cookiePolicy": "سياسة ملفات تعريف الارتباط",
        "imprint": "بصمة",
        "companyInfo": "خدمات نقل فاخرة للعملاء المميزين."
      },
      "contact": {
        "title": "تواصل معنا",
        "subtitle": "تواصل معنا",
        "section_title": "اتصل",
        "name": "الاسم",
        "email": "البريد الإلكتروني",
        "message": "الرسالة",
        "send": "إرسال",
        "sending": "جاري الإرسال...",
        "success": "شكرا لك! سنعاود الاتصال بك في أقرب وقت ممكن.",
        "error": "حدث خطأ ما. يرجى المحاولة مرة أخرى."
      },
      "common": {
        "readMore": "اقرأ المزيد",
        "learnMore": "تعرف على المزيد",
        "bookNow": "احجز الآن",
        "bookTour": "احجز هذه الجولة",
        "ourVehicles": "سياراتنا",
        "clickToView": "انقر لعرض التفاصيل",
        "planCustomTour": "خطط لجولتك المخصصة"
      },
      "booking": {
        "title": "طلب حجز",
        "step1": "الخطوة 1: تفاصيل الرحلة",
        "step2": "الخطوة 2: المركبة والإضافات",
        "step3": "الخطوة 3: البيانات الشخصية",
        "step4": "التأكيد",
        "startLocation": "موقع البداية",
        "startLocationPlaceholder": "مثال: محطة برلين المركزية",
        "service": "الخدمة",
        "servicePlaceholder": "الرجاء اختيار خدمة",
        "otherService": "أخرى",
        "customServicePlaceholder": "الرجاء إدخال الخدمة المطلوبة",
        "destination": "الوجهة",
        "destinationPlaceholder": "الرجاء اختيار وجهة",
        "otherDestination": "أخرى",
        "customDestinationPlaceholder": "الرجاء إدخال وجهتك",
        "date": "التاريخ",
        "time": "الوقت",
        "duration": "المدة (أيام)",
        "day": "يوم",
        "days": "أيام",
        "moreThan7Days": "أكثر من 7 أيام",
        "passengers": "عدد الركاب",
        "person": "شخص",
        "people": "أشخاص",
        "moreThan8People": "أكثر من 8 أشخاص",
        "next": "التالي",
        "back": "رجوع",
        "vehicleType": "نوع المركبة",
        "upTo3People": "حتى 3 أشخاص",
        "premiumVehicle": "مركبة فاخرة",
        "upTo8People": "حتى 8 أشخاص",
        "extras": "إضافات",
        "wifi": "واي فاي في المركبة",
        "wheelchair": "كرسي متحرك",
        "childSeat": "مقعد أطفال",
        "tourGuide": "مرشد سياحي",
        "name": "الاسم",
        "namePlaceholder": "اسمك الكامل",
        "email": "البريد الإلكتروني",
        "emailPlaceholder": "عنوان بريدك الإلكتروني",
        "phone": "الهاتف",
        "phonePlaceholder": "رقم هاتفك",
        "notes": "ملاحظات",
        "notesPlaceholder": "معلومات إضافية أو طلبات لجولتك",
        "privacyPolicy": "لقد قرأت وأوافق على",
        "privacyPolicyLink": "سياسة الخصوصية",
        "requestTour": "طلب جولة",
        "successMessage": "تم إرسال طلبك بنجاح!",
        "errorMessage": "حدث خطأ أثناء إرسال الحجز الخاص بك. يرجى المحاولة مرة أخرى لاحقًا."
      },
      "vehicles": {
        "mercedes-sclass": {
          "title": "مرسيدس الفئة S",
          "subtitle": "سيارة فاخرة",
          "cta-title": "هل أنت مستعد لتجربة الفخامة؟",
          "cta-description": "احجز خدمة السائق الخاص لمرسيدس الفئة S الفاخرة اليوم واستمتع بأقصى درجات الراحة والأناقة.",
          "description": "قمة سيارات السيدان الفاخرة، توفر راحة لا مثيل لها وتصميم متطور.",
          "gallery": "معرض الصور",
          "premium-services": "خدمات فاخرة وتجربة فخمة",
          "services-list": [
            "خدمة سائق محترف",
            "واي فاي مجاني على متن السيارة",
            "مرطبات فاخرة",
            "صحف ومجلات يومية",
            "أنظمة مساعدة السائق المتقدمة لأقصى درجات الأمان",
            "نظام صوت محيطي بورميستر الفاخر",
            "إضاءة محيطة بـ 64 لونًا",
            "مقصورة فسيحة مع مقاعد تنفيذية خلفية"
          ],
          "book-cta": "احجز خدمة سائق مرسيدس الفئة S الفاخرة اليوم واستمتع بأقصى درجات الراحة والأناقة."
        },
        "bmw-7": {
          "title": "بي إم دبليو الفئة 7",
          "subtitle": "سيارة فاخرة",
          "cta-title": "جرب فخامة القيادة المطلقة",
          "cta-description": "احجز خدمة السائق الخاص لسيارة بي إم دبليو الفئة 7 الفاخرة اليوم واستمتع بمزيج مثالي من الأداء والفخامة.",
          "description": "سيارة سيدان تنفيذية فاخرة تجمع بين التكنولوجيا المتطورة والراحة الاستثنائية.",
          "gallery": "معرض الصور",
          "premium-services": "خدمات فاخرة وتجربة فخمة",
          "services-list": [
            "خدمة سائق محترف",
            "واي فاي مجاني على متن السيارة",
            "مرطبات فاخرة",
            "صحف ومجلات يومية",
            "تقنيات متطورة وميزات مساعدة السائق",
            "نظام ترفيهي متطور",
            "مقصورة فسيحة مع وسائل راحة متميزة",
            "أداء قوي مع ديناميكيات قيادة متطورة"
          ],
          "book-cta": "احجز خدمة سائق بي إم دبليو الفئة 7 الفاخرة اليوم واستمتع بمزيج مثالي من الأداء والفخامة."
        },
        "mercedes-vclass": {
          "title": "مرسيدس الفئة V",
          "subtitle": "سيارة فاخرة",
          "cta-title": "مثالية لسفر المجموعات",
          "cta-description": "احجز خدمة السائق الخاص لمرسيدس الفئة V الفاخرة اليوم واستمتع بالفخامة الواسعة لمجموعتك أو عائلتك.",
          "description": "فان فاخر يوفر مساحة واسعة وراحة استثنائية للمجموعات الصغيرة والعائلات.",
          "gallery": "معرض الصور",
          "premium-services": "خدمات فاخرة وتجربة فخمة",
          "services-list": [
            "خدمة سائق محترف",
            "واي فاي مجاني على متن السيارة",
            "مرطبات فاخرة",
            "صحف ومجلات يومية",
            "مساحة فسيحة تتسع لما يصل إلى 7 ركاب",
            "ترتيبات مقاعد متنوعة لأقصى قدر من الراحة",
            "مساحة أمتعة واسعة لنقل المطار أو رحلات التسوق",
            "مثالية للسفر الجماعي مع وسائل راحة متميزة"
          ],
          "book-cta": "احجز خدمة سائق مرسيدس الفئة V الفاخرة اليوم واستمتع بالفخامة الواسعة لمجموعتك أو عائلتك."
        }
      },
      "service-details": {
        "executive": {
          "title": "خدمة السائق التنفيذي",
          "company": "سائق فاخر | سفر الأعمال",
          "date": "متاح على مدار الساعة",
          "points": [
            "خدمة سائق محترفة للمديرين التنفيذيين ومحترفي الأعمال مع سيارات مرسيدس الفئة S وبي إم دبليو الفئة 7 الفاخرة.",
            "نقل متميز وموثوق به مع سائقين ذوي خبرة يفهمون احتياجات عملاء الشركات.",
            "وسائل راحة مجانية تشمل واي فاي وتقديم المرطبات والصحف اليومية لوقت سفر منتج."
          ]
        },
        "airport": {
          "title": "خدمة النقل من وإلى المطار",
          "company": "سائق فاخر | نقل المطار",
          "date": "جميع المطارات الرئيسية",
          "points": [
            "نقل سلس من وإلى المطار مع مراقبة الرحلات وتعديل أوقات الاستلام للوصول المبكر أو التأخير.",
            "خدمة الاستقبال والترحيب مع المساعدة في حمل الأمتعة والاستلام ذو الأولوية في جميع المطارات الأوروبية الرئيسية.",
            "نقل مريح وخالي من التوتر في سيارات فاخرة بعد رحلات طويلة مع 60 دقيقة من وقت الانتظار المجاني."
          ]
        },
        "group": {
          "title": "نقل المجموعات",
          "company": "سائق فاخر | سفر المجموعات",
          "date": "حتى 7 ركاب",
          "points": [
            "سيارات مرسيدس الفئة V الواسعة للنقل المريح للمجموعات مع مساحة كبيرة للأمتعة.",
            "مثالية للإجازات العائلية أو فرق الشركات أو جولات المجموعات الصغيرة مع خدمة شخصية.",
            "خيارات متاحة للكراسي المتحركة مع مساعدة احترافية للركاب ذوي احتياجات التنقل."
          ]
        }
      },
      "service-pages": {
        "common": {
          "our-services": "خدماتنا",
          "book-now": "احجز الآن",
          "inquire": "استفسر عن الخدمة",
          "service-features": "ميزات الخدمة:",
          "service-options": "خيارات الخدمة:"
        },
        "chauffeur-service": {
          "title": "خدمة السائق الخاص",
          "description": "استمتع بأقصى درجات النقل الفاخر مع خدمة السائق الخاص المميزة لدينا. يكرس سائقونا المحترفون أنفسهم لتقديم خدمة استثنائية، مما يضمن أن تكون رحلتك مريحة وآمنة ومصممة خصيصًا لتلبية احتياجاتك الخاصة.",
          "experience-title": "تجربة السائق الخاص الفاخرة لدينا:",
          "professional-chauffeurs": "سائقون محترفون",
          "professional-chauffeurs-desc": "يقدم سائقونا بالزي الرسمي خدمة استثنائية مع الاهتمام بالتفاصيل.",
          "luxury-vehicles": "سيارات فاخرة",
          "luxury-vehicles-desc": "سافر براحة مع سياراتنا الفاخرة المجهزة بوسائل الراحة لرحلة مريحة.",
          "personalized-service": "خدمة شخصية",
          "personalized-service-desc": "حلول نقل مخصصة مصممة خصيصًا لمتطلباتك وتفضيلاتك الخاصة.",
          "business-travel": "سفر الأعمال",
          "business-travel-desc": "مثالية للمديرين التنفيذيين ومحترفي الأعمال. يضمن سائقونا وصولك إلى الاجتماعات والمؤتمرات وفعاليات الشركات في الوقت المحدد وبأناقة.",
          "special-occasions": "المناسبات الخاصة",
          "special-occasions-desc": "اجعل يومك الخاص أكثر تميزًا مع خدمة السائق الفاخرة لدينا للأعراس والذكرى السنوية والاحتفالات الأخرى.",
          "airport-transfers": "خدمة المطار",
          "airport-transfers-desc": "نقل خالٍ من التوتر من وإلى المطارات مع مراقبة الرحلات وتعديل أوقات الاستلام للوصول المبكر أو التأخير.",
          "city-tours": "جولات المدينة",
          "city-tours-desc": "استكشف المدن مع سائق مطلع يمكنه تقديم رؤى وتوصيات لتجربة معززة.",
          "vip-service": "خدمة كبار الشخصيات",
          "vip-service-desc": "خدمة حصرية لكبار الشخصيات مع تعزيز الخصوصية والأمان والاهتمام الشخصي بالتفاصيل."
        },
        "airport-transfer": {
          "title": "خدمة المطار",
          "description": "ابدأ رحلتك وانهيها براحة وأناقة مع خدمة نقل المطار الفاخرة لدينا. نحن نوفر نقلًا سلسًا من وإلى المطارات، مما يضمن تجربة سفر خالية من التوتر مع سائقينا المحترفين والسيارات الفاخرة.",
          "features": [
            "مراقبة الرحلات للتكيف مع الوصول المبكر أو التأخير",
            "خدمة الاستقبال والترحيب مع لافتة ترحيب شخصية",
            "المساعدة في حمل الأمتعة",
            "سيارات فاخرة مكيفة ومريحة",
            "وقت انتظار مجاني (45 دقيقة للرحلات الداخلية، 60 دقيقة للرحلات الدولية)"
          ],
          "services-title": "خدمات نقل المطار الفاخرة:",
          "meet-greet": "استقبال وترحيب",
          "meet-greet-desc": "سيلتقي بك سائقونا في قاعة الوصول مع لافتة ترحيب شخصية.",
          "luxury-vehicles": "سيارات فاخرة",
          "luxury-vehicles-desc": "سافر براحة مع سياراتنا الفاخرة المجهزة بوسائل الراحة لرحلة مريحة.",
          "vip-terminal": "الوصول إلى محطة كبار الشخصيات",
          "vip-terminal-desc": "استمتع بخدمة سريعة مع وصولنا إلى محطة كبار الشخصيات في مطارات مختارة.",
          "airports-title": "المطارات التي نخدمها:",
          "major-airports": "المطارات الدولية الرئيسية",
          "major-airports-list": [
            "مطار فرانكفورت (FRA)",
            "مطار ميونيخ (MUC)",
            "مطار برلين براندنبورغ (BER)",
            "مطار دوسلدورف (DUS)"
          ],
          "regional-airports": "المطارات الإقليمية",
          "regional-airports-list": [
            "مطار شتوتغارت (STR)",
            "مطار كولونيا بون (CGN)",
            "مطار هامبورغ (HAM)",
            "مطار نورنبرغ (NUE)"
          ],
          "booking-process": "عملية الحجز:",
          "booking-steps": [
            "قدم تفاصيل رحلتك ومواقع الاستلام/التوصيل",
            "اختر السيارة المفضلة لديك",
            "استلم تأكيدًا مع تفاصيل السائق",
            "استمتع بنقل خالٍ من التوتر من وإلى المطار"
          ]
        },
        "vip-service": {
          "title": "خدمة كبار الشخصيات",
          "description": "توفر خدمة كبار الشخصيات الحصرية لدينا أعلى مستويات الفخامة والخصوصية والأمان للعملاء المميزين. من المشاهير والمديرين التنفيذيين إلى الدبلوماسيين والشخصيات البارزة، نحن نقدم نقلًا متميزًا ومخصصًا مع تدابير أمنية معززة ووسائل راحة فاخرة.",
          "services-title": "خدمات كبار الشخصيات الحصرية:",
          "security": "أمان معزز",
          "security-desc": "بروتوكولات أمنية شاملة للعملاء البارزين الذين يتطلبون التمييز والحماية.",
          "privacy": "خصوصية كاملة",
          "privacy-desc": "نوافذ معتمة وحواجز خصوصية واتفاقيات سرية تضمن بقاء رحلتك خاصة.",
          "luxury": "فخامة مطلقة",
          "luxury-desc": "سيارات فاخرة مع وسائل راحة حصرية مصممة وفقًا لتفضيلاتك لتجربة لا مثيل لها.",
          "options-title": "خيارات خدمة كبار الشخصيات:",
          "protection": "حماية تنفيذية",
          "protection-desc": "خدمة أمنية شاملة مع موظفين مدربين وسيارات آمنة للعملاء البارزين الذين يتطلبون حماية معززة.",
          "celebrity": "نقل المشاهير",
          "celebrity-desc": "نقل متميز وآمن للمشاهير والشخصيات العامة مع الخصوصية والأمان كأولويات قصوى.",
          "features": [
            "سائقون مدربون احترافيًا ذوو خبرة أمنية",
            "أسطول سيارات آمن مع ميزات أمان معززة",
            "اتفاقيات سرية واتفاقيات عدم إفشاء لجميع الموظفين",
            "تخطيط متقدم للطرق لتجنب التعرض العام",
            "سيارات بزجاج خصوصية وميزات أمان معززة"
          ]
        }
      },
      "legal": {
        "privacy-policy": {
          "title": "سياسة الخصوصية",
          "subtitle": "معلومات قانونية"
        }
      },
      "tourism-pages": {
        "popular-destinations": {
          "title": "الوجهات الشهيرة",
          "subtitle": "خدمات السياحة",
          "description": "اكتشف أكثر وجهات ألمانيا شهرة مع خدمات النقل الفاخرة لدينا. سيأخذك سائقونا الخبراء إلى المعالم الشهيرة والمواقع التاريخية والعجائب الطبيعية الخلابة بكل راحة وأناقة. قم بتخصيص رحلتك أو اختر من مجموعتنا المنتقاة من الوجهات الشهيرة.",
          "custom-tours": "جولات مخصصة:",
          "custom-tours-description": "لم تجد ما تبحث عنه؟ نحن متخصصون في إنشاء جولات مخصصة تناسب اهتماماتك وتفضيلاتك. اتصل بنا لتصميم مغامرتك الألمانية المثالية مع تجربة نقل فاخرة.",
          "destinations": {
            "munich": {
              "name": "ميونيخ",
              "description": "عاصمة بافاريا مع إطلالة على جبال الألب، وكنيسة فراونكيرشه ذات القباب البصلية المميزة، وحديقة إنجليش جاردن، واحدة من أكبر الحدائق الحضرية في العالم."
            },
            "hamburg": {
              "name": "هامبورغ",
              "description": "تبهر مدينة الهانزا بأجوائها البحرية، وقاعة إلبفيلهارموني، ومنطقة شبايخرشتات المدرجة في قائمة اليونسكو للتراث العالمي بمبانيها الطوبية القوطية الجديدة والقنوات."
            },
            "frankfurt": {
              "name": "فرانكفورت آم ماين",
              "description": "تتميز عاصمة البنوك بأفق مذهل وأجواء دولية مع تناقضات بين ناطحات السحاب الحديثة والكنوز التاريخية."
            },
            "heidelberg": {
              "name": "هايدلبرغ",
              "description": "مدينة جامعية رومانسية ذات بلدة قديمة خلابة وقلعة شهيرة تطل بشكل مهيب على المدينة."
            },
            "black-forest": {
              "name": "الغابة السوداء",
              "description": "منطقة خلابة ذات غابات كثيفة وقرى تقليدية وساعات الوقواق وجبل فيلدبرغ (1,493 متر)، أعلى جبل في سلسلة الجبال المنخفضة."
            },
            "baden-baden": {
              "name": "بادن-بادن",
              "description": "مدينة منتجع أنيقة مع حمامات حرارية وكازينو مشهور عالميًا وممشى ليشتنتالر آلي، وهو حديقة يبلغ طولها 2.3 كم على طول نهر أووس."
            }
          }
        },
        "shopping-tours": {
          "title": "جولات التسوق",
          "subtitle": "خدمات السياحة",
          "description": "استمتع بمغامرات تسوق حصرية مع خدمة السائق الفاخرة لدينا. قم بزيارة أرقى قرى الأوتليت ووجهات التسوق في أوروبا بكل راحة وأناقة. سيتولى سائقونا المحترفون جميع الخدمات اللوجستية بينما تركز أنت على العثور على العناصر المثالية.",
          "custom-tours": "تجارب تسوق مخصصة:",
          "custom-tours-description": "هل تبحث عن تجربة تسوق مخصصة؟ يمكننا إنشاء جولات تسوق مخصصة بناءً على تفضيلاتك، سواء كنت مهتمًا بالعلامات التجارية الفاخرة أو المتاجر المحلية أو عناصر محددة.",
          "destinations": {
            "la-vallee": {
              "name": "قرية لا فالي (باريس)",
              "description": "منفذ فاخر بالقرب من ديزني لاند باريس مع أكثر من 110 علامة تجارية للمصممين بما في ذلك أرماني وبربري وغوتشي."
            },
            "serravalle": {
              "name": "سيرافالي ديزاينر أوتلت (ميلان)",
              "description": "أكبر مركز للمنافذ في إيطاليا مع أكثر من 300 علامة تجارية فاخرة بأسلوب إيطالي نموذجي."
            },
            "metzingen": {
              "name": "أوتلت سيتي ميتزينغن",
              "description": "أكبر منفذ في أوروبا ومسقط رأس هوغو بوس مع أكبر منفذ لبوس في العالم."
            },
            "wertheim": {
              "name": "قرية فيرتهايم",
              "description": "تقع بشكل خلاب على نهر ماين مع أكثر من 110 بوتيك للعلامات التجارية العالمية في هندسة معمارية تقليدية للقرية الفرانكونية."
            },
            "roermond": {
              "name": "رورموند ديزاينر أوتلت (هولندا)",
              "description": "واحدة من أكبر المنافذ في دول البنلوكس مع أكثر من 150 متجرًا في إطار قرية هولندية خلابة."
            },
            "ingolstadt": {
              "name": "قرية إنغولشتات",
              "description": "منفذ حصري مع أكثر من 110 بوتيك للمصممين العالميين في أجواء بافارية، على بعد 50 دقيقة فقط من ميونيخ."
            }
          }
        },
        "theme-parks": {
          "title": "مدن الملاهي",
          "subtitle": "خدمات السياحة",
          "description": "استمتع بزيارة خالية من التوتر لأفضل مدن الملاهي في أوروبا مع خدمة النقل الفاخرة لدينا. سيتولى سائقونا المحترفون جميع خدمات القيادة وصف السيارات، مما يتيح لك التركيز على إنشاء ذكريات لا تُنسى مع عائلتك أو أصدقائك.",
          "custom-tours": "جولات متعددة المدن:",
          "custom-tours-description": "هل ترغب في تجربة العديد من مدن الملاهي خلال إقامتك؟ نقدم باقات جولات مخصصة متعددة المدن مع نقل فاخر بين الوجهات، وأماكن إقامة فاخرة، وجداول سفر مخصصة. اتصل بنا لإنشاء مغامرة مدينة الملاهي المثالية الخاصة بك.",
          "parks": {
            "disneyland": {
              "name": "ديزني لاند باريس (فرنسا)",
              "description": "أكبر مدينة ملاهي في أوروبا تمتد على مساحة 2,100 هكتار مع ديزني لاند بارك ووالت ديزني ستوديوز بارك."
            },
            "europa-park": {
              "name": "يوروبا بارك (روست)",
              "description": "فائز عدة مرات بجائزة 'أفضل مدينة ملاهي في العالم'، تضم 15 منطقة أوروبية مواضيعية مع هندسة معمارية خاصة بكل بلد."
            },
            "phantasialand": {
              "name": "فانتازيالاند (برول)",
              "description": "معروفة بالأفعوانيات المبتكرة والمناطق المواضيعية مثل 'كلوغهايم' ذات التصميم المفصل."
            },
            "heide-park": {
              "name": "هايدي بارك ريزورت (سولتاو)",
              "description": "أكبر مدينة ملاهي في شمال ألمانيا مع مناطق جذب أسطورية وأماكن إقامة مواضيعية."
            },
            "legoland": {
              "name": "ليغولاند ألمانيا (غونزبورغ)",
              "description": "مثالية للعائلات مع الأطفال الصغار مع أكثر من 60 منطقة جذب في ثمانية مناطق مواضيعية."
            },
            "movie-park": {
              "name": "موفي بارك ألمانيا (بوتروب)",
              "description": "مدينة ملاهي ذات طابع سينمائي مع أجواء هوليوود وستة مناطق مواضيعية مثل 'هوليوود ستريت سيت' و'نيكلاند'."
            }
          }
        },
        "farms": {
          "title": "المزارع",
          "subtitle": "خدمات السياحة",
          "description": "اكتشف تجارب ريفية أصيلة في أجمل مزارع ألمانيا مع خدمة النقل الفاخرة لدينا. سيأخذك سائقونا المحترفون في رحلة مريحة لتجربة الزراعة التقليدية والمنتجات المحلية والريف الهادئ.",
          "custom-tours": "جولات مزارع مخصصة:",
          "custom-tours-description": "هل أنت مهتم بتجارب زراعية محددة؟ يمكننا ترتيب جولات مزارع مخصصة تركز على مزارع الكروم، أو الزراعة العضوية، أو تجارب الحيوانات، أو الحرف التقليدية. اتصل بنا لتخطيط مغامرتك الريفية المثالية.",
          "farms": {
            "ferienhof-konig": {
              "name": "فيرينهوف كونيغ (بادن-فورتمبيرغ)",
              "description": "مزرعة عضوية حائزة على جوائز مع إطلالة على بحيرة كونستانس وأراضي واسعة."
            },
            "wohlfuhlhof-zeh": {
              "name": "فولفولهوف زيه (ألغوي)",
              "description": "مزرعة علاجية مع تركيز خاص على العلاجات بمساعدة الحيوانات للأطفال."
            },
            "staller-ferienhof": {
              "name": "شتالر فيرينهوف",
              "description": "تم اختيارها كأكثر مزرعة عطلات شعبية في ألمانيا في عامي 2017 و2020، بأسلوب بافاري تقليدي."
            },
            "huberhof": {
              "name": "فيرينباراديس هوبرهوف (كيمغاو)",
              "description": "مزرعة عضوية مع عروض متنوعة للعائلات وإنتاج خاص للجبن والنقانق."
            },
            "marchenbauernhof": {
              "name": "مارشينباويرنهوف فايدلسهوف (هيسن)",
              "description": "مزرعة مناسبة للعائلات بشكل خاص مع تصميم خيالي وشقق عطلات ذات طابع مميز."
            },
            "biohof-schlossberg": {
              "name": "بيوهوف شلوسبيرغ (بافاريا)",
              "description": "مزرعة تقليدية تركز على الزراعة البيئية والتسويق المباشر للمنتجات الإقليمية."
            }
          }
        }
      },
      "tourism-details": {
        "popular_cities": {
          "title": "الوجهات الشهيرة",
          "subtitle": "سائق فاخر | خدمات السياحة",
          "points": [
            "اكتشف أكثر المعالم السياحية والمعالم الأثرية شهرة في أوروبا مع خدمات النقل الفاخرة لدينا.",
            "زيارة المدن الشهيرة مثل برلين وميونيخ وباريس ولندن مع سائق محترف يتحدث العربية.",
            "تخصيص مسار رحلتك لتشمل المواقع التاريخية والمعالم الثقافية والعجائب الطبيعية."
          ]
        },
        "shopping_tours": {
          "title": "جولات التسوق",
          "subtitle": "سائق فاخر | خدمات السياحة",
          "points": [
            "تجارب تسوق حصرية في أفضل وجهات التجزئة في أوروبا مع خدمة نقل VIP.",
            "زيارة قرى المنافذ الفاخرة ومتاجر الأقسام الفاخرة ومناطق التسوق في البوتيكات.",
            "استمتع بخدمة من الباب إلى الباب مع سائق محترف يتعامل مع جميع الخدمات اللوجستية والحقائب."
          ]
        },
        "theme_parks": {
          "title": "مدن الملاهي",
          "subtitle": "سائق فاخر | خدمات السياحة",
          "points": [
            "زيارة أفضل مدن الملاهي ومعالم الجذب الترفيهية في أوروبا مع وسائل نقل فاخرة ومريحة.",
            "تجاوز متاعب مواقف السيارات واستمتع بخدمة الإنزال والاستلام المباشرة عند المدخل.",
            "مثالية للعائلات التي لديها أطفال، مع توفر مقاعد الأطفال عند الطلب."
          ]
        },
        "farms": {
          "title": "تجارب المزارع",
          "subtitle": "سائق فاخر | خدمات السياحة",
          "points": [
            "استمتع بتجربة حياة المزرعة الأوروبية الأصيلة والتقاليد الريفية مع جولاتنا المصحوبة بمرشدين في المزارع.",
            "زيارة المزارع التقليدية وكروم العنب ومعالم الجذب في الريف مع وسائل نقل فاخرة.",
            "استمتع بتجارب تناول الطعام من المزرعة إلى المائدة والتسوق للمنتجات المحلية مع وسائل نقل مريحة."
          ]
        },
        "why_choose_title": "لماذا تختار خدمات السياحة لدينا؟",
        "customized_experiences": "تجارب مخصصة",
        "customized_experiences_desc": "نصمم كل رحلة وفقًا لاحتياجاتك وتفضيلاتك الفريدة لضمان تجربة لا تُنسى.",
        "professional_guides": "مرشدون محترفون",
        "professional_guides_desc": "مرشدونا المحترفون متعددو اللغات يضمنون تجربة ثقافية غنية وممتعة.",
        "luxury_transportation": "وسائل نقل فاخرة",
        "luxury_transportation_desc": "استمتع بالراحة والأناقة مع أسطولنا من السيارات الفاخرة وسائقينا المحترفين.",
        "ready_to_book": "هل أنت مستعد لاستكشاف أوروبا بأسلوب؟",
        "booking_description": "اتصل بنا اليوم لحجز باقة السياحة الخاصة بك واستمتع بتجربة سفر لا مثيل لها."
      }
    }
  }
};

i18n
  // detect user language
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next
  .use(initReactI18next)
  // init i18next
  .init({
    resources,
    fallbackLng: 'en',
    debug: false, // Set to false to reduce console logs
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    react: {
      useSuspense: false,
    },
    returnObjects: true,
    // Disable loading from backend to use in-memory translations only
    partialBundledLanguages: true,
  });

export default i18n;
