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
    buttons: { viewDeals: 'View Deals', getDeal: 'Get Deal', visitStore: 'Visit Store', copyCode: 'Copy Code', search: 'Search', popularSearches: 'Popular Searches' },
    search: { placeholder: 'Search deals, stores, restaurants, and more', results: 'Search results', noResults: 'No results found for your search.' },
    home: { heroTitle: 'Global deals, promo codes, and lifestyle offers', heroSubtitle: 'Discover verified discounts across shopping, restaurants, entertainment, travel, sports, and betting.', featured: 'Featured Deals' },
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
    }
  },
  ru: {
    nav: { home: 'Главная', stores: 'Магазины', coupons: 'Купоны', rentals: 'Аренда', sportsbook: 'Спортивные ставки', admin: 'Админ', search: 'Поиск предложений' },
    categories: {
      shopping: 'Шопинг', fashion: 'Мода', electronics: 'Электроника', beauty: 'Красота', home: 'Дом', travel: 'Путешествия', sport: 'Спорт', betting: 'Ставки',
      restaurants: 'Рестораны', food: 'Еда', entertainment: 'Развлечения', kosherRestaurants: 'Кошерные рестораны', kosherStores: 'Кошерные магазины'
    },
    buttons: { viewDeals: 'Смотреть предложения', getDeal: 'Получить скидку', visitStore: 'Перейти в магазин', copyCode: 'Копировать код', search: 'Поиск', popularSearches: 'Популярные запросы' },
    search: { placeholder: 'Найдите скидки, магазины, рестораны и многое другое', results: 'Результаты поиска', noResults: 'По вашему запросу ничего не найдено.' },
    home: { heroTitle: 'Глобальные скидки, промокоды и предложения для жизни', heroSubtitle: 'Открывайте проверенные скидки в шопинге, ресторанах, развлечениях, путешествиях, спорте и ставках.', featured: 'Рекомендуемые предложения' },
    kosher: { rating: 'Рейтинг', reviews: 'отзывов', viewOnMap: 'Посмотреть на карте', promoCode: 'Промокод' },
    legal: {
      privacyTitle: 'Политика конфиденциальности и обработка данных', privacyBody: 'GORGONA ONE использует безопасную аутентификацию и структуры, готовые для аналитики, партнёрского отслеживания и монетизации.',
      termsTitle: 'Условия использования и партнёрские раскрытия', termsBody: 'Все предложения и акции следует уточнять напрямую у продавца или букмекера перед использованием.',
      cookiesTitle: 'Как GORGONA ONE использует файлы cookie', cookiesBody: 'Мы используем cookie для запоминания языковых настроек, хранения данных сессии, улучшения аналитики и поддержки партнёрской атрибуции, сохраняя быстрый и персонализированный опыт.',
      disclosureTitle: 'Как работают партнёрские комиссии', disclosureBody: 'GORGONA ONE может получать комиссию, когда пользователи переходят по партнёрским ссылкам и выполняют целевые действия. Это помогает поддерживать платформу и развивать инструменты поиска.',
      agreementTitle: 'Условия партнёрства для продавцов', agreementBody: 'Одобренные партнёры обязуются предоставлять точные данные об акциях, соблюдать законодательство и использовать платформу согласно правилам GORGONA ONE.'
    },
    partnerForm: { title: 'Регистрация партнёра', companyName: 'Название компании', website: 'Веб-сайт', contactEmail: 'Контактный email', category: 'Категория', submit: 'Подать заявку' }
  },
  es: {
    nav: { home: 'Inicio', stores: 'Tiendas', coupons: 'Cupones', rentals: 'Alquileres', sportsbook: 'Apuestas deportivas', admin: 'Administración', search: 'Buscar ofertas' },
    categories: {
      shopping: 'Compras', fashion: 'Moda', electronics: 'Electrónica', beauty: 'Belleza', home: 'Hogar', travel: 'Viajes', sport: 'Deporte', betting: 'Apuestas',
      restaurants: 'Restaurantes', food: 'Comida', entertainment: 'Entretenimiento', kosherRestaurants: 'Restaurantes Kosher', kosherStores: 'Tiendas Kosher'
    },
    buttons: { viewDeals: 'Ver ofertas', getDeal: 'Obtener oferta', visitStore: 'Visitar tienda', copyCode: 'Copiar código', search: 'Buscar', popularSearches: 'Búsquedas populares' },
    search: { placeholder: 'Busca ofertas, tiendas, restaurantes y más', results: 'Resultados de búsqueda', noResults: 'No se encontraron resultados para tu búsqueda.' },
    home: { heroTitle: 'Ofertas globales, códigos promocionales y estilo de vida', heroSubtitle: 'Descubre descuentos verificados en compras, restaurantes, entretenimiento, viajes, deportes y apuestas.', featured: 'Ofertas destacadas' },
    kosher: { rating: 'Calificación', reviews: 'reseñas', viewOnMap: 'Ver en el mapa', promoCode: 'Código promocional' },
    legal: {
      privacyTitle: 'Política de privacidad y manejo de datos', privacyBody: 'GORGONA ONE utiliza autenticación segura y estructuras listas para análisis, seguimiento de afiliados y monetización.',
      termsTitle: 'Términos de uso y divulgaciones de afiliados', termsBody: 'Todas las ofertas y promociones deben verificarse directamente con el comercio o casa de apuestas antes de usarse.',
      cookiesTitle: 'Cómo utiliza cookies GORGONA ONE', cookiesBody: 'Usamos cookies para recordar preferencias de idioma, guardar datos de sesión, mejorar el análisis y respaldar la atribución de afiliados, manteniendo una experiencia rápida y personalizada.',
      disclosureTitle: 'Cómo funcionan las comisiones de afiliados', disclosureBody: 'GORGONA ONE puede ganar comisiones cuando los usuarios hacen clic y completan acciones calificadas a través de enlaces de socios. Esto ayuda a sostener la plataforma y financiar las herramientas de descubrimiento.',
      agreementTitle: 'Términos de asociación con comercios y afiliados', agreementBody: 'Los socios aprobados aceptan proporcionar detalles precisos de las promociones, cumplir con los requisitos legales y usar la plataforma según las reglas de GORGONA ONE.'
    },
    partnerForm: { title: 'Registro de socio', companyName: 'Nombre de la empresa', website: 'Sitio web', contactEmail: 'Correo de contacto', category: 'Categoría', submit: 'Solicitar ser socio' }
  },
  he: {
    nav: { home: 'בית', stores: 'חנויות', coupons: 'קופונים', rentals: 'השכרות', sportsbook: 'הימורי ספורט', admin: 'ניהול', search: 'חיפוש מבצעים' },
    categories: {
      shopping: 'קניות', fashion: 'אופנה', electronics: 'אלקטרוניקה', beauty: 'יופי', home: 'בית', travel: 'טיולים', sport: 'ספורט', betting: 'הימורים',
      restaurants: 'מסעדות', food: 'אוכל', entertainment: 'בידור', kosherRestaurants: 'מסעדות כשרות', kosherStores: 'חנויות כשרות'
    },
    buttons: { viewDeals: 'צפייה במבצעים', getDeal: 'קבל מבצע', visitStore: 'בקר בחנות', copyCode: 'העתק קוד', search: 'חיפוש', popularSearches: 'חיפושים פופולריים' },
    search: { placeholder: 'חפשו מבצעים, חנויות, מסעדות ועוד', results: 'תוצאות חיפוש', noResults: 'לא נמצאו תוצאות עבור החיפוש שלך.' },
    home: { heroTitle: 'מבצעים גלובליים, קודי קופון והצעות לייף-סטייל', heroSubtitle: 'גלו הנחות מאומתות בקניות, מסעדות, בידור, נסיעות, ספורט והימורים.', featured: 'מבצעים מומלצים' },
    kosher: { rating: 'דירוג', reviews: 'ביקורות', viewOnMap: 'הצג על המפה', promoCode: 'קוד קופון' },
    legal: {
      privacyTitle: 'מדיניות פרטיות וטיפול בנתונים', privacyBody: 'GORGONA ONE משתמשת באימות מאובטח ובמבנים המוכנים לניתוח נתונים, מעקב שותפים ומונטיזציה.',
      termsTitle: 'תנאי שימוש וגילויי שותפים', termsBody: 'יש לוודא את כל המבצעים וההטבות ישירות מול הסוחר או בית ההימורים לפני השימוש.',
      cookiesTitle: 'כיצד GORGONA ONE משתמשת בעוגיות', cookiesBody: 'אנו משתמשים בעוגיות כדי לזכור העדפות שפה, לשמור פרטי הפעלה, לשפר ניתוח נתונים ולתמוך בייחוס שותפים, תוך שמירה על חוויה מהירה ומותאמת אישית.',
      disclosureTitle: 'כיצד פועלות עמלות השותפים', disclosureBody: 'GORGONA ONE עשויה להרוויח עמלות כאשר משתמשים לוחצים ומשלימים פעולות מתאימות דרך קישורי שותפים. הדבר מסייע לקיים את הפלטפורמה ולממן את כלי הגילוי.',
      agreementTitle: 'תנאי שותפות לסוחרים ולשותפים', agreementBody: 'שותפים מאושרים מתחייבים לספק פרטי מבצעים מדויקים, לעמוד בדרישות החוק ולהשתמש בפלטפורמה בהתאם לכללי GORGONA ONE.'
    },
    partnerForm: { title: 'רישום שותף', companyName: 'שם החברה', website: 'אתר אינטרנט', contactEmail: 'אימייל ליצירת קשר', category: 'קטגוריה', submit: 'הגש בקשה כשותף' }
  },
  zh: {
    nav: { home: '首页', stores: '商店', coupons: '优惠券', rentals: '租赁', sportsbook: '体育博彩', admin: '管理后台', search: '搜索优惠' },
    categories: {
      shopping: '购物', fashion: '时尚', electronics: '电子产品', beauty: '美妆', home: '家居', travel: '旅行', sport: '运动', betting: '博彩',
      restaurants: '餐厅', food: '美食', entertainment: '娱乐', kosherRestaurants: '洁食餐厅', kosherStores: '洁食商店'
    },
    buttons: { viewDeals: '查看优惠', getDeal: '获取优惠', visitStore: '访问商店', copyCode: '复制代码', search: '搜索', popularSearches: '热门搜索' },
    search: { placeholder: '搜索优惠、商店、餐厅等', results: '搜索结果', noResults: '未找到与您的搜索匹配的结果。' },
    home: { heroTitle: '全球优惠、促销代码与生活方式特惠', heroSubtitle: '发现购物、餐饮、娱乐、旅行、体育和博彩领域的已验证折扣。', featured: '精选优惠' },
    kosher: { rating: '评分', reviews: '条评论', viewOnMap: '在地图上查看', promoCode: '优惠码' },
    legal: {
      privacyTitle: '隐私政策与数据处理', privacyBody: 'GORGONA ONE 使用安全认证以及可用于分析、联盟追踪和变现的架构。',
      termsTitle: '使用条款与联盟披露', termsBody: '所有优惠和促销活动在使用前应直接向商家或博彩平台核实。',
      cookiesTitle: 'GORGONA ONE 如何使用 Cookie', cookiesBody: '我们使用 Cookie 记住语言偏好、保存会话信息、改进分析并支持联盟归因，同时保持体验快速且个性化。',
      disclosureTitle: '联盟佣金如何运作', disclosureBody: 'GORGONA ONE 可能在用户点击并完成合作伙伴链接中的合格操作时赚取佣金，这有助于维持平台并资助发现工具的开发。',
      agreementTitle: '商家与联盟合作条款', agreementBody: '获批合作伙伴同意提供准确的促销信息，遵守法律要求，并按照 GORGONA ONE 制定的联盟与合规规则使用平台。'
    },
    partnerForm: { title: '合作伙伴注册', companyName: '公司名称', website: '网站', contactEmail: '联系邮箱', category: '类别', submit: '申请成为合作伙伴' }
  },
  pt: {
    nav: { home: 'Início', stores: 'Lojas', coupons: 'Cupons', rentals: 'Aluguéis', sportsbook: 'Apostas esportivas', admin: 'Administração', search: 'Buscar ofertas' },
    categories: {
      shopping: 'Compras', fashion: 'Moda', electronics: 'Eletrônicos', beauty: 'Beleza', home: 'Casa', travel: 'Viagens', sport: 'Esporte', betting: 'Apostas',
      restaurants: 'Restaurantes', food: 'Comida', entertainment: 'Entretenimento', kosherRestaurants: 'Restaurantes Kosher', kosherStores: 'Lojas Kosher'
    },
    buttons: { viewDeals: 'Ver ofertas', getDeal: 'Obter oferta', visitStore: 'Visitar loja', copyCode: 'Copiar código', search: 'Buscar', popularSearches: 'Buscas populares' },
    search: { placeholder: 'Busque ofertas, lojas, restaurantes e mais', results: 'Resultados da busca', noResults: 'Nenhum resultado encontrado para sua busca.' },
    home: { heroTitle: 'Ofertas globais, códigos promocionais e estilo de vida', heroSubtitle: 'Descubra descontos verificados em compras, restaurantes, entretenimento, viagens, esportes e apostas.', featured: 'Ofertas em destaque' },
    kosher: { rating: 'Avaliação', reviews: 'avaliações', viewOnMap: 'Ver no mapa', promoCode: 'Código promocional' },
    legal: {
      privacyTitle: 'Política de privacidade e tratamento de dados', privacyBody: 'A GORGONA ONE utiliza autenticação segura e estruturas prontas para análise, rastreamento de afiliados e monetização.',
      termsTitle: 'Termos de uso e divulgações de afiliados', termsBody: 'Todas as ofertas e promoções devem ser verificadas diretamente com o comerciante ou casa de apostas antes do uso.',
      cookiesTitle: 'Como a GORGONA ONE usa cookies', cookiesBody: 'Usamos cookies para lembrar preferências de idioma, armazenar dados de sessão, melhorar a análise e apoiar a atribuição de afiliados, mantendo a experiência rápida e personalizada.',
      disclosureTitle: 'Como funcionam as comissões de afiliados', disclosureBody: 'A GORGONA ONE pode ganhar comissões quando os usuários clicam e concluem ações qualificadas por meio de links de parceiros. Isso ajuda a sustentar a plataforma e financiar as ferramentas de descoberta.',
      agreementTitle: 'Termos de parceria com comerciantes e afiliados', agreementBody: 'Parceiros aprovados concordam em fornecer detalhes precisos das promoções, cumprir exigências legais e usar a plataforma conforme as regras da GORGONA ONE.'
    },
    partnerForm: { title: 'Cadastro de parceiro', companyName: 'Nome da empresa', website: 'Site', contactEmail: 'E-mail de contato', category: 'Categoria', submit: 'Solicitar parceria' }
  },
  uk: {
    nav: { home: 'Головна', stores: 'Магазини', coupons: 'Купони', rentals: 'Оренда', sportsbook: 'Спортивні ставки', admin: 'Адмін', search: 'Пошук пропозицій' },
    categories: {
      shopping: 'Шопінг', fashion: 'Мода', electronics: 'Електроніка', beauty: 'Краса', home: 'Дім', travel: 'Подорожі', sport: 'Спорт', betting: 'Ставки',
      restaurants: 'Ресторани', food: 'Їжа', entertainment: 'Розваги', kosherRestaurants: 'Кошерні ресторани', kosherStores: 'Кошерні магазини'
    },
    buttons: { viewDeals: 'Переглянути пропозиції', getDeal: 'Отримати знижку', visitStore: 'Перейти в магазин', copyCode: 'Копіювати код', search: 'Пошук', popularSearches: 'Популярні запити' },
    search: { placeholder: 'Знайдіть знижки, магазини, ресторани та інше', results: 'Результати пошуку', noResults: 'За вашим запитом нічого не знайдено.' },
    home: { heroTitle: 'Глобальні знижки, промокоди та пропозиції для життя', heroSubtitle: 'Відкривайте перевірені знижки в шопінгу, ресторанах, розвагах, подорожах, спорті та ставках.', featured: 'Рекомендовані пропозиції' },
    kosher: { rating: 'Рейтинг', reviews: 'відгуків', viewOnMap: 'Переглянути на карті', promoCode: 'Промокод' },
    legal: {
      privacyTitle: 'Політика конфіденційності та обробка даних', privacyBody: 'GORGONA ONE використовує безпечну автентифікацію та структури, готові для аналітики, партнерського відстеження та монетизації.',
      termsTitle: 'Умови використання та партнерські розкриття', termsBody: 'Усі пропозиції та акції слід перевіряти безпосередньо у продавця або букмекера перед використанням.',
      cookiesTitle: 'Як GORGONA ONE використовує файли cookie', cookiesBody: 'Ми використовуємо cookie для запам’ятовування мовних налаштувань, зберігання даних сесії, покращення аналітики та підтримки партнерської атрибуції, зберігаючи швидкий і персоналізований досвід.',
      disclosureTitle: 'Як працюють партнерські комісії', disclosureBody: 'GORGONA ONE може отримувати комісію, коли користувачі переходять за партнерськими посиланнями та виконують цільові дії. Це допомагає підтримувати платформу та розвивати інструменти пошуку.',
      agreementTitle: 'Умови партнерства для продавців', agreementBody: 'Затверджені партнери погоджуються надавати точні дані про акції, дотримуватися законодавства та використовувати платформу згідно з правилами GORGONA ONE.'
    },
    partnerForm: { title: 'Реєстрація партнера', companyName: 'Назва компанії', website: 'Веб-сайт', contactEmail: 'Контактний email', category: 'Категорія', submit: 'Подати заявку' }
  },
  ja: {
    nav: { home: 'ホーム', stores: 'ストア', coupons: 'クーポン', rentals: 'レンタル', sportsbook: 'スポーツブック', admin: '管理者', search: 'お得情報を検索' },
    categories: {
      shopping: 'ショッピング', fashion: 'ファッション', electronics: '家電', beauty: '美容', home: 'ホーム', travel: '旅行', sport: 'スポーツ', betting: 'ベッティング',
      restaurants: 'レストラン', food: 'フード', entertainment: 'エンターテインメント', kosherRestaurants: 'コーシャレストラン', kosherStores: 'コーシャストア'
    },
    buttons: { viewDeals: 'お得情報を見る', getDeal: 'お得情報を取得', visitStore: 'ストアへ行く', copyCode: 'コードをコピー', search: '検索', popularSearches: '人気の検索' },
    search: { placeholder: 'お得情報、ストア、レストランなどを検索', results: '検索結果', noResults: '検索結果が見つかりませんでした。' },
    home: { heroTitle: 'グローバルなお得情報、プロモコード、ライフスタイル特典', heroSubtitle: 'ショッピング、レストラン、エンターテインメント、旅行、スポーツ、ベッティングの確認済み割引を発見しましょう。', featured: '注目のお得情報' },
    kosher: { rating: '評価', reviews: '件のレビュー', viewOnMap: '地図で見る', promoCode: 'プロモコード' },
    legal: {
      privacyTitle: 'プライバシーポリシーとデータの取り扱い', privacyBody: 'GORGONA ONE は、安全な認証とアフィリエイト追跡、ユーザーエンゲージメント、収益化に対応した構造を使用しています。',
      termsTitle: '利用規約とアフィリエイト開示', termsBody: 'すべての特典やプロモーションは、使用前に販売元またはスポーツブックに直接ご確認ください。',
      cookiesTitle: 'GORGONA ONE のクッキーの使用方法', cookiesBody: '言語設定の記憶、セッション情報の保存、分析の改善、アフィリエイト属性のサポートのためにクッキーを使用し、高速でパーソナライズされた体験を提供します。',
      disclosureTitle: 'アフィリエイト報酬の仕組み', disclosureBody: 'GORGONA ONE は、ユーザーがパートナーリンクをクリックし対象のアクションを完了した場合に報酬を得ることがあります。これによりプラットフォームの維持と検索ツールの開発資金を賄っています。',
      agreementTitle: '販売者およびアフィリエイトパートナー契約条件', agreementBody: '承認されたパートナーは、正確なプロモーション情報の提供、法令遵守、GORGONA ONE の定めるルールに従ったプラットフォームの利用に同意するものとします。'
    },
    partnerForm: { title: 'パートナー登録', companyName: '会社名', website: 'ウェブサイト', contactEmail: '連絡先メール', category: 'カテゴリー', submit: 'パートナーとして申し込む' }
  },
  ko: {
    nav: { home: '홈', stores: '스토어', coupons: '쿠폰', rentals: '렌탈', sportsbook: '스포츠 베팅', admin: '관리자', search: '혜택 검색' },
    categories: {
      shopping: '쇼핑', fashion: '패션', electronics: '전자제품', beauty: '뷰티', home: '홈', travel: '여행', sport: '스포츠', betting: '베팅',
      restaurants: '레스토랑', food: '푸드', entertainment: '엔터테인먼트', kosherRestaurants: '코셔 레스토랑', kosherStores: '코셔 스토어'
    },
    buttons: { viewDeals: '혜택 보기', getDeal: '혜택 받기', visitStore: '스토어 방문', copyCode: '코드 복사', search: '검색', popularSearches: '인기 검색어' },
    search: { placeholder: '혜택, 스토어, 레스토랑 등을 검색하세요', results: '검색 결과', noResults: '검색 결과가 없습니다.' },
    home: { heroTitle: '글로벌 혜택, 프로모 코드 및 라이프스타일 오퍼', heroSubtitle: '쇼핑, 레스토랑, 엔터테인먼트, 여행, 스포츠 및 베팅 분야의 검증된 할인을 만나보세요.', featured: '추천 혜택' },
    kosher: { rating: '평점', reviews: '개 리뷰', viewOnMap: '지도에서 보기', promoCode: '프로모 코드' },
    legal: {
      privacyTitle: '개인정보 보호정책 및 데이터 처리', privacyBody: 'GORGONA ONE은 안전한 인증과 제휴 추적, 사용자 참여, 수익화를 위한 분석 준비 구조를 사용합니다.',
      termsTitle: '이용 약관 및 제휴 공개', termsBody: '모든 혜택과 프로모션은 사용 전에 판매자 또는 스포츠북에 직접 확인해야 합니다.',
      cookiesTitle: 'GORGONA ONE의 쿠키 사용 방법', cookiesBody: '언어 설정 기억, 세션 정보 저장, 분석 개선 및 제휴 기여도 지원을 위해 쿠키를 사용하며, 빠르고 개인화된 경험을 유지합니다.',
      disclosureTitle: '제휴 수수료 작동 방식', disclosureBody: 'GORGONA ONE은 사용자가 파트너 링크를 클릭하고 자격 요건에 맞는 작업을 완료할 때 수수료를 받을 수 있습니다. 이는 플랫폼 유지와 검색 도구 개발 자금에 도움이 됩니다.',
      agreementTitle: '판매자 및 제휴 파트너십 약관', agreementBody: '승인된 파트너는 정확한 프로모션 정보를 제공하고, 법적 요건을 준수하며, GORGONA ONE이 정한 규칙에 따라 플랫폼을 사용하는 데 동의합니다.'
    },
    partnerForm: { title: '파트너 등록', companyName: '회사명', website: '웹사이트', contactEmail: '연락처 이메일', category: '카테고리', submit: '파트너 신청' }
  },
  de: {
    nav: { home: 'Startseite', stores: 'Shops', coupons: 'Gutscheine', rentals: 'Vermietungen', sportsbook: 'Sportwetten', admin: 'Verwaltung', search: 'Angebote suchen' },
    categories: {
      shopping: 'Shopping', fashion: 'Mode', electronics: 'Elektronik', beauty: 'Beauty', home: 'Zuhause', travel: 'Reisen', sport: 'Sport', betting: 'Wetten',
      restaurants: 'Restaurants', food: 'Essen', entertainment: 'Unterhaltung', kosherRestaurants: 'Koschere Restaurants', kosherStores: 'Koschere Geschäfte'
    },
    buttons: { viewDeals: 'Angebote ansehen', getDeal: 'Angebot erhalten', visitStore: 'Shop besuchen', copyCode: 'Code kopieren', search: 'Suchen', popularSearches: 'Beliebte Suchanfragen' },
    search: { placeholder: 'Angebote, Shops, Restaurants und mehr suchen', results: 'Suchergebnisse', noResults: 'Keine Ergebnisse für Ihre Suche gefunden.' },
    home: { heroTitle: 'Globale Angebote, Gutscheincodes und Lifestyle-Deals', heroSubtitle: 'Entdecken Sie verifizierte Rabatte in den Bereichen Shopping, Restaurants, Unterhaltung, Reisen, Sport und Wetten.', featured: 'Empfohlene Angebote' },
    kosher: { rating: 'Bewertung', reviews: 'Bewertungen', viewOnMap: 'Auf der Karte ansehen', promoCode: 'Gutscheincode' },
    legal: {
      privacyTitle: 'Datenschutzrichtlinie und Datenverarbeitung', privacyBody: 'GORGONA ONE verwendet sichere Authentifizierung sowie Strukturen für Analysen, Affiliate-Tracking und Monetarisierung.',
      termsTitle: 'Nutzungsbedingungen und Affiliate-Hinweise', termsBody: 'Alle Angebote und Aktionen sollten vor der Nutzung direkt beim jeweiligen Händler oder Wettanbieter geprüft werden.',
      cookiesTitle: 'Wie GORGONA ONE Cookies verwendet', cookiesBody: 'Wir verwenden Cookies, um Spracheinstellungen zu speichern, Sitzungsdaten zu verwalten, Analysen zu verbessern und die Affiliate-Zuordnung zu unterstützen, während das Erlebnis schnell und personalisiert bleibt.',
      disclosureTitle: 'Wie Affiliate-Provisionen funktionieren', disclosureBody: 'GORGONA ONE kann Provisionen verdienen, wenn Nutzer über Partnerlinks klicken und qualifizierte Aktionen abschließen. Dies hilft, die Plattform zu erhalten und Discovery-Tools zu finanzieren.',
      agreementTitle: 'Händler- und Affiliate-Partnerschaftsbedingungen', agreementBody: 'Genehmigte Partner verpflichten sich, korrekte Angaben zu Aktionen zu machen, gesetzliche Anforderungen einzuhalten und die Plattform gemäß den von GORGONA ONE festgelegten Regeln zu nutzen.'
    },
    partnerForm: { title: 'Partnerregistrierung', companyName: 'Firmenname', website: 'Webseite', contactEmail: 'Kontakt-E-Mail', category: 'Kategorie', submit: 'Als Partner bewerben' }
  },
  ar: {
    nav: { home: 'الرئيسية', stores: 'المتاجر', coupons: 'القسائم', rentals: 'التأجير', sportsbook: 'الرهانات الرياضية', admin: 'الإدارة', search: 'البحث عن العروض' },
    categories: {
      shopping: 'التسوق', fashion: 'الموضة', electronics: 'الإلكترونيات', beauty: 'الجمال', home: 'المنزل', travel: 'السفر', sport: 'الرياضة', betting: 'الرهان',
      restaurants: 'المطاعم', food: 'الطعام', entertainment: 'الترفيه', kosherRestaurants: 'مطاعم كوشر', kosherStores: 'متاجر كوشر'
    },
    buttons: { viewDeals: 'عرض العروض', getDeal: 'احصل على العرض', visitStore: 'زيارة المتجر', copyCode: 'نسخ الكود', search: 'بحث', popularSearches: 'عمليات البحث الشائعة' },
    search: { placeholder: 'ابحث عن العروض والمتاجر والمطاعم والمزيد', results: 'نتائج البحث', noResults: 'لم يتم العثور على نتائج لبحثك.' },
    home: { heroTitle: 'عروض عالمية وأكواد خصم وعروض نمط الحياة', heroSubtitle: 'اكتشف خصومات موثوقة في التسوق والمطاعم والترفيه والسفر والرياضة والرهانات.', featured: 'العروض المميزة' },
    kosher: { rating: 'التقييم', reviews: 'تقييمات', viewOnMap: 'عرض على الخريطة', promoCode: 'كود الخصم' },
    legal: {
      privacyTitle: 'سياسة الخصوصية ومعالجة البيانات', privacyBody: 'تستخدم GORGONA ONE مصادقة آمنة وبنى جاهزة للتحليلات وتتبع الشركاء والتحقيق في الإيرادات.',
      termsTitle: 'شروط الاستخدام وإفصاحات الشراكة', termsBody: 'يجب التحقق من جميع العروض والتخفيضات مباشرة مع التاجر أو منصة الرهان قبل الاستخدام.',
      cookiesTitle: 'كيف تستخدم GORGONA ONE ملفات تعريف الارتباط', cookiesBody: 'نستخدم ملفات تعريف الارتباط لتذكر تفضيلات اللغة وحفظ بيانات الجلسة وتحسين التحليلات ودعم إسناد الشراكات، مع الحفاظ على تجربة سريعة وشخصية.',
      disclosureTitle: 'كيف تعمل عمولات الشراكة', disclosureBody: 'قد تحصل GORGONA ONE على عمولات عندما ينقر المستخدمون ويكملون إجراءات مؤهلة عبر روابط الشركاء، مما يساعد في دعم المنصة وتمويل أدوات الاكتشاف.',
      agreementTitle: 'شروط شراكة التجار والشركاء', agreementBody: 'يوافق الشركاء المعتمدون على تقديم تفاصيل دقيقة للعروض والالتزام بالمتطلبات القانونية واستخدام المنصة وفقًا لقواعد GORGONA ONE.'
    },
    partnerForm: { title: 'تسجيل الشريك', companyName: 'اسم الشركة', website: 'الموقع الإلكتروني', contactEmail: 'البريد الإلكتروني للتواصل', category: 'الفئة', submit: 'التقدم كشريك' }
  },
  tr: {
    nav: { home: 'Ana Sayfa', stores: 'Mağazalar', coupons: 'Kuponlar', rentals: 'Kiralama', sportsbook: 'Spor Bahisleri', admin: 'Yönetim', search: 'Fırsat ara' },
    categories: {
      shopping: 'Alışveriş', fashion: 'Moda', electronics: 'Elektronik', beauty: 'Güzellik', home: 'Ev', travel: 'Seyahat', sport: 'Spor', betting: 'Bahis',
      restaurants: 'Restoranlar', food: 'Yiyecek', entertainment: 'Eğlence', kosherRestaurants: 'Koşer Restoranlar', kosherStores: 'Koşer Mağazalar'
    },
    buttons: { viewDeals: 'Fırsatları Görüntüle', getDeal: 'Fırsatı Al', visitStore: 'Mağazayı Ziyaret Et', copyCode: 'Kodu Kopyala', search: 'Ara', popularSearches: 'Popüler Aramalar' },
    search: { placeholder: 'Fırsat, mağaza, restoran ve daha fazlasını arayın', results: 'Arama sonuçları', noResults: 'Aramanızla eşleşen sonuç bulunamadı.' },
    home: { heroTitle: 'Küresel fırsatlar, promosyon kodları ve yaşam tarzı teklifleri', heroSubtitle: 'Alışveriş, restoranlar, eğlence, seyahat, spor ve bahis alanlarında doğrulanmış indirimleri keşfedin.', featured: 'Öne Çıkan Fırsatlar' },
    kosher: { rating: 'Puan', reviews: 'değerlendirme', viewOnMap: 'Haritada görüntüle', promoCode: 'Promosyon kodu' },
    legal: {
      privacyTitle: 'Gizlilik politikası ve veri işleme', privacyBody: 'GORGONA ONE, güvenli kimlik doğrulama ile analiz, iş ortağı takibi ve gelir elde etmeye hazır yapılar kullanır.',
      termsTitle: 'Kullanım koşulları ve iş ortağı açıklamaları', termsBody: 'Tüm teklif ve promosyonlar kullanılmadan önce ilgili satıcı veya bahis sitesiyle doğrudan doğrulanmalıdır.',
      cookiesTitle: 'GORGONA ONE çerezleri nasıl kullanır', cookiesBody: 'Dil tercihlerini hatırlamak, oturum bilgilerini saklamak, analizleri geliştirmek ve iş ortağı ilişkilendirmesini desteklemek için çerezler kullanırız; böylece hızlı ve kişiselleştirilmiş bir deneyim sunarız.',
      disclosureTitle: 'İş ortağı komisyonları nasıl çalışır', disclosureBody: 'GORGONA ONE, kullanıcılar ortak bağlantılarına tıklayıp uygun işlemleri tamamladığında komisyon kazanabilir. Bu, platformun sürdürülmesine ve keşif araçlarının finansmanına yardımcı olur.',
      agreementTitle: 'Satıcı ve iş ortağı ortaklık koşulları', agreementBody: 'Onaylanmış ortaklar, doğru promosyon bilgileri sağlamayı, yasal gereklilikleri karşılamayı ve platformu GORGONA ONE tarafından belirlenen kurallara göre kullanmayı kabul eder.'
    },
    partnerForm: { title: 'Ortak kaydı', companyName: 'Şirket adı', website: 'Web sitesi', contactEmail: 'İletişim e-postası', category: 'Kategori', submit: 'Ortak olarak başvur' }
  },
  fa: {
    nav: { home: 'خانه', stores: 'فروشگاه‌ها', coupons: 'کدهای تخفیف', rentals: 'اجاره', sportsbook: 'شرط‌بندی ورزشی', admin: 'مدیریت', search: 'جستجوی پیشنهادها' },
    categories: {
      shopping: 'خرید', fashion: 'مد', electronics: 'الکترونیک', beauty: 'زیبایی', home: 'خانه', travel: 'سفر', sport: 'ورزش', betting: 'شرط‌بندی',
      restaurants: 'رستوران‌ها', food: 'غذا', entertainment: 'سرگرمی', kosherRestaurants: 'رستوران‌های کوشر', kosherStores: 'فروشگاه‌های کوشر'
    },
    buttons: { viewDeals: 'مشاهده پیشنهادها', getDeal: 'دریافت پیشنهاد', visitStore: 'مشاهده فروشگاه', copyCode: 'کپی کد', search: 'جستجو', popularSearches: 'جستجوهای محبوب' },
    search: { placeholder: 'جستجوی پیشنهادها، فروشگاه‌ها، رستوران‌ها و موارد دیگر', results: 'نتایج جستجو', noResults: 'نتیجه‌ای برای جستجوی شما یافت نشد.' },
    home: { heroTitle: 'پیشنهادهای جهانی، کدهای تخفیف و پیشنهادهای سبک زندگی', heroSubtitle: 'تخفیف‌های تأییدشده در خرید، رستوران‌ها، سرگرمی، سفر، ورزش و شرط‌بندی را کشف کنید.', featured: 'پیشنهادهای ویژه' },
    kosher: { rating: 'امتیاز', reviews: 'نظر', viewOnMap: 'مشاهده روی نقشه', promoCode: 'کد تخفیف' },
    legal: {
      privacyTitle: 'سیاست حریم خصوصی و پردازش داده‌ها', privacyBody: 'GORGONA ONE از احراز هویت امن و ساختارهای آماده برای تحلیل، ردیابی همکاران و کسب درآمد استفاده می‌کند.',
      termsTitle: 'شرایط استفاده و افشای همکاری', termsBody: 'تمامی پیشنهادها و تخفیف‌ها باید پیش از استفاده مستقیماً با فروشنده یا سایت شرط‌بندی تأیید شوند.',
      cookiesTitle: 'نحوه استفاده GORGONA ONE از کوکی‌ها', cookiesBody: 'ما از کوکی‌ها برای به‌خاطرسپاری تنظیمات زبان، ذخیره اطلاعات نشست، بهبود تحلیل‌ها و پشتیبانی از انتساب همکاران استفاده می‌کنیم و در عین حال تجربه‌ای سریع و شخصی‌سازی‌شده حفظ می‌شود.',
      disclosureTitle: 'نحوه عملکرد کمیسیون‌های همکاری', disclosureBody: 'GORGONA ONE ممکن است هنگامی که کاربران روی لینک‌های همکاران کلیک کرده و اقدامات واجد شرایط را تکمیل می‌کنند، کمیسیون دریافت کند. این به حفظ پلتفرم و تأمین مالی ابزارهای جستجو کمک می‌کند.',
      agreementTitle: 'شرایط همکاری فروشندگان و همکاران', agreementBody: 'همکاران تأییدشده متعهد می‌شوند اطلاعات دقیق پیشنهادها را ارائه دهند، الزامات قانونی را رعایت کنند و از پلتفرم طبق قوانین GORGONA ONE استفاده کنند.'
    },
    partnerForm: { title: 'ثبت‌نام همکار', companyName: 'نام شرکت', website: 'وب‌سایت', contactEmail: 'ایمیل تماس', category: 'دسته‌بندی', submit: 'درخواست همکاری' }
  },
  it: {
    nav: { home: 'Home', stores: 'Negozi', coupons: 'Coupon', rentals: 'Noleggi', sportsbook: 'Scommesse sportive', admin: 'Amministrazione', search: 'Cerca offerte' },
    categories: {
      shopping: 'Shopping', fashion: 'Moda', electronics: 'Elettronica', beauty: 'Bellezza', home: 'Casa', travel: 'Viaggi', sport: 'Sport', betting: 'Scommesse',
      restaurants: 'Ristoranti', food: 'Cibo', entertainment: 'Intrattenimento', kosherRestaurants: 'Ristoranti Kosher', kosherStores: 'Negozi Kosher'
    },
    buttons: { viewDeals: 'Vedi offerte', getDeal: 'Ottieni offerta', visitStore: 'Visita negozio', copyCode: 'Copia codice', search: 'Cerca', popularSearches: 'Ricerche popolari' },
    search: { placeholder: 'Cerca offerte, negozi, ristoranti e altro', results: 'Risultati di ricerca', noResults: 'Nessun risultato trovato per la tua ricerca.' },
    home: { heroTitle: 'Offerte globali, codici promozionali e proposte lifestyle', heroSubtitle: 'Scopri sconti verificati su shopping, ristoranti, intrattenimento, viaggi, sport e scommesse.', featured: 'Offerte in evidenza' },
    kosher: { rating: 'Valutazione', reviews: 'recensioni', viewOnMap: 'Visualizza sulla mappa', promoCode: 'Codice promozionale' },
    legal: {
      privacyTitle: 'Informativa sulla privacy e gestione dei dati', privacyBody: 'GORGONA ONE utilizza un’autenticazione sicura e strutture pronte per analisi, tracciamento affiliati e monetizzazione.',
      termsTitle: 'Termini di utilizzo e divulgazioni sugli affiliati', termsBody: 'Tutte le offerte e promozioni devono essere verificate direttamente con il commerciante o il bookmaker prima dell’uso.',
      cookiesTitle: 'Come GORGONA ONE utilizza i cookie', cookiesBody: 'Utilizziamo i cookie per ricordare le preferenze linguistiche, memorizzare i dati di sessione, migliorare le analisi e supportare l’attribuzione degli affiliati, mantenendo un’esperienza veloce e personalizzata.',
      disclosureTitle: 'Come funzionano le commissioni di affiliazione', disclosureBody: 'GORGONA ONE può guadagnare commissioni quando gli utenti fanno clic e completano azioni idonee tramite link partner. Questo aiuta a sostenere la piattaforma e finanziare gli strumenti di scoperta.',
      agreementTitle: 'Termini di partnership con commercianti e affiliati', agreementBody: 'I partner approvati accettano di fornire dettagli accurati sulle promozioni, rispettare i requisiti legali e utilizzare la piattaforma secondo le regole stabilite da GORGONA ONE.'
    },
    partnerForm: { title: 'Registrazione partner', companyName: 'Nome azienda', website: 'Sito web', contactEmail: 'Email di contatto', category: 'Categoria', submit: 'Candidati come partner' }
  },
  fr: {
    nav: { home: 'Accueil', stores: 'Boutiques', coupons: 'Coupons', rentals: 'Locations', sportsbook: 'Paris sportifs', admin: 'Administration', search: 'Rechercher des offres' },
    categories: {
      shopping: 'Shopping', fashion: 'Mode', electronics: 'Électronique', beauty: 'Beauté', home: 'Maison', travel: 'Voyage', sport: 'Sport', betting: 'Paris',
      restaurants: 'Restaurants', food: 'Alimentation', entertainment: 'Divertissement', kosherRestaurants: 'Restaurants casher', kosherStores: 'Magasins casher'
    },
    buttons: { viewDeals: 'Voir les offres', getDeal: 'Obtenir l’offre', visitStore: 'Visiter la boutique', copyCode: 'Copier le code', search: 'Rechercher', popularSearches: 'Recherches populaires' },
    search: { placeholder: 'Recherchez des offres, boutiques, restaurants et plus', results: 'Résultats de recherche', noResults: 'Aucun résultat trouvé pour votre recherche.' },
    home: { heroTitle: 'Offres mondiales, codes promo et bons plans lifestyle', heroSubtitle: 'Découvrez des réductions vérifiées dans le shopping, la restauration, le divertissement, les voyages, le sport et les paris.', featured: 'Offres en vedette' },
    kosher: { rating: 'Note', reviews: 'avis', viewOnMap: 'Voir sur la carte', promoCode: 'Code promo' },
    legal: {
      privacyTitle: 'Politique de confidentialité et traitement des données', privacyBody: 'GORGONA ONE utilise une authentification sécurisée ainsi que des structures prêtes pour l’analyse, le suivi des affiliés et la monétisation.',
      termsTitle: 'Conditions d’utilisation et divulgations d’affiliation', termsBody: 'Toutes les offres et promotions doivent être vérifiées directement auprès du marchand ou du bookmaker avant utilisation.',
      cookiesTitle: 'Comment GORGONA ONE utilise les cookies', cookiesBody: 'Nous utilisons des cookies pour mémoriser les préférences linguistiques, stocker les données de session, améliorer les analyses et soutenir l’attribution des affiliés, tout en gardant une expérience rapide et personnalisée.',
      disclosureTitle: 'Comment fonctionnent les commissions d’affiliation', disclosureBody: 'GORGONA ONE peut percevoir des commissions lorsque les utilisateurs cliquent et complètent des actions qualifiées via des liens partenaires. Cela aide à soutenir la plateforme et à financer les outils de découverte.',
      agreementTitle: 'Conditions de partenariat marchands et affiliés', agreementBody: 'Les partenaires approuvés s’engagent à fournir des informations exactes sur les promotions, à respecter les exigences légales et à utiliser la plateforme selon les règles établies par GORGONA ONE.'
    },
    partnerForm: { title: 'Inscription partenaire', companyName: 'Nom de l’entreprise', website: 'Site web', contactEmail: 'E-mail de contact', category: 'Catégorie', submit: 'Postuler comme partenaire' }
  },
  pl: {
    nav: { home: 'Strona główna', stores: 'Sklepy', coupons: 'Kupony', rentals: 'Wynajem', sportsbook: 'Zakłady sportowe', admin: 'Administracja', search: 'Szukaj ofert' },
    categories: {
      shopping: 'Zakupy', fashion: 'Moda', electronics: 'Elektronika', beauty: 'Uroda', home: 'Dom', travel: 'Podróże', sport: 'Sport', betting: 'Zakłady',
      restaurants: 'Restauracje', food: 'Jedzenie', entertainment: 'Rozrywka', kosherRestaurants: 'Restauracje koszerne', kosherStores: 'Sklepy koszerne'
    },
    buttons: { viewDeals: 'Zobacz oferty', getDeal: 'Odbierz ofertę', visitStore: 'Odwiedź sklep', copyCode: 'Kopiuj kod', search: 'Szukaj', popularSearches: 'Popularne wyszukiwania' },
    search: { placeholder: 'Szukaj ofert, sklepów, restauracji i nie tylko', results: 'Wyniki wyszukiwania', noResults: 'Nie znaleziono wyników dla Twojego wyszukiwania.' },
    home: { heroTitle: 'Globalne oferty, kody promocyjne i propozycje lifestyle', heroSubtitle: 'Odkryj zweryfikowane zniżki w zakupach, restauracjach, rozrywce, podróżach, sporcie i zakładach.', featured: 'Polecane oferty' },
    kosher: { rating: 'Ocena', reviews: 'opinii', viewOnMap: 'Zobacz na mapie', promoCode: 'Kod promocyjny' },
    legal: {
      privacyTitle: 'Polityka prywatności i przetwarzanie danych', privacyBody: 'GORGONA ONE korzysta z bezpiecznego uwierzytelniania oraz struktur gotowych do analityki, śledzenia partnerów i monetyzacji.',
      termsTitle: 'Warunki korzystania i informacje o programie partnerskim', termsBody: 'Wszystkie oferty i promocje należy zweryfikować bezpośrednio u sprzedawcy lub bukmachera przed skorzystaniem z nich.',
      cookiesTitle: 'Jak GORGONA ONE wykorzystuje pliki cookie', cookiesBody: 'Używamy plików cookie, aby zapamiętywać preferencje językowe, przechowywać dane sesji, ulepszać analitykę i wspierać atrybucję partnerską, zachowując szybkie i spersonalizowane doświadczenie.',
      disclosureTitle: 'Jak działają prowizje partnerskie', disclosureBody: 'GORGONA ONE może uzyskiwać prowizje, gdy użytkownicy klikają i wykonują kwalifikujące się działania za pośrednictwem linków partnerskich. Pomaga to utrzymać platformę i finansować narzędzia wyszukiwania.',
      agreementTitle: 'Warunki współpracy dla sprzedawców i partnerów', agreementBody: 'Zatwierdzeni partnerzy zobowiązują się dostarczać dokładne informacje o promocjach, przestrzegać wymogów prawnych i korzystać z platformy zgodnie z zasadami ustalonymi przez GORGONA ONE.'
    },
    partnerForm: { title: 'Rejestracja partnera', companyName: 'Nazwa firmy', website: 'Strona internetowa', contactEmail: 'E-mail kontaktowy', category: 'Kategoria', submit: 'Aplikuj jako partner' }
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
