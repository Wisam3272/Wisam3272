const locales = ['en', 'ar', 'es', 'fr', 'de'];
const defaultLocale = 'en';
let currentLocale = defaultLocale;
let currentPreviewLocale = defaultLocale;
let generatedPayload = null;

const tonePalettes = {
  nebula: {
    name: {
      en: 'Nebula Neon',
      ar: 'نيون نيبولا',
      es: 'Nebulosa neón',
      fr: 'Néon Nébuleuse',
      de: 'Nebula Neon',
    },
    values: {
      background: '#030513',
      surface: '#0e1030',
      accent: 'linear-gradient(135deg, #7f5af0, #00c6ff)',
      border: 'rgba(255,255,255,0.08)',
    },
  },
  aurora: {
    name: {
      en: 'Aurora Breeze',
      ar: 'نسيم الشفق',
      es: 'Brisa aurora',
      fr: "Brise d'aurore",
      de: 'Aurora Brise',
    },
    values: {
      background: '#041b22',
      surface: '#062933',
      accent: 'linear-gradient(135deg, #0ea5e9, #22d3ee)',
      border: 'rgba(255,255,255,0.07)',
    },
  },
  noir: {
    name: {
      en: 'Noir Prime',
      ar: 'نوار برايم',
      es: 'Noir Prime',
      fr: 'Noir Prime',
      de: 'Noir Prime',
    },
    values: {
      background: '#050505',
      surface: '#121214',
      accent: 'linear-gradient(135deg, #ffffff, #a0a0a0)',
      border: 'rgba(255,255,255,0.12)',
    },
  },
  sunrise: {
    name: {
      en: 'Sunrise Pulse',
      ar: 'نبض الشروق',
      es: 'Pulso amanecer',
      fr: 'Pulse Aurore',
      de: 'Sonnenaufgang Puls',
    },
    values: {
      background: '#1a0d16',
      surface: '#23131f',
      accent: 'linear-gradient(135deg, #f97316, #ec4899)',
      border: 'rgba(255,255,255,0.08)',
    },
  },
  mint: {
    name: {
      en: 'Mint Horizon',
      ar: 'أفق النعناع',
      es: 'Horizonte menta',
      fr: 'Horizon menthe',
      de: 'Minz-Horizont',
    },
    values: {
      background: '#061610',
      surface: '#0c2218',
      accent: 'linear-gradient(135deg, #34d399, #22d3ee)',
      border: 'rgba(255,255,255,0.08)',
    },
  },
};

