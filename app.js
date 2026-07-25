/**
 * HASHARCHI Web Application Logic
 * Multilingual Engine (UZ, RU, ЎЗ), Tabs, Modals & Interactivity
 */

const translations = {
  UZ: {
    topNotice: "Barcha buyurtmalar faqat ilova orqali qabul qilinadi",
    navAbout: "HASHARCHI nima?",
    navHowItWorks: "Bu qanday ishlaydi?",
    navWhyUs: "Nega HASHARCHI?",
    navContact: "Biz haqimizda",
    downloadAppShort: "Yuklab olish",

    heroBadge: "Yangi formatdagi platforma",
    heroTitleSub: "KUNLIK ISH BOZORI YANGI FORMATDA",
    heroSubtitle: "Mobil ilova orqali ishchilarni yoki ishni tez toping",
    muhimTag: "MUHIM",
    muhimText: "Veb-sayt orqali buyurtmalar QABUL QILINMAYDI. Barcha buyurtmalar faqat HASHARCHI mobil ilovasi orqali yaratiladi.",
    
    statWorkers: "Faol ishchilar",
    statOrders: "Bajarilgan buyurtmalar",
    statRating: "Foydalanuvchilar bahosi",

    floatOrderTitle: "Yangi Buyurtma!",
    floatOrderSub: "Toshkent, Usta ishchi kerak",
    floatSpeedTitle: "3 minutda",
    floatSpeedSub: "Ishchi topildi",

    whatTitle: "HASHARCHI nima?",
    whatDesc: "HASHARCHI — mijozlar va kunlik ishchilarni bog'laydigan platforma. Mobil ilova orqali siz ishlash uchun odamlarni tezda topishingiz yoki buyurtmalar olishingiz mumkin.",
    
    feat1Title: "Ishchilar",
    feat1Desc: "Tekshirilgan kunlik ishchilar",
    feat2Title: "Buyurtmalar",
    feat2Desc: "Vazifalarni zudlik bilan joylashtirish",
    feat3Title: "Tezkor aloqa",
    feat3Desc: "Vositachilarsiz to'g'ridan-to'g'ri aloqa",

    howTitle: "Bu qanday ishlaydi?",
    tabClients: "Mijozlar uchun",
    tabWorkers: "Ishchilar uchun",

    clientStep1Title: "Ilovani yuklab olasiz",
    clientStep1Desc: "Google Play yoki App Store’dan HASHARCHI mobil ilovasini ro'yxatdan o'ting.",
    clientStep2Title: "Buyurtma yaratasiz",
    clientStep2Desc: "Sizga kerakli kunlik ish turi, manzili va narxini ko'rsatib vazifa qoldiring.",
    clientStep3Title: "Ishchilardan javoblar olasiz",
    clientStep3Desc: "Tekshirilgan nomzodlar orasidan eng mosini tanlang va bog'laning.",

    workerStep1Title: "Ro'yxatdan o'tasiz",
    workerStep1Desc: "Ilovada ishchi sifatida anketani to'ldiring va profilni tasdiqlang.",
    workerStep2Title: "Balansni to'ldirasiz",
    workerStep2Desc: "Qulay to'lov tizimlari orqali hisobingizni to'ldirib faollashing.",
    workerStep3Title: "Buyurtmalarni olasiz",
    workerStep3Desc: "Atrofdagi dolzarb buyurtmalarni qabul qiling va daromad toping.",

    whyTitle: "Nega aynan HASHARCHI?",
    whySubtext: "Biz kunlik ish qidiruvchilar va ish beruvchilar uchun eng qulay, tezkor va ishonchli ekotizimni taqdim etamiz.",
    why1: "Ishchilarni tez topish",
    why1Desc: "Bir necha daqiqada kerakli soha mutaxassislarini jalb qiling.",
    why2: "Mahalliy ijrochilar",
    why2Desc: "Yaqin atrofdagi tajribali va ishga tayyor kadrlarni toping.",
    why3: "Qulay mobil ilova",
    why3Desc: "Zamon talablariga mos, sodda va tez ishlaydigan interfeys.",
    why4: "Nazorat va reyting",
    why4Desc: "Har bir ijrochi va mijoz haqiqiy baholash va sharhlar tizimiga ega.",
    why5: "Shaffof tizim",
    why5Desc: "Hech qanday yashirin komissiyalar va vositachilar yo'q.",

    ctaTitle: "HASHARCHI ilovasini yuklab oling",
    ctaReminderText: "Eslatma: Ish topish yoki ishchilarni yollash FAQAT ilovada amalga oshiriladi.",
    downloadFor: "Yuklab olish",

    aboutUsTitle: "Biz haqimizda",
    aboutUsText: "HASHARCHI — ishchilar va buyurtmalarni qulay, xavfsiz va tez topish uchun yaratilgan zamonaviy mobil platforma. Maqsadimiz – kunlik ish bozorini shaffof va barcha uchun ochiq qilishdir.",
    contactUsTitle: "Biz bilan bog'lanish",
    socialTelegram: "Telegram kanal",
    socialSupport: "Qo'llab-quvvatlash xizmati",

    copyright: "© 2026 HASHARCHI. Barcha huquqlar himoyalangan.",
    privacyPolicy: "Maxfiylik siyosati",
    termsOfUse: "Foydalanish shartlari",

    modalDownloadTitle: "HASHARCHI Ilovasini yuklab oling",
    modalDownloadDesc: "Telefoningiz kamerasi orqali QR-kodni skanerlang va ilovani darhol yuklab oling.",
    privacyModalTitle: "Maxfiylik Siyosati",
    termsModalTitle: "Foydalanish Shartlari"
  },

  RU: {
    topNotice: "Все заказы принимаются только через приложение",
    navAbout: "Что такое HASHARCHI?",
    navHowItWorks: "Как это работает?",
    navWhyUs: "Почему HASHARCHI?",
    navContact: "О нас",
    downloadAppShort: "Скачать",

    heroBadge: "Платформа нового формата",
    heroTitleSub: "РЫНОК ДНЕВНОЙ РАБОТЫ В НОВОМ ФОРМАТЕ",
    heroSubtitle: "Быстро находите рабочих или работу через мобильное приложение",
    muhimTag: "ВАЖНО",
    muhimText: "Заказы через веб-сайт НЕ ПРИНИМАЮТСЯ. Все заказы создаются только через мобильное приложение HASHARCHI.",
    
    statWorkers: "Активных рабочих",
    statOrders: "Выполненных заказов",
    statRating: "Оценка пользователей",

    floatOrderTitle: "Новый Заказ!",
    floatOrderSub: "Ташкент, Нужен мастер",
    floatSpeedTitle: "За 3 минуты",
    floatSpeedSub: "Рабочий найден",

    whatTitle: "Что такое HASHARCHI?",
    whatDesc: "HASHARCHI — платформа, объединяющая клиентов и дневных рабочих. Через мобильное приложение вы можете быстро найти людей для работы или получить заказы.",
    
    feat1Title: "Рабочие",
    feat1Desc: "Проверенные дневные рабочие",
    feat2Title: "Заказы",
    feat2Desc: "Быстрое размещение задач",
    feat3Title: "Быстрая связь",
    feat3Desc: "Прямая связь без посредников",

    howTitle: "Как это работает?",
    tabClients: "Для клиентов",
    tabWorkers: "Для рабочих",

    clientStep1Title: "Скачайте приложение",
    clientStep1Desc: "Установите приложение HASHARCHI из Google Play или App Store.",
    clientStep2Title: "Создайте заказ",
    clientStep2Desc: "Укажите тип дневной работы, адрес и предлагаемую оплату.",
    clientStep3Title: "Получайте отклики от рабочих",
    clientStep3Desc: "Выберите лучшего среди проверенных кандидатов и свяжитесь.",

    workerStep1Title: "Зарегистрируйтесь",
    workerStep1Desc: "Заполните анкету рабочего в приложении и подтвердите профиль.",
    workerStep2Title: "Пополните баланс",
    workerStep2Desc: "Пополните личный счет через удобные платежные системы.",
    workerStep3Title: "Получайте заказы",
    workerStep3Desc: "Принимайте подходящие заказы неподалеку и зарабатывайте.",

    whyTitle: "Почему именно HASHARCHI?",
    whySubtext: "Мы предоставляем самую удобную, быструю и надежную экосистему для дневных рабочих и работодателей.",
    why1: "Быстрый поиск рабочих",
    why1Desc: "Привлекайте нужных специалистов за считанные минуты.",
    why2: "Местные исполнители",
    why2Desc: "Находите опытные кадры поблизости, готовые к работе.",
    why3: "Удобное мобильное приложение",
    why3Desc: "Простой и современный интерфейс для быстрой работы.",
    why4: "Контроль и рейтинг",
    why4Desc: "Каждый исполнитель и заказчик имеет реальный рейтинг и отзывы.",
    why5: "Прозрачная система",
    why5Desc: "Никаких скрытых комиссий и посредников.",

    ctaTitle: "Скачайте приложение HASHARCHI",
    ctaReminderText: "Напоминаем: Найти работу или нанять рабочих можно ТОЛЬКО в приложении.",
    downloadFor: "Скачать для",

    aboutUsTitle: "О нас",
    aboutUsText: "HASHARCHI — современная мобильная платформа, созданная для удобного, безопасного и быстрого поиска рабочих и заказов. Наша цель – сделать рынок дневной работы прозрачным и доступным для всех.",
    contactUsTitle: "Связаться с нами",
    socialTelegram: "Telegram канал",
    socialSupport: "Служба поддержки",

    copyright: "© 2026 HASHARCHI. Все права защищены.",
    privacyPolicy: "Политика конфиденциальности",
    termsOfUse: "Условия использования",

    modalDownloadTitle: "Скачайте приложение HASHARCHI",
    modalDownloadDesc: "Отсканируйте QR-код камерой вашего телефона и скачайте приложение прямо сейчас.",
    privacyModalTitle: "Политика Конфиденциальности",
    termsModalTitle: "Условия Использования"
  },

  "ЎЗ": {
    topNotice: "Барча буюртмалар фақат илова орқали қабул қилинади",
    navAbout: "HASHARCHI нима?",
    navHowItWorks: "Бу қандай ишлайди?",
    navWhyUs: "Нега HASHARCHI?",
    navContact: "Биз ҳақимизда",
    downloadAppShort: "Юклаб олиш",

    heroBadge: "Янги форматдаги платформа",
    heroTitleSub: "КУНЛИК ИШ БОЗОРИ ЯНГИ ФОРМАТДА",
    heroSubtitle: "Мобил илова орқали ишчиларни ёки ишни тез топинг",
    muhimTag: "МУҲИМ",
    muhimText: "Веб-сайт орқали буюртмалар ҚАБУЛ ҚИЛИНМАЙДИ. Барча буюртмалар фақат HASHARCHI мобил иловаси орқали яратилади.",
    
    statWorkers: "Фаол ишчилар",
    statOrders: "Бажарилган буюртмалар",
    statRating: "Фойдаланувчилар баҳоси",

    floatOrderTitle: "Янги Буюртма!",
    floatOrderSub: "Тошкент, Уста ишчи керак",
    floatSpeedTitle: "3 минутда",
    floatSpeedSub: "Ишчи топилди",

    whatTitle: "HASHARCHI нима?",
    whatDesc: "HASHARCHI — мижозлар ва кунлик ишчиларни боғлайдиган платформа. Мобил илова орқали сиз ишлаш учун одамларни тезда топишингиз ёки буюртмалар олишингиз мумкин.",
    
    feat1Title: "Ишчилар",
    feat1Desc: "Текширилган кунлик ишчилар",
    feat2Title: "Буюртмалар",
    feat2Desc: "Вазифаларни зудлик билан жойлаштириш",
    feat3Title: "Тезкор алоқа",
    feat3Desc: "Воситачиларсиз тўғридан-тўғри алоқа",

    howTitle: "Бу қандай ишлайди?",
    tabClients: "Мижозлар учун",
    tabWorkers: "Ишчилар учун",

    clientStep1Title: "Иловани юклаб оласиз",
    clientStep1Desc: "Google Play ёки App Store’дан HASHARCHI мобил иловасини юклаб олиб рўйхатдан ўтинг.",
    clientStep2Title: "Буюртма яратасиз",
    clientStep2Desc: "Сизга керакли кунлик иш тури, манзили ва нархини кўрсатиб вазифа қолдиринг.",
    clientStep3Title: "Ишчилардан жавоблар оласиз",
    clientStep3Desc: "Текширилган номзодлар орасидан энг мосини танланг ва боғланинг.",

    workerStep1Title: "Рўйхатдан ўтасиз",
    workerStep1Desc: "Иловада ишчи сифатида анкетани тўлдиринг ва профилни тасдиқланг.",
    workerStep2Title: "Балансни тўлдирасиз",
    workerStep2Desc: "Қулай тўлов тизимлари орқали ҳисобингизни тўлдириб фаоллашинг.",
    workerStep3Title: "Буюртмаларни оласиз",
    workerStep3Desc: "Атрофдаги долзарб буюртмаларни қабул қилинг ва даромад топинг.",

    whyTitle: "Нега айнан HASHARCHI?",
    whySubtext: "Биз кунлик иш қидирувчилар ва иш берувчилар учун энг қулай, тезкор ва ишончли экотизимни тақдим этамиз.",
    why1: "Ишчиларни тез топиш",
    why1Desc: "Бир неча дақиқада керакли соҳа мутахассисларини жалб қилинг.",
    why2: "Маҳаллий ижрочилар",
    why2Desc: "Яқин атрофдаги тажрибали ва ишга тайёр кадрларни топинг.",
    why3: "Қулай мобил илова",
    why3Desc: "Замон талабларига мос, содда ва тез ишлайдиган интерфейс.",
    why4: "Назорат ва рейтинг",
    why4Desc: "Ҳар бир ижрочи ва мижоз ҳақиқий баҳолаш ва шарҳлар тизимига эга.",
    why5: "Шаффоф тизим",
    why5Desc: "Ҳеч қандай яширин комиссиялар ва воситачилар йўқ.",

    ctaTitle: "HASHARCHI иловасини юклаб олинг",
    ctaReminderText: "Еслатма: Иш топиш ёки ишчиларни ёллаш ФАҚАТ иловада амалга оширилади.",
    downloadFor: "Юклаб олиш",

    aboutUsTitle: "Биз ҳақимизда",
    aboutUsText: "HASHARCHI — ишчилар ва буюртмаларни қулай, хавфсиз ва тез топиш учун яратилган замонавий мобил платформа. Мақсадимиз – кунлик иш бозорини шаффоф ва барча учун очиқ қилишдир.",
    contactUsTitle: "Биз билан боғланиш",
    socialTelegram: "Telegram канал",
    socialSupport: "Қўллаб-қувватлаш хизмати",

    copyright: "© 2026 HASHARCHI. Барча ҳуқуқлар ҳимояланган.",
    privacyPolicy: "Махфийлик сиёсати",
    termsOfUse: "Фойдаланиш шартлари",

    modalDownloadTitle: "HASHARCHI Иловасини юклаб олинг",
    modalDownloadDesc: "Телефонингиз камераси орқали QR-кодни сканерланг ва иловани дарҳол юклаб олинг.",
    privacyModalTitle: "Махфийлик Сиёсати",
    termsModalTitle: "Фойдаланиш Шартлари"
  }
};

