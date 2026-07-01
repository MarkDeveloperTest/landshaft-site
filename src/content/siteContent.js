const instagramUrl =
  "https://www.instagram.com/_green_garden_ua?igsh=MXZjbW40ZTZ2eWlxbg==";
const telegramUrl = "https://t.me/bot_green_park_bot";
const withBase = (path) => `${import.meta.env.BASE_URL}${path.replace(/^\/+/, "")}`;

export const media = {
  heroGarden: {
    src: withBase("/assets/hero-garden.png"),
    webp: withBase("/assets/optimized/hero-garden.webp"),
    alt: "Сучасний приватний сад із кам'яними терасами, водою та стриженою зеленню.",
  },
  serviceDesign: {
    src: withBase("/assets/service-design.png"),
    webp: withBase("/assets/optimized/service-design.webp"),
    alt: "Ескізи ландшафтного проєкту, зразки матеріалів та рослинна палітра.",
  },
  projectEstate: {
    src: withBase("/assets/project-estate.png"),
    webp: withBase("/assets/optimized/project-estate.webp"),
    alt: "Формальний сад біля приватної резиденції з симетричною композицією.",
  },
  projectCourtyard: {
    src: withBase("/assets/project-courtyard.png"),
    webp: withBase("/assets/optimized/project-courtyard.webp"),
    alt: "Камерний двір із каменем, водоймою та багаторівневим озелененням.",
  },
  projectTerrace: {
    src: withBase("/assets/project-terrace.png"),
    webp: withBase("/assets/optimized/project-terrace.webp"),
    alt: "Терасований сад із м'якими посадками та спокійною зоною відпочинку.",
  },
  serviceCare: {
    src: withBase("/assets/service-care.png"),
    webp: withBase("/assets/optimized/service-care.webp"),
    alt: "Догляд за садом, формування рослин та сезонне утримання ділянки.",
  },
  socialPreview: {
    src: withBase("/assets/optimized/social-preview.png"),
    alt: "Landshaft — сучасний ландшафтний дизайн для приватних резиденцій.",
  },
};

export const siteMeta = {
  uk: {
    locale: "uk_UA",
    lang: "uk",
    siteName: "Landshaft",
    title: "Landshaft — сучасна ландшафтна архітектура",
    description:
      "Landshaft проєктує, реалізує та супроводжує приватні сади з архітектурною ясністю, спокійною пластикою і довготривалою цінністю.",
    themeColor: "#2a3825",
    siteUrl: import.meta.env.VITE_SITE_URL ?? "",
    ogImage: media.socialPreview.src,
    serviceArea: "Київ та приватні заміські об'єкти по Україні.",
    analyticsDomain: import.meta.env.VITE_PLAUSIBLE_DOMAIN ?? "",
  },
};

export const navItems = [
  { label: "Послуги", href: "/services" },
  { label: "Проєкти", href: "/projects" },
  { label: "Процес", href: "/process" },
  { label: "Контакти", href: "/contact" },
];

export const contactChannels = [
  {
    id: "instagram",
    label: "Instagram",
    handle: "@_green_garden_ua",
    description: "Референси та настрій майбутнього саду.",
    href: instagramUrl,
  },
  {
    id: "telegram",
    label: "Telegram",
    handle: "@bot_green_park_bot",
    description: "Швидкий контакт і фото ділянки.",
    href: telegramUrl,
  },
];

export const services = [
  {
    slug: "design",
    title: "Ландшафтний дизайн",
    kicker: "01",
    summary:
      "Планування простору, матеріалів і посадок у логіці будинку.",
    detail:
      "Починаємо з ділянки, світла і ритму життя. Формуємо ясну структуру простору, маршрутів і посадок.",
    bullets: [
      "Аналіз ділянки",
      "Матеріали та посадки",
      "Комплект для реалізації",
    ],
    media: media.serviceDesign,
  },
  {
    slug: "build",
    title: "Реалізація",
    kicker: "02",
    summary:
      "Реалізація з контролем матеріалів, посадок і деталей.",
    detail:
      "Супроводжуємо роботи від підготовки основ до фінальних посадок. Тримаємо якість і цілісність задуму.",
    bullets: [
      "Мощення та водні елементи",
      "Посадки й освітлення",
      "Контроль якості",
    ],
    media: media.projectEstate,
  },
  {
    slug: "care",
    title: "Догляд за садом",
    kicker: "03",
    summary:
      "Сервіс, що допомагає саду зберігати форму і характер.",
    detail:
      "Після реалізації можемо вести сад далі. Сезонні роботи й коригування підтримують задум у часі.",
    bullets: [
      "Сезонні роботи",
      "Формування рослин",
      "Точкові оновлення",
    ],
    media: media.serviceCare,
  },
];

export const projects = [
  {
    slug: "willow-grove",
    index: "01",
    title: "Willow Grove",
    location: "Приватна резиденція",
    summary:
      "Стриманий вхідний простір із геометрією, світлим каменем і чіткою віссю.",
    detail:
      "Баланс між представницьким образом і щоденним комфортом. Камінь дає спокій, рослини пом'якшують композицію.",
    media: media.projectEstate,
  },
  {
    slug: "meadow-house",
    index: "02",
    title: "Meadow House",
    location: "Камерний двір",
    summary:
      "Камерний двір із водою, м'якими рівнями й відчуттям приватності.",
    detail:
      "Тиша матеріалів, вода і стримані посадки. Простір зібраний у кілька ясних площин.",
    media: media.projectCourtyard,
  },
  {
    slug: "riverside-retreat",
    index: "03",
    title: "Riverside Retreat",
    location: "Сад вихідного дня",
    summary:
      "М'якший сценарій із терасами, довгими видами і спокійною атмосферою.",
    detail:
      "Композиція поступово переходить від чітких ліній до вільніших посадок. Відпочинок і природа працюють разом.",
    media: media.projectTerrace,
  },
];

export const processSteps = [
  {
    number: "01",
    title: "Дослідження",
    body:
      "Бриф, виїзд і аналіз ділянки, щоб точно визначити задачу.",
  },
  {
    number: "02",
    title: "Концепція",
    body:
      "Зводимо планування, матеріали й посадки в одну просторову систему.",
  },
  {
    number: "03",
    title: "Реалізація",
    body:
      "Координуємо роботи й контролюємо якість до фінальної деталі.",
  },
  {
    number: "04",
    title: "Супровід",
    body:
      "Налаштовуємо догляд і сезонний ритм, щоб сад добре розвивався з часом.",
  },
];

export const testimonials = [
  {
    quote:
      "Архітектура будинку природно продовжилася в саду.",
    author: "Приватний клієнт",
  },
];

export const pageSeo = {
  home: {
    title: "Landshaft — сучасна ландшафтна архітектура",
    description:
      "Ландшафтний дизайн, реалізація й догляд за приватними садами.",
  },
  services: {
    title: "Послуги — Landshaft",
    description:
      "Дизайн, реалізація та догляд за садом від концепції до сервісу.",
  },
  projects: {
    title: "Проєкти — Landshaft",
    description:
      "Добірка приватних садів Landshaft з ясною композицією і характером.",
  },
  process: {
    title: "Процес — Landshaft",
    description:
      "Бриф, концепція, реалізація та супровід саду.",
  },
  contact: {
    title: "Контакти — Landshaft",
    description:
      "Зв'яжіться з Landshaft через Instagram або Telegram.",
  },
  privacy: {
    title: "Політика приватності — Landshaft",
    description:
      "Коротко про дані, зовнішні контакти й аналітику на сайті.",
  },
  notFound: {
    title: "Сторінку не знайдено — Landshaft",
    description: "Сторінка не знайдена. Поверніться на головну Landshaft.",
  },
};

export const homeSections = {
  hero: {
    title: "Сади з характером.",
    body:
      "Проєктуємо, реалізуємо й супроводжуємо приватні сади.",
    primaryCta: { label: "Обговорити проєкт", href: "/contact" },
    secondaryCta: { label: "Дивитися проєкти", href: "/projects" },
    media: media.heroGarden,
  },
  statement: {
    title: "Простори зі змістом.",
    body:
      "Поєднуємо архітектуру, природу і точну роботу з матеріалом.",
    linkLabel: "Дізнатися про процес",
    linkHref: "/process",
    media: media.serviceDesign,
  },
  contact: {
    title: "Почнімо з розмови.",
    body:
      "Надішліть фото ділянки або короткий запит.",
  },
};