const translations = {
  en: {
    direction: 'ltr',
    navigation: {
      features: 'Features',
      categories: 'Categories',
      generator: 'Generator',
      templates: 'Templates',
      pricing: 'Pricing',
      blog: 'Insights',
      cta: 'Launch builder',
    },
    hero: {
      badge: 'AI-first APK business suite',
      title: 'Build, localize, and monetize APK hubs in minutes',
      subtitle:
        'APKS Center is your professional control room for crafting multilingual APK directories, smart landing funnels, and payment-ready monetization pipelines.',
      primary: 'Start generating',
      secondary: 'Browse templates',
      status: 'LIVE',
      preview:
        'You provide the product DNA, APKS Center assembles responsive layouts, curated APK grids, and localized copy tuned for conversion.',
    },
    heroHighlights: [
      'SEO schema, robots.txt, and sitemap.xml auto generated',
      'Localized content packs for English, Arabic, Spanish, French, and German',
      'PayPal + Visa payment flows with client-side configuration',
    ],
    metrics: [
      { value: '12k+', label: 'APKs launched with APKS Center' },
      { value: '4.9★', label: 'Average rating from creators' },
      { value: '45%', label: 'Average uplift in conversions' },
    ],
    features: {
      title: 'Enterprise-grade power without the overhead',
      subtitle: 'From launch to growth, APKS Center orchestrates every page, category, and sales touchpoint of your APK platform.',
      items: [
        {
          icon: '🧠',
          title: 'AI content intelligence',
          description:
            'Regenerate headlines, app blurbs, and SEO metadata per locale using tone presets aligned with your brand personality.',
        },
        {
          icon: '🗂️',
          title: 'Category operating system',
          description:
            'Spin up curated category pages, trending shelves, and deep-link collections with automatic sitemap entries.',
        },
        {
          icon: '🌍',
          title: 'Global language mesh',
          description:
            'Serve entire experiences in English, Arabic, Spanish, French, and German with smart fallback copy and RTL support.',
        },
        {
          icon: '💳',
          title: 'Native monetization layer',
          description:
            'Embed PayPal and Visa-ready checkout flows, manage pricing tiers, and export receipts without backend dependencies.',
        },
      ],
    },
    categories: {
      title: 'Curated categories engineered for retention',
      subtitle: 'Hit the ground running with pre-built taxonomies and conversion journeys tuned for APK distribution.',
      items: [
        {
          name: 'Gaming powerhouse',
          description: 'Daily mod drops, tournaments, and influencer spotlights in one frictionless hub.',
          tags: ['Action mods', 'eSports packs', 'Cross-play ready'],
        },
        {
          name: 'Productivity orbit',
          description: 'Secure utilities, workspace boosters, and automation APKs for remote-first teams.',
          tags: ['Encryption', 'Task automation', 'Cloud sync'],
        },
        {
          name: 'Creator launchpad',
          description: 'Premium editing suites, streaming enhancers, and community extensions to fuel creators.',
          tags: ['Video kits', 'Audio FX', 'Livestream tools'],
        },
      ],
    },
    generator: {
      title: 'Professional site generator',
      subtitle: 'Feed the AI builder with your brand signals and export a production-grade, multilingual APK portal.',
      form: {
        hubName: 'Hub name',
        tagline: 'Hero tagline',
        tone: 'Visual tone',
        locale: 'Primary language',
        categories: 'Featured categories (comma separated)',
        apps: 'Highlight apps (one per line: “App Name | Short blurb”)',
        support: 'Support email',
        keywords: 'SEO keywords (comma separated)',
        submit: 'Generate experience',
        download: 'Download HTML',
        placeholders: {
          hubName: 'APKS Center Studio',
          tagline: 'Your premium Android destination',
          categories: 'Security, Streaming, Launchers',
          apps: 'Nebula Player | Spatial audio streaming\nPhoton VPN | Zero-log encrypted tunnels',
          support: 'support@apks.center',
          keywords: 'apk downloads, android mods, secure apk hub',
        },
      },
      preview: {
        title: 'Live multilingual preview',
        switch: 'Cycle preview language',
        hint: 'Use the language switcher above or export to inspect all generated locales.',
      },
    },
    templates: {
      title: 'Launch-ready template library',
      subtitle: 'Blend base templates with your palette, typography, and messaging for instant differentiation.',
      items: [
        {
          name: 'Nova Dark',
          description: 'Futuristic hero with asymmetrical grids and glowing CTA stacks.',
          complexity: '8 sections • 3 category loops',
        },
        {
          name: 'Orbit Glass',
          description: 'Glassmorphism layers, floating cards, and immersive gallery transitions.',
          complexity: '10 sections • 4 automation hooks',
        },
        {
          name: 'Pulse Minimal',
          description: 'High-contrast editorial layout with modular feature callouts.',
          complexity: '7 sections • 2 checkout embeds',
        },
      ],
    },
    pricing: {
      title: 'Scale plans that grow with your catalog',
      subtitle: 'Choose a starting point, refine with AI assistance, and upgrade when you are ready to unlock more automation.',
      starter: {
        title: 'Starter',
        price: '$0 / lifetime',
        features: [
          '1 multilingual landing',
          'Manual template export',
          'Community support',
        ],
        cta: 'Get started',
      },
      growth: {
        badge: 'Most popular',
        title: 'Growth',
        price: '$39 / month',
        features: [
          'Unlimited locales & categories',
          'Automated sitemap + schema',
          'PayPal & Visa integrations',
          'Priority strategy calls',
        ],
        cta: 'Activate Growth',
      },
      enterprise: {
        title: 'Enterprise',
        price: 'Custom pricing',
        features: [
          'Dedicated success engineer',
          'Private template library',
          'SLAs & compliance audits',
        ],
        cta: 'Book consultation',
      },
    },
    payments: {
      title: 'Built-in payment orchestration',
      subtitle: 'Collect subscription revenue or one-off upgrades securely through PayPal and Visa cards.',
      settings: 'Configure payment keys',
      visa: 'Checkout with Visa',
      notice: 'Visa payments open in a secure Stripe Checkout window. Update the payment link to connect your account.',
      modal: {
        title: 'Payment configuration',
        paypal: 'PayPal client ID',
        visa: 'Stripe Checkout / Payment Link URL (supports Visa)',
        hint: 'Credentials are stored locally in your browser. Replace sandbox defaults with production keys before launch.',
        cancel: 'Cancel',
        save: 'Save settings',
      },
    },
    testimonials: {
      title: 'Loved by growth teams worldwide',
      subtitle: 'Product studios, indie publishers, and telecom partners rely on APKS Center to deliver resilient APK storefronts.',
      items: [
        {
          quote:
            '“Localization used to take us weeks. Now APKS Center spins a full five-language release in under an hour.”',
          name: 'Lina Haddad',
          role: 'Growth Lead, Modverse Labs',
        },
        {
          quote:
            '“The integrated payments layer meant we could monetize premium APK drops on day one.”',
          name: 'Carlos Méndez',
          role: 'Founder, DroidClub',
        },
        {
          quote:
            '“Schema markup, structured sitemap, and blazing performance helped us dominate SERPs fast.”',
          name: 'Eva Stein',
          role: 'SEO Director, PixelPilot',
        },
      ],
    },
    insights: {
      title: 'Insights & playbooks',
      subtitle: 'Stay ahead with industry-grade breakdowns of growth mechanics, compliance, and monetization.',
      items: [
        {
          title: 'Playbook: Launch an APK marketplace in 48 hours',
          date: 'April 2024',
        },
        {
          title: 'How to pass Google Play Protect checks without distribution friction',
          date: 'March 2024',
        },
        {
          title: 'Payment UX patterns that convert on mobile-first APK sites',
          date: 'February 2024',
        },
      ],
    },
    seo: {
      title: 'SEO automation checklist',
      subtitle: 'Every generated project ships with industry best practices baked in.',
      checklist: [
        'Robots.txt & dynamic sitemap.xml',
        'Open Graph + Twitter cards',
        'JSON-LD Organization schema',
        'Lazy-loaded assets & Web Vitals monitoring',
      ],
    },
    cta: {
      title: 'Turn APK ideas into global businesses',
      subtitle: 'The fastest way to build an immersive APK storefront with payments, localization, and analytics included.',
      cta: 'Generate my hub',
    },
    footer: {
      tagline: 'APKS Center is the enterprise-grade builder for multilingual APK storefronts and product ecosystems.',
      products: 'Products',
      support: 'Support',
      legal: 'Legal',
      privacy: 'Privacy',
      terms: 'Terms',
      sitemap: 'Sitemap',
      meta: '© ' + new Date().getFullYear() + ' APKS Center. Operated globally from Dubai and Berlin.',
      columns: {
        products: ['Template studio', 'Automation API', 'Insights library'],
        support: ['Help center', 'Implementation partners', 'Status page'],
        legal: ['Brand kit', 'Security', 'GDPR'],
      },
    },
  },
  ar: {
    direction: 'rtl',
    navigation: {
      features: 'المميزات',
      categories: 'الفئات',
      generator: 'المولد',
      templates: 'القوالب',
      pricing: 'الأسعار',
      blog: 'المعرفة',
      cta: 'ابدأ الآن',
    },
    hero: {
      badge: 'منصة أعمال APK مدعومة بالذكاء الاصطناعي',
      title: 'ابنِ وخصص وحقق الدخل من مراكز APK خلال دقائق',
      subtitle:
        'يمنحك APKS Center غرفة تحكم احترافية لصناعة أدلة APK متعددة اللغات، وصفحات هبوط ذكية، ومسارات دفع جاهزة.',
      primary: 'ابدأ التوليد',
      secondary: 'تصفح القوالب',
      status: 'نشط',
      preview:
        'أدخل هوية منتجك، وسيقوم APKS Center بتجميع تخطيطات متجاوبة، وشبكات تطبيقات منسقة، ونصوص محلية جاهزة للتحويل.',
    },
    heroHighlights: [
      'توليد تلقائي لملفات robots.txt و sitemap.xml ووسوم SEO',
      'محتوى مترجم للغات الإنجليزية والعربية والإسبانية والفرنسية والألمانية',
      'تدفقات دفع PayPal وبطاقات Visa مع إعداد من الواجهة',
    ],
    metrics: [
      { value: '‎12k+‎', label: 'مواقع APK أطلقت عبر APKS Center' },
      { value: '‎4.9★‎', label: 'متوسط تقييم صانعي المحتوى' },
      { value: '‎45%‎', label: 'زيادة متوسطة في التحويلات' },
    ],
    features: {
      title: 'قوة مؤسسية بدون تعقيد',
      subtitle: 'من الإطلاق إلى النمو، يدير APKS Center كل صفحة وفئة ولمسة بيع في منصتك.',
      items: [
        {
          icon: '🧠',
          title: 'ذكاء المحتوى',
          description:
            'أعد توليد العناوين، ووصف التطبيقات، وبيانات SEO لكل لغة باستخدام أنماط متوافقة مع هوية علامتك.',
        },
        {
          icon: '🗂️',
          title: 'منظومة الفئات',
          description:
            'أنشئ صفحات فئات منسقة، وقوائم رائجة، وتجميعات روابط عميقة مع إدراج تلقائي في ملف السايت ماب.',
        },
        {
          icon: '🌍',
          title: 'شبكة لغات عالمية',
          description:
            'قدّم التجربة كاملة باللغات الإنجليزية والعربية والإسبانية والفرنسية والألمانية مع دعم اتجاه الكتابة من اليمين لليسار.',
        },
        {
          icon: '💳',
          title: 'طبقة ربح مدمجة',
          description:
            'ادمج تدفقات دفع PayPal وVisa، وأدر مستويات التسعير، وصدّر فواتير دون الحاجة إلى خوادم.',
        },
      ],
    },
    categories: {
      title: 'فئات منسقة لزيادة التفاعل',
      subtitle: 'ابدأ بسرعة مع تقسيمات جاهزة ورحلات تحويل مصممة لتوزيع ملفات APK.',
      items: [
        {
          name: 'عالم الألعاب',
          description: 'تحديثات يومية للتعديلات، وبطولات، وأضواء على المؤثرين في مركز واحد سهل.',
          tags: ['تعديلات أكشن', 'بطولات إلكترونية', 'دعم اللعب المتقاطع'],
        },
        {
          name: 'كوكب الإنتاجية',
          description: 'أدوات آمنة، ومسرعات عمل، وتطبيقات أتمتة لفرق العمل عن بُعد.',
          tags: ['تشفير', 'أتمتة المهام', 'مزامنة سحابية'],
        },
        {
          name: 'منصة المبدعين',
          description: 'حزم تحرير احترافية، ومعززات بث، وإضافات مجتمع لدعم صانعي المحتوى.',
          tags: ['أدوات فيديو', 'تأثيرات صوتية', 'أدوات البث المباشر'],
        },
      ],
    },
    generator: {
      title: 'مولّد مواقع احترافي',
      subtitle: 'زوّد الباني بملامح علامتك وصدّر بوابة APK متعددة اللغات جاهزة للإطلاق.',
      form: {
        hubName: 'اسم المنصة',
        tagline: 'سطر البطولة',
        tone: 'النمط البصري',
        locale: 'اللغة الأساسية',
        categories: 'الفئات المميزة (افصلها بفاصلة)',
        apps: 'التطبيقات البارزة (سطر لكل تطبيق: الاسم | وصف قصير)',
        support: 'بريد الدعم',
        keywords: 'كلمات مفتاحية SEO (افصلها بفاصلة)',
        submit: 'ولّد التجربة',
        download: 'تحميل الملف',
        placeholders: {
          hubName: 'استوديو APKS Center',
          tagline: 'وجهتك الاحترافية للأندرويد',
          categories: 'الأمان، البث، الواجهات',
          apps: 'مشغل نيبولا | بث صوتي محيطي\nفوتون VPN | أنفاق مشفرة بدون سجلات',
          support: 'support@apks.center',
          keywords: 'تحميل apk, تطبيقات اندرويد, متجر apk احترافي',
        },
      },
      preview: {
        title: 'معاينة حية متعددة اللغات',
        switch: 'تبديل لغة المعاينة',
        hint: 'استخدم أزرار اللغة بالأعلى أو قم بالتنزيل للاطلاع على جميع اللغات.',
      },
    },
    templates: {
      title: 'مكتبة قوالب جاهزة للإطلاق',
      subtitle: 'ادمج القوالب مع ألوانك وخطوطك ورسائلك لتحصل على تجربة فريدة فوراً.',
      items: [
        {
          name: 'Nova Dark',
          description: 'واجهة مستقبلية مع شبكات غير متناظرة وأزرار دعوة متوهجة.',
          complexity: '٨ أقسام • ٣ حلقات فئات',
        },
        {
          name: 'Orbit Glass',
          description: 'طبقات زجاجية وبطاقات عائمة وانتقالات معرض غامرة.',
          complexity: '١٠ أقسام • ٤ تكاملات تلقائية',
        },
        {
          name: 'Pulse Minimal',
          description: 'تصميم تحريري عالي التباين مع إبرازات وحداتية.',
          complexity: '٧ أقسام • ٢ تضمين للدفع',
        },
      ],
    },
    pricing: {
      title: 'باقات تتوسع مع مكتبتك',
      subtitle: 'اختر نقطة البداية، وطور باستخدام الذكاء الاصطناعي، وارتقِ عند الحاجة إلى المزيد من الأتمتة.',
      starter: {
        title: 'مبتدئ',
        price: 'مجاني مدى الحياة',
        features: ['صفحة هبوط متعددة اللغات', 'تصدير يدوي للقوالب', 'دعم المجتمع'],
        cta: 'ابدأ مجاناً',
      },
      growth: {
        badge: 'الأكثر شعبية',
        title: 'النمو',
        price: '39$ شهرياً',
        features: ['لغات وفئات غير محدودة', 'سايت ماب ومخططات آلية', 'دفع PayPal & Visa', 'جلسات استراتيجية أولوية'],
        cta: 'تفعيل خطة النمو',
      },
      enterprise: {
        title: 'الشركات',
        price: 'سعر مخصص',
        features: ['مهندس نجاح مخصص', 'مكتبة قوالب خاصة', 'اتفاقيات وخدمات التزام'],
        cta: 'احجز استشارة',
      },
    },
    payments: {
      title: 'إدارة دفع مدمجة',
      subtitle: 'حصّل الاشتراكات أو الترقيات الآمنة عبر PayPal وبطاقات Visa.',
      settings: 'إعداد مفاتيح الدفع',
      visa: 'الدفع ببطاقة Visa',
      notice: 'سيتم فتح نافذة Stripe Checkout آمنة. حدّث الرابط لربط حسابك الفعلي.',
      modal: {
        title: 'إعدادات الدفع',
        paypal: 'معرّف عميل PayPal',
        visa: 'رابط Stripe Checkout (يدعم Visa)',
        hint: 'يتم حفظ البيانات محلياً في متصفحك. استبدل قيم الاختبار قبل الإطلاق الفعلي.',
        cancel: 'إلغاء',
        save: 'حفظ الإعدادات',
      },
    },
    testimonials: {
      title: 'موثوق من فرق النمو حول العالم',
      subtitle: 'شركات المنتجات والناشرون المستقلون وشركاء الاتصالات يعتمدون على APKS Center لتقديم متاجر APK قوية.',
      items: [
        {
          quote: '"كان توطين المحتوى يستغرق أسابيع. الآن ينشئ APKS Center إصداراً بخمس لغات في أقل من ساعة."',
          name: 'لينا حداد',
          role: 'قائدة النمو، Modverse Labs',
        },
        {
          quote: '"طبقة الدفع المدمجة سمحت لنا بتحقيق الدخل من الإصدارات المميزة منذ اليوم الأول."',
          name: 'كارلوس منديز',
          role: 'المؤسس، DroidClub',
        },
        {
          quote: '"البيانات المنظمة والسايت ماب والأداء السريع ساعدتنا على تصدر نتائج البحث بسرعة."',
          name: 'إيفا شتاين',
          role: 'مديرة SEO، PixelPilot',
        },
      ],
    },
    insights: {
      title: 'تحليلات وأدلة',
      subtitle: 'ابق في المقدمة مع تحليلات احترافية لآليات النمو والامتثال وتحقيق الدخل.',
      items: [
        { title: 'دليل: إطلاق سوق APK خلال 48 ساعة', date: 'أبريل 2024' },
        { title: 'كيفية اجتياز فحوصات Google Play Protect دون عوائق', date: 'مارس 2024' },
        { title: 'أنماط تجربة الدفع التي تحول على مواقع APK أولاً للهاتف', date: 'فبراير 2024' },
      ],
    },
    seo: {
      title: 'قائمة تدقيق SEO',
      subtitle: 'كل مشروع يتم توليده يحتوي على أفضل الممارسات بشكل افتراضي.',
      checklist: ['robots.txt و sitemap.xml ديناميكي', 'بطاقات Open Graph وTwitter', 'مخطط منظمة JSON-LD', 'تحميل كسول ومراقبة مؤشرات الويب'],
    },
    cta: {
      title: 'حوّل أفكار APK إلى أعمال عالمية',
      subtitle: 'أسرع طريقة لبناء متجر APK غامر مع الدفع والتوطين والتحليلات.',
      cta: 'أنشئ منصتي الآن',
    },
    footer: {
      tagline: 'APKS Center هو الباني الاحترافي لمتاجر APK متعددة اللغات ومنظومات المنتجات.',
      products: 'المنتجات',
      support: 'الدعم',
      legal: 'القانوني',
      privacy: 'الخصوصية',
      terms: 'الشروط',
      sitemap: 'خريطة الموقع',
      meta: '© ' + new Date().getFullYear() + ' APKS Center. عملياتنا من دبي وبرلين.',
      columns: {
        products: ['استوديو القوالب', 'واجهة الأتمتة', 'مكتبة المعرفة'],
        support: ['مركز المساعدة', 'شركاء التنفيذ', 'حالة النظام'],
        legal: ['هوية العلامة', 'الأمن', 'اللائحة العامة'],
      },
    },
  },
  es: {
    direction: 'ltr',
    navigation: {
      features: 'Funciones',
      categories: 'Categorías',
      generator: 'Generador',
      templates: 'Plantillas',
      pricing: 'Precios',
      blog: 'Ideas',
      cta: 'Lanzar creador',
    },
    hero: {
      badge: 'Suite empresarial para APK impulsada por IA',
      title: 'Crea, localiza y monetiza hubs de APK en minutos',
      subtitle:
        'APKS Center es tu sala de control profesional para construir directorios APK multilingües, embudos inteligentes y pagos listos para cobrar.',
      primary: 'Comenzar a generar',
      secondary: 'Ver plantillas',
      status: 'Activo',
      preview:
        'Describe tu producto y APKS Center arma diseños responsivos, cuadrículas de apps curadas y textos localizados que convierten.',
    },
    heroHighlights: [
      'SEO técnico automático: robots.txt, sitemap.xml y metadatos',
      'Paquetes de contenido en inglés, árabe, español, francés y alemán',
      'Pagos integrados con PayPal y tarjetas Visa configurables',
    ],
    metrics: [
      { value: '12k+', label: 'APKs lanzados con APKS Center' },
      { value: '4.9★', label: 'Valoración media de los creadores' },
      { value: '45%', label: 'Mejora media de conversiones' },
    ],
    features: {
      title: 'Potencia empresarial sin complejidad',
      subtitle: 'Desde el lanzamiento hasta la expansión, APKS Center coordina cada página, categoría y punto de venta.',
      items: [
        {
          icon: '🧠',
          title: 'Inteligencia de contenido',
          description:
            'Regenera titulares, descripciones y metadatos para cada idioma con tonos personalizados.',
        },
        {
          icon: '🗂️',
          title: 'Sistema de categorías',
          description:
            'Crea páginas de categoría, colecciones destacadas y enlaces profundos con sitemap automático.',
        },
        {
          icon: '🌍',
          title: 'Malla multilingüe',
          description:
            'Entrega experiencias completas en inglés, árabe, español, francés y alemán con soporte RTL.',
        },
        {
          icon: '💳',
          title: 'Monetización integrada',
          description:
            'Inserta flujos de pago PayPal y Visa, administra planes y exporta recibos sin backend.',
        },
      ],
    },
    categories: {
      title: 'Categorías curadas para retener',
      subtitle: 'Comienza con taxonomías preconstruidas y viajes de conversión optimizados para APK.',
      items: [
        {
          name: 'Potencia gamer',
          description: 'Mods diarios, torneos y focos de influencers en un mismo hub.',
          tags: ['Mods de acción', 'eSports', 'Listo para cross-play'],
        },
        {
          name: 'Órbita productiva',
          description: 'Utilidades seguras y automatizaciones para equipos remotos.',
          tags: ['Cifrado', 'Automatización', 'Sincronización en la nube'],
        },
        {
          name: 'Lanzadera creadora',
          description: 'Suites de edición premium, mejoras de streaming y extensiones comunitarias.',
          tags: ['Video', 'Audio', 'Herramientas en vivo'],
        },
      ],
    },
    generator: {
      title: 'Generador profesional',
      subtitle: 'Entrega señales de tu marca y exporta un portal APK multilingüe listo para producción.',
      form: {
        hubName: 'Nombre del hub',
        tagline: 'Eslogan principal',
        tone: 'Estilo visual',
        locale: 'Idioma principal',
        categories: 'Categorías destacadas (separadas por comas)',
        apps: 'Apps destacadas (una por línea: “Nombre | Descripción breve”)',
        support: 'Correo de soporte',
        keywords: 'Palabras clave SEO (separadas por comas)',
        submit: 'Generar experiencia',
        download: 'Descargar HTML',
        placeholders: {
          hubName: 'Estudio APKS Center',
          tagline: 'Tu destino Android premium',
          categories: 'Seguridad, Streaming, Lanzadores',
          apps: 'Nebula Player | Streaming con audio espacial\nPhoton VPN | Túneles cifrados sin registros',
          support: 'support@apks.center',
          keywords: 'descargas apk, mods android, hub apk seguro',
        },
      },
      preview: {
        title: 'Vista previa multilingüe',
        switch: 'Cambiar idioma de vista previa',
        hint: 'Usa el selector de idioma o exporta para revisar todas las variantes.',
      },
    },
    templates: {
      title: 'Biblioteca lista para lanzar',
      subtitle: 'Combina plantillas con tu paleta, tipografía y mensajes para diferenciarte al instante.',
      items: [
        {
          name: 'Nova Dark',
          description: 'Hero futurista con rejillas asimétricas y CTAs brillantes.',
          complexity: '8 secciones • 3 bucles de categoría',
        },
        {
          name: 'Orbit Glass',
          description: 'Capas de glassmorphism y tarjetas flotantes con transiciones inmersivas.',
          complexity: '10 secciones • 4 automatizaciones',
        },
        {
          name: 'Pulse Minimal',
          description: 'Layout editorial de alto contraste con módulos destacados.',
          complexity: '7 secciones • 2 checkouts',
        },
      ],
    },
    pricing: {
      title: 'Planes que crecen contigo',
      subtitle: 'Elige un punto de partida, mejora con IA y escala cuando lo necesites.',
      starter: {
        title: 'Inicial',
        price: '0 $ / de por vida',
        features: ['1 landing multilingüe', 'Exportación manual', 'Soporte comunitario'],
        cta: 'Comenzar',
      },
      growth: {
        badge: 'Más popular',
        title: 'Crecimiento',
        price: '39 $ / mes',
        features: ['Idiomas y categorías ilimitados', 'Sitemap y schema automáticos', 'Pagos PayPal & Visa', 'Sesiones prioritarias'],
        cta: 'Activar crecimiento',
      },
      enterprise: {
        title: 'Empresas',
        price: 'Precio a medida',
        features: ['Ingeniero dedicado', 'Biblioteca privada de plantillas', 'SLA y cumplimiento'],
        cta: 'Reservar llamada',
      },
    },
    payments: {
      title: 'Orquestación de pagos incluida',
      subtitle: 'Cobra suscripciones o upgrades con PayPal y tarjetas Visa de forma segura.',
      settings: 'Configurar claves',
      visa: 'Pagar con Visa',
      notice: 'Los pagos con tarjeta se abren en Stripe Checkout. Actualiza el enlace con tu cuenta.',
      modal: {
        title: 'Configuración de pagos',
        paypal: 'ID de cliente PayPal',
        visa: 'URL de Stripe Checkout (Visa habilitada)',
        hint: 'Las credenciales se guardan localmente. Sustituye los valores de prueba antes de publicar.',
        cancel: 'Cancelar',
        save: 'Guardar',
      },
    },
    testimonials: {
      title: 'Equipos globales confían en nosotros',
      subtitle: 'Estudios de producto, editores indie y partners telco escalan con APKS Center.',
      items: [
        {
          quote: '"La localización tardaba semanas. Ahora lanzamos en cinco idiomas en menos de una hora."',
          name: 'Lina Haddad',
          role: 'Growth Lead, Modverse Labs',
        },
        {
          quote: '"Con la capa de pagos integrada monetizamos lanzamientos premium desde el primer día."',
          name: 'Carlos Méndez',
          role: 'Fundador, DroidClub',
        },
        {
          quote: '"Schema, sitemap y rendimiento nos dieron la pole position en SEO."',
          name: 'Eva Stein',
          role: 'Directora SEO, PixelPilot',
        },
      ],
    },
    insights: {
      title: 'Ideas y guías',
      subtitle: 'Mantente a la vanguardia con análisis sobre crecimiento, cumplimiento y pagos.',
      items: [
        { title: 'Playbook: lanza un marketplace APK en 48 horas', date: 'Abril 2024' },
        { title: 'Cómo pasar Google Play Protect sin fricción', date: 'Marzo 2024' },
        { title: 'Patrones de pago que convierten en sitios APK mobile-first', date: 'Febrero 2024' },
      ],
    },
    seo: {
      title: 'Checklist SEO automatizado',
      subtitle: 'Cada proyecto generado incluye las mejores prácticas de la industria.',
      checklist: ['robots.txt y sitemap.xml automáticos', 'Open Graph y tarjetas de Twitter', 'Schema JSON-LD de organización', 'Carga diferida y métricas Web Vitals'],
    },
    cta: {
      title: 'Convierte tus ideas APK en negocios globales',
      subtitle: 'La forma más rápida de construir una tienda APK inmersiva con pagos y analítica.',
      cta: 'Generar mi hub',
    },
    footer: {
      tagline: 'APKS Center es el constructor empresarial para tiendas APK multilingües.',
      products: 'Productos',
      support: 'Soporte',
      legal: 'Legal',
      privacy: 'Privacidad',
      terms: 'Términos',
      sitemap: 'Mapa del sitio',
      meta: '© ' + new Date().getFullYear() + ' APKS Center. Operamos desde Dubái y Berlín.',
      columns: {
        products: ['Estudio de plantillas', 'API de automatización', 'Biblioteca de ideas'],
        support: ['Centro de ayuda', 'Partners de implementación', 'Estado del sistema'],
        legal: ['Guía de marca', 'Seguridad', 'RGPD'],
      },
    },
  },
  fr: {
    direction: 'ltr',
    navigation: {
      features: 'Fonctionnalités',
      categories: 'Catégories',
      generator: 'Générateur',
      templates: 'Modèles',
      pricing: 'Tarifs',
      blog: 'Ressources',
      cta: 'Lancer le builder',
    },
    hero: {
      badge: 'Suite professionnelle APK pilotée par IA',
      title: 'Créez, localisez et monétisez des hubs APK en quelques minutes',
      subtitle:
        'APKS Center est votre cockpit pour concevoir des annuaires APK multilingues, des tunnels intelligents et des paiements prêts à encaisser.',
      primary: 'Démarrer',
      secondary: 'Voir les modèles',
      status: 'Actif',
      preview:
        'Décrivez votre produit et APKS Center assemble des mises en page responsives, des grilles d\'apps et des textes localisés performants.',
    },
    heroHighlights: [
      'robots.txt, sitemap.xml et balises SEO générés automatiquement',
      'Contenus prêts en anglais, arabe, espagnol, français et allemand',
      'Paiements PayPal et Visa configurables côté client',
    ],
    metrics: [
      { value: '12k+', label: 'APK lancés avec APKS Center' },
      { value: '4.9★', label: 'Note moyenne des créateurs' },
      { value: '45%', label: 'Hausse moyenne des conversions' },
    ],
    features: {
      title: 'Puissance d\'entreprise sans lourdeur',
      subtitle: 'Du lancement à la croissance, APKS Center orchestre chaque page, catégorie et point de vente.',
      items: [
        {
          icon: '🧠',
          title: 'Intelligence de contenu',
          description:
            'Régénérez titres, descriptions et métadonnées par langue avec des tonalités adaptées à votre marque.',
        },
        {
          icon: '🗂️',
          title: 'Système de catégories',
          description:
            'Créez des pages de catégories, des sélections et des liens profonds avec sitemap automatique.',
        },
        {
          icon: '🌍',
          title: 'Maillage linguistique',
          description:
            'Servez des expériences complètes en anglais, arabe, espagnol, français et allemand avec support RTL.',
        },
        {
          icon: '💳',
          title: 'Monétisation native',
          description:
            'Intégrez PayPal et Visa, gérez les paliers tarifaires et exportez des reçus sans backend.',
        },
      ],
    },
    categories: {
      title: 'Catégories conçues pour l\'engagement',
      subtitle: 'Démarrez avec des taxonomies prêtes à l\'emploi et des parcours de conversion optimisés.',
      items: [
        {
          name: 'Puissance gaming',
          description: 'Mods quotidiens, tournois et créateurs mis en avant dans un hub fluide.',
          tags: ['Mods action', 'eSports', 'Compatibilité cross-play'],
        },
        {
          name: 'Orbite productivité',
          description: 'Utilitaires sécurisés et automatisations pour équipes distribuées.',
          tags: ['Chiffrement', 'Automatisation', 'Synchronisation cloud'],
        },
        {
          name: 'Rampe créateurs',
          description: 'Suites premium d\'édition, outils streaming et extensions communautaires.',
          tags: ['Vidéo', 'Audio', 'Live'],
        },
      ],
    },
    generator: {
      title: 'Générateur professionnel',
      subtitle: 'Injectez votre ADN de marque et exportez un portail APK multilingue prêt pour la production.',
      form: {
        hubName: 'Nom du hub',
        tagline: 'Slogan',
        tone: 'Style visuel',
        locale: 'Langue principale',
        categories: 'Catégories mises en avant (séparées par des virgules)',
        apps: 'Apps vedettes (une par ligne : « Nom | description »)',
        support: 'Email support',
        keywords: 'Mots-clés SEO (séparés par des virgules)',
        submit: 'Générer l\'expérience',
        download: 'Télécharger HTML',
        placeholders: {
          hubName: 'Studio APKS Center',
          tagline: 'Votre destination Android premium',
          categories: 'Sécurité, Streaming, Launchers',
          apps: 'Nebula Player | Streaming audio spatial\nPhoton VPN | Tunnels chiffrés sans logs',
          support: 'support@apks.center',
          keywords: 'téléchargement apk, mods android, hub apk sécurisé',
        },
      },
      preview: {
        title: 'Aperçu multilingue',
        switch: 'Changer la langue',
        hint: 'Utilisez le sélecteur de langues ou exportez pour analyser toutes les variantes.',
      },
    },
    templates: {
      title: 'Bibliothèque prête à lancer',
      subtitle: 'Combinez les modèles avec votre palette et votre message pour une expérience unique.',
      items: [
        {
          name: 'Nova Dark',
          description: 'Hero futuriste, grilles asymétriques et CTAs lumineux.',
          complexity: '8 sections • 3 boucles',
        },
        {
          name: 'Orbit Glass',
          description: 'Effet verre, cartes flottantes et transitions immersives.',
          complexity: '10 sections • 4 automatisations',
        },
        {
          name: 'Pulse Minimal',
          description: 'Mise en page éditoriale contrastée avec blocs modulaires.',
          complexity: '7 sections • 2 paiements',
        },
      ],
    },
    pricing: {
      title: 'Des offres évolutives',
      subtitle: 'Choisissez un point de départ, optimisez avec l\'IA et évoluez au bon moment.',
      starter: {
        title: 'Essentiel',
        price: '0 € / à vie',
        features: ['1 landing multilingue', 'Export manuel', 'Support communauté'],
        cta: 'Commencer',
      },
      growth: {
        badge: 'Populaire',
        title: 'Croissance',
        price: '39 € / mois',
        features: ['Langues illimitées', 'Sitemap + schema auto', 'Paiements PayPal & Visa', 'Sessions prioritaires'],
        cta: 'Activer',
      },
      enterprise: {
        title: 'Entreprise',
        price: 'Tarif sur mesure',
        features: ['Ingénieur dédié', 'Bibliothèque privée', 'SLA & conformité'],
        cta: 'Programmer un appel',
      },
    },
    payments: {
      title: 'Orchestration de paiement intégrée',
      subtitle: 'Encaissez abonnements et ventes uniques via PayPal et Visa en toute sécurité.',
      settings: 'Configurer les clés',
      visa: 'Payer par Visa',
      notice: 'Le paiement Visa s\'ouvre dans Stripe Checkout sécurisé. Mettez à jour le lien avec votre compte.',
      modal: {
        title: 'Configuration des paiements',
        paypal: 'ID client PayPal',
        visa: 'Lien Stripe Checkout (Visa)',
        hint: 'Les identifiants sont stockés localement. Remplacez les valeurs de test avant mise en ligne.',
        cancel: 'Annuler',
        save: 'Enregistrer',
      },
    },
    testimonials: {
      title: 'Approuvé par les équipes de croissance',
      subtitle: 'Studios produits, éditeurs indépendants et partenaires télécom utilisent APKS Center.',
      items: [
        {
          quote: '"La localisation prenait des semaines. Désormais, cinq langues en moins d\'une heure."',
          name: 'Lina Haddad',
          role: 'Growth Lead, Modverse Labs',
        },
        {
          quote: '"Grâce aux paiements intégrés nous avons monétisé dès le premier jour."',
          name: 'Carlos Méndez',
          role: 'Fondateur, DroidClub',
        },
        {
          quote: '"Schema, sitemap et performance ont boosté notre SEO immédiatement."',
          name: 'Eva Stein',
          role: 'Directrice SEO, PixelPilot',
        },
      ],
    },
    insights: {
      title: 'Ressources & guides',
      subtitle: 'Analysez les mécaniques de croissance, la conformité et la monétisation.',
      items: [
        { title: 'Playbook : marketplace APK en 48h', date: 'Avril 2024' },
        { title: 'Passer Google Play Protect sans friction', date: 'Mars 2024' },
        { title: 'Parcours de paiement qui convertissent sur mobile', date: 'Février 2024' },
      ],
    },
    seo: {
      title: 'Checklist SEO automatisée',
      subtitle: 'Chaque projet inclut les meilleures pratiques par défaut.',
      checklist: ['robots.txt & sitemap.xml dynamiques', 'Cartes Open Graph & Twitter', 'Schéma JSON-LD Organisation', 'Lazy load & Web Vitals'],
    },
    cta: {
      title: 'Transformez vos idées APK en business globaux',
      subtitle: 'La manière la plus rapide de construire une boutique APK immersive avec paiements et analytics.',
      cta: 'Générer mon hub',
    },
    footer: {
      tagline: 'APKS Center est le builder professionnel pour boutiques APK multilingues.',
      products: 'Produits',
      support: 'Support',
      legal: 'Légal',
      privacy: 'Confidentialité',
      terms: 'Conditions',
      sitemap: 'Plan du site',
      meta: '© ' + new Date().getFullYear() + ' APKS Center. Présence à Dubaï et Berlin.',
      columns: {
        products: ['Studio de modèles', 'API d\'automatisation', 'Bibliothèque de ressources'],
        support: ['Centre d\'aide', 'Partenaires', 'Statut'],
        legal: ['Charte graphique', 'Sécurité', 'RGPD'],
      },
    },
  },
  de: {
    direction: 'ltr',
    navigation: {
      features: 'Funktionen',
      categories: 'Kategorien',
      generator: 'Generator',
      templates: 'Vorlagen',
      pricing: 'Preise',
      blog: 'Insights',
      cta: 'Builder starten',
    },
    hero: {
      badge: 'KI-gestützte APK-Business-Suite',
      title: 'APK-Hubs in Minuten aufbauen, lokalisieren & monetarisieren',
      subtitle:
        'APKS Center ist Ihr professionelles Cockpit für mehrsprachige APK-Verzeichnisse, smarte Funnels und sofort einsatzbereite Zahlungswege.',
      primary: 'Jetzt generieren',
      secondary: 'Vorlagen ansehen',
      status: 'Aktiv',
      preview:
        'Sie liefern die Produkt-DNA, APKS Center erstellt responsive Layouts, kuratierte APK-Raster und lokalisierte Copy mit Fokus auf Conversion.',
    },
    heroHighlights: [
      'Automatisches SEO-Setup mit robots.txt, sitemap.xml und Metatags',
      'Lokale Inhalte für Englisch, Arabisch, Spanisch, Französisch und Deutsch',
      'PayPal- und Visa-Zahlungsflüsse mit Konfiguration im Frontend',
    ],
    metrics: [
      { value: '12k+', label: 'APK-Launches mit APKS Center' },
      { value: '4,9★', label: 'Durchschnittliche Bewertung' },
      { value: '45%', label: 'Ø Conversion-Steigerung' },
    ],
    features: {
      title: 'Enterprise-Power ohne Overhead',
      subtitle: 'Vom Launch bis zum Wachstum orchestriert APKS Center jede Seite, Kategorie und Customer Journey.',
      items: [
        {
          icon: '🧠',
          title: 'Content-Intelligenz',
          description:
            'Generieren Sie Headlines, App-Beschreibungen und SEO-Metadaten pro Sprache mit markenkonformen Tönen.',
        },
        {
          icon: '🗂️',
          title: 'Kategorie-Betriebssystem',
          description:
            'Erstellen Sie kuratierte Kategorieseiten, Trend-Module und Deep-Link-Sammlungen mit automatischem Sitemap-Eintrag.',
        },
        {
          icon: '🌍',
          title: 'Globale Sprachabdeckung',
          description:
            'Erleben Sie komplette Experiences in fünf Sprachen mit RTL-Unterstützung und Fallback-Copy.',
        },
        {
          icon: '💳',
          title: 'Native Monetarisierung',
          description:
            'Integrieren Sie PayPal- und Visa-Checkouts, verwalten Sie Preisstufen und exportieren Sie Belege ohne Backend.',
        },
      ],
    },
    categories: {
      title: 'Kuratiere Kategorien mit Bindungsfaktor',
      subtitle: 'Starten Sie mit vorgefertigten Taxonomien und optimierten Conversion-Strecken.',
      items: [
        {
          name: 'Gaming Powerhouse',
          description: 'Tägliche Mod-Drops, Turniere und Creator-Highlights in einem Hub.',
          tags: ['Action-Mods', 'eSports', 'Crossplay'],
        },
        {
          name: 'Produktivitäts-Orbit',
          description: 'Sichere Tools, Automatisierung und Workspace-Booster für Remote-Teams.',
          tags: ['Verschlüsselung', 'Automatisierung', 'Cloud Sync'],
        },
        {
          name: 'Creator Launchpad',
          description: 'Premium Editing, Streaming-Booster und Community-Erweiterungen.',
          tags: ['Video', 'Audio', 'Livestream'],
        },
      ],
    },
    generator: {
      title: 'Professioneller Generator',
      subtitle: 'Versorgen Sie den Builder mit Ihren Markensignalen und exportieren Sie ein mehrsprachiges Portal.',
      form: {
        hubName: 'Hub-Name',
        tagline: 'Hero-Tagline',
        tone: 'Visueller Stil',
        locale: 'Primäre Sprache',
        categories: 'Hervorgehobene Kategorien (Komma getrennt)',
        apps: 'Highlights (eine pro Zeile: „Name | Kurzbeschreibung“)',
        support: 'Support-E-Mail',
        keywords: 'SEO-Keywords (Komma getrennt)',
        submit: 'Experience generieren',
        download: 'HTML herunterladen',
        placeholders: {
          hubName: 'APKS Center Studio',
          tagline: 'Dein Premium-Android-Ziel',
          categories: 'Security, Streaming, Launcher',
          apps: 'Nebula Player | Spatial Audio Streaming\nPhoton VPN | Zero-Log Tunnel',
          support: 'support@apks.center',
          keywords: 'apk download, android mods, apk hub',
        },
      },
      preview: {
        title: 'Live-Vorschau in mehreren Sprachen',
        switch: 'Sprache wechseln',
        hint: 'Nutzen Sie den Sprachwechsel oder exportieren Sie alle Varianten.',
      },
    },
    templates: {
      title: 'Bereit zum Start',
      subtitle: 'Kombinieren Sie Vorlagen mit Ihrer Palette und Messaging für sofortige Differenzierung.',
      items: [
        {
          name: 'Nova Dark',
          description: 'Futuristisches Hero mit asymmetrischen Grids und leuchtenden CTAs.',
          complexity: '8 Sektionen • 3 Kategorien-Loops',
        },
        {
          name: 'Orbit Glass',
          description: 'Glassmorphism-Layer, schwebende Karten und immersive Übergänge.',
          complexity: '10 Sektionen • 4 Automationen',
        },
        {
          name: 'Pulse Minimal',
          description: 'Kontrastreiches Editorial-Layout mit modularen Features.',
          complexity: '7 Sektionen • 2 Checkouts',
        },
      ],
    },
    pricing: {
      title: 'Tarife, die mitwachsen',
      subtitle: 'Wählen Sie den Einstieg, optimieren Sie mit KI und skalieren Sie bei Bedarf.',
      starter: {
        title: 'Starter',
        price: '0 € / dauerhaft',
        features: ['1 mehrsprachige Landingpage', 'Manueller Export', 'Community Support'],
        cta: 'Kostenlos starten',
      },
      growth: {
        badge: 'Beliebt',
        title: 'Growth',
        price: '39 € / Monat',
        features: ['Unbegrenzte Sprachen & Kategorien', 'Autom. Sitemap & Schema', 'PayPal & Visa Zahlungen', 'Priorisierte Sessions'],
        cta: 'Growth aktivieren',
      },
      enterprise: {
        title: 'Enterprise',
        price: 'Individuell',
        features: ['Dedizierter Success Engineer', 'Private Template Library', 'SLAs & Compliance'],
        cta: 'Beratung buchen',
      },
    },
    payments: {
      title: 'Integrierte Zahlungssteuerung',
      subtitle: 'Erheben Sie Abos oder Upgrades sicher via PayPal und Visa-Karten.',
      settings: 'Zahlungsschlüssel konfigurieren',
      visa: 'Mit Visa bezahlen',
      notice: 'Visa-Zahlung öffnet Stripe Checkout. Link mit Ihrem Konto austauschen.',
      modal: {
        title: 'Zahlungseinstellungen',
        paypal: 'PayPal Client-ID',
        visa: 'Stripe Checkout Link (Visa)',
        hint: 'Zugangsdaten werden lokal gespeichert. Testwerte vor Livegang ersetzen.',
        cancel: 'Abbrechen',
        save: 'Speichern',
      },
    },
    testimonials: {
      title: 'Beliebt bei Wachstumsteams weltweit',
      subtitle: 'Studios, Publisher und Telco-Partner bauen mit APKS Center robuste APK-Stores.',
      items: [
        {
          quote: '"Lokalisierung dauerte Wochen. Jetzt liefern wir fünf Sprachen in unter einer Stunde."',
          name: 'Lina Haddad',
          role: 'Growth Lead, Modverse Labs',
        },
        {
          quote: '"Mit der integrierten Zahlungsschicht monetarisierten wir Premium-Drops ab Tag eins."',
          name: 'Carlos Méndez',
          role: 'Gründer, DroidClub',
        },
        {
          quote: '"Schema-Markup, Sitemap und Performance brachten uns sofort Top-Rankings."',
          name: 'Eva Stein',
          role: 'SEO Director, PixelPilot',
        },
      ],
    },
    insights: {
      title: 'Insights & Leitfäden',
      subtitle: 'Bleiben Sie voraus mit Analysen zu Wachstum, Compliance und Monetarisierung.',
      items: [
        { title: 'Playbook: APK-Marktplatz in 48 Stunden', date: 'April 2024' },
        { title: 'Google Play Protect ohne Reibung bestehen', date: 'März 2024' },
        { title: 'Payment-UX, die auf mobilen APK-Sites konvertiert', date: 'Februar 2024' },
      ],
    },
    seo: {
      title: 'SEO-Automation Checkliste',
      subtitle: 'Jedes Projekt liefert Best Practices serienmäßig.',
      checklist: ['robots.txt & sitemap.xml automatisch', 'Open Graph & Twitter Cards', 'Organisation JSON-LD', 'Lazy Loading & Web Vitals'],
    },
    cta: {
      title: 'Verwandeln Sie APK-Ideen in globale Unternehmen',
      subtitle: 'Der schnellste Weg zu einem immersiven APK-Store mit Payments und Analytics.',
      cta: 'Meinen Hub generieren',
    },
    footer: {
      tagline: 'APKS Center ist der Enterprise-Builder für mehrsprachige APK-Stores.',
      products: 'Produkte',
      support: 'Support',
      legal: 'Rechtliches',
      privacy: 'Datenschutz',
      terms: 'AGB',
      sitemap: 'Sitemap',
      meta: '© ' + new Date().getFullYear() + ' APKS Center. Niederlassungen in Dubai und Berlin.',
      columns: {
        products: ['Template Studio', 'Automation API', 'Insights Bibliothek'],
        support: ['Hilfe-Center', 'Implementierungspartner', 'Status'],
        legal: ['Brand Kit', 'Sicherheit', 'DSGVO'],
      },
    },
  },
};
function $(selector, scope = document) {
  return scope.querySelector(selector);
}