let currentLang = localStorage.getItem('hasharchi_lang') || 'UZ';

document.addEventListener('DOMContentLoaded', () => {
  initLanguage();
  initTabs();
  initModals();
});

// Language Switcher Logic
function initLanguage() {
  setLanguage(currentLang);

  const langButtons = document.querySelectorAll('.lang-btn');
  langButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const lang = btn.getAttribute('data-lang');
      if (lang && translations[lang]) {
        currentLang = lang;
        localStorage.setItem('hasharchi_lang', lang);
        setLanguage(lang);
      }
    });
  });
}

function setLanguage(lang) {
  // Active class on language buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    if (btn.getAttribute('data-lang') === lang) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  // Translate all data-i18n elements
  const dict = translations[lang];
  document.querySelectorAll('[data-i18n]').forEach(elem => {
    const key = elem.getAttribute('data-i18n');
    if (dict[key]) {
      elem.textContent = dict[key];
    }
  });
}

// Tab Switcher Logic
function initTabs() {
  const tabBtns = document.querySelectorAll('.tab-btn');
  const tabContents = document.querySelectorAll('.tab-content');

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetTab = btn.getAttribute('data-tab');

      tabBtns.forEach(b => b.classList.remove('active'));
      tabContents.forEach(c => c.classList.remove('active'));

      btn.classList.add('active');
      const activeContent = document.getElementById(`tab-${targetTab}`);
      if (activeContent) {
        activeContent.classList.add('active');
      }
    });
  });
}

