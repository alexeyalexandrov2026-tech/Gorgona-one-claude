// Each locale is a partial override merged onto `en` at read time (see
// getTranslation below), so a language only needs to define the keys it has
// translations for - anything missing falls back to English automatically
// instead of ever rendering `undefined`.
export const translations = {
  en: {
    nav: { home: 'Home', stores: 'Stores', coupons: 'Coupons', rentals: 'Rentals', sportsbook: 'Sportsbook', events: 'Events', admin: 'Admin', search: 'Search deals', travel: 'Travel', villas: 'Villas', yachts: 'Yachts', cars: 'Cars', discoveryRoom: 'Discovery Room' },
    ai: {
      themeLight: 'Light', themeDark: 'Dark', switchToLight: 'Switch to light atmosphere', switchToDark: 'Switch to dark atmosphere',
      askAria: 'Ask Gorgona One AI', micSpeak: 'Speak your request', micStop: 'Stop listening', micUnsupported: 'Voice input is not supported in this browser',
      listening: 'Listening', surfacing: 'Surfacing', openConcierge: 'Open the Discovery Room concierge', goBack: 'Go back',
      introText: 'Ask for anything across the GORGONA ONE ecosystem — travel, dining, yachts, villas, events — and receive elegant, personal recommendations.',
      couldntReach: "I couldn't reach the concierge just now - please try again.", tempUnavailable: 'The concierge is temporarily unavailable. Please try again shortly.', open: 'Open',
      listeningPlaceholder: 'Listening…', askPlaceholder: 'Ask the concierge anything…', startVoiceInput: 'Start voice input', stopVoiceInput: 'Stop voice input',
      turnOnSpokenReplies: 'Turn on spoken replies', turnOffSpokenReplies: 'Turn off spoken replies', askButton: 'Ask', conciergeVoice: 'Concierge voice',
      genderFemale: 'Female', genderMale: 'Male', addToHomeScreenVoiceHint: 'Add GORGONA ONE to your home screen to choose a male or female concierge voice',
      aiDockLabel: 'AI Dock', gorgonaConcierge: 'GORGONA ONE Concierge', discoveryRoomLink: 'Discovery Room', closeAiDock: 'Close AI Dock', aiDockAriaLabel: 'GORGONA ONE AI Dock',
      discoveryRoomTitle: 'Discovery Room', closeDiscoveryRoom: 'Close Discovery Room', askFromAnywhere: 'Ask from anywhere…', resultsTitle: 'Results',
      savedTitle: 'Saved', savedEmpty: 'Pin results to keep them here — they stay while you browse.',
      recentSearches: 'Recent searches', clear: 'Clear', recentEmpty: 'Your searches appear here and are kept across the site.',
      reuseSearch: 'Reuse this search', removeSaved: 'Remove from saved', save: 'Save', savedState: 'Saved', returnToAI: 'Return to Gorgona One AI',
      addToHomeScreen: 'Add GORGONA ONE to your Home Screen', installHint: 'Install the app for a focused, standalone concierge experience.',
      install: 'Install', notNow: 'Not now', iosShareHintPre: 'Tap', iosShareHintPost: 'Share, then', addToHomeScreenQuoted: '"Add to Home Screen"', gotIt: 'Got it',
      discoveryEyebrow: 'The Discovery Room · AI Concierge', discoveryHeroTitle: "Ask for anything. We'll take it from here.",
      discoveryHeroSubtitle: 'A personal AI concierge for the entire GORGONA ONE ecosystem — travel, dining, stays, yachts, cars, sportsbooks and events. Type or speak, and it will point you to the right corner of the ecosystem.',
      capabilitiesEyebrow: 'Capabilities', capabilitiesTitle: 'One assistant, the whole ecosystem.',
      capTravelTitle: 'Travel planning', capTravelCopy: 'Itineraries, flights, and stays tailored to how you like to travel.',
      capDiningTitle: 'Dining & nightlife', capDiningCopy: 'Tables, chef’s counters and after-dark venues, matched to the moment.',
      capShoppingTitle: 'Shopping guidance', capShoppingCopy: 'Personal picks across fashion, technology and lifestyle.',
      capExperienceTitle: 'Experience curation', capExperienceCopy: 'Yachts, villas, events and nightlife matched to the moment.',
      geminiNotConnected: "The Discovery Room isn't connected to Gemini yet - add a GEMINI_API_KEY to the environment to bring the AI concierge online. In the meantime, explore Travel, Restaurants, Shopping, Villas, Yachts, Car Rentals, Sportsbooks and Events from the navigation above.",
      geminiSnag: 'The concierge hit a snag reaching Gemini just now. Please try again in a moment.',
      geminiRateLimited: 'The concierge is getting a lot of requests right now - please try again in a few seconds.',
      geminiInvalidKey: 'The concierge Gemini key looks invalid or unauthorized. Please check GEMINI_API_KEY.',
      geminiNoReply: "I couldn't quite catch that - could you rephrase?",
      geminiTimeout: 'The concierge is taking longer than expected to respond. Please try again in a moment.',
      geminiUnavailable: 'The concierge is temporarily unavailable. Please try again shortly.',
      starterPrompts: ['Plan a weekend in Miami', 'Find a yacht for 8 guests', 'Book a table for a birthday dinner', 'Best sportsbook offers right now'],
      examplePrompts: ['Find me a Lamborghini in Miami', 'Show yacht rentals under $5,000', 'Best sportsbook bonuses tonight', 'Luxury hotels in Miami Beach'],
      entityTypes: { Yacht: 'Yacht', Stay: 'Stay', Experience: 'Experience', Nightlife: 'Nightlife', Restaurant: 'Restaurant', Car: 'Car', Event: 'Event', Store: 'Store', Category: 'Category', World: 'World', Destination: 'Destination' },
      constellations: {
        travel: { full: 'World of Travel', short: 'Travel' }, drive: { full: 'Drive & Sail', short: 'Drive & Sail' }, style: { full: 'Style & Shop', short: 'Style & Shop' },
        play: { full: 'Play & Win', short: 'Play & Win' }, taste: { full: 'Table & Taste', short: 'Table & Taste' }, concierge: { full: 'Concierge', short: 'Concierge' }
      },
      categories: {
        travel: 'Travel', flights: 'Flights', hotels: 'Hotels', carRentals: 'Car Rentals', cars: 'Cars', yachts: 'Yachts', shopping: 'Shopping', fashion: 'Fashion',
        beauty: 'Beauty', electronics: 'Electronics', entertainment: 'Entertainment', events: 'Events', sports: 'Sports', sportsbooks: 'Sportsbooks',
        food: 'Food', restaurants: 'Restaurants', concierge: 'Concierge', promoCodes: 'Promo Codes', deals: 'Deals'
      },
      suggestionTopics: {
        travel: 'Travel', diningNightlife: 'Dining & Nightlife', shopping: 'Shopping', villasStays: 'Villas & Stays',
        yachtRentals: 'Yacht Rentals', carRentals: 'Car Rentals', sportsbooks: 'Sportsbooks', eventsEntertainment: 'Events & Entertainment'
      }
    },
    categories: {
      shopping: 'Shopping', fashion: 'Fashion', electronics: 'Electronics', beauty: 'Beauty', home: 'Home', travel: 'Travel', sport: 'Sport', betting: 'Betting',
      restaurants: 'Restaurants', food: 'Food', entertainment: 'Entertainment', kosherRestaurants: 'Kosher Restaurants', kosherStores: 'Kosher Stores'
    },
    categoryDescriptions: { shopping: 'Everyday essentials and premium retail savings.', fashion: 'Style, apparel, footwear, and fashion retailer discounts.', electronics: 'Devices, accessories, and gaming tech offers.', beauty: 'Skincare, cosmetics, and wellness deals.', home: 'Furniture, decor, and home improvement savings.', travel: 'Hotels, flights, car rentals, and vacation offers.', sport: 'Fitness brands, equipment, and athletic wear discounts.', betting: 'Sportsbook promos and betting-related offers.', restaurants: 'Fine dining, chef’s tables, and after-dark venues curated across the world’s top cities.', food: 'Food delivery, grocery, and subscription savings.', entertainment: 'Streaming, events, cinemas, and gaming deals.', kosherRestaurants: 'Certified kosher dining, catering, and delivery across major US cities.', kosherStores: 'Kosher grocers, butchers, and specialty markets across major US cities.' },
    buttons: { viewDeals: 'View Deals', getDeal: 'Get Deal', visitStore: 'Visit Store', copyCode: 'Copy Code', search: 'Search', popularSearches: 'Popular Searches' },
    search: { placeholder: 'Search deals, stores, restaurants, and more', results: 'Search results', noResults: 'No results found for your search.', popular: { carRentals: 'Car rentals', yachtRentals: 'Yacht rentals', sportsbookBonuses: 'Sportsbook bonuses', vacationRentals: 'Vacation rentals', miamiExperiences: 'Miami experiences', restaurantsNightlife: 'Restaurants & nightlife' } },
    home: { heroTitle: 'Global deals, promo codes, and lifestyle offers', heroSubtitle: 'Discover verified discounts across shopping, restaurants, entertainment, travel, sports, and betting.', featured: 'Featured Deals' },
    category: { dealsAndPromoCodes: 'deals and promo codes', noCodeNeeded: 'No code needed', ends: 'Ends', storesDirectory: 'Stores Directory', exploreStores: 'Explore premium stores and active offers', couponSystem: 'Coupon System', verifiedDeals: 'Verified deals across shopping, dining, travel, and entertainment', dealDescriptionTemplate: '{name} offers premium savings across {category} with verified deals and optimized affiliate-ready links.', kosherDescriptionTemplate: '{name} in {city}, {state} - certified kosher, verified deals and optimized affiliate-ready links.', allCategories: 'All categories', dealDetail: 'Deal detail', offerSummary: 'Offer summary', categoryLabel: 'Category', discountLabel: 'Discount', expirationLabel: 'Expiration', getThisDeal: 'Get this deal' },
    kosher: { rating: 'Rating', reviews: 'reviews', viewOnMap: 'View on map', promoCode: 'Promo code' },
    legal: {
      privacyTitle: 'Privacy policy and data handling', privacyBody: 'GORGONA ONE uses secure authentication and analytics-ready structures for affiliate tracking, user engagement, and monetization workflows.',
      termsTitle: 'Terms of use and affiliate disclosures', termsBody: 'All offers and promotions should be verified directly with the operating merchant or sportsbook before use.',
      cookiesTitle: 'How GORGONA ONE uses cookies', cookiesBody: 'We use cookies to remember language preferences, store session details, improve analytics, and support affiliate attribution while keeping the experience fast and personalized.',
      disclosureTitle: 'How affiliate commissions work', disclosureBody: 'GORGONA ONE may earn commissions when users click through and complete qualifying actions through partner links. This helps sustain the platform and fund the discovery tools for users.',
      agreementTitle: 'Merchant and affiliate partnership terms', agreementBody: 'Approved partners agree to provide accurate promotion details, comply with legal requirements, and use the platform according to the affiliate and compliance rules established by GORGONA ONE.'
    },
    partnerForm: { title: 'Partner registration', companyName: 'Company name', website: 'Website', contactEmail: 'Contact email', category: 'Category', submit: 'Apply as partner' , successSubmit: 'Application submitted successfully. Our team will reach out within 2 business days.' },
    common: { viewDetails: 'View Details' },
    events: {
      marketplaceTitle: 'Tickets & Events', marketplaceSubtitle: 'Sports tickets and concert tickets from trusted providers, all in one place.',
      categories: 'Categories', sportsTickets: 'Sports Tickets', concertTickets: 'Concert Tickets',
      featuredEvents: 'Featured Events', trendingEvents: 'Trending Events', upcomingEvents: 'Upcoming Events',
      featuredSportsEvents: 'Featured Sports Events', featuredConcerts: 'Featured Concerts', comingSoon: 'Coming soon.',
      priceRange: 'Price range', teams: 'Teams', previous: 'Previous', next: 'Next', page: 'Page', of: 'of',
      searchPlaceholder: 'Search events, teams, artists, or venues', allCategories: 'All categories', allProviders: 'All providers',
      eventDetails: 'Event details', venue: 'Venue', city: 'City', location: 'Location', date: 'Date', time: 'Time',
      ticketProviders: 'Ticket providers', buyTickets: 'Buy Tickets',
      categoryLabels: {
        basketball: 'Basketball', baseball: 'Baseball', hockey: 'Hockey', soccer: 'Soccer', tennis: 'Tennis', formula1: 'Formula 1', golf: 'Golf', 'ufc-boxing': 'UFC / Boxing',
        'theater-broadway': 'Theater & Broadway', 'shows-entertainment': 'Shows & Entertainment', festivals: 'Festivals', 'music-events': 'Music Events', 'comedy-shows': 'Comedy Shows',
        'family-events': 'Family Events', 'exhibitions-museums': 'Exhibitions & Museums', 'gaming-esports': 'Gaming & Esports', 'special-events': 'Special Events'
      }
    },
    rentals: { pill: 'Luxury Rentals', title: 'Premium cars, yachts, villas, and private experiences', subtitle: 'A simple marketplace for high-value rentals and concierge-led bookings in Miami and beyond.', company: 'Company', location: 'Location', daily: 'Daily', weekly: 'Weekly', reserve: 'Reserve' },
    yachts: { pill: 'Yacht Rentals', title: 'Private yacht charters and luxury boats', subtitle: 'Book premium yachts with full crew for parties, sunset cruises, and offshore adventures.', company: 'Company', location: 'Location', capacity: 'Capacity', length: 'Length', price: 'Price', guests: 'guests', reserve: 'Reserve' },
    vacationRentals: { pill: 'Vacation Rentals', title: 'Luxury villas, penthouses, and waterfront homes', subtitle: 'High-end short-term stays across Miami\'s most exclusive neighborhoods.', location: 'Location', guests: 'Guests', bedrooms: 'Bedrooms', nightlyRate: 'Nightly rate', reserve: 'Reserve' },
    experiences: { pill: 'Miami Experiences', title: 'Unforgettable activities and premium experiences', subtitle: 'From helicopter tours to yacht parties, curated experiences across Miami.', location: 'Location', duration: 'Duration', price: 'Price', book: 'Book Now' },
    restaurantsNightlife: { pill: 'Restaurants & Nightlife', title: 'Top restaurants, clubs, and rooftop lounges', subtitle: 'Miami\'s most iconic dining rooms and nightlife venues, all in one place.', restaurants: 'Restaurants', nightlife: 'Nightlife', all: 'All', location: 'Location', rating: 'Rating' },
    sportsbookPage: { pill: 'Sports Betting', title: 'Premium sportsbook directory', subtitle: 'Explore the major sportsbook companies with dedicated profile pages, state availability, and future-ready promo code sections.', viewProfile: 'View Profile' },
    auth: { pill: 'User Account', title: 'Welcome back', subtitle: 'Sign in to manage your saved deals, coupons, and bookings.', email: 'Email', password: 'Password', confirmPassword: 'Confirm password', name: 'Full name', continueLabel: 'Continue', signInTab: 'Sign In', signUpTab: 'Sign Up', signOut: 'Sign Out', signedInAs: 'Signed in as', errorRequired: 'Please fill in all required fields.', errorEmail: 'Please enter a valid email address.', errorPasswordLength: 'Password must be at least 6 characters.', errorPasswordMatch: 'Passwords do not match.', errorInvalidCredentials: 'Incorrect email or password.', errorEmailInUse: 'An account with this email already exists.', successSignUp: 'Account created successfully. Welcome!', successSignIn: 'Signed in successfully.', loading: 'Please wait...' }
  },
  ru: {
    nav: { home: 'Главная', stores: 'Магазины', coupons: 'Купоны', rentals: 'Аренда', sportsbook: 'Спортивные ставки', events: 'События', admin: 'Админ', search: 'Поиск предложений', travel: 'Путешествия', villas: 'Виллы', yachts: 'Яхты', cars: 'Авто', discoveryRoom: 'Комната открытий' },
    ai: {
      themeLight: 'Светлая', themeDark: 'Тёмная', switchToLight: 'Переключить на светлую атмосферу', switchToDark: 'Переключить на тёмную атмосферу',
      askAria: 'Спросить Gorgona One AI', micSpeak: 'Произнесите запрос', micStop: 'Остановить прослушивание', micUnsupported: 'Голосовой ввод не поддерживается в этом браузере',
      listening: 'Слушаю', surfacing: 'Показываю', openConcierge: 'Открыть консьержа Комнаты открытий', goBack: 'Назад',
      introText: 'Спросите о чём угодно в экосистеме GORGONA ONE — путешествия, рестораны, яхты, виллы, события — и получите элегантные, персональные рекомендации.',
      couldntReach: 'Не удалось связаться с консьержем - попробуйте ещё раз.', tempUnavailable: 'Консьерж временно недоступен. Попробуйте немного позже.', open: 'Открыть',
      listeningPlaceholder: 'Слушаю…', askPlaceholder: 'Спросите консьержа о чём угодно…', startVoiceInput: 'Начать голосовой ввод', stopVoiceInput: 'Остановить голосовой ввод',
      turnOnSpokenReplies: 'Включить озвучивание ответов', turnOffSpokenReplies: 'Выключить озвучивание ответов', askButton: 'Спросить', conciergeVoice: 'Голос консьержа',
      genderFemale: 'Женский', genderMale: 'Мужской', addToHomeScreenVoiceHint: 'Добавьте GORGONA ONE на главный экран, чтобы выбрать мужской или женский голос консьержа',
      aiDockLabel: 'AI-панель', gorgonaConcierge: 'Консьерж GORGONA ONE', discoveryRoomLink: 'Комната открытий', closeAiDock: 'Закрыть AI-панель', aiDockAriaLabel: 'AI-панель GORGONA ONE',
      discoveryRoomTitle: 'Комната открытий', closeDiscoveryRoom: 'Закрыть Комнату открытий', askFromAnywhere: 'Спросите откуда угодно…', resultsTitle: 'Результаты',
      savedTitle: 'Сохранено', savedEmpty: 'Закрепляйте результаты здесь — они останутся, пока вы просматриваете сайт.',
      recentSearches: 'Недавние запросы', clear: 'Очистить', recentEmpty: 'Ваши запросы будут появляться здесь и сохраняться на всём сайте.',
      reuseSearch: 'Повторить этот запрос', removeSaved: 'Убрать из сохранённого', save: 'Сохранить', savedState: 'Сохранено', returnToAI: 'Вернуться к Gorgona One AI',
      addToHomeScreen: 'Добавьте GORGONA ONE на главный экран', installHint: 'Установите приложение для сфокусированного, автономного консьерж-опыта.',
      install: 'Установить', notNow: 'Не сейчас', iosShareHintPre: 'Нажмите', iosShareHintPost: 'Поделиться, затем', addToHomeScreenQuoted: '«На экран «Домой»»', gotIt: 'Понятно',
      discoveryEyebrow: 'Комната открытий · AI-консьерж', discoveryHeroTitle: 'Спросите о чём угодно. Мы обо всём позаботимся.',
      discoveryHeroSubtitle: 'Персональный AI-консьерж для всей экосистемы GORGONA ONE — путешествия, рестораны, проживание, яхты, авто, ставки и события. Напишите или произнесите запрос, и он укажет нужный раздел экосистемы.',
      capabilitiesEyebrow: 'Возможности', capabilitiesTitle: 'Один ассистент, вся экосистема.',
      capTravelTitle: 'Планирование путешествий', capTravelCopy: 'Маршруты, перелёты и проживание, подобранные под ваш стиль путешествий.',
      capDiningTitle: 'Рестораны и ночная жизнь', capDiningCopy: 'Столики, места у шефа и ночные заведения, подобранные под момент.',
      capShoppingTitle: 'Помощь с покупками', capShoppingCopy: 'Персональный подбор в моде, технике и стиле жизни.',
      capExperienceTitle: 'Подбор впечатлений', capExperienceCopy: 'Яхты, виллы, события и ночная жизнь, подобранные под момент.',
      geminiNotConnected: 'Комната открытий пока не подключена к Gemini - добавьте GEMINI_API_KEY в окружение, чтобы включить AI-консьержа. А пока изучите разделы Путешествия, Рестораны, Шопинг, Виллы, Яхты, Аренда авто, Ставки и События в навигации выше.',
      geminiSnag: 'Консьерж только что не смог связаться с Gemini. Попробуйте ещё раз через момент.',
      geminiRateLimited: 'Сейчас консьерж получает очень много запросов - попробуйте снова через несколько секунд.',
      geminiInvalidKey: 'Похоже, ключ Gemini у консьержа неверен или не авторизован. Проверьте GEMINI_API_KEY.',
      geminiNoReply: 'Не совсем расслышал - не могли бы вы переформулировать?',
      geminiTimeout: 'Консьерж отвечает дольше обычного. Попробуйте ещё раз через момент.',
      geminiUnavailable: 'Консьерж временно недоступен. Попробуйте немного позже.',
      starterPrompts: ['Спланировать выходные в Майами', 'Найти яхту на 8 гостей', 'Забронировать столик на день рождения', 'Лучшие предложения букмекеров прямо сейчас'],
      examplePrompts: ['Найди мне Lamborghini в Майами', 'Покажи аренду яхт до $5,000', 'Лучшие бонусы букмекеров сегодня', 'Люксовые отели в Майами-Бич'],
      entityTypes: { Yacht: 'Яхта', Stay: 'Проживание', Experience: 'Впечатление', Nightlife: 'Ночная жизнь', Restaurant: 'Ресторан', Car: 'Авто', Event: 'Событие', Store: 'Магазин', Category: 'Категория', World: 'Раздел', Destination: 'Направление' },
      constellations: {
        travel: { full: 'Мир путешествий', short: 'Путешествия' }, drive: { full: 'Авто и яхты', short: 'Авто и яхты' }, style: { full: 'Стиль и покупки', short: 'Стиль и покупки' },
        play: { full: 'Развлечения и выигрыши', short: 'Развлечения' }, taste: { full: 'Гастрономия', short: 'Гастрономия' }, concierge: { full: 'Консьерж', short: 'Консьерж' }
      },
      categories: {
        travel: 'Путешествия', flights: 'Авиабилеты', hotels: 'Отели', carRentals: 'Аренда авто', cars: 'Авто', yachts: 'Яхты', shopping: 'Шопинг', fashion: 'Мода',
        beauty: 'Красота', electronics: 'Электроника', entertainment: 'Развлечения', events: 'События', sports: 'Спорт', sportsbooks: 'Букмекеры',
        food: 'Еда', restaurants: 'Рестораны', concierge: 'Консьерж', promoCodes: 'Промокоды', deals: 'Скидки'
      },
      suggestionTopics: {
        travel: 'Путешествия', diningNightlife: 'Рестораны и ночная жизнь', shopping: 'Шопинг', villasStays: 'Виллы и проживание',
        yachtRentals: 'Аренда яхт', carRentals: 'Аренда авто', sportsbooks: 'Букмекеры', eventsEntertainment: 'События и развлечения'
      }
    },
    categories: {
      shopping: 'Шопинг', fashion: 'Мода', electronics: 'Электроника', beauty: 'Красота', home: 'Дом', travel: 'Путешествия', sport: 'Спорт', betting: 'Ставки',
      restaurants: 'Рестораны', food: 'Еда', entertainment: 'Развлечения', kosherRestaurants: 'Кошерные рестораны', kosherStores: 'Кошерные магазины'
    },
    categoryDescriptions: { shopping: 'Повседневные товары и выгодные скидки в рознице.', fashion: 'Стиль, одежда, обувь и скидки от модных ритейлеров.', electronics: 'Устройства, аксессуары и предложения по игровой технике.', beauty: 'Уход за кожей, косметика и товары для здоровья.', home: 'Мебель, декор и скидки на ремонт дома.', travel: 'Отели, авиабилеты, аренда авто и предложения для отпуска.', sport: 'Спортивные бренды, инвентарь и скидки на спортивную одежду.', betting: 'Промоакции букмекеров и предложения по ставкам.', restaurants: 'Высокая кухня, авторские ужины и ночные заведения, отобранные в лучших городах мира.', food: 'Доставка еды, продукты и скидки на подписки.', entertainment: 'Стриминг, мероприятия, кино и игровые предложения.', kosherRestaurants: 'Сертифицированные кошерные рестораны, кейтеринг и доставка в крупных городах США.', kosherStores: 'Кошерные продуктовые магазины, мясные лавки и специализированные рынки в крупных городах США.' },
    buttons: { viewDeals: 'Смотреть предложения', getDeal: 'Получить скидку', visitStore: 'Перейти в магазин', copyCode: 'Копировать код', search: 'Поиск', popularSearches: 'Популярные запросы' },
    search: { placeholder: 'Найдите скидки, магазины, рестораны и многое другое', results: 'Результаты поиска', noResults: 'По вашему запросу ничего не найдено.', popular: { carRentals: 'Аренда авто', yachtRentals: 'Аренда яхт', sportsbookBonuses: 'Бонусы букмекеров', vacationRentals: 'Аренда для отпуска', miamiExperiences: 'Впечатления в Майами', restaurantsNightlife: 'Рестораны и ночная жизнь' } },
    home: { heroTitle: 'Глобальные скидки, промокоды и предложения для жизни', heroSubtitle: 'Открывайте проверенные скидки в шопинге, ресторанах, развлечениях, путешествиях, спорте и ставках.', featured: 'Рекомендуемые предложения' },
    category: { dealsAndPromoCodes: 'скидки и промокоды', noCodeNeeded: 'Код не требуется', ends: 'Действует до', storesDirectory: 'Каталог магазинов', exploreStores: 'Изучите премиальные магазины и активные предложения', couponSystem: 'Система купонов', verifiedDeals: 'Проверенные скидки в шопинге, ресторанах, путешествиях и развлечениях', dealDescriptionTemplate: '{name} предлагает выгодные скидки в категории «{category}» с проверенными предложениями и оптимизированными партнёрскими ссылками.', kosherDescriptionTemplate: '{name} в {city}, {state} - сертифицированный кошерный, проверенные предложения и оптимизированные партнёрские ссылки.', allCategories: 'Все категории', dealDetail: 'Детали предложения', offerSummary: 'Сводка предложения', categoryLabel: 'Категория', discountLabel: 'Скидка', expirationLabel: 'Срок действия', getThisDeal: 'Получить предложение' },
    kosher: { rating: 'Рейтинг', reviews: 'отзывов', viewOnMap: 'Посмотреть на карте', promoCode: 'Промокод' },
    legal: {
      privacyTitle: 'Политика конфиденциальности и обработка данных', privacyBody: 'GORGONA ONE использует безопасную аутентификацию и структуры, готовые для аналитики, партнёрского отслеживания и монетизации.',
      termsTitle: 'Условия использования и партнёрские раскрытия', termsBody: 'Все предложения и акции следует уточнять напрямую у продавца или букмекера перед использованием.',
      cookiesTitle: 'Как GORGONA ONE использует файлы cookie', cookiesBody: 'Мы используем cookie для запоминания языковых настроек, хранения данных сессии, улучшения аналитики и поддержки партнёрской атрибуции, сохраняя быстрый и персонализированный опыт.',
      disclosureTitle: 'Как работают партнёрские комиссии', disclosureBody: 'GORGONA ONE может получать комиссию, когда пользователи переходят по партнёрским ссылкам и выполняют целевые действия. Это помогает поддерживать платформу и развивать инструменты поиска.',
      agreementTitle: 'Условия партнёрства для продавцов', agreementBody: 'Одобренные партнёры обязуются предоставлять точные данные об акциях, соблюдать законодательство и использовать платформу согласно правилам GORGONA ONE.'
    },
    partnerForm: { title: 'Регистрация партнёра', companyName: 'Название компании', website: 'Веб-сайт', contactEmail: 'Контактный email', category: 'Категория', submit: 'Подать заявку' , successSubmit: 'Заявка успешно отправлена. Наша команда свяжется с вами в течение 2 рабочих дней.' },
    common: { viewDetails: 'Подробнее' },
    events: {
      marketplaceTitle: 'Билеты и события', marketplaceSubtitle: 'Билеты на спорт и концерты от проверенных поставщиков в одном месте.',
      categories: 'Категории', sportsTickets: 'Спортивные билеты', concertTickets: 'Билеты на концерты',
      featuredEvents: 'Рекомендуемые события', trendingEvents: 'Популярные события', upcomingEvents: 'Ближайшие события',
      featuredSportsEvents: 'Рекомендуемые спортивные события', featuredConcerts: 'Рекомендуемые концерты', comingSoon: 'Скоро появится.',
      priceRange: 'Диапазон цен', teams: 'Команды', previous: 'Назад', next: 'Далее', page: 'Страница', of: 'из',
      searchPlaceholder: 'Поиск событий, команд, артистов или площадок', allCategories: 'Все категории', allProviders: 'Все поставщики',
      eventDetails: 'Детали события', venue: 'Место проведения', city: 'Город', location: 'Локация', date: 'Дата', time: 'Время',
      ticketProviders: 'Поставщики билетов', buyTickets: 'Купить билеты',
      categoryLabels: {
        basketball: 'Баскетбол', baseball: 'Бейсбол', hockey: 'Хоккей', soccer: 'Футбол', tennis: 'Теннис', formula1: 'Формула 1', golf: 'Гольф', 'ufc-boxing': 'UFC / Бокс', 'theater-broadway': 'Театр и Бродвей', 'shows-entertainment': 'Шоу и развлечения', festivals: 'Фестивали', 'music-events': 'Музыкальные события', 'comedy-shows': 'Комедийные шоу', 'family-events': 'Семейные события', 'exhibitions-museums': 'Выставки и музеи', 'gaming-esports': 'Гейминг и киберспорт', 'special-events': 'Особые события'
      }
    },
    rentals: { pill: 'Люкс-аренда', title: 'Премиальные автомобили, яхты, виллы и частные впечатления', subtitle: 'Простая площадка для аренды класса люкс и бронирования с консьерж-сервисом в Майами и не только.', company: 'Компания', location: 'Локация', daily: 'За день', weekly: 'За неделю', reserve: 'Забронировать' },
    yachts: { pill: 'Аренда яхт', title: 'Частные яхты и роскошные катера', subtitle: 'Бронируйте премиальные яхты с полным экипажем для вечеринок, круизов на закате и морских приключений.', company: 'Компания', location: 'Локация', capacity: 'Вместимость', length: 'Длина', price: 'Цена', guests: 'гостей', reserve: 'Забронировать' },
    vacationRentals: { pill: 'Аренда жилья для отдыха', title: 'Роскошные виллы, пентхаусы и дома у воды', subtitle: 'Премиальное краткосрочное проживание в самых эксклюзивных районах Майами.', location: 'Локация', guests: 'Гостей', bedrooms: 'Спален', nightlyRate: 'Цена за ночь', reserve: 'Забронировать' },
    experiences: { pill: 'Впечатления Майами', title: 'Незабываемые активности и премиальные впечатления', subtitle: 'От вертолётных туров до яхт-вечеринок — подобранные впечатления по всему Майами.', location: 'Локация', duration: 'Продолжительность', price: 'Цена', book: 'Забронировать' },
    restaurantsNightlife: { pill: 'Рестораны и ночная жизнь', title: 'Лучшие рестораны, клубы и крыши-бары', subtitle: 'Самые знаковые рестораны и ночные заведения Майами в одном месте.', restaurants: 'Рестораны', nightlife: 'Ночная жизнь', all: 'Все', location: 'Локация', rating: 'Рейтинг' },
    sportsbookPage: { pill: 'Спортивные ставки', title: 'Премиальный каталог букмекеров', subtitle: 'Изучите крупнейшие букмекерские компании со страницами профилей, доступностью по штатам и разделами промокодов.', viewProfile: 'Смотреть профиль' },
    auth: { pill: 'Личный кабинет', title: 'С возвращением', subtitle: 'Войдите, чтобы управлять сохранёнными предложениями, купонами и бронированиями.', email: 'Email', password: 'Пароль', confirmPassword: 'Подтвердите пароль', name: 'Полное имя', continueLabel: 'Продолжить', signInTab: 'Вход', signUpTab: 'Регистрация', signOut: 'Выйти', signedInAs: 'Вы вошли как', errorRequired: 'Пожалуйста, заполните все обязательные поля.', errorEmail: 'Пожалуйста, введите действительный email.', errorPasswordLength: 'Пароль должен содержать не менее 6 символов.', errorPasswordMatch: 'Пароли не совпадают.', errorInvalidCredentials: 'Неверный email или пароль.', errorEmailInUse: 'Аккаунт с таким email уже существует.', successSignUp: 'Аккаунт успешно создан. Добро пожаловать!', successSignIn: 'Вы успешно вошли.', loading: 'Пожалуйста, подождите...' }
  },
  es: {
    nav: { home: 'Inicio', stores: 'Tiendas', coupons: 'Cupones', rentals: 'Alquileres', sportsbook: 'Apuestas deportivas', events: 'Eventos', admin: 'Administración', search: 'Buscar ofertas', travel: 'Viajes', villas: 'Villas', yachts: 'Yates', cars: 'Autos', discoveryRoom: 'Sala de Descubrimiento' },
    ai: {
      themeLight: 'Claro', themeDark: 'Oscuro', switchToLight: 'Cambiar a ambiente claro', switchToDark: 'Cambiar a ambiente oscuro',
      askAria: 'Preguntar a Gorgona One AI', micSpeak: 'Di tu solicitud', micStop: 'Detener escucha', micUnsupported: 'La entrada de voz no es compatible con este navegador',
      listening: 'Escuchando', surfacing: 'Mostrando', openConcierge: 'Abrir el conserje de la Sala de Descubrimiento', goBack: 'Atrás',
      introText: 'Pregunta cualquier cosa sobre el ecosistema GORGONA ONE — viajes, gastronomía, yates, villas, eventos — y recibe recomendaciones elegantes y personales.',
      couldntReach: 'No pude contactar al conserje ahora mismo - inténtalo de nuevo.', tempUnavailable: 'El conserje no está disponible temporalmente. Inténtalo de nuevo en breve.', open: 'Abrir',
      listeningPlaceholder: 'Escuchando…', askPlaceholder: 'Pregúntale lo que sea al conserje…', startVoiceInput: 'Iniciar entrada de voz', stopVoiceInput: 'Detener entrada de voz',
      turnOnSpokenReplies: 'Activar respuestas habladas', turnOffSpokenReplies: 'Desactivar respuestas habladas', askButton: 'Preguntar', conciergeVoice: 'Voz del conserje',
      genderFemale: 'Femenina', genderMale: 'Masculina', addToHomeScreenVoiceHint: 'Añade GORGONA ONE a tu pantalla de inicio para elegir una voz de conserje masculina o femenina',
      aiDockLabel: 'Panel de IA', gorgonaConcierge: 'Conserje GORGONA ONE', discoveryRoomLink: 'Sala de Descubrimiento', closeAiDock: 'Cerrar panel de IA', aiDockAriaLabel: 'Panel de IA de GORGONA ONE',
      discoveryRoomTitle: 'Sala de Descubrimiento', closeDiscoveryRoom: 'Cerrar Sala de Descubrimiento', askFromAnywhere: 'Pregunta desde cualquier lugar…', resultsTitle: 'Resultados',
      savedTitle: 'Guardados', savedEmpty: 'Guarda resultados aquí — permanecen mientras navegas.',
      recentSearches: 'Búsquedas recientes', clear: 'Borrar', recentEmpty: 'Tus búsquedas aparecerán aquí y se conservarán en todo el sitio.',
      reuseSearch: 'Reutilizar esta búsqueda', removeSaved: 'Quitar de guardados', save: 'Guardar', savedState: 'Guardado', returnToAI: 'Volver a Gorgona One AI',
      addToHomeScreen: 'Añade GORGONA ONE a tu pantalla de inicio', installHint: 'Instala la app para una experiencia de conserje enfocada e independiente.',
      install: 'Instalar', notNow: 'Ahora no', iosShareHintPre: 'Toca', iosShareHintPost: 'Compartir, luego', addToHomeScreenQuoted: '"Añadir a pantalla de inicio"', gotIt: 'Entendido',
      discoveryEyebrow: 'La Sala de Descubrimiento · Conserje de IA', discoveryHeroTitle: 'Pregunta lo que sea. Nosotros nos encargamos.',
      discoveryHeroSubtitle: 'Un conserje de IA personal para todo el ecosistema GORGONA ONE — viajes, gastronomía, estancias, yates, autos, apuestas deportivas y eventos. Escribe o habla, y te guiará al rincón correcto del ecosistema.',
      capabilitiesEyebrow: 'Capacidades', capabilitiesTitle: 'Un asistente, todo el ecosistema.',
      capTravelTitle: 'Planificación de viajes', capTravelCopy: 'Itinerarios, vuelos y estancias adaptados a tu forma de viajar.',
      capDiningTitle: 'Gastronomía y vida nocturna', capDiningCopy: 'Mesas, barras de chef y locales nocturnos, según el momento.',
      capShoppingTitle: 'Guía de compras', capShoppingCopy: 'Selecciones personales en moda, tecnología y estilo de vida.',
      capExperienceTitle: 'Curaduría de experiencias', capExperienceCopy: 'Yates, villas, eventos y vida nocturna, según el momento.',
      geminiNotConnected: 'La Sala de Descubrimiento aún no está conectada a Gemini - añade una GEMINI_API_KEY al entorno para activar el conserje de IA. Mientras tanto, explora Viajes, Restaurantes, Compras, Villas, Yates, Alquiler de autos, Apuestas deportivas y Eventos en la navegación superior.',
      geminiSnag: 'El conserje tuvo un problema al contactar a Gemini. Inténtalo de nuevo en un momento.',
      geminiRateLimited: 'El conserje está recibiendo muchas solicitudes ahora mismo - inténtalo de nuevo en unos segundos.',
      geminiInvalidKey: 'La clave Gemini del conserje parece inválida o no autorizada. Verifica GEMINI_API_KEY.',
      geminiNoReply: 'No entendí bien eso - ¿puedes reformularlo?',
      geminiTimeout: 'El conserje está tardando más de lo esperado en responder. Inténtalo de nuevo en un momento.',
      geminiUnavailable: 'El conserje no está disponible temporalmente. Inténtalo de nuevo en breve.',
      starterPrompts: ['Planear un fin de semana en Miami', 'Encontrar un yate para 8 personas', 'Reservar una mesa para una cena de cumpleaños', 'Mejores ofertas de apuestas deportivas ahora mismo'],
      examplePrompts: ['Encuéntrame un Lamborghini en Miami', 'Muéstrame alquiler de yates por menos de $5,000', 'Mejores bonos de apuestas deportivas esta noche', 'Hoteles de lujo en Miami Beach'],
      entityTypes: { Yacht: 'Yate', Stay: 'Estancia', Experience: 'Experiencia', Nightlife: 'Vida nocturna', Restaurant: 'Restaurante', Car: 'Auto', Event: 'Evento', Store: 'Tienda', Category: 'Categoría', World: 'Sección', Destination: 'Destino' },
      constellations: {
        travel: { full: 'Mundo de Viajes', short: 'Viajes' }, drive: { full: 'Autos y Yates', short: 'Autos y Yates' }, style: { full: 'Estilo y Compras', short: 'Estilo y Compras' },
        play: { full: 'Diversión y Premios', short: 'Diversión' }, taste: { full: 'Mesa y Sabor', short: 'Mesa y Sabor' }, concierge: { full: 'Conserje', short: 'Conserje' }
      },
      categories: {
        travel: 'Viajes', flights: 'Vuelos', hotels: 'Hoteles', carRentals: 'Alquiler de autos', cars: 'Autos', yachts: 'Yates', shopping: 'Compras', fashion: 'Moda',
        beauty: 'Belleza', electronics: 'Electrónica', entertainment: 'Entretenimiento', events: 'Eventos', sports: 'Deportes', sportsbooks: 'Apuestas deportivas',
        food: 'Comida', restaurants: 'Restaurantes', concierge: 'Conserje', promoCodes: 'Códigos promocionales', deals: 'Ofertas'
      },
      suggestionTopics: {
        travel: 'Viajes', diningNightlife: 'Gastronomía y vida nocturna', shopping: 'Compras', villasStays: 'Villas y estancias',
        yachtRentals: 'Alquiler de yates', carRentals: 'Alquiler de autos', sportsbooks: 'Apuestas deportivas', eventsEntertainment: 'Eventos y entretenimiento'
      }
    },
    categories: {
      shopping: 'Compras', fashion: 'Moda', electronics: 'Electrónica', beauty: 'Belleza', home: 'Hogar', travel: 'Viajes', sport: 'Deporte', betting: 'Apuestas',
      restaurants: 'Restaurantes', food: 'Comida', entertainment: 'Entretenimiento', kosherRestaurants: 'Restaurantes Kosher', kosherStores: 'Tiendas Kosher'
    },
    categoryDescriptions: { shopping: 'Esenciales del día a día y grandes ahorros minoristas.', fashion: 'Estilo, ropa, calzado y descuentos de tiendas de moda.', electronics: 'Dispositivos, accesorios y ofertas de tecnología para gaming.', beauty: 'Cuidado de la piel, cosméticos y ofertas de bienestar.', home: 'Muebles, decoración y ahorros para el hogar.', travel: 'Hoteles, vuelos, alquiler de autos y ofertas vacacionales.', sport: 'Marcas deportivas, equipo y descuentos en ropa atlética.', betting: 'Promociones de casas de apuestas y ofertas relacionadas.', restaurants: 'Alta cocina, mesas de chef y locales nocturnos seleccionados en las mejores ciudades del mundo.', food: 'Entrega de comida, supermercado y ahorros en suscripciones.', entertainment: 'Streaming, eventos, cines y ofertas de videojuegos.', kosherRestaurants: 'Restaurantes kosher certificados, catering y entrega en las principales ciudades de EE. UU.', kosherStores: 'Tiendas de comestibles, carnicerías y mercados kosher especializados en las principales ciudades de EE. UU.' },
    buttons: { viewDeals: 'Ver ofertas', getDeal: 'Obtener oferta', visitStore: 'Visitar tienda', copyCode: 'Copiar código', search: 'Buscar', popularSearches: 'Búsquedas populares' },
    search: { placeholder: 'Busca ofertas, tiendas, restaurantes y más', results: 'Resultados de búsqueda', noResults: 'No se encontraron resultados para tu búsqueda.', popular: { carRentals: 'Alquiler de autos', yachtRentals: 'Alquiler de yates', sportsbookBonuses: 'Bonos de apuestas deportivas', vacationRentals: 'Alquileres vacacionales', miamiExperiences: 'Experiencias en Miami', restaurantsNightlife: 'Restaurantes y vida nocturna' } },
    home: { heroTitle: 'Ofertas globales, códigos promocionales y estilo de vida', heroSubtitle: 'Descubre descuentos verificados en compras, restaurantes, entretenimiento, viajes, deportes y apuestas.', featured: 'Ofertas destacadas' },
    category: { dealsAndPromoCodes: 'ofertas y códigos promocionales', noCodeNeeded: 'No se necesita código', ends: 'Finaliza', storesDirectory: 'Directorio de tiendas', exploreStores: 'Explora tiendas premium y ofertas activas', couponSystem: 'Sistema de cupones', verifiedDeals: 'Ofertas verificadas en compras, restaurantes, viajes y entretenimiento', dealDescriptionTemplate: '{name} ofrece grandes ahorros en {category} con ofertas verificadas y enlaces de afiliados optimizados.', kosherDescriptionTemplate: '{name} en {city}, {state} - certificado kosher, ofertas verificadas y enlaces de afiliados optimizados.', allCategories: 'Todas las categorías', dealDetail: 'Detalle de la oferta', offerSummary: 'Resumen de la oferta', categoryLabel: 'Categoría', discountLabel: 'Descuento', expirationLabel: 'Vencimiento', getThisDeal: 'Obtener esta oferta' },
    kosher: { rating: 'Calificación', reviews: 'reseñas', viewOnMap: 'Ver en el mapa', promoCode: 'Código promocional' },
    legal: {
      privacyTitle: 'Política de privacidad y manejo de datos', privacyBody: 'GORGONA ONE utiliza autenticación segura y estructuras listas para análisis, seguimiento de afiliados y monetización.',
      termsTitle: 'Términos de uso y divulgaciones de afiliados', termsBody: 'Todas las ofertas y promociones deben verificarse directamente con el comercio o casa de apuestas antes de usarse.',
      cookiesTitle: 'Cómo utiliza cookies GORGONA ONE', cookiesBody: 'Usamos cookies para recordar preferencias de idioma, guardar datos de sesión, mejorar el análisis y respaldar la atribución de afiliados, manteniendo una experiencia rápida y personalizada.',
      disclosureTitle: 'Cómo funcionan las comisiones de afiliados', disclosureBody: 'GORGONA ONE puede ganar comisiones cuando los usuarios hacen clic y completan acciones calificadas a través de enlaces de socios. Esto ayuda a sostener la plataforma y financiar las herramientas de descubrimiento.',
      agreementTitle: 'Términos de asociación con comercios y afiliados', agreementBody: 'Los socios aprobados aceptan proporcionar detalles precisos de las promociones, cumplir con los requisitos legales y usar la plataforma según las reglas de GORGONA ONE.'
    },
    partnerForm: { title: 'Registro de socio', companyName: 'Nombre de la empresa', website: 'Sitio web', contactEmail: 'Correo de contacto', category: 'Categoría', submit: 'Solicitar ser socio' , successSubmit: 'Solicitud enviada con éxito. Nuestro equipo se pondrá en contacto en un plazo de 2 días hábiles.' },
    common: { viewDetails: 'Ver detalles' },
    events: {
      marketplaceTitle: 'Entradas y Eventos', marketplaceSubtitle: 'Entradas para deportes y conciertos de proveedores de confianza, todo en un solo lugar.',
      categories: 'Categorías', sportsTickets: 'Entradas deportivas', concertTickets: 'Entradas de conciertos',
      featuredEvents: 'Eventos destacados', trendingEvents: 'Eventos en tendencia', upcomingEvents: 'Próximos eventos',
      featuredSportsEvents: 'Eventos deportivos destacados', featuredConcerts: 'Conciertos destacados', comingSoon: 'Próximamente.',
      priceRange: 'Rango de precios', teams: 'Equipos', previous: 'Anterior', next: 'Siguiente', page: 'Página', of: 'de',
      searchPlaceholder: 'Busca eventos, equipos, artistas o recintos', allCategories: 'Todas las categorías', allProviders: 'Todos los proveedores',
      eventDetails: 'Detalles del evento', venue: 'Recinto', city: 'Ciudad', location: 'Ubicación', date: 'Fecha', time: 'Hora',
      ticketProviders: 'Proveedores de entradas', buyTickets: 'Comprar entradas',
      categoryLabels: {
        basketball: 'Baloncesto', baseball: 'Béisbol', hockey: 'Hockey', soccer: 'Fútbol', tennis: 'Tenis', formula1: 'Fórmula 1', golf: 'Golf', 'ufc-boxing': 'UFC / Boxeo', 'theater-broadway': 'Teatro y Broadway', 'shows-entertainment': 'Espectáculos y entretenimiento', festivals: 'Festivales', 'music-events': 'Eventos musicales', 'comedy-shows': 'Espectáculos de comedia', 'family-events': 'Eventos familiares', 'exhibitions-museums': 'Exposiciones y museos', 'gaming-esports': 'Gaming y esports', 'special-events': 'Eventos especiales'
      }
    },
    rentals: { pill: 'Alquileres de lujo', title: 'Autos, yates, villas y experiencias privadas premium', subtitle: 'Un mercado simple para alquileres de alto valor y reservas con servicio de conserjería en Miami y más allá.', company: 'Empresa', location: 'Ubicación', daily: 'Diario', weekly: 'Semanal', reserve: 'Reservar' },
    yachts: { pill: 'Alquiler de yates', title: 'Chárteres privados de yates y barcos de lujo', subtitle: 'Reserva yates premium con tripulación completa para fiestas, cruceros al atardecer y aventuras en el mar.', company: 'Empresa', location: 'Ubicación', capacity: 'Capacidad', length: 'Eslora', price: 'Precio', guests: 'huéspedes', reserve: 'Reservar' },
    vacationRentals: { pill: 'Alquileres vacacionales', title: 'Villas de lujo, áticos y casas frente al mar', subtitle: 'Estancias de alto nivel a corto plazo en los barrios más exclusivos de Miami.', location: 'Ubicación', guests: 'Huéspedes', bedrooms: 'Dormitorios', nightlyRate: 'Tarifa por noche', reserve: 'Reservar' },
    experiences: { pill: 'Experiencias en Miami', title: 'Actividades inolvidables y experiencias premium', subtitle: 'Desde tours en helicóptero hasta fiestas en yate, experiencias exclusivas por todo Miami.', location: 'Ubicación', duration: 'Duración', price: 'Precio', book: 'Reservar ahora' },
    restaurantsNightlife: { pill: 'Restaurantes y vida nocturna', title: 'Los mejores restaurantes, clubes y terrazas', subtitle: 'Los comedores y locales nocturnos más icónicos de Miami, todos en un solo lugar.', restaurants: 'Restaurantes', nightlife: 'Vida nocturna', all: 'Todos', location: 'Ubicación', rating: 'Calificación' },
    sportsbookPage: { pill: 'Apuestas deportivas', title: 'Directorio premium de casas de apuestas', subtitle: 'Explora las principales casas de apuestas con páginas de perfil dedicadas, disponibilidad por estado y secciones de códigos promocionales.', viewProfile: 'Ver perfil' },
    auth: { pill: 'Cuenta de usuario', title: 'Bienvenido de nuevo', subtitle: 'Inicia sesión para gestionar tus ofertas, cupones y reservas guardadas.', email: 'Correo electrónico', password: 'Contraseña', confirmPassword: 'Confirmar contraseña', name: 'Nombre completo', continueLabel: 'Continuar', signInTab: 'Iniciar sesión', signUpTab: 'Registrarse', signOut: 'Cerrar sesión', signedInAs: 'Sesión iniciada como', errorRequired: 'Por favor completa todos los campos obligatorios.', errorEmail: 'Por favor introduce un correo electrónico válido.', errorPasswordLength: 'La contraseña debe tener al menos 6 caracteres.', errorPasswordMatch: 'Las contraseñas no coinciden.', errorInvalidCredentials: 'Correo o contraseña incorrectos.', errorEmailInUse: 'Ya existe una cuenta con este correo electrónico.', successSignUp: 'Cuenta creada con éxito. ¡Bienvenido!', successSignIn: 'Sesión iniciada correctamente.', loading: 'Por favor espera...' }
  },
  he: {
    nav: { home: 'בית', stores: 'חנויות', coupons: 'קופונים', rentals: 'השכרות', sportsbook: 'הימורי ספורט', events: 'אירועים', admin: 'ניהול', search: 'חיפוש מבצעים', travel: 'טיולים', villas: 'וילות', yachts: 'יאכטות', cars: 'רכבים', discoveryRoom: 'חדר הגילויים' },
    ai: {
      themeLight: 'בהיר', themeDark: 'כהה', switchToLight: 'עבור לאווירה בהירה', switchToDark: 'עבור לאווירה כהה',
      askAria: 'שאל את Gorgona One AI', micSpeak: 'אמור את בקשתך', micStop: 'הפסק האזנה', micUnsupported: 'קלט קולי אינו נתמך בדפדפן זה',
      listening: 'מקשיב', surfacing: 'מציג', openConcierge: 'פתח את הקונסיירז\' של חדר הגילויים', goBack: 'חזרה',
      introText: 'שאלו כל דבר על מערכת GORGONA ONE — טיולים, מסעדות, יאכטות, וילות, אירועים — וקבלו המלצות אישיות ואלגנטיות.',
      couldntReach: 'לא הצלחתי להגיע לקונסיירז\' כרגע - נסו שוב.', tempUnavailable: 'הקונסיירז\' אינו זמין באופן זמני. נסו שוב בקרוב.', open: 'פתח',
      listeningPlaceholder: 'מקשיב…', askPlaceholder: 'שאלו את הקונסיירז\' כל דבר…', startVoiceInput: 'התחל קלט קולי', stopVoiceInput: 'הפסק קלט קולי',
      turnOnSpokenReplies: 'הפעל תשובות קוליות', turnOffSpokenReplies: 'כבה תשובות קוליות', askButton: 'שאל', conciergeVoice: 'קול הקונסיירז\'',
      genderFemale: 'נשי', genderMale: 'גברי', addToHomeScreenVoiceHint: 'הוסיפו את GORGONA ONE למסך הבית כדי לבחור קול קונסיירז\' גברי או נשי',
      aiDockLabel: 'לוח AI', gorgonaConcierge: 'קונסיירז\' GORGONA ONE', discoveryRoomLink: 'חדר הגילויים', closeAiDock: 'סגור לוח AI', aiDockAriaLabel: 'לוח ה-AI של GORGONA ONE',
      discoveryRoomTitle: 'חדר הגילויים', closeDiscoveryRoom: 'סגור את חדר הגילויים', askFromAnywhere: 'שאלו מכל מקום…', resultsTitle: 'תוצאות',
      savedTitle: 'שמורים', savedEmpty: 'הצמידו תוצאות כאן — הן יישארו בזמן שאתם גולשים.',
      recentSearches: 'חיפושים אחרונים', clear: 'נקה', recentEmpty: 'החיפושים שלכם יופיעו כאן וישמרו בכל האתר.',
      reuseSearch: 'השתמש שוב בחיפוש זה', removeSaved: 'הסר מהשמורים', save: 'שמור', savedState: 'נשמר', returnToAI: 'חזרה ל-Gorgona One AI',
      addToHomeScreen: 'הוסיפו את GORGONA ONE למסך הבית', installHint: 'התקינו את האפליקציה לחוויית קונסיירז\' עצמאית וממוקדת.',
      install: 'התקן', notNow: 'לא עכשיו', iosShareHintPre: 'הקישו', iosShareHintPost: 'שיתוף, ואז', addToHomeScreenQuoted: '"הוספה למסך הבית"', gotIt: 'הבנתי',
      discoveryEyebrow: 'חדר הגילויים · קונסיירז\' AI', discoveryHeroTitle: 'שאלו כל דבר. אנחנו נטפל בזה.',
      discoveryHeroSubtitle: 'קונסיירז\' AI אישי לכל מערכת GORGONA ONE — טיולים, מסעדות, לינה, יאכטות, רכבים, הימורי ספורט ואירועים. הקלידו או דברו, והוא יכוון אתכם לפינה הנכונה במערכת.',
      capabilitiesEyebrow: 'יכולות', capabilitiesTitle: 'עוזר אחד, מערכת שלמה.',
      capTravelTitle: 'תכנון טיולים', capTravelCopy: 'מסלולים, טיסות ולינה המותאמים לאופן שבו אתם אוהבים לטייל.',
      capDiningTitle: 'מסעדות וחיי לילה', capDiningCopy: 'שולחנות, דלפקי שף ומקומות לילה, מותאמים לרגע.',
      capShoppingTitle: 'ייעוץ קניות', capShoppingCopy: 'בחירות אישיות באופנה, טכנולוגיה וסגנון חיים.',
      capExperienceTitle: 'אצירת חוויות', capExperienceCopy: 'יאכטות, וילות, אירועים וחיי לילה, מותאמים לרגע.',
      geminiNotConnected: 'חדר הגילויים עדיין לא מחובר ל-Gemini - הוסיפו GEMINI_API_KEY לסביבה כדי להפעיל את קונסיירז\' ה-AI. בינתיים, גלו את טיולים, מסעדות, קניות, וילות, יאכטות, השכרת רכב, הימורי ספורט ואירועים בתפריט הניווט למעלה.',
      geminiSnag: 'לקונסיירז\' הייתה תקלה בהתחברות ל-Gemini הרגע. נסו שוב בעוד רגע.',
      geminiRateLimited: 'הקונסיירז\' מקבל כרגע הרבה בקשות - נסו שוב בעוד כמה שניות.',
      geminiInvalidKey: 'נראה שמפתח ה-Gemini של הקונסיירז\' אינו תקין או לא מורשה. בדקו את GEMINI_API_KEY.',
      geminiNoReply: 'לא הצלחתי להבין את זה בדיוק - תוכלו לנסח מחדש?',
      geminiTimeout: 'לקונסיירז\' לוקח יותר זמן מהצפוי להגיב. נסו שוב בעוד רגע.',
      geminiUnavailable: 'הקונסיירז\' אינו זמין באופן זמני. נסו שוב בקרוב.',
      starterPrompts: ['תכננו סוף שבוע במיאמי', 'מצאו יאכטה ל-8 אורחים', 'הזמינו שולחן לארוחת יום הולדת', 'המבצעים הטובים ביותר להימורי ספורט כרגע'],
      examplePrompts: ['מצאו לי למבורגיני במיאמי', 'הראו השכרת יאכטות מתחת ל-5,000$', 'המבצעים הטובים ביותר להימורי ספורט הערב', 'מלונות יוקרה במיאמי ביץ\''],
      entityTypes: { Yacht: 'יאכטה', Stay: 'לינה', Experience: 'חוויה', Nightlife: 'חיי לילה', Restaurant: 'מסעדה', Car: 'רכב', Event: 'אירוע', Store: 'חנות', Category: 'קטגוריה', World: 'עולם', Destination: 'יעד' },
      constellations: {
        travel: { full: 'עולם הטיולים', short: 'טיולים' }, drive: { full: 'רכבים ויאכטות', short: 'רכבים ויאכטות' }, style: { full: 'סגנון וקניות', short: 'סגנון וקניות' },
        play: { full: 'בידור וזכייה', short: 'בידור' }, taste: { full: 'שולחן וטעם', short: 'שולחן וטעם' }, concierge: { full: 'קונסיירז\'', short: 'קונסיירז\'' }
      },
      categories: {
        travel: 'טיולים', flights: 'טיסות', hotels: 'מלונות', carRentals: 'השכרת רכב', cars: 'רכבים', yachts: 'יאכטות', shopping: 'קניות', fashion: 'אופנה',
        beauty: 'יופי', electronics: 'אלקטרוניקה', entertainment: 'בידור', events: 'אירועים', sports: 'ספורט', sportsbooks: 'הימורי ספורט',
        food: 'אוכל', restaurants: 'מסעדות', concierge: 'קונסיירז\'', promoCodes: 'קודי קופון', deals: 'מבצעים'
      },
      suggestionTopics: {
        travel: 'טיולים', diningNightlife: 'מסעדות וחיי לילה', shopping: 'קניות', villasStays: 'וילות ולינה',
        yachtRentals: 'השכרת יאכטות', carRentals: 'השכרת רכב', sportsbooks: 'הימורי ספורט', eventsEntertainment: 'אירועים ובידור'
      }
    },
    categories: {
      shopping: 'קניות', fashion: 'אופנה', electronics: 'אלקטרוניקה', beauty: 'יופי', home: 'בית', travel: 'טיולים', sport: 'ספורט', betting: 'הימורים',
      restaurants: 'מסעדות', food: 'אוכל', entertainment: 'בידור', kosherRestaurants: 'מסעדות כשרות', kosherStores: 'חנויות כשרות'
    },
    categoryDescriptions: { shopping: 'מוצרי יומיום וחיסכון קמעונאי פרימיום.', fashion: 'סגנון, ביגוד, הנעלה והנחות מקמעונאי אופנה.', electronics: 'מכשירים, אביזרים והצעות טכנולוגיית גיימינג.', beauty: 'טיפוח עור, קוסמטיקה ומבצעי בריאות.', home: 'רהיטים, עיצוב וחיסכון בשיפוץ הבית.', travel: 'מלונות, טיסות, השכרת רכב והצעות לחופשה.', sport: 'מותגי כושר, ציוד והנחות על ביגוד ספורט.', betting: 'מבצעי הימורי ספורט והצעות נלוות.', restaurants: 'מסעדות יוקרה, שולחנות שף ומקומות בילוי לילי נבחרים בערים המובילות בעולם.', food: 'משלוחי אוכל, מכולת וחיסכון במנויים.', entertainment: 'סטרימינג, אירועים, קולנוע והצעות גיימינג.', kosherRestaurants: 'מסעדות כשרות מוסמכות, קייטרינג ומשלוחים בערים המרכזיות בארה"ב.', kosherStores: 'מכולות, אטליזים ושווקים כשרים ייעודיים בערים המרכזיות בארה"ב.' },
    buttons: { viewDeals: 'צפייה במבצעים', getDeal: 'קבל מבצע', visitStore: 'בקר בחנות', copyCode: 'העתק קוד', search: 'חיפוש', popularSearches: 'חיפושים פופולריים' },
    search: { placeholder: 'חפשו מבצעים, חנויות, מסעדות ועוד', results: 'תוצאות חיפוש', noResults: 'לא נמצאו תוצאות עבור החיפוש שלך.', popular: { carRentals: 'השכרת רכב', yachtRentals: 'השכרת יאכטות', sportsbookBonuses: 'בונוסים להימורי ספורט', vacationRentals: 'השכרות לחופשה', miamiExperiences: 'חוויות במיאמי', restaurantsNightlife: 'מסעדות וחיי לילה' } },
    home: { heroTitle: 'מבצעים גלובליים, קודי קופון והצעות לייף-סטייל', heroSubtitle: 'גלו הנחות מאומתות בקניות, מסעדות, בידור, נסיעות, ספורט והימורים.', featured: 'מבצעים מומלצים' },
    category: { dealsAndPromoCodes: 'מבצעים וקודי קופון', noCodeNeeded: 'לא נדרש קוד', ends: 'בתוקף עד', storesDirectory: 'מדריך חנויות', exploreStores: 'גלו חנויות פרימיום ומבצעים פעילים', couponSystem: 'מערכת קופונים', verifiedDeals: 'מבצעים מאומתים בקניות, מסעדות, נסיעות ובידור', dealDescriptionTemplate: '{name} מציעה חיסכון פרימיום בקטגוריית {category} עם מבצעים מאומתים וקישורי שותפים מותאמים.', kosherDescriptionTemplate: '{name} ב-{city}, {state} - כשר מוסמך, מבצעים מאומתים וקישורי שותפים מותאמים.', allCategories: 'כל הקטגוריות', dealDetail: 'פרטי המבצע', offerSummary: 'סיכום המבצע', categoryLabel: 'קטגוריה', discountLabel: 'הנחה', expirationLabel: 'תוקף', getThisDeal: 'קבל מבצע זה' },
    kosher: { rating: 'דירוג', reviews: 'ביקורות', viewOnMap: 'הצג על המפה', promoCode: 'קוד קופון' },
    legal: {
      privacyTitle: 'מדיניות פרטיות וטיפול בנתונים', privacyBody: 'GORGONA ONE משתמשת באימות מאובטח ובמבנים המוכנים לניתוח נתונים, מעקב שותפים ומונטיזציה.',
      termsTitle: 'תנאי שימוש וגילויי שותפים', termsBody: 'יש לוודא את כל המבצעים וההטבות ישירות מול הסוחר או בית ההימורים לפני השימוש.',
      cookiesTitle: 'כיצד GORGONA ONE משתמשת בעוגיות', cookiesBody: 'אנו משתמשים בעוגיות כדי לזכור העדפות שפה, לשמור פרטי הפעלה, לשפר ניתוח נתונים ולתמוך בייחוס שותפים, תוך שמירה על חוויה מהירה ומותאמת אישית.',
      disclosureTitle: 'כיצד פועלות עמלות השותפים', disclosureBody: 'GORGONA ONE עשויה להרוויח עמלות כאשר משתמשים לוחצים ומשלימים פעולות מתאימות דרך קישורי שותפים. הדבר מסייע לקיים את הפלטפורמה ולממן את כלי הגילוי.',
      agreementTitle: 'תנאי שותפות לסוחרים ולשותפים', agreementBody: 'שותפים מאושרים מתחייבים לספק פרטי מבצעים מדויקים, לעמוד בדרישות החוק ולהשתמש בפלטפורמה בהתאם לכללי GORGONA ONE.'
    },
    partnerForm: { title: 'רישום שותף', companyName: 'שם החברה', website: 'אתר אינטרנט', contactEmail: 'אימייל ליצירת קשר', category: 'קטגוריה', submit: 'הגש בקשה כשותף' , successSubmit: 'הבקשה נשלחה בהצלחה. הצוות שלנו ייצור קשר תוך יומיים עסקים.' },
    common: { viewDetails: 'צפה בפרטים' },
    events: {
      marketplaceTitle: 'כרטיסים ואירועים', marketplaceSubtitle: 'כרטיסים לספורט וקונצרטים מספקים מהימנים, הכל במקום אחד.',
      categories: 'קטגוריות', sportsTickets: 'כרטיסי ספורט', concertTickets: 'כרטיסי קונצרטים',
      featuredEvents: 'אירועים מומלצים', trendingEvents: 'אירועים פופולריים', upcomingEvents: 'אירועים קרובים',
      featuredSportsEvents: 'אירועי ספורט מומלצים', featuredConcerts: 'קונצרטים מומלצים', comingSoon: 'בקרוב.',
      priceRange: 'טווח מחירים', teams: 'קבוצות', previous: 'הקודם', next: 'הבא', page: 'עמוד', of: 'מתוך',
      searchPlaceholder: 'חיפוש אירועים, קבוצות, אמנים או אולמות', allCategories: 'כל הקטגוריות', allProviders: 'כל הספקים',
      eventDetails: 'פרטי האירוע', venue: 'מקום האירוע', city: 'עיר', location: 'מיקום', date: 'תאריך', time: 'שעה',
      ticketProviders: 'ספקי כרטיסים', buyTickets: 'קנה כרטיסים',
      categoryLabels: {
        basketball: 'כדורסל', baseball: 'בייסבול', hockey: 'הוקי', soccer: 'כדורגל', tennis: 'טניס', formula1: 'פורמולה 1', golf: 'גולף', 'ufc-boxing': 'UFC / איגרוף', 'theater-broadway': 'תיאטרון וברודוויי', 'shows-entertainment': 'מופעים ובידור', festivals: 'פסטיבלים', 'music-events': 'אירועי מוזיקה', 'comedy-shows': 'מופעי קומדיה', 'family-events': 'אירועים משפחתיים', 'exhibitions-museums': 'תערוכות ומוזיאונים', 'gaming-esports': 'גיימינג וספורט אלקטרוני', 'special-events': 'אירועים מיוחדים'
      }
    },
    rentals: { pill: 'השכרות יוקרה', title: 'רכבים, יאכטות, וילות וחוויות פרטיות יוקרתיות', subtitle: 'שוק פשוט להשכרות יוקרה והזמנות עם שירות קונסיירז\' במיאמי ומעבר לה.', company: 'חברה', location: 'מיקום', daily: 'יומי', weekly: 'שבועי', reserve: 'הזמן' },
    yachts: { pill: 'השכרת יאכטות', title: 'שכירת יאכטות פרטיות וסירות יוקרה', subtitle: 'הזמינו יאכטות יוקרה עם צוות מלא למסיבות, שייט בשקיעה והרפתקאות ימיות.', company: 'חברה', location: 'מיקום', capacity: 'קיבולת', length: 'אורך', price: 'מחיר', guests: 'אורחים', reserve: 'הזמן' },
    vacationRentals: { pill: 'השכרות נופש', title: 'וילות יוקרה, פנטהאוזים ובתים על המים', subtitle: 'שהייה יוקרתית לטווח קצר בשכונות היוקרתיות ביותר במיאמי.', location: 'מיקום', guests: 'אורחים', bedrooms: 'חדרי שינה', nightlyRate: 'מחיר ללילה', reserve: 'הזמן' },
    experiences: { pill: 'חוויות מיאמי', title: 'פעילויות בלתי נשכחות וחוויות פרימיום', subtitle: 'מטיולי מסוק ועד מסיבות יאכטה, חוויות אצורות ברחבי מיאמי.', location: 'מיקום', duration: 'משך', price: 'מחיר', book: 'הזמן עכשיו' },
    restaurantsNightlife: { pill: 'מסעדות וחיי לילה', title: 'המסעדות, המועדונים והברים על הגג המובילים', subtitle: 'חדרי האוכל ומועדוני הלילה האייקוניים ביותר של מיאמי, במקום אחד.', restaurants: 'מסעדות', nightlife: 'חיי לילה', all: 'הכל', location: 'מיקום', rating: 'דירוג' },
    sportsbookPage: { pill: 'הימורי ספורט', title: 'מדריך פרימיום להימורי ספורט', subtitle: 'גלו את חברות ההימורים המובילות עם דפי פרופיל ייעודיים, זמינות לפי מדינה וקטעי קודי קופון עתידיים.', viewProfile: 'צפה בפרופיל' },
    auth: { pill: 'חשבון משתמש', title: 'ברוך שובך', subtitle: 'התחבר כדי לנהל את המבצעים, הקופונים וההזמנות השמורים שלך.', email: 'אימייל', password: 'סיסמה', confirmPassword: 'אימות סיסמה', name: 'שם מלא', continueLabel: 'המשך', signInTab: 'התחברות', signUpTab: 'הרשמה', signOut: 'התנתק', signedInAs: 'מחובר בתור', errorRequired: 'אנא מלא את כל השדות הנדרשים.', errorEmail: 'אנא הזן כתובת אימייל תקינה.', errorPasswordLength: 'הסיסמה חייבת להכיל לפחות 6 תווים.', errorPasswordMatch: 'הסיסמאות אינן תואמות.', errorInvalidCredentials: 'אימייל או סיסמה שגויים.', errorEmailInUse: 'כבר קיים חשבון עם כתובת אימייל זו.', successSignUp: 'החשבון נוצר בהצלחה. ברוך הבא!', successSignIn: 'ההתחברות בוצעה בהצלחה.', loading: 'אנא המתן...' }
  },
  zh: {
    nav: { home: '首页', stores: '商店', coupons: '优惠券', rentals: '租赁', sportsbook: '体育博彩', events: '活动', admin: '管理后台', search: '搜索优惠', travel: '旅行', villas: '别墅', yachts: '游艇', cars: '汽车', discoveryRoom: '发现室' },
    ai: {
      themeLight: '浅色', themeDark: '深色', switchToLight: '切换到浅色氛围', switchToDark: '切换到深色氛围',
      askAria: '向 Gorgona One AI 提问', micSpeak: '说出您的请求', micStop: '停止聆听', micUnsupported: '此浏览器不支持语音输入',
      listening: '正在聆听', surfacing: '正在呈现', openConcierge: '打开发现室礼宾服务', goBack: '返回',
      introText: '在 GORGONA ONE 生态系统中询问任何事情——旅行、餐饮、游艇、别墅、活动——获得优雅、个性化的推荐。',
      couldntReach: '现在无法联系礼宾 - 请重试。', tempUnavailable: '礼宾服务暂时不可用，请稍后重试。', open: '打开',
      listeningPlaceholder: '正在聆听…', askPlaceholder: '向礼宾提问任何事情…', startVoiceInput: '开始语音输入', stopVoiceInput: '停止语音输入',
      turnOnSpokenReplies: '开启语音回复', turnOffSpokenReplies: '关闭语音回复', askButton: '提问', conciergeVoice: '礼宾语音',
      genderFemale: '女声', genderMale: '男声', addToHomeScreenVoiceHint: '将 GORGONA ONE 添加到主屏幕以选择男声或女声礼宾',
      aiDockLabel: 'AI 面板', gorgonaConcierge: 'GORGONA ONE 礼宾', discoveryRoomLink: '发现室', closeAiDock: '关闭 AI 面板', aiDockAriaLabel: 'GORGONA ONE AI 面板',
      discoveryRoomTitle: '发现室', closeDiscoveryRoom: '关闭发现室', askFromAnywhere: '随时随地提问…', resultsTitle: '结果',
      savedTitle: '已保存', savedEmpty: '在此固定结果 — 浏览时会保留。',
      recentSearches: '最近搜索', clear: '清除', recentEmpty: '您的搜索会显示在这里，并在全站保留。',
      reuseSearch: '重复使用此搜索', removeSaved: '从已保存中移除', save: '保存', savedState: '已保存', returnToAI: '返回 Gorgona One AI',
      addToHomeScreen: '将 GORGONA ONE 添加到主屏幕', installHint: '安装应用以获得专注、独立的礼宾体验。',
      install: '安装', notNow: '暂不', iosShareHintPre: '点按', iosShareHintPost: '分享，然后', addToHomeScreenQuoted: '“添加到主屏幕”', gotIt: '知道了',
      discoveryEyebrow: '发现室 · AI 礼宾', discoveryHeroTitle: '尽管问。剩下的交给我们。',
      discoveryHeroSubtitle: '为整个 GORGONA ONE 生态系统提供的私人 AI 礼宾——旅行、餐饮、住宿、游艇、汽车、体育博彩和活动。输入或说出您的需求，它会指引您找到生态系统中正确的角落。',
      capabilitiesEyebrow: '能力', capabilitiesTitle: '一位助手，整个生态系统。',
      capTravelTitle: '旅行规划', capTravelCopy: '根据您的出行偏好定制的行程、航班和住宿。',
      capDiningTitle: '餐饮与夜生活', capDiningCopy: '根据当下场合匹配的餐桌、主厨吧台与夜间场所。',
      capShoppingTitle: '购物指导', capShoppingCopy: '时尚、科技和生活方式的个性化甄选。',
      capExperienceTitle: '体验策划', capExperienceCopy: '根据当下场合匹配的游艇、别墅、活动和夜生活。',
      geminiNotConnected: '发现室尚未连接到 Gemini - 请在环境中添加 GEMINI_API_KEY 以启用 AI 礼宾。与此同时，请通过上方导航探索旅行、餐厅、购物、别墅、游艇、租车、体育博彩和活动。',
      geminiSnag: '礼宾刚才连接 Gemini 时遇到问题，请稍后重试。',
      geminiRateLimited: '礼宾目前收到大量请求 - 请几秒后重试。',
      geminiInvalidKey: '礼宾的 Gemini 密钥似乎无效或未授权，请检查 GEMINI_API_KEY。',
      geminiNoReply: '没太听清 - 能否换个说法？',
      geminiTimeout: '礼宾响应时间比预期更长，请稍后重试。',
      geminiUnavailable: '礼宾服务暂时不可用，请稍后重试。',
      starterPrompts: ['规划迈阿密周末', '寻找可容纳8位客人的游艇', '预订生日晚宴的餐桌', '当前最佳体育博彩优惠'],
      examplePrompts: ['帮我在迈阿密找一辆兰博基尼', '显示5,000美元以下的游艇租赁', '今晚最佳体育博彩奖金', '迈阿密海滩的豪华酒店'],
      entityTypes: { Yacht: '游艇', Stay: '住宿', Experience: '体验', Nightlife: '夜生活', Restaurant: '餐厅', Car: '汽车', Event: '活动', Store: '商店', Category: '分类', World: '板块', Destination: '目的地' },
      constellations: {
        travel: { full: '旅行世界', short: '旅行' }, drive: { full: '座驾与游艇', short: '座驾与游艇' }, style: { full: '风尚购物', short: '风尚购物' },
        play: { full: '娱乐与获胜', short: '娱乐' }, taste: { full: '餐桌与风味', short: '餐桌与风味' }, concierge: { full: '礼宾', short: '礼宾' }
      },
      categories: {
        travel: '旅行', flights: '航班', hotels: '酒店', carRentals: '租车', cars: '汽车', yachts: '游艇', shopping: '购物', fashion: '时尚',
        beauty: '美妆', electronics: '电子产品', entertainment: '娱乐', events: '活动', sports: '运动', sportsbooks: '体育博彩',
        food: '美食', restaurants: '餐厅', concierge: '礼宾', promoCodes: '优惠码', deals: '优惠'
      },
      suggestionTopics: {
        travel: '旅行', diningNightlife: '餐饮与夜生活', shopping: '购物', villasStays: '别墅与住宿',
        yachtRentals: '游艇租赁', carRentals: '租车', sportsbooks: '体育博彩', eventsEntertainment: '活动与娱乐'
      }
    },
    categories: {
      shopping: '购物', fashion: '时尚', electronics: '电子产品', beauty: '美妆', home: '家居', travel: '旅行', sport: '运动', betting: '博彩',
      restaurants: '餐厅', food: '美食', entertainment: '娱乐', kosherRestaurants: '洁食餐厅', kosherStores: '洁食商店'
    },
    categoryDescriptions: { shopping: '日常必需品与优质零售优惠。', fashion: '时尚零售商的风格、服饰、鞋类折扣。', electronics: '设备、配件及游戏科技优惠。', beauty: '护肤、化妆品及养生优惠。', home: '家具、装饰及家居改善优惠。', travel: '酒店、机票、租车及度假优惠。', sport: '健身品牌、装备及运动服饰折扣。', betting: '博彩促销及相关优惠。', restaurants: '精致餐饮、主厨餐桌与夜间场所，甄选自全球顶级城市。', food: '送餐、杂货及订阅服务优惠。', entertainment: '流媒体、活动、影院及游戏优惠。', kosherRestaurants: '美国主要城市经认证的洁食餐饮、餐饮外送与配送服务。', kosherStores: '美国主要城市的洁食杂货店、肉铺与专卖市场。' },
    buttons: { viewDeals: '查看优惠', getDeal: '获取优惠', visitStore: '访问商店', copyCode: '复制代码', search: '搜索', popularSearches: '热门搜索' },
    search: { placeholder: '搜索优惠、商店、餐厅等', results: '搜索结果', noResults: '未找到与您的搜索匹配的结果。', popular: { carRentals: '租车', yachtRentals: '游艇租赁', sportsbookBonuses: '博彩奖金', vacationRentals: '度假租赁', miamiExperiences: '迈阿密体验', restaurantsNightlife: '餐厅与夜生活' } },
    home: { heroTitle: '全球优惠、促销代码与生活方式特惠', heroSubtitle: '发现购物、餐饮、娱乐、旅行、体育和博彩领域的已验证折扣。', featured: '精选优惠' },
    category: { dealsAndPromoCodes: '优惠与优惠码', noCodeNeeded: '无需代码', ends: '截止', storesDirectory: '商店目录', exploreStores: '探索高端商店和当前优惠', couponSystem: '优惠券系统', verifiedDeals: '购物、餐饮、旅行和娱乐领域的已验证优惠', dealDescriptionTemplate: '{name} 在{category}类别提供优质优惠，附带已验证的折扣和优化的联盟链接。', kosherDescriptionTemplate: '{name} 位于 {city}，{state} - 认证洁食，提供已验证的优惠和优化的联盟链接。', allCategories: '所有分类', dealDetail: '优惠详情', offerSummary: '优惠摘要', categoryLabel: '分类', discountLabel: '折扣', expirationLabel: '到期日', getThisDeal: '获取此优惠' },
    kosher: { rating: '评分', reviews: '条评论', viewOnMap: '在地图上查看', promoCode: '优惠码' },
    legal: {
      privacyTitle: '隐私政策与数据处理', privacyBody: 'GORGONA ONE 使用安全认证以及可用于分析、联盟追踪和变现的架构。',
      termsTitle: '使用条款与联盟披露', termsBody: '所有优惠和促销活动在使用前应直接向商家或博彩平台核实。',
      cookiesTitle: 'GORGONA ONE 如何使用 Cookie', cookiesBody: '我们使用 Cookie 记住语言偏好、保存会话信息、改进分析并支持联盟归因，同时保持体验快速且个性化。',
      disclosureTitle: '联盟佣金如何运作', disclosureBody: 'GORGONA ONE 可能在用户点击并完成合作伙伴链接中的合格操作时赚取佣金，这有助于维持平台并资助发现工具的开发。',
      agreementTitle: '商家与联盟合作条款', agreementBody: '获批合作伙伴同意提供准确的促销信息，遵守法律要求，并按照 GORGONA ONE 制定的联盟与合规规则使用平台。'
    },
    partnerForm: { title: '合作伙伴注册', companyName: '公司名称', website: '网站', contactEmail: '联系邮箱', category: '类别', submit: '申请成为合作伙伴' , successSubmit: '申请已成功提交。我们的团队将在2个工作日内与您联系。' },
    common: { viewDetails: '查看详情' },
    events: {
      marketplaceTitle: '门票与活动', marketplaceSubtitle: '来自可信赖供应商的体育门票和演唱会门票，一站式解决。',
      categories: '分类', sportsTickets: '体育门票', concertTickets: '演唱会门票',
      featuredEvents: '精选活动', trendingEvents: '热门活动', upcomingEvents: '即将举行的活动',
      featuredSportsEvents: '精选体育活动', featuredConcerts: '精选演唱会', comingSoon: '敬请期待。',
      priceRange: '价格区间', teams: '球队', previous: '上一页', next: '下一页', page: '第', of: '共',
      searchPlaceholder: '搜索活动、球队、艺人或场馆', allCategories: '所有分类', allProviders: '所有供应商',
      eventDetails: '活动详情', venue: '场馆', city: '城市', location: '地点', date: '日期', time: '时间',
      ticketProviders: '票务供应商', buyTickets: '购买门票',
      categoryLabels: {
        basketball: '篮球', baseball: '棒球', hockey: '冰球', soccer: '足球', tennis: '网球', formula1: '一级方程式', golf: '高尔夫', 'ufc-boxing': 'UFC / 拳击', 'theater-broadway': '剧院与百老汇', 'shows-entertainment': '演出与娱乐', festivals: '节日', 'music-events': '音乐活动', 'comedy-shows': '喜剧演出', 'family-events': '家庭活动', 'exhibitions-museums': '展览与博物馆', 'gaming-esports': '游戏与电竞', 'special-events': '特别活动'
      }
    },
    rentals: { pill: '豪华租赁', title: '高端汽车、游艇、别墅与私人体验', subtitle: '一个简单的高价值租赁与礼宾式预订平台，覆盖迈阿密及更多地区。', company: '公司', location: '地点', daily: '每日', weekly: '每周', reserve: '预订' },
    yachts: { pill: '游艇租赁', title: '私人游艇包船与豪华游艇', subtitle: '预订配备全套船员的高端游艇，尽享派对、日落巡游和海上探险。', company: '公司', location: '地点', capacity: '载客量', length: '船长', price: '价格', guests: '位客人', reserve: '预订' },
    vacationRentals: { pill: '度假租赁', title: '豪华别墅、顶层公寓与滨水住宅', subtitle: '迈阿密最尊贵街区的高端短租住宿。', location: '地点', guests: '客人', bedrooms: '卧室', nightlyRate: '每晚价格', reserve: '预订' },
    experiences: { pill: '迈阿密体验', title: '难忘的活动与高端体验', subtitle: '从直升机观光到游艇派对，精选迈阿密各类体验。', location: '地点', duration: '时长', price: '价格', book: '立即预订' },
    restaurantsNightlife: { pill: '餐厅与夜生活', title: '顶级餐厅、夜店与屋顶酒吧', subtitle: '迈阿密最具代表性的餐厅与夜生活场所，一网打尽。', restaurants: '餐厅', nightlife: '夜生活', all: '全部', location: '地点', rating: '评分' },
    sportsbookPage: { pill: '体育博彩', title: '高端博彩公司目录', subtitle: '探索主要博彩公司，提供专属资料页、各州可用性和未来的优惠码板块。', viewProfile: '查看资料' },
    auth: { pill: '用户账户', title: '欢迎回来', subtitle: '登录以管理您已保存的优惠、优惠券和预订。', email: '电子邮箱', password: '密码', confirmPassword: '确认密码', name: '姓名', continueLabel: '继续', signInTab: '登录', signUpTab: '注册', signOut: '退出登录', signedInAs: '当前登录账户：', errorRequired: '请填写所有必填字段。', errorEmail: '请输入有效的电子邮箱地址。', errorPasswordLength: '密码长度至少为6个字符。', errorPasswordMatch: '两次输入的密码不一致。', errorInvalidCredentials: '邮箱或密码不正确。', errorEmailInUse: '该邮箱已被注册。', successSignUp: '账户创建成功，欢迎！', successSignIn: '登录成功。', loading: '请稍候...' }
  },
  pt: {
    nav: { home: 'Início', stores: 'Lojas', coupons: 'Cupons', rentals: 'Aluguéis', sportsbook: 'Apostas esportivas', events: 'Eventos', admin: 'Administração', search: 'Buscar ofertas', travel: 'Viagens', villas: 'Vilas', yachts: 'Iates', cars: 'Carros', discoveryRoom: 'Sala de Descobertas' },
    ai: {
      themeLight: 'Claro', themeDark: 'Escuro', switchToLight: 'Mudar para atmosfera clara', switchToDark: 'Mudar para atmosfera escura',
      askAria: 'Perguntar ao Concierge Gorgona One', micSpeak: 'Fale seu pedido', micStop: 'Parar de ouvir', micUnsupported: 'Entrada de voz não é suportada neste navegador',
      listening: 'Ouvindo', surfacing: 'Buscando', openConcierge: 'Abrir o concierge da Sala de Descobertas', goBack: 'Voltar',
      introText: 'Peça qualquer coisa no ecossistema GORGONA ONE — viagens, restaurantes, iates, vilas, eventos — e receba recomendações elegantes e personalizadas.',
      couldntReach: 'Não consegui alcançar o concierge agora - tente novamente.', tempUnavailable: 'O concierge está temporariamente indisponível. Tente novamente em breve.', open: 'Abrir',
      listeningPlaceholder: 'Ouvindo…', askPlaceholder: 'Pergunte qualquer coisa ao concierge…', startVoiceInput: 'Iniciar entrada de voz', stopVoiceInput: 'Parar entrada de voz',
      turnOnSpokenReplies: 'Ativar respostas faladas', turnOffSpokenReplies: 'Desativar respostas faladas', askButton: 'Perguntar', conciergeVoice: 'Voz do concierge',
      genderFemale: 'Feminino', genderMale: 'Masculino', addToHomeScreenVoiceHint: 'Adicione GORGONA ONE à sua tela inicial para escolher uma voz de concierge masculina ou feminina',
      aiDockLabel: 'Painel de IA', gorgonaConcierge: 'Concierge GORGONA ONE', discoveryRoomLink: 'Sala de Descobertas', closeAiDock: 'Fechar Painel de IA', aiDockAriaLabel: 'Painel de IA GORGONA ONE',
      discoveryRoomTitle: 'Sala de Descobertas', closeDiscoveryRoom: 'Fechar Sala de Descobertas', askFromAnywhere: 'Pergunte de qualquer lugar…', resultsTitle: 'Resultados',
      savedTitle: 'Salvos', savedEmpty: 'Fixe resultados para mantê-los aqui — eles permanecem enquanto você navega.',
      recentSearches: 'Buscas recentes', clear: 'Limpar', recentEmpty: 'Suas buscas aparecem aqui e são mantidas no site.',
      reuseSearch: 'Reutilizar esta busca', removeSaved: 'Remover de salvos', save: 'Salvar', savedState: 'Salvo', returnToAI: 'Voltar ao Concierge Gorgona One',
      addToHomeScreen: 'Adicione GORGONA ONE à sua tela inicial', installHint: 'Instale o app para uma experiência de concierge focada e independente.',
      install: 'Instalar', notNow: 'Agora não', iosShareHintPre: 'Toque', iosShareHintPost: 'Compartilhar, depois', addToHomeScreenQuoted: '"Adicionar à Tela inicial"', gotIt: 'Entendi',
      discoveryEyebrow: 'A Sala de Descobertas · Concierge de IA', discoveryHeroTitle: 'Peça qualquer coisa. Vamos cuidar disso.',
      discoveryHeroSubtitle: 'Um concierge de IA pessoal para todo o ecossistema GORGONA ONE — viagens, restaurantes, hospedagem, iates, carros, casas de apostas e eventos. Digite ou fale, e ele o orientará para o lugar certo do ecossistema.',
      capabilitiesEyebrow: 'Capacidades', capabilitiesTitle: 'Um assistente, o ecossistema inteiro.',
      capTravelTitle: 'Planejamento de viagens', capTravelCopy: 'Roteiros, voos e hospedagem personalizados conforme você gosta de viajar.',
      capDiningTitle: 'Restaurantes e vida noturna', capDiningCopy: 'Mesas, balcões de chef e casas noturnas, combinados com o momento.',
      capShoppingTitle: 'Orientação de compras', capShoppingCopy: 'Recomendações pessoais em moda, tecnologia e estilo de vida.',
      capExperienceTitle: 'Curadoria de experiências', capExperienceCopy: 'Iates, vilas, eventos e vida noturna combinados com o momento.',
      geminiNotConnected: 'A Sala de Descobertas ainda não está conectada ao Gemini - adicione uma GEMINI_API_KEY ao ambiente para colocar o concierge de IA online. Enquanto isso, explore Viagens, Restaurantes, Compras, Vilas, Iates, Aluguel de Carros, Casas de Apostas e Eventos na navegação acima.',
      geminiSnag: 'O concierge teve um problema ao alcançar Gemini agora. Tente novamente em um momento.',
      geminiRateLimited: 'O concierge está recebendo muitos pedidos agora - tente novamente em alguns segundos.',
      geminiInvalidKey: 'A chave Gemini do concierge parece inválida ou não autorizada. Verifique GEMINI_API_KEY.',
      geminiNoReply: 'Não consegui entender bem - pode reformular?',
      geminiTimeout: 'O concierge está demorando mais que o esperado para responder. Tente novamente em um momento.',
      geminiUnavailable: 'O concierge está temporariamente indisponível. Tente novamente em breve.',
      starterPrompts: ['Planejar um fim de semana em Miami', 'Encontrar um iate para 8 convidados', 'Reservar uma mesa para um jantar de aniversário', 'Melhores ofertas de apostas esportivas agora'],
      examplePrompts: ['Encontre um Lamborghini em Miami', 'Mostrar aluguel de iates abaixo de $5.000', 'Melhores bônus de apostas esportivas hoje à noite', 'Hotéis de luxo em Miami Beach'],
      entityTypes: { Yacht: 'Iate', Stay: 'Hospedagem', Experience: 'Experiência', Nightlife: 'Vida Noturna', Restaurant: 'Restaurante', Car: 'Carro', Event: 'Evento', Store: 'Loja', Category: 'Categoria', World: 'Mundo', Destination: 'Destino' },
      constellations: {
        travel: { full: 'Mundo de Viagens', short: 'Viagens' }, drive: { full: 'Dirigir e Navegar', short: 'Dirigir e Navegar' }, style: { full: 'Estilo e Compras', short: 'Estilo e Compras' },
        play: { full: 'Jogar e Ganhar', short: 'Jogar e Ganhar' }, taste: { full: 'Mesa e Sabor', short: 'Mesa e Sabor' }, concierge: { full: 'Concierge', short: 'Concierge' }
      },
      categories: {
        travel: 'Viagens', flights: 'Voos', hotels: 'Hotéis', carRentals: 'Aluguel de Carros', cars: 'Carros', yachts: 'Iates', shopping: 'Compras', fashion: 'Moda',
        beauty: 'Beleza', electronics: 'Eletrônicos', entertainment: 'Entretenimento', events: 'Eventos', sports: 'Esportes', sportsbooks: 'Casas de Apostas',
        food: 'Comida', restaurants: 'Restaurantes', concierge: 'Concierge', promoCodes: 'Códigos Promocionais', deals: 'Ofertas'
      },
      suggestionTopics: {
        travel: 'Viagens', diningNightlife: 'Restaurantes e Vida Noturna', shopping: 'Compras', villasStays: 'Vilas e Hospedagem',
        yachtRentals: 'Aluguel de Iates', carRentals: 'Aluguel de Carros', sportsbooks: 'Casas de Apostas', eventsEntertainment: 'Eventos e Entretenimento'
      }
    },
    categories: {
      shopping: 'Compras', fashion: 'Moda', electronics: 'Eletrônicos', beauty: 'Beleza', home: 'Casa', travel: 'Viagens', sport: 'Esporte', betting: 'Apostas',
      restaurants: 'Restaurantes', food: 'Comida', entertainment: 'Entretenimento', kosherRestaurants: 'Restaurantes Kosher', kosherStores: 'Lojas Kosher'
    },
    categoryDescriptions: { shopping: 'Itens essenciais do dia a dia e economias premium no varejo.', fashion: 'Estilo, roupas, calçados e descontos de lojas de moda.', electronics: 'Dispositivos, acessórios e ofertas de tecnologia para jogos.', beauty: 'Cuidados com a pele, cosméticos e ofertas de bem-estar.', home: 'Móveis, decoração e economias para reforma da casa.', travel: 'Hotéis, voos, aluguel de carros e ofertas de férias.', sport: 'Marcas fitness, equipamentos e descontos em roupas esportivas.', betting: 'Promoções de casas de apostas e ofertas relacionadas.', restaurants: 'Alta gastronomia, mesas do chef e casas noturnas selecionadas nas melhores cidades do mundo.', food: 'Entrega de comida, mercado e economias em assinaturas.', entertainment: 'Streaming, eventos, cinemas e ofertas de jogos.', kosherRestaurants: 'Restaurantes kosher certificados, catering e entrega nas principais cidades dos EUA.', kosherStores: 'Mercearias, açougues e mercados kosher especializados nas principais cidades dos EUA.' },
    buttons: { viewDeals: 'Ver ofertas', getDeal: 'Obter oferta', visitStore: 'Visitar loja', copyCode: 'Copiar código', search: 'Buscar', popularSearches: 'Buscas populares' },
    search: { placeholder: 'Busque ofertas, lojas, restaurantes e mais', results: 'Resultados da busca', noResults: 'Nenhum resultado encontrado para sua busca.', popular: { carRentals: 'Aluguel de carros', yachtRentals: 'Aluguel de iates', sportsbookBonuses: 'Bônus de apostas esportivas', vacationRentals: 'Aluguéis de férias', miamiExperiences: 'Experiências em Miami', restaurantsNightlife: 'Restaurantes e vida noturna' } },
    home: { heroTitle: 'Ofertas globais, códigos promocionais e estilo de vida', heroSubtitle: 'Descubra descontos verificados em compras, restaurantes, entretenimento, viagens, esportes e apostas.', featured: 'Ofertas em destaque' },
    category: { dealsAndPromoCodes: 'ofertas e códigos promocionais', noCodeNeeded: 'Nenhum código necessário', ends: 'Termina em', storesDirectory: 'Diretório de lojas', exploreStores: 'Explore lojas premium e ofertas ativas', couponSystem: 'Sistema de cupons', verifiedDeals: 'Ofertas verificadas em compras, restaurantes, viagens e entretenimento', dealDescriptionTemplate: '{name} oferece economias premium em {category} com ofertas verificadas e links de afiliados otimizados.', kosherDescriptionTemplate: '{name} em {city}, {state} - certificado kosher, ofertas verificadas e links de afiliados otimizados.', allCategories: 'Todas as categorias', dealDetail: 'Detalhe da oferta', offerSummary: 'Resumo da oferta', categoryLabel: 'Categoria', discountLabel: 'Desconto', expirationLabel: 'Expiração', getThisDeal: 'Obter esta oferta' },
    kosher: { rating: 'Avaliação', reviews: 'avaliações', viewOnMap: 'Ver no mapa', promoCode: 'Código promocional' },
    legal: {
      privacyTitle: 'Política de privacidade e tratamento de dados', privacyBody: 'A GORGONA ONE utiliza autenticação segura e estruturas prontas para análise, rastreamento de afiliados e monetização.',
      termsTitle: 'Termos de uso e divulgações de afiliados', termsBody: 'Todas as ofertas e promoções devem ser verificadas diretamente com o comerciante ou casa de apostas antes do uso.',
      cookiesTitle: 'Como a GORGONA ONE usa cookies', cookiesBody: 'Usamos cookies para lembrar preferências de idioma, armazenar dados de sessão, melhorar a análise e apoiar a atribuição de afiliados, mantendo a experiência rápida e personalizada.',
      disclosureTitle: 'Como funcionam as comissões de afiliados', disclosureBody: 'A GORGONA ONE pode ganhar comissões quando os usuários clicam e concluem ações qualificadas por meio de links de parceiros. Isso ajuda a sustentar a plataforma e financiar as ferramentas de descoberta.',
      agreementTitle: 'Termos de parceria com comerciantes e afiliados', agreementBody: 'Parceiros aprovados concordam em fornecer detalhes precisos das promoções, cumprir exigências legais e usar a plataforma conforme as regras da GORGONA ONE.'
    },
    partnerForm: { title: 'Cadastro de parceiro', companyName: 'Nome da empresa', website: 'Site', contactEmail: 'E-mail de contato', category: 'Categoria', submit: 'Solicitar parceria' , successSubmit: 'Solicitação enviada com sucesso. Nossa equipe entrará em contato em até 2 dias úteis.' },
    common: { viewDetails: 'Ver detalhes' },
    events: {
      marketplaceTitle: 'Ingressos e Eventos', marketplaceSubtitle: 'Ingressos para esportes e shows de fornecedores confiáveis, tudo em um só lugar.',
      categories: 'Categorias', sportsTickets: 'Ingressos esportivos', concertTickets: 'Ingressos de shows',
      featuredEvents: 'Eventos em destaque', trendingEvents: 'Eventos em alta', upcomingEvents: 'Próximos eventos',
      featuredSportsEvents: 'Eventos esportivos em destaque', featuredConcerts: 'Shows em destaque', comingSoon: 'Em breve.',
      priceRange: 'Faixa de preço', teams: 'Times', previous: 'Anterior', next: 'Próximo', page: 'Página', of: 'de',
      searchPlaceholder: 'Busque eventos, times, artistas ou locais', allCategories: 'Todas as categorias', allProviders: 'Todos os fornecedores',
      eventDetails: 'Detalhes do evento', venue: 'Local', city: 'Cidade', location: 'Localização', date: 'Data', time: 'Horário',
      ticketProviders: 'Fornecedores de ingressos', buyTickets: 'Comprar ingressos',
      categoryLabels: {
        basketball: 'Basquete', baseball: 'Beisebol', hockey: 'Hóquei', soccer: 'Futebol', tennis: 'Tênis', formula1: 'Fórmula 1', golf: 'Golfe', 'ufc-boxing': 'UFC / Boxe', 'theater-broadway': 'Teatro e Broadway', 'shows-entertainment': 'Shows e entretenimento', festivals: 'Festivais', 'music-events': 'Eventos musicais', 'comedy-shows': 'Shows de comédia', 'family-events': 'Eventos familiares', 'exhibitions-museums': 'Exposições e museus', 'gaming-esports': 'Games e esports', 'special-events': 'Eventos especiais'
      }
    },
    rentals: { pill: 'Aluguéis de luxo', title: 'Carros, iates, vilas e experiências privadas premium', subtitle: 'Um mercado simples para aluguéis de alto valor e reservas com concierge em Miami e além.', company: 'Empresa', location: 'Localização', daily: 'Diário', weekly: 'Semanal', reserve: 'Reservar' },
    yachts: { pill: 'Aluguel de iates', title: 'Charters privados de iates e barcos de luxo', subtitle: 'Reserve iates premium com tripulação completa para festas, cruzeiros ao pôr do sol e aventuras no mar.', company: 'Empresa', location: 'Localização', capacity: 'Capacidade', length: 'Comprimento', price: 'Preço', guests: 'convidados', reserve: 'Reservar' },
    vacationRentals: { pill: 'Aluguéis de temporada', title: 'Vilas de luxo, coberturas e casas à beira-mar', subtitle: 'Estadias de curto prazo de alto padrão nos bairros mais exclusivos de Miami.', location: 'Localização', guests: 'Hóspedes', bedrooms: 'Quartos', nightlyRate: 'Diária', reserve: 'Reservar' },
    experiences: { pill: 'Experiências em Miami', title: 'Atividades inesquecíveis e experiências premium', subtitle: 'De passeios de helicóptero a festas em iates, experiências selecionadas por toda Miami.', location: 'Localização', duration: 'Duração', price: 'Preço', book: 'Reservar agora' },
    restaurantsNightlife: { pill: 'Restaurantes e vida noturna', title: 'Os melhores restaurantes, clubes e rooftops', subtitle: 'Os restaurantes e casas noturnas mais icônicos de Miami, tudo em um só lugar.', restaurants: 'Restaurantes', nightlife: 'Vida noturna', all: 'Todos', location: 'Localização', rating: 'Avaliação' },
    sportsbookPage: { pill: 'Apostas esportivas', title: 'Diretório premium de casas de apostas', subtitle: 'Explore as principais casas de apostas com páginas de perfil dedicadas, disponibilidade por estado e seções de códigos promocionais.', viewProfile: 'Ver perfil' },
    auth: { pill: 'Conta de usuário', title: 'Bem-vindo de volta', subtitle: 'Entre para gerenciar suas ofertas, cupons e reservas salvos.', email: 'E-mail', password: 'Senha', confirmPassword: 'Confirmar senha', name: 'Nome completo', continueLabel: 'Continuar', signInTab: 'Entrar', signUpTab: 'Cadastrar', signOut: 'Sair', signedInAs: 'Conectado como', errorRequired: 'Por favor, preencha todos os campos obrigatórios.', errorEmail: 'Por favor, insira um e-mail válido.', errorPasswordLength: 'A senha deve ter pelo menos 6 caracteres.', errorPasswordMatch: 'As senhas não coincidem.', errorInvalidCredentials: 'E-mail ou senha incorretos.', errorEmailInUse: 'Já existe uma conta com este e-mail.', successSignUp: 'Conta criada com sucesso. Bem-vindo!', successSignIn: 'Login realizado com sucesso.', loading: 'Aguarde...' }
  },
  uk: {
    nav: { home: 'Головна', stores: 'Магазини', coupons: 'Купони', rentals: 'Оренда', sportsbook: 'Спортивні ставки', events: 'Події', admin: 'Адмін', search: 'Пошук пропозицій', travel: 'Подорожі', villas: 'Вілли', yachts: 'Яхти', cars: 'Авто', discoveryRoom: 'Кімната відкриття' },
    ai: {
      themeLight: 'Світлий', themeDark: 'Темний', switchToLight: 'Перейти на світлу атмосферу', switchToDark: 'Перейти на темну атмосферу',
      askAria: 'Запитати Gorgona One AI', micSpeak: 'Скажіть свій запит', micStop: 'Зупинити слухання', micUnsupported: 'Голосовий введення не підтримується в цьому браузері',
      listening: 'Слухаю', surfacing: 'Пошук', openConcierge: 'Відкрити конк\'єржа кімнати відкриття', goBack: 'Назад',
      introText: 'Запитайте що-небудь у екосистемі GORGONA ONE — подорожі, ресторани, яхти, вілли, події — і отримайте елегантні персоналізовані рекомендації.',
      couldntReach: 'Не вдалося зв\'язатися з конк\'єржем зараз - спробуйте ще раз.', tempUnavailable: 'Конк\'єрж тимчасово недоступний. Спробуйте ще раз в найближчому часі.', open: 'Відкрити',
      listeningPlaceholder: 'Слухаю…', askPlaceholder: 'Запитайте конк\'єржа щось…', startVoiceInput: 'Почати голосовий введення', stopVoiceInput: 'Зупинити голосовий введення',
      turnOnSpokenReplies: 'Увімкнути голосові відповіді', turnOffSpokenReplies: 'Вимкнути голосові відповіді', askButton: 'Запитати', conciergeVoice: 'Голос конк\'єржа',
      genderFemale: 'Жіночий', genderMale: 'Чоловічий', addToHomeScreenVoiceHint: 'Додайте GORGONA ONE на домашній екран, щоб вибрати чоловічий або жіночий голос конк\'єржа',
      aiDockLabel: 'Панель ШІ', gorgonaConcierge: 'Конк\'єрж GORGONA ONE', discoveryRoomLink: 'Кімната відкриття', closeAiDock: 'Закрити панель ШІ', aiDockAriaLabel: 'Панель ШІ GORGONA ONE',
      discoveryRoomTitle: 'Кімната відкриття', closeDiscoveryRoom: 'Закрити кімнату відкриття', askFromAnywhere: 'Запитайте звідки завгодно…', resultsTitle: 'Результати',
      savedTitle: 'Збережено', savedEmpty: 'Закріпіть результати, щоб зберегти їх тут — вони залишаються під час перегляду.',
      recentSearches: 'Недавні пошуки', clear: 'Очистити', recentEmpty: 'Ваші пошуки з\'являються тут і зберігаються на сайті.',
      reuseSearch: 'Перевикористати цей пошук', removeSaved: 'Видалити зі збережених', save: 'Зберегти', savedState: 'Збережено', returnToAI: 'Повернутися до Gorgona One AI',
      addToHomeScreen: 'Додайте GORGONA ONE на домашній екран', installHint: 'Встановіть додаток для сфокусованого та автономного досвіду конк\'єржа.',
      install: 'Встановити', notNow: 'Не зараз', iosShareHintPre: 'Торкніться', iosShareHintPost: 'Поділіться, потім', addToHomeScreenQuoted: '"Додати на домашній екран"', gotIt: 'Зрозуміло',
      discoveryEyebrow: 'Кімната відкриття · Конк\'єрж ШІ', discoveryHeroTitle: 'Запитайте що-небудь. Ми позаймаємося цим.',
      discoveryHeroSubtitle: 'Персональний конк\'єрж ШІ для всієї екосистеми GORGONA ONE — подорожі, ресторани, житло, яхти, автомобілі, букмекерські контори та події. Введіть текст або скажіть, і він вас спрямує у потрібний куток екосистеми.',
      capabilitiesEyebrow: 'Можливості', capabilitiesTitle: 'Один помічник, вся екосистема.',
      capTravelTitle: 'Планування подорожей', capTravelCopy: 'Маршрути, рейси та житло, адаптовані до ваших переваг подорожей.',
      capDiningTitle: 'Ресторани та нічне життя', capDiningCopy: 'Столи, шефські стійки та нічні заклади, адаптовані до моменту.',
      capShoppingTitle: 'Рекомендації для покупок', capShoppingCopy: 'Персональні рекомендації з моди, технологій та стилю життя.',
      capExperienceTitle: 'Курування досвіду', capExperienceCopy: 'Яхти, вілли, події та нічне життя, адаптовані до моменту.',
      geminiNotConnected: 'Кімната відкриття ще не підключена до Gemini - додайте GEMINI_API_KEY до середовища, щоб вивести конк\'єржа ШІ в мережу. Тим часом дослідіть Подорожі, Ресторани, Покупки, Вілли, Яхти, Оренду автомобілів, Букмекерські контори та Події у навігації вище.',
      geminiSnag: 'Конк\'єрж мав проблему з досягненням Gemini зараз. Спробуйте ще раз за секунду.',
      geminiRateLimited: 'Конк\'єрж отримує багато запитів прямо зараз - спробуйте ще раз за кілька секунд.',
      geminiInvalidKey: 'Ключ Gemini конк\'єржа виглядає неправильним або неавторизованим. Перевірте GEMINI_API_KEY.',
      geminiNoReply: 'Не змогла зрозуміти - можете переформулювати?',
      geminiTimeout: 'Конк\'єрж довше, ніж очікується, реагує. Спробуйте ще раз за секунду.',
      geminiUnavailable: 'Конк\'єрж тимчасово недоступний. Спробуйте ще раз в найближчому часі.',
      starterPrompts: ['Спланувати вихідні в Маямі', 'Знайти яхту для 8 гостей', 'Забронювати стіл для обіду на день народження', 'Найкращі букмекерські пропозиції прямо зараз'],
      examplePrompts: ['Знайти Lamborghini в Маямі', 'Показати оренду яхт менше $5000', 'Найкращі букмекерські бонуси сьогодні ввечері', 'Розкішні готелі на Miami Beach'],
      entityTypes: { Yacht: 'Яхта', Stay: 'Житло', Experience: 'Досвід', Nightlife: 'Нічне життя', Restaurant: 'Ресторан', Car: 'Автомобіль', Event: 'Подія', Store: 'Магазин', Category: 'Категорія', World: 'Світ', Destination: 'Пункт призначення' },
      constellations: {
        travel: { full: 'Світ подорожей', short: 'Подорожі' }, drive: { full: 'Їзда та плавання', short: 'Їзда та плавання' }, style: { full: 'Стиль та покупки', short: 'Стиль та покупки' },
        play: { full: 'Грай та вигравай', short: 'Грай та вигравай' }, taste: { full: 'Стіл та смак', short: 'Стіл та смак' }, concierge: { full: 'Конк\'єрж', short: 'Конк\'єрж' }
      },
      categories: {
        travel: 'Подорожі', flights: 'Рейси', hotels: 'Готелі', carRentals: 'Оренда автомобілів', cars: 'Автомобілі', yachts: 'Яхти', shopping: 'Покупки', fashion: 'Мода',
        beauty: 'Краса', electronics: 'Електроніка', entertainment: 'Розвага', events: 'Події', sports: 'Спорт', sportsbooks: 'Букмекерські контори',
        food: 'Їжа', restaurants: 'Ресторани', concierge: 'Конк\'єрж', promoCodes: 'Промокоди', deals: 'Пропозиції'
      },
      suggestionTopics: {
        travel: 'Подорожі', diningNightlife: 'Ресторани та нічне життя', shopping: 'Покупки', villasStays: 'Вілли та житло',
        yachtRentals: 'Оренда яхт', carRentals: 'Оренда автомобілів', sportsbooks: 'Букмекерські контори', eventsEntertainment: 'Події та розвага'
      }
    },
    categories: {
      shopping: 'Шопінг', fashion: 'Мода', electronics: 'Електроніка', beauty: 'Краса', home: 'Дім', travel: 'Подорожі', sport: 'Спорт', betting: 'Ставки',
      restaurants: 'Ресторани', food: 'Їжа', entertainment: 'Розваги', kosherRestaurants: 'Кошерні ресторани', kosherStores: 'Кошерні магазини'
    },
    categoryDescriptions: { shopping: 'Повсякденні товари та вигідні знижки в роздрібній торгівлі.', fashion: 'Стиль, одяг, взуття та знижки від модних рітейлерів.', electronics: 'Пристрої, аксесуари та пропозиції ігрових технологій.', beauty: 'Догляд за шкірою, косметика та пропозиції для здоров\'я.', home: 'Меблі, декор та знижки на ремонт дому.', travel: 'Готелі, авіаквитки, оренда авто та пропозиції для відпустки.', sport: 'Спортивні бренди, інвентар та знижки на спортивний одяг.', betting: 'Промоакції букмекерів та пропозиції щодо ставок.', restaurants: 'Висока кухня, авторські вечері та нічні заклади, відібрані в найкращих містах світу.', food: 'Доставка їжі, продукти та знижки на підписки.', entertainment: 'Стрімінг, події, кіно та ігрові пропозиції.', kosherRestaurants: 'Сертифіковані кошерні ресторани, кейтеринг та доставка у великих містах США.', kosherStores: 'Кошерні продуктові магазини, м\'ясні лавки та спеціалізовані ринки у великих містах США.' },
    buttons: { viewDeals: 'Переглянути пропозиції', getDeal: 'Отримати знижку', visitStore: 'Перейти в магазин', copyCode: 'Копіювати код', search: 'Пошук', popularSearches: 'Популярні запити' },
    search: { placeholder: 'Знайдіть знижки, магазини, ресторани та інше', results: 'Результати пошуку', noResults: 'За вашим запитом нічого не знайдено.', popular: { carRentals: 'Оренда авто', yachtRentals: 'Оренда яхт', sportsbookBonuses: 'Бонуси букмекерів', vacationRentals: 'Оренда для відпустки', miamiExperiences: 'Враження в Маямі', restaurantsNightlife: 'Ресторани та нічне життя' } },
    home: { heroTitle: 'Глобальні знижки, промокоди та пропозиції для життя', heroSubtitle: 'Відкривайте перевірені знижки в шопінгу, ресторанах, розвагах, подорожах, спорті та ставках.', featured: 'Рекомендовані пропозиції' },
    category: { dealsAndPromoCodes: 'знижки та промокоди', noCodeNeeded: 'Код не потрібен', ends: 'Діє до', storesDirectory: 'Каталог магазинів', exploreStores: 'Досліджуйте преміальні магазини та активні пропозиції', couponSystem: 'Система купонів', verifiedDeals: 'Перевірені знижки в шопінгу, ресторанах, подорожах і розвагах', dealDescriptionTemplate: '{name} пропонує преміальні знижки в категорії «{category}» з перевіреними пропозиціями та оптимізованими партнерськими посиланнями.', kosherDescriptionTemplate: '{name} у {city}, {state} - сертифікований кошерний, перевірені пропозиції та оптимізовані партнерські посилання.', allCategories: 'Усі категорії', dealDetail: 'Деталі пропозиції', offerSummary: 'Підсумок пропозиції', categoryLabel: 'Категорія', discountLabel: 'Знижка', expirationLabel: 'Термін дії', getThisDeal: 'Отримати пропозицію' },
    kosher: { rating: 'Рейтинг', reviews: 'відгуків', viewOnMap: 'Переглянути на карті', promoCode: 'Промокод' },
    legal: {
      privacyTitle: 'Політика конфіденційності та обробка даних', privacyBody: 'GORGONA ONE використовує безпечну автентифікацію та структури, готові для аналітики, партнерського відстеження та монетизації.',
      termsTitle: 'Умови використання та партнерські розкриття', termsBody: 'Усі пропозиції та акції слід перевіряти безпосередньо у продавця або букмекера перед використанням.',
      cookiesTitle: 'Як GORGONA ONE використовує файли cookie', cookiesBody: 'Ми використовуємо cookie для запам’ятовування мовних налаштувань, зберігання даних сесії, покращення аналітики та підтримки партнерської атрибуції, зберігаючи швидкий і персоналізований досвід.',
      disclosureTitle: 'Як працюють партнерські комісії', disclosureBody: 'GORGONA ONE може отримувати комісію, коли користувачі переходять за партнерськими посиланнями та виконують цільові дії. Це допомагає підтримувати платформу та розвивати інструменти пошуку.',
      agreementTitle: 'Умови партнерства для продавців', agreementBody: 'Затверджені партнери погоджуються надавати точні дані про акції, дотримуватися законодавства та використовувати платформу згідно з правилами GORGONA ONE.'
    },
    partnerForm: { title: 'Реєстрація партнера', companyName: 'Назва компанії', website: 'Веб-сайт', contactEmail: 'Контактний email', category: 'Категорія', submit: 'Подати заявку' , successSubmit: 'Заявку успішно надіслано. Наша команда зв\'яжеться з вами протягом 2 робочих днів.' },
    common: { viewDetails: 'Детальніше' },
    events: {
      marketplaceTitle: 'Квитки та події', marketplaceSubtitle: 'Квитки на спорт і концерти від перевірених постачальників в одному місці.',
      categories: 'Категорії', sportsTickets: 'Спортивні квитки', concertTickets: 'Квитки на концерти',
      featuredEvents: 'Рекомендовані події', trendingEvents: 'Популярні події', upcomingEvents: 'Найближчі події',
      featuredSportsEvents: 'Рекомендовані спортивні події', featuredConcerts: 'Рекомендовані концерти', comingSoon: 'Незабаром.',
      priceRange: 'Діапазон цін', teams: 'Команди', previous: 'Назад', next: 'Далі', page: 'Сторінка', of: 'з',
      searchPlaceholder: 'Пошук подій, команд, артистів або майданчиків', allCategories: 'Усі категорії', allProviders: 'Усі постачальники',
      eventDetails: 'Деталі події', venue: 'Місце проведення', city: 'Місто', location: 'Розташування', date: 'Дата', time: 'Час',
      ticketProviders: 'Постачальники квитків', buyTickets: 'Купити квитки',
      categoryLabels: {
        basketball: 'Баскетбол', baseball: 'Бейсбол', hockey: 'Хокей', soccer: 'Футбол', tennis: 'Теніс', formula1: 'Формула 1', golf: 'Гольф', 'ufc-boxing': 'UFC / Бокс', 'theater-broadway': 'Театр і Бродвей', 'shows-entertainment': 'Шоу та розваги', festivals: 'Фестивалі', 'music-events': 'Музичні події', 'comedy-shows': 'Комедійні шоу', 'family-events': 'Сімейні події', 'exhibitions-museums': 'Виставки та музеї', 'gaming-esports': 'Гейминг та кіберспорт', 'special-events': 'Особливі події'
      }
    },
    rentals: { pill: 'Люкс-оренда', title: 'Преміальні автомобілі, яхти, вілли та приватні враження', subtitle: 'Проста платформа для оренди класу люкс і бронювань із консьєрж-сервісом у Маямі та поза ним.', company: 'Компанія', location: 'Локація', daily: 'За день', weekly: 'За тиждень', reserve: 'Забронювати' },
    yachts: { pill: 'Оренда яхт', title: 'Приватні яхти та розкішні катери', subtitle: 'Бронюйте преміальні яхти з повним екіпажем для вечірок, круїзів на заході сонця та морських пригод.', company: 'Компанія', location: 'Локація', capacity: 'Місткість', length: 'Довжина', price: 'Ціна', guests: 'гостей', reserve: 'Забронювати' },
    vacationRentals: { pill: 'Оренда житла для відпочинку', title: 'Розкішні вілли, пентхауси та будинки біля води', subtitle: 'Преміальне короткострокове проживання у найексклюзивніших районах Маямі.', location: 'Локація', guests: 'Гостей', bedrooms: 'Спалень', nightlyRate: 'Ціна за ніч', reserve: 'Забронювати' },
    experiences: { pill: 'Враження Маямі', title: 'Незабутні активності та преміальні враження', subtitle: 'Від вертолітних турів до яхт-вечірок — добірні враження по всьому Маямі.', location: 'Локація', duration: 'Тривалість', price: 'Ціна', book: 'Забронювати зараз' },
    restaurantsNightlife: { pill: 'Ресторани та нічне життя', title: 'Найкращі ресторани, клуби та дахові бари', subtitle: 'Найвідоміші ресторани та нічні заклади Маямі в одному місці.', restaurants: 'Ресторани', nightlife: 'Нічне життя', all: 'Усі', location: 'Локація', rating: 'Рейтинг' },
    sportsbookPage: { pill: 'Спортивні ставки', title: 'Преміальний каталог букмекерів', subtitle: 'Досліджуйте провідні букмекерські компанії зі сторінками профілів, доступністю за штатами та розділами промокодів.', viewProfile: 'Переглянути профіль' },
    auth: { pill: 'Обліковий запис', title: 'З поверненням', subtitle: 'Увійдіть, щоб керувати збереженими пропозиціями, купонами та бронюваннями.', email: 'Email', password: 'Пароль', confirmPassword: 'Підтвердіть пароль', name: 'Повне ім\'я', continueLabel: 'Продовжити', signInTab: 'Вхід', signUpTab: 'Реєстрація', signOut: 'Вийти', signedInAs: 'Ви увійшли як', errorRequired: 'Будь ласка, заповніть усі обов\'язкові поля.', errorEmail: 'Будь ласка, введіть дійсну електронну адресу.', errorPasswordLength: 'Пароль має містити щонайменше 6 символів.', errorPasswordMatch: 'Паролі не збігаються.', errorInvalidCredentials: 'Неправильний email або пароль.', errorEmailInUse: 'Обліковий запис із цією поштою вже існує.', successSignUp: 'Обліковий запис успішно створено. Ласкаво просимо!', successSignIn: 'Вхід виконано успішно.', loading: 'Будь ласка, зачекайте...' }
  },
  ja: {
    nav: { home: 'ホーム', stores: 'ストア', coupons: 'クーポン', rentals: 'レンタル', sportsbook: 'スポーツブック', events: 'イベント', admin: '管理者', search: 'お得情報を検索', travel: '旅行', villas: 'ヴィラ', yachts: 'ヨット', cars: '車', discoveryRoom: 'ディスカバリールーム' },
    ai: {
      themeLight: 'ライト', themeDark: 'ダーク', switchToLight: 'ライト雰囲気に切り替え', switchToDark: 'ダーク雰囲気に切り替え',
      askAria: 'Gorgona One AIに質問', micSpeak: 'あなたのリクエストを話してください', micStop: '聞くことをやめる', micUnsupported: 'このブラウザはボイス入力をサポートしていません',
      listening: 'リスニング中', surfacing: 'サーフェシング', openConcierge: 'ディスカバリールームのコンシェルジュを開く', goBack: '戻る',
      introText: 'GORGONA ONEのエコシステム全体で何でも質問してください。旅行、ダイニング、ヨット、ヴィラ、イベント。エレガントで個人的なおすすめ情報をお受け取りください。',
      couldntReach: 'コンシェルジュに接続できません。もう一度お試しください。', tempUnavailable: 'コンシェルジュは一時的に利用できません。もう少しお試しください。', open: '開く',
      listeningPlaceholder: 'リスニング中…', askPlaceholder: 'コンシェルジュに何でも聞いてください…', startVoiceInput: 'ボイス入力を開始', stopVoiceInput: 'ボイス入力を停止',
      turnOnSpokenReplies: '音声返答を有効にする', turnOffSpokenReplies: '音声返答を無効にする', askButton: '質問', conciergeVoice: 'コンシェルジュの声',
      genderFemale: '女性', genderMale: '男性', addToHomeScreenVoiceHint: 'GORGONA ONEをホーム画面に追加して、男性または女性のコンシェルジュの声を選択してください',
      aiDockLabel: 'AIドック', gorgonaConcierge: 'GORGONA ONEコンシェルジュ', discoveryRoomLink: 'ディスカバリールーム', closeAiDock: 'AIドックを閉じる', aiDockAriaLabel: 'GORGONA ONE AIドック',
      discoveryRoomTitle: 'ディスカバリールーム', closeDiscoveryRoom: 'ディスカバリールームを閉じる', askFromAnywhere: 'どこからでも質問してください…', resultsTitle: '結果',
      savedTitle: '保存済み', savedEmpty: '結果をピン留めして、ここに保持します。ブラウズ中も保持されます。',
      recentSearches: '最近の検索', clear: 'クリア', recentEmpty: 'あなたの検索がここに表示されます。そしてサイト全体で保持されます。',
      reuseSearch: 'この検索を再利用', removeSaved: '保存済みから削除', save: '保存', savedState: '保存済み', returnToAI: 'Gorgona One AIに戻る',
      addToHomeScreen: 'GORGONA ONEをホーム画面に追加', installHint: 'アプリをインストールして、集中したコンシェルジュ体験を得てください。',
      install: 'インストール', notNow: '今はしない', iosShareHintPre: 'タップ', iosShareHintPost: '共有して、その後', addToHomeScreenQuoted: '"ホーム画面に追加"', gotIt: '了解',
      discoveryEyebrow: 'ディスカバリールーム · AIコンシェルジュ', discoveryHeroTitle: 'お好きなことをお尋ねください。ここから対応いたします。',
      discoveryHeroSubtitle: 'GORGONA ONE全体のエコシステム全体の個人用AIコンシェルジュ - 旅行、ダイニング、ステイ、ヨット、車、スポーツブック、イベント。入力するか話すと、エコシステムの正しい場所に案内します。',
      capabilitiesEyebrow: '機能', capabilitiesTitle: '1つのアシスタント、全エコシステム。',
      capTravelTitle: '旅行計画', capTravelCopy: 'あなたの旅行スタイルに合わせてカスタマイズされた日程、フライト、滞在。',
      capDiningTitle: 'ダイニング&ナイトライフ', capDiningCopy: 'テーブル、シェフカウンター、ナイトスポット。そのときの気分に合わせて。',
      capShoppingTitle: 'ショッピング案内', capShoppingCopy: 'ファッション、テクノロジー、ライフスタイル全般のパーソナルピック。',
      capExperienceTitle: '体験キュレーション', capExperienceCopy: 'ヨット、ヴィラ、イベント、ナイトライフ。そのときの気分に合わせて。',
      geminiNotConnected: 'ディスカバリールームはまだGeminiに接続されていません。AI コンシェルジュをオンラインにするには、GEMINI_API_KEY を环境に追加してください。それまでの間、上記のナビゲーションから旅行、レストラン、ショッピング、ヴィラ、ヨット、レンタカー、スポーツブック、イベントをご覧ください。',
      geminiSnag: 'コンシェルジュが今、Geminiに到達する際に問題がありました。しばらくしてからもう一度お試しください。',
      geminiRateLimited: 'コンシェルジュは今、多くのリクエストを受けています。数秒後にもう一度お試しください。',
      geminiInvalidKey: 'コンシェルジュのGeminiキーは無効または権限がないように見えます。GEMINI_API_KEYを確認してください。',
      geminiNoReply: 'よくわかりませんでした。言い直してもらえますか？',
      geminiTimeout: 'コンシェルジュの応答が予想より長くかかっています。しばらくしてからもう一度お試しください。',
      geminiUnavailable: 'コンシェルジュは一時的に利用できません。もう少しお試しください。',
      starterPrompts: ['マイアミで週末を計画', '8人のゲスト向けのヨットを検索', '誕生日ディナーのテーブルを予約', '今すぐ最高のスポーツブックオファー'],
      examplePrompts: ['マイアミでランボルギーニを見つける', '$5,000未満のヨットレンタルを表示', '今夜の最高のスポーツブックボーナス', 'マイアミビーチの高級ホテル'],
      entityTypes: { Yacht: 'ヨット', Stay: 'ステイ', Experience: 'エクスペリエンス', Nightlife: 'ナイトライフ', Restaurant: 'レストラン', Car: '車', Event: 'イベント', Store: 'ストア', Category: 'カテゴリー', World: 'ワールド', Destination: '目的地' },
      constellations: {
        travel: { full: '旅行の世界', short: '旅行' }, drive: { full: 'ドライブ&セーリング', short: 'ドライブ&セーリング' }, style: { full: 'スタイル&ショッピング', short: 'スタイル&ショッピング' },
        play: { full: 'プレイ&ウィン', short: 'プレイ&ウィン' }, taste: { full: 'テーブル&テイスト', short: 'テーブル&テイスト' }, concierge: { full: 'コンシェルジュ', short: 'コンシェルジュ' }
      },
      categories: {
        travel: '旅行', flights: 'フライト', hotels: 'ホテル', carRentals: 'レンタカー', cars: '車', yachts: 'ヨット', shopping: 'ショッピング', fashion: 'ファッション',
        beauty: '美容', electronics: '電子機器', entertainment: 'エンターテイメント', events: 'イベント', sports: 'スポーツ', sportsbooks: 'スポーツブック',
        food: '食べ物', restaurants: 'レストラン', concierge: 'コンシェルジュ', promoCodes: 'プロモコード', deals: 'ディール'
      },
      suggestionTopics: {
        travel: '旅行', diningNightlife: 'ダイニング&ナイトライフ', shopping: 'ショッピング', villasStays: 'ヴィラ&ステイ',
        yachtRentals: 'ヨットレンタル', carRentals: 'レンタカー', sportsbooks: 'スポーツブック', eventsEntertainment: 'イベント&エンターテイメント'
      }
    },
    categories: {
      shopping: 'ショッピング', fashion: 'ファッション', electronics: '家電', beauty: '美容', home: 'ホーム', travel: '旅行', sport: 'スポーツ', betting: 'ベッティング',
      restaurants: 'レストラン', food: 'フード', entertainment: 'エンターテインメント', kosherRestaurants: 'コーシャレストラン', kosherStores: 'コーシャストア'
    },
    categoryDescriptions: { shopping: '日常必需品とプレミアム小売の節約。', fashion: 'ファッション小売店のスタイル、アパレル、フットウェアの割引。', electronics: 'デバイス、アクセサリー、ゲーミングテック特典。', beauty: 'スキンケア、コスメ、ウェルネスのお得情報。', home: '家具、インテリア、住宅改修の節約。', travel: 'ホテル、航空券、レンタカー、休暇特典。', sport: 'フィットネスブランド、用具、アスレチックウェアの割引。', betting: 'スポーツブックのプロモーションとベッティング関連の特典。', restaurants: '世界の一流都市から厳選した高級ダイニング、シェフズテーブル、夜の名店。', food: 'フードデリバリー、食料品、サブスクリプションの節約。', entertainment: 'ストリーミング、イベント、映画館、ゲームのお得情報。', kosherRestaurants: '米国主要都市の認証コーシャダイニング、ケータリング、デリバリー。', kosherStores: '米国主要都市のコーシャ食料品店、精肉店、専門市場。' },
    buttons: { viewDeals: 'お得情報を見る', getDeal: 'お得情報を取得', visitStore: 'ストアへ行く', copyCode: 'コードをコピー', search: '検索', popularSearches: '人気の検索' },
    search: { placeholder: 'お得情報、ストア、レストランなどを検索', results: '検索結果', noResults: '検索結果が見つかりませんでした。', popular: { carRentals: 'レンタカー', yachtRentals: 'ヨットレンタル', sportsbookBonuses: 'スポーツブックボーナス', vacationRentals: 'バケーションレンタル', miamiExperiences: 'マイアミ体験', restaurantsNightlife: 'レストラン＆ナイトライフ' } },
    home: { heroTitle: 'グローバルなお得情報、プロモコード、ライフスタイル特典', heroSubtitle: 'ショッピング、レストラン、エンターテインメント、旅行、スポーツ、ベッティングの確認済み割引を発見しましょう。', featured: '注目のお得情報' },
    category: { dealsAndPromoCodes: 'お得情報とプロモコード', noCodeNeeded: 'コード不要', ends: '終了', storesDirectory: 'ストアディレクトリ', exploreStores: 'プレミアムストアと現在のオファーを探索', couponSystem: 'クーポンシステム', verifiedDeals: 'ショッピング、レストラン、旅行、エンターテインメントの確認済み特典', dealDescriptionTemplate: '{name} は {category} 分野でプレミアムな割引を提供し、確認済みのお得な情報と最適化されたアフィリエイトリンクを備えています。', kosherDescriptionTemplate: '{name}（{city}、{state}）- 認証コーシャ、確認済みのお得な情報と最適化されたアフィリエイトリンク。', allCategories: 'すべてのカテゴリー', dealDetail: 'お得情報の詳細', offerSummary: 'オファー概要', categoryLabel: 'カテゴリー', discountLabel: '割引', expirationLabel: '有効期限', getThisDeal: 'このお得情報を取得' },
    kosher: { rating: '評価', reviews: '件のレビュー', viewOnMap: '地図で見る', promoCode: 'プロモコード' },
    legal: {
      privacyTitle: 'プライバシーポリシーとデータの取り扱い', privacyBody: 'GORGONA ONE は、安全な認証とアフィリエイト追跡、ユーザーエンゲージメント、収益化に対応した構造を使用しています。',
      termsTitle: '利用規約とアフィリエイト開示', termsBody: 'すべての特典やプロモーションは、使用前に販売元またはスポーツブックに直接ご確認ください。',
      cookiesTitle: 'GORGONA ONE のクッキーの使用方法', cookiesBody: '言語設定の記憶、セッション情報の保存、分析の改善、アフィリエイト属性のサポートのためにクッキーを使用し、高速でパーソナライズされた体験を提供します。',
      disclosureTitle: 'アフィリエイト報酬の仕組み', disclosureBody: 'GORGONA ONE は、ユーザーがパートナーリンクをクリックし対象のアクションを完了した場合に報酬を得ることがあります。これによりプラットフォームの維持と検索ツールの開発資金を賄っています。',
      agreementTitle: '販売者およびアフィリエイトパートナー契約条件', agreementBody: '承認されたパートナーは、正確なプロモーション情報の提供、法令遵守、GORGONA ONE の定めるルールに従ったプラットフォームの利用に同意するものとします。'
    },
    partnerForm: { title: 'パートナー登録', companyName: '会社名', website: 'ウェブサイト', contactEmail: '連絡先メール', category: 'カテゴリー', submit: 'パートナーとして申し込む' , successSubmit: '申し込みが正常に送信されました。2営業日以内に担当チームよりご連絡いたします。' },
    common: { viewDetails: '詳細を見る' },
    events: {
      marketplaceTitle: 'チケット＆イベント', marketplaceSubtitle: '信頼できるプロバイダーによるスポーツチケットとコンサートチケットを一箇所で。',
      categories: 'カテゴリー', sportsTickets: 'スポーツチケット', concertTickets: 'コンサートチケット',
      featuredEvents: '注目のイベント', trendingEvents: 'トレンドのイベント', upcomingEvents: '今後のイベント',
      featuredSportsEvents: '注目のスポーツイベント', featuredConcerts: '注目のコンサート', comingSoon: '近日公開。',
      priceRange: '価格帯', teams: 'チーム', previous: '前へ', next: '次へ', page: 'ページ', of: '/',
      searchPlaceholder: 'イベント、チーム、アーティスト、会場を検索', allCategories: 'すべてのカテゴリー', allProviders: 'すべてのプロバイダー',
      eventDetails: 'イベント詳細', venue: '会場', city: '都市', location: '場所', date: '日付', time: '時間',
      ticketProviders: 'チケットプロバイダー', buyTickets: 'チケットを購入',
      categoryLabels: {
        basketball: 'バスケットボール', baseball: '野球', hockey: 'ホッケー', soccer: 'サッカー', tennis: 'テニス', formula1: 'F1', golf: 'ゴルフ', 'ufc-boxing': 'UFC / ボクシング', 'theater-broadway': '演劇＆ブロードウェイ', 'shows-entertainment': 'ショー＆エンターテインメント', festivals: 'フェスティバル', 'music-events': '音楽イベント', 'comedy-shows': 'コメディショー', 'family-events': 'ファミリーイベント', 'exhibitions-museums': '展示会＆美術館', 'gaming-esports': 'ゲーミング＆eスポーツ', 'special-events': '特別イベント'
      }
    },
    rentals: { pill: '高級レンタル', title: 'プレミアムな車、ヨット、ヴィラ、プライベート体験', subtitle: 'マイアミをはじめとする高価値レンタルとコンシェルジュ予約のためのシンプルなマーケットプレイス。', company: '会社', location: '場所', daily: '1日あたり', weekly: '1週間あたり', reserve: '予約' },
    yachts: { pill: 'ヨットレンタル', title: 'プライベートヨットチャーターと高級ボート', subtitle: 'パーティー、サンセットクルーズ、沖合探検のためにフルクルー付きのプレミアムヨットを予約。', company: '会社', location: '場所', capacity: '定員', length: '全長', price: '価格', guests: '名', reserve: '予約' },
    vacationRentals: { pill: 'バケーションレンタル', title: '高級ヴィラ、ペントハウス、ウォーターフロントの家', subtitle: 'マイアミの最も高級な地域での高品質な短期滞在。', location: '場所', guests: 'ゲスト', bedrooms: '寝室', nightlyRate: '1泊料金', reserve: '予約' },
    experiences: { pill: 'マイアミ体験', title: '忘れられないアクティビティとプレミアム体験', subtitle: 'ヘリコプターツアーからヨットパーティーまで、マイアミ厳選の体験。', location: '場所', duration: '所要時間', price: '価格', book: '今すぐ予約' },
    restaurantsNightlife: { pill: 'レストラン＆ナイトライフ', title: '人気のレストラン、クラブ、ルーフトップラウンジ', subtitle: 'マイアミを代表するダイニングとナイトライフスポットを一か所に。', restaurants: 'レストラン', nightlife: 'ナイトライフ', all: 'すべて', location: '場所', rating: '評価' },
    sportsbookPage: { pill: 'スポーツベッティング', title: 'プレミアムスポーツブックディレクトリ', subtitle: '専用プロフィールページ、州別対応状況、今後のプロモコードセクションを備えた主要スポーツブック企業をご覧ください。', viewProfile: 'プロフィールを見る' },
    auth: { pill: 'ユーザーアカウント', title: 'おかえりなさい', subtitle: '保存したお得情報、クーポン、予約を管理するにはサインインしてください。', email: 'メールアドレス', password: 'パスワード', confirmPassword: 'パスワード（確認）', name: '氏名', continueLabel: '続ける', signInTab: 'サインイン', signUpTab: '新規登録', signOut: 'サインアウト', signedInAs: 'ログイン中：', errorRequired: 'すべての必須項目を入力してください。', errorEmail: '有効なメールアドレスを入力してください。', errorPasswordLength: 'パスワードは6文字以上である必要があります。', errorPasswordMatch: 'パスワードが一致しません。', errorInvalidCredentials: 'メールアドレスまたはパスワードが正しくありません。', errorEmailInUse: 'このメールアドレスは既に登録されています。', successSignUp: 'アカウントが正常に作成されました。ようこそ！', successSignIn: 'サインインしました。', loading: 'お待ちください...' }
  },
  ko: {
    nav: { home: '홈', stores: '스토어', coupons: '쿠폰', rentals: '렌탈', sportsbook: '스포츠 베팅', events: '이벤트', admin: '관리자', search: '혜택 검색', travel: '여행', villas: '빌라', yachts: '요트', cars: '자동차', discoveryRoom: '디스커버리 룸' },
    ai: {
      themeLight: '밝음', themeDark: '어두움', switchToLight: '밝은 분위기로 전환', switchToDark: '어두운 분위기로 전환',
      askAria: 'Gorgona One AI에 질문', micSpeak: '요청을 말해주세요', micStop: '듣기 중지', micUnsupported: '이 브라우저는 음성 입력을 지원하지 않습니다',
      listening: '듣는 중', surfacing: '표시 중', openConcierge: '디스커버리 룸 콘시에르주 열기', goBack: '뒤로',
      introText: 'GORGONA ONE 생태계 전체에서 무엇이든 물어보세요. 여행, 다이닝, 요트, 빌라, 이벤트. 우아하고 개인화된 추천을 받으세요.',
      couldntReach: '지금 콘시에르주에 연결할 수 없습니다. 다시 시도해주세요.', tempUnavailable: '콘시에르주가 일시적으로 사용할 수 없습니다. 잠시 후 다시 시도해주세요.', open: '열기',
      listeningPlaceholder: '듣는 중…', askPlaceholder: '콘시에르주에 무엇이든 질문해주세요…', startVoiceInput: '음성 입력 시작', stopVoiceInput: '음성 입력 중지',
      turnOnSpokenReplies: '음성 답변 켜기', turnOffSpokenReplies: '음성 답변 끄기', askButton: '질문', conciergeVoice: '콘시에르주 음성',
      genderFemale: '여성', genderMale: '남성', addToHomeScreenVoiceHint: 'GORGONA ONE을 홈 화면에 추가하여 남성 또는 여성 콘시에르주 음성을 선택하세요',
      aiDockLabel: 'AI 도크', gorgonaConcierge: 'GORGONA ONE 콘시에르주', discoveryRoomLink: '디스커버리 룸', closeAiDock: 'AI 도크 닫기', aiDockAriaLabel: 'GORGONA ONE AI 도크',
      discoveryRoomTitle: '디스커버리 룸', closeDiscoveryRoom: '디스커버리 룸 닫기', askFromAnywhere: '어디서나 질문하세요…', resultsTitle: '결과',
      savedTitle: '저장됨', savedEmpty: '결과를 고정하여 여기에 보관하세요. 브라우징하는 동안에도 유지됩니다.',
      recentSearches: '최근 검색', clear: '지우기', recentEmpty: '검색 내역이 여기에 표시되고 사이트 전체에서 유지됩니다.',
      reuseSearch: '이 검색 재사용', removeSaved: '저장된 항목에서 제거', save: '저장', savedState: '저장됨', returnToAI: 'Gorgona One AI로 돌아가기',
      addToHomeScreen: 'GORGONA ONE을 홈 화면에 추가', installHint: '앱을 설치하여 집중된 독립형 콘시에르주 경험을 누리세요.',
      install: '설치', notNow: '지금 아님', iosShareHintPre: '탭', iosShareHintPost: '공유한 다음', addToHomeScreenQuoted: '"홈 화면에 추가"', gotIt: '알겠습니다',
      discoveryEyebrow: '디스커버리 룸 · AI 콘시에르주', discoveryHeroTitle: '무엇이든 물어보세요. 우리가 처리해드리겠습니다.',
      discoveryHeroSubtitle: '전체 GORGONA ONE 생태계를 위한 개인화된 AI 콘시에르주. 여행, 다이닝, 숙박, 요트, 자동차, 스포츠 베팅 및 이벤트. 입력하거나 말하면 생태계의 올바른 영역으로 안내합니다.',
      capabilitiesEyebrow: '기능', capabilitiesTitle: '하나의 어시스턴트, 전체 생태계.',
      capTravelTitle: '여행 계획', capTravelCopy: '여행 스타일에 맞게 맞춤화된 일정, 항공편 및 숙박.',
      capDiningTitle: '다이닝 & 나이트라이프', capDiningCopy: '테이블, 셰프 카운터 및 야간 장소. 분위기에 맞게 선택.',
      capShoppingTitle: '쇼핑 가이드', capShoppingCopy: 'fashion, 기술 및 라이프스타일 전체의 개인 추천.',
      capExperienceTitle: '경험 큐레이션', capExperienceCopy: '요트, 빌라, 이벤트 및 나이트라이프. 분위기에 맞게 선택.',
      geminiNotConnected: '디스커버리 룸이 아직 Gemini에 연결되어 있지 않습니다. AI 콘시에르주를 온라인으로 가져오려면 GEMINI_API_KEY를 환경에 추가하세요. 그동안 위 네비게이션에서 여행, 레스토랑, 쇼핑, 빌라, 요트, 자동차 렌탈, 스포츠 베팅 및 이벤트를 살펴보세요.',
      geminiSnag: '콘시에르주가 지금 Gemini에 도달하는 데 문제가 있었습니다. 잠시 후 다시 시도해주세요.',
      geminiRateLimited: '콘시에르주가 지금 많은 요청을 받고 있습니다. 몇 초 후 다시 시도해주세요.',
      geminiInvalidKey: '콘시에르주 Gemini 키가 유효하지 않거나 권한이 없습니다. GEMINI_API_KEY를 확인하세요.',
      geminiNoReply: '잘 이해하지 못했습니다. 다시 말씀해주시겠어요?',
      geminiTimeout: '콘시에르주가 응답하는 데 예상보다 오래 걸리고 있습니다. 잠시 후 다시 시도해주세요.',
      geminiUnavailable: '콘시에르주가 일시적으로 사용할 수 없습니다. 잠시 후 다시 시도해주세요.',
      starterPrompts: ['마이애미에서 주말 계획', '8명의 게스트를 위한 요트 찾기', '생일 저녁 식사 테이블 예약', '지금 최고의 스포츠 베팅 오퍼'],
      examplePrompts: ['마이애미에서 람보르기니 찾기', '$5,000 미만의 요트 렌탈 표시', '오늘 밤 최고의 스포츠 베팅 보너스', '마이애미 비치의 럭셔리 호텔'],
      entityTypes: { Yacht: '요트', Stay: '숙박', Experience: '경험', Nightlife: '나이트라이프', Restaurant: '레스토랑', Car: '자동차', Event: '이벤트', Store: '스토어', Category: '카테고리', World: '월드', Destination: '목적지' },
      constellations: {
        travel: { full: '여행의 세계', short: '여행' }, drive: { full: '드라이브 & 항해', short: '드라이브 & 항해' }, style: { full: '스타일 & 쇼핑', short: '스타일 & 쇼핑' },
        play: { full: '플레이 & 윈', short: '플레이 & 윈' }, taste: { full: '테이블 & 테이스트', short: '테이블 & 테이스트' }, concierge: { full: '콘시에르주', short: '콘시에르주' }
      },
      categories: {
        travel: '여행', flights: '항공편', hotels: '호텔', carRentals: '자동차 렌탈', cars: '자동차', yachts: '요트', shopping: '쇼핑', fashion: '패션',
        beauty: '뷰티', electronics: '전자제품', entertainment: '엔터테인먼트', events: '이벤트', sports: '스포츠', sportsbooks: '스포츠 베팅',
        food: '음식', restaurants: '레스토랑', concierge: '콘시에르주', promoCodes: '프로모 코드', deals: '딜'
      },
      suggestionTopics: {
        travel: '여행', diningNightlife: '다이닝 & 나이트라이프', shopping: '쇼핑', villasStays: '빌라 & 숙박',
        yachtRentals: '요트 렌탈', carRentals: '자동차 렌탈', sportsbooks: '스포츠 베팅', eventsEntertainment: '이벤트 & 엔터테인먼트'
      }
    },
    categories: {
      shopping: '쇼핑', fashion: '패션', electronics: '전자제품', beauty: '뷰티', home: '홈', travel: '여행', sport: '스포츠', betting: '베팅',
      restaurants: '레스토랑', food: '푸드', entertainment: '엔터테인먼트', kosherRestaurants: '코셔 레스토랑', kosherStores: '코셔 스토어'
    },
    categoryDescriptions: { shopping: '일상 필수품과 프리미엄 소매 절약.', fashion: '패션 소매업체의 스타일, 의류, 신발 할인.', electronics: '기기, 액세서리 및 게이밍 기술 혜택.', beauty: '스킨케어, 화장품 및 웰니스 혜택.', home: '가구, 인테리어 및 홈 개선 절약.', travel: '호텔, 항공편, 렌터카 및 휴가 혜택.', sport: '피트니스 브랜드, 장비 및 운동복 할인.', betting: '스포츠북 프로모션 및 베팅 관련 혜택.', restaurants: '세계 최고의 도시에서 엄선한 파인다이닝, 셰프스 테이블, 심야 명소.', food: '음식 배달, 식료품 및 구독 절약.', entertainment: '스트리밍, 이벤트, 영화관 및 게임 혜택.', kosherRestaurants: '미국 주요 도시의 인증된 코셔 다이닝, 케이터링 및 배달.', kosherStores: '미국 주요 도시의 코셔 식료품점, 정육점 및 전문 시장.' },
    buttons: { viewDeals: '혜택 보기', getDeal: '혜택 받기', visitStore: '스토어 방문', copyCode: '코드 복사', search: '검색', popularSearches: '인기 검색어' },
    search: { placeholder: '혜택, 스토어, 레스토랑 등을 검색하세요', results: '검색 결과', noResults: '검색 결과가 없습니다.', popular: { carRentals: '자동차 렌탈', yachtRentals: '요트 렌탈', sportsbookBonuses: '스포츠북 보너스', vacationRentals: '휴가용 렌탈', miamiExperiences: '마이애미 체험', restaurantsNightlife: '레스토랑 & 나이트라이프' } },
    home: { heroTitle: '글로벌 혜택, 프로모 코드 및 라이프스타일 오퍼', heroSubtitle: '쇼핑, 레스토랑, 엔터테인먼트, 여행, 스포츠 및 베팅 분야의 검증된 할인을 만나보세요.', featured: '추천 혜택' },
    category: { dealsAndPromoCodes: '혜택 및 프로모 코드', noCodeNeeded: '코드 필요 없음', ends: '종료', storesDirectory: '스토어 디렉토리', exploreStores: '프리미엄 스토어와 진행 중인 혜택을 살펴보세요', couponSystem: '쿠폰 시스템', verifiedDeals: '쇼핑, 레스토랑, 여행, 엔터테인먼트 분야의 검증된 혜택', dealDescriptionTemplate: '{name}은(는) {category} 분야에서 검증된 혜택과 최적화된 제휴 링크로 프리미엄 절약을 제공합니다.', kosherDescriptionTemplate: '{name}({city}, {state}) - 코셔 인증, 검증된 혜택과 최적화된 제휴 링크.', allCategories: '모든 카테고리', dealDetail: '혜택 상세정보', offerSummary: '혜택 요약', categoryLabel: '카테고리', discountLabel: '할인', expirationLabel: '만료일', getThisDeal: '이 혜택 받기' },
    kosher: { rating: '평점', reviews: '개 리뷰', viewOnMap: '지도에서 보기', promoCode: '프로모 코드' },
    legal: {
      privacyTitle: '개인정보 보호정책 및 데이터 처리', privacyBody: 'GORGONA ONE은 안전한 인증과 제휴 추적, 사용자 참여, 수익화를 위한 분석 준비 구조를 사용합니다.',
      termsTitle: '이용 약관 및 제휴 공개', termsBody: '모든 혜택과 프로모션은 사용 전에 판매자 또는 스포츠북에 직접 확인해야 합니다.',
      cookiesTitle: 'GORGONA ONE의 쿠키 사용 방법', cookiesBody: '언어 설정 기억, 세션 정보 저장, 분석 개선 및 제휴 기여도 지원을 위해 쿠키를 사용하며, 빠르고 개인화된 경험을 유지합니다.',
      disclosureTitle: '제휴 수수료 작동 방식', disclosureBody: 'GORGONA ONE은 사용자가 파트너 링크를 클릭하고 자격 요건에 맞는 작업을 완료할 때 수수료를 받을 수 있습니다. 이는 플랫폼 유지와 검색 도구 개발 자금에 도움이 됩니다.',
      agreementTitle: '판매자 및 제휴 파트너십 약관', agreementBody: '승인된 파트너는 정확한 프로모션 정보를 제공하고, 법적 요건을 준수하며, GORGONA ONE이 정한 규칙에 따라 플랫폼을 사용하는 데 동의합니다.'
    },
    partnerForm: { title: '파트너 등록', companyName: '회사명', website: '웹사이트', contactEmail: '연락처 이메일', category: '카테고리', submit: '파트너 신청' , successSubmit: '신청이 성공적으로 제출되었습니다. 영업일 기준 2일 이내에 담당팀에서 연락드립니다.' },
    common: { viewDetails: '자세히 보기' },
    events: {
      marketplaceTitle: '티켓 & 이벤트', marketplaceSubtitle: '신뢰할 수 있는 제공업체의 스포츠 티켓과 콘서트 티켓을 한 곳에서 만나보세요.',
      categories: '카테고리', sportsTickets: '스포츠 티켓', concertTickets: '콘서트 티켓',
      featuredEvents: '추천 이벤트', trendingEvents: '인기 이벤트', upcomingEvents: '다가오는 이벤트',
      featuredSportsEvents: '추천 스포츠 이벤트', featuredConcerts: '추천 콘서트', comingSoon: '곧 공개됩니다.',
      priceRange: '가격대', teams: '팀', previous: '이전', next: '다음', page: '페이지', of: '/',
      searchPlaceholder: '이벤트, 팀, 아티스트 또는 장소 검색', allCategories: '모든 카테고리', allProviders: '모든 제공업체',
      eventDetails: '이벤트 상세정보', venue: '장소', city: '도시', location: '위치', date: '날짜', time: '시간',
      ticketProviders: '티켓 제공업체', buyTickets: '티켓 구매',
      categoryLabels: {
        basketball: '농구', baseball: '야구', hockey: '하키', soccer: '축구', tennis: '테니스', formula1: '포뮬러 1', golf: '골프', 'ufc-boxing': 'UFC / 복싱', 'theater-broadway': '연극 & 브로드웨이', 'shows-entertainment': '공연 & 엔터테인먼트', festivals: '페스티벌', 'music-events': '음악 이벤트', 'comedy-shows': '코미디 쇼', 'family-events': '가족 이벤트', 'exhibitions-museums': '전시 & 박물관', 'gaming-esports': '게이밍 & e스포츠', 'special-events': '특별 이벤트'
      }
    },
    rentals: { pill: '럭셔리 렌탈', title: '프리미엄 차량, 요트, 빌라, 프라이빗 체험', subtitle: '마이애미 및 그 외 지역에서 고가치 렌탈과 컨시어지 예약을 위한 간단한 마켓플레이스입니다.', company: '회사', location: '위치', daily: '일일', weekly: '주간', reserve: '예약' },
    yachts: { pill: '요트 렌탈', title: '프라이빗 요트 차터 및 럭셔리 보트', subtitle: '파티, 선셋 크루즈, 해상 어드벤처를 위한 풀 크루 포함 프리미엄 요트를 예약하세요.', company: '회사', location: '위치', capacity: '탑승 인원', length: '길이', price: '가격', guests: '명', reserve: '예약' },
    vacationRentals: { pill: '휴가용 렌탈', title: '럭셔리 빌라, 펜트하우스, 워터프론트 하우스', subtitle: '마이애미에서 가장 독점적인 지역의 고급 단기 숙박.', location: '위치', guests: '게스트', bedrooms: '침실', nightlyRate: '1박 요금', reserve: '예약' },
    experiences: { pill: '마이애미 체험', title: '잊을 수 없는 액티비티와 프리미엄 체험', subtitle: '헬리콥터 투어부터 요트 파티까지, 마이애미 전역의 엄선된 체험.', location: '위치', duration: '소요 시간', price: '가격', book: '지금 예약' },
    restaurantsNightlife: { pill: '레스토랑 & 나이트라이프', title: '최고의 레스토랑, 클럽, 루프탑 라운지', subtitle: '마이애미의 가장 상징적인 다이닝과 나이트라이프 명소를 한곳에서.', restaurants: '레스토랑', nightlife: '나이트라이프', all: '전체', location: '위치', rating: '평점' },
    sportsbookPage: { pill: '스포츠 베팅', title: '프리미엄 스포츠북 디렉토리', subtitle: '전용 프로필 페이지, 주별 이용 가능 여부, 향후 프로모 코드 섹션을 갖춘 주요 스포츠북 회사를 살펴보세요.', viewProfile: '프로필 보기' },
    auth: { pill: '사용자 계정', title: '다시 오신 것을 환영합니다', subtitle: '저장된 혜택, 쿠폰 및 예약을 관리하려면 로그인하세요.', email: '이메일', password: '비밀번호', confirmPassword: '비밀번호 확인', name: '이름', continueLabel: '계속', signInTab: '로그인', signUpTab: '회원가입', signOut: '로그아웃', signedInAs: '로그인 계정:', errorRequired: '모든 필수 항목을 입력해 주세요.', errorEmail: '유효한 이메일 주소를 입력해 주세요.', errorPasswordLength: '비밀번호는 6자 이상이어야 합니다.', errorPasswordMatch: '비밀번호가 일치하지 않습니다.', errorInvalidCredentials: '이메일 또는 비밀번호가 올바르지 않습니다.', errorEmailInUse: '이미 이 이메일로 등록된 계정이 있습니다.', successSignUp: '계정이 성공적으로 생성되었습니다. 환영합니다!', successSignIn: '로그인에 성공했습니다.', loading: '잠시만 기다려 주세요...' }
  },
  de: {
    nav: { home: 'Startseite', stores: 'Shops', coupons: 'Gutscheine', rentals: 'Vermietungen', sportsbook: 'Sportwetten', events: 'Events', admin: 'Verwaltung', search: 'Angebote suchen', travel: 'Reisen', villas: 'Villen', yachts: 'Yachten', cars: 'Autos', discoveryRoom: 'Entdeckungsraum' },
    ai: {
      themeLight: 'Hell', themeDark: 'Dunkel', switchToLight: 'Zu heller Atmosphäre wechseln', switchToDark: 'Zu dunkler Atmosphäre wechseln',
      askAria: 'Gorgona One AI fragen', micSpeak: 'Sprechen Sie Ihre Anfrage', micStop: 'Zuhören beenden', micUnsupported: 'Sprachein­gabe wird von diesem Browser nicht unterstützt',
      listening: 'Höre zu', surfacing: 'Oberflächlich', openConcierge: 'Öffnen Sie den Concierge des Entdeckungsraums', goBack: 'Zurück',
      introText: 'Fragen Sie nach etwas im gesamten GORGONA ONE-Ökosystem — Reisen, Restauration, Yachten, Villen, Veranstaltungen — und erhalten Sie elegante, persönliche Empfehlungen.',
      couldntReach: 'Ich konnte den Concierge gerade nicht erreichen - versuchen Sie es bitte erneut.', tempUnavailable: 'Der Concierge ist vorübergehend nicht verfügbar. Bitte versuchen Sie es in Kürze erneut.', open: 'Öffnen',
      listeningPlaceholder: 'Höre zu…', askPlaceholder: 'Fragen Sie den Concierge nach etwas…', startVoiceInput: 'Sprachein­gabe starten', stopVoiceInput: 'Sprachein­gabe beenden',
      turnOnSpokenReplies: 'Gesprochene Antworten aktivieren', turnOffSpokenReplies: 'Gesprochene Antworten deaktivieren', askButton: 'Fragen', conciergeVoice: 'Concierge-Stimme',
      genderFemale: 'Weiblich', genderMale: 'Männlich', addToHomeScreenVoiceHint: 'Fügen Sie GORGONA ONE zu Ihrem Startbildschirm hinzu, um eine männliche oder weibliche Concierge-Stimme auszuwählen',
      aiDockLabel: 'KI-Dock', gorgonaConcierge: 'GORGONA ONE Concierge', discoveryRoomLink: 'Entdeckungsraum', closeAiDock: 'KI-Dock schließen', aiDockAriaLabel: 'GORGONA ONE KI-Dock',
      discoveryRoomTitle: 'Entdeckungsraum', closeDiscoveryRoom: 'Entdeckungsraum schließen', askFromAnywhere: 'Fragen Sie von überall aus…', resultsTitle: 'Ergebnisse',
      savedTitle: 'Gespeichert', savedEmpty: 'Heften Sie Ergebnisse an, um sie hier zu behalten — sie bleiben beim Durchsuchen.',
      recentSearches: 'Aktuelle Suchen', clear: 'Löschen', recentEmpty: 'Ihre Suchen werden hier angezeigt und auf der gesamten Website beibehalten.',
      reuseSearch: 'Diese Suche wiederverwenden', removeSaved: 'Aus Gespeichert entfernen', save: 'Speichern', savedState: 'Gespeichert', returnToAI: 'Zurück zu Gorgona One AI',
      addToHomeScreen: 'Fügen Sie GORGONA ONE zu Ihrem Startbildschirm hinzu', installHint: 'Installieren Sie die App für ein fokussiertes, eigenständiges Concierge-Erlebnis.',
      install: 'Installieren', notNow: 'Nicht jetzt', iosShareHintPre: 'Tippen', iosShareHintPost: 'Teilen, dann', addToHomeScreenQuoted: '"Zum Startbildschirm hinzufügen"', gotIt: 'Verstanden',
      discoveryEyebrow: 'Der Entdeckungsraum · KI-Concierge', discoveryHeroTitle: 'Fragen Sie nach etwas. Wir kümmern uns darum.',
      discoveryHeroSubtitle: 'Ein persönlicher KI-Concierge für das gesamte GORGONA ONE-Ökosystem — Reisen, Restaurants, Aufenthalte, Yachten, Autos, Sportwetten und Veranstaltungen. Geben Sie ein oder sprechen Sie, und es weist Sie zum richtigen Teil des Ökosystems.',
      capabilitiesEyebrow: 'Funktionen', capabilitiesTitle: 'Ein Assistent, das gesamte Ökosystem.',
      capTravelTitle: 'Reiseplanung', capTravelCopy: 'Reiserouten, Flüge und Unterkunft, angepasst an Ihre Reiseart.',
      capDiningTitle: 'Restauration und Nachtleben', capDiningCopy: 'Tische, Chefkoch-Theken und Lokale, angepasst an den Moment.',
      capShoppingTitle: 'Einkaufsberatung', capShoppingCopy: 'Persönliche Empfehlungen in Mode, Technologie und Lebensstil.',
      capExperienceTitle: 'Erlebnis-Kuration', capExperienceCopy: 'Yachten, Villen, Veranstaltungen und Nachtleben, angepasst an den Moment.',
      geminiNotConnected: 'Der Entdeckungsraum ist noch nicht mit Gemini verbunden. Fügen Sie einen GEMINI_API_KEY zur Umgebung hinzu, um den KI-Concierge online zu bringen. Entdecken Sie in der Zwischenzeit Reisen, Restaurants, Shopping, Villen, Yachten, Mietwagen, Sportwetten und Veranstaltungen in der obigen Navigation.',
      geminiSnag: 'Der Concierge hatte gerade ein Problem beim Erreichen von Gemini. Bitte versuchen Sie es in einem Moment erneut.',
      geminiRateLimited: 'Der Concierge erhält gerade viele Anfragen — bitte versuchen Sie es in ein paar Sekunden erneut.',
      geminiInvalidKey: 'Der Gemini-Schlüssel des Concierge sieht ungültig oder nicht autorisiert aus. Bitte überprüfen Sie GEMINI_API_KEY.',
      geminiNoReply: 'Ich konnte das nicht ganz verstehen — könnten Sie es anders formulieren?',
      geminiTimeout: 'Der Concierge antwortet länger als erwartet. Bitte versuchen Sie es in einem Moment erneut.',
      geminiUnavailable: 'Der Concierge ist vorübergehend nicht verfügbar. Bitte versuchen Sie es in Kürze erneut.',
      starterPrompts: ['Ein Wochenende in Miami planen', 'Eine Yacht für 8 Gäste finden', 'Einen Tisch für ein Geburtstagsessen buchen', 'Die besten Sportwettenangebote gerade'],
      examplePrompts: ['Finde mir einen Lamborghini in Miami', 'Zeige Yachtenvermietungen unter $5.000', 'Beste Sportwetten-Boni heute Nacht', 'Luxushotels in Miami Beach'],
      entityTypes: { Yacht: 'Yacht', Stay: 'Aufenthalt', Experience: 'Erlebnis', Nightlife: 'Nachtleben', Restaurant: 'Restaurant', Car: 'Auto', Event: 'Veranstaltung', Store: 'Geschäft', Category: 'Kategorie', World: 'Welt', Destination: 'Reiseziel' },
      constellations: {
        travel: { full: 'Welt der Reisen', short: 'Reisen' }, drive: { full: 'Fahren & Segeln', short: 'Fahren & Segeln' }, style: { full: 'Stil & Shopping', short: 'Stil & Shopping' },
        play: { full: 'Spielen & Gewinnen', short: 'Spielen & Gewinnen' }, taste: { full: 'Tisch & Geschmack', short: 'Tisch & Geschmack' }, concierge: { full: 'Concierge', short: 'Concierge' }
      },
      categories: {
        travel: 'Reisen', flights: 'Flüge', hotels: 'Hotels', carRentals: 'Mietwagen', cars: 'Autos', yachts: 'Yachten', shopping: 'Shopping', fashion: 'Mode',
        beauty: 'Schönheit', electronics: 'Elektronik', entertainment: 'Unterhaltung', events: 'Veranstaltungen', sports: 'Sport', sportsbooks: 'Sportwetten',
        food: 'Essen', restaurants: 'Restaurants', concierge: 'Concierge', promoCodes: 'Aktionscodes', deals: 'Angebote'
      },
      suggestionTopics: {
        travel: 'Reisen', diningNightlife: 'Restauration & Nachtleben', shopping: 'Shopping', villasStays: 'Villen & Aufenthalte',
        yachtRentals: 'Yachtenvermietungen', carRentals: 'Mietwagen', sportsbooks: 'Sportwetten', eventsEntertainment: 'Veranstaltungen & Unterhaltung'
      }
    },
    categories: {
      shopping: 'Shopping', fashion: 'Mode', electronics: 'Elektronik', beauty: 'Beauty', home: 'Zuhause', travel: 'Reisen', sport: 'Sport', betting: 'Wetten',
      restaurants: 'Restaurants', food: 'Essen', entertainment: 'Unterhaltung', kosherRestaurants: 'Koschere Restaurants', kosherStores: 'Koschere Geschäfte'
    },
    categoryDescriptions: { shopping: 'Alltägliche Artikel und erstklassige Einzelhandelsersparnisse.', fashion: 'Stil, Kleidung, Schuhe und Rabatte von Modehändlern.', electronics: 'Geräte, Zubehör und Gaming-Tech-Angebote.', beauty: 'Hautpflege, Kosmetik und Wellness-Angebote.', home: 'Möbel, Deko und Einsparungen bei der Heimwerkerarbeit.', travel: 'Hotels, Flüge, Autovermietungen und Urlaubsangebote.', sport: 'Fitnessmarken, Ausrüstung und Rabatte auf Sportbekleidung.', betting: 'Sportwetten-Promotionen und wettbezogene Angebote.', restaurants: 'Fine Dining, Chef’s Tables und Nachtlokale, kuratiert in den besten Städten der Welt.', food: 'Essenslieferung, Lebensmittel und Abo-Ersparnisse.', entertainment: 'Streaming, Events, Kinos und Gaming-Angebote.', kosherRestaurants: 'Zertifizierte koschere Restaurants, Catering und Lieferung in den wichtigsten US-Städten.', kosherStores: 'Koschere Lebensmittelgeschäfte, Metzgereien und Fachmärkte in den wichtigsten US-Städten.' },
    buttons: { viewDeals: 'Angebote ansehen', getDeal: 'Angebot erhalten', visitStore: 'Shop besuchen', copyCode: 'Code kopieren', search: 'Suchen', popularSearches: 'Beliebte Suchanfragen' },
    search: { placeholder: 'Angebote, Shops, Restaurants und mehr suchen', results: 'Suchergebnisse', noResults: 'Keine Ergebnisse für Ihre Suche gefunden.', popular: { carRentals: 'Autovermietung', yachtRentals: 'Yachtvermietung', sportsbookBonuses: 'Sportwetten-Boni', vacationRentals: 'Ferienvermietungen', miamiExperiences: 'Miami-Erlebnisse', restaurantsNightlife: 'Restaurants & Nachtleben' } },
    home: { heroTitle: 'Globale Angebote, Gutscheincodes und Lifestyle-Deals', heroSubtitle: 'Entdecken Sie verifizierte Rabatte in den Bereichen Shopping, Restaurants, Unterhaltung, Reisen, Sport und Wetten.', featured: 'Empfohlene Angebote' },
    category: { dealsAndPromoCodes: 'Angebote und Gutscheincodes', noCodeNeeded: 'Kein Code erforderlich', ends: 'Endet am', storesDirectory: 'Shop-Verzeichnis', exploreStores: 'Entdecken Sie Premium-Shops und aktuelle Angebote', couponSystem: 'Gutscheinsystem', verifiedDeals: 'Verifizierte Angebote in Shopping, Gastronomie, Reisen und Unterhaltung', dealDescriptionTemplate: '{name} bietet erstklassige Einsparungen im Bereich {category} mit verifizierten Angeboten und optimierten Affiliate-Links.', kosherDescriptionTemplate: '{name} in {city}, {state} - koscher zertifiziert, verifizierte Angebote und optimierte Affiliate-Links.', allCategories: 'Alle Kategorien', dealDetail: 'Angebotsdetail', offerSummary: 'Angebotsübersicht', categoryLabel: 'Kategorie', discountLabel: 'Rabatt', expirationLabel: 'Ablauf', getThisDeal: 'Dieses Angebot erhalten' },
    kosher: { rating: 'Bewertung', reviews: 'Bewertungen', viewOnMap: 'Auf der Karte ansehen', promoCode: 'Gutscheincode' },
    legal: {
      privacyTitle: 'Datenschutzrichtlinie und Datenverarbeitung', privacyBody: 'GORGONA ONE verwendet sichere Authentifizierung sowie Strukturen für Analysen, Affiliate-Tracking und Monetarisierung.',
      termsTitle: 'Nutzungsbedingungen und Affiliate-Hinweise', termsBody: 'Alle Angebote und Aktionen sollten vor der Nutzung direkt beim jeweiligen Händler oder Wettanbieter geprüft werden.',
      cookiesTitle: 'Wie GORGONA ONE Cookies verwendet', cookiesBody: 'Wir verwenden Cookies, um Spracheinstellungen zu speichern, Sitzungsdaten zu verwalten, Analysen zu verbessern und die Affiliate-Zuordnung zu unterstützen, während das Erlebnis schnell und personalisiert bleibt.',
      disclosureTitle: 'Wie Affiliate-Provisionen funktionieren', disclosureBody: 'GORGONA ONE kann Provisionen verdienen, wenn Nutzer über Partnerlinks klicken und qualifizierte Aktionen abschließen. Dies hilft, die Plattform zu erhalten und Discovery-Tools zu finanzieren.',
      agreementTitle: 'Händler- und Affiliate-Partnerschaftsbedingungen', agreementBody: 'Genehmigte Partner verpflichten sich, korrekte Angaben zu Aktionen zu machen, gesetzliche Anforderungen einzuhalten und die Plattform gemäß den von GORGONA ONE festgelegten Regeln zu nutzen.'
    },
    partnerForm: { title: 'Partnerregistrierung', companyName: 'Firmenname', website: 'Webseite', contactEmail: 'Kontakt-E-Mail', category: 'Kategorie', submit: 'Als Partner bewerben' , successSubmit: 'Bewerbung erfolgreich eingereicht. Unser Team meldet sich innerhalb von 2 Werktagen bei Ihnen.' },
    common: { viewDetails: 'Details ansehen' },
    events: {
      marketplaceTitle: 'Tickets & Events', marketplaceSubtitle: 'Sport- und Konzerttickets von vertrauenswürdigen Anbietern, alles an einem Ort.',
      categories: 'Kategorien', sportsTickets: 'Sport-Tickets', concertTickets: 'Konzerttickets',
      featuredEvents: 'Empfohlene Events', trendingEvents: 'Angesagte Events', upcomingEvents: 'Bevorstehende Events',
      featuredSportsEvents: 'Empfohlene Sportevents', featuredConcerts: 'Empfohlene Konzerte', comingSoon: 'Demnächst verfügbar.',
      priceRange: 'Preisspanne', teams: 'Teams', previous: 'Zurück', next: 'Weiter', page: 'Seite', of: 'von',
      searchPlaceholder: 'Events, Teams, Künstler oder Veranstaltungsorte suchen', allCategories: 'Alle Kategorien', allProviders: 'Alle Anbieter',
      eventDetails: 'Veranstaltungsdetails', venue: 'Veranstaltungsort', city: 'Stadt', location: 'Standort', date: 'Datum', time: 'Uhrzeit',
      ticketProviders: 'Ticketanbieter', buyTickets: 'Tickets kaufen',
      categoryLabels: {
        basketball: 'Basketball', baseball: 'Baseball', hockey: 'Eishockey', soccer: 'Fußball', tennis: 'Tennis', formula1: 'Formel 1', golf: 'Golf', 'ufc-boxing': 'UFC / Boxen', 'theater-broadway': 'Theater & Broadway', 'shows-entertainment': 'Shows & Unterhaltung', festivals: 'Festivals', 'music-events': 'Musikveranstaltungen', 'comedy-shows': 'Comedy-Shows', 'family-events': 'Familienveranstaltungen', 'exhibitions-museums': 'Ausstellungen & Museen', 'gaming-esports': 'Gaming & E-Sport', 'special-events': 'Sonderveranstaltungen'
      }
    },
    rentals: { pill: 'Luxusvermietungen', title: 'Premium-Autos, Yachten, Villen und private Erlebnisse', subtitle: 'Ein einfacher Marktplatz für hochwertige Vermietungen und Concierge-Buchungen in Miami und darüber hinaus.', company: 'Unternehmen', location: 'Standort', daily: 'Täglich', weekly: 'Wöchentlich', reserve: 'Reservieren' },
    yachts: { pill: 'Yachtvermietung', title: 'Private Yachtcharter und Luxusboote', subtitle: 'Buchen Sie Premium-Yachten mit vollständiger Crew für Partys, Sonnenuntergangstouren und Abenteuer auf See.', company: 'Unternehmen', location: 'Standort', capacity: 'Kapazität', length: 'Länge', price: 'Preis', guests: 'Gäste', reserve: 'Reservieren' },
    vacationRentals: { pill: 'Ferienvermietungen', title: 'Luxusvillen, Penthouses und Häuser am Wasser', subtitle: 'Hochwertige Kurzzeitaufenthalte in den exklusivsten Vierteln Miamis.', location: 'Standort', guests: 'Gäste', bedrooms: 'Schlafzimmer', nightlyRate: 'Preis pro Nacht', reserve: 'Reservieren' },
    experiences: { pill: 'Miami-Erlebnisse', title: 'Unvergessliche Aktivitäten und Premium-Erlebnisse', subtitle: 'Von Helikoptertouren bis zu Yachtpartys – kuratierte Erlebnisse in ganz Miami.', location: 'Standort', duration: 'Dauer', price: 'Preis', book: 'Jetzt buchen' },
    restaurantsNightlife: { pill: 'Restaurants & Nachtleben', title: 'Top-Restaurants, Clubs und Rooftop-Lounges', subtitle: 'Miamis bekannteste Restaurants und Nachtlokale, alles an einem Ort.', restaurants: 'Restaurants', nightlife: 'Nachtleben', all: 'Alle', location: 'Standort', rating: 'Bewertung' },
    sportsbookPage: { pill: 'Sportwetten', title: 'Premium-Wettanbieter-Verzeichnis', subtitle: 'Entdecken Sie die wichtigsten Wettanbieter mit eigenen Profilseiten, Verfügbarkeit nach Bundesstaat und zukünftigen Gutscheincode-Bereichen.', viewProfile: 'Profil ansehen' },
    auth: { pill: 'Benutzerkonto', title: 'Willkommen zurück', subtitle: 'Melden Sie sich an, um Ihre gespeicherten Angebote, Gutscheine und Buchungen zu verwalten.', email: 'E-Mail', password: 'Passwort', confirmPassword: 'Passwort bestätigen', name: 'Vollständiger Name', continueLabel: 'Weiter', signInTab: 'Anmelden', signUpTab: 'Registrieren', signOut: 'Abmelden', signedInAs: 'Angemeldet als', errorRequired: 'Bitte füllen Sie alle Pflichtfelder aus.', errorEmail: 'Bitte geben Sie eine gültige E-Mail-Adresse ein.', errorPasswordLength: 'Das Passwort muss mindestens 6 Zeichen lang sein.', errorPasswordMatch: 'Die Passwörter stimmen nicht überein.', errorInvalidCredentials: 'Falsche E-Mail-Adresse oder falsches Passwort.', errorEmailInUse: 'Es existiert bereits ein Konto mit dieser E-Mail-Adresse.', successSignUp: 'Konto erfolgreich erstellt. Willkommen!', successSignIn: 'Erfolgreich angemeldet.', loading: 'Bitte warten...' }
  },
  ar: {
    nav: { home: 'الرئيسية', stores: 'المتاجر', coupons: 'القسائم', rentals: 'التأجير', sportsbook: 'الرهانات الرياضية', events: 'الفعاليات', admin: 'الإدارة', search: 'البحث عن العروض', travel: 'السفر', villas: 'الفيلات', yachts: 'اليخوت', cars: 'السيارات', discoveryRoom: 'غرفة الاكتشاف' },
    ai: {
      themeLight: 'فاتح', themeDark: 'غامق', switchToLight: 'التبديل إلى الأجواء الفاتحة', switchToDark: 'التبديل إلى الأجواء الغامقة',
      askAria: 'اسأل Gorgona One AI', micSpeak: 'تحدث طلبك', micStop: 'توقف عن الاستماع', micUnsupported: 'إدخال الصوت غير مدعوم في هذا المتصفح',
      listening: 'استماع', surfacing: 'عرض النتائج', openConcierge: 'فتح كونسيرج غرفة الاكتشاف', goBack: 'العودة',
      introText: 'اطلب أي شيء في نظام GORGONA ONE البيئي — السفر والطعام واليخوت والفيلات والفعاليات — واحصل على توصيات أنيقة وشخصية.',
      couldntReach: 'لم أتمكن من الوصول إلى الكونسيرج الآن - يرجى المحاولة مرة أخرى.', tempUnavailable: 'الكونسيرج غير متاح مؤقتًا. يرجى المحاولة مرة أخرى في وقت قريب.', open: 'فتح',
      listeningPlaceholder: 'استماع…', askPlaceholder: 'اسأل الكونسيرج عن أي شيء…', startVoiceInput: 'بدء إدخال الصوت', stopVoiceInput: 'إيقاف إدخال الصوت',
      turnOnSpokenReplies: 'تفعيل الردود المنطوقة', turnOffSpokenReplies: 'تعطيل الردود المنطوقة', askButton: 'اسأل', conciergeVoice: 'صوت الكونسيرج',
      genderFemale: 'أنثى', genderMale: 'ذكر', addToHomeScreenVoiceHint: 'أضف GORGONA ONE إلى شاشتك الرئيسية لاختيار صوت كونسيرج ذكر أو أنثى',
      aiDockLabel: 'لوحة الذكاء الاصطناعي', gorgonaConcierge: 'كونسيرج GORGONA ONE', discoveryRoomLink: 'غرفة الاكتشاف', closeAiDock: 'إغلاق لوحة الذكاء الاصطناعي', aiDockAriaLabel: 'لوحة ذكاء اصطناعي GORGONA ONE',
      discoveryRoomTitle: 'غرفة الاكتشاف', closeDiscoveryRoom: 'إغلاق غرفة الاكتشاف', askFromAnywhere: 'اسأل من أي مكان…', resultsTitle: 'النتائج',
      savedTitle: 'محفوظ', savedEmpty: 'ثبت النتائج للاحتفاظ بها هنا — تبقى أثناء التصفح.',
      recentSearches: 'عمليات البحث الأخيرة', clear: 'مسح', recentEmpty: 'تظهر عمليات البحث هنا وتبقى في جميع أنحاء الموقع.',
      reuseSearch: 'إعادة استخدام هذا البحث', removeSaved: 'إزالة من المحفوظة', save: 'حفظ', savedState: 'محفوظ', returnToAI: 'العودة إلى Gorgona One AI',
      addToHomeScreen: 'أضف GORGONA ONE إلى شاشتك الرئيسية', installHint: 'ثبت التطبيق للحصول على تجربة كونسيرج مركزة وقائمة بذاتها.',
      install: 'تثبيت', notNow: 'ليس الآن', iosShareHintPre: 'اضغط', iosShareHintPost: 'مشاركة، ثم', addToHomeScreenQuoted: '"إضافة إلى الشاشة الرئيسية"', gotIt: 'فهمت',
      discoveryEyebrow: 'غرفة الاكتشاف · كونسيرج الذكاء الاصطناعي', discoveryHeroTitle: 'اسأل عن أي شيء. سنتولى الأمر من هنا.',
      discoveryHeroSubtitle: 'كونسيرج ذكاء اصطناعي شخصي لنظام GORGONA ONE البيئي بأكمله — السفر والمطاعم والإقامة واليخوت والسيارات والرهانات الرياضية والفعاليات. اكتب أو تحدث، وسيوجهك إلى الجزء الصحيح من النظام البيئي.',
      capabilitiesEyebrow: 'القدرات', capabilitiesTitle: 'مساعد واحد، النظام البيئي بأكمله.',
      capTravelTitle: 'تخطيط السفر', capTravelCopy: 'البرامج الجولات والرحلات والإقامة المخصصة حسب أسلوب سفرك.',
      capDiningTitle: 'تناول الطعام والحياة الليلية', capDiningCopy: 'الطاولات وعدادات الشيف والأماكن الليلية، المطابقة للحظة الراهنة.',
      capShoppingTitle: 'إرشادات التسوق', capShoppingCopy: 'انتقاءات شخصية عبر الموضة والتكنولوجيا وأسلوب الحياة.',
      capExperienceTitle: 'تنسيق التجارب', capExperienceCopy: 'اليخوت والفيلات والفعاليات والحياة الليلية، المطابقة للحظة الراهنة.',
      geminiNotConnected: 'غرفة الاكتشاف غير متصلة بـ Gemini حتى الآن - أضف GEMINI_API_KEY إلى البيئة لإدخال كونسيرج الذكاء الاصطناعي عبر الإنترنت. في الوقت الحالي، استكشف السفر والمطاعم والتسوق والفيلات واليخوت وتأجير السيارات والرهانات الرياضية والفعاليات من التنقل أعلاه.',
      geminiSnag: 'واجه الكونسيرج مشكلة في الوصول إلى Gemini الآن. يرجى المحاولة مرة أخرى بعد قليل.',
      geminiRateLimited: 'يتلقى الكونسيرج الكثير من الطلبات الآن - يرجى المحاولة مرة أخرى في بضع ثوان.',
      geminiInvalidKey: 'يبدو أن مفتاح Gemini للكونسيرج غير صحيح أو غير مصرح به. يرجى التحقق من GEMINI_API_KEY.',
      geminiNoReply: 'لم أتمكن من فهم ذلك تماما - هل يمكنك إعادة الصيغة؟',
      geminiTimeout: 'يستغرق الكونسيرج وقتًا أطول من المتوقع للرد. يرجى المحاولة مرة أخرى بعد قليل.',
      geminiUnavailable: 'الكونسيرج غير متاح مؤقتًا. يرجى المحاولة مرة أخرى في وقت قريب.',
      starterPrompts: ['خطط لعطلة نهاية أسبوع في ميامي', 'ابحث عن يخت لـ 8 ضيوف', 'احجز طاولة لعشاء عيد ميلاد', 'أفضل عروض الرهانات الرياضية الآن'],
      examplePrompts: ['ابحث لي عن لامبورغيني في ميامي', 'إظهار تأجير اليخوت تحت $5,000', 'أفضل مكافآت الرهانات الرياضية الليلة', 'الفنادق الفاخرة في شاطئ ميامي'],
      entityTypes: { Yacht: 'يخت', Stay: 'إقامة', Experience: 'تجربة', Nightlife: 'الحياة الليلية', Restaurant: 'مطعم', Car: 'سيارة', Event: 'فعالية', Store: 'متجر', Category: 'فئة', World: 'عالم', Destination: 'وجهة' },
      constellations: {
        travel: { full: 'عالم السفر', short: 'السفر' }, drive: { full: 'القيادة والإبحار', short: 'القيادة والإبحار' }, style: { full: 'الأسلوب والتسوق', short: 'الأسلوب والتسوق' },
        play: { full: 'اللعب والفوز', short: 'اللعب والفوز' }, taste: { full: 'الطاولة والذوق', short: 'الطاولة والذوق' }, concierge: { full: 'كونسيرج', short: 'كونسيرج' }
      },
      categories: {
        travel: 'السفر', flights: 'الرحلات الجوية', hotels: 'الفنادق', carRentals: 'تأجير السيارات', cars: 'السيارات', yachts: 'اليخوت', shopping: 'التسوق', fashion: 'الموضة',
        beauty: 'الجمال', electronics: 'الإلكترونيات', entertainment: 'الترفيه', events: 'الفعاليات', sports: 'الرياضة', sportsbooks: 'الرهانات الرياضية',
        food: 'الطعام', restaurants: 'المطاعم', concierge: 'كونسيرج', promoCodes: 'رموز ترويجية', deals: 'عروض'
      },
      suggestionTopics: {
        travel: 'السفر', diningNightlife: 'تناول الطعام والحياة الليلية', shopping: 'التسوق', villasStays: 'الفيلات والإقامة',
        yachtRentals: 'تأجير اليخوت', carRentals: 'تأجير السيارات', sportsbooks: 'الرهانات الرياضية', eventsEntertainment: 'الفعاليات والترفيه'
      }
    },
    categories: {
      shopping: 'التسوق', fashion: 'الموضة', electronics: 'الإلكترونيات', beauty: 'الجمال', home: 'المنزل', travel: 'السفر', sport: 'الرياضة', betting: 'الرهان',
      restaurants: 'المطاعم', food: 'الطعام', entertainment: 'الترفيه', kosherRestaurants: 'مطاعم كوشر', kosherStores: 'متاجر كوشر'
    },
    categoryDescriptions: { shopping: 'احتياجات يومية ووفورات تجزئة مميزة.', fashion: 'أناقة وملابس وأحذية وخصومات من متاجر الأزياء.', electronics: 'أجهزة وإكسسوارات وعروض تقنيات الألعاب.', beauty: 'عناية بالبشرة ومستحضرات تجميل وعروض العافية.', home: 'أثاث وديكور ووفورات تحسين المنزل.', travel: 'فنادق ورحلات طيران وتأجير سيارات وعروض إجازات.', sport: 'ماركات لياقة ومعدات وخصومات على الملابس الرياضية.', betting: 'عروض ترويجية للرهان الرياضي وعروض متعلقة به.', restaurants: 'مطاعم فاخرة وموائد الطهاة وأماكن سهر مختارة في أرقى مدن العالم.', food: 'توصيل الطعام والبقالة ووفورات الاشتراكات.', entertainment: 'بث وفعاليات ودور سينما وعروض ألعاب.', kosherRestaurants: 'مطاعم كوشر معتمدة، وتموين، وتوصيل عبر المدن الأمريكية الكبرى.', kosherStores: 'بقالات ومحلات جزارة وأسواق كوشر متخصصة عبر المدن الأمريكية الكبرى.' },
    buttons: { viewDeals: 'عرض العروض', getDeal: 'احصل على العرض', visitStore: 'زيارة المتجر', copyCode: 'نسخ الكود', search: 'بحث', popularSearches: 'عمليات البحث الشائعة' },
    search: { placeholder: 'ابحث عن العروض والمتاجر والمطاعم والمزيد', results: 'نتائج البحث', noResults: 'لم يتم العثور على نتائج لبحثك.', popular: { carRentals: 'تأجير السيارات', yachtRentals: 'تأجير اليخوت', sportsbookBonuses: 'مكافآت الرهان الرياضي', vacationRentals: 'تأجير العطلات', miamiExperiences: 'تجارب ميامي', restaurantsNightlife: 'المطاعم والحياة الليلية' } },
    home: { heroTitle: 'عروض عالمية وأكواد خصم وعروض نمط الحياة', heroSubtitle: 'اكتشف خصومات موثوقة في التسوق والمطاعم والترفيه والسفر والرياضة والرهانات.', featured: 'العروض المميزة' },
    category: { dealsAndPromoCodes: 'عروض وأكواد خصم', noCodeNeeded: 'لا حاجة لكود', ends: 'ينتهي في', storesDirectory: 'دليل المتاجر', exploreStores: 'اكتشف متاجر مميزة وعروض نشطة', couponSystem: 'نظام القسائم', verifiedDeals: 'عروض موثوقة في التسوق والمطاعم والسفر والترفيه', dealDescriptionTemplate: 'تقدم {name} وفورات مميزة في فئة {category} مع عروض موثقة وروابط تابعة محسّنة.', kosherDescriptionTemplate: '{name} في {city}، {state} - معتمد كوشر، عروض موثقة وروابط تابعة محسّنة.', allCategories: 'جميع الفئات', dealDetail: 'تفاصيل العرض', offerSummary: 'ملخص العرض', categoryLabel: 'الفئة', discountLabel: 'الخصم', expirationLabel: 'تاريخ الانتهاء', getThisDeal: 'احصل على هذا العرض' },
    kosher: { rating: 'التقييم', reviews: 'تقييمات', viewOnMap: 'عرض على الخريطة', promoCode: 'كود الخصم' },
    legal: {
      privacyTitle: 'سياسة الخصوصية ومعالجة البيانات', privacyBody: 'تستخدم GORGONA ONE مصادقة آمنة وبنى جاهزة للتحليلات وتتبع الشركاء والتحقيق في الإيرادات.',
      termsTitle: 'شروط الاستخدام وإفصاحات الشراكة', termsBody: 'يجب التحقق من جميع العروض والتخفيضات مباشرة مع التاجر أو منصة الرهان قبل الاستخدام.',
      cookiesTitle: 'كيف تستخدم GORGONA ONE ملفات تعريف الارتباط', cookiesBody: 'نستخدم ملفات تعريف الارتباط لتذكر تفضيلات اللغة وحفظ بيانات الجلسة وتحسين التحليلات ودعم إسناد الشراكات، مع الحفاظ على تجربة سريعة وشخصية.',
      disclosureTitle: 'كيف تعمل عمولات الشراكة', disclosureBody: 'قد تحصل GORGONA ONE على عمولات عندما ينقر المستخدمون ويكملون إجراءات مؤهلة عبر روابط الشركاء، مما يساعد في دعم المنصة وتمويل أدوات الاكتشاف.',
      agreementTitle: 'شروط شراكة التجار والشركاء', agreementBody: 'يوافق الشركاء المعتمدون على تقديم تفاصيل دقيقة للعروض والالتزام بالمتطلبات القانونية واستخدام المنصة وفقًا لقواعد GORGONA ONE.'
    },
    partnerForm: { title: 'تسجيل الشريك', companyName: 'اسم الشركة', website: 'الموقع الإلكتروني', contactEmail: 'البريد الإلكتروني للتواصل', category: 'الفئة', submit: 'التقدم كشريك' , successSubmit: 'تم إرسال الطلب بنجاح. سيتواصل معك فريقنا خلال يومي عمل.' },
    common: { viewDetails: 'عرض التفاصيل' },
    events: {
      marketplaceTitle: 'التذاكر والفعاليات', marketplaceSubtitle: 'تذاكر رياضية وتذاكر حفلات من موردين موثوقين، كلها في مكان واحد.',
      categories: 'الفئات', sportsTickets: 'تذاكر رياضية', concertTickets: 'تذاكر حفلات',
      featuredEvents: 'فعاليات مميزة', trendingEvents: 'فعاليات رائجة', upcomingEvents: 'فعاليات قادمة',
      featuredSportsEvents: 'فعاليات رياضية مميزة', featuredConcerts: 'حفلات مميزة', comingSoon: 'قريبًا.',
      priceRange: 'نطاق السعر', teams: 'الفرق', previous: 'السابق', next: 'التالي', page: 'صفحة', of: 'من',
      searchPlaceholder: 'ابحث عن الفعاليات أو الفرق أو الفنانين أو الأماكن', allCategories: 'جميع الفئات', allProviders: 'جميع الموردين',
      eventDetails: 'تفاصيل الفعالية', venue: 'المكان', city: 'المدينة', location: 'الموقع', date: 'التاريخ', time: 'الوقت',
      ticketProviders: 'موردو التذاكر', buyTickets: 'شراء التذاكر',
      categoryLabels: {
        basketball: 'كرة السلة', baseball: 'البيسبول', hockey: 'الهوكي', soccer: 'كرة القدم', tennis: 'التنس', formula1: 'الفورمولا 1', golf: 'الغولف', 'ufc-boxing': 'UFC / الملاكمة', 'theater-broadway': 'المسرح وبرودواي', 'shows-entertainment': 'عروض وترفيه', festivals: 'المهرجانات', 'music-events': 'فعاليات موسيقية', 'comedy-shows': 'عروض كوميدية', 'family-events': 'فعاليات عائلية', 'exhibitions-museums': 'معارض ومتاحف', 'gaming-esports': 'الألعاب والرياضات الإلكترونية', 'special-events': 'فعاليات خاصة'
      }
    },
    rentals: { pill: 'تأجير فاخر', title: 'سيارات ويخوت وفلل وتجارب خاصة متميزة', subtitle: 'سوق بسيط للتأجير عالي القيمة والحجوزات بخدمة الكونسيرج في ميامي وخارجها.', company: 'الشركة', location: 'الموقع', daily: 'يوميًا', weekly: 'أسبوعيًا', reserve: 'احجز' },
    yachts: { pill: 'تأجير اليخوت', title: 'استئجار يخوت خاصة وقوارب فاخرة', subtitle: 'احجز يخوتًا فاخرة مع طاقم كامل للحفلات ورحلات الغروب ومغامرات البحر.', company: 'الشركة', location: 'الموقع', capacity: 'السعة', length: 'الطول', price: 'السعر', guests: 'ضيوف', reserve: 'احجز' },
    vacationRentals: { pill: 'إيجارات العطلات', title: 'فيلل فاخرة وشقق بنتهاوس ومنازل على الواجهة المائية', subtitle: 'إقامات قصيرة الأجل راقية في أكثر أحياء ميامي حصرية.', location: 'الموقع', guests: 'الضيوف', bedrooms: 'غرف النوم', nightlyRate: 'السعر لليلة', reserve: 'احجز' },
    experiences: { pill: 'تجارب ميامي', title: 'أنشطة لا تُنسى وتجارب متميزة', subtitle: 'من جولات الهليكوبتر إلى حفلات اليخوت، تجارب مختارة في جميع أنحاء ميامي.', location: 'الموقع', duration: 'المدة', price: 'السعر', book: 'احجز الآن' },
    restaurantsNightlife: { pill: 'المطاعم والحياة الليلية', title: 'أفضل المطاعم والنوادي وصالات السطح', subtitle: 'أشهر المطاعم وأماكن الحياة الليلية في ميامي، كلها في مكان واحد.', restaurants: 'المطاعم', nightlife: 'الحياة الليلية', all: 'الكل', location: 'الموقع', rating: 'التقييم' },
    sportsbookPage: { pill: 'الرهانات الرياضية', title: 'دليل شركات الرهان المتميزة', subtitle: 'استكشف شركات الرهان الرياضي الكبرى مع صفحات ملفات تعريف مخصصة، وتوفر حسب الولاية، وأقسام أكواد خصم مستقبلية.', viewProfile: 'عرض الملف الشخصي' },
    auth: { pill: 'حساب المستخدم', title: 'مرحبًا بعودتك', subtitle: 'سجّل الدخول لإدارة عروضك وكوبوناتك وحجوزاتك المحفوظة.', email: 'البريد الإلكتروني', password: 'كلمة المرور', confirmPassword: 'تأكيد كلمة المرور', name: 'الاسم الكامل', continueLabel: 'متابعة', signInTab: 'تسجيل الدخول', signUpTab: 'إنشاء حساب', signOut: 'تسجيل الخروج', signedInAs: 'تم تسجيل الدخول باسم', errorRequired: 'يرجى تعبئة جميع الحقول المطلوبة.', errorEmail: 'يرجى إدخال بريد إلكتروني صالح.', errorPasswordLength: 'يجب أن تتكون كلمة المرور من 6 أحرف على الأقل.', errorPasswordMatch: 'كلمتا المرور غير متطابقتين.', errorInvalidCredentials: 'البريد الإلكتروني أو كلمة المرور غير صحيحة.', errorEmailInUse: 'يوجد حساب بالفعل بهذا البريد الإلكتروني.', successSignUp: 'تم إنشاء الحساب بنجاح. مرحبًا بك!', successSignIn: 'تم تسجيل الدخول بنجاح.', loading: 'يرجى الانتظار...' }
  },
  tr: {
    nav: { home: 'Ana Sayfa', stores: 'Mağazalar', coupons: 'Kuponlar', rentals: 'Kiralama', sportsbook: 'Spor Bahisleri', events: 'Etkinlikler', admin: 'Yönetim', search: 'Fırsat ara', travel: 'Seyahat', villas: 'Villalar', yachts: 'Yatlar', cars: 'Arabalar', discoveryRoom: 'Keşif Odası' },
    ai: {
      themeLight: 'Açık', themeDark: 'Koyu', switchToLight: 'Açık atmosfere geç', switchToDark: 'Koyu atmosfere geç',
      askAria: 'Gorgona One AI\'ye sor', micSpeak: 'İsteğinizi söyleyin', micStop: 'Dinlemeyi durdur', micUnsupported: 'Ses girişi bu tarayıcıda desteklenmez',
      listening: 'Dinleniyor', surfacing: 'Yüzey oluşturuluyor', openConcierge: 'Keşif Odası concierge\'ini aç', goBack: 'Geri dön',
      introText: 'GORGONA ONE ekosistemi genelinde her şeyi sorun — seyahat, yemek, yatlar, villalar, etkinlikler — ve zarif, kişisel öneriler alın.',
      couldntReach: 'Şu anda concierge\'e ulaşamadım - lütfen tekrar deneyin.', tempUnavailable: 'Concierge geçici olarak kullanılamaz. Lütfen kısa süre sonra yeniden deneyin.', open: 'Aç',
      listeningPlaceholder: 'Dinleniyor…', askPlaceholder: 'Concierge\'e her şey sorun…', startVoiceInput: 'Ses girişini başlat', stopVoiceInput: 'Ses girişini durdur',
      turnOnSpokenReplies: 'Konuşulan yanıtları aç', turnOffSpokenReplies: 'Konuşulan yanıtları kapat', askButton: 'Sor', conciergeVoice: 'Concierge sesi',
      genderFemale: 'Kadın', genderMale: 'Erkek', addToHomeScreenVoiceHint: 'Erkek veya kadın concierge sesi seçmek için GORGONA ONE\'ı ana ekranınıza ekleyin',
      aiDockLabel: 'Yapay Zeka Çerçevesi', gorgonaConcierge: 'GORGONA ONE Concierge', discoveryRoomLink: 'Keşif Odası', closeAiDock: 'Yapay Zeka Çerçevesini kapat', aiDockAriaLabel: 'GORGONA ONE Yapay Zeka Çerçevesi',
      discoveryRoomTitle: 'Keşif Odası', closeDiscoveryRoom: 'Keşif Odasını kapat', askFromAnywhere: 'Her yerden sorun…', resultsTitle: 'Sonuçlar',
      savedTitle: 'Kaydedildi', savedEmpty: 'Sonuçları buraya sabitleyerek tutun — tarama sırasında kalırlar.',
      recentSearches: 'Son aramalar', clear: 'Temizle', recentEmpty: 'Aramalarınız burada görünür ve site genelinde tutulur.',
      reuseSearch: 'Bu aramayı yeniden kullan', removeSaved: 'Kaydedilmişlerde kaldır', save: 'Kaydet', savedState: 'Kaydedildi', returnToAI: 'Gorgona One AI\'ye dön',
      addToHomeScreen: 'GORGONA ONE\'ı ana ekranınıza ekleyin', installHint: 'Odaklanmış, bağımsız bir concierge deneyimi için uygulamayı yükleyin.',
      install: 'Yükle', notNow: 'Şimdi değil', iosShareHintPre: 'Dokunun', iosShareHintPost: 'Paylaş, sonra', addToHomeScreenQuoted: '"Ana Ekrana Ekle"', gotIt: 'Anladım',
      discoveryEyebrow: 'Keşif Odası · Yapay Zeka Concierge', discoveryHeroTitle: 'Her şey için sor. Buradan itibaren biz hallederiz.',
      discoveryHeroSubtitle: 'Tüm GORGONA ONE ekosistemi için kişisel bir yapay zeka concierge\'i — seyahat, restoranlar, konaklama, yatlar, arabalar, bahis bölümleri ve etkinlikler. Yazın veya konuşun, ve sizi ekosisteminin doğru köşesine yönlendirelim.',
      capabilitiesEyebrow: 'Özellikler', capabilitiesTitle: 'Bir asistan, tüm ekosistem.',
      capTravelTitle: 'Seyahat planlaması', capTravelCopy: 'Seyahat etme şeklinize göre uyarlanmış yolculuk planları, uçuşlar ve konaklama.',
      capDiningTitle: 'Yemek ve gece hayatı', capDiningCopy: 'Masalar, şef bankoları ve gece mekanları, ana tema uyarında.',
      capShoppingTitle: 'Alışveriş rehberi', capShoppingCopy: 'Moda, teknoloji ve yaşam tarzı alanında kişisel seçimler.',
      capExperienceTitle: 'Deneyim kurasyonu', capExperienceCopy: 'Yatlar, villalar, etkinlikler ve gece hayatı, ana tema uyarında.',
      geminiNotConnected: 'Keşif Odası henüz Gemini\'ye bağlanmadı - yapay zeka concierge\'ini çevrimiçi getirmek için ortama bir GEMINI_API_KEY ekleyin. Bu arada, yukarıdaki navigasyondan Seyahat, Restoranlar, Alışveriş, Villalar, Yatlar, Araba Kiralama, Bahis Siteleri ve Etkinlikleri keşfet.',
      geminiSnag: 'Concierge şu anda Gemini\'ye ulaşmada bir sorun yaşadı. Lütfen bir süre sonra tekrar deneyin.',
      geminiRateLimited: 'Concierge şu anda çok fazla istek alıyor - lütfen birkaç saniye sonra tekrar deneyin.',
      geminiInvalidKey: 'Concierge\'in Gemini anahtarı geçersiz veya yetkisiz gibi görünüyor. Lütfen GEMINI_API_KEY\'i kontrol edin.',
      geminiNoReply: 'Bunu çok iyi anlamadım - ifade edebilir misiniz?',
      geminiTimeout: 'Concierge yanıt vermekte beklenenden daha uzun sürüyor. Lütfen bir süre sonra tekrar deneyin.',
      geminiUnavailable: 'Concierge geçici olarak kullanılamaz. Lütfen kısa süre sonra yeniden deneyin.',
      starterPrompts: ['Miami\'de bir hafta sonu planlayın', '8 misafir için bir yat bulun', 'Doğum günü yemeği için masa rezervasyonu yapın', 'Şu anda en iyi spor bahisleri teklifleri'],
      examplePrompts: ['Bana Miami\'de bir Lamborghini bulun', '$5.000\'den az yat kiralama göster', 'Bu gece en iyi spor bahisleri bonusları', 'Miami Beach\'te lüks oteller'],
      entityTypes: { Yacht: 'Yat', Stay: 'Konaklama', Experience: 'Deneyim', Nightlife: 'Gece Hayatı', Restaurant: 'Restoran', Car: 'Araba', Event: 'Etkinlik', Store: 'Mağaza', Category: 'Kategori', World: 'Dünya', Destination: 'Hedef' },
      constellations: {
        travel: { full: 'Seyahat Dünyası', short: 'Seyahat' }, drive: { full: 'Sürü ve Yelken', short: 'Sürü ve Yelken' }, style: { full: 'Stil ve Alışveriş', short: 'Stil ve Alışveriş' },
        play: { full: 'Oyna ve Kazań', short: 'Oyna ve Kazań' }, taste: { full: 'Tablo ve Tat', short: 'Tablo ve Tat' }, concierge: { full: 'Concierge', short: 'Concierge' }
      },
      categories: {
        travel: 'Seyahat', flights: 'Uçuşlar', hotels: 'Oteller', carRentals: 'Araba Kiralama', cars: 'Arabalar', yachts: 'Yatlar', shopping: 'Alışveriş', fashion: 'Moda',
        beauty: 'Güzellik', electronics: 'Elektronik', entertainment: 'Eğlence', events: 'Etkinlikler', sports: 'Spor', sportsbooks: 'Bahis Siteleri',
        food: 'Yemek', restaurants: 'Restoranlar', concierge: 'Concierge', promoCodes: 'Promo Kodları', deals: 'Teklifler'
      },
      suggestionTopics: {
        travel: 'Seyahat', diningNightlife: 'Yemek ve Gece Hayatı', shopping: 'Alışveriş', villasStays: 'Villalar ve Konaklama',
        yachtRentals: 'Yat Kiralama', carRentals: 'Araba Kiralama', sportsbooks: 'Bahis Siteleri', eventsEntertainment: 'Etkinlikler ve Eğlence'
      }
    },
    categories: {
      shopping: 'Alışveriş', fashion: 'Moda', electronics: 'Elektronik', beauty: 'Güzellik', home: 'Ev', travel: 'Seyahat', sport: 'Spor', betting: 'Bahis',
      restaurants: 'Restoranlar', food: 'Yiyecek', entertainment: 'Eğlence', kosherRestaurants: 'Koşer Restoranlar', kosherStores: 'Koşer Mağazalar'
    },
    categoryDescriptions: { shopping: 'Günlük ihtiyaçlar ve premium perakende tasarrufları.', fashion: 'Moda perakendecilerinden stil, giyim, ayakkabı indirimleri.', electronics: 'Cihazlar, aksesuarlar ve oyun teknolojisi fırsatları.', beauty: 'Cilt bakımı, kozmetik ve sağlıklı yaşam fırsatları.', home: 'Mobilya, dekorasyon ve ev geliştirme tasarrufları.', travel: 'Oteller, uçuşlar, araç kiralama ve tatil fırsatları.', sport: 'Fitness markaları, ekipman ve spor giyim indirimleri.', betting: 'Bahis sitesi promosyonları ve bahisle ilgili fırsatlar.', restaurants: 'Dünyanın önde gelen şehirlerinden seçilmiş fine dining, şef masaları ve gece mekanları.', food: 'Yemek teslimatı, market ve abonelik tasarrufları.', entertainment: 'Yayın, etkinlikler, sinemalar ve oyun fırsatları.', kosherRestaurants: 'Büyük ABD şehirlerinde sertifikalı koşer yemek, catering ve teslimat.', kosherStores: 'Büyük ABD şehirlerinde koşer market, kasap ve özel pazarlar.' },
    buttons: { viewDeals: 'Fırsatları Görüntüle', getDeal: 'Fırsatı Al', visitStore: 'Mağazayı Ziyaret Et', copyCode: 'Kodu Kopyala', search: 'Ara', popularSearches: 'Popüler Aramalar' },
    search: { placeholder: 'Fırsat, mağaza, restoran ve daha fazlasını arayın', results: 'Arama sonuçları', noResults: 'Aramanızla eşleşen sonuç bulunamadı.', popular: { carRentals: 'Araç kiralama', yachtRentals: 'Yat kiralama', sportsbookBonuses: 'Bahis bonusları', vacationRentals: 'Tatil kiralamaları', miamiExperiences: 'Miami deneyimleri', restaurantsNightlife: 'Restoranlar ve gece hayatı' } },
    home: { heroTitle: 'Küresel fırsatlar, promosyon kodları ve yaşam tarzı teklifleri', heroSubtitle: 'Alışveriş, restoranlar, eğlence, seyahat, spor ve bahis alanlarında doğrulanmış indirimleri keşfedin.', featured: 'Öne Çıkan Fırsatlar' },
    category: { dealsAndPromoCodes: 'fırsatlar ve promosyon kodları', noCodeNeeded: 'Kod gerekmiyor', ends: 'Bitiş', storesDirectory: 'Mağaza Dizini', exploreStores: 'Premium mağazaları ve aktif fırsatları keşfedin', couponSystem: 'Kupon Sistemi', verifiedDeals: 'Alışveriş, restoran, seyahat ve eğlencede doğrulanmış fırsatlar', dealDescriptionTemplate: '{name}, {category} kategorisinde doğrulanmış fırsatlar ve optimize edilmiş iş ortaklığı bağlantılarıyla premium tasarruflar sunar.', kosherDescriptionTemplate: '{name}, {city}, {state} - koşer sertifikalı, doğrulanmış fırsatlar ve optimize edilmiş iş ortaklığı bağlantıları.', allCategories: 'Tüm kategoriler', dealDetail: 'Fırsat detayı', offerSummary: 'Teklif özeti', categoryLabel: 'Kategori', discountLabel: 'İndirim', expirationLabel: 'Son geçerlilik', getThisDeal: 'Bu fırsatı al' },
    kosher: { rating: 'Puan', reviews: 'değerlendirme', viewOnMap: 'Haritada görüntüle', promoCode: 'Promosyon kodu' },
    legal: {
      privacyTitle: 'Gizlilik politikası ve veri işleme', privacyBody: 'GORGONA ONE, güvenli kimlik doğrulama ile analiz, iş ortağı takibi ve gelir elde etmeye hazır yapılar kullanır.',
      termsTitle: 'Kullanım koşulları ve iş ortağı açıklamaları', termsBody: 'Tüm teklif ve promosyonlar kullanılmadan önce ilgili satıcı veya bahis sitesiyle doğrudan doğrulanmalıdır.',
      cookiesTitle: 'GORGONA ONE çerezleri nasıl kullanır', cookiesBody: 'Dil tercihlerini hatırlamak, oturum bilgilerini saklamak, analizleri geliştirmek ve iş ortağı ilişkilendirmesini desteklemek için çerezler kullanırız; böylece hızlı ve kişiselleştirilmiş bir deneyim sunarız.',
      disclosureTitle: 'İş ortağı komisyonları nasıl çalışır', disclosureBody: 'GORGONA ONE, kullanıcılar ortak bağlantılarına tıklayıp uygun işlemleri tamamladığında komisyon kazanabilir. Bu, platformun sürdürülmesine ve keşif araçlarının finansmanına yardımcı olur.',
      agreementTitle: 'Satıcı ve iş ortağı ortaklık koşulları', agreementBody: 'Onaylanmış ortaklar, doğru promosyon bilgileri sağlamayı, yasal gereklilikleri karşılamayı ve platformu GORGONA ONE tarafından belirlenen kurallara göre kullanmayı kabul eder.'
    },
    partnerForm: { title: 'Ortak kaydı', companyName: 'Şirket adı', website: 'Web sitesi', contactEmail: 'İletişim e-postası', category: 'Kategori', submit: 'Ortak olarak başvur' , successSubmit: 'Başvuru başarıyla gönderildi. Ekibimiz 2 iş günü içinde sizinle iletişime geçecek.' },
    common: { viewDetails: 'Detayları Görüntüle' },
    events: {
      marketplaceTitle: 'Bilet ve Etkinlikler', marketplaceSubtitle: 'Güvenilir sağlayıcılardan spor ve konser biletleri, hepsi tek bir yerde.',
      categories: 'Kategoriler', sportsTickets: 'Spor Biletleri', concertTickets: 'Konser Biletleri',
      featuredEvents: 'Öne Çıkan Etkinlikler', trendingEvents: 'Trend Etkinlikler', upcomingEvents: 'Yaklaşan Etkinlikler',
      featuredSportsEvents: 'Öne Çıkan Spor Etkinlikleri', featuredConcerts: 'Öne Çıkan Konserler', comingSoon: 'Yakında.',
      priceRange: 'Fiyat aralığı', teams: 'Takımlar', previous: 'Önceki', next: 'Sonraki', page: 'Sayfa', of: '/',
      searchPlaceholder: 'Etkinlik, takım, sanatçı veya mekan arayın', allCategories: 'Tüm kategoriler', allProviders: 'Tüm sağlayıcılar',
      eventDetails: 'Etkinlik detayları', venue: 'Mekan', city: 'Şehir', location: 'Konum', date: 'Tarih', time: 'Saat',
      ticketProviders: 'Bilet sağlayıcıları', buyTickets: 'Bilet Al',
      categoryLabels: {
        basketball: 'Basketbol', baseball: 'Beyzbol', hockey: 'Hokey', soccer: 'Futbol', tennis: 'Tenis', formula1: 'Formula 1', golf: 'Golf', 'ufc-boxing': 'UFC / Boks', 'theater-broadway': 'Tiyatro & Broadway', 'shows-entertainment': 'Şovlar & Eğlence', festivals: 'Festivaller', 'music-events': 'Müzik Etkinlikleri', 'comedy-shows': 'Komedi Şovları', 'family-events': 'Aile Etkinlikleri', 'exhibitions-museums': 'Sergiler & Müzeler', 'gaming-esports': 'Oyun & E-spor', 'special-events': 'Özel Etkinlikler'
      }
    },
    rentals: { pill: 'Lüks Kiralama', title: 'Premium araçlar, yatlar, villalar ve özel deneyimler', subtitle: 'Miami ve ötesinde yüksek değerli kiralama ve konsiyerj rezervasyonları için basit bir pazar yeri.', company: 'Şirket', location: 'Konum', daily: 'Günlük', weekly: 'Haftalık', reserve: 'Rezervasyon Yap' },
    yachts: { pill: 'Yat Kiralama', title: 'Özel yat charter ve lüks tekneler', subtitle: 'Partiler, gün batımı turları ve açık deniz maceraları için tam ekipli premium yatlar ayırtın.', company: 'Şirket', location: 'Konum', capacity: 'Kapasite', length: 'Uzunluk', price: 'Fiyat', guests: 'misafir', reserve: 'Rezervasyon Yap' },
    vacationRentals: { pill: 'Tatil Kiralamaları', title: 'Lüks villalar, çatı katları ve deniz kenarı evler', subtitle: 'Miami\'nin en özel semtlerinde üst düzey kısa süreli konaklamalar.', location: 'Konum', guests: 'Misafir', bedrooms: 'Yatak Odası', nightlyRate: 'Gecelik Fiyat', reserve: 'Rezervasyon Yap' },
    experiences: { pill: 'Miami Deneyimleri', title: 'Unutulmaz aktiviteler ve premium deneyimler', subtitle: 'Helikopter turlarından yat partilerine, Miami genelinde seçilmiş deneyimler.', location: 'Konum', duration: 'Süre', price: 'Fiyat', book: 'Şimdi Rezervasyon Yap' },
    restaurantsNightlife: { pill: 'Restoranlar ve Gece Hayatı', title: 'En iyi restoranlar, kulüpler ve çatı barlar', subtitle: 'Miami\'nin en ikonik restoranları ve gece mekanları tek bir yerde.', restaurants: 'Restoranlar', nightlife: 'Gece Hayatı', all: 'Tümü', location: 'Konum', rating: 'Puan' },
    sportsbookPage: { pill: 'Spor Bahisleri', title: 'Premium bahis sitesi dizini', subtitle: 'Özel profil sayfaları, eyalet bazlı erişilebilirlik ve gelecekteki promosyon kodu bölümleriyle önde gelen bahis şirketlerini keşfedin.', viewProfile: 'Profili Görüntüle' },
    auth: { pill: 'Kullanıcı Hesabı', title: 'Tekrar hoş geldiniz', subtitle: 'Kaydedilen fırsatlarınızı, kuponlarınızı ve rezervasyonlarınızı yönetmek için giriş yapın.', email: 'E-posta', password: 'Şifre', confirmPassword: 'Şifreyi onayla', name: 'Ad Soyad', continueLabel: 'Devam', signInTab: 'Giriş Yap', signUpTab: 'Kayıt Ol', signOut: 'Çıkış Yap', signedInAs: 'Giriş yapan:', errorRequired: 'Lütfen tüm zorunlu alanları doldurun.', errorEmail: 'Lütfen geçerli bir e-posta adresi girin.', errorPasswordLength: 'Şifre en az 6 karakter olmalıdır.', errorPasswordMatch: 'Şifreler eşleşmiyor.', errorInvalidCredentials: 'E-posta veya şifre hatalı.', errorEmailInUse: 'Bu e-posta ile zaten bir hesap mevcut.', successSignUp: 'Hesap başarıyla oluşturuldu. Hoş geldiniz!', successSignIn: 'Giriş başarılı.', loading: 'Lütfen bekleyin...' }
  },
  fa: {
    nav: { home: 'خانه', stores: 'فروشگاه‌ها', coupons: 'کدهای تخفیف', rentals: 'اجاره', sportsbook: 'شرط‌بندی ورزشی', events: 'رویدادها', admin: 'مدیریت', search: 'جستجوی پیشنهادها', travel: 'سفر', villas: 'ویلاها', yachts: 'یخت‌ها', cars: 'خودروها', discoveryRoom: 'اتاق کشف' },
    ai: {
      themeLight: 'روشن', themeDark: 'تاریک', switchToLight: 'تغییر به فضای روشن', switchToDark: 'تغییر به فضای تاریک',
      askAria: 'پرسیدن از Gorgona One AI', micSpeak: 'درخواست خود را بگویید', micStop: 'توقف گوش دادن', micUnsupported: 'ورودی صوتی در این مرورگر پشتیبانی نمی‌شود',
      listening: 'گوش دادن', surfacing: 'ظاهر شدن', openConcierge: 'باز کردن کنسیرژ اتاق کشف', goBack: 'بازگشت',
      introText: 'هر چیزی را در اکوسیستم GORGONA ONE بپرسید — سفر، غذا، یخت‌ها، ویلاها، رویدادها — و توصیه‌های زیبا و شخصی دریافت کنید.',
      couldntReach: 'نتوانستم اکنون به کنسیرژ دسترسی پیدا کنم - لطفاً دوباره تلاش کنید.', tempUnavailable: 'کنسیرژ موقتاً در دسترس نیست. لطفاً کمی بعد دوباره تلاش کنید.', open: 'باز کردن',
      listeningPlaceholder: 'گوش دادن…', askPlaceholder: 'از کنسیرژ هر چیزی بپرسید…', startVoiceInput: 'شروع ورودی صوتی', stopVoiceInput: 'توقف ورودی صوتی',
      turnOnSpokenReplies: 'فعال کردن پاسخ‌های شفاهی', turnOffSpokenReplies: 'غیرفعال کردن پاسخ‌های شفاهی', askButton: 'پرسیدن', conciergeVoice: 'صوت کنسیرژ',
      genderFemale: 'زن', genderMale: 'مرد', addToHomeScreenVoiceHint: 'GORGONA ONE را به صفحه خانگی خود اضافه کنید تا صدای کنسیرژ مرد یا زن را انتخاب کنید',
      aiDockLabel: 'پانل هوش مصنوعی', gorgonaConcierge: 'کنسیرژ GORGONA ONE', discoveryRoomLink: 'اتاق کشف', closeAiDock: 'بستن پانل هوش مصنوعی', aiDockAriaLabel: 'پانل هوش مصنوعی GORGONA ONE',
      discoveryRoomTitle: 'اتاق کشف', closeDiscoveryRoom: 'بستن اتاق کشف', askFromAnywhere: 'از هر جایی بپرسید…', resultsTitle: 'نتایج',
      savedTitle: 'ذخیره شده', savedEmpty: 'نتایج را سنجاق کنید تا آنها اینجا باقی بمانند — هنگام مرور باقی می‌مانند.',
      recentSearches: 'جستجوهای اخیر', clear: 'حذف', recentEmpty: 'جستجوهای شما اینجا ظاهر می‌شوند و در سراسر سایت باقی می‌مانند.',
      reuseSearch: 'استفاده مجدد از این جستجو', removeSaved: 'حذف از ذخیره‌شده', save: 'ذخیره', savedState: 'ذخیره شده', returnToAI: 'بازگشت به Gorgona One AI',
      addToHomeScreen: 'GORGONA ONE را به صفحه خانگی خود اضافه کنید', installHint: 'برنامه را نصب کنید تا تجربه کنسیرژ تمرکز‌شده و مستقل داشته باشید.',
      install: 'نصب', notNow: 'اکنون نه', iosShareHintPre: 'ضربه بزنید', iosShareHintPost: 'اشتراک‌گذاری، سپس', addToHomeScreenQuoted: '"افزودن به صفحه خانگی"', gotIt: 'فهمیدم',
      discoveryEyebrow: 'اتاق کشف · کنسیرژ هوش مصنوعی', discoveryHeroTitle: 'هر چیزی بپرسید. ما از اینجا برعهده می‌گیریم.',
      discoveryHeroSubtitle: 'کنسیرژ هوش مصنوعی شخصی برای تمام اکوسیستم GORGONA ONE — سفر، رستوران‌ها، اقامت، یخت‌ها، خودروها، سایت‌های شرط‌بندی و رویدادها. تایپ یا صحبت کنید، و ما شما را به بخش درست اکوسیستم هدایت می‌کنیم.',
      capabilitiesEyebrow: 'قابلیت‌ها', capabilitiesTitle: 'یک دستیار، کل اکوسیستم.',
      capTravelTitle: 'برنامه‌ریزی سفر', capTravelCopy: 'برنامه‌های سفر، پروازها و اقامت متناسب با روش سفر شما.',
      capDiningTitle: 'رستوران و شب‌زندگی', capDiningCopy: 'میز‌ها، پیشخدمت‌های سرآشپز و اماکن شبانه، متناسب با لحظه‌ای.',
      capShoppingTitle: 'راهنمای خرید', capShoppingCopy: 'انتخاب‌های شخصی در مد، تکنولوژی و سبک زندگی.',
      capExperienceTitle: 'انتخاب تجارب', capExperienceCopy: 'یخت‌ها، ویلاها، رویدادها و شب‌زندگی، متناسب با لحظه‌ای.',
      geminiNotConnected: 'اتاق کشف هنوز به Gemini متصل نشده است - یک GEMINI_API_KEY به محیط اضافه کنید تا کنسیرژ هوش مصنوعی را آنلاین کنید. در این میان، سفر، رستوران‌ها، خریدها، ویلاها، یخت‌ها، اجاره خودروها، سایت‌های شرط‌بندی و رویدادها را از ناوبری بالا کشف کنید.',
      geminiSnag: 'کنسیرژ اکنون مشکلی در دسترسی به Gemini داشت. لطفاً کمی بعد دوباره تلاش کنید.',
      geminiRateLimited: 'کنسیرژ اکنون درخواست‌های زیادی دریافت می‌کند - لطفاً چند ثانیه بعد دوباره تلاش کنید.',
      geminiInvalidKey: 'کلید Gemini کنسیرژ نامعتبر یا غیرمجاز به نظر می‌رسد. لطفاً GEMINI_API_KEY را بررسی کنید.',
      geminiNoReply: 'نتوانستم کاملاً فهم کنم - می‌توانید مجدداً بیان کنید؟',
      geminiTimeout: 'کنسیرژ برای پاسخ دادن بیش‌تر از حد انتظار طول می‌کشد. لطفاً کمی بعد دوباره تلاش کنید.',
      geminiUnavailable: 'کنسیرژ موقتاً در دسترس نیست. لطفاً کمی بعد دوباره تلاش کنید.',
      starterPrompts: ['برنامه‌ریزی برای یک آخر هفته در میامی', 'یافتن یخت برای 8 مهمان', 'رزرو میز برای شام تولد', 'بهترین پیشنهادهای شرط‌بندی ورزشی اکنون'],
      examplePrompts: ['برای من یک لامبورگینی در میامی پیدا کنید', 'نمایش اجاره یخت زیر $5000', 'بهترین پاداش‌های شرط‌بندی ورزشی امشب', 'هتل‌های لوکس در ساحل میامی'],
      entityTypes: { Yacht: 'یخت', Stay: 'اقامت', Experience: 'تجربه', Nightlife: 'شب‌زندگی', Restaurant: 'رستوران', Car: 'خودرو', Event: 'رویداد', Store: 'فروشگاه', Category: 'دسته', World: 'جهان', Destination: 'مقصد' },
      constellations: {
        travel: { full: 'جهان سفر', short: 'سفر' }, drive: { full: 'رانندگی و کشتی‌رانی', short: 'رانندگی و کشتی‌رانی' }, style: { full: 'سبک و خریدها', short: 'سبک و خریدها' },
        play: { full: 'بازی و برد', short: 'بازی و برد' }, taste: { full: 'میز و طعم', short: 'میز و طعم' }, concierge: { full: 'کنسیرژ', short: 'کنسیرژ' }
      },
      categories: {
        travel: 'سفر', flights: 'پروازها', hotels: 'هتل‌ها', carRentals: 'اجاره خودروها', cars: 'خودروها', yachts: 'یخت‌ها', shopping: 'خریدها', fashion: 'مد',
        beauty: 'زیبایی', electronics: 'الکترونیک', entertainment: 'سرگرمی', events: 'رویدادها', sports: 'ورزش', sportsbooks: 'سایت‌های شرط‌بندی',
        food: 'غذا', restaurants: 'رستوران‌ها', concierge: 'کنسیرژ', promoCodes: 'کدهای تبلیغاتی', deals: 'پیشنهادها'
      },
      suggestionTopics: {
        travel: 'سفر', diningNightlife: 'رستوران و شب‌زندگی', shopping: 'خریدها', villasStays: 'ویلاها و اقامت',
        yachtRentals: 'اجاره یخت', carRentals: 'اجاره خودروها', sportsbooks: 'سایت‌های شرط‌بندی', eventsEntertainment: 'رویدادها و سرگرمی'
      }
    },
    categories: {
      shopping: 'خرید', fashion: 'مد', electronics: 'الکترونیک', beauty: 'زیبایی', home: 'خانه', travel: 'سفر', sport: 'ورزش', betting: 'شرط‌بندی',
      restaurants: 'رستوران‌ها', food: 'غذا', entertainment: 'سرگرمی', kosherRestaurants: 'رستوران‌های کوشر', kosherStores: 'فروشگاه‌های کوشر'
    },
    categoryDescriptions: { shopping: 'نیازهای روزمره و صرفه‌جویی ویژه در خرده‌فروشی.', fashion: 'سبک، پوشاک، کفش و تخفیف‌های فروشگاه‌های مد.', electronics: 'دستگاه‌ها، لوازم جانبی و پیشنهادهای فناوری بازی.', beauty: 'مراقبت از پوست، آرایشی و پیشنهادهای سلامتی.', home: 'مبلمان، دکوراسیون و صرفه‌جویی در بهسازی خانه.', travel: 'هتل‌ها، پروازها، اجاره خودرو و پیشنهادهای تعطیلات.', sport: 'برندهای تناسب اندام، تجهیزات و تخفیف پوشاک ورزشی.', betting: 'تبلیغات سایت‌های شرط‌بندی و پیشنهادهای مرتبط.', restaurants: 'رستوران‌های لوکس، میز سرآشپز و مکان‌های شبانه منتخب در برترین شهرهای جهان.', food: 'تحویل غذا، خواروبار و صرفه‌جویی در اشتراک‌ها.', entertainment: 'استریم، رویدادها، سینما و پیشنهادهای بازی.', kosherRestaurants: 'غذاخوری‌های کوشر معتبر، کترینگ و تحویل در شهرهای بزرگ آمریکا.', kosherStores: 'خواروبار فروشی‌ها، قصابی‌ها و بازارهای تخصصی کوشر در شهرهای بزرگ آمریکا.' },
    buttons: { viewDeals: 'مشاهده پیشنهادها', getDeal: 'دریافت پیشنهاد', visitStore: 'مشاهده فروشگاه', copyCode: 'کپی کد', search: 'جستجو', popularSearches: 'جستجوهای محبوب' },
    search: { placeholder: 'جستجوی پیشنهادها، فروشگاه‌ها، رستوران‌ها و موارد دیگر', results: 'نتایج جستجو', noResults: 'نتیجه‌ای برای جستجوی شما یافت نشد.', popular: { carRentals: 'اجاره خودرو', yachtRentals: 'اجاره قایق تفریحی', sportsbookBonuses: 'پاداش‌های شرط‌بندی', vacationRentals: 'اجاره تعطیلات', miamiExperiences: 'تجربه‌های میامی', restaurantsNightlife: 'رستوران‌ها و زندگی شبانه' } },
    home: { heroTitle: 'پیشنهادهای جهانی، کدهای تخفیف و پیشنهادهای سبک زندگی', heroSubtitle: 'تخفیف‌های تأییدشده در خرید، رستوران‌ها، سرگرمی، سفر، ورزش و شرط‌بندی را کشف کنید.', featured: 'پیشنهادهای ویژه' },
    category: { dealsAndPromoCodes: 'پیشنهادها و کدهای تخفیف', noCodeNeeded: 'نیازی به کد نیست', ends: 'پایان', storesDirectory: 'فهرست فروشگاه‌ها', exploreStores: 'فروشگاه‌های ویژه و پیشنهادهای فعال را کشف کنید', couponSystem: 'سیستم کد تخفیف', verifiedDeals: 'تخفیف‌های تأییدشده در خرید، رستوران، سفر و سرگرمی', dealDescriptionTemplate: '{name} در دسته {category} تخفیف‌های ویژه‌ای با پیشنهادهای تأییدشده و لینک‌های همکاری بهینه ارائه می‌دهد.', kosherDescriptionTemplate: '{name} در {city}، {state} - دارای گواهی کوشر، پیشنهادهای تأییدشده و لینک‌های همکاری بهینه.', allCategories: 'همه دسته‌بندی‌ها', dealDetail: 'جزئیات پیشنهاد', offerSummary: 'خلاصه پیشنهاد', categoryLabel: 'دسته‌بندی', discountLabel: 'تخفیف', expirationLabel: 'تاریخ انقضا', getThisDeal: 'دریافت این پیشنهاد' },
    kosher: { rating: 'امتیاز', reviews: 'نظر', viewOnMap: 'مشاهده روی نقشه', promoCode: 'کد تخفیف' },
    legal: {
      privacyTitle: 'سیاست حریم خصوصی و پردازش داده‌ها', privacyBody: 'GORGONA ONE از احراز هویت امن و ساختارهای آماده برای تحلیل، ردیابی همکاران و کسب درآمد استفاده می‌کند.',
      termsTitle: 'شرایط استفاده و افشای همکاری', termsBody: 'تمامی پیشنهادها و تخفیف‌ها باید پیش از استفاده مستقیماً با فروشنده یا سایت شرط‌بندی تأیید شوند.',
      cookiesTitle: 'نحوه استفاده GORGONA ONE از کوکی‌ها', cookiesBody: 'ما از کوکی‌ها برای به‌خاطرسپاری تنظیمات زبان، ذخیره اطلاعات نشست، بهبود تحلیل‌ها و پشتیبانی از انتساب همکاران استفاده می‌کنیم و در عین حال تجربه‌ای سریع و شخصی‌سازی‌شده حفظ می‌شود.',
      disclosureTitle: 'نحوه عملکرد کمیسیون‌های همکاری', disclosureBody: 'GORGONA ONE ممکن است هنگامی که کاربران روی لینک‌های همکاران کلیک کرده و اقدامات واجد شرایط را تکمیل می‌کنند، کمیسیون دریافت کند. این به حفظ پلتفرم و تأمین مالی ابزارهای جستجو کمک می‌کند.',
      agreementTitle: 'شرایط همکاری فروشندگان و همکاران', agreementBody: 'همکاران تأییدشده متعهد می‌شوند اطلاعات دقیق پیشنهادها را ارائه دهند، الزامات قانونی را رعایت کنند و از پلتفرم طبق قوانین GORGONA ONE استفاده کنند.'
    },
    partnerForm: { title: 'ثبت‌نام همکار', companyName: 'نام شرکت', website: 'وب‌سایت', contactEmail: 'ایمیل تماس', category: 'دسته‌بندی', submit: 'درخواست همکاری' , successSubmit: 'درخواست با موفقیت ارسال شد. تیم ما ظرف ۲ روز کاری با شما تماس خواهد گرفت.' },
    common: { viewDetails: 'مشاهده جزئیات' },
    events: {
      marketplaceTitle: 'بلیط و رویدادها', marketplaceSubtitle: 'بلیط رویدادهای ورزشی و کنسرت از تأمین‌کنندگان معتبر، همه در یک مکان.',
      categories: 'دسته‌بندی‌ها', sportsTickets: 'بلیط ورزشی', concertTickets: 'بلیط کنسرت',
      featuredEvents: 'رویدادهای ویژه', trendingEvents: 'رویدادهای پرطرفدار', upcomingEvents: 'رویدادهای پیش رو',
      featuredSportsEvents: 'رویدادهای ورزشی ویژه', featuredConcerts: 'کنسرت‌های ویژه', comingSoon: 'به‌زودی.',
      priceRange: 'محدوده قیمت', teams: 'تیم‌ها', previous: 'قبلی', next: 'بعدی', page: 'صفحه', of: 'از',
      searchPlaceholder: 'جستجوی رویدادها، تیم‌ها، هنرمندان یا مکان‌ها', allCategories: 'همه دسته‌بندی‌ها', allProviders: 'همه تأمین‌کنندگان',
      eventDetails: 'جزئیات رویداد', venue: 'محل برگزاری', city: 'شهر', location: 'مکان', date: 'تاریخ', time: 'زمان',
      ticketProviders: 'تأمین‌کنندگان بلیط', buyTickets: 'خرید بلیط',
      categoryLabels: {
        basketball: 'بسکتبال', baseball: 'بیسبال', hockey: 'هاکی', soccer: 'فوتبال', tennis: 'تنیس', formula1: 'فرمول ۱', golf: 'گلف', 'ufc-boxing': 'UFC / بوکس', 'theater-broadway': 'تئاتر و برادوی', 'shows-entertainment': 'نمایش و سرگرمی', festivals: 'جشنواره‌ها', 'music-events': 'رویدادهای موسیقی', 'comedy-shows': 'نمایش‌های کمدی', 'family-events': 'رویدادهای خانوادگی', 'exhibitions-museums': 'نمایشگاه‌ها و موزه‌ها', 'gaming-esports': 'گیمینگ و ورزش الکترونیک', 'special-events': 'رویدادهای ویژه'
      }
    },
    rentals: { pill: 'اجاره لوکس', title: 'خودروها، قایق‌های تفریحی، ویلاها و تجربه‌های خصوصی ویژه', subtitle: 'بازاری ساده برای اجاره‌های ارزشمند و رزرو با خدمات کنسیرژ در میامی و فراتر از آن.', company: 'شرکت', location: 'مکان', daily: 'روزانه', weekly: 'هفتگی', reserve: 'رزرو' },
    yachts: { pill: 'اجاره قایق تفریحی', title: 'اجاره خصوصی قایق‌های تفریحی و قایق‌های لوکس', subtitle: 'قایق‌های تفریحی ویژه با خدمه کامل برای مهمانی‌ها، گشت غروب و ماجراجویی‌های دریایی رزرو کنید.', company: 'شرکت', location: 'مکان', capacity: 'ظرفیت', length: 'طول', price: 'قیمت', guests: 'مهمان', reserve: 'رزرو' },
    vacationRentals: { pill: 'اجاره ویلاهای تعطیلات', title: 'ویلاهای لوکس، پنت‌هاوس‌ها و خانه‌های ساحلی', subtitle: 'اقامت‌های کوتاه‌مدت لوکس در انحصاری‌ترین محله‌های میامی.', location: 'مکان', guests: 'مهمانان', bedrooms: 'اتاق خواب', nightlyRate: 'نرخ هر شب', reserve: 'رزرو' },
    experiences: { pill: 'تجربه‌های میامی', title: 'فعالیت‌های فراموش‌نشدنی و تجربه‌های ویژه', subtitle: 'از تورهای هلیکوپتر تا مهمانی‌های قایق تفریحی، تجربه‌های منتخب در سراسر میامی.', location: 'مکان', duration: 'مدت زمان', price: 'قیمت', book: 'همین حالا رزرو کنید' },
    restaurantsNightlife: { pill: 'رستوران‌ها و زندگی شبانه', title: 'برترین رستوران‌ها، کلوپ‌ها و لانج‌های پشت‌بام', subtitle: 'برجسته‌ترین رستوران‌ها و مکان‌های شبانه میامی، همه در یک مکان.', restaurants: 'رستوران‌ها', nightlife: 'زندگی شبانه', all: 'همه', location: 'مکان', rating: 'امتیاز' },
    sportsbookPage: { pill: 'شرط‌بندی ورزشی', title: 'فهرست ویژه سایت‌های شرط‌بندی', subtitle: 'شرکت‌های بزرگ شرط‌بندی را با صفحات پروفایل اختصاصی، در دسترس بودن بر اساس ایالت و بخش‌های کد تخفیف آینده کشف کنید.', viewProfile: 'مشاهده پروفایل' },
    auth: { pill: 'حساب کاربری', title: 'خوش آمدید', subtitle: 'برای مدیریت تخفیف‌ها، کوپن‌ها و رزروهای ذخیره‌شده خود وارد شوید.', email: 'ایمیل', password: 'رمز عبور', confirmPassword: 'تأیید رمز عبور', name: 'نام کامل', continueLabel: 'ادامه', signInTab: 'ورود', signUpTab: 'ثبت‌نام', signOut: 'خروج', signedInAs: 'وارد شده به عنوان', errorRequired: 'لطفاً همه فیلدهای ضروری را پر کنید.', errorEmail: 'لطفاً یک ایمیل معتبر وارد کنید.', errorPasswordLength: 'رمز عبور باید حداقل ۶ کاراکتر باشد.', errorPasswordMatch: 'رمزهای عبور مطابقت ندارند.', errorInvalidCredentials: 'ایمیل یا رمز عبور نادرست است.', errorEmailInUse: 'حسابی با این ایمیل قبلاً وجود دارد.', successSignUp: 'حساب با موفقیت ایجاد شد. خوش آمدید!', successSignIn: 'ورود با موفقیت انجام شد.', loading: 'لطفاً صبر کنید...' }
  },
  it: {
    nav: { home: 'Home', stores: 'Negozi', coupons: 'Coupon', rentals: 'Noleggi', sportsbook: 'Scommesse sportive', events: 'Eventi', admin: 'Amministrazione', search: 'Cerca offerte', travel: 'Viaggio', villas: 'Ville', yachts: 'Yacht', cars: 'Auto', discoveryRoom: 'Sala di scoperta' },
    ai: {
      themeLight: 'Chiaro', themeDark: 'Scuro', switchToLight: 'Passa all\'atmosfera chiara', switchToDark: 'Passa all\'atmosfera scura',
      askAria: 'Chiedi a Gorgona One AI', micSpeak: 'Pronuncia la tua richiesta', micStop: 'Smetti di ascoltare', micUnsupported: 'L\'input vocale non è supportato in questo browser',
      listening: 'In ascolto', surfacing: 'Visualizzazione', openConcierge: 'Apri il concierge della sala di scoperta', goBack: 'Indietro',
      introText: 'Chiedi qualsiasi cosa nell\'ecosistema GORGONA ONE — viaggi, cena, yacht, ville, eventi — e ricevi consigli eleganti e personali.',
      couldntReach: 'Non riesco a raggiungere il concierge adesso - riprova.', tempUnavailable: 'Il concierge è temporaneamente non disponibile. Riprova tra poco.', open: 'Apri',
      listeningPlaceholder: 'In ascolto…', askPlaceholder: 'Chiedi qualsiasi cosa al concierge…', startVoiceInput: 'Avvia input vocale', stopVoiceInput: 'Arresta input vocale',
      turnOnSpokenReplies: 'Attiva risposte parlate', turnOffSpokenReplies: 'Disattiva risposte parlate', askButton: 'Chiedi', conciergeVoice: 'Voce del concierge',
      genderFemale: 'Femminile', genderMale: 'Maschile', addToHomeScreenVoiceHint: 'Aggiungi GORGONA ONE alla tua schermata iniziale per scegliere una voce concierge maschile o femminile',
      aiDockLabel: 'Pannello IA', gorgonaConcierge: 'Concierge GORGONA ONE', discoveryRoomLink: 'Sala di scoperta', closeAiDock: 'Chiudi pannello IA', aiDockAriaLabel: 'Pannello IA GORGONA ONE',
      discoveryRoomTitle: 'Sala di scoperta', closeDiscoveryRoom: 'Chiudi sala di scoperta', askFromAnywhere: 'Chiedi da qualsiasi posto…', resultsTitle: 'Risultati',
      savedTitle: 'Salvato', savedEmpty: 'Fissa i risultati per mantenerli qui — rimangono mentre navighi.',
      recentSearches: 'Ricerche recenti', clear: 'Cancella', recentEmpty: 'Le tue ricerche appaiono qui e vengono conservate su tutto il sito.',
      reuseSearch: 'Riusa questa ricerca', removeSaved: 'Rimuovi da salvato', save: 'Salva', savedState: 'Salvato', returnToAI: 'Torna a Gorgona One AI',
      addToHomeScreen: 'Aggiungi GORGONA ONE alla tua schermata iniziale', installHint: 'Installa l\'app per un\'esperienza concierge focalizzata e autonoma.',
      install: 'Installa', notNow: 'Non ora', iosShareHintPre: 'Tocca', iosShareHintPost: 'Condividi, poi', addToHomeScreenQuoted: '"Aggiungi alla schermata iniziale"', gotIt: 'Ho capito',
      discoveryEyebrow: 'La sala di scoperta · Concierge IA', discoveryHeroTitle: 'Chiedi qualsiasi cosa. Ce ne occupiamo da qui.',
      discoveryHeroSubtitle: 'Un concierge IA personale per l\'intero ecosistema GORGONA ONE — viaggi, ristoranti, soggiorni, yacht, auto, scommesse sportive e eventi. Scrivi o parla, e ti guiderà verso la giusta parte dell\'ecosistema.',
      capabilitiesEyebrow: 'Funzionalità', capabilitiesTitle: 'Un assistente, l\'intero ecosistema.',
      capTravelTitle: 'Pianificazione del viaggio', capTravelCopy: 'Itinerari, voli e soggiorni personalizzati secondo il tuo stile di viaggio.',
      capDiningTitle: 'Cena e vita notturna', capDiningCopy: 'Tavoli, banchi dello chef e locali notturni, abbinati al momento.',
      capShoppingTitle: 'Guida agli acquisti', capShoppingCopy: 'Scelte personali in moda, tecnologia e stile di vita.',
      capExperienceTitle: 'Cura dell\'esperienza', capExperienceCopy: 'Yacht, ville, eventi e vita notturna, abbinati al momento.',
      geminiNotConnected: 'La sala di scoperta non è ancora connessa a Gemini - aggiungi un GEMINI_API_KEY all\'ambiente per portare il concierge IA online. Nel frattempo, esplora Viaggi, Ristoranti, Shopping, Ville, Yacht, Noleggio auto, Scommesse sportive ed Eventi dalla navigazione sopra.',
      geminiSnag: 'Il concierge ha incontrato un problema nel raggiungere Gemini proprio ora. Riprova tra un momento.',
      geminiRateLimited: 'Il concierge sta ricevendo molte richieste adesso - riprova tra pochi secondi.',
      geminiInvalidKey: 'La chiave Gemini del concierge sembra non valida o non autorizzata. Controlla GEMINI_API_KEY.',
      geminiNoReply: 'Non ho capito bene - potresti riformulare?',
      geminiTimeout: 'Il concierge sta impiegando più tempo del previsto per rispondere. Riprova tra un momento.',
      geminiUnavailable: 'Il concierge è temporaneamente non disponibile. Riprova tra poco.',
      starterPrompts: ['Pianifica un fine settimana a Miami', 'Trova uno yacht per 8 ospiti', 'Prenota un tavolo per una cena di compleanno', 'Le migliori offerte di scommesse sportive adesso'],
      examplePrompts: ['Trovami una Lamborghini a Miami', 'Mostra noleggi di yacht sotto $5.000', 'I migliori bonus di scommesse sportive stasera', 'Hotel di lusso a Miami Beach'],
      entityTypes: { Yacht: 'Yacht', Stay: 'Soggiorno', Experience: 'Esperienza', Nightlife: 'Vita notturna', Restaurant: 'Ristorante', Car: 'Auto', Event: 'Evento', Store: 'Negozio', Category: 'Categoria', World: 'Mondo', Destination: 'Destinazione' },
      constellations: {
        travel: { full: 'Mondo dei viaggi', short: 'Viaggi' }, drive: { full: 'Guida e navigazione', short: 'Guida e navigazione' }, style: { full: 'Stile e shopping', short: 'Stile e shopping' },
        play: { full: 'Gioca e vinci', short: 'Gioca e vinci' }, taste: { full: 'Tavolo e gusto', short: 'Tavolo e gusto' }, concierge: { full: 'Concierge', short: 'Concierge' }
      },
      categories: {
        travel: 'Viaggio', flights: 'Voli', hotels: 'Hotel', carRentals: 'Noleggio auto', cars: 'Auto', yachts: 'Yacht', shopping: 'Shopping', fashion: 'Moda',
        beauty: 'Bellezza', electronics: 'Elettronica', entertainment: 'Intrattenimento', events: 'Eventi', sports: 'Sport', sportsbooks: 'Scommesse sportive',
        food: 'Cibo', restaurants: 'Ristoranti', concierge: 'Concierge', promoCodes: 'Codici promozionali', deals: 'Offerte'
      },
      suggestionTopics: {
        travel: 'Viaggio', diningNightlife: 'Cena e vita notturna', shopping: 'Shopping', villasStays: 'Ville e soggiorni',
        yachtRentals: 'Noleggio yacht', carRentals: 'Noleggio auto', sportsbooks: 'Scommesse sportive', eventsEntertainment: 'Eventi e intrattenimento'
      }
    },
    categories: {
      shopping: 'Shopping', fashion: 'Moda', electronics: 'Elettronica', beauty: 'Bellezza', home: 'Casa', travel: 'Viaggi', sport: 'Sport', betting: 'Scommesse',
      restaurants: 'Ristoranti', food: 'Cibo', entertainment: 'Intrattenimento', kosherRestaurants: 'Ristoranti Kosher', kosherStores: 'Negozi Kosher'
    },
    categoryDescriptions: { shopping: 'Beni di prima necessità e risparmi retail premium.', fashion: 'Stile, abbigliamento, calzature e sconti dai rivenditori di moda.', electronics: 'Dispositivi, accessori e offerte di tecnologia gaming.', beauty: 'Cura della pelle, cosmetici e offerte benessere.', home: 'Mobili, decorazioni e risparmi per la casa.', travel: 'Hotel, voli, noleggio auto e offerte vacanza.', sport: 'Marchi fitness, attrezzature e sconti su abbigliamento sportivo.', betting: 'Promozioni di bookmaker e offerte relative alle scommesse.', restaurants: 'Alta cucina, chef’s table e locali notturni selezionati nelle migliori città del mondo.', food: 'Consegna cibo, spesa e risparmi sugli abbonamenti.', entertainment: 'Streaming, eventi, cinema e offerte di gioco.', kosherRestaurants: 'Ristoranti kosher certificati, catering e consegna nelle principali città USA.', kosherStores: 'Negozi di alimentari, macellerie e mercati kosher specializzati nelle principali città USA.' },
    buttons: { viewDeals: 'Vedi offerte', getDeal: 'Ottieni offerta', visitStore: 'Visita negozio', copyCode: 'Copia codice', search: 'Cerca', popularSearches: 'Ricerche popolari' },
    search: { placeholder: 'Cerca offerte, negozi, ristoranti e altro', results: 'Risultati di ricerca', noResults: 'Nessun risultato trovato per la tua ricerca.', popular: { carRentals: 'Noleggio auto', yachtRentals: 'Noleggio yacht', sportsbookBonuses: 'Bonus scommesse sportive', vacationRentals: 'Affitti vacanza', miamiExperiences: 'Esperienze a Miami', restaurantsNightlife: 'Ristoranti e vita notturna' } },
    home: { heroTitle: 'Offerte globali, codici promozionali e proposte lifestyle', heroSubtitle: 'Scopri sconti verificati su shopping, ristoranti, intrattenimento, viaggi, sport e scommesse.', featured: 'Offerte in evidenza' },
    category: { dealsAndPromoCodes: 'offerte e codici promozionali', noCodeNeeded: 'Nessun codice necessario', ends: 'Termina il', storesDirectory: 'Elenco negozi', exploreStores: 'Scopri negozi premium e offerte attive', couponSystem: 'Sistema di coupon', verifiedDeals: 'Offerte verificate su shopping, ristoranti, viaggi e intrattenimento', dealDescriptionTemplate: '{name} offre risparmi premium nella categoria {category} con offerte verificate e link di affiliazione ottimizzati.', kosherDescriptionTemplate: '{name} a {city}, {state} - certificato kosher, offerte verificate e link di affiliazione ottimizzati.', allCategories: 'Tutte le categorie', dealDetail: 'Dettaglio offerta', offerSummary: 'Riepilogo offerta', categoryLabel: 'Categoria', discountLabel: 'Sconto', expirationLabel: 'Scadenza', getThisDeal: 'Ottieni questa offerta' },
    kosher: { rating: 'Valutazione', reviews: 'recensioni', viewOnMap: 'Visualizza sulla mappa', promoCode: 'Codice promozionale' },
    legal: {
      privacyTitle: 'Informativa sulla privacy e gestione dei dati', privacyBody: 'GORGONA ONE utilizza un’autenticazione sicura e strutture pronte per analisi, tracciamento affiliati e monetizzazione.',
      termsTitle: 'Termini di utilizzo e divulgazioni sugli affiliati', termsBody: 'Tutte le offerte e promozioni devono essere verificate direttamente con il commerciante o il bookmaker prima dell’uso.',
      cookiesTitle: 'Come GORGONA ONE utilizza i cookie', cookiesBody: 'Utilizziamo i cookie per ricordare le preferenze linguistiche, memorizzare i dati di sessione, migliorare le analisi e supportare l’attribuzione degli affiliati, mantenendo un’esperienza veloce e personalizzata.',
      disclosureTitle: 'Come funzionano le commissioni di affiliazione', disclosureBody: 'GORGONA ONE può guadagnare commissioni quando gli utenti fanno clic e completano azioni idonee tramite link partner. Questo aiuta a sostenere la piattaforma e finanziare gli strumenti di scoperta.',
      agreementTitle: 'Termini di partnership con commercianti e affiliati', agreementBody: 'I partner approvati accettano di fornire dettagli accurati sulle promozioni, rispettare i requisiti legali e utilizzare la piattaforma secondo le regole stabilite da GORGONA ONE.'
    },
    partnerForm: { title: 'Registrazione partner', companyName: 'Nome azienda', website: 'Sito web', contactEmail: 'Email di contatto', category: 'Categoria', submit: 'Candidati come partner' , successSubmit: 'Candidatura inviata con successo. Il nostro team ti contatterà entro 2 giorni lavorativi.' },
    common: { viewDetails: 'Vedi dettagli' },
    events: {
      marketplaceTitle: 'Biglietti ed Eventi', marketplaceSubtitle: 'Biglietti per eventi sportivi e concerti da fornitori affidabili, tutto in un unico posto.',
      categories: 'Categorie', sportsTickets: 'Biglietti sportivi', concertTickets: 'Biglietti per concerti',
      featuredEvents: 'Eventi in evidenza', trendingEvents: 'Eventi di tendenza', upcomingEvents: 'Prossimi eventi',
      featuredSportsEvents: 'Eventi sportivi in evidenza', featuredConcerts: 'Concerti in evidenza', comingSoon: 'Prossimamente.',
      priceRange: 'Fascia di prezzo', teams: 'Squadre', previous: 'Precedente', next: 'Successivo', page: 'Pagina', of: 'di',
      searchPlaceholder: 'Cerca eventi, squadre, artisti o sedi', allCategories: 'Tutte le categorie', allProviders: 'Tutti i fornitori',
      eventDetails: 'Dettagli evento', venue: 'Sede', city: 'Città', location: 'Posizione', date: 'Data', time: 'Ora',
      ticketProviders: 'Fornitori di biglietti', buyTickets: 'Acquista biglietti',
      categoryLabels: {
        basketball: 'Basket', baseball: 'Baseball', hockey: 'Hockey', soccer: 'Calcio', tennis: 'Tennis', formula1: 'Formula 1', golf: 'Golf', 'ufc-boxing': 'UFC / Boxe', 'theater-broadway': 'Teatro e Broadway', 'shows-entertainment': 'Spettacoli e intrattenimento', festivals: 'Festival', 'music-events': 'Eventi musicali', 'comedy-shows': 'Spettacoli comici', 'family-events': 'Eventi per famiglie', 'exhibitions-museums': 'Mostre e musei', 'gaming-esports': 'Gaming ed esports', 'special-events': 'Eventi speciali'
      }
    },
    rentals: { pill: 'Noleggi di lusso', title: 'Auto, yacht, ville ed esperienze private premium', subtitle: 'Un marketplace semplice per noleggi di alto valore e prenotazioni con servizio concierge a Miami e oltre.', company: 'Azienda', location: 'Posizione', daily: 'Giornaliero', weekly: 'Settimanale', reserve: 'Prenota' },
    yachts: { pill: 'Noleggio yacht', title: 'Charter privati di yacht e barche di lusso', subtitle: 'Prenota yacht premium con equipaggio completo per feste, crociere al tramonto e avventure in mare.', company: 'Azienda', location: 'Posizione', capacity: 'Capacità', length: 'Lunghezza', price: 'Prezzo', guests: 'ospiti', reserve: 'Prenota' },
    vacationRentals: { pill: 'Affitti per le vacanze', title: 'Ville di lusso, attici e case sul mare', subtitle: 'Soggiorni brevi di alto livello nei quartieri più esclusivi di Miami.', location: 'Posizione', guests: 'Ospiti', bedrooms: 'Camere da letto', nightlyRate: 'Tariffa a notte', reserve: 'Prenota' },
    experiences: { pill: 'Esperienze a Miami', title: 'Attività indimenticabili ed esperienze premium', subtitle: 'Dai tour in elicottero alle feste in yacht, esperienze curate in tutta Miami.', location: 'Posizione', duration: 'Durata', price: 'Prezzo', book: 'Prenota ora' },
    restaurantsNightlife: { pill: 'Ristoranti e vita notturna', title: 'I migliori ristoranti, club e rooftop lounge', subtitle: 'I ristoranti e i locali notturni più iconici di Miami, tutti in un unico posto.', restaurants: 'Ristoranti', nightlife: 'Vita notturna', all: 'Tutti', location: 'Posizione', rating: 'Valutazione' },
    sportsbookPage: { pill: 'Scommesse sportive', title: 'Elenco premium di bookmaker', subtitle: 'Scopri i principali bookmaker con pagine profilo dedicate, disponibilità per stato e sezioni di codici promozionali future.', viewProfile: 'Vedi profilo' },
    auth: { pill: 'Account utente', title: 'Bentornato', subtitle: 'Accedi per gestire le tue offerte, coupon e prenotazioni salvate.', email: 'Email', password: 'Password', confirmPassword: 'Conferma password', name: 'Nome completo', continueLabel: 'Continua', signInTab: 'Accedi', signUpTab: 'Registrati', signOut: 'Esci', signedInAs: 'Accesso effettuato come', errorRequired: 'Per favore, compila tutti i campi obbligatori.', errorEmail: 'Per favore, inserisci un indirizzo email valido.', errorPasswordLength: 'La password deve contenere almeno 6 caratteri.', errorPasswordMatch: 'Le password non corrispondono.', errorInvalidCredentials: 'Email o password errati.', errorEmailInUse: 'Esiste già un account con questa email.', successSignUp: 'Account creato con successo. Benvenuto!', successSignIn: 'Accesso effettuato con successo.', loading: 'Attendere prego...' }
  },
  fr: {
    nav: { home: 'Accueil', stores: 'Boutiques', coupons: 'Coupons', rentals: 'Locations', sportsbook: 'Paris sportifs', events: 'Événements', admin: 'Administration', search: 'Rechercher des offres', travel: 'Voyage', villas: 'Villas', yachts: 'Yachts', cars: 'Voitures', discoveryRoom: 'Salle de découverte' },
    ai: {
      themeLight: 'Clair', themeDark: 'Sombre', switchToLight: 'Basculer vers une atmosphère claire', switchToDark: 'Basculer vers une atmosphère sombre',
      askAria: 'Demander à Gorgona One AI', micSpeak: 'Énoncez votre demande', micStop: 'Arrêter l\'écoute', micUnsupported: 'L\'entrée vocale n\'est pas prise en charge dans ce navigateur',
      listening: 'Écoute', surfacing: 'Surface', openConcierge: 'Ouvrir le concierge de la salle de découverte', goBack: 'Retour',
      introText: 'Demandez n\'importe quoi dans l\'écosystème GORGONA ONE — voyage, restauration, yachts, villas, événements — et recevez des recommandations élégantes et personnalisées.',
      couldntReach: 'Je n\'ai pas pu joindre le concierge maintenant - veuillez réessayer.', tempUnavailable: 'Le concierge est temporairement indisponible. Veuillez réessayer dans un instant.', open: 'Ouvrir',
      listeningPlaceholder: 'Écoute…', askPlaceholder: 'Demandez n\'importe quoi au concierge…', startVoiceInput: 'Démarrer l\'entrée vocale', stopVoiceInput: 'Arrêter l\'entrée vocale',
      turnOnSpokenReplies: 'Activer les réponses parlées', turnOffSpokenReplies: 'Désactiver les réponses parlées', askButton: 'Demander', conciergeVoice: 'Voix du concierge',
      genderFemale: 'Féminin', genderMale: 'Masculin', addToHomeScreenVoiceHint: 'Ajoutez GORGONA ONE à votre écran d\'accueil pour choisir une voix de concierge masculine ou féminine',
      aiDockLabel: 'Panneau IA', gorgonaConcierge: 'Concierge GORGONA ONE', discoveryRoomLink: 'Salle de découverte', closeAiDock: 'Fermer le panneau IA', aiDockAriaLabel: 'Panneau IA GORGONA ONE',
      discoveryRoomTitle: 'Salle de découverte', closeDiscoveryRoom: 'Fermer la salle de découverte', askFromAnywhere: 'Demander de n\'importe où…', resultsTitle: 'Résultats',
      savedTitle: 'Enregistré', savedEmpty: 'Épinglez les résultats pour les conserver ici — ils persistent lors de la navigation.',
      recentSearches: 'Recherches récentes', clear: 'Effacer', recentEmpty: 'Vos recherches apparaissent ici et sont conservées dans tout le site.',
      reuseSearch: 'Réutiliser cette recherche', removeSaved: 'Supprimer de l\'enregistrement', save: 'Enregistrer', savedState: 'Enregistré', returnToAI: 'Retour à Gorgona One AI',
      addToHomeScreen: 'Ajoutez GORGONA ONE à votre écran d\'accueil', installHint: 'Installez l\'application pour une expérience de concierge concentrée et autonome.',
      install: 'Installer', notNow: 'Pas maintenant', iosShareHintPre: 'Appuyez', iosShareHintPost: 'Partagez, puis', addToHomeScreenQuoted: '"Ajouter à l\'écran d\'accueil"', gotIt: 'Compris',
      discoveryEyebrow: 'La salle de découverte · Concierge IA', discoveryHeroTitle: 'Demandez n\'importe quoi. Nous gérons cela d\'ici.',
      discoveryHeroSubtitle: 'Un concierge IA personnalisé pour l\'ensemble de l\'écosystème GORGONA ONE — voyage, restaurants, hébergement, yachts, voitures, paris sportifs et événements. Tapez ou parlez, et il vous dirigera vers la bonne partie de l\'écosystème.',
      capabilitiesEyebrow: 'Capacités', capabilitiesTitle: 'Un assistant, l\'écosystème entier.',
      capTravelTitle: 'Planification de voyage', capTravelCopy: 'Itinéraires, vols et hébergement personnalisés selon votre style de voyage.',
      capDiningTitle: 'Restaurant et vie nocturne', capDiningCopy: 'Tables, comptoirs de chef et lieux nocturnes, adaptés au moment présent.',
      capShoppingTitle: 'Conseils d\'achat', capShoppingCopy: 'Sélections personnelles dans la mode, la technologie et le style de vie.',
      capExperienceTitle: 'Curation d\'expérience', capExperienceCopy: 'Yachts, villas, événements et vie nocturne, adaptés au moment présent.',
      geminiNotConnected: 'La salle de découverte n\'est pas encore connectée à Gemini - ajoutez une GEMINI_API_KEY à l\'environnement pour mettre le concierge IA en ligne. En attendant, explorez Voyage, Restaurants, Shopping, Villas, Yachts, Location de voitures, Paris sportifs et Événements à partir de la navigation ci-dessus.',
      geminiSnag: 'Le concierge a rencontré un problème pour atteindre Gemini maintenant. Veuillez réessayer dans un instant.',
      geminiRateLimited: 'Le concierge reçoit beaucoup de demandes en ce moment - veuillez réessayer dans quelques secondes.',
      geminiInvalidKey: 'La clé Gemini du concierge semble invalide ou non autorisée. Veuillez vérifier GEMINI_API_KEY.',
      geminiNoReply: 'Je n\'ai pas bien compris - pourriez-vous reformuler?',
      geminiTimeout: 'Le concierge prend plus de temps que prévu pour répondre. Veuillez réessayer dans un instant.',
      geminiUnavailable: 'Le concierge est temporairement indisponible. Veuillez réessayer dans un instant.',
      starterPrompts: ['Planifier un week-end à Miami', 'Trouver un yacht pour 8 invités', 'Réserver une table pour un dîner d\'anniversaire', 'Meilleures offres de paris sportifs maintenant'],
      examplePrompts: ['Trouvez-moi une Lamborghini à Miami', 'Afficher les locations de yachts en dessous de $5 000', 'Meilleurs bonus de paris sportifs ce soir', 'Hôtels de luxe à Miami Beach'],
      entityTypes: { Yacht: 'Yacht', Stay: 'Séjour', Experience: 'Expérience', Nightlife: 'Vie nocturne', Restaurant: 'Restaurant', Car: 'Voiture', Event: 'Événement', Store: 'Boutique', Category: 'Catégorie', World: 'Monde', Destination: 'Destination' },
      constellations: {
        travel: { full: 'Monde du voyage', short: 'Voyage' }, drive: { full: 'Conduite et navigation', short: 'Conduite et navigation' }, style: { full: 'Style et shopping', short: 'Style et shopping' },
        play: { full: 'Jouer et gagner', short: 'Jouer et gagner' }, taste: { full: 'Table et goût', short: 'Table et goût' }, concierge: { full: 'Concierge', short: 'Concierge' }
      },
      categories: {
        travel: 'Voyage', flights: 'Vols', hotels: 'Hôtels', carRentals: 'Location de voitures', cars: 'Voitures', yachts: 'Yachts', shopping: 'Shopping', fashion: 'Mode',
        beauty: 'Beauté', electronics: 'Électronique', entertainment: 'Divertissement', events: 'Événements', sports: 'Sports', sportsbooks: 'Paris sportifs',
        food: 'Nourriture', restaurants: 'Restaurants', concierge: 'Concierge', promoCodes: 'Codes promotionnels', deals: 'Offres'
      },
      suggestionTopics: {
        travel: 'Voyage', diningNightlife: 'Restaurant et vie nocturne', shopping: 'Shopping', villasStays: 'Villas et séjours',
        yachtRentals: 'Location de yachts', carRentals: 'Location de voitures', sportsbooks: 'Paris sportifs', eventsEntertainment: 'Événements et divertissement'
      }
    },
    categories: {
      shopping: 'Shopping', fashion: 'Mode', electronics: 'Électronique', beauty: 'Beauté', home: 'Maison', travel: 'Voyage', sport: 'Sport', betting: 'Paris',
      restaurants: 'Restaurants', food: 'Alimentation', entertainment: 'Divertissement', kosherRestaurants: 'Restaurants casher', kosherStores: 'Magasins casher'
    },
    categoryDescriptions: { shopping: 'Essentiels du quotidien et économies premium en magasin.', fashion: 'Style, vêtements, chaussures et réductions des détaillants de mode.', electronics: 'Appareils, accessoires et offres technologiques gaming.', beauty: 'Soins de la peau, cosmétiques et offres bien-être.', home: 'Meubles, décoration et économies pour la maison.', travel: 'Hôtels, vols, location de voitures et offres de vacances.', sport: 'Marques de fitness, équipements et réductions sur les vêtements de sport.', betting: 'Promotions de bookmakers et offres liées aux paris.', restaurants: 'Haute gastronomie, tables du chef et lieux nocturnes sélectionnés dans les plus belles villes du monde.', food: 'Livraison de repas, épicerie et économies sur les abonnements.', entertainment: 'Streaming, événements, cinémas et offres de jeux.', kosherRestaurants: 'Restaurants casher certifiés, traiteur et livraison dans les grandes villes américaines.', kosherStores: 'Épiceries, boucheries et marchés casher spécialisés dans les grandes villes américaines.' },
    buttons: { viewDeals: 'Voir les offres', getDeal: 'Obtenir l’offre', visitStore: 'Visiter la boutique', copyCode: 'Copier le code', search: 'Rechercher', popularSearches: 'Recherches populaires' },
    search: { placeholder: 'Recherchez des offres, boutiques, restaurants et plus', results: 'Résultats de recherche', noResults: 'Aucun résultat trouvé pour votre recherche.', popular: { carRentals: 'Location de voitures', yachtRentals: 'Location de yachts', sportsbookBonuses: 'Bonus de paris sportifs', vacationRentals: 'Locations de vacances', miamiExperiences: 'Expériences à Miami', restaurantsNightlife: 'Restaurants et vie nocturne' } },
    home: { heroTitle: 'Offres mondiales, codes promo et bons plans lifestyle', heroSubtitle: 'Découvrez des réductions vérifiées dans le shopping, la restauration, le divertissement, les voyages, le sport et les paris.', featured: 'Offres en vedette' },
    category: { dealsAndPromoCodes: 'offres et codes promo', noCodeNeeded: 'Aucun code requis', ends: 'Se termine le', storesDirectory: 'Répertoire des boutiques', exploreStores: 'Découvrez des boutiques premium et des offres actives', couponSystem: 'Système de coupons', verifiedDeals: 'Offres vérifiées dans le shopping, la restauration, les voyages et le divertissement', dealDescriptionTemplate: '{name} propose des économies premium dans la catégorie {category} avec des offres vérifiées et des liens d’affiliation optimisés.', kosherDescriptionTemplate: '{name} à {city}, {state} - certifié casher, offres vérifiées et liens d’affiliation optimisés.', allCategories: 'Toutes les catégories', dealDetail: 'Détail de l’offre', offerSummary: 'Résumé de l’offre', categoryLabel: 'Catégorie', discountLabel: 'Réduction', expirationLabel: 'Expiration', getThisDeal: 'Obtenir cette offre' },
    kosher: { rating: 'Note', reviews: 'avis', viewOnMap: 'Voir sur la carte', promoCode: 'Code promo' },
    legal: {
      privacyTitle: 'Politique de confidentialité et traitement des données', privacyBody: 'GORGONA ONE utilise une authentification sécurisée ainsi que des structures prêtes pour l’analyse, le suivi des affiliés et la monétisation.',
      termsTitle: 'Conditions d’utilisation et divulgations d’affiliation', termsBody: 'Toutes les offres et promotions doivent être vérifiées directement auprès du marchand ou du bookmaker avant utilisation.',
      cookiesTitle: 'Comment GORGONA ONE utilise les cookies', cookiesBody: 'Nous utilisons des cookies pour mémoriser les préférences linguistiques, stocker les données de session, améliorer les analyses et soutenir l’attribution des affiliés, tout en gardant une expérience rapide et personnalisée.',
      disclosureTitle: 'Comment fonctionnent les commissions d’affiliation', disclosureBody: 'GORGONA ONE peut percevoir des commissions lorsque les utilisateurs cliquent et complètent des actions qualifiées via des liens partenaires. Cela aide à soutenir la plateforme et à financer les outils de découverte.',
      agreementTitle: 'Conditions de partenariat marchands et affiliés', agreementBody: 'Les partenaires approuvés s’engagent à fournir des informations exactes sur les promotions, à respecter les exigences légales et à utiliser la plateforme selon les règles établies par GORGONA ONE.'
    },
    partnerForm: { title: 'Inscription partenaire', companyName: 'Nom de l’entreprise', website: 'Site web', contactEmail: 'E-mail de contact', category: 'Catégorie', submit: 'Postuler comme partenaire' , successSubmit: 'Candidature envoyée avec succès. Notre équipe vous contactera sous 2 jours ouvrés.' },
    common: { viewDetails: 'Voir les détails' },
    events: {
      marketplaceTitle: 'Billets et Événements', marketplaceSubtitle: 'Billets de sport et de concerts de fournisseurs de confiance, tous au même endroit.',
      categories: 'Catégories', sportsTickets: 'Billets de sport', concertTickets: 'Billets de concert',
      featuredEvents: 'Événements en vedette', trendingEvents: 'Événements tendance', upcomingEvents: 'Événements à venir',
      featuredSportsEvents: 'Événements sportifs en vedette', featuredConcerts: 'Concerts en vedette', comingSoon: 'Bientôt disponible.',
      priceRange: 'Fourchette de prix', teams: 'Équipes', previous: 'Précédent', next: 'Suivant', page: 'Page', of: 'sur',
      searchPlaceholder: 'Rechercher des événements, équipes, artistes ou lieux', allCategories: 'Toutes les catégories', allProviders: 'Tous les fournisseurs',
      eventDetails: 'Détails de l’événement', venue: 'Lieu', city: 'Ville', location: 'Emplacement', date: 'Date', time: 'Heure',
      ticketProviders: 'Fournisseurs de billets', buyTickets: 'Acheter des billets',
      categoryLabels: {
        basketball: 'Basketball', baseball: 'Baseball', hockey: 'Hockey', soccer: 'Football', tennis: 'Tennis', formula1: 'Formule 1', golf: 'Golf', 'ufc-boxing': 'UFC / Boxe', 'theater-broadway': 'Théâtre et Broadway', 'shows-entertainment': 'Spectacles et divertissement', festivals: 'Festivals', 'music-events': 'Événements musicaux', 'comedy-shows': 'Spectacles comiques', 'family-events': 'Événements familiaux', 'exhibitions-museums': 'Expositions et musées', 'gaming-esports': 'Gaming et esports', 'special-events': 'Événements spéciaux'
      }
    },
    rentals: { pill: 'Locations de luxe', title: 'Voitures, yachts, villas et expériences privées premium', subtitle: 'Une place de marché simple pour les locations haut de gamme et les réservations avec conciergerie à Miami et au-delà.', company: 'Entreprise', location: 'Emplacement', daily: 'Journalier', weekly: 'Hebdomadaire', reserve: 'Réserver' },
    yachts: { pill: 'Location de yachts', title: 'Charters privés de yachts et bateaux de luxe', subtitle: 'Réservez des yachts premium avec équipage complet pour des fêtes, croisières au coucher du soleil et aventures en mer.', company: 'Entreprise', location: 'Emplacement', capacity: 'Capacité', length: 'Longueur', price: 'Prix', guests: 'invités', reserve: 'Réserver' },
    vacationRentals: { pill: 'Locations de vacances', title: 'Villas de luxe, penthouses et maisons en bord de mer', subtitle: 'Séjours courts haut de gamme dans les quartiers les plus exclusifs de Miami.', location: 'Emplacement', guests: 'Invités', bedrooms: 'Chambres', nightlyRate: 'Tarif par nuit', reserve: 'Réserver' },
    experiences: { pill: 'Expériences à Miami', title: 'Activités inoubliables et expériences premium', subtitle: 'Des tours en hélicoptère aux fêtes en yacht, des expériences sélectionnées dans tout Miami.', location: 'Emplacement', duration: 'Durée', price: 'Prix', book: 'Réserver maintenant' },
    restaurantsNightlife: { pill: 'Restaurants et vie nocturne', title: 'Les meilleurs restaurants, clubs et rooftops', subtitle: 'Les restaurants et lieux nocturnes les plus emblématiques de Miami, tous au même endroit.', restaurants: 'Restaurants', nightlife: 'Vie nocturne', all: 'Tous', location: 'Emplacement', rating: 'Note' },
    sportsbookPage: { pill: 'Paris sportifs', title: 'Répertoire premium des bookmakers', subtitle: 'Découvrez les principaux bookmakers avec des pages de profil dédiées, la disponibilité par État et de futures sections de codes promo.', viewProfile: 'Voir le profil' },
    auth: { pill: 'Compte utilisateur', title: 'Bon retour', subtitle: 'Connectez-vous pour gérer vos offres, coupons et réservations enregistrés.', email: 'E-mail', password: 'Mot de passe', confirmPassword: 'Confirmer le mot de passe', name: 'Nom complet', continueLabel: 'Continuer', signInTab: 'Se connecter', signUpTab: "S'inscrire", signOut: 'Se déconnecter', signedInAs: 'Connecté en tant que', errorRequired: 'Veuillez remplir tous les champs obligatoires.', errorEmail: 'Veuillez saisir une adresse e-mail valide.', errorPasswordLength: 'Le mot de passe doit contenir au moins 6 caractères.', errorPasswordMatch: 'Les mots de passe ne correspondent pas.', errorInvalidCredentials: 'E-mail ou mot de passe incorrect.', errorEmailInUse: 'Un compte avec cet e-mail existe déjà.', successSignUp: 'Compte créé avec succès. Bienvenue !', successSignIn: 'Connexion réussie.', loading: 'Veuillez patienter...' }
  },
  pl: {
    nav: { home: 'Strona główna', stores: 'Sklepy', coupons: 'Kupony', rentals: 'Wynajem', sportsbook: 'Zakłady sportowe', events: 'Wydarzenia', admin: 'Administracja', search: 'Szukaj ofert', travel: 'Podróże', villas: 'Wille', yachts: 'Jachty', cars: 'Samochody', discoveryRoom: 'Pokój odkrycia' },
    ai: {
      themeLight: 'Jasny', themeDark: 'Ciemny', switchToLight: 'Przejdź na jasną atmosferę', switchToDark: 'Przejdź na ciemną atmosferę',
      askAria: 'Zapytaj Gorgona One AI', micSpeak: 'Wymów swoją prośbę', micStop: 'Zatrzymaj słuchanie', micUnsupported: 'Wejście głosowe nie jest obsługiwane w tej przeglądarce',
      listening: 'Słuchanie', surfacing: 'Wyświetlanie', openConcierge: 'Otwórz concierge pokoju odkrycia', goBack: 'Wstecz',
      introText: 'Zapytaj o cokolwiek w ekosystemie GORGONA ONE — podróże, jedzenie, jachty, wille, wydarzenia — i otrzymaj eleganckie, spersonalizowane rekomendacje.',
      couldntReach: 'Nie mogę teraz dodzwonić się do concierge - spróbuj ponownie.', tempUnavailable: 'Concierge jest czasowo niedostępny. Spróbuj ponownie za chwilę.', open: 'Otwórz',
      listeningPlaceholder: 'Słuchanie…', askPlaceholder: 'Zapytaj concierge\'a o cokolwiek…', startVoiceInput: 'Rozpocznij wejście głosowe', stopVoiceInput: 'Zatrzymaj wejście głosowe',
      turnOnSpokenReplies: 'Włącz odpowiedzi mówione', turnOffSpokenReplies: 'Wyłącz odpowiedzi mówione', askButton: 'Zapytaj', conciergeVoice: 'Głos concierge\'a',
      genderFemale: 'Żeńskie', genderMale: 'Męskie', addToHomeScreenVoiceHint: 'Dodaj GORGONA ONE na ekran główny, aby wybrać męski lub żeński głos concierge\'a',
      aiDockLabel: 'Panel sztucznej inteligencji', gorgonaConcierge: 'Concierge GORGONA ONE', discoveryRoomLink: 'Pokój odkrycia', closeAiDock: 'Zamknij panel sztucznej inteligencji', aiDockAriaLabel: 'Panel sztucznej inteligencji GORGONA ONE',
      discoveryRoomTitle: 'Pokój odkrycia', closeDiscoveryRoom: 'Zamknij pokój odkrycia', askFromAnywhere: 'Zapytaj z dowolnego miejsca…', resultsTitle: 'Wyniki',
      savedTitle: 'Zapisane', savedEmpty: 'Przypnij wyniki, aby je tutaj zachować — pozostają podczas przeglądania.',
      recentSearches: 'Ostatnie wyszukiwania', clear: 'Wyczyść', recentEmpty: 'Twoje wyszukiwania pojawiają się tutaj i są przechowywane na całej stronie.',
      reuseSearch: 'Użyj ponownie to wyszukiwanie', removeSaved: 'Usuń z zapisanych', save: 'Zapisz', savedState: 'Zapisane', returnToAI: 'Powróć do Gorgona One AI',
      addToHomeScreen: 'Dodaj GORGONA ONE na ekran główny', installHint: 'Zainstaluj aplikację, aby uzyskać skoncentrowane, niezależne doświadczenie concierge\'a.',
      install: 'Zainstaluj', notNow: 'Nie teraz', iosShareHintPre: 'Dotknij', iosShareHintPost: 'Udostępnij, następnie', addToHomeScreenQuoted: '"Dodaj na ekran główny"', gotIt: 'Rozumiem',
      discoveryEyebrow: 'Pokój odkrycia · Concierge sztucznej inteligencji', discoveryHeroTitle: 'Zapytaj o cokolwiek. Zajmiemy się tym stąd.',
      discoveryHeroSubtitle: 'Osobisty concierge sztucznej inteligencji dla całego ekosystemu GORGONA ONE — podróże, restauracje, zakwaterowanie, jachty, samochody, bukmachery i wydarzenia. Wpisz lub mów, a my poprowadzę cię do właściwej części ekosystemu.',
      capabilitiesEyebrow: 'Możliwości', capabilitiesTitle: 'Jeden asystent, cały ekosystem.',
      capTravelTitle: 'Planowanie podróży', capTravelCopy: 'Plany podróży, loty i zakwaterowanie dostosowane do Twojego stylu podróżowania.',
      capDiningTitle: 'Restauracja i życie nocne', capDiningCopy: 'Stoły, bary szefa i lokale nocne, dostosowane do chwili.',
      capShoppingTitle: 'Poradnik zakupów', capShoppingCopy: 'Osobiste wybory z zakresu mody, technologii i stylu życia.',
      capExperienceTitle: 'Kuratora doświadczeń', capExperienceCopy: 'Jachty, wille, wydarzenia i życie nocne, dostosowane do chwili.',
      geminiNotConnected: 'Pokój odkrycia nie jest jeszcze połączony z Gemini - dodaj GEMINI_API_KEY do środowiska, aby przywieźć concierge\'a sztucznej inteligencji online. W międzyczasie zapoznaj się z Podróżami, Restauracjami, Zakupami, Willami, Jachtami, Wynajmem samochodów, Bukmacherami i Wydarzeniami z powyższej nawigacji.',
      geminiSnag: 'Concierge miał problem z dotarciem do Gemini w tej chwili. Spróbuj ponownie za chwilę.',
      geminiRateLimited: 'Concierge w tej chwili otrzymuje wiele żądań - spróbuj ponownie za kilka sekund.',
      geminiInvalidKey: 'Klucz Gemini concierge\'a wygląda na nieprawidłowy lub nieautoryzowany. Sprawdź GEMINI_API_KEY.',
      geminiNoReply: 'Nie do końca zrozumiałem - możesz przeformułować?',
      geminiTimeout: 'Concierge trwa dłużej niż oczekiwano na odpowiedź. Spróbuj ponownie za chwilę.',
      geminiUnavailable: 'Concierge jest czasowo niedostępny. Spróbuj ponownie za chwilę.',
      starterPrompts: ['Zaplanuj weekend w Miami', 'Znajdź jacht dla 8 gości', 'Zarezerwuj stół na obiad urodzinowy', 'Najlepsze oferty zakładów sportowych teraz'],
      examplePrompts: ['Znajdź mi Lamborghini w Miami', 'Pokaż wynajem jachtów poniżej $5000', 'Najlepsze bonusy zakładów sportowych dziś wieczorem', 'Luksusowe hotele w Miami Beach'],
      entityTypes: { Yacht: 'Jacht', Stay: 'Pobyt', Experience: 'Doświadczenie', Nightlife: 'Życie nocne', Restaurant: 'Restauracja', Car: 'Samochód', Event: 'Wydarzenie', Store: 'Sklep', Category: 'Kategoria', World: 'Świat', Destination: 'Cel' },
      constellations: {
        travel: { full: 'Świat podróży', short: 'Podróże' }, drive: { full: 'Jazda i żeglowanie', short: 'Jazda i żeglowanie' }, style: { full: 'Styl i zakupy', short: 'Styl i zakupy' },
        play: { full: 'Graj i wygrywaj', short: 'Graj i wygrywaj' }, taste: { full: 'Stół i smak', short: 'Stół i smak' }, concierge: { full: 'Concierge', short: 'Concierge' }
      },
      categories: {
        travel: 'Podróże', flights: 'Loty', hotels: 'Hotele', carRentals: 'Wynajem samochodów', cars: 'Samochody', yachts: 'Jachty', shopping: 'Zakupy', fashion: 'Moda',
        beauty: 'Piękno', electronics: 'Elektronika', entertainment: 'Rozrywka', events: 'Wydarzenia', sports: 'Sport', sportsbooks: 'Bukmachery',
        food: 'Jedzenie', restaurants: 'Restauracje', concierge: 'Concierge', promoCodes: 'Kody promocyjne', deals: 'Oferty'
      },
      suggestionTopics: {
        travel: 'Podróże', diningNightlife: 'Restauracja i życie nocne', shopping: 'Zakupy', villasStays: 'Wille i pobyty',
        yachtRentals: 'Wynajem jachtów', carRentals: 'Wynajem samochodów', sportsbooks: 'Bukmachery', eventsEntertainment: 'Wydarzenia i rozrywka'
      }
    },
    categories: {
      shopping: 'Zakupy', fashion: 'Moda', electronics: 'Elektronika', beauty: 'Uroda', home: 'Dom', travel: 'Podróże', sport: 'Sport', betting: 'Zakłady',
      restaurants: 'Restauracje', food: 'Jedzenie', entertainment: 'Rozrywka', kosherRestaurants: 'Restauracje koszerne', kosherStores: 'Sklepy koszerne'
    },
    categoryDescriptions: { shopping: 'Codzienne artykuły i premium oszczędności detaliczne.', fashion: 'Styl, odzież, obuwie i zniżki od sprzedawców mody.', electronics: 'Urządzenia, akcesoria i oferty technologii gamingowej.', beauty: 'Pielęgnacja skóry, kosmetyki i oferty wellness.', home: 'Meble, dekoracje i oszczędności na remont domu.', travel: 'Hotele, loty, wynajem samochodów i oferty wakacyjne.', sport: 'Marki fitness, sprzęt i zniżki na odzież sportową.', betting: 'Promocje bukmacherskie i oferty związane z zakładami.', restaurants: 'Wykwintna kuchnia, stoły szefa kuchni i lokale nocne wyselekcjonowane w najlepszych miastach świata.', food: 'Dostawa jedzenia, artykuły spożywcze i oszczędności na subskrypcjach.', entertainment: 'Streaming, wydarzenia, kina i oferty gamingowe.', kosherRestaurants: 'Certyfikowane restauracje koszerne, catering i dostawa w głównych miastach USA.', kosherStores: 'Koszerne sklepy spożywcze, sklepy mięsne i wyspecjalizowane rynki w głównych miastach USA.' },
    buttons: { viewDeals: 'Zobacz oferty', getDeal: 'Odbierz ofertę', visitStore: 'Odwiedź sklep', copyCode: 'Kopiuj kod', search: 'Szukaj', popularSearches: 'Popularne wyszukiwania' },
    search: { placeholder: 'Szukaj ofert, sklepów, restauracji i nie tylko', results: 'Wyniki wyszukiwania', noResults: 'Nie znaleziono wyników dla Twojego wyszukiwania.', popular: { carRentals: 'Wynajem samochodów', yachtRentals: 'Wynajem jachtów', sportsbookBonuses: 'Bonusy bukmacherskie', vacationRentals: 'Wynajem wakacyjny', miamiExperiences: 'Doświadczenia w Miami', restaurantsNightlife: 'Restauracje i życie nocne' } },
    home: { heroTitle: 'Globalne oferty, kody promocyjne i propozycje lifestyle', heroSubtitle: 'Odkryj zweryfikowane zniżki w zakupach, restauracjach, rozrywce, podróżach, sporcie i zakładach.', featured: 'Polecane oferty' },
    category: { dealsAndPromoCodes: 'oferty i kody promocyjne', noCodeNeeded: 'Kod niepotrzebny', ends: 'Kończy się', storesDirectory: 'Katalog sklepów', exploreStores: 'Odkryj sklepy premium i aktualne oferty', couponSystem: 'System kuponów', verifiedDeals: 'Zweryfikowane oferty w zakupach, restauracjach, podróżach i rozrywce', dealDescriptionTemplate: '{name} oferuje premium oszczędności w kategorii {category} ze zweryfikowanymi ofertami i zoptymalizowanymi linkami partnerskimi.', kosherDescriptionTemplate: '{name} w {city}, {state} - certyfikat koszerny, zweryfikowane oferty i zoptymalizowane linki partnerskie.', allCategories: 'Wszystkie kategorie', dealDetail: 'Szczegóły oferty', offerSummary: 'Podsumowanie oferty', categoryLabel: 'Kategoria', discountLabel: 'Zniżka', expirationLabel: 'Wygasa', getThisDeal: 'Odbierz tę ofertę' },
    kosher: { rating: 'Ocena', reviews: 'opinii', viewOnMap: 'Zobacz na mapie', promoCode: 'Kod promocyjny' },
    legal: {
      privacyTitle: 'Polityka prywatności i przetwarzanie danych', privacyBody: 'GORGONA ONE korzysta z bezpiecznego uwierzytelniania oraz struktur gotowych do analityki, śledzenia partnerów i monetyzacji.',
      termsTitle: 'Warunki korzystania i informacje o programie partnerskim', termsBody: 'Wszystkie oferty i promocje należy zweryfikować bezpośrednio u sprzedawcy lub bukmachera przed skorzystaniem z nich.',
      cookiesTitle: 'Jak GORGONA ONE wykorzystuje pliki cookie', cookiesBody: 'Używamy plików cookie, aby zapamiętywać preferencje językowe, przechowywać dane sesji, ulepszać analitykę i wspierać atrybucję partnerską, zachowując szybkie i spersonalizowane doświadczenie.',
      disclosureTitle: 'Jak działają prowizje partnerskie', disclosureBody: 'GORGONA ONE może uzyskiwać prowizje, gdy użytkownicy klikają i wykonują kwalifikujące się działania za pośrednictwem linków partnerskich. Pomaga to utrzymać platformę i finansować narzędzia wyszukiwania.',
      agreementTitle: 'Warunki współpracy dla sprzedawców i partnerów', agreementBody: 'Zatwierdzeni partnerzy zobowiązują się dostarczać dokładne informacje o promocjach, przestrzegać wymogów prawnych i korzystać z platformy zgodnie z zasadami ustalonymi przez GORGONA ONE.'
    },
    partnerForm: { title: 'Rejestracja partnera', companyName: 'Nazwa firmy', website: 'Strona internetowa', contactEmail: 'E-mail kontaktowy', category: 'Kategoria', submit: 'Aplikuj jako partner' , successSubmit: 'Zgłoszenie zostało pomyślnie wysłane. Nasz zespół skontaktuje się w ciągu 2 dni roboczych.' },
    common: { viewDetails: 'Zobacz szczegóły' },
    events: {
      marketplaceTitle: 'Bilety i Wydarzenia', marketplaceSubtitle: 'Bilety sportowe i na koncerty od zaufanych dostawców, wszystko w jednym miejscu.',
      categories: 'Kategorie', sportsTickets: 'Bilety sportowe', concertTickets: 'Bilety na koncerty',
      featuredEvents: 'Polecane wydarzenia', trendingEvents: 'Popularne wydarzenia', upcomingEvents: 'Nadchodzące wydarzenia',
      featuredSportsEvents: 'Polecane wydarzenia sportowe', featuredConcerts: 'Polecane koncerty', comingSoon: 'Już wkrótce.',
      priceRange: 'Zakres cen', teams: 'Drużyny', previous: 'Poprzednia', next: 'Następna', page: 'Strona', of: 'z',
      searchPlaceholder: 'Szukaj wydarzeń, drużyn, artystów lub miejsc', allCategories: 'Wszystkie kategorie', allProviders: 'Wszyscy dostawcy',
      eventDetails: 'Szczegóły wydarzenia', venue: 'Miejsce', city: 'Miasto', location: 'Lokalizacja', date: 'Data', time: 'Godzina',
      ticketProviders: 'Dostawcy biletów', buyTickets: 'Kup bilety',
      categoryLabels: {
        basketball: 'Koszykówka', baseball: 'Baseball', hockey: 'Hokej', soccer: 'Piłka nożna', tennis: 'Tenis', formula1: 'Formuła 1', golf: 'Golf', 'ufc-boxing': 'UFC / Boks', 'theater-broadway': 'Teatr i Broadway', 'shows-entertainment': 'Pokazy i rozrywka', festivals: 'Festiwale', 'music-events': 'Wydarzenia muzyczne', 'comedy-shows': 'Pokazy komediowe', 'family-events': 'Wydarzenia rodzinne', 'exhibitions-museums': 'Wystawy i muzea', 'gaming-esports': 'Gaming i e-sport', 'special-events': 'Wydarzenia specjalne'
      }
    },
    rentals: { pill: 'Wynajem luksusowy', title: 'Luksusowe samochody, jachty, wille i prywatne doświadczenia', subtitle: 'Prosty rynek wynajmu o wysokiej wartości i rezerwacji z obsługą concierge w Miami i poza nim.', company: 'Firma', location: 'Lokalizacja', daily: 'Dziennie', weekly: 'Tygodniowo', reserve: 'Zarezerwuj' },
    yachts: { pill: 'Wynajem jachtów', title: 'Prywatne czartery jachtów i luksusowe łodzie', subtitle: 'Zarezerwuj luksusowe jachty z pełną załogą na imprezy, rejsy o zachodzie słońca i morskie przygody.', company: 'Firma', location: 'Lokalizacja', capacity: 'Pojemność', length: 'Długość', price: 'Cena', guests: 'gości', reserve: 'Zarezerwuj' },
    vacationRentals: { pill: 'Wynajem wakacyjny', title: 'Luksusowe wille, penthouse\'y i domy nad wodą', subtitle: 'Ekskluzywne krótkoterminowe pobyty w najbardziej prestiżowych dzielnicach Miami.', location: 'Lokalizacja', guests: 'Goście', bedrooms: 'Sypialnie', nightlyRate: 'Cena za noc', reserve: 'Zarezerwuj' },
    experiences: { pill: 'Atrakcje Miami', title: 'Niezapomniane atrakcje i ekskluzywne doświadczenia', subtitle: 'Od lotów helikopterem po imprezy na jachtach - starannie wybrane atrakcje w całym Miami.', location: 'Lokalizacja', duration: 'Czas trwania', price: 'Cena', book: 'Zarezerwuj teraz' },
    restaurantsNightlife: { pill: 'Restauracje i życie nocne', title: 'Najlepsze restauracje, kluby i tarasy na dachu', subtitle: 'Najbardziej charakterystyczne restauracje i lokale nocne Miami w jednym miejscu.', restaurants: 'Restauracje', nightlife: 'Życie nocne', all: 'Wszystkie', location: 'Lokalizacja', rating: 'Ocena' },
    sportsbookPage: { pill: 'Zakłady sportowe', title: 'Katalog premium bukmacherów', subtitle: 'Odkryj największe firmy bukmacherskie z dedykowanymi stronami profilowymi, dostępnością wg stanu i przyszłymi sekcjami kodów promocyjnych.', viewProfile: 'Zobacz profil' },
    auth: { pill: 'Konto użytkownika', title: 'Witaj ponownie', subtitle: 'Zaloguj się, aby zarządzać zapisanymi ofertami, kuponami i rezerwacjami.', email: 'E-mail', password: 'Hasło', confirmPassword: 'Potwierdź hasło', name: 'Imię i nazwisko', continueLabel: 'Kontynuuj', signInTab: 'Zaloguj się', signUpTab: 'Zarejestruj się', signOut: 'Wyloguj się', signedInAs: 'Zalogowano jako', errorRequired: 'Proszę wypełnić wszystkie wymagane pola.', errorEmail: 'Proszę podać prawidłowy adres e-mail.', errorPasswordLength: 'Hasło musi mieć co najmniej 6 znaków.', errorPasswordMatch: 'Hasła nie są zgodne.', errorInvalidCredentials: 'Nieprawidłowy e-mail lub hasło.', errorEmailInUse: 'Konto z tym adresem e-mail już istnieje.', successSignUp: 'Konto zostało utworzone pomyślnie. Witamy!', successSignIn: 'Zalogowano pomyślnie.', loading: 'Proszę czekać...' }
  }
};

function deepMerge(base, override) {
  const result = { ...base };
  for (const key of Object.keys(override || {})) {
    const value = override[key];
    result[key] = value && typeof value === 'object' && !Array.isArray(value) ? deepMerge(base[key] || {}, value) : value;
  }
  return result;
}

// Any key missing from a locale falls back to the English value for that
// key specifically (not the whole locale), so a partially translated
// language never renders `undefined`.
export function getTranslation(locale) {
  const override = translations[locale];
  if (!override || locale === 'en') {
    return translations.en;
  }
  return deepMerge(translations.en, override);
}