function $all(selector, scope = document) {
  return Array.from(scope.querySelectorAll(selector));
}

const navToggle = $('.nav-toggle');
const nav = $('#primary-navigation');
const langButtons = $all('.lang-btn');
const toneSelect = $('#tone');
const localeSelect = $('#baseLocale');
const form = $('#generator-form');
const downloadBtn = $('#downloadBtn');
const previewFrame = $('#previewFrame');
const previewLocaleBtn = $('#previewLocale');
const paypalButtonContainer = $('#paypal-button-container');
const visaCheckoutBtn = $('#visaCheckout');
const paymentSettingsBtn = $('#paymentSettings');
const paymentModal = $('#paymentModal');
const paymentForm = $('#paymentForm');
const paypalClientIdInput = $('#paypalClientId');
const stripeLinkInput = $('#stripeLink');
const modalCloseBtn = $('.modal__close');
const translationsLiveRegion = $('#translations-loaded');

const paymentConfig = {
  paypalClientId: localStorage.getItem('apkscenter_paypal_id') || 'sb',
  stripeLink: localStorage.getItem('apkscenter_stripe_link') || 'https://buy.stripe.com/test_4gw6p33Cw9KP2jueUU',
};

const defaultPayload = {
  hubName: translations.en.generator.form.placeholders.hubName,
  tagline: translations.en.generator.form.placeholders.tagline,
  tone: 'nebula',
  baseLocale: defaultLocale,
  categories: translations.en.generator.form.placeholders.categories
    .split(',')
    .map((item) => item.trim()),
  apps: parseApps(translations.en.generator.form.placeholders.apps),
  supportEmail: translations.en.generator.form.placeholders.support,
  keywords: translations.en.generator.form.placeholders.keywords
    .split(',')
    .map((item) => item.trim())
    .filter(Boolean),
};

