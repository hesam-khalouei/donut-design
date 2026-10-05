export interface Post {
  slug: string;
  title: Record<string, string>;
  excerpt: Record<string, string>;
  content: Record<string, string>;
  category: string;
  tags: string[];
  author: {
    name: string;
    initial: string;
  };
  date: string;
  readTime: number;
  coverColor: string;
  coverAccent: string;
}

export const categories = {
  "design-system": {
    fa: "دیزاین سیستم",
    en: "Design System",
    ar: "نظام التصميم",
  },
  research: {
    fa: "پژوهش کاربر",
    en: "User Research",
    ar: "أبحاث المستخدم",
  },
  process: {
    fa: "فرآیند طراحی",
    en: "Design Process",
    ar: "عملية التصميم",
  },
  ux: {
    fa: "تجربه کاربری",
    en: "UX",
    ar: "تجربة المستخدم",
  },
};

export const posts: Post[] = [
  {
    slug: "design-system-small-teams",
    title: {
      fa: "چطور دیزاین سیستم رو در تیم‌های کوچک پیاده کنیم",
      en: "How to implement a design system in small teams",
      ar: "كيفية تطبيق نظام التصميم في الفرق الصغيرة",
    },
    excerpt: {
      fa: "دیزاین سیستم فقط برای شرکت‌های بزرگ نیست. با چند قدم ساده می‌تونید توی تیم کوچیک هم شروع کنید.",
      en: "Design systems aren't just for big companies. With a few simple steps, you can start in a small team too.",
      ar: "أنظمة التصميم ليست فقط للشركات الكبيرة. بخطوات بسيطة، يمكنك البدء في فريق صغير أيضًا.",
    },
    content: {
      fa: `دیزاین سیستم یه مفهوم ترسناک به نظر میاد — انگار فقط شرکت‌های بزرگ مثل Google و Airbnb می‌تونن ازش استفاده کنن. ولی حقیقت اینه که تیم‌های کوچیک بیشترین سود رو ازش می‌برن.

## چرا دیزاین سیستم؟

وقتی تیم کوچیکی، هر دقیقه اهمیت داره. اگه هر بار بخوای یه دکمه جدید طراحی کنی، وقتت تلف می‌شه. دیزاین سیستم این مشکل رو حل می‌کنه.

## از کجا شروع کنیم؟

**۱. کامپوننت‌های پایه رو بساز.** دکمه، input، card. فقط همین سه تا.

**۲. توکن‌ها رو تعریف کن.** رنگ، فونت، فاصله. همه چیز توی یه فایل.

**۳. مستندات بنویس.** حتی اگه یه فایل Markdown ساده باشه.

**۴. کم‌کم رشد بده.** لازم نیست همه چیز رو یهو بسازی. هر وقت نیاز شد، اضافه کن.

## نتیجه

بعد از ۳ ماه، تیم ما ۴۰٪ سریع‌تر شد. فقط با یه دیزاین سیستم ساده.`,
      en: `Design systems can seem intimidating — as if only big companies like Google and Airbnb can use them. But the truth is that small teams benefit the most from them.

## Why a design system?

When you're a small team, every minute counts. If you redesign a button every time, you're wasting time. A design system solves this problem.

## Where to start?

**1. Build base components.** Button, input, card. Just these three.

**2. Define tokens.** Color, font, spacing. All in one file.

**3. Write documentation.** Even if it's just a simple Markdown file.

**4. Grow it gradually.** You don't have to build everything at once. Add when needed.

## The result

After 3 months, our team became 40% faster. Just with a simple design system.`,
      ar: `قد تبدو أنظمة التصميم مخيفة — كما لو أن الشركات الكبيرة فقط مثل Google و Airbnb يمكنها استخدامها. لكن الحقيقة هي أن الفرق الصغيرة تستفيد منها أكثر.

## لماذا نظام التصميم؟

عندما تكون فريقًا صغيرًا، كل دقيقة مهمة. إذا أعدت تصميم زر في كل مرة، فأنت تضيع الوقت.

## من أين نبدأ؟

**١. بناء المكونات الأساسية.** زر، إدخال، بطاقة. فقط هذه الثلاثة.

**٢. تعريف الرموز.** اللون، الخط، التباعد. كل شيء في ملف واحد.

**٣. كتابة التوثيق.** حتى لو كان ملف Markdown بسيطًا.

**٤. نمّه تدريجيًا.** لست مضطرًا لبناء كل شيء دفعة واحدة.

## النتيجة

بعد 3 أشهر، أصبح فريقنا أسرع بنسبة 40٪.`,
    },
    category: "design-system",
    tags: ["design-system", "team", "workflow"],
    author: { name: "Amir Hesam Khalouei", initial: "ا" },
    date: "2024-11-05",
    readTime: 7,
    coverColor: "from-blue-500/20 to-cyan-500/20",
    coverAccent: "#3B82F6",
  },
  {
    slug: "user-research-mistakes",
    title: {
      fa: "۵ اشتباه رایج در پژوهش کاربر",
      en: "5 common mistakes in user research",
      ar: "٥ أخطاء شائعة في أبحاث المستخدم",
    },
    excerpt: {
      fa: "پژوهش کاربر اگه درست انجام نشه، می‌تونه گمراه‌کننده باشه. این ۵ اشتباه رو بشناسید.",
      en: "User research can be misleading if not done right. Learn these 5 mistakes.",
      ar: "قد تكون أبحاث المستخدم مضللة إذا لم تتم بشكل صحيح. تعرف على هذه الأخطاء الخمسة.",
    },
    content: {
      fa: `پژوهش کاربر یکی از مهم‌ترین بخش‌های طراحی محصوله. ولی اگه اشتباه انجام بشه، می‌تونه بدتر از نبودنش باشه.

## ۱. سوالات جهت‌دار

نگو «آیا این طراحی رو دوست داری؟» بگو «این طراحی رو چطور ارزیابی می‌کنی؟»

## ۲. نمونه‌ی اشتباه

اگه فقط با کاربرای فعلی حرف بزنی، هیچ‌وقت نمی‌فهمی چرا کاربرای قبلی رفته‌ن.

## ۳. تعمیم بیش از حد

۵ مصاحبه کافی نیست برای نتیجه‌گیری درباره میلیون‌ها کاربر.

## ۴. نادیده گرفتن context

کاربر توی آزمایشگاه با کاربر توی خیابون فرق داره.

## ۵. عدم پیگیری

اگه یافته‌ها رو به تصمیم تبدیل نکنی، پژوهش بی‌فایده‌ست.

## نتیجه

پژوهش کاربر ابزار قدرتمندیه، ولی فقط وقتی درست انجام بشه.`,
      en: `User research is one of the most important parts of product design. But done wrong, it can be worse than not doing it at all.

## 1. Leading questions

Don't say "Do you like this design?" Say "How would you evaluate this design?"

## 2. Wrong sample

If you only talk to current users, you'll never understand why previous users left.

## 3. Over-generalization

5 interviews aren't enough to conclude about millions of users.

## 4. Ignoring context

A user in a lab is different from a user on the street.

## 5. No follow-through

If you don't turn findings into decisions, research is useless.`,
      ar: `أبحاث المستخدم هي واحدة من أهم أجزاء تصميم المنتج. لكن إذا تمت بشكل خاطئ، فقد تكون أسوأ من عدم القيام بها.

## ١. أسئلة موجهة

لا تقل "هل تحب هذا التصميم؟" قل "كيف تقيم هذا التصميم؟"

## ٢. عينة خاطئة

إذا تحدثت فقط مع المستخدمين الحاليين، فلن تفهم أبدًا لماذا غادر المستخدمون السابقون.

## ٣. التعميم المفرط

٥ مقابلات لا تكفي للاستنتاج حول ملايين المستخدمين.

## ٤. تجاهل السياق

المستخدم في المختبر يختلف عن المستخدم في الشارع.

## ٥. عدم المتابعة

إذا لم تحول النتائج إلى قرارات، فالبحث عديم الفائدة.`,
    },
    category: "research",
    tags: ["research", "ux", "mistakes"],
    author: { name: "Amir Hesam Khalouei", initial: "ا" },
    date: "2024-10-28",
    readTime: 5,
    coverColor: "from-purple-500/20 to-pink-500/20",
    coverAccent: "#8B5CF6",
  },
  {
    slug: "wireframe-to-highfidelity",
    title: {
      fa: "از وایرفریم تا High-Fidelity: یه راهنمای کامل",
      en: "From wireframe to high-fidelity: a complete guide",
      ar: "من الإطار السلكي إلى الدقة العالية: دليل كامل",
    },
    excerpt: {
      fa: "فرایند طراحی از ایده تا محصول نهایی چطوریه؟ توی این مقاله قدم به قدم توضیح دادیم.",
      en: "How does the design process go from idea to final product? We explain step by step.",
      ar: "كيف تسير عملية التصميم من الفكرة إلى المنتج النهائي؟ نشرح خطوة بخطوة.",
    },
    content: {
      fa: `فرایند طراحی محصول یه مسیر خطی نیست — بیشتر شبیه یه مارپیچ از iteration هست.

## مرحله ۱: اسکچ

با کاغذ و مداد شروع کن. سریع، ارزون، و آزاد.

## مرحله ۲: وایرفریم

ساختار رو مشخص کن. بدون رنگ، بدون جزئیات.

## مرحله ۳: پروتوتایپ

تعامل رو تست کن. کلیک‌ها، ترنزیشن‌ها.

## مرحله ۴: High-Fidelity

حالا رنگ، فونت، و همه جزئیات.

## مرحله ۵: تست

با کاربر واقعی تست کن. iterate کن.

## نکته کلیدی

هیچ‌وقت از مرحله ۱ مستقیم به مرحله ۴ نرو. وقتت تلف می‌شه.`,
      en: `The product design process isn't a linear path — it's more like a spiral of iterations.

## Stage 1: Sketch

Start with paper and pencil. Fast, cheap, and free.

## Stage 2: Wireframe

Define structure. No color, no details.

## Stage 3: Prototype

Test interactions. Clicks, transitions.

## Stage 4: High-Fidelity

Now colors, fonts, and all details.

## Stage 5: Test

Test with real users. Iterate.

## Key point

Never go from stage 1 directly to stage 4. You'll waste time.`,
      ar: `عملية تصميم المنتج ليست مسارًا خطيًا — إنها أشبه بحلزون من التكرارات.

## المرحلة ١: الرسم

ابدأ بالورق والقلم. سريع ورخيص ومجاني.

## المرحلة ٢: الإطار السلكي

حدد البنية. بدون ألوان، بدون تفاصيل.

## المرحلة ٣: النموذج الأولي

اختبر التفاعلات. النقرات والانتقالات.

## المرحلة ٤: الدقة العالية

الآن الألوان والخطوط وجميع التفاصيل.

## المرحلة ٥: الاختبار

اختبر مع مستخدمين حقيقيين. كرر.

## نقطة أساسية

لا تنتقل أبدًا من المرحلة ١ مباشرة إلى المرحلة ٤.`,
    },
    category: "process",
    tags: ["process", "wireframe", "prototype"],
    author: { name: "Amir Hesam Khalouei", initial: "ا" },
    date: "2024-10-20",
    readTime: 10,
    coverColor: "from-emerald-500/20 to-teal-500/20",
    coverAccent: "#10B981",
  },
  {
    slug: "b2b-ux-differences",
    title: {
      fa: "تفاوت‌های UX در محصولات B2B و B2C",
      en: "UX differences in B2B vs B2C products",
      ar: "اختلافات UX في منتجات B2B و B2C",
    },
    excerpt: {
      fa: "کاربر B2B با B2C فرق داره. روش‌های طراحی هم باید متفاوت باشن.",
      en: "B2B users differ from B2C. Design methods must differ too.",
      ar: "يختلف مستخدمو B2B عن B2C. يجب أن تختلف طرق التصميم أيضًا.",
    },
    content: {
      fa: `یه اشتباه رایج: طراحا فکر می‌کنن UX برای B2B و B2C یکیه. ولی نیست.

## تفاوت ۱: تعداد کاربر

B2C: میلیون‌ها کاربر. B2B: چند صد کاربر ولی هر کدوم ارزش چند میلیون داره.

## تفاوت ۲: پیچیدگی

B2B معمولاً پیچیده‌تره. workflow، نقش‌ها، دسترسی‌ها.

## تفاوت ۳: معیار موفقیت

B2C: engagement. B2B: efficiency و ROI.

## تفاوت ۴: تصمیم‌گیرنده

توی B2B، کاربر ≠ خریدار.

## نکته

طراحی B2B سخت‌تره ولی چالش‌هاش جذاب‌ترن.`,
      en: `A common mistake: designers think UX for B2B and B2C is the same. It's not.

## Difference 1: User count

B2C: millions of users. B2B: hundreds, but each worth millions.

## Difference 2: Complexity

B2B is usually more complex. Workflows, roles, permissions.

## Difference 3: Success metric

B2C: engagement. B2B: efficiency and ROI.

## Difference 4: Decision maker

In B2B, the user ≠ the buyer.

## Note

B2B design is harder but its challenges are more interesting.`,
      ar: `خطأ شائع: يعتقد المصممون أن UX لـ B2B و B2C هو نفسه. ليس كذلك.

## الفرق ١: عدد المستخدمين

B2C: ملايين المستخدمين. B2B: مئات، لكن كل واحد يستحق الملايين.

## الفرق ٢: التعقيد

عادةً ما يكون B2B أكثر تعقيدًا. سير العمل، الأدوار، الأذونات.

## الفرق ٣: مقياس النجاح

B2C: المشاركة. B2B: الكفاءة والعائد على الاستثمار.

## الفرق ٤: صانع القرار

في B2B، المستخدم ≠ المشتري.`,
    },
    category: "ux",
    tags: ["ux", "b2b", "strategy"],
    author: { name: "Amir Hesam Khalouei", initial: "ا" },
    date: "2024-10-12",
    readTime: 6,
    coverColor: "from-orange-500/20 to-red-500/20",
    coverAccent: "#FF6B35",
  },
  {
    slug: "design-tokens-guide",
    title: {
      fa: "راهنمای کامل Design Tokens",
      en: "The complete guide to Design Tokens",
      ar: "الدليل الكامل لرموز التصميم",
    },
    excerpt: {
      fa: "Design Tokens چیه و چرا برای هر دیزاین سیستمی ضروریه؟",
      en: "What are Design Tokens and why are they essential for any design system?",
      ar: "ما هي رموز التصميم ولماذا هي ضرورية لأي نظام تصميم؟",
    },
    content: {
      fa: `Design Tokens کوچک‌ترین واحد تصمیم‌های طراحی هستن — رنگ، فاصله، فونت.

## چرا مهمن؟

چون یه زبون مشترک بین طراحی و کد می‌سازن. یه بار تعریف می‌کنی، همه‌جا استفاده می‌شه.

## ساختار

\`\`\`css
--color-primary: #FF6B35;
--spacing-md: 16px;
--font-size-lg: 20px;
\`\`\`

## نتیجه

تغییر یه توکن = تغییر کل سیستم. بدون کد زدن، بدون خطا.`,
      en: `Design Tokens are the smallest units of design decisions — color, spacing, font.

## Why they matter?

They create a shared language between design and code. Define once, use everywhere.

## Structure

\`\`\`css
--color-primary: #FF6B35;
--spacing-md: 16px;
--font-size-lg: 20px;
\`\`\`

## Result

Change one token = change the entire system. No coding, no errors.`,
      ar: `رموز التصميم هي أصغر وحدات قرارات التصميم — اللون، التباعد، الخط.

## لماذا هي مهمة؟

تنشئ لغة مشتركة بين التصميم والكود. عرّف مرة واحدة، استخدم في كل مكان.

## الهيكل

\`\`\`css
--color-primary: #FF6B35;
--spacing-md: 16px;
--font-size-lg: 20px;
\`\`\`

## النتيجة

تغيير رمز واحد = تغيير النظام بأكمله.`,
    },
    category: "design-system",
    tags: ["design-tokens", "design-system", "css"],
    author: { name: "Amir Hesam Khalouei", initial: "ا" },
    date: "2024-10-05",
    readTime: 8,
    coverColor: "from-indigo-500/20 to-blue-500/20",
    coverAccent: "#6366F1",
  },
];

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}

export function getPostsByCategory(category: string): Post[] {
  return posts.filter((p) => p.category === category);
}

export function getPostsByTag(tag: string): Post[] {
  return posts.filter((p) => p.tags.includes(tag));
}