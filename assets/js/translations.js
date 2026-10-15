/*
 * translations.js — all bilingual content for Banglar Krrish.
 *
 * Three data sets live here:
 *   1. window.I18N      — UI and page text in English (en) and Bengali (bn).
 *   2. window.SITE_VIDEOS — the nine YouTube videos (IDs and verified metadata).
 *   3. window.SITE_PRESS  — the eight press articles (links and verified metadata).
 *
 * Navigation labels are NOT stored here on purpose: they are always English.
 * To edit wording, change the strings below; main.js reads them automatically.
 */

window.I18N = {
  en: {
    /* ---------- Shared ---------- */
    "skip.link": "Skip to main content",
    "lang.label": "Content language",
    "btn.explore": "Explore My Story",
    "btn.watchVideos": "Watch Videos",
    "btn.viewAll": "View all",
    "footer.desc": "The official personal-brand website of Mohammad Al Mamun, publicly known as Banglar Krrish. Based on independent media reports and the owner's own account, with links to sources.",
    "footer.disclaimer": "This is an independent personal-brand site. It is not affiliated with, endorsed by, or produced by the makers of the Krrish film franchise. YouTube, Meta and the news outlets named here have not verified this website.",
    "footer.navHeading": "Explore",
    "footer.contactHeading": "Contact",
    "footer.copyright": "© {year} Banglar Krrish. All rights reserved.",
    "footer.contactEmail": "Email",

    /* ---------- Home ---------- */
    "home.heroEyebrow": "Sirajganj, Bangladesh · Performer",
    "home.heroTitle": "A Story of Dreams, Courage & Determination",
    "home.heroIntro": "Meet Mohammad Al Mamun, the Bangladeshi performer known publicly as Banglar Krrish. Discover the story behind his superhero-inspired identity, dedication to physical performance, and journey from Sirajganj to wider public attention.",
    "home.heroNote": "The hero image is an AI-generated illustration of a fictional masked performer. It is not a photograph.",
    "home.introTitle": "Introduction to Banglar Krrish",
    "home.introBody": "Banglar Krrish is the public name used for Mohammad Al Mamun, who works as a pipe-fitting worker in Sirajganj. Inspired by the fictional superhero Krrish, he began sharing stunt and parkour videos on social media. Several news outlets reported on his story in October 2026.",
    "home.highlightsTitle": "Biography highlights",
    "home.hl1.label": "Home area (as reported)",
    "home.hl1.value": "Banbaria (Paikpara), Sirajganj Sadar",
    "home.hl2.label": "Work (as reported)",
    "home.hl2.value": "Pipe-fitting and stainless-steel / iron fabrication",
    "home.hl3.label": "Practice (as reported)",
    "home.hl3.value": "Around 8–10 years of training, though reports vary",
    "home.hl4.label": "Inspiration",
    "home.hl4.value": "The fictional superhero Krrish",
    "home.timelineTitle": "Personal journey timeline",
    "home.tl1.when": "Childhood",
    "home.tl1.text": "Grew up watching Krrish films and developing an interest in fitness, somersaults and acrobatics.",
    "home.tl2.when": "Early practice",
    "home.tl2.text": "Practised stunts in ordinary clothes and taught himself from online videos. Early posts drew little response.",
    "home.tl3.when": "The costume",
    "home.tl3.text": "Adapted an old black burqa belonging to his sister into a costume and mask inspired by Krrish.",
    "home.tl4.when": "Going viral",
    "home.tl4.text": "Videos spread on Facebook and YouTube, and many people began calling him 'Banglar Krrish'.",
    "home.tl5.when": "October 2026",
    "home.tl5.text": "Multiple news outlets published reports on his story between 8 and 15 October 2026.",
    "home.videosTitle": "Featured videos",
    "home.videosBody": "Public YouTube videos about Banglar Krrish. Each one plays on this site. The channels named are the original publishers.",
    "home.pressTitle": "Independent press coverage",
    "home.pressBody": "Reports from independent outlets. Each link goes to the original article.",
    "home.galleryTitle": "AI-generated illustrative gallery",
    "home.galleryBody": "Illustrations made with AI and inspired by parkour and superhero themes. They are not photographs of Mohammad Al Mamun and do not show any real event.",
    "home.socialTitle": "Official social-media links",
    "home.socialBody": "Official accounts appear here once they have been verified and added to the site configuration.",
    "home.contactTitle": "Contact & collaboration",
    "home.contactBody": "For interviews, collaborations or media enquiries, use the contact form.",

    /* ---------- About / Biography ---------- */
    "about.title": "Biography",
    "about.lead": "The story of Mohammad Al Mamun, known as Banglar Krrish. It is based on public media reports and his own statements, with links to each source.",
    "about.note": "Details are reported information unless stated otherwise. Where sources differ, we say so. No awards, qualifications or affiliations are claimed.",
    "about.s1.title": "Early background",
    "about.s1.body": "Mohammad Al Mamun is from Banbaria (Paikpara) village in Sirajganj Sadar upazila, Bangladesh. Reports describe a long-standing interest in fitness, somersaults and acrobatics. He is reported to have taught himself from online videos, without a formal academy or professional trainer.",
    "about.s2.title": "Everyday work",
    "about.s2.body": "Reports describe him as a pipe-fitting worker who also works with stainless steel and iron. His stunt practice happens around his working hours, and he is reported to practise before or after work. His job is how he supports himself; the stunts are a personal passion.",
    "about.s3.title": "Inspiration and costume creation",
    "about.s3.body": "Inspired by the fictional Bollywood superhero Krrish, he first posted stunt videos in ordinary clothes and received little response. Reports say he could not afford a costume, so he adapted an old black burqa belonging to his elder sister into a black costume and mask. This detail comes from media reports and his own account.",
    "about.s4.title": "Physical practice and performance",
    "about.s4.body": "Reports describe about eight to ten years of training and parkour practice. Some interviews give different figures, such as six to seven years. His videos show jumps, somersaults and leaps in public places. He has also said he has been injured while practising. These stunts are dangerous, and we do not encourage anyone to copy them.",
    "about.s5.title": "Public attention and media coverage",
    "about.s5.body": "His videos spread on Facebook and YouTube, and several outlets covered his story in October 2026. He has said he hopes to find opportunities in film and to represent Bangladesh through his stunts. The sources below are independent reports.",
    "about.readSource": "Read the original report",
    "about.sourcesTitle": "Sources",
    "about.imgCaption": "AI-generated illustration of a fictional masked performer. Not a photograph of Mohammad Al Mamun.",
    "about.importantTitle": "A note on the name",
    "about.importantBody": "'Krrish' is a fictional character from a Bollywood film franchise. The name 'Banglar Krrish' is a public nickname used in media coverage. This website is not connected to the film's producers.",

    /* ---------- Videos ---------- */
    "videos.title": "Videos",
    "videos.lead": "All nine YouTube videos play here on this site. Choose a video to start its player.",
    "videos.note": "Titles are the original YouTube titles. Channel names and upload dates come from YouTube.",
    "card.play": "Play video",
    "card.playing": "Now playing",
    "card.uploaded": "Uploaded",
    "card.channel": "Channel",
    "card.category": "Category",
    "card.watchOn": "Watch on YouTube (opens a new tab)",
    "card.blockedTitle": "This video cannot play on this site.",
    "card.blockedBody": "The video owner may have restricted embedding. You can still watch it directly on YouTube.",
    "card.playerHint": "If the player does not start, use the YouTube link.",
    "card.fallbackNote": "Artwork shown while the video thumbnail is unavailable.",
    "videos.noscript": "Videos need JavaScript to play on this page. You can also watch them directly on YouTube.",

    /* ---------- Press & Media ---------- */
    "media.title": "Press & Media",
    "media.lead": "Independent coverage of Banglar Krrish from Bangladeshi and Indian outlets. Each card links to the original article. The summaries are our own short descriptions, not copies of the articles.",
    "media.disclaimer": "Inclusion here does not mean an outlet endorses this website. Decorative artwork on the cards is not a press photograph.",
    "press.published": "Published",
    "press.dateUnverified": "Date not verified",
    "press.titleUnverified": "Article title not verified. Please open the original link.",
    "press.readOriginal": "Read original article",
    "press.decorative": "Decorative artwork",

    /* ---------- Gallery ---------- */
    "gallery.title": "Gallery",
    "gallery.lead": "AI-generated illustrations inspired by parkour, superhero silhouettes, costume design and urban Bangladesh. They are fictional artwork, not photographs of Mohammad Al Mamun or of any real event.",
    "gallery.tag": "Illustration",
    "gallery.g1.caption": "Vaulting a wall on a city street",
    "gallery.g2.caption": "Balance on a riverside railing",
    "gallery.g3.caption": "Rooftop silhouette at dawn",
    "gallery.g4.caption": "Costume design study",
    "gallery.g5.caption": "Narrow lane in mid-stride",
    "gallery.g6.caption": "Portrait of a fictional masked performer",
    "lightbox.close": "Close image viewer",
    "lightbox.prev": "Previous image",
    "lightbox.next": "Next image",
    "lightbox.open": "Open image",

    /* ---------- Contact ---------- */
    "contact.title": "Contact",
    "contact.lead": "Send an enquiry about interviews, collaborations or media. Your message opens in your email app, addressed to the official contact email.",
    "contact.noticeTitle": "How this form works",
    "contact.noticeBody": "This site is hosted on GitHub Pages, which cannot receive form submissions. Pressing the button opens your email app with the message ready. Nothing is sent until you press send in your email app. You need an email app or webmail set up on your device.",
    "form.name": "Full name",
    "form.email": "Email address",
    "form.subject": "Subject",
    "form.message": "Message",
    "form.placeholder.name": "Your full name",
    "form.placeholder.email": "you@example.com",
    "form.placeholder.subject": "What is your enquiry about?",
    "form.placeholder.message": "Write your message here",
    "form.submit": "Open in email app",
    "form.recipient": "Recipient",
    "err.name": "Please enter your full name (at least 2 characters).",
    "err.email": "Please enter a valid email address.",
    "err.subject": "Please enter a subject (at least 3 characters).",
    "err.message": "Please enter a message (at least 10 characters).",
    "form.checkFields": "Please check the highlighted fields.",
    "form.opened": "Your email app should open with the message filled in. Review it and press send there. This page cannot confirm whether the message was sent.",
    "form.notOpened": "If your email app did not open, use the options below to copy the address or message.",
    "form.fallbackTitle": "Email app did not open?",
    "form.copyEmail": "Copy email address",
    "form.copyMessage": "Copy message",
    "form.copied": "Copied to clipboard.",
    "form.copyFailed": "Copying is not available here. Please select the text and copy it manually.",
    "form.sanitizedNote": "Some characters were removed from your input for safety.",

    /* ---------- Page meta (title + description) ---------- */
    "meta.home.title": "Banglar Krrish | Mohammad Al Mamun — Official Personal Brand Website",
    "meta.home.desc": "Official personal-brand website of Mohammad Al Mamun, known as Banglar Krrish, from Sirajganj, Bangladesh. Biography, videos, press coverage and gallery.",
    "meta.about.title": "Biography | Banglar Krrish — Mohammad Al Mamun",
    "meta.about.desc": "The biography of Mohammad Al Mamun (Banglar Krrish) from Sirajganj, Bangladesh, based on independent media reports with source links.",
    "meta.videos.title": "Videos | Banglar Krrish",
    "meta.videos.desc": "Watch all nine Banglar Krrish YouTube videos directly on this website.",
    "meta.media.title": "Press & Media | Banglar Krrish",
    "meta.media.desc": "Independent press coverage of Banglar Krrish from eight Bangladeshi and Indian outlets, with links to the original articles.",
    "meta.gallery.title": "Gallery | Banglar Krrish",
    "meta.gallery.desc": "AI-generated illustrative artwork inspired by parkour and superhero themes. Not photographs of any real person or event.",
    "meta.contact.title": "Contact | Banglar Krrish",
    "meta.contact.desc": "Contact Banglar Krrish for interviews, collaborations and media enquiries.",
    "meta.privacy.title": "Privacy Policy | Banglar Krrish",
    "meta.privacy.desc": "Privacy Policy for the Banglar Krrish website, including embedded YouTube content and the contact form.",
    "meta.terms.title": "Terms of Use | Banglar Krrish",
    "meta.terms.desc": "Terms of Use for the Banglar Krrish website."
  },

  bn: {
    "skip.link": "মূল বিষয়বস্তুতে যান",
    "lang.label": "বিষয়বস্তুর ভাষা",
    "btn.explore": "আমার গল্প জানুন",
    "btn.watchVideos": "ভিডিও দেখুন",
    "btn.viewAll": "সব দেখুন",
    "footer.desc": "মোহাম্মদ আল মামুনের অফিসিয়াল ব্যক্তিগত ব্র্যান্ড ওয়েবসাইট; সামাজিক যোগাযোগমাধ্যমে যিনি ‘বাংলার কৃষ’ নামে পরিচিত। স্বাধীন গণমাধ্যমের প্রতিবেদন ও তাঁর নিজের বক্তব্যের ভিত্তিতে তৈরি, উৎসের লিংকসহ।",
    "footer.disclaimer": "এটি একটি স্বাধীন ব্যক্তিগত ব্র্যান্ড ওয়েবসাইট। ‘কৃষ’ চলচ্চিত্র-ফ্র্যাঞ্চাইজির নির্মাতাদের সঙ্গে এর কোনো সম্পর্ক নেই, তাঁরা এটি অনুমোদন বা প্রযোজনা করেননি। ইউটিউব, মেটা বা এখানে উল্লিখিত গণমাধ্যমগুলো এই ওয়েবসাইট যাচাই করেনি।",
    "footer.navHeading": "এক্সপ্লোর করুন",
    "footer.contactHeading": "যোগাযোগ",
    "footer.copyright": "© {year} বাংলার কৃষ। সর্বস্বত্ব সংরক্ষিত।",
    "footer.contactEmail": "ইমেইল",

    "home.heroEyebrow": "সিরাজগঞ্জ, বাংলাদেশ · পারফর্মার",
    "home.heroTitle": "স্বপ্ন, সাহস ও অধ্যবসায়ের গল্প",
    "home.heroIntro": "মোহাম্মদ আল মামুন—সামাজিক যোগাযোগমাধ্যমে বাংলার কৃষ নামে পরিচিত একজন বাংলাদেশি পারফর্মার। তাঁর সুপারহিরো-অনুপ্রাণিত পরিচয়, শারীরিক কসরতের প্রতি অনুরাগ এবং সিরাজগঞ্জ থেকে শুরু হওয়া পথচলার গল্প জানুন।",
    "home.heroNote": "প্রচ্ছদের ছবিটি একটি কাল্পনিক মুখোশধারী চরিত্রের এআই-নির্মিত চিত্রণ, কোনো আলোকচিত্র নয়।",
    "home.introTitle": "বাংলার কৃষ-এর পরিচয়",
    "home.introBody": "‘বাংলার কৃষ’ মোহাম্মদ আল মামুনের জনপ্রিয় নাম। সিরাজগঞ্জে তিনি পাইপ ফিটিংসের কাজ করেন। কাল্পনিক সুপারহিরো ‘কৃষ’-এর আদর্শে অনুপ্রাণিত হয়ে তিনি সামাজিক যোগাযোগমাধ্যমে স্টান্ট ও পার্কুরের ভিডিও শেয়ার করতে শুরু করেন। ২০২৬ সালের অক্টোবরে একাধিক গণমাধ্যম তাঁর গল্প প্রকাশ করে।",
    "home.highlightsTitle": "জীবনী এক নজরে",
    "home.hl1.label": "নিবাস (প্রতিবেদন অনুযায়ী)",
    "home.hl1.value": "বনবাড়িয়া (পাইকপাড়া), সিরাজগঞ্জ সদর",
    "home.hl2.label": "পেশা (প্রতিবেদন অনুযায়ী)",
    "home.hl2.value": "পাইপ ফিটিংস ও স্টেইনলেস স্টিল / লোহার কাজ",
    "home.hl3.label": "অনুশীলন (প্রতিবেদন অনুযায়ী)",
    "home.hl3.value": "প্রায় ৮–১০ বছর, তবে প্রতিবেদনে ভিন্ন তথ্য আছে",
    "home.hl4.label": "অনুপ্রেরণা",
    "home.hl4.value": "কাল্পনিক সুপারহিরো ‘কৃষ’",
    "home.timelineTitle": "ব্যক্তিগত পথচলার সময়রেখা",
    "home.tl1.when": "শৈশব",
    "home.tl1.text": "‘কৃষ’ চলচ্চিত্র দেখে বড় হয়েছেন, শরীরচর্চা, ডিগবাজি ও কসরতের প্রতি আগ্রহ জন্মেছে।",
    "home.tl2.when": "প্রাথমিক অনুশীলন",
    "home.tl2.text": "সাধারণ পোশাকে স্টান্ট অনুশীলন করেছেন এবং অনলাইন ভিডিও দেখে নিজে শিখেছেন। প্রথম দিকের পোস্টে তেমন সাড়া মেলেনি।",
    "home.tl3.when": "পোশাক তৈরি",
    "home.tl3.text": "বড় বোনের একটি পুরোনো কালো বোরকা কেটে কৃষের আদলে পোশাক ও মুখোশ তৈরি করেন।",
    "home.tl4.when": "ভাইরাল হওয়া",
    "home.tl4.text": "ফেসবুক ও ইউটিউবে ভিডিও ছড়িয়ে পড়ে, অনেকে তাঁকে ‘বাংলার কৃষ’ নামে ডাকতে শুরু করেন।",
    "home.tl5.when": "অক্টোবর ২০২৬",
    "home.tl5.text": "৮ থেকে ১৫ অক্টোবর ২০২৬-এর মধ্যে একাধিক গণমাধ্যম তাঁর গল্প নিয়ে প্রতিবেদন প্রকাশ করে।",
    "home.videosTitle": "নির্বাচিত ভিডিও",
    "home.videosBody": "‘বাংলার কৃষ’ নিয়ে ইউটিউবের সর্বজনীন ভিডিও। প্রতিটি ভিডিও এই ওয়েবসাইটেই চলে। উল্লিখিত চ্যানেলগুলো মূল প্রকাশক।",
    "home.pressTitle": "স্বাধীন সংবাদমাধ্যমের প্রতিবেদন",
    "home.pressBody": "স্বাধীন গণমাধ্যমের প্রতিবেদন। প্রতিটি লিংক মূল প্রতিবেদনে নিয়ে যায়।",
    "home.galleryTitle": "এআই-নির্মিত চিত্রণ গ্যালারি",
    "home.galleryBody": "এআই দিয়ে তৈরি চিত্রণ, পার্কুর ও সুপারহিরো ভাবনায় অনুপ্রাণিত। এগুলো মোহাম্মদ আল মামুনের আলোকচিত্র নয় এবং কোনো বাস্তব ঘটনা দেখায় না।",
    "home.socialTitle": "অফিসিয়াল সোশ্যাল মিডিয়া লিংক",
    "home.socialBody": "যাচাই করে ওয়েবসাইট কনফিগারেশনে যোগ করা হলে অফিসিয়াল অ্যাকাউন্টগুলো এখানে দেখা যাবে।",
    "home.contactTitle": "যোগাযোগ ও সহযোগিতা",
    "home.contactBody": "সাক্ষাৎকার, সহযোগিতা বা গণমাধ্যম সংক্রান্ত অনুসন্ধানের জন্য যোগাযোগ ফর্ম ব্যবহার করুন।",

    "about.title": "জীবনী",
    "about.lead": "‘বাংলার কৃষ’ নামে পরিচিত মোহাম্মদ আল মামুনের গল্প। এটি গণমাধ্যমের প্রকাশিত প্রতিবেদন ও তাঁর নিজের বক্তব্যের ভিত্তিতে, প্রতিটি উৎসের লিংকসহ।",
    "about.note": "অন্য উল্লেখ না থাকলে সব তথ্যই প্রতিবেদন অনুযায়ী। উৎসের মধ্যে ভিন্নতা থাকলে তা উল্লেখ করা হয়েছে। কোনো পুরস্কার, যোগ্যতা বা প্রতিষ্ঠানিক সংযুক্তির দাবি করা হচ্ছে না।",
    "about.s1.title": "প্রাথমিক পরিচয়",
    "about.s1.body": "মোহাম্মদ আল মামুন সিরাজগঞ্জ সদর উপজেলার বনবাড়িয়া (পাইকপাড়া) গ্রামের বাসিন্দা। প্রতিবেদন অনুযায়ী, শরীরচর্চা, ডিগবাজি ও কসরতের প্রতি তাঁর দীর্ঘদিনের আগ্রহ আছে। কোনো প্রাতিষ্ঠানিক একাডেমি বা পেশাদার প্রশিক্ষক ছাড়া তিনি অনলাইন ভিডিও দেখে নিজে শিখেছেন বলে জানা যায়।",
    "about.s2.title": "দৈনন্দিন কাজ",
    "about.s2.body": "প্রতিবেদনে তাঁকে একজন পাইপ ফিটিংস শ্রমিক হিসেবে বর্ণনা করা হয়েছে, যিনি স্টেইনলেস স্টিল ও লোহার কাজও করেন। কাজের সময়ের বাইরে ও কাজের আগে-পরে তিনি অনুশীলন করেন। কাজ থেকেই তাঁর জীবিকা চলে; স্টান্ট তাঁর ব্যক্তিগত আগ্রহ।",
    "about.s3.title": "অনুপ্রেরণা ও পোশাক তৈরি",
    "about.s3.body": "বলিউডের কাল্পনিক সুপারহিরো ‘কৃষ’-এর আদর্শে অনুপ্রাণিত হয়ে তিনি প্রথমে সাধারণ পোশাকে স্টান্টের ভিডিও দেন, কিন্তু তেমন সাড়া পাননি। প্রতিবেদন অনুযায়ী, পোশাক কেনার সামর্থ্য না থাকায় তিনি বড় বোনের একটি পুরোনো কালো বোরকা কেটে-সেলাই করে কালো পোশাক ও মুখোশ বানান। এই তথ্য গণমাধ্যমের প্রতিবেদন ও তাঁর নিজের বক্তব্য থেকে নেওয়া।",
    "about.s4.title": "শারীরিক অনুশীলন ও পরিবেশনা",
    "about.s4.body": "প্রতিবেদনে প্রায় আট থেকে দশ বছরের অনুশীলন ও পার্কুর চর্চার কথা বলা হয়েছে, যদিও কোনো কোনো সাক্ষাৎকারে ছয়-সাত বছরের কথা আছে। তাঁর ভিডিওতে জনসমাগমের জায়গায় লাফ, ডিগবাজি ও শূন্যে কসরত দেখা যায়। তিনি অনুশীলনের সময় আহত হওয়ার কথাও বলেছেন। এসব স্টান্ট বিপজ্জনক; আমরা কাউকে এগুলো অনুকরণ করতে উৎসাহিত করি না।",
    "about.s5.title": "জনপ্রিয়তা ও গণমাধ্যম কভারেজ",
    "about.s5.body": "তাঁর ভিডিও ফেসবুক ও ইউটিউবে ছড়িয়ে পড়ে এবং ২০২৬ সালের অক্টোবরে একাধিক গণমাধ্যম তাঁর গল্প প্রচার করে। তিনি চলচ্চিত্রে কাজের সুযোগ পাওয়ার এবং স্টান্টের মাধ্যমে বাংলাদেশকে তুলে ধরার আশার কথা জানিয়েছেন। নিচের উৎসগুলো স্বাধীন প্রতিবেদন।",
    "about.readSource": "মূল প্রতিবেদনটি পড়ুন",
    "about.sourcesTitle": "উৎসসমূহ",
    "about.imgCaption": "একটি কাল্পনিক মুখোশধারী চরিত্রের এআই-নির্মিত চিত্রণ। মোহাম্মদ আল মামুনের আলোকচিত্র নয়।",
    "about.importantTitle": "নাম সম্পর্কে একটি নোট",
    "about.importantBody": "‘কৃষ’ একটি বলিউড চলচ্চিত্র-ফ্র্যাঞ্চাইজির কাল্পনিক চরিত্র। ‘বাংলার কৃষ’ গণমাধ্যমে ব্যবহৃত একটি জনপ্রিয় ডাকনাম। এই ওয়েবসাইট চলচ্চিত্রের প্রযোজকদের সঙ্গে যুক্ত নয়।",

    "videos.title": "ভিডিও",
    "videos.lead": "ইউটিউবের নয়টি ভিডিও এই ওয়েবসাইটেই চলে। যেকোনো ভিডিও বেছে নিয়ে প্লেয়ার চালু করুন।",
    "videos.note": "শিরোনামগুলো ইউটিউবের মূল শিরোনাম। চ্যানেলের নাম ও আপলোডের তারিখ ইউটিউব থেকে নেওয়া।",
    "card.play": "ভিডিও চালান",
    "card.playing": "চলছে",
    "card.uploaded": "আপলোড",
    "card.channel": "চ্যানেল",
    "card.category": "বিভাগ",
    "card.watchOn": "ইউটিউবে দেখুন (নতুন ট্যাব)",
    "card.blockedTitle": "এই ভিডিওটি এই ওয়েবসাইটে চালানো যাচ্ছে না।",
    "card.blockedBody": "ভিডিওর মালিক এমবেডিং সীমাবদ্ধ করে থাকতে পারেন। আপনি সরাসরি ইউটিউবে দেখতে পারবেন।",
    "card.playerHint": "প্লেয়ার শুরু না হলে ইউটিউব লিংক ব্যবহার করুন।",
    "card.fallbackNote": "থাম্বনেইল পাওয়া না গেলে দেখানো চিত্র।",
    "videos.noscript": "এই পাতায় ভিডিও চালাতে জাভাস্ক্রিপ্ট প্রয়োজন। আপনি সরাসরি ইউটিউবেও দেখতে পারেন।",

    "media.title": "সংবাদমাধ্যম",
    "media.lead": "বাংলাদেশি ও ভারতীয় স্বাধীন সংবাদমাধ্যমে ‘বাংলার কৃষ’-এর কভারেজ। প্রতিটি কার্ড মূল প্রতিবেদনে নিয়ে যায়। সারসংক্ষেপগুলো আমাদের নিজস্ব সংক্ষিপ্ত বর্ণনা, প্রতিবেদনের অনুলিপি নয়।",
    "media.disclaimer": "এখানে তালিকাভুক্ত থাকা মানে কোনো সংবাদমাধ্যম এই ওয়েবসাইটকে অনুমোদন করেছে তা নয়। কার্ডের সাজসজ্জার ছবি আলোকচিত্র নয়।",
    "press.published": "প্রকাশিত",
    "press.dateUnverified": "তারিখ যাচাই করা যায়নি",
    "press.titleUnverified": "প্রতিবেদনের শিরোনাম যাচাই করা যায়নি। মূল লিংকটি খুলুন।",
    "press.readOriginal": "মূল প্রতিবেদন পড়ুন",
    "press.decorative": "সাজসজ্জার চিত্র",

    "gallery.title": "গ্যালারি",
    "gallery.lead": "পার্কুর, সুপারহিরো-ছায়াচিত্র, পোশাক-নকশা ও বাংলাদেশের শহুরে পরিবেশ থেকে অনুপ্রাণিত এআই-নির্মিত চিত্রণ। এগুলো কাল্পনিক শিল্পকর্ম, মোহাম্মদ আল মামুনের বা কোনো বাস্তব ঘটনার আলোকচিত্র নয়।",
    "gallery.tag": "চিত্রণ",
    "gallery.g1.caption": "শহরের রাস্তায় একটি দেয়াল ডিঙানো",
    "gallery.g2.caption": "নদীর ধারের রেলিংয়ে ভারসাম্য",
    "gallery.g3.caption": "ভোরে ছাদের ছায়াচিত্র",
    "gallery.g4.caption": "পোশাক-নকশার একটি স্টাডি",
    "gallery.g5.caption": "সরু গলিতে দৌড়ের মুহূর্ত",
    "gallery.g6.caption": "একজন কাল্পনিক মুখোশধারী পারফর্মারের প্রতিকৃতি",
    "lightbox.close": "ছবি দেখা বন্ধ করুন",
    "lightbox.prev": "আগের ছবি",
    "lightbox.next": "পরের ছবি",
    "lightbox.open": "ছবি খুলুন",

    "contact.title": "যোগাযোগ",
    "contact.lead": "সাক্ষাৎকার, সহযোগিতা বা গণমাধ্যম সংক্রান্ত অনুসন্ধান পাঠান। আপনার বার্তা আপনার ইমেইল অ্যাপে খুলবে, অফিসিয়াল যোগাযোগ ইমেইলের উদ্দেশে।",
    "contact.noticeTitle": "এই ফর্ম কীভাবে কাজ করে",
    "contact.noticeBody": "এই সাইট GitHub Pages-এ হোস্ট করা, যেখানে ফর্ম জমা নেওয়া যায় না। বোতামে চাপলে আপনার ইমেইল অ্যাপ বার্তাসহ খুলবে। আপনি ইমেইল অ্যাপে ‘পাঠান’ না চাপা পর্যন্ত কিছুই পাঠানো হবে না। আপনার ডিভাইসে ইমেইল অ্যাপ বা ওয়েবমেইল সেট করা থাকা প্রয়োজন।",
    "form.name": "পূর্ণ নাম",
    "form.email": "ইমেইল ঠিকানা",
    "form.subject": "বিষয়",
    "form.message": "বার্তা",
    "form.placeholder.name": "আপনার পূর্ণ নাম",
    "form.placeholder.email": "you@example.com",
    "form.placeholder.subject": "আপনার অনুসন্ধান কী নিয়ে?",
    "form.placeholder.message": "এখানে আপনার বার্তা লিখুন",
    "form.submit": "ইমেইল অ্যাপে খুলুন",
    "form.recipient": "প্রাপক",
    "err.name": "অনুগ্রহ করে আপনার পূর্ণ নাম লিখুন (কমপক্ষে ২ অক্ষর)।",
    "err.email": "অনুগ্রহ করে একটি সঠিক ইমেইল ঠিকানা লিখুন।",
    "err.subject": "অনুগ্রহ করে বিষয় লিখুন (কমপক্ষে ৩ অক্ষর)।",
    "err.message": "অনুগ্রহ করে বার্তা লিখুন (কমপক্ষে ১০ অক্ষর)।",
    "form.checkFields": "অনুগ্রহ করে চিহ্নিত ঘরগুলো দেখুন।",
    "form.opened": "আপনার ইমেইল অ্যাপ এখন বার্তাসহ খোলার কথা। দেখে নিয়ে সেখানে ‘পাঠান’ চাপুন। এই পাতা নিশ্চিত করতে পারবে না বার্তাটি পাঠানো হয়েছে কি না।",
    "form.notOpened": "ইমেইল অ্যাপ না খুললে নিচের অপশন ব্যবহার করে ঠিকানা বা বার্তা কপি করুন।",
    "form.fallbackTitle": "ইমেইল অ্যাপ খোলেনি?",
    "form.copyEmail": "ইমেইল ঠিকানা কপি করুন",
    "form.copyMessage": "বার্তা কপি করুন",
    "form.copied": "ক্লিপবোর্ডে কপি হয়েছে।",
    "form.copyFailed": "এখানে কপি করার সুবিধা নেই। লেখাটি সিলেক্ট করে নিজে কপি করুন।",
    "form.sanitizedNote": "নিরাপত্তার জন্য আপনার ইনপুট থেকে কিছু অক্ষর সরানো হয়েছে।",

    "meta.home.title": "বাংলার কৃষ | মোহাম্মদ আল মামুন — অফিসিয়াল ব্যক্তিগত ব্র্যান্ড ওয়েবসাইট",
    "meta.home.desc": "সিরাজগঞ্জের মোহাম্মদ আল মামুনের অফিসিয়াল ব্যক্তিগত ব্র্যান্ড ওয়েবসাইট, যিনি ‘বাংলার কৃষ’ নামে পরিচিত। জীবনী, ভিডিও, সংবাদমাধ্যমের প্রতিবেদন ও গ্যালারি।",
    "meta.about.title": "জীবনী | বাংলার কৃষ — মোহাম্মদ আল মামুন",
    "meta.about.desc": "সিরাজগঞ্জের মোহাম্মদ আল মামুন (বাংলার কৃষ)-এর জীবনী, স্বাধীন গণমাধ্যমের প্রতিবেদন ও উৎসের লিংকসহ।",
    "meta.videos.title": "ভিডিও | বাংলার কৃষ",
    "meta.videos.desc": "বাংলার কৃষ-এর নয়টি ইউটিউব ভিডিও এই ওয়েবসাইটেই দেখুন।",
    "meta.media.title": "সংবাদমাধ্যম | বাংলার কৃষ",
    "meta.media.desc": "বাংলাদেশি ও ভারতীয় আটটি সংবাদমাধ্যমে বাংলার কৃষ-এর স্বাধীন কভারেজ, মূল প্রতিবেদনের লিংকসহ।",
    "meta.gallery.title": "গ্যালারি | বাংলার কৃষ",
    "meta.gallery.desc": "পার্কুর ও সুপারহিরো ভাবনায় অনুপ্রাণিত এআই-নির্মিত চিত্রণ। কোনো বাস্তব ব্যক্তি বা ঘটনার আলোকচিত্র নয়।",
    "meta.contact.title": "যোগাযোগ | বাংলার কৃষ",
    "meta.contact.desc": "সাক্ষাৎকার, সহযোগিতা ও গণমাধ্যম সংক্রান্ত অনুসন্ধানের জন্য বাংলার কৃষ-এর সঙ্গে যোগাযোগ করুন।",
    "meta.privacy.title": "গোপনীয়তা নীতি | বাংলার কৃষ",
    "meta.privacy.desc": "বাংলার কৃষ ওয়েবসাইটের গোপনীয়তা নীতি।",
    "meta.terms.title": "ব্যবহারের শর্তাবলী | বাংলার কৃষ",
    "meta.terms.desc": "বাংলার কৃষ ওয়েবসাইটের ব্যবহারের শর্তাবলী।"
  }
};