const localeLabels = {
  en: { en: 'English', ar: 'Arabic', es: 'Spanish', fr: 'French', de: 'German' },
  ar: { en: 'الإنجليزية', ar: 'العربية', es: 'الإسبانية', fr: 'الفرنسية', de: 'الألمانية' },
  es: { en: 'Inglés', ar: 'Árabe', es: 'Español', fr: 'Francés', de: 'Alemán' },
  fr: { en: 'Anglais', ar: 'Arabe', es: 'Espagnol', fr: 'Français', de: 'Allemand' },
  de: { en: 'Englisch', ar: 'Arabisch', es: 'Spanisch', fr: 'Französisch', de: 'Deutsch' },
};

const generatedAppTitles = {
  en: 'Featured apps',
  ar: 'التطبيقات المميزة',
  es: 'Aplicaciones destacadas',
  fr: 'Applications mises en avant',
  de: 'Ausgewählte Apps',
};

const generatedAppCtas = {
  en: 'Download APK',
  ar: 'تحميل APK',
  es: 'Descargar APK',
  fr: 'Télécharger APK',
  de: 'APK herunterladen',
};

const languageSelectorLabels = {
  en: 'Language selector',
  ar: 'تحديد اللغة',
  es: 'Selector de idioma',
  fr: 'Sélecteur de langue',
  de: 'Sprachauswahl',
};

