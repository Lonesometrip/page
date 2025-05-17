/**
 * Utility functions for managing the knowledge base
 */

// Initial knowledge base with website information
// This would ideally be generated from your website content
export const initialKnowledgeBase = [
  {
    title: 'Über Uns',
    content: 'Wir sind ein Premium Chauffeur Service und Luxus Limousinenservice mit exklusiven Fahrzeugen wie Mercedes S-Klasse, BMW 7er Serie und Mercedes V-Klasse. Unser Business Chauffeur Service umfasst Executive Transfer Service, Flughafentransfer und VIP Chauffeur Service in ganz Deutschland.'
  },
  {
    title: 'Fahrzeugflotte',
    content: 'Unser exklusiver Limousinenservice bietet eine Auswahl an Luxusfahrzeugen, darunter Mercedes S-Klasse, BMW 7er Serie und Mercedes V-Klasse. Jedes Fahrzeug wird mit einem professionellen Chauffeur bereitgestellt und nach höchsten Standards gewartet und gepflegt.'
  },
  {
    title: 'Mercedes S-Klasse',
    content: 'Die Mercedes S-Klasse ist unser Premium-Limousinenservice für höchste Ansprüche. Sie bietet luxuriöse Ledersitze, Klimaanlage und eine sanfte, komfortable Fahrt. Ideal für Business Transfers, Executive Chauffeur Service und besondere Anlässe. Die perfekte Wahl für anspruchsvolle Geschäftsreisende.'
  },
  {
    title: 'BMW 7er Serie',
    content: 'Die BMW 7er Serie verbindet Luxus mit sportlicher Leistung in unserem exklusiven Chauffeurservice. Sie bietet geräumige Innenräume, fortschrittliche Technologie und einen leistungsstarken Motor. Perfekt für Führungskräfte, VIP-Kunden und Business Chauffeur Service mit höchstem Komfort.'
  },
  {
    title: 'Mercedes V-Klasse',
    content: 'Die Mercedes V-Klasse ist unser Premium-Van für den Luxus Limousinenservice. Sie bietet Platz für bis zu 7 Passagiere mit Gepäck und ist ideal für Gruppenreisen, Flughafentransfers und Familienausflüge. Die perfekte Wahl für komfortables Reisen in größeren Gruppen mit unserem professionellen Chauffeurservice.'
  },
  {
    title: 'Business Chauffeur Service',
    content: 'Unser professioneller Business Chauffeur Service bietet erstklassigen Executive Transfer Service für Geschäftsreisende. Unsere Chauffeure sind geschult, um außergewöhnlichen Service zu bieten. Sie sind pünktlich, diskret und kennen sich in der Region bestens aus. Alle Chauffeure sprechen mehrere Sprachen und tragen formelle Kleidung für einen professionellen Auftritt.'
  },
  {
    title: 'Flughafentransfer',
    content: 'Wir bieten zuverlässigen Flughafentransfer zu und von allen wichtigen Flughäfen. Unser Luxustransfer vom Flughafen umfasst Echtzeitverfolgung der Flugankünfte, damit unsere Chauffeure Sie bei der Landung erwarten. Wir gewähren 60 Minuten kostenlose Wartezeit für internationale Flüge und bieten einen komfortablen Meet-and-Greet-Service.'
  },
  {
    title: 'VIP Chauffeur Service',
    content: 'Unser VIP Chauffeur Service bietet höchsten Luxus und Diskretion für anspruchsvolle Kunden. Wir können Sicherheitspersonal arrangieren, mit Veranstaltern koordinieren und maßgeschneiderte Dienstleistungen anbieten, um Ihre spezifischen Anforderungen zu erfüllen. Unser 24h Premium Fahrservice steht Ihnen rund um die Uhr zur Verfügung.'
  },
  {
    title: 'Tourismus Dienstleistungen',
    content: 'Wir bieten geführte Touren zu beliebten Reisezielen, Shopping-Touren zu Outlet Centern, Transfers zu Freizeitparks und Bauernhofbesuche mit unserem Luxus Limousinenservice. Unsere Chauffeure kennen sich mit lokalen Sehenswürdigkeiten aus und können Empfehlungen basierend auf Ihren Interessen geben. Erleben Sie Stadtrundfahrten in München, Hamburg, Berlin und Frankfurt mit unserem exklusiven Chauffeurservice.'
  },
  {
    title: 'Kontaktinformationen',
    content: 'Sie können uns telefonisch, per E-Mail oder über das Kontaktformular auf unserer Website erreichen. Unser Premium Chauffeur Service steht Ihnen rund um die Uhr zur Verfügung, um Ihnen bei Buchungen und Anfragen zu helfen. Wir bieten 24/7 Verfügbarkeit für alle Ihre Transportbedürfnisse.'
  },
  {
    title: 'Buchungsprozess',
    content: 'Um unseren Luxus Limousinenservice zu buchen, können Sie das Kontaktformular auf unserer Website verwenden, uns direkt anrufen oder eine E-Mail senden. Wir benötigen Datum, Uhrzeit, Abholort, Ziel, Anzahl der Passagiere und eventuelle besondere Anforderungen für Ihren Business Chauffeur Service oder VIP Transfer.'
  },
  {
    title: 'Preisgestaltung',
    content: 'Unsere Preise für den Premium Chauffeur Service basieren auf dem Fahrzeugtyp, der Dauer und der Entfernung der Reise. Wir bieten Stundensätze, Halbtagessätze und Ganztagessätze für unseren exklusiven Limousinenservice. Bitte kontaktieren Sie uns für ein personalisiertes Angebot für Ihren individuellen Chauffeurservice.'
  }
];

/**
 * Function to search the knowledge base for relevant information
 * @param {string} query - The user's query
 * @param {Array} knowledgeBase - The knowledge base to search
 * @returns {Array} - Array of relevant knowledge base entries
 */
export const searchKnowledgeBase = (query, knowledgeBase = initialKnowledgeBase) => {
  const normalizedQuery = query.toLowerCase();

  // Simple search implementation - in a real application, you might want to use
  // a more sophisticated search algorithm or a vector database
  return knowledgeBase.filter(entry => {
    const normalizedTitle = entry.title.toLowerCase();
    const normalizedContent = entry.content.toLowerCase();

    return normalizedTitle.includes(normalizedQuery) ||
           normalizedContent.includes(normalizedQuery);
  });
};

/**
 * Function to add a new entry to the knowledge base
 * @param {Object} entry - The entry to add (with title and content)
 * @param {Array} knowledgeBase - The knowledge base to add to
 * @returns {Array} - The updated knowledge base
 */
export const addToKnowledgeBase = (entry, knowledgeBase = initialKnowledgeBase) => {
  return [...knowledgeBase, entry];
};

/**
 * Function to extract content from HTML for the knowledge base
 * This is a simplified version - in a real application, you would
 * want to crawl your website and extract content from all pages
 * @param {string} html - The HTML content to extract from
 * @param {string} title - The title for this content
 * @returns {Object} - A knowledge base entry
 */
export const extractContentFromHTML = (html, title) => {
  // This is a very simplified implementation
  // In a real application, you would use a proper HTML parser
  const tempDiv = document.createElement('div');
  tempDiv.innerHTML = html;

  // Remove scripts, styles, and other non-content elements
  const scripts = tempDiv.querySelectorAll('script, style, nav, footer');
  scripts.forEach(script => script.remove());

  // Get the text content
  const content = tempDiv.textContent.trim()
    .replace(/\s+/g, ' ') // Replace multiple spaces with a single space
    .substring(0, 1000); // Limit the length

  return {
    title,
    content
  };
};
