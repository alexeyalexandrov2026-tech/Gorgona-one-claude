export const translations = {
  en: {
    nav: {
      home: 'Home',
      stores: 'Stores',
      coupons: 'Coupons',
      rentals: 'Rentals',
      sportsbook: 'Sportsbook',
      admin: 'Admin',
      search: 'Search deals'
    },
    categories: {
      shopping: 'Shopping',
      fashion: 'Fashion',
      electronics: 'Electronics',
      beauty: 'Beauty',
      home: 'Home',
      travel: 'Travel',
      sport: 'Sport',
      betting: 'Betting',
      restaurants: 'Restaurants',
      food: 'Food',
      entertainment: 'Entertainment'
    },
    buttons: {
      viewDeals: 'View Deals',
      getDeal: 'Get Deal',
      visitStore: 'Visit Store',
      copyCode: 'Copy Code',
      search: 'Search',
      popularSearches: 'Popular Searches'
    },
    search: {
      placeholder: 'Search deals, stores, restaurants, and more',
      results: 'Search results',
      noResults: 'No results found for your search.'
    },
    home: {
      heroTitle: 'Global deals, promo codes, and lifestyle offers',
      heroSubtitle: 'Discover verified discounts across shopping, restaurants, entertainment, travel, sports, and betting.',
      featured: 'Featured Deals'
    }
  },
  ru: {
    nav: {
      home: 'Главная',
      stores: 'Магазины',
      coupons: 'Купоны',
      rentals: 'Аренда',
      sportsbook: 'Спортивные ставки',
      admin: 'Админ',
      search: 'Поиск предложений'
    },
    categories: {
      shopping: 'Шопинг',
      fashion: 'Мода',
      electronics: 'Электроника',
      beauty: 'Красота',
      home: 'Дом',
      travel: 'Путешествия',
      sport: 'Спорт',
      betting: 'Ставки',
      restaurants: 'Рестораны',
      food: 'Еда',
      entertainment: 'Развлечения'
    },
    buttons: {
      viewDeals: 'Смотреть предложения',
      getDeal: 'Получить скидку',
      visitStore: 'Перейти в магазин',
      copyCode: 'Копировать код',
      search: 'Поиск',
      popularSearches: 'Популярные запросы'
    },
    search: {
      placeholder: 'Найдите скидки, магазины, рестораны и многое другое',
      results: 'Результаты поиска',
      noResults: 'По вашему запросу ничего не найдено.'
    },
    home: {
      heroTitle: 'Глобальные скидки, промокоды и предложения для жизни',
      heroSubtitle: 'Открывайте проверенные скидки в шопинге, ресторанах, развлечениях, путешествиях, спорте и ставках.',
      featured: 'Рекомендуемые предложения'
    }
  }
};

export function getTranslation(locale) {
  return translations[locale] || translations.en;
}