const categoryHelper = {
  en: 'Curated experiences to match your catalog.',
  ar: 'تجارب منسقة تناسب مكتبتك.',
  es: 'Experiencias curadas para tu catálogo.',
  fr: 'Expériences sélectionnées pour votre catalogue.',
  de: 'Kuratiert für Ihren Katalog.',
};

document.addEventListener('DOMContentLoaded', () => {
  setupNavigation();
  setupToneOptions();
  setupLocaleOptions();
  setupLanguageSwitcher();
  setupPayments();
  setupModal();
  setupGenerator();
  setLocale(defaultLocale);
  populateDefaultPreview();
});

function setupNavigation() {
  if (!navToggle || !nav) return;
  navToggle.addEventListener('click', () => {
    const expanded = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', String(!expanded));
    nav.setAttribute('aria-expanded', String(!expanded));
  });

  $all('a[href^="#"]', nav).forEach((link) => {
    link.addEventListener('click', () => {
      navToggle.setAttribute('aria-expanded', 'false');
      nav.setAttribute('aria-expanded', 'false');
    });
  });
}

function setupToneOptions() {
  const fragment = document.createDocumentFragment();
  Object.entries(tonePalettes).forEach(([key, palette]) => {
    const option = document.createElement('option');
    option.value = key;
    option.dataset.tone = key;
    option.textContent = palette.name[defaultLocale];
    fragment.appendChild(option);
  });
  toneSelect.appendChild(fragment);
  toneSelect.value = 'nebula';
}