/*
 * Nine YouTube videos. Titles are the original YouTube titles as published
 * (verified on the YouTube watch pages). Channel and upload date come from
 * YouTube metadata. "category" is YouTube's own category label.
 * `fallback` picks one of the local AI-generated fallback thumbnails.
 */
window.SITE_VIDEOS = [
  {
    id: "7HwImROOLgg",
    title: "সিরাজগঞ্জে দেখা মিলল বাংলার ‘ক্রিশের’, শূন্যে উড়া দেখতে অসংখ্য মানুষের ভিড়!",
    channel: "ATN Bangla News",
    uploaded: "2026-10-09",
    category: "News & Politics",
    fallback: 1
  },
  {
    id: "Z6Kvx8KLvqo",
    title: "বলিউডের কৃষের আদলে স্টান্ট, ‘বাংলার কৃষ’ আল মামুন | Banglar Krrish | Inspired Stunts",
    channel: "SOMOY TV",
    uploaded: "2026-10-13",
    category: "News & Politics",
    fallback: 2
  },
  {
    id: "-mO7NF4juGQ",
    title: "সিনেমা নয় বাস্তবে সিরাজগঞ্জের রাস্তায় ঘুরে বেড়াচ্ছে বাংলার ক্রিশ! | Banglar Krrish | Sirajganj",
    channel: "Desh TV News",
    uploaded: "2026-10-08",
    category: "News & Politics",
    fallback: 3
  },
  {
    id: "p5e0mANr2CI",
    title: "বোনের বোরকা দিয়েই বাজিমাত, ট্রেনিং ছাড়াই অবিশ্বাস্য স্ট্যান্ডে শূন্যে উড়ছে বাংলার ‘ক্রিশ’!",
    channel: "Bangla TV",
    uploaded: "2026-10-07",
    category: "News & Politics",
    fallback: 1
  },
  {
    id: "tW3_FyKw1jY",
    title: "পাইপ ফিটিংস মিস্ত্রি মামুন এখন বাংলার ‘কৃষ’! | Krrish | NTV News",
    channel: "NTV News",
    uploaded: "2026-10-13",
    category: "News & Politics",
    fallback: 2
  },
  {
    id: "w_XSdpvw5zI",
    title: "‘কৃষ’! সিনেমার স্টান্টকে বাস্তবে দেখাচ্ছেন মামুন | Viral Stunts | Real Life Krrish",
    channel: "Kaler Kantho",
    uploaded: "2026-10-09",
    category: "News & Politics",
    fallback: 3
  },
  {
    id: "cszH5gcOobg",
    title: "ভয়াবহ স্ট্যান্ট করেন অনায়াশেই, মিস্ত্রি থেকে ‘বাংলার কৃষ’ হয়ে ওঠার গল্প | Krrish Mamun",
    channel: "Asia Post",
    uploaded: "2026-10-12",
    category: "News & Politics",
    fallback: 1
  },
  {
    id: "_8v_JdGpaiM",
    title: "বোনের বোরখা কেটে হলেন 'বাংলার ক্রিশ' | BANGLAR KRISH | Sirajganj | News",
    channel: "Jumma TV",
    uploaded: "2026-10-08",
    category: "News & Politics",
    fallback: 2
  },
  {
    id: "1dZQmiBSfR8",
    title: "কে এই বাংলার ক্রিশ? | Banglar Krrish Mask Man & Bike Stunt",
    channel: "News Line BD",
    uploaded: "2026-10-11",
    category: "News & Politics",
    fallback: 3
  }
];

