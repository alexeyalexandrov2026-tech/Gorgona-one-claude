// Each locale is a partial override merged onto `en` at read time (see
// getTranslation below), so a language only needs to define the keys it has
// translations for - anything missing falls back to English automatically
// instead of ever rendering `undefined`.
export const translations = {
  en: {
    nav: { home: 'Home', stores: 'Stores', coupons: 'Coupons', rentals: 'Rentals', sportsbook: 'Sportsbook', events: 'Events', admin: 'Admin', search: 'Search deals' },
    categories: {
      shopping: 'Shopping', fashion: 'Fashion', electronics: 'Electronics', beauty: 'Beauty', home: 'Home', travel: 'Travel', sport: 'Sport', betting: 'Betting',
      restaurants: 'Restaurants', food: 'Food', entertainment: 'Entertainment', kosherRestaurants: 'Kosher Restaurants', kosherStores: 'Kosher Stores'
    },
    categoryDescriptions: { shopping: 'Everyday essentials and premium retail savings.', fashion: 'Style, apparel, footwear, and fashion retailer discounts.', electronics: 'Devices, accessories, and gaming tech offers.', beauty: 'Skincare, cosmetics, and wellness deals.', home: 'Furniture, decor, and home improvement savings.', travel: 'Hotels, flights, car rentals, and vacation offers.', sport: 'Fitness brands, equipment, and athletic wear discounts.', betting: 'Sportsbook promos and betting-related offers.', restaurants: 'Fast food, cafes, and restaurant reward deals.', food: 'Food delivery, grocery, and subscription savings.', entertainment: 'Streaming, events, cinemas, and gaming deals.', kosherRestaurants: 'Certified kosher dining, catering, and delivery across major US cities.', kosherStores: 'Kosher grocers, butchers, and specialty markets across major US cities.' },
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
    partnerForm: { title: 'Partner registration', companyName: 'Company name', website: 'Website', contactEmail: 'Contact email', category: 'Category', submit: 'Apply as partner' },
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
    sportsbookPage: { pill: 'Sports Betting', title: 'Premium sportsbook directory', subtitle: 'Explore the major sportsbook companies with dedicated profile pages, state availability, and future-ready promo code sections.', viewProfile: 'View Profile' },
    auth: { pill: 'User System', title: 'Welcome back', subtitle: 'Supabase authentication is ready for sign-in and registration flows.', email: 'Email', password: 'Password', continueLabel: 'Continue' }
  },
  ru: {
    nav: { home: 'Главная', stores: 'Магазины', coupons: 'Купоны', rentals: 'Аренда', sportsbook: 'Спортивные ставки', events: 'События', admin: 'Админ', search: 'Поиск предложений' },
    categories: {
      shopping: 'Шопинг', fashion: 'Мода', electronics: 'Электроника', beauty: 'Красота', home: 'Дом', travel: 'Путешествия', sport: 'Спорт', betting: 'Ставки',
      restaurants: 'Рестораны', food: 'Еда', entertainment: 'Развлечения', kosherRestaurants: 'Кошерные рестораны', kosherStores: 'Кошерные магазины'
    },
    categoryDescriptions: { shopping: 'Повседневные товары и выгодные скидки в рознице.', fashion: 'Стиль, одежда, обувь и скидки от модных ритейлеров.', electronics: 'Устройства, аксессуары и предложения по игровой технике.', beauty: 'Уход за кожей, косметика и товары для здоровья.', home: 'Мебель, декор и скидки на ремонт дома.', travel: 'Отели, авиабилеты, аренда авто и предложения для отпуска.', sport: 'Спортивные бренды, инвентарь и скидки на спортивную одежду.', betting: 'Промоакции букмекеров и предложения по ставкам.', restaurants: 'Фастфуд, кафе и бонусные предложения ресторанов.', food: 'Доставка еды, продукты и скидки на подписки.', entertainment: 'Стриминг, мероприятия, кино и игровые предложения.', kosherRestaurants: 'Сертифицированные кошерные рестораны, кейтеринг и доставка в крупных городах США.', kosherStores: 'Кошерные продуктовые магазины, мясные лавки и специализированные рынки в крупных городах США.' },
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
    partnerForm: { title: 'Регистрация партнёра', companyName: 'Название компании', website: 'Веб-сайт', contactEmail: 'Контактный email', category: 'Категория', submit: 'Подать заявку' },
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
    sportsbookPage: { pill: 'Спортивные ставки', title: 'Премиальный каталог букмекеров', subtitle: 'Изучите крупнейшие букмекерские компании со страницами профилей, доступностью по штатам и разделами промокодов.', viewProfile: 'Смотреть профиль' },
    auth: { pill: 'Система пользователей', title: 'С возвращением', subtitle: 'Аутентификация Supabase готова для входа и регистрации.', email: 'Email', password: 'Пароль', continueLabel: 'Продолжить' }
  },
  es: {
    nav: { home: 'Inicio', stores: 'Tiendas', coupons: 'Cupones', rentals: 'Alquileres', sportsbook: 'Apuestas deportivas', events: 'Eventos', admin: 'Administración', search: 'Buscar ofertas' },
    categories: {
      shopping: 'Compras', fashion: 'Moda', electronics: 'Electrónica', beauty: 'Belleza', home: 'Hogar', travel: 'Viajes', sport: 'Deporte', betting: 'Apuestas',
      restaurants: 'Restaurantes', food: 'Comida', entertainment: 'Entretenimiento', kosherRestaurants: 'Restaurantes Kosher', kosherStores: 'Tiendas Kosher'
    },
    categoryDescriptions: { shopping: 'Esenciales del día a día y grandes ahorros minoristas.', fashion: 'Estilo, ropa, calzado y descuentos de tiendas de moda.', electronics: 'Dispositivos, accesorios y ofertas de tecnología para gaming.', beauty: 'Cuidado de la piel, cosméticos y ofertas de bienestar.', home: 'Muebles, decoración y ahorros para el hogar.', travel: 'Hoteles, vuelos, alquiler de autos y ofertas vacacionales.', sport: 'Marcas deportivas, equipo y descuentos en ropa atlética.', betting: 'Promociones de casas de apuestas y ofertas relacionadas.', restaurants: 'Comida rápida, cafés y recompensas de restaurantes.', food: 'Entrega de comida, supermercado y ahorros en suscripciones.', entertainment: 'Streaming, eventos, cines y ofertas de videojuegos.', kosherRestaurants: 'Restaurantes kosher certificados, catering y entrega en las principales ciudades de EE. UU.', kosherStores: 'Tiendas de comestibles, carnicerías y mercados kosher especializados en las principales ciudades de EE. UU.' },
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
    partnerForm: { title: 'Registro de socio', companyName: 'Nombre de la empresa', website: 'Sitio web', contactEmail: 'Correo de contacto', category: 'Categoría', submit: 'Solicitar ser socio' },
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
    sportsbookPage: { pill: 'Apuestas deportivas', title: 'Directorio premium de casas de apuestas', subtitle: 'Explora las principales casas de apuestas con páginas de perfil dedicadas, disponibilidad por estado y secciones de códigos promocionales.', viewProfile: 'Ver perfil' },
    auth: { pill: 'Sistema de usuarios', title: 'Bienvenido de nuevo', subtitle: 'La autenticación de Supabase está lista para el inicio de sesión y el registro.', email: 'Correo electrónico', password: 'Contraseña', continueLabel: 'Continuar' }
  },
  he: {
    nav: { home: 'בית', stores: 'חנויות', coupons: 'קופונים', rentals: 'השכרות', sportsbook: 'הימורי ספורט', events: 'אירועים', admin: 'ניהול', search: 'חיפוש מבצעים' },
    categories: {
      shopping: 'קניות', fashion: 'אופנה', electronics: 'אלקטרוניקה', beauty: 'יופי', home: 'בית', travel: 'טיולים', sport: 'ספורט', betting: 'הימורים',
      restaurants: 'מסעדות', food: 'אוכל', entertainment: 'בידור', kosherRestaurants: 'מסעדות כשרות', kosherStores: 'חנויות כשרות'
    },
    categoryDescriptions: { shopping: 'מוצרי יומיום וחיסכון קמעונאי פרימיום.', fashion: 'סגנון, ביגוד, הנעלה והנחות מקמעונאי אופנה.', electronics: 'מכשירים, אביזרים והצעות טכנולוגיית גיימינג.', beauty: 'טיפוח עור, קוסמטיקה ומבצעי בריאות.', home: 'רהיטים, עיצוב וחיסכון בשיפוץ הבית.', travel: 'מלונות, טיסות, השכרת רכב והצעות לחופשה.', sport: 'מותגי כושר, ציוד והנחות על ביגוד ספורט.', betting: 'מבצעי הימורי ספורט והצעות נלוות.', restaurants: 'אוכל מהיר, בתי קפה ותגמולי מסעדות.', food: 'משלוחי אוכל, מכולת וחיסכון במנויים.', entertainment: 'סטרימינג, אירועים, קולנוע והצעות גיימינג.', kosherRestaurants: 'מסעדות כשרות מוסמכות, קייטרינג ומשלוחים בערים המרכזיות בארה"ב.', kosherStores: 'מכולות, אטליזים ושווקים כשרים ייעודיים בערים המרכזיות בארה"ב.' },
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
    partnerForm: { title: 'רישום שותף', companyName: 'שם החברה', website: 'אתר אינטרנט', contactEmail: 'אימייל ליצירת קשר', category: 'קטגוריה', submit: 'הגש בקשה כשותף' },
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
    sportsbookPage: { pill: 'הימורי ספורט', title: 'מדריך פרימיום להימורי ספורט', subtitle: 'גלו את חברות ההימורים המובילות עם דפי פרופיל ייעודיים, זמינות לפי מדינה וקטעי קודי קופון עתידיים.', viewProfile: 'צפה בפרופיל' },
    auth: { pill: 'מערכת משתמשים', title: 'ברוך שובך', subtitle: 'האימות של Supabase מוכן לתהליכי כניסה והרשמה.', email: 'אימייל', password: 'סיסמה', continueLabel: 'המשך' }
  },
  zh: {
    nav: { home: '首页', stores: '商店', coupons: '优惠券', rentals: '租赁', sportsbook: '体育博彩', events: '活动', admin: '管理后台', search: '搜索优惠' },
    categories: {
      shopping: '购物', fashion: '时尚', electronics: '电子产品', beauty: '美妆', home: '家居', travel: '旅行', sport: '运动', betting: '博彩',
      restaurants: '餐厅', food: '美食', entertainment: '娱乐', kosherRestaurants: '洁食餐厅', kosherStores: '洁食商店'
    },
    categoryDescriptions: { shopping: '日常必需品与优质零售优惠。', fashion: '时尚零售商的风格、服饰、鞋类折扣。', electronics: '设备、配件及游戏科技优惠。', beauty: '护肤、化妆品及养生优惠。', home: '家具、装饰及家居改善优惠。', travel: '酒店、机票、租车及度假优惠。', sport: '健身品牌、装备及运动服饰折扣。', betting: '博彩促销及相关优惠。', restaurants: '快餐、咖啡馆及餐厅奖励优惠。', food: '送餐、杂货及订阅服务优惠。', entertainment: '流媒体、活动、影院及游戏优惠。', kosherRestaurants: '美国主要城市经认证的洁食餐饮、餐饮外送与配送服务。', kosherStores: '美国主要城市的洁食杂货店、肉铺与专卖市场。' },
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
    partnerForm: { title: '合作伙伴注册', companyName: '公司名称', website: '网站', contactEmail: '联系邮箱', category: '类别', submit: '申请成为合作伙伴' },
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
    sportsbookPage: { pill: '体育博彩', title: '高端博彩公司目录', subtitle: '探索主要博彩公司，提供专属资料页、各州可用性和未来的优惠码板块。', viewProfile: '查看资料' },
    auth: { pill: '用户系统', title: '欢迎回来', subtitle: 'Supabase 身份验证已准备好用于登录和注册流程。', email: '电子邮箱', password: '密码', continueLabel: '继续' }
  },
  pt: {
    nav: { home: 'Início', stores: 'Lojas', coupons: 'Cupons', rentals: 'Aluguéis', sportsbook: 'Apostas esportivas', events: 'Eventos', admin: 'Administração', search: 'Buscar ofertas' },
    categories: {
      shopping: 'Compras', fashion: 'Moda', electronics: 'Eletrônicos', beauty: 'Beleza', home: 'Casa', travel: 'Viagens', sport: 'Esporte', betting: 'Apostas',
      restaurants: 'Restaurantes', food: 'Comida', entertainment: 'Entretenimento', kosherRestaurants: 'Restaurantes Kosher', kosherStores: 'Lojas Kosher'
    },
    categoryDescriptions: { shopping: 'Itens essenciais do dia a dia e economias premium no varejo.', fashion: 'Estilo, roupas, calçados e descontos de lojas de moda.', electronics: 'Dispositivos, acessórios e ofertas de tecnologia para jogos.', beauty: 'Cuidados com a pele, cosméticos e ofertas de bem-estar.', home: 'Móveis, decoração e economias para reforma da casa.', travel: 'Hotéis, voos, aluguel de carros e ofertas de férias.', sport: 'Marcas fitness, equipamentos e descontos em roupas esportivas.', betting: 'Promoções de casas de apostas e ofertas relacionadas.', restaurants: 'Fast food, cafés e recompensas de restaurantes.', food: 'Entrega de comida, mercado e economias em assinaturas.', entertainment: 'Streaming, eventos, cinemas e ofertas de jogos.', kosherRestaurants: 'Restaurantes kosher certificados, catering e entrega nas principais cidades dos EUA.', kosherStores: 'Mercearias, açougues e mercados kosher especializados nas principais cidades dos EUA.' },
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
    partnerForm: { title: 'Cadastro de parceiro', companyName: 'Nome da empresa', website: 'Site', contactEmail: 'E-mail de contato', category: 'Categoria', submit: 'Solicitar parceria' },
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
    sportsbookPage: { pill: 'Apostas esportivas', title: 'Diretório premium de casas de apostas', subtitle: 'Explore as principais casas de apostas com páginas de perfil dedicadas, disponibilidade por estado e seções de códigos promocionais.', viewProfile: 'Ver perfil' },
    auth: { pill: 'Sistema de usuários', title: 'Bem-vindo de volta', subtitle: 'A autenticação Supabase está pronta para login e registro.', email: 'E-mail', password: 'Senha', continueLabel: 'Continuar' }
  },
  uk: {
    nav: { home: 'Головна', stores: 'Магазини', coupons: 'Купони', rentals: 'Оренда', sportsbook: 'Спортивні ставки', events: 'Події', admin: 'Адмін', search: 'Пошук пропозицій' },
    categories: {
      shopping: 'Шопінг', fashion: 'Мода', electronics: 'Електроніка', beauty: 'Краса', home: 'Дім', travel: 'Подорожі', sport: 'Спорт', betting: 'Ставки',
      restaurants: 'Ресторани', food: 'Їжа', entertainment: 'Розваги', kosherRestaurants: 'Кошерні ресторани', kosherStores: 'Кошерні магазини'
    },
    categoryDescriptions: { shopping: 'Повсякденні товари та вигідні знижки в роздрібній торгівлі.', fashion: 'Стиль, одяг, взуття та знижки від модних рітейлерів.', electronics: 'Пристрої, аксесуари та пропозиції ігрових технологій.', beauty: 'Догляд за шкірою, косметика та пропозиції для здоров\'я.', home: 'Меблі, декор та знижки на ремонт дому.', travel: 'Готелі, авіаквитки, оренда авто та пропозиції для відпустки.', sport: 'Спортивні бренди, інвентар та знижки на спортивний одяг.', betting: 'Промоакції букмекерів та пропозиції щодо ставок.', restaurants: 'Фастфуд, кафе та бонусні пропозиції ресторанів.', food: 'Доставка їжі, продукти та знижки на підписки.', entertainment: 'Стрімінг, події, кіно та ігрові пропозиції.', kosherRestaurants: 'Сертифіковані кошерні ресторани, кейтеринг та доставка у великих містах США.', kosherStores: 'Кошерні продуктові магазини, м\'ясні лавки та спеціалізовані ринки у великих містах США.' },
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
    partnerForm: { title: 'Реєстрація партнера', companyName: 'Назва компанії', website: 'Веб-сайт', contactEmail: 'Контактний email', category: 'Категорія', submit: 'Подати заявку' },
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
    sportsbookPage: { pill: 'Спортивні ставки', title: 'Преміальний каталог букмекерів', subtitle: 'Досліджуйте провідні букмекерські компанії зі сторінками профілів, доступністю за штатами та розділами промокодів.', viewProfile: 'Переглянути профіль' },
    auth: { pill: 'Система користувачів', title: 'З поверненням', subtitle: 'Автентифікація Supabase готова для входу та реєстрації.', email: 'Email', password: 'Пароль', continueLabel: 'Продовжити' }
  },
  ja: {
    nav: { home: 'ホーム', stores: 'ストア', coupons: 'クーポン', rentals: 'レンタル', sportsbook: 'スポーツブック', events: 'イベント', admin: '管理者', search: 'お得情報を検索' },
    categories: {
      shopping: 'ショッピング', fashion: 'ファッション', electronics: '家電', beauty: '美容', home: 'ホーム', travel: '旅行', sport: 'スポーツ', betting: 'ベッティング',
      restaurants: 'レストラン', food: 'フード', entertainment: 'エンターテインメント', kosherRestaurants: 'コーシャレストラン', kosherStores: 'コーシャストア'
    },
    categoryDescriptions: { shopping: '日常必需品とプレミアム小売の節約。', fashion: 'ファッション小売店のスタイル、アパレル、フットウェアの割引。', electronics: 'デバイス、アクセサリー、ゲーミングテック特典。', beauty: 'スキンケア、コスメ、ウェルネスのお得情報。', home: '家具、インテリア、住宅改修の節約。', travel: 'ホテル、航空券、レンタカー、休暇特典。', sport: 'フィットネスブランド、用具、アスレチックウェアの割引。', betting: 'スポーツブックのプロモーションとベッティング関連の特典。', restaurants: 'ファストフード、カフェ、レストランの特典。', food: 'フードデリバリー、食料品、サブスクリプションの節約。', entertainment: 'ストリーミング、イベント、映画館、ゲームのお得情報。', kosherRestaurants: '米国主要都市の認証コーシャダイニング、ケータリング、デリバリー。', kosherStores: '米国主要都市のコーシャ食料品店、精肉店、専門市場。' },
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
    partnerForm: { title: 'パートナー登録', companyName: '会社名', website: 'ウェブサイト', contactEmail: '連絡先メール', category: 'カテゴリー', submit: 'パートナーとして申し込む' },
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
    sportsbookPage: { pill: 'スポーツベッティング', title: 'プレミアムスポーツブックディレクトリ', subtitle: '専用プロフィールページ、州別対応状況、今後のプロモコードセクションを備えた主要スポーツブック企業をご覧ください。', viewProfile: 'プロフィールを見る' },
    auth: { pill: 'ユーザーシステム', title: 'おかえりなさい', subtitle: 'Supabase認証はサインインと登録フローの準備ができています。', email: 'メールアドレス', password: 'パスワード', continueLabel: '続ける' }
  },
  ko: {
    nav: { home: '홈', stores: '스토어', coupons: '쿠폰', rentals: '렌탈', sportsbook: '스포츠 베팅', events: '이벤트', admin: '관리자', search: '혜택 검색' },
    categories: {
      shopping: '쇼핑', fashion: '패션', electronics: '전자제품', beauty: '뷰티', home: '홈', travel: '여행', sport: '스포츠', betting: '베팅',
      restaurants: '레스토랑', food: '푸드', entertainment: '엔터테인먼트', kosherRestaurants: '코셔 레스토랑', kosherStores: '코셔 스토어'
    },
    categoryDescriptions: { shopping: '일상 필수품과 프리미엄 소매 절약.', fashion: '패션 소매업체의 스타일, 의류, 신발 할인.', electronics: '기기, 액세서리 및 게이밍 기술 혜택.', beauty: '스킨케어, 화장품 및 웰니스 혜택.', home: '가구, 인테리어 및 홈 개선 절약.', travel: '호텔, 항공편, 렌터카 및 휴가 혜택.', sport: '피트니스 브랜드, 장비 및 운동복 할인.', betting: '스포츠북 프로모션 및 베팅 관련 혜택.', restaurants: '패스트푸드, 카페 및 레스토랑 리워드 혜택.', food: '음식 배달, 식료품 및 구독 절약.', entertainment: '스트리밍, 이벤트, 영화관 및 게임 혜택.', kosherRestaurants: '미국 주요 도시의 인증된 코셔 다이닝, 케이터링 및 배달.', kosherStores: '미국 주요 도시의 코셔 식료품점, 정육점 및 전문 시장.' },
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
    partnerForm: { title: '파트너 등록', companyName: '회사명', website: '웹사이트', contactEmail: '연락처 이메일', category: '카테고리', submit: '파트너 신청' },
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
    sportsbookPage: { pill: '스포츠 베팅', title: '프리미엄 스포츠북 디렉토리', subtitle: '전용 프로필 페이지, 주별 이용 가능 여부, 향후 프로모 코드 섹션을 갖춘 주요 스포츠북 회사를 살펴보세요.', viewProfile: '프로필 보기' },
    auth: { pill: '사용자 시스템', title: '다시 오신 것을 환영합니다', subtitle: 'Supabase 인증이 로그인 및 등록 절차를 위해 준비되었습니다.', email: '이메일', password: '비밀번호', continueLabel: '계속' }
  },
  de: {
    nav: { home: 'Startseite', stores: 'Shops', coupons: 'Gutscheine', rentals: 'Vermietungen', sportsbook: 'Sportwetten', events: 'Events', admin: 'Verwaltung', search: 'Angebote suchen' },
    categories: {
      shopping: 'Shopping', fashion: 'Mode', electronics: 'Elektronik', beauty: 'Beauty', home: 'Zuhause', travel: 'Reisen', sport: 'Sport', betting: 'Wetten',
      restaurants: 'Restaurants', food: 'Essen', entertainment: 'Unterhaltung', kosherRestaurants: 'Koschere Restaurants', kosherStores: 'Koschere Geschäfte'
    },
    categoryDescriptions: { shopping: 'Alltägliche Artikel und erstklassige Einzelhandelsersparnisse.', fashion: 'Stil, Kleidung, Schuhe und Rabatte von Modehändlern.', electronics: 'Geräte, Zubehör und Gaming-Tech-Angebote.', beauty: 'Hautpflege, Kosmetik und Wellness-Angebote.', home: 'Möbel, Deko und Einsparungen bei der Heimwerkerarbeit.', travel: 'Hotels, Flüge, Autovermietungen und Urlaubsangebote.', sport: 'Fitnessmarken, Ausrüstung und Rabatte auf Sportbekleidung.', betting: 'Sportwetten-Promotionen und wettbezogene Angebote.', restaurants: 'Fast Food, Cafés und Restaurant-Prämien.', food: 'Essenslieferung, Lebensmittel und Abo-Ersparnisse.', entertainment: 'Streaming, Events, Kinos und Gaming-Angebote.', kosherRestaurants: 'Zertifizierte koschere Restaurants, Catering und Lieferung in den wichtigsten US-Städten.', kosherStores: 'Koschere Lebensmittelgeschäfte, Metzgereien und Fachmärkte in den wichtigsten US-Städten.' },
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
    partnerForm: { title: 'Partnerregistrierung', companyName: 'Firmenname', website: 'Webseite', contactEmail: 'Kontakt-E-Mail', category: 'Kategorie', submit: 'Als Partner bewerben' },
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
    sportsbookPage: { pill: 'Sportwetten', title: 'Premium-Wettanbieter-Verzeichnis', subtitle: 'Entdecken Sie die wichtigsten Wettanbieter mit eigenen Profilseiten, Verfügbarkeit nach Bundesstaat und zukünftigen Gutscheincode-Bereichen.', viewProfile: 'Profil ansehen' },
    auth: { pill: 'Benutzersystem', title: 'Willkommen zurück', subtitle: 'Die Supabase-Authentifizierung ist bereit für Anmelde- und Registrierungsabläufe.', email: 'E-Mail', password: 'Passwort', continueLabel: 'Weiter' }
  },
  ar: {
    nav: { home: 'الرئيسية', stores: 'المتاجر', coupons: 'القسائم', rentals: 'التأجير', sportsbook: 'الرهانات الرياضية', events: 'الفعاليات', admin: 'الإدارة', search: 'البحث عن العروض' },
    categories: {
      shopping: 'التسوق', fashion: 'الموضة', electronics: 'الإلكترونيات', beauty: 'الجمال', home: 'المنزل', travel: 'السفر', sport: 'الرياضة', betting: 'الرهان',
      restaurants: 'المطاعم', food: 'الطعام', entertainment: 'الترفيه', kosherRestaurants: 'مطاعم كوشر', kosherStores: 'متاجر كوشر'
    },
    categoryDescriptions: { shopping: 'احتياجات يومية ووفورات تجزئة مميزة.', fashion: 'أناقة وملابس وأحذية وخصومات من متاجر الأزياء.', electronics: 'أجهزة وإكسسوارات وعروض تقنيات الألعاب.', beauty: 'عناية بالبشرة ومستحضرات تجميل وعروض العافية.', home: 'أثاث وديكور ووفورات تحسين المنزل.', travel: 'فنادق ورحلات طيران وتأجير سيارات وعروض إجازات.', sport: 'ماركات لياقة ومعدات وخصومات على الملابس الرياضية.', betting: 'عروض ترويجية للرهان الرياضي وعروض متعلقة به.', restaurants: 'وجبات سريعة ومقاهي وعروض مكافآت المطاعم.', food: 'توصيل الطعام والبقالة ووفورات الاشتراكات.', entertainment: 'بث وفعاليات ودور سينما وعروض ألعاب.', kosherRestaurants: 'مطاعم كوشر معتمدة، وتموين، وتوصيل عبر المدن الأمريكية الكبرى.', kosherStores: 'بقالات ومحلات جزارة وأسواق كوشر متخصصة عبر المدن الأمريكية الكبرى.' },
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
    partnerForm: { title: 'تسجيل الشريك', companyName: 'اسم الشركة', website: 'الموقع الإلكتروني', contactEmail: 'البريد الإلكتروني للتواصل', category: 'الفئة', submit: 'التقدم كشريك' },
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
    sportsbookPage: { pill: 'الرهانات الرياضية', title: 'دليل شركات الرهان المتميزة', subtitle: 'استكشف شركات الرهان الرياضي الكبرى مع صفحات ملفات تعريف مخصصة، وتوفر حسب الولاية، وأقسام أكواد خصم مستقبلية.', viewProfile: 'عرض الملف الشخصي' },
    auth: { pill: 'نظام المستخدمين', title: 'مرحبًا بعودتك', subtitle: 'مصادقة Supabase جاهزة لتدفقات تسجيل الدخول والتسجيل.', email: 'البريد الإلكتروني', password: 'كلمة المرور', continueLabel: 'متابعة' }
  },
  tr: {
    nav: { home: 'Ana Sayfa', stores: 'Mağazalar', coupons: 'Kuponlar', rentals: 'Kiralama', sportsbook: 'Spor Bahisleri', events: 'Etkinlikler', admin: 'Yönetim', search: 'Fırsat ara' },
    categories: {
      shopping: 'Alışveriş', fashion: 'Moda', electronics: 'Elektronik', beauty: 'Güzellik', home: 'Ev', travel: 'Seyahat', sport: 'Spor', betting: 'Bahis',
      restaurants: 'Restoranlar', food: 'Yiyecek', entertainment: 'Eğlence', kosherRestaurants: 'Koşer Restoranlar', kosherStores: 'Koşer Mağazalar'
    },
    categoryDescriptions: { shopping: 'Günlük ihtiyaçlar ve premium perakende tasarrufları.', fashion: 'Moda perakendecilerinden stil, giyim, ayakkabı indirimleri.', electronics: 'Cihazlar, aksesuarlar ve oyun teknolojisi fırsatları.', beauty: 'Cilt bakımı, kozmetik ve sağlıklı yaşam fırsatları.', home: 'Mobilya, dekorasyon ve ev geliştirme tasarrufları.', travel: 'Oteller, uçuşlar, araç kiralama ve tatil fırsatları.', sport: 'Fitness markaları, ekipman ve spor giyim indirimleri.', betting: 'Bahis sitesi promosyonları ve bahisle ilgili fırsatlar.', restaurants: 'Fast food, kafeler ve restoran ödül fırsatları.', food: 'Yemek teslimatı, market ve abonelik tasarrufları.', entertainment: 'Yayın, etkinlikler, sinemalar ve oyun fırsatları.', kosherRestaurants: 'Büyük ABD şehirlerinde sertifikalı koşer yemek, catering ve teslimat.', kosherStores: 'Büyük ABD şehirlerinde koşer market, kasap ve özel pazarlar.' },
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
    partnerForm: { title: 'Ortak kaydı', companyName: 'Şirket adı', website: 'Web sitesi', contactEmail: 'İletişim e-postası', category: 'Kategori', submit: 'Ortak olarak başvur' },
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
    sportsbookPage: { pill: 'Spor Bahisleri', title: 'Premium bahis sitesi dizini', subtitle: 'Özel profil sayfaları, eyalet bazlı erişilebilirlik ve gelecekteki promosyon kodu bölümleriyle önde gelen bahis şirketlerini keşfedin.', viewProfile: 'Profili Görüntüle' },
    auth: { pill: 'Kullanıcı Sistemi', title: 'Tekrar hoş geldiniz', subtitle: 'Supabase kimlik doğrulaması giriş ve kayıt akışları için hazır.', email: 'E-posta', password: 'Şifre', continueLabel: 'Devam' }
  },
  fa: {
    nav: { home: 'خانه', stores: 'فروشگاه‌ها', coupons: 'کدهای تخفیف', rentals: 'اجاره', sportsbook: 'شرط‌بندی ورزشی', events: 'رویدادها', admin: 'مدیریت', search: 'جستجوی پیشنهادها' },
    categories: {
      shopping: 'خرید', fashion: 'مد', electronics: 'الکترونیک', beauty: 'زیبایی', home: 'خانه', travel: 'سفر', sport: 'ورزش', betting: 'شرط‌بندی',
      restaurants: 'رستوران‌ها', food: 'غذا', entertainment: 'سرگرمی', kosherRestaurants: 'رستوران‌های کوشر', kosherStores: 'فروشگاه‌های کوشر'
    },
    categoryDescriptions: { shopping: 'نیازهای روزمره و صرفه‌جویی ویژه در خرده‌فروشی.', fashion: 'سبک، پوشاک، کفش و تخفیف‌های فروشگاه‌های مد.', electronics: 'دستگاه‌ها، لوازم جانبی و پیشنهادهای فناوری بازی.', beauty: 'مراقبت از پوست، آرایشی و پیشنهادهای سلامتی.', home: 'مبلمان، دکوراسیون و صرفه‌جویی در بهسازی خانه.', travel: 'هتل‌ها، پروازها، اجاره خودرو و پیشنهادهای تعطیلات.', sport: 'برندهای تناسب اندام، تجهیزات و تخفیف پوشاک ورزشی.', betting: 'تبلیغات سایت‌های شرط‌بندی و پیشنهادهای مرتبط.', restaurants: 'فست فود، کافه‌ها و پاداش‌های رستوران.', food: 'تحویل غذا، خواروبار و صرفه‌جویی در اشتراک‌ها.', entertainment: 'استریم، رویدادها، سینما و پیشنهادهای بازی.', kosherRestaurants: 'غذاخوری‌های کوشر معتبر، کترینگ و تحویل در شهرهای بزرگ آمریکا.', kosherStores: 'خواروبار فروشی‌ها، قصابی‌ها و بازارهای تخصصی کوشر در شهرهای بزرگ آمریکا.' },
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
    partnerForm: { title: 'ثبت‌نام همکار', companyName: 'نام شرکت', website: 'وب‌سایت', contactEmail: 'ایمیل تماس', category: 'دسته‌بندی', submit: 'درخواست همکاری' },
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
    sportsbookPage: { pill: 'شرط‌بندی ورزشی', title: 'فهرست ویژه سایت‌های شرط‌بندی', subtitle: 'شرکت‌های بزرگ شرط‌بندی را با صفحات پروفایل اختصاصی، در دسترس بودن بر اساس ایالت و بخش‌های کد تخفیف آینده کشف کنید.', viewProfile: 'مشاهده پروفایل' },
    auth: { pill: 'سیستم کاربری', title: 'خوش آمدید', subtitle: 'احراز هویت Supabase برای ورود و ثبت‌نام آماده است.', email: 'ایمیل', password: 'رمز عبور', continueLabel: 'ادامه' }
  },
  it: {
    nav: { home: 'Home', stores: 'Negozi', coupons: 'Coupon', rentals: 'Noleggi', sportsbook: 'Scommesse sportive', events: 'Eventi', admin: 'Amministrazione', search: 'Cerca offerte' },
    categories: {
      shopping: 'Shopping', fashion: 'Moda', electronics: 'Elettronica', beauty: 'Bellezza', home: 'Casa', travel: 'Viaggi', sport: 'Sport', betting: 'Scommesse',
      restaurants: 'Ristoranti', food: 'Cibo', entertainment: 'Intrattenimento', kosherRestaurants: 'Ristoranti Kosher', kosherStores: 'Negozi Kosher'
    },
    categoryDescriptions: { shopping: 'Beni di prima necessità e risparmi retail premium.', fashion: 'Stile, abbigliamento, calzature e sconti dai rivenditori di moda.', electronics: 'Dispositivi, accessori e offerte di tecnologia gaming.', beauty: 'Cura della pelle, cosmetici e offerte benessere.', home: 'Mobili, decorazioni e risparmi per la casa.', travel: 'Hotel, voli, noleggio auto e offerte vacanza.', sport: 'Marchi fitness, attrezzature e sconti su abbigliamento sportivo.', betting: 'Promozioni di bookmaker e offerte relative alle scommesse.', restaurants: 'Fast food, caffè e premi dei ristoranti.', food: 'Consegna cibo, spesa e risparmi sugli abbonamenti.', entertainment: 'Streaming, eventi, cinema e offerte di gioco.', kosherRestaurants: 'Ristoranti kosher certificati, catering e consegna nelle principali città USA.', kosherStores: 'Negozi di alimentari, macellerie e mercati kosher specializzati nelle principali città USA.' },
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
    partnerForm: { title: 'Registrazione partner', companyName: 'Nome azienda', website: 'Sito web', contactEmail: 'Email di contatto', category: 'Categoria', submit: 'Candidati come partner' },
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
    sportsbookPage: { pill: 'Scommesse sportive', title: 'Elenco premium di bookmaker', subtitle: 'Scopri i principali bookmaker con pagine profilo dedicate, disponibilità per stato e sezioni di codici promozionali future.', viewProfile: 'Vedi profilo' },
    auth: { pill: 'Sistema utenti', title: 'Bentornato', subtitle: 'L\'autenticazione Supabase è pronta per l\'accesso e la registrazione.', email: 'Email', password: 'Password', continueLabel: 'Continua' }
  },
  fr: {
    nav: { home: 'Accueil', stores: 'Boutiques', coupons: 'Coupons', rentals: 'Locations', sportsbook: 'Paris sportifs', events: 'Événements', admin: 'Administration', search: 'Rechercher des offres' },
    categories: {
      shopping: 'Shopping', fashion: 'Mode', electronics: 'Électronique', beauty: 'Beauté', home: 'Maison', travel: 'Voyage', sport: 'Sport', betting: 'Paris',
      restaurants: 'Restaurants', food: 'Alimentation', entertainment: 'Divertissement', kosherRestaurants: 'Restaurants casher', kosherStores: 'Magasins casher'
    },
    categoryDescriptions: { shopping: 'Essentiels du quotidien et économies premium en magasin.', fashion: 'Style, vêtements, chaussures et réductions des détaillants de mode.', electronics: 'Appareils, accessoires et offres technologiques gaming.', beauty: 'Soins de la peau, cosmétiques et offres bien-être.', home: 'Meubles, décoration et économies pour la maison.', travel: 'Hôtels, vols, location de voitures et offres de vacances.', sport: 'Marques de fitness, équipements et réductions sur les vêtements de sport.', betting: 'Promotions de bookmakers et offres liées aux paris.', restaurants: 'Fast-food, cafés et récompenses de restaurants.', food: 'Livraison de repas, épicerie et économies sur les abonnements.', entertainment: 'Streaming, événements, cinémas et offres de jeux.', kosherRestaurants: 'Restaurants casher certifiés, traiteur et livraison dans les grandes villes américaines.', kosherStores: 'Épiceries, boucheries et marchés casher spécialisés dans les grandes villes américaines.' },
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
    partnerForm: { title: 'Inscription partenaire', companyName: 'Nom de l’entreprise', website: 'Site web', contactEmail: 'E-mail de contact', category: 'Catégorie', submit: 'Postuler comme partenaire' },
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
    sportsbookPage: { pill: 'Paris sportifs', title: 'Répertoire premium des bookmakers', subtitle: 'Découvrez les principaux bookmakers avec des pages de profil dédiées, la disponibilité par État et de futures sections de codes promo.', viewProfile: 'Voir le profil' },
    auth: { pill: 'Système utilisateur', title: 'Bon retour', subtitle: 'L\'authentification Supabase est prête pour les flux de connexion et d\'inscription.', email: 'E-mail', password: 'Mot de passe', continueLabel: 'Continuer' }
  },
  pl: {
    nav: { home: 'Strona główna', stores: 'Sklepy', coupons: 'Kupony', rentals: 'Wynajem', sportsbook: 'Zakłady sportowe', events: 'Wydarzenia', admin: 'Administracja', search: 'Szukaj ofert' },
    categories: {
      shopping: 'Zakupy', fashion: 'Moda', electronics: 'Elektronika', beauty: 'Uroda', home: 'Dom', travel: 'Podróże', sport: 'Sport', betting: 'Zakłady',
      restaurants: 'Restauracje', food: 'Jedzenie', entertainment: 'Rozrywka', kosherRestaurants: 'Restauracje koszerne', kosherStores: 'Sklepy koszerne'
    },
    categoryDescriptions: { shopping: 'Codzienne artykuły i premium oszczędności detaliczne.', fashion: 'Styl, odzież, obuwie i zniżki od sprzedawców mody.', electronics: 'Urządzenia, akcesoria i oferty technologii gamingowej.', beauty: 'Pielęgnacja skóry, kosmetyki i oferty wellness.', home: 'Meble, dekoracje i oszczędności na remont domu.', travel: 'Hotele, loty, wynajem samochodów i oferty wakacyjne.', sport: 'Marki fitness, sprzęt i zniżki na odzież sportową.', betting: 'Promocje bukmacherskie i oferty związane z zakładami.', restaurants: 'Fast food, kawiarnie i nagrody restauracyjne.', food: 'Dostawa jedzenia, artykuły spożywcze i oszczędności na subskrypcjach.', entertainment: 'Streaming, wydarzenia, kina i oferty gamingowe.', kosherRestaurants: 'Certyfikowane restauracje koszerne, catering i dostawa w głównych miastach USA.', kosherStores: 'Koszerne sklepy spożywcze, sklepy mięsne i wyspecjalizowane rynki w głównych miastach USA.' },
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
    partnerForm: { title: 'Rejestracja partnera', companyName: 'Nazwa firmy', website: 'Strona internetowa', contactEmail: 'E-mail kontaktowy', category: 'Kategoria', submit: 'Aplikuj jako partner' },
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
    sportsbookPage: { pill: 'Zakłady sportowe', title: 'Katalog premium bukmacherów', subtitle: 'Odkryj największe firmy bukmacherskie z dedykowanymi stronami profilowymi, dostępnością wg stanu i przyszłymi sekcjami kodów promocyjnych.', viewProfile: 'Zobacz profil' },
    auth: { pill: 'System użytkowników', title: 'Witaj ponownie', subtitle: 'Uwierzytelnianie Supabase jest gotowe do logowania i rejestracji.', email: 'E-mail', password: 'Hasło', continueLabel: 'Kontynuuj' }
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