function setupLocaleOptions() {
  const fragment = document.createDocumentFragment();
  locales.forEach((locale) => {
    const option = document.createElement('option');
    option.value = locale;
    option.textContent = localeLabel(locale);
    fragment.appendChild(option);
  });
  localeSelect.appendChild(fragment);
  localeSelect.value = defaultLocale;
}

function setupLanguageSwitcher() {
  langButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const locale = button.dataset.locale;
      setLocale(locale);
    });
  });
}

function setupPayments() {
  paypalClientIdInput.value = paymentConfig.paypalClientId;
  stripeLinkInput.value = paymentConfig.stripeLink;
  loadPayPalButtons(paymentConfig.paypalClientId);
  visaCheckoutBtn.addEventListener('click', () => {
    window.open(paymentConfig.stripeLink, '_blank', 'noopener');
  });
}

function setupModal() {
  if (!paymentModal) return;
  const closeModal = () => toggleModal(false);
  paymentSettingsBtn.addEventListener('click', () => toggleModal(true));
  modalCloseBtn.addEventListener('click', closeModal);
  paymentModal.querySelector('.modal__backdrop').addEventListener('click', closeModal);

  paymentForm.addEventListener('submit', (event) => {
    event.preventDefault();
    paymentConfig.paypalClientId = paypalClientIdInput.value.trim() || 'sb';
    paymentConfig.stripeLink = stripeLinkInput.value.trim() || paymentConfig.stripeLink;
    localStorage.setItem('apkscenter_paypal_id', paymentConfig.paypalClientId);
    localStorage.setItem('apkscenter_stripe_link', paymentConfig.stripeLink);
    loadPayPalButtons(paymentConfig.paypalClientId);
    toggleModal(false);
  });

  paymentModal.querySelector('[data-i18n="payments.modal.cancel"]').addEventListener('click', (event) => {
    event.preventDefault();
    toggleModal(false);
  });
}

function toggleModal(visible) {
  paymentModal.setAttribute('aria-hidden', String(!visible));
  document.body.style.overflow = visible ? 'hidden' : '';
}

function loadPayPalButtons(clientId) {
  paypalButtonContainer.innerHTML = '';
  const existing = document.getElementById('paypal-sdk');
  if (existing) existing.remove();
  const script = document.createElement('script');
  script.id = 'paypal-sdk';
  script.src = `https://www.paypal.com/sdk/js?client-id=${encodeURIComponent(clientId)}&currency=USD&intent=CAPTURE&components=buttons,funding-eligibility`;
  script.addEventListener('load', () => {
    if (window.paypal) {
      window.paypal
        .Buttons({
          style: { shape: 'pill', color: 'silver', layout: 'vertical' },
          createOrder: (_, actions) =>
            actions.order.create({
              purchase_units: [
                {
                  description: 'APKS Center Growth Plan',
                  amount: { value: '39.00', currency_code: 'USD' },
                },
              ],
            }),
          onApprove: (_, actions) => actions.order.capture().then(() => {
            paypalButtonContainer.innerHTML = '<div class="success">Payment completed ✔</div>';
          }),
        })
        .render('#paypal-button-container');
    }
  });
  document.head.appendChild(script);
}

function setupGenerator() {
  if (!form) return;
  applyPlaceholders(defaultLocale);
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const payload = collectFormData();
    generatedPayload = payload;
    currentPreviewLocale = payload.baseLocale;
    renderGeneratedPreview(payload, currentPreviewLocale);
  });

  downloadBtn.addEventListener('click', () => {
    if (!generatedPayload) return;
    const html = buildGeneratedSite(generatedPayload, currentPreviewLocale);
    triggerDownload(html, generatedPayload.hubName || 'apks-center');
  });

  previewLocaleBtn.addEventListener('click', () => {
    if (!generatedPayload) return;
    const currentIndex = locales.indexOf(currentPreviewLocale);
    const nextLocale = locales[(currentIndex + 1) % locales.length];
    currentPreviewLocale = nextLocale;
    renderGeneratedPreview(generatedPayload, nextLocale);
  });
}

function populateDefaultPreview() {
  generatedPayload = defaultPayload;
  renderGeneratedPreview(defaultPayload, defaultLocale);
}

function renderGeneratedPreview(payload, locale) {
  const html = buildGeneratedSite(payload, locale);
  previewFrame.srcdoc = html;
  downloadBtn.disabled = false;
}

function collectFormData() {
  const hubName = $('#hubName').value.trim();
  const tagline = $('#tagline').value.trim();
  const tone = toneSelect.value;
  const baseLocale = localeSelect.value;
  const categoriesValue = $('#categories').value;
  const categories = categoriesValue
    .split(',')
    .map((item) => item.trim())
    .filter(Boolean);
  const appsValue = $('#apps').value.trim();
  const apps = appsValue ? parseApps(appsValue) : defaultPayload.apps;
  const supportEmail = $('#supportEmail').value.trim();
  const keywords = $('#seoKeywords')
    .value.trim()
    .split(',')
    .map((keyword) => keyword.trim())
    .filter(Boolean);

  return {
    hubName: hubName || defaultPayload.hubName,
    tagline: tagline || defaultPayload.tagline,
    tone,
    baseLocale,
    categories: categories.length ? categories : defaultPayload.categories,
    apps,
    supportEmail: supportEmail || defaultPayload.supportEmail,
    keywords: keywords.length ? keywords : defaultPayload.keywords,
  };
}

function parseApps(input) {
  return input
    .split('\n')
    .map((line) => line.trim())
    .filter(Boolean)
    .map((line) => {
      const [name, blurb] = line.split('|').map((part) => part.trim());
      return {
        name: name || 'Untitled APK',
        blurb: blurb || 'Fast, stable, and safe download.',
      };
    });
}

function triggerDownload(html, name) {
  const fileName = `${sanitizeFileName(name)}.html`;
  const blob = new Blob([html], { type: 'text/html' });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement('a');
  anchor.href = url;
  anchor.download = fileName;
  document.body.appendChild(anchor);
  anchor.click();
  anchor.remove();
  setTimeout(() => URL.revokeObjectURL(url), 2000);
}

function sanitizeFileName(name) {
  return name.toLowerCase().replace(/[^a-z0-9-_]+/g, '-');
}

function setLocale(locale) {
  if (!translations[locale]) return;
  currentLocale = locale;
  document.documentElement.lang = locale;
  const direction = translations[locale].direction;
  document.documentElement.dir = direction;
  document.body.dir = direction;
  langButtons.forEach((button) => {
    button.setAttribute('aria-pressed', String(button.dataset.locale === locale));
    button.textContent = localeLabel(button.dataset.locale, locale);
  });
  updateToneLabels(locale);
  updateLocaleLabels(locale);
  applyPlaceholders(locale);
  renderLocale(locale);
  translationsLiveRegion.textContent = `Language switched to ${localeLabel(locale, locale)}`;
}

function localeLabel(locale, targetLocale = currentLocale) {
  return localeLabels[targetLocale]?.[locale] || locale.toUpperCase();
}

function updateToneLabels(locale) {
  $all('option[data-tone]', toneSelect).forEach((option) => {
    const toneKey = option.dataset.tone;
    option.textContent = tonePalettes[toneKey].name[locale];
  });
}

function updateLocaleLabels(locale) {
  $all('#baseLocale option').forEach((option) => {
    option.textContent = localeLabel(option.value, locale);
  });
}

function applyPlaceholders(locale) {
  const placeholders = translations[locale].generator.form.placeholders;
  $('#hubName').placeholder = placeholders.hubName;
  $('#tagline').placeholder = placeholders.tagline;
  $('#categories').placeholder = placeholders.categories;
  $('#apps').placeholder = placeholders.apps;
  $('#supportEmail').placeholder = placeholders.support;
  $('#seoKeywords').placeholder = placeholders.keywords;
}

function renderLocale(locale) {
  const strings = translations[locale];
  const metaDescription = $('meta[name="description"]');
  if (metaDescription) {
    metaDescription.setAttribute('content', strings.hero.subtitle);
  }
  const metaOgDescription = $('meta[property="og:description"]');
  if (metaOgDescription) {
    metaOgDescription.setAttribute('content', strings.hero.subtitle);
  }
  const switcher = document.querySelector('.language-switcher');
  if (switcher) {
    switcher.setAttribute('aria-label', languageSelectorLabels[locale] || languageSelectorLabels.en);
  }
  langButtons.forEach((btn) => {
    btn.textContent = localeLabel(btn.dataset.locale, locale);
  });
  $all('[data-i18n]').forEach((node) => {
    const key = node.getAttribute('data-i18n');
    const value = resolvePath(strings, key);
    if (typeof value === 'string') {
      node.textContent = value;
    }
  });

  $all('[data-i18n-list]').forEach((node) => {
    const key = node.getAttribute('data-i18n-list');
    const value = resolvePath(strings, key);
    if (Array.isArray(value)) {
      node.innerHTML = value.map((item) => `<li>${escapeHtml(item)}</li>`).join('');
    }
  });

  renderHero(strings);
  renderFeatures(strings.features.items);
  renderCategories(strings.categories.items);
  renderTemplates(strings.templates.items);
  renderTestimonials(strings.testimonials.items);
  renderInsights(strings.insights.items);
  renderSeoChecklist(strings.seo.checklist);
  renderFooter(strings.footer);
}

function renderHero(strings) {
  const metrics = $('#metrics');
  const highlights = $('#hero-highlights');
  metrics.innerHTML = strings.metrics
    .map(
      (metric) => `
        <div>
          <dt>${escapeHtml(metric.value)}</dt>
          <dd>${escapeHtml(metric.label)}</dd>
        </div>
      `
    )
    .join('');

  highlights.innerHTML = strings.heroHighlights
    .map((item) => `<li>${escapeHtml(item)}</li>`)
    .join('');
}

