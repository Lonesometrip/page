/**
 * Translation file for the chatbot
 * Contains English and Arabic translations for all text elements
 */

export const translations = {
  en: {
    // Chat interface
    chatTitle: "Premium Assistant",
    clearChat: "Clear chat",
    typingIndicator: "Premium Assistant is typing",
    inputPlaceholder: "Type your message...",
    sendButton: "Send",

    // Read receipts
    readReceipt: "Read",
    sentReceipt: "Sent",

    // Quick replies
    bookChauffeur: "Book a Chauffeur",
    contactUs: "Contact Us",
    ourVehicles: "Our Vehicles",
    ourServices: "Our Services",
    tourPackages: "Tour Packages",

    // Feedback system
    helpful: "Helpful",
    notHelpful: "Not helpful",
    feedbackThanksPositive: "Thank you for your positive feedback! We're glad we could help.",
    feedbackThanksNegative: "Thank you for your feedback. We'll work to improve our responses.",

    // Initial greeting
    initialGreeting: "Hello! How can I help you with our transportation and chauffeur services today?",

    // Form steps - Contact
    contactFormGreeting: "I'd be happy to help you get in touch with our team. Could you please tell me your name?",
    contactFormEmail: "Thanks, {name}! What email address should we use to contact you?",
    contactFormMessage: "Great! Now, please tell me what you'd like to discuss with our team or any questions you have.",
    contactFormConfirm: "Thank you for providing your information! Here's what I have:\n\nName: {name}\nEmail: {email}\nMessage: {message}\n\nShould I send this to our team now? (yes/no)",
    contactFormSuccess: "Thank you, {name}! Your message has been sent successfully. Our team will review it and get back to you soon at {email}.",
    contactFormError: "I'm sorry, {name}, but there was an error submitting your information. Please try again later or use the contact form on our website.",
    contactFormCancelled: "No problem, {name}. Your information has not been sent. Is there something else I can help you with today?",

    // Form steps - Booking
    bookingFormGreeting: "I'd be happy to help you book our chauffeur service. Where would you like to be picked up?",
    bookingFormDestination: "Great! And where would you like to go from {startLocation}?",
    bookingFormDate: "Perfect. What date would you like the service? (Please use YYYY-MM-DD format)",
    bookingFormTime: "And what time would you like to be picked up on {date}? (Please use HH:MM format)",
    bookingFormPassengers: "How many passengers will be traveling?",
    bookingFormVehicle: "We have several luxury vehicles available. Would you prefer a Mercedes S-Class (up to 3 people), BMW 7 Series (up to 3 people), or Mercedes V-Class (up to 7 people)?",
    bookingFormName: "Thank you for those details. Now I just need some information to complete your booking. What's your full name?",
    bookingFormEmail: "Thanks, {name}. What email address should we use for your booking confirmation?",
    bookingFormPhone: "And what's the best phone number to reach you?",
    bookingFormSpecialRequests: "Almost done! Do you have any special requests or requirements for your journey? (Child seats, wheelchair access, etc.)",
    bookingFormConfirm: "Thank you for providing all the details! Here's a summary of your booking request:\n\nPickup: {startLocation}\nDestination: {destination}\nDate: {date}\nTime: {time}\nPassengers: {passengers}\nVehicle: {vehicleType}\n\nYour Details:\nName: {name}\nEmail: {email}\nPhone: {phone}\nSpecial Requests: {specialRequests}\n\nWould you like me to submit this booking request now? (yes/no)",
    bookingFormSuccess: "Thank you for your booking, {name}! Your request for a {vehicleType} on {date} at {time} has been submitted successfully. Our team will review your booking and contact you at {email} to confirm all the details.",
    bookingFormError: "I'm sorry, {name}, but there was an error submitting your booking. Please try again later or use the booking form on our website.",
    bookingFormCancelled: "No problem, {name}. Your booking has not been submitted. Would you like to start over or is there something else I can help you with today?",
    bookingFormVehicleError: "I'm sorry, I didn't recognize that vehicle type. Please choose from Mercedes S-Class, BMW 7 Series, or Mercedes V-Class.",

    // Error messages
    generalError: "I apologize, but I encountered an error while processing your request. Would you like to make a booking or contact our team directly?",

    // Language toggle
    switchLanguage: "العربية",
  },
  ar: {
    // Chat interface
    chatTitle: "المساعد المميز",
    clearChat: "مسح المحادثة",
    typingIndicator: "المساعد المميز يكتب",
    inputPlaceholder: "اكتب رسالتك...",
    sendButton: "إرسال",

    // Read receipts
    readReceipt: "مقروءة",
    sentReceipt: "تم الإرسال",

    // Quick replies
    bookChauffeur: "حجز سائق",
    contactUs: "اتصل بنا",
    ourVehicles: "سياراتنا",
    ourServices: "خدماتنا",
    tourPackages: "باقات السياحة",

    // Feedback system
    helpful: "مفيد",
    notHelpful: "غير مفيد",
    feedbackThanksPositive: "شكراً على ملاحظاتك الإيجابية! يسعدنا أننا استطعنا المساعدة.",
    feedbackThanksNegative: "شكراً على ملاحظاتك. سنعمل على تحسين ردودنا.",

    // Initial greeting
    initialGreeting: "مرحباً! كيف يمكنني مساعدتك في خدمات النقل والسائقين اليوم؟",

    // Form steps - Contact
    contactFormGreeting: "يسعدني مساعدتك في التواصل مع فريقنا. هل يمكنك إخباري باسمك؟",
    contactFormEmail: "شكراً، {name}! ما هو البريد الإلكتروني الذي يمكننا استخدامه للتواصل معك؟",
    contactFormMessage: "رائع! الآن، يرجى إخباري بما ترغب في مناقشته مع فريقنا أو أي أسئلة لديك.",
    contactFormConfirm: "شكراً لتقديم معلوماتك! إليك ما لدي:\n\nالاسم: {name}\nالبريد الإلكتروني: {email}\nالرسالة: {message}\n\nهل ترغب في إرسال هذه المعلومات إلى فريقنا الآن؟ (نعم/لا)",
    contactFormSuccess: "شكراً لك، {name}! تم إرسال رسالتك بنجاح. سيقوم فريقنا بمراجعتها والرد عليك قريباً على {email}.",
    contactFormError: "آسف، {name}، ولكن حدث خطأ أثناء إرسال معلوماتك. يرجى المحاولة مرة أخرى لاحقاً أو استخدام نموذج الاتصال على موقعنا.",
    contactFormCancelled: "لا مشكلة، {name}. لم يتم إرسال معلوماتك. هل هناك شيء آخر يمكنني مساعدتك به اليوم؟",

    // Form steps - Booking
    bookingFormGreeting: "يسعدني مساعدتك في حجز خدمة السائق. من أين ترغب في أن يتم اصطحابك؟",
    bookingFormDestination: "رائع! وإلى أين ترغب في الذهاب من {startLocation}؟",
    bookingFormDate: "ممتاز. ما هو التاريخ الذي ترغب في الخدمة فيه؟ (يرجى استخدام تنسيق YYYY-MM-DD)",
    bookingFormTime: "وفي أي وقت ترغب في أن يتم اصطحابك في {date}؟ (يرجى استخدام تنسيق HH:MM)",
    bookingFormPassengers: "كم عدد الركاب الذين سيسافرون؟",
    bookingFormVehicle: "لدينا عدة سيارات فاخرة متاحة. هل تفضل مرسيدس S-Class (حتى 3 أشخاص)، أو BMW الفئة السابعة (حتى 3 أشخاص)، أو مرسيدس V-Class (حتى 7 أشخاص)؟",
    bookingFormName: "شكراً على هذه التفاصيل. الآن أحتاج فقط إلى بعض المعلومات لإكمال حجزك. ما هو اسمك الكامل؟",
    bookingFormEmail: "شكراً، {name}. ما هو البريد الإلكتروني الذي يجب أن نستخدمه لتأكيد حجزك؟",
    bookingFormPhone: "وما هو أفضل رقم هاتف للوصول إليك؟",
    bookingFormSpecialRequests: "اقتربنا من النهاية! هل لديك أي طلبات أو متطلبات خاصة لرحلتك؟ (مقاعد أطفال، وصول لذوي الاحتياجات الخاصة، إلخ)",
    bookingFormConfirm: "شكراً لتقديم جميع التفاصيل! إليك ملخص طلب الحجز الخاص بك:\n\nنقطة الالتقاط: {startLocation}\nالوجهة: {destination}\nالتاريخ: {date}\nالوقت: {time}\nعدد الركاب: {passengers}\nالسيارة: {vehicleType}\n\nبياناتك:\nالاسم: {name}\nالبريد الإلكتروني: {email}\nالهاتف: {phone}\nالطلبات الخاصة: {specialRequests}\n\nهل ترغب في إرسال طلب الحجز هذا الآن؟ (نعم/لا)",
    bookingFormSuccess: "شكراً لحجزك، {name}! تم إرسال طلبك لسيارة {vehicleType} في {date} الساعة {time} بنجاح. سيقوم فريقنا بمراجعة حجزك والاتصال بك على {email} لتأكيد جميع التفاصيل.",
    bookingFormError: "آسف، {name}، ولكن حدث خطأ أثناء إرسال حجزك. يرجى المحاولة مرة أخرى لاحقاً أو استخدام نموذج الحجز على موقعنا.",
    bookingFormCancelled: "لا مشكلة، {name}. لم يتم إرسال حجزك. هل ترغب في البدء من جديد أم هناك شيء آخر يمكنني مساعدتك به اليوم؟",
    bookingFormVehicleError: "آسف، لم أتعرف على نوع السيارة. يرجى الاختيار من بين مرسيدس S-Class، أو BMW الفئة السابعة، أو مرسيدس V-Class.",

    // Error messages
    generalError: "أعتذر، ولكن واجهت خطأ أثناء معالجة طلبك. هل ترغب في إجراء حجز أو الاتصال بفريقنا مباشرة؟",

    // Language toggle
    switchLanguage: "English",
  }
};