/*
 * Press articles. Only verified details are shown:
 *  - title: the headline as published, or null if it could not be verified.
 *  - date:  ISO date from the article page, or null if not shown/verified.
 *  - summary: our own short description (bn and en).
 */
window.SITE_PRESS = [
  {
    publisher: { en: "Ei Samay", bn: "এই সময়" },
    url: "https://eisamay.com/bangladesh-news/sirajganj-dweller-mohammad-al-mamun-is-viral-for-making-video-as-krish/200555125.cms",
    title: null,
    date: null,
    summary: {
      en: "A report on a Sirajganj resident whose videos as 'Krish' went viral online.",
      bn: "সিরাজগঞ্জের একজন বাসিন্দার ‘কৃষ’ সাজের ভিডিও অনলাইনে ভাইরাল হওয়া নিয়ে প্রতিবেদন।"
    }
  },
  {
    publisher: { en: "RTV Online", bn: "আরটিভি অনলাইন" },
    url: "https://rtvonline.com/country/409437",
    title: "সামাজিক মাধ্যমে তোলপাড়, কে এই ‘বাংলার কৃষ’",
    date: "2026-10-13",
    summary: {
      en: "Profile of Mohammad Al Mamun, who works as a pipe-fitting worker and trains in stunts, and his costume made from an old burqa.",
      bn: "মোহাম্মদ আল মামুনের পরিচয়, যিনি পাইপ ফিটিংসের কাজ করেন এবং স্টান্টের অনুশীলন করেন, আর পুরোনো বোরকা দিয়ে তৈরি তাঁর পোশাকের কথা।"
    }
  },
  {
    publisher: { en: "Barta Bazar", bn: "বার্তা বাজার" },
    url: "https://bartabazar.com/news/366327/",
    title: "বোনের বোরকায় ‘বাংলার ক্রিশ’ স্বপ্ন চলচ্চিত্রে কাজ করার",
    date: "2026-10-14",
    summary: {
      en: "A Sirajganj correspondent's report on the costume, the stunts, and his hope to work in films.",
      bn: "সিরাজগঞ্জের প্রতিনিধির প্রতিবেদন: পোশাক, স্টান্ট এবং চলচ্চিত্রে কাজের স্বপ্নের কথা।"
    }
  },
  {
    publisher: { en: "Jugantor", bn: "যুগান্তর" },
    url: "https://www.jugantor.com/country-news/1168531",
    title: "দিনে পাইপ মিস্ত্রি, অবসরে সুপারহিরো—সিরাজগঞ্জের ‘বাংলার ক্রিশ’",
    date: "2026-10-13",
    summary: {
      en: "A day job as a pipe-fitting worker, a passion for stunts, and the local attention his videos brought.",
      bn: "দৈনন্দিন কাজ পাইপ ফিটিংসের, আর স্টান্টের প্রতি আগ্রহ, এবং তাঁর ভিডিও থেকে স্থানীয় পরিচিতি।"
    }
  },
  {
    publisher: { en: "Bangla Edition", bn: "বাংলা এডিশন" },
    url: "https://www.banglaedition.com/country/2026/10/15/272434",
    title: "স্টান্ট শিখতে গিয়ে আঘাতে জর্জরিত তবুও দমে যাননি ‘বাংলার কৃষ’!",
    date: "2026-10-15",
    summary: {
      en: "Focuses on the injuries and hardships he describes while learning stunts, and his larger ambitions.",
      bn: "স্টান্ট শিখতে গিয়ে তাঁর আঘাত ও প্রতিকূলতার কথা এবং বড় স্বপ্নের প্রসঙ্গ।"
    }
  },
  {
    publisher: { en: "Corporate Sangbad", bn: "কর্পোরেট সংবাদ" },
    url: "https://corporatesangbad.com/country-news/1003121/",
    title: "আল মামুনের কৃষ সেজে স্টান্টে মুগ্ধ দর্শক",
    date: "2026-10-08",
    summary: {
      en: "Describes the crowds and reactions around his stunts and his family's change of attitude over time.",
      bn: "তাঁর স্টান্ট ঘিরে দর্শকের প্রতিক্রিয়া এবং সময়ের সঙ্গে পরিবারের মনোভাব বদলানোর কথা।"
    }
  },
  {
    publisher: { en: "Sangbad Pratidin", bn: "সংবাদ প্রতিদিন" },
    url: "https://m.sangbadpratidin.in/article/bangladesh/bangladeshs-crish-siraj-goes-viral-on-the-internet/pid/1388260/",
    title: "Bangladesh’s ‘Crish’ Siraj Goes Viral on the Internet",
    date: null,
    summary: {
      en: "An Indian outlet's feature on the Sirajganj performer, his self-made costume, and his online popularity.",
      bn: "ভারতীয় একটি সংবাদমাধ্যমের ফিচার: সিরাজগঞ্জের এই পারফর্মার, তাঁর নিজের বানানো পোশাক ও অনলাইনে জনপ্রিয়তা।"
    }
  },
  {
    publisher: { en: "Talash BD", bn: "তালাশ বিডি" },
    url: "https://talashbd.com/news/1491720126379671",
    title: "সামাজিক মাধ্যমে তোলপাড়, কে এই মোহাম্মদ আল মামুন ‘বাংলার কৃষ’?",
    date: "2026-10-14",
    summary: {
      en: "An overview of his background, the costume, his years of practice, and his hopes for the future.",
      bn: "তাঁর পটভূমি, পোশাক, বছরের পর বছর অনুশীলন এবং ভবিষ্যতের স্বপ্নের সংক্ষিপ্ত চিত্র।"
    }
  }
];

/* Local AI-generated fallback thumbnails (16:9). Index 1–3. */
window.FALLBACK_THUMBS = [
  "assets/images/video-fallback-01.webp",
  "assets/images/video-fallback-02.webp",
  "assets/images/video-fallback-03.webp"
];
