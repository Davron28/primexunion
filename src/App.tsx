import React, { useState } from 'react';
import { Globe, Phone, Mail, MapPin, Menu, X, Star, Award, Users, TrendingUp } from 'lucide-react';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [language, setLanguage] = useState('en');

  const translations = {
    en: {
      nav: {
        home: 'Home',
        about: 'About',
        products: 'Products',
        contact: 'Contact'
      },
      hero: {
        title: 'Premium Automotive Solutions',
        subtitle: 'Your trusted partner for high-quality motor oils, filters, and automotive parts',
        cta: 'Explore Products'
      },
      about: {
        title: 'About PrimeX Union',
        description: 'PrimeX Union was created on January 18, 2005, and is owned by Ziyovuddin Kamolidinovich Mukhtorkhanov. We are a leading distributor of premium automotive products, specializing in motor oils, filters, and essential car maintenance solutions. In 2024-2025, we expanded into the restaurant industry by acquiring premium franchises including Pierre Hermé Paris, Le Pain Quotidien, and Yogurt Factory, currently launching in Tashkent. With years of experience across industries, we provide reliable products and exceptional dining experiences.',
        founded: 'Founded: January 18, 2005',
        ownership: 'Owner: Ziyovuddin Kamolidinovich Mukhtorkhanov',
        location: 'Location: Republic of Uzbekistan, Tashkent city, Sergeli district, citizens\' assembly of the Bunyobod mahalla, Yangi Sergeli street, house 1',
        stats: [
          { icon: Users, number: '10,000+', label: 'Satisfied Customers' },
          { icon: Award, number: '50+', label: 'Premium Brands' },
          { icon: TrendingUp, number: '15+', label: 'Years Experience' },
          { icon: Star, number: '4.9/5', label: 'Customer Rating' }
        ]
      },
      products: {
        title: 'Our Premium Products',
        subtitle: 'Discover our comprehensive range of automotive solutions',
        items: [
          {
            name: 'FUCHS Motor Oil',
            description: 'Premium synthetic motor oils for optimal engine performance',
            image: '/FUCHS_Logo-Claim_Color_sRGB.png',
            link: 'https://www.fuchs.com/'
          },
          {
            name: 'LUXE Motor Oil',
            description: 'High-quality lubricants for all vehicle types',
            image: '/logo_с_надписью.png',
            link: 'https://www.luxe-oil.ru/'
          },
          {
            name: 'MANN-FILTER',
            description: 'Professional filtration solutions for automotive applications',
            image: '/mann-filter_facebook_og-preview.jpg',
            link: 'https://www.mann-filter.com/'
          },
          {
            name: 'SRS Motor Oil',
            description: 'Advanced engine oils for superior protection',
            image: '/IMG_9055.PNG',
            link: 'https://www.srs-oil.com/en'
          },
          {
            name: 'North Sea Motor Oil',
            description: 'Marine-grade lubricants for demanding conditions',
            image: 'https://images.seeklogo.com/logo-png/20/1/north-sea-lubricants-logo-png_seeklogo-201525.png',
            link: 'https://www.northsealubricants.com/ru/'
          },
          {
            name: 'OSRAM Automotive',
            description: 'Premium automotive lighting solutions',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Osram_Logo.svg/744px-Osram_Logo.svg.png',
            link: 'https://www.osram.com/'
          },
          {
            name: 'DENSO Auto Parts',
            description: 'Original equipment quality automotive components',
            image: 'https://logos-world.net/wp-content/uploads/2023/03/Denso-Logo.png',
            link: 'https://www.densoautoparts.com/'
          },
          {
            name: 'Alaska Antifreeze',
            description: 'Premium coolants and antifreeze solutions',
            image: '/IMG_9579.PNG',
            link: 'https://www.tosol-info.ru/'
          },
          {
            name: 'Sputnik Antifreeze',
            description: 'High-performance antifreeze and coolant solutions for extreme weather conditions',
            image: '/sputnik.06.jpg',
            link: 'https://avto161.com/catalog/2635/25015/'
          },
          {
            name: 'Air Maxx Filters',
            description: 'Our own air filter factory with production capacity of 5.0 million air filters per year, featuring a 14,000 square meter production base. Key client: General Motors Uzbekistan.',
            image: '/IMG_7736.JPG',
            link: '#'
          }
        ]
      },
      restaurants: {
        title: 'Premium Restaurant Franchises',
        subtitle: 'Exciting new restaurant concepts launching in Tashkent',
        items: [
          {
            name: 'Pierre Hermé Paris',
            description: 'World-renowned French pastry house famous for luxury macarons and innovative desserts. Franchise acquired in 2024-2025, currently at launch stage in Tashkent.',
            image: 'https://images.seeklogo.com/logo-png/10/2/pierre-herme-paris-logo-png_seeklogo-108798.png',
            link: 'https://www.pierreherme.com/'
          },
          {
            name: 'Le Pain Quotidien',
            description: 'Belgian bakery chain offering organic breads, pastries, and communal dining experiences. Franchise acquired in 2024-2025, currently at launch stage in Tashkent.',
            image: 'https://cdn.asp.events/CLIENT_Business_DCF4FF16_FAB8_0D4B_807D8955A223D6D8/sites/The-Franchise-Show-2021/media/libraries/exhibitors/231ce311-9516-11ef-b52106bd0f937899-logo.png/fit-in/500x9999/filters:no_upscale()',
            link: 'https://www.lepainquotidien.com/'
          },
          {
            name: 'Go Crispy Chicken',
            description: 'Premium fried chicken restaurant chain known for crispy, flavorful chicken and innovative recipes. Franchise acquired in 2024-2025, currently at launch stage in Tashkent.',
            image: '/IMAGE 2025-09-17 19:49:21.jpg',
            link: 'https://www.gocrispy.com/'
          },
          {
            name: 'Yogurt Factory',
            description: 'Premium frozen yogurt chain offering healthy and delicious frozen treats with endless toppings. Franchise acquired in 2024-2025, currently at launch stage in Tashkent.',
            image: 'https://upload.wikimedia.org/wikipedia/commons/3/3d/Logo_Yogurt_Factory.png',
            link: 'https://yogurtfactory.fr/'
          }
        ]
      },
      hospitality: {
        title: 'Other Achievements',
        subtitle: 'Additional ventures and accomplishments across various industries',
        items: [
          {
            name: 'Sherwood Resort',
            description: 'Located in Tashkent region, Bostanlyk district, spanning 20,000 square meters total area. In March 2023, we acquired "Anhor Relax Zone" (1.9 hectares) featuring 3,800 sqm cottages and hotel accommodating 120 clients. After comprehensive reconstruction, we successfully rebranded it as "Sherwood Resort", now offering premium hospitality experiences with world-class amenities.',
            image: '/IMAGE 2025-09-18 14:27:36.jpg',
            link: 'https://www.instagram.com/sherwood_resort?igsh=b203M3pyNnpkMXp1'
          },
          {
            name: 'Prime Unity',
            description: 'Major real estate development project spanning 2 hectares, featuring a modern shopping mall, residential homes and towers, and a comprehensive business center. This mixed-use development represents our expansion into the real estate sector.',
            image: '/IMG_9580.JPG',
            link: '#'
          },
          {
            name: 'New Project in Oqtosh Apartment Hotel',
            description: 'Total area of 20,000 square meters, one of the best projects in Uzbekistan. This luxury apartment hotel development represents our commitment to premium hospitality and residential excellence.',
            image: '/IMG_9581.JPG',
            link: '#'
          }
        ]
      },
      contact: {
        title: 'Contact Us',
        subtitle: 'Get in touch with our team for inquiries and support',
        info: [
          { icon: Phone, label: 'Phone', value: '+998(95)148-0000' },
          { icon: Mail, label: 'Email', value: 'k.mukhammad@restofoods.uz' },
          { icon: MapPin, label: 'Address', value: 'Republic of Uzbekistan, Tashkent city, Sergeli district, citizens\' meeting of Bunyodobod neighborhood, Yangi Sergeli street, house 1..' }
        ]
      }
    },
    ru: {
      nav: {
        home: 'Главная',
        about: 'О нас',
        products: 'Продукция',
        contact: 'Контакты'
      },
      hero: {
        title: 'Премиальные автомобильные решения и ресторанные франшизы',
        subtitle: 'Ваш надежный партнер в области высококачественных моторных масел, фильтров, автозапчастей и премиальных ресторанных концепций',
        cta: 'Посмотреть продукцию'
      },
      about: {
        title: 'О компании PrimeX Union',
        description: 'Компания PrimeX Union была создана 18 января 2005 года и принадлежит Зиёвуддину Камолидиновичу Мухторханову. Мы являемся ведущим дистрибьютором премиальных автомобильных продуктов, специализирующимся на моторных маслах, фильтрах и основных решениях для обслуживания автомобилей. В 2024-2025 годах мы расширились в ресторанную индустрию, приобретя премиальные франшизы Pierre Hermé Paris, Le Pain Quotidien и Yogurt Factory, которые в настоящее время запускаются в Ташкенте. Имея многолетний опыт работы в различных отраслях, мы предоставляем надежные продукты и исключительные ресторанные впечатления.',
        founded: 'Основана: 18 января 2005 года',
        ownership: 'Владелец: Зиёвуддин Камолидинович Мухторханов',
        location: 'Местоположение: Республика Узбекистан, город Ташкент, Сергелийский район, собрание граждан махалли Буньобод, улица Янги Сергели, дом 1',
        stats: [
          { icon: Users, number: '10,000+', label: 'Довольных клиентов' },
          { icon: Award, number: '50+', label: 'Премиальных брендов' },
          { icon: TrendingUp, number: '15+', label: 'Лет опыта' },
          { icon: Star, number: '4.9/5', label: 'Рейтинг клиентов' }
        ]
      },
      products: {
        title: 'Наша премиальная продукция',
        subtitle: 'Откройте для себя наш полный ассортимент автомобильных решений',
        items: [
          {
            name: 'Моторное масло FUCHS',
            description: 'Премиальные синтетические моторные масла для оптимальной работы двигателя',
            image: '/FUCHS_Logo-Claim_Color_sRGB.png',
            link: 'https://www.fuchs.com/'
          },
          {
            name: 'Моторное масло LUXE',
            description: 'Высококачественные смазочные материалы для всех типов транспортных средств',
            image: '/logo_с_надписью.png',
            link: 'https://www.luxe-oil.ru/'
          },
          {
            name: 'MANN-FILTER',
            description: 'Профессиональные решения фильтрации для автомобильных применений',
            image: '/mann-filter_facebook_og-preview.jpg',
            link: 'https://www.mann-filter.com/'
          },
          {
            name: 'Моторное масло SRS',
            description: 'Передовые моторные масла для превосходной защиты',
            image: '/IMG_9055.PNG',
            link: 'https://www.srs-oil.com/en'
          },
          {
            name: 'Моторное масло North Sea',
            description: 'Морские смазочные материалы для требовательных условий',
            image: 'https://images.seeklogo.com/logo-png/20/1/north-sea-lubricants-logo-png_seeklogo-201525.png',
            link: 'https://www.northsealubricants.com/ru/'
          },
          {
            name: 'OSRAM Automotive',
            description: 'Премиальные автомобильные осветительные решения',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Osram_Logo.svg/744px-Osram_Logo.svg.png',
            link: 'https://www.osram.com/'
          },
          {
            name: 'Автозапчасти DENSO',
            description: 'Автомобильные компоненты качества оригинального оборудования',
            image: 'https://logos-world.net/wp-content/uploads/2023/03/Denso-Logo.png',
            link: 'https://www.densoautoparts.com/'
          },
          {
            name: 'Антифриз Alaska',
            description: 'Премиальные охлаждающие жидкости и антифризы',
            image: '/IMG_9579.PNG',
            link: 'https://www.tosol-info.ru/'
          },
          {
            name: 'Антифриз Sputnik',
            description: 'Высокопроизводительные антифризы и охлаждающие жидкости для экстремальных погодных условий',
            image: '/sputnik.06.jpg',
            link: 'https://avto161.com/catalog/2635/25015/'
          },
          {
            name: 'Фильтры Air Maxx',
            description: 'Наша собственная фабрика воздушных фильтров с производственной мощностью 5,0 миллионов воздушных фильтров в год, с производственной базой площадью 14,000 квадратных метров. Ключевой клиент: General Motors Узбекистан.',
            image: '/IMG_7736.JPG',
            link: '#'
          }
        ]
      },
      restaurants: {
        title: 'Премиальные ресторанные франшизы',
        subtitle: 'Захватывающие новые ресторанные концепции, запускаемые в Ташкенте',
        items: [
          {
            name: 'Pierre Hermé Paris',
            description: 'Всемирно известная французская кондитерская, знаменитая роскошными макаронами и инновационными десертами. Франшиза приобретена в 2024-2025 годах, в настоящее время на стадии запуска в Ташкенте.',
            image: 'https://images.seeklogo.com/logo-png/10/2/pierre-herme-paris-logo-png_seeklogo-108798.png',
            link: 'https://www.pierreherme.com/'
          },
          {
            name: 'Le Pain Quotidien',
            description: 'Бельгийская сеть пекарен, предлагающая органический хлеб, выпечку и общественное питание. Франшиза приобретена в 2024-2025 годах, в настоящее время на стадии запуска в Ташкенте.',
            image: 'https://cdn.asp.events/CLIENT_Business_DCF4FF16_FAB8_0D4B_807D8955A223D6D8/sites/The-Franchise-Show-2021/media/libraries/exhibitors/231ce311-9516-11ef-b52106bd0f937899-logo.png/fit-in/500x9999/filters:no_upscale()',
            link: 'https://www.lepainquotidien.com/'
          },
          {
            name: 'Go Crispy Chicken',
            description: 'Премиальная сеть ресторанов жареной курицы, известная хрустящей, ароматной курицей и инновационными рецептами. Франшиза приобретена в 2024-2025 годах, в настоящее время на стадии запуска в Ташкенте.',
            image: '/IMAGE 2025-09-17 19:49:21.jpg',
            link: 'https://www.gocrispy.com/'
          },
          {
            name: 'Yogurt Factory',
            description: 'Премиальная сеть замороженного йогурта, предлагающая здоровые и вкусные замороженные лакомства с бесконечными топпингами. Франшиза приобретена в 2024-2025 годах, в настоящее время на стадии запуска в Ташкенте.',
            image: 'https://upload.wikimedia.org/wikipedia/commons/3/3d/Logo_Yogurt_Factory.png',
            link: 'https://yogurtfactory.fr/'
          }
        ]
      },
      hospitality: {
        title: 'Другие достижения',
        subtitle: 'Дополнительные предприятия и достижения в различных отраслях',
        items: [
          {
            name: 'Sherwood Resort',
            description: 'Расположен в Ташкентской области, Бостанлыкский район, общая площадь 20,000 квадратных метров. В марте 2023 года мы приобрели "Анхор Релакс Зону" (1,9 гектара) с коттеджами площадью 3,800 кв.м и отелем на 120 клиентов. После комплексной реконструкции мы успешно ребрендировали его в "Sherwood Resort", который теперь предлагает премиальные гостиничные услуги с удобствами мирового класса.',
            image: '/IMAGE 2025-09-18 14:27:36.jpg',
            link: 'https://www.instagram.com/sherwood_resort?igsh=b203M3pyNnpkMXp1'
          },
          {
            name: 'Prime Unity',
            description: 'Крупный проект развития недвижимости площадью 2 гектара, включающий современный торговый центр, жилые дома и башни, а также комплексный бизнес-центр. Этот многофункциональный комплекс представляет наше расширение в сектор недвижимости.',
            image: '/IMG_9580.JPG',
            link: '#'
          },
          {
            name: 'Новый проект в Октош Апартамент Отель',
            description: 'Общая площадь 20,000 квадратных метров, один из лучших проектов в Узбекистане. Этот роскошный апартамент-отель представляет нашу приверженность премиальному гостеприимству и жилищному совершенству.',
            image: '/IMG_9581.JPG',
            link: '#'
          }
        ]
      },
      contact: {
        title: 'Свяжитесь с нами',
        subtitle: 'Свяжитесь с нашей командой для запросов и поддержки',
        info: [
          { icon: Phone, label: 'Телефон', value: '+998(95)148-0000' },
          { icon: Mail, label: 'Email', value: 'k.mukhammad@restofoods.uz' },
          { icon: MapPin, label: 'Адрес', value: 'Republic of Uzbekistan, Tashkent city, Sergeli district, citizens\' meeting of Bunyodobod neighborhood, Yangi Sergeli street, house 1..' }
        ]
      }
    }
  };

  const t = translations[language as keyof typeof translations];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <h1 className="text-2xl font-bold text-blue-600">PrimeX Union</h1>
              </div>
            </div>
            
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                  {t.nav.home}
                </button>
                <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                  {t.nav.about}
                </button>
                <button onClick={() => scrollToSection('products')} className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                  {t.nav.products}
                </button>
                <button onClick={() => scrollToSection('restaurants')} className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                  Restaurants
                </button>
                <button onClick={() => scrollToSection('other-achievements')} className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                  Other Achievements
                </button>
                <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                  {t.nav.contact}
                </button>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <button
                onClick={() => setLanguage(language === 'en' ? 'ru' : 'en')}
                className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors"
              >
                <Globe className="h-4 w-4" />
                <span className="text-sm font-medium">{language === 'en' ? 'RU' : 'EN'}</span>
              </button>
              
              <div className="md:hidden">
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="text-gray-700 hover:text-blue-600 transition-colors"
                >
                  {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium w-full text-left transition-colors">
                {t.nav.home}
              </button>
              <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium w-full text-left transition-colors">
                {t.nav.about}
              </button>
              <button onClick={() => scrollToSection('products')} className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium w-full text-left transition-colors">
                {t.nav.products}
              </button>
              <button onClick={() => scrollToSection('restaurants')} className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium w-full text-left transition-colors">
                Restaurants
              </button>
              <button onClick={() => scrollToSection('other-achievements')} className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium w-full text-left transition-colors">
                Other Achievements
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium w-full text-left transition-colors">
                {t.nav.contact}
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-16 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              {t.hero.title}
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              {t.hero.subtitle}
            </p>
            <button 
              onClick={() => scrollToSection('products')}
              className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              {t.hero.cta}
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {t.about.title}
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              {t.about.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {t.about.stats.map((stat, index) => (
              <div key={index} className="text-center p-6 bg-gray-50 rounded-lg hover:shadow-lg transition-shadow">
                <stat.icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {t.products.title}
            </h2>
            <p className="text-lg text-gray-600">
              {t.products.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {t.products.items.map((product, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow group">
                <div className="aspect-w-16 aspect-h-9 overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className={`w-full h-48 group-hover:scale-105 transition-transform duration-300 ${
                      product.name === 'OSRAM Automotive' || product.name === 'SRS Motor Oil' || product.name === 'Alaska Antifreeze' || product.name === 'LUXE Motor Oil' || product.name === 'Sputnik Antifreeze' || product.name === 'Антифриз Sputnik'
                        ? product.name === 'Sputnik Antifreeze' || product.name === 'Антифриз Sputnik'
                          ? 'object-contain bg-gray-50 p-2'
                          : 'object-contain bg-gray-50 p-4'
                        : product.name === 'Air Maxx Filters'
                        ? 'object-cover aspect-square'
                        : 'object-cover'
                    }`}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{product.name}</h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  {product.link !== '#' && (
                    <a 
                      href={product.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors"
                    >
                      Learn More
                      <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Restaurants Section */}
      <section id="restaurants" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {t.restaurants.title}
            </h2>
            <p className="text-lg text-gray-600">
              {t.restaurants.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {t.restaurants.items.map((restaurant, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow group">
                <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 text-sm font-semibold">
                  {language === 'en' ? 'Franchise 2024-2025 • Launch Stage in Tashkent' : 'Франшиза 2024-2025 • Стадия запуска в Ташкенте'}
                </div>
                <div className="aspect-w-16 aspect-h-9 overflow-hidden">
                  <img 
                    src={restaurant.image} 
                    alt={restaurant.name}
                    className={`w-full h-48 group-hover:scale-105 transition-transform duration-300 ${
                      restaurant.name === 'Le Pain Quotidien' 
                        ? 'object-contain bg-gray-50 p-4' 
                        : 'object-cover'
                    }`}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{restaurant.name}</h3>
                  <p className="text-gray-600 mb-4">{restaurant.description}</p>
                  <a 
                    href={restaurant.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors"
                  >
                    Learn More
                    <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Other Achievements Section */}
      <section id="other-achievements" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {t.hospitality.title}
            </h2>
            <p className="text-lg text-gray-600">
              {t.hospitality.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {t.hospitality.items.map((achievement, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow group">
                <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-4 py-2 text-sm font-semibold">
                  {achievement.name === 'Sherwood Resort'
                    ? (language === 'en' ? 'Achievement • Luxury Resort' : 'Достижение • Роскошный курорт')
                    : achievement.name.includes('Oqtosh') || achievement.name.includes('Октош')
                    ? (language === 'en' ? 'In Development • Luxury Apartment Hotel' : 'В разработке • Роскошный апартамент-отель')
                    : (language === 'en' ? 'Development • Real Estate Project' : 'Развитие • Проект недвижимости')
                  }
                </div>
                <div className="aspect-w-16 aspect-h-9 overflow-hidden">
                  <img 
                    src={achievement.image} 
                    alt={achievement.name}
                    className={`w-full h-48 group-hover:scale-105 transition-transform duration-300 ${
                      achievement.name.includes('Oqtosh') || achievement.name.includes('Октош')
                        ? 'object-cover aspect-square'
                        : 'object-contain bg-gray-50 p-4'
                    }`}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{achievement.name}</h3>
                  <p className="text-gray-600 mb-4">{achievement.description}</p>
                  {achievement.name === 'Sherwood Resort' && (
                    <a 
                      href={achievement.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors"
                    >
                      Visit Instagram
                      <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {t.contact.title}
            </h2>
            <p className="text-lg text-gray-600">
              {t.contact.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {t.contact.info.map((item, index) => (
              <div key={index} className="text-center p-6 bg-gray-50 rounded-lg hover:shadow-lg transition-shadow">
                <item.icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.label}</h3>
                <p className="text-gray-600">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">PrimeX Union</h3>
            <p className="text-gray-400 mb-8">Premium Automotive Solutions & Restaurant Franchises</p>
            <div className="border-t border-gray-800 pt-8">
              <p className="text-gray-400">© 2024 PrimeX Union. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;