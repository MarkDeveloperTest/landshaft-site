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
    description: "Для референсів, настрою та першого знайомства з майбутнім садом.",
    href: instagramUrl,
  },
  {
    id: "telegram",
    label: "Telegram",
    handle: "@bot_green_park_bot",
    description: "Для прямого контакту, швидкого брифу та фото ділянки.",
    href: telegramUrl,
  },
];

export const services = [
  {
    slug: "design",
    title: "Ландшафтний дизайн",
    kicker: "01",
    summary:
      "Планування простору, сценарії руху, матеріали та посадки, що працюють разом із архітектурою будинку.",
    detail:
      "Ми починаємо з ділянки, світла, рельєфу та способу життя власників. Концепція формується навколо пропорцій, маршрутів, зонування та рослинної структури, яка виглядає переконливо не один сезон, а роками.",
    bullets: [
      "Аналіз ділянки та функціональна схема",
      "Посадковий принцип і матеріальна палітра",
      "Плани, візуалізації та комплект для реалізації",
    ],
    media: media.serviceDesign,
  },
  {
    slug: "build",
    title: "Реалізація",
    kicker: "02",
    summary:
      "Втілення задуму з контролем матеріалів, посадок, інженерних рішень та деталей на кожному етапі.",
    detail:
      "Landshaft супроводжує виконання від підготовки основ до фінішних посадок. Ми координуємо черговість робіт, контролюємо якість виконання та тримаємо композицію цілісною навіть у найскладніших вузлах.",
    bullets: [
      "Кам'яні роботи, мощення та водні елементи",
      "Посадки, освітлення та малі архітектурні форми",
      "Авторський супровід і контроль фінальної якості",
    ],
    media: media.projectEstate,
  },
  {
    slug: "care",
    title: "Догляд за садом",
    kicker: "03",
    summary:
      "Системний сервіс, що допомагає саду дозрівати правильно та зберігати характер після здачі.",
    detail:
      "Після завершення проєкту ми можемо залишитися з садом у довгому циклі. Формувальна обрізка, сезонні роботи, коригування посадок і стану ґрунтів підтримують не лише охайність, а й задум.",
    bullets: [
      "Сезонні регламенти та роботи протягом року",
      "Формування, підживлення та захист рослин",
      "Точкові оновлення й розвиток композиції з часом",
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
      "Стриманий парадний підхід із геометрією стрижених масивів, світлим каменем і чіткою віссю руху.",
    detail:
      "Проєкт побудований на балансі між представницькою композицією та щоденною зручністю. Відкриті площини каменю працюють на спокій, а рослинні об'єми додають м'якості без втрати структури.",
    media: media.projectEstate,
  },
  {
    slug: "meadow-house",
    index: "02",
    title: "Meadow House",
    location: "Камерний двір",
    summary:
      "Малі габарити, спокійна вода, делікатний перепад рівнів і відчуття приватності без зайвої декоративності.",
    detail:
      "Тут головним жестом стала тиша матеріалів: вода, кромка каменю та стримані посадки. Простір зібраний у кілька ясних площин, які читаються однаково сильно і з тераси, і з інтер'єру.",
    media: media.projectCourtyard,
  },
  {
    slug: "riverside-retreat",
    index: "03",
    title: "Riverside Retreat",
    location: "Сад вихідного дня",
    summary:
      "М'якший, природніший сценарій із довгими видами, терасами та рослинами, що працюють на атмосферу спокою.",
    detail:
      "Композиція розкривається поступово: від чітких архітектурних ліній до більш вільного рослинного середовища. Простір побудований так, щоб відпочинок і природа не конкурували, а підсилювали одне одного.",
    media: media.projectTerrace,
  },
];

export const processSteps = [
  {
    number: "01",
    title: "Дослідження",
    body:
      "Бриф, виїзд на ділянку, аналіз рельєфу, світла та способу життя, щоб зафіксувати правильну задачу.",
  },
  {
    number: "02",
    title: "Концепція",
    body:
      "Планувальна логіка, матеріали та посадковий принцип зводяться в чітку просторову систему.",
  },
  {
    number: "03",
    title: "Реалізація",
    body:
      "Координуємо послідовність робіт, вузли та якість виконання, щоб задум зберігався до останньої деталі.",
  },
  {
    number: "04",
    title: "Супровід",
    body:
      "Налаштовуємо ритм догляду, сезонні роботи та делікатні зміни, щоб сад ставав лише кращим з часом.",
  },
];

export const testimonials = [
  {
    quote:
      "Команда дуже точно прочитала архітектуру будинку й перетворила її на сад, у якому хочеться жити щодня.",
    author: "Приватний клієнт",
  },
];

export const pageSeo = {
  home: {
    title: "Landshaft — сучасна ландшафтна архітектура",
    description:
      "Ландшафтний дизайн, реалізація та догляд за приватними садами з акцентом на ясну архітектуру та довготривалу красу.",
  },
  services: {
    title: "Послуги — Landshaft",
    description:
      "Ландшафтний дизайн, реалізація та супровід саду від концепції до довгого циклу догляду.",
  },
  projects: {
    title: "Проєкти — Landshaft",
    description:
      "Добірка приватних садів Landshaft: геометрія, матеріали, вода та рослини, що працюють як єдина система.",
  },
  process: {
    title: "Процес — Landshaft",
    description:
      "Як Landshaft веде проєкт: бриф, концепція, реалізація та довгостроковий супровід.",
  },
  contact: {
    title: "Контакти — Landshaft",
    description:
      "Зв'яжіться з Landshaft через Instagram або Telegram, щоб обговорити майбутній сад, ділянку та перший бриф.",
  },
  privacy: {
    title: "Політика приватності — Landshaft",
    description:
      "Інформація про обробку даних, зовнішні контактні канали та аналітику на сайті Landshaft.",
  },
  notFound: {
    title: "Сторінку не знайдено — Landshaft",
    description: "Сторінка не знайдена. Поверніться на головну Landshaft.",
  },
};

export const homeSections = {
  hero: {
    title: "Ландшафтний дизайн для життя з характером.",
    body:
      "Створюємо приватні сади й прибудинкові території в Україні та Європі — від концепції до реалізації та догляду.",
    primaryCta: { label: "Обговорити проєкт", href: "/contact" },
    secondaryCta: { label: "Дивитися проєкти", href: "/projects" },
    media: media.heroGarden,
  },
  statement: {
    title: "Простори, що мають значення.",
    body:
      "Поєднуємо архітектуру, природу та майстерність, щоб створювати сади, які гармонійно доповнюють спосіб життя та архітектуру будинку.",
    linkLabel: "Дізнатися про процес",
    linkHref: "/process",
    media: media.serviceDesign,
  },
  contact: {
    title: "Почнімо розмову про ваш сад.",
    body:
      "Надішліть фото ділянки, орієнтовний запит або референси. Для першого контакту найшвидше працюють Instagram та Telegram.",
  },
};