export const pageCopy = {
  home: {
    servicesIntro: {
      title: "Послуги без зайвого.",
      body: "Від концепції до догляду.",
    },
    projectsIntro: "Проєкти, де простір читається ясно.",
    processIntro: "Чіткий шлях від брифу до саду.",
  },
  services: {
    hero: {
      kicker: "Послуги",
      title: "Повний цикл для приватного саду.",
      body: "Дизайн, реалізація й догляд у спільній логіці.",
      cta: "Обговорити проєкт",
      secondaryCta: "Подивитися процес",
    },
    process: {
      title: "Процес",
      body: "Послідовно ведемо проєкт від першої зустрічі до догляду.",
    },
    value: {
      title: "Що отримує клієнт.",
      body: "Ясний задум, контроль реалізації і сад, який добре розвивається.",
    },
    contact: {
      title: "Якщо є ділянка, можна починати.",
      body: "Для старту достатньо кількох фото і короткого запиту.",
      cta: "Перейти до контактів",
    },
  },
  projects: {
    hero: {
      kicker: "Проєкти",
      title: "Сади, що звучать спокійно.",
      body: "Кілька сильних рішень замість зайвої декоративності.",
      cta: "Обговорити проєкт",
      secondaryCta: "Дивитися послуги",
    },
    closing: {
      title: "Кожен проєкт тримається однієї ідеї.",
      body: "Вода, камінь, посадки і маршрути працюють як одна композиція.",
    },
  },
  process: {
    hero: {
      kicker: "Процес",
      title: "Від брифу до саду, що добре живе в часі.",
      body: "Думаємо не лише про образ, а й про реалізацію та подальший догляд.",
      cta: "Обговорити проєкт",
      secondaryCta: "Подивитися послуги",
    },
    statement: {
      title: "Сад має бути переконливим і після здачі.",
      body: "Тому відразу закладаємо сервісний цикл і темп розвитку посадок.",
    },
  },
  contact: {
    hero: {
      kicker: "Контакти",
      title: "Почнімо розмову про сад.",
      body: "Для старту достатньо кількох фото, побажань і референсів.",
      primaryCta: "Instagram",
      secondaryCta: "Telegram",
    },
    channels: {
      title: "Напишіть там, де зручно.",
      body: "Instagram зручний для референсів. Telegram для швидкого старту.",
    },
    notes: {
      geographyLabel: "Територія роботи:",
      geographyShortLabel: "Географія:",
      startLabel: "Що надіслати спочатку:",
      startShortLabel: "На старті корисно:",
      startBody: "кілька фото, короткий опис і референси.",
      startMobileBody: "кілька фото, побажання і референси.",
    },
    faq: [
      {
        title: "Коли звертатися?",
        body: "Найкраще до активних робіт на ділянці або паралельно з архітектурою будинку.",
      },
      {
        title: "Чи можна прийти з готовим запитом?",
        body: "Так. Креслення, візуалізації чи список побажань інтегруємо в перший етап.",
      },
    ],
  },
  privacy: {
    hero: {
      kicker: "Приватність",
      title: "Ми збираємо мінімум даних.",
      body: "Сайт інформує і переводить у зовнішні канали зв'язку.",
      cta: "Зв'язатися з нами",
      secondaryCta: "На головну",
    },
    contact: {
      title: "Потрібне уточнення?",
      body: "Якщо маєте питання щодо звернень або аналітики, напишіть нам напряму.",
      cta: "Перейти до контактів",
    },
    sections: [
      {
        title: "1. Контактні звернення",
        body: "На сайті немає власних форм. Після переходу в Instagram або Telegram діють правила цих сервісів.",
      },
      {
        title: "2. Аналітика",
        body: "Якщо увімкнена Plausible-аналітика, фіксуються лише базові перегляди сторінок і переходи в контакти.",
      },
      {
        title: "3. Технічні дані",
        body: "Хостинг може зберігати технічні журнали доступу для безпеки й стабільності сайту.",
      },
      {
        title: "4. Оновлення",
        body: "Якщо сайт зміниться, актуальна версія політики буде опублікована тут.",
      },
    ],
  },
  notFound: {
    kicker: "404",
    title: "Сторінку не знайдено.",
    body: "Посилання може бути застарілим. Поверніться на головну.",
    cta: "На головну",
    secondaryCta: "Дивитися проєкти",
  },
};