function renderFeatures(items) {
  const grid = $('#feature-grid');
  grid.innerHTML = items
    .map(
      (item) => `
        <article class="card">
          <div class="icon">${escapeHtml(item.icon)}</div>
          <h3>${escapeHtml(item.title)}</h3>
          <p>${escapeHtml(item.description)}</p>
        </article>
      `
    )
    .join('');
}

function renderCategories(items) {
  const container = $('#category-tabs');
  container.innerHTML = items
    .map(
      (item) => `
        <article class="category-card">
          <h3>${escapeHtml(item.name)}</h3>
          <p>${escapeHtml(item.description)}</p>
          <div class="tag-list">
            ${item.tags.map((tag) => `<span class="tag">${escapeHtml(tag)}</span>`).join('')}
          </div>
        </article>
      `
    )
    .join('');
}

function renderTemplates(items) {
  const gallery = $('#template-gallery');
  gallery.innerHTML = items
    .map(
      (item) => `
        <article class="template-card card">
          <div class="mockup" aria-hidden="true">
            <img src="https://dummyimage.com/640x360/0d0c1d/ffffff&text=${encodeURIComponent(item.name)}" alt="${escapeHtml(item.name)} mockup" loading="lazy" />
          </div>
          <div>
            <h3>${escapeHtml(item.name)}</h3>
            <p>${escapeHtml(item.description)}</p>
            <footer>${escapeHtml(item.complexity)}</footer>
          </div>
        </article>
      `
    )
    .join('');
}

function renderTestimonials(items) {
  const grid = $('#testimonial-grid');
  grid.innerHTML = items
    .map(
      (item) => `
        <article class="testimonial-card card">
          <p>“${escapeHtml(item.quote.replace(/^["“”]+|["“”]+$/g, ''))}”</p>
          <footer>
            <strong>${escapeHtml(item.name)}</strong>
            <span>${escapeHtml(item.role)}</span>
          </footer>
        </article>
      `
    )
    .join('');
}

function renderInsights(items) {
  const list = $('#insights-list');
  list.innerHTML = items
    .map(
      (item) => `
        <li class="insight-item">
          <h3>${escapeHtml(item.title)}</h3>
          <time datetime="${escapeHtml(item.date)}">${escapeHtml(item.date)}</time>
        </li>
      `
    )
    .join('');
}

function renderSeoChecklist(items) {
  const list = $('#seo-checklist');
  list.innerHTML = items.map((item) => `<li>${escapeHtml(item)}</li>`).join('');
}

function renderFooter(footer) {
  const products = $('#footer-products');
  const support = $('#footer-support');
  const legal = $('#footer-legal');
  const meta = $('#footer-meta');
  products.innerHTML = footer.columns.products.map((item) => `<li>${escapeHtml(item)}</li>`).join('');
  support.innerHTML = footer.columns.support.map((item) => `<li>${escapeHtml(item)}</li>`).join('');
  legal.innerHTML = footer.columns.legal.map((item) => `<li>${escapeHtml(item)}</li>`).join('');
  meta.textContent = footer.meta;
}