// Modal Controllers
function initModals() {
  // Download / QR Modal
  const downloadModal = document.getElementById('download-modal');
  const downloadOpenBtns = document.querySelectorAll('.open-download-modal');
  const downloadCloseBtn = document.getElementById('close-download-modal');

  downloadOpenBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      downloadModal.classList.add('active');
    });
  });

  if (downloadCloseBtn) {
    downloadCloseBtn.addEventListener('click', () => downloadModal.classList.remove('active'));
  }

  // Privacy Modal
  const privacyModal = document.getElementById('privacy-modal');
  const privacyOpenBtn = document.getElementById('open-privacy');
  const privacyCloseBtn = document.getElementById('close-privacy-modal');

  if (privacyOpenBtn) {
    privacyOpenBtn.addEventListener('click', () => privacyModal.classList.add('active'));
  }
  if (privacyCloseBtn) {
    privacyCloseBtn.addEventListener('click', () => privacyModal.classList.remove('active'));
  }

  // Terms Modal
  const termsModal = document.getElementById('terms-modal');
  const termsOpenBtn = document.getElementById('open-terms');
  const termsCloseBtn = document.getElementById('close-terms-modal');

  if (termsOpenBtn) {
    termsOpenBtn.addEventListener('click', () => termsModal.classList.add('active'));
  }
  if (termsCloseBtn) {
    termsCloseBtn.addEventListener('click', () => termsModal.classList.remove('active'));
  }

  // Close modals on clicking backdrop
  document.querySelectorAll('.modal-backdrop').forEach(backdrop => {
    backdrop.addEventListener('click', (e) => {
      if (e.target === backdrop) {
        backdrop.classList.remove('active');
      }
    });
  });

  // ESC key to close active modal
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      document.querySelectorAll('.modal-backdrop.active').forEach(modal => modal.classList.remove('active'));
    }
  });
}