function resolvePath(source, path) {
  return path.split('.').reduce((acc, key) => (acc && acc[key] !== undefined ? acc[key] : undefined), source);
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function buildGeneratedSite(payload, initialLocale) {
  const palette = tonePalettes[payload.tone]?.values || tonePalettes.nebula.values;
  const languages = locales;
  const translationsPayload = languages.reduce((acc, locale) => {
    acc[locale] = buildLocalizedContent(locale, payload);
    return acc;
  }, {});
  const activeLocale = translationsPayload[initialLocale] ? initialLocale : defaultLocale;
  const active = translationsPayload[activeLocale];
  const sanitizedKeywords = payload.keywords.map((keyword) => escapeHtml(keyword)).join(', ');

  return `<!DOCTYPE html>
<html lang="${activeLocale}" data-theme="dark">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>${escapeHtml(payload.hubName)} • APKS Center</title>
  <meta name="description" content="${escapeHtml(active.metaDescription)}" />
  <meta name="keywords" content="${sanitizedKeywords}" />
  <meta property="og:title" content="${escapeHtml(payload.hubName)}" />
  <meta property="og:description" content="${escapeHtml(active.metaDescription)}" />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://apks.center/" />
  <link rel="canonical" href="https://apks.center/" />
  <style>
    :root {
      color-scheme: dark;
      --bg: ${palette.background};
      --surface: ${palette.surface};
      --accent: ${palette.accent};
      --border: ${palette.border};
      --text: #f5f7ff;
      --muted: #b7bdd8;
      font-family: 'Inter', system-ui, sans-serif;
    }
    * { box-sizing: border-box; }
    body {
      margin: 0;
      min-height: 100vh;
      background: radial-gradient(circle at 20% 0%, rgba(127, 90, 240, 0.18), transparent 55%), var(--bg);
      color: var(--text);
      line-height: 1.65;
    }
    a { color: inherit; text-decoration: none; }
    header {
      position: sticky;
      top: 0;
      backdrop-filter: blur(12px);
      background: rgba(3, 4, 18, 0.85);
      border-bottom: 1px solid rgba(255,255,255,0.06);
      padding: 1rem 5vw;
      display: flex;
      align-items: center;
      justify-content: space-between;
      z-index: 10;
    }
    nav ul {
      display: flex;
      gap: 1rem;
      list-style: none;
      margin: 0;
      padding: 0;
      flex-wrap: wrap;
    }
    .language-switcher {
      display: inline-flex;
      gap: 0.4rem;
      padding: 0.25rem;
      border-radius: 999px;
      background: rgba(255,255,255,0.08);
    }
    .language-switcher button {
      border: none;
      background: transparent;
      color: var(--muted);
      padding: 0.35rem 0.75rem;
      border-radius: 999px;
      cursor: pointer;
    }
    .language-switcher button[aria-pressed="true"] {
      background: rgba(255,255,255,0.15);
      color: var(--text);
    }
    main { padding: clamp(2rem, 4vw, 3rem) 5vw 4rem; }
    .hero {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
      gap: clamp(2rem, 4vw, 3rem);
      align-items: center;
      margin-bottom: clamp(2rem, 6vw, 4rem);
    }
    .hero h1 { margin: 0 0 1rem; font-size: clamp(2.2rem, 4vw, 3.2rem); }
    .hero .badge {
      display: inline-flex;
      padding: 0.45rem 0.85rem;
      border-radius: 999px;
      background: rgba(255,255,255,0.12);
      letter-spacing: 0.1em;
      text-transform: uppercase;
      font-size: 0.7rem;
    }
    .cta { display: inline-flex; gap: 1rem; flex-wrap: wrap; margin-top: 1.5rem; }
    .button {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 0.35rem;
      border-radius: 999px;
      padding: 0.75rem 1.5rem;
      border: 1px solid rgba(255,255,255,0.15);
      background: rgba(255,255,255,0.1);
      color: var(--text);
      cursor: pointer;
      transition: transform 0.2s ease;
    }
    .button--primary {
      background: var(--accent);
      color: #05060f;
    }
    .grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      gap: 1.5rem;
    }
    .card {
      background: rgba(14, 16, 38, 0.85);
      border-radius: 18px;
      padding: 1.5rem;
      border: 1px solid var(--border);
    }
    .apps article {
      display: grid;
      gap: 0.5rem;
      background: rgba(255,255,255,0.05);
      border-radius: 14px;
      padding: 1rem;
      border: 1px solid rgba(255,255,255,0.08);
    }
    .payments {
      margin-top: 3rem;
      display: grid;
      gap: 1.5rem;
      grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
      align-items: center;
    }
    .footer {
      margin-top: 4rem;
      border-top: 1px solid rgba(255,255,255,0.08);
      padding: 2.5rem 0 1.5rem;
      color: var(--muted);
      font-size: 0.9rem;
    }
    .footer nav {
      display: flex;
      flex-wrap: wrap;
      gap: 1.5rem;
      margin-bottom: 1.5rem;
    }
    .footer nav div {
      min-width: 180px;
    }
    .footer ul {
      list-style: none;
      margin: 0.6rem 0 0;
      padding: 0;
      display: grid;
      gap: 0.4rem;
    }
    .seo-list { list-style: none; padding: 0; margin: 0; display: grid; gap: 0.75rem; }
    .seo-list li::before { content: '▹'; margin-right: 0.5rem; color: #00e0ff; }
    .success { background: rgba(0,128,96,0.18); padding: 0.6rem 1rem; border-radius: 10px; }
    @media (max-width: 700px) {
      header { flex-direction: column; align-items: flex-start; gap: 1rem; }
      nav ul { flex-direction: column; align-items: flex-start; }
    }
  </style>
</head>
<body data-locale="${activeLocale}">
  <header>
    <div class="brand">${escapeHtml(payload.hubName)}</div>
    <nav>
      <ul>
        <li><a href="#features">${escapeHtml(active.navigation.features)}</a></li>
        <li><a href="#categories">${escapeHtml(active.navigation.categories)}</a></li>
        <li><a href="#apps">${escapeHtml(active.navigation.generator)}</a></li>
        <li><a href="#payments">${escapeHtml(translations[activeLocale].navigation.pricing)}</a></li>
      </ul>
    </nav>
    <div class="language-switcher" aria-label="${escapeHtml(active.languageLabel)}">
      ${languages
        .map(
          (locale) => `
          <button type="button" data-locale="${locale}" aria-pressed="${locale === activeLocale}">
            ${escapeHtml(localeLabel(locale, activeLocale))}
          </button>`
        )
        .join('')}
    </div>
  </header>
  <main>
    <section class="hero" id="top">
      <div>
        <span class="badge">${escapeHtml(active.hero.badge)}</span>
        <h1>${escapeHtml(payload.hubName)}</h1>
        <p>${escapeHtml(payload.tagline)}</p>
        <p>${escapeHtml(active.hero.description)}</p>
        <div class="cta">
          <a class="button button--primary" href="#payments">${escapeHtml(active.hero.primaryCta)}</a>
          <a class="button" href="#apps">${escapeHtml(active.hero.secondaryCta)}</a>
        </div>
      </div>
      <div class="card hero-preview">
        <h3>${escapeHtml(active.preview.title)}</h3>
        <p>${escapeHtml(active.preview.description)}</p>
      </div>
    </section>

    <section id="features">
      <div class="grid">
        ${active.features
          .map(
            (feature) => `
            <article class="card">
              <h3>${escapeHtml(feature.title)}</h3>
              <p>${escapeHtml(feature.description)}</p>
            </article>
          `
          )
          .join('')}
      </div>
    </section>

    <section id="categories" class="card" style="margin-top:3rem;">
      <h2>${escapeHtml(active.categories.title)}</h2>
      <p>${escapeHtml(active.categories.subtitle)}</p>
      <div class="grid" style="margin-top:1.5rem;">
        ${payload.categories
          .map(
            (category) => `
            <article class="card" style="background: rgba(255,255,255,0.03);">
              <h3>${escapeHtml(category)}</h3>
              <p>${escapeHtml(active.categories.helper)}</p>
            </article>
          `
          )
          .join('')}
      </div>
    </section>

    <section id="apps" style="margin-top:3rem;">
      <h2>${escapeHtml(active.apps.title)}</h2>
      <div class="grid apps" style="margin-top:1.5rem;">
        ${payload.apps
          .map(
            (app) => `
            <article>
              <h3>${escapeHtml(app.name)}</h3>
              <p>${escapeHtml(app.blurb)}</p>
              <a class="button button--primary" href="#download">${escapeHtml(active.apps.cta)}</a>
            </article>
          `
          )
          .join('')}
      </div>
    </section>

    <section id="seo" class="card" style="margin-top:3rem;">
      <h2>${escapeHtml(active.seo.title)}</h2>
      <p>${escapeHtml(active.seo.subtitle)}</p>
      <ul class="seo-list">
        ${active.seo.items.map((item) => `<li>${escapeHtml(item)}</li>`).join('')}
      </ul>
    </section>

    <section id="payments" class="payments">
      <div>
        <h2>${escapeHtml(active.payments.title)}</h2>
        <p>${escapeHtml(active.payments.subtitle)}</p>
        <p>${escapeHtml(active.payments.notice)}</p>
      </div>
      <div>
        <div id="paypal-buttons"></div>
        <button class="button button--primary" id="visa-button">${escapeHtml(active.payments.visa)}</button>
      </div>
    </section>
  </main>

  <footer class="footer">
    <nav>
      <div>
        <strong>${escapeHtml(payload.hubName)}</strong>
        <ul>
          <li><a href="mailto:${escapeHtml(payload.supportEmail)}">${escapeHtml(payload.supportEmail)}</a></li>
        </ul>
      </div>
      <div>
        <strong>${escapeHtml(active.footer.products)}</strong>
        <ul>${active.footer.productsList.map((item) => `<li>${escapeHtml(item)}</li>`).join('')}</ul>
      </div>
      <div>
        <strong>${escapeHtml(active.footer.support)}</strong>
        <ul>${active.footer.supportList.map((item) => `<li>${escapeHtml(item)}</li>`).join('')}</ul>
      </div>
      <div>
        <strong>${escapeHtml(active.footer.legal)}</strong>
        <ul>${active.footer.legalList.map((item) => `<li>${escapeHtml(item)}</li>`).join('')}</ul>
      </div>
    </nav>
    <p>${escapeHtml(active.footer.meta)}</p>
  </footer>

  <script>
    const siteTranslations = ${JSON.stringify(translationsPayload)};
    const languages = ${JSON.stringify(languages)};
    const labelMap = ${JSON.stringify(localeLabels)};
    const switcherLabels = ${JSON.stringify(languageSelectorLabels)};
    const defaultStripeLink = ${JSON.stringify(paymentConfig.stripeLink)};
    const paypalClientId = ${JSON.stringify(paymentConfig.paypalClientId)};
    function escapeHtml(value) {
      return String(value)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
    }

    function localizedLabel(locale, current) {
      return (labelMap[current] && labelMap[current][locale]) || locale.toUpperCase();
    }

    function localizedAria(locale) {
      return switcherLabels[locale] || switcherLabels.en;
    }

    const languageButtons = document.querySelectorAll('.language-switcher button');
    const switcher = document.querySelector('.language-switcher');
    const initialLocale = document.body.dataset.locale || '${defaultLocale}';
    if (switcher) {
      switcher.setAttribute('aria-label', localizedAria(initialLocale));
    }
    languageButtons.forEach((btn) => {
      btn.textContent = localizedLabel(btn.dataset.locale, initialLocale);
    });
    languageButtons.forEach((button) => {
      button.addEventListener('click', () => {
        const locale = button.dataset.locale;
        if (!siteTranslations[locale]) return;
        document.documentElement.lang = locale;
        document.body.dataset.locale = locale;
        languageButtons.forEach((btn) => {
          btn.setAttribute('aria-pressed', String(btn === button));
          btn.textContent = localizedLabel(btn.dataset.locale, locale);
        });
        if (switcher) {
          switcher.setAttribute('aria-label', localizedAria(locale));
        }
        renderLocale(locale);
      });
    });

    function renderLocale(locale) {
      const strings = siteTranslations[locale];
      if (switcher) {
        switcher.setAttribute('aria-label', localizedAria(locale));
      }
      languageButtons.forEach((btn) => {
        btn.textContent = localizedLabel(btn.dataset.locale, locale);
      });
      document.querySelector('header .brand').textContent = strings.hero.brand;
      document.querySelector('.hero .badge').textContent = strings.hero.badge;
      document.querySelector('.hero p:nth-of-type(1)').textContent = strings.hero.tagline;
      document.querySelector('.hero p:nth-of-type(2)').textContent = strings.hero.description;
      const buttons = document.querySelectorAll('.cta .button');
      buttons[0].textContent = strings.hero.primaryCta;
      buttons[1].textContent = strings.hero.secondaryCta;
      document.querySelector('.hero-preview h3').textContent = strings.preview.title;
      document.querySelector('.hero-preview p').textContent = strings.preview.description;
      document.querySelector('#features .grid').innerHTML = strings.features
        .map(
          (feature) => `<article class="card"><h3>${escapeHtml(feature.title)}</h3><p>${escapeHtml(feature.description)}</p></article>`
        )
        .join('');
      document.querySelector('#categories h2').textContent = strings.categories.title;
      document.querySelector('#categories p').textContent = strings.categories.subtitle;
      document.querySelector('#categories .grid').innerHTML = strings.categories.cards
        .map(
          (card) =>
            `<article class="card" style="background: rgba(255,255,255,0.03);"><h3>${escapeHtml(card.title)}</h3><p>${escapeHtml(card.description)}</p></article>`
        )
        .join('');
      document.querySelector('#apps h2').textContent = strings.apps.title;
      document.querySelector('#apps .apps').innerHTML = strings.apps.items
        .map(
          (app) =>
            `<article><h3>${escapeHtml(app.name)}</h3><p>${escapeHtml(app.blurb)}</p><a class="button button--primary" href="#download">${escapeHtml(strings.apps.cta)}</a></article>`
        )
        .join('');
      document.querySelector('#seo h2').textContent = strings.seo.title;
      document.querySelector('#seo p').textContent = strings.seo.subtitle;
      document.querySelector('#seo .seo-list').innerHTML = strings.seo.items
        .map((item) => `<li>${escapeHtml(item)}</li>`)
        .join('');
      document.querySelector('#payments h2').textContent = strings.payments.title;
      document.querySelector('#payments p').textContent = strings.payments.subtitle;
      document.querySelector('#payments p:nth-of-type(2)').textContent = strings.payments.notice;
      document.getElementById('visa-button').textContent = strings.payments.visa;
      const footerSections = document.querySelectorAll('.footer nav div');
      footerSections[0].querySelector('strong').textContent = strings.footer.brand;
      footerSections[1].querySelector('strong').textContent = strings.footer.products;
      footerSections[1].querySelector('ul').innerHTML = strings.footer.productsList
        .map((item) => `<li>${escapeHtml(item)}</li>`)
        .join('');
      footerSections[2].querySelector('strong').textContent = strings.footer.support;
      footerSections[2].querySelector('ul').innerHTML = strings.footer.supportList
        .map((item) => `<li>${escapeHtml(item)}</li>`)
        .join('');
      footerSections[3].querySelector('strong').textContent = strings.footer.legal;
      footerSections[3].querySelector('ul').innerHTML = strings.footer.legalList
        .map((item) => `<li>${escapeHtml(item)}</li>`)
        .join('');
      document.querySelector('.footer p').textContent = strings.footer.meta;
    }

    function initPayments() {
      const script = document.createElement('script');
      script.src = `https://www.paypal.com/sdk/js?client-id=${paypalClientId}&currency=USD&intent=CAPTURE`;
      script.addEventListener('load', () => {
        if (window.paypal) {
          window.paypal.Buttons({
            style: { shape: 'pill', color: 'gold' },
            createOrder: (_, actions) => actions.order.create({
              purchase_units: [{ amount: { value: '39.00', currency_code: 'USD' } }],
            }),
            onApprove: (_, actions) => actions.order.capture().then(() => {
              const container = document.getElementById('paypal-buttons');
              container.innerHTML = '<div class="success">Payment completed ✔</div>';
            }),
          }).render('#paypal-buttons');
        }
      });
      document.head.appendChild(script);
      document.getElementById('visa-button').addEventListener('click', () => {
        window.open(defaultStripeLink, '_blank', 'noopener');
      });
    }

    renderLocale(document.body.dataset.locale || '${activeLocale}');
    initPayments();
  </script>
</body>
</html>`;
}

function buildLocalizedContent(locale, payload) {
  const base = translations[locale] || translations.en;
  return {
    languageLabel: languageSelectorLabels[locale] || languageSelectorLabels.en,
    metaDescription: `${payload.tagline} — ${base.hero.preview}`,
    navigation: {
      features: base.navigation.features,
      categories: base.navigation.categories,
      generator: base.navigation.generator,
    },
    hero: {
      brand: payload.hubName,
      badge: base.hero.badge,
      tagline: payload.tagline,
      description: base.hero.preview,
      primaryCta: base.hero.primary,
      secondaryCta: base.hero.secondary,
    },
    preview: {
      title: base.generator.preview.title,
      description: base.generator.preview.hint,
    },
    features: base.features.items.map((item) => ({
      title: item.title,
      description: item.description,
    })),
    categories: {
      title: base.categories.title,
      subtitle: base.categories.subtitle,
      helper: categoryHelper[locale] || categoryHelper.en,
      cards: payload.categories.map((category) => ({
        title: category,
        description: base.categories.subtitle,
      })),
    },
    apps: {
      title: generatedAppTitles[locale] || generatedAppTitles.en,
      cta: generatedAppCtas[locale] || generatedAppCtas.en,
      items: payload.apps.map((app) => ({ name: app.name, blurb: app.blurb })),
    },
    seo: {
      title: base.seo.title,
      subtitle: base.seo.subtitle,
      items: base.seo.checklist,
    },
    payments: {
      title: base.payments.title,
      subtitle: base.payments.subtitle,
      notice: base.payments.notice,
      visa: base.payments.visa,
    },
    footer: {
      brand: payload.hubName,
      products: base.footer.products,
      support: base.footer.support,
      legal: base.footer.legal,
      productsList: base.footer.columns.products,
      supportList: base.footer.columns.support,
      legalList: base.footer.columns.legal,
      meta: base.footer.meta,
    },
  };
}
