
const LS_THEME_KEY='site-theme';
const LS_LOCALE_KEY='site-locale';

function applyTheme(theme){
  document.documentElement.setAttribute('data-theme', theme);
  document.querySelectorAll('[data-theme-btn]').forEach(b=>b.classList.toggle('active', b.dataset.themeBtn===theme));
  try{ localStorage.setItem(LS_THEME_KEY, theme);}catch{}
}

function t(locale,key){ return (LOCALES[locale] && LOCALES[locale][key]) || (LOCALES['en'] && LOCALES['en'][key]) || ''; }
function applyLocale(locale){
  document.querySelectorAll('[data-i18n]').forEach(el=>{
    const key = el.getAttribute('data-i18n');
    const val = t(locale,key);
    if(val) el.innerHTML = val;
  });
  document.querySelectorAll('[data-i18n-attr]').forEach(el=>{
    const [attr, key] = el.getAttribute('data-i18n-attr').split(':');
    const val = t(locale,key);
    if(val) el.setAttribute(attr, val);
  });
  document.querySelectorAll('[data-locale-btn]').forEach(b=>b.classList.toggle('active', b.dataset.localeBtn===locale));
  try{ localStorage.setItem(LS_LOCALE_KEY, locale);}catch{}
}

const LOCALES = {
  en: {
    nav_home:"Home", nav_about:"About", nav_projects:"Projects", nav_cases:"Case Studies", nav_contact:"Contact",
    hero_kicker:"Namaste — Welcome",
    hero_title:"AI & Integration Engineer — GenAI • MuleSoft • FastAPI • LangGraph",
    hero_summary:"I build practical, production-grade AI and integration systems. My focus: reliable GenAI agents, secure APIs, and data-driven automation across AWS/Azure.",
    cta_projects:"See Projects", cta_about:"About Me", cta_contact:"Contact",
    quick_facts:"Quick Facts",
    qf_1:"7+ years across enterprise integrations, APIs and GenAI agents",
    qf_2:"Stack: MuleSoft, FastAPI, LangChain/LangGraph, Databricks",
    qf_3:"Security & Observability first: OAuth2/JWT, metrics, alerts",
    certs:"Certifications",
    highlighted_projects:"Highlighted Projects",
    proj1_title:"Ghumastic — AI Travel Itineraries",
    proj1_desc:"End-to-end AI itinerary generation with geospatial context, caching, and budget-aware plans.",
    proj2_title:"PashuGuru / PashuGPT — AI for Farmers",
    proj2_desc:"Multilingual livestock assistant; voice queries, safety rails, and escalation to vets.",
    proj3_title:"Enterprise Integration Kits",
    proj3_desc:"Reusable connectors/templates for Salesforce, Workday, SAP; faster time-to-market.",
    explore:"Explore",
    recent_experience:"Recent Experience", full_timeline:"Full Timeline",
    about_title:"About Me",
    about_para:"I like building things that ship. From API platforms and streaming integrations to agentic workflows and retrieval, I bias for reliability, privacy, and developer ergonomics.",
    contact_title:"Contact",
    contact_note:"For roles, collaborations, or advisory, I typically respond within 24–48 hours.",
    contact_profiles:"Profiles:",
    projects_title:"Projects",
    projects_sub:"A few real-world initiatives I’ve shipped or led.",
    cases_title:"Case Studies",
    cases_sub:"Selected work with measurable outcomes.",
    case1_title:"Ghumastic — Itinerary Generation Platform",
    case1_b1:"Throughput: 120 req/min sustained on free-tier infra",
    case1_b2:"Latency: p95 < 1.4s for cached itineraries",
    case1_b3:"Cost: ~35% lower via caching + prompt optimization",
    case2_title:"PashuGuru — AI Assistant for Farmers",
    case2_b1:"Adoption: 1000+ farmer queries/day peak",
    case2_b2:"Reliability: 7-day Redis session persistence",
    case2_b3:"Safety: escalation flow to vets when needed",
    case3_title:"Enterprise Integrations — AWM (JPMC)",
    case3_b1:"Reusability: shared connectors cut build time ~40%",
    case3_b2:"Security: OAuth2/JWT, PII minimization, org TLS policies",
    case3_b3:"Ops: dashboards & alerts reduced MTTR",
    footer_kicker:"Let’s build something useful"
  },
  hi: {
    nav_home:"होम", nav_about:"परिचय", nav_projects:"प्रोजेक्ट्स", nav_cases:"केस स्टडीज़", nav_contact:"संपर्क",
    hero_kicker:"नमस्ते — स्वागत है",
    hero_title:"AI व इंटीग्रेशन इंजीनियर — GenAI • MuleSoft • FastAPI • LangGraph",
    hero_summary:"मैं व्यावहारिक व प्रोडक्शन‑ग्रेड AI और इंटीग्रेशन सिस्टम बनाता/बनाती हूँ — भरोसेमंद एजेंट्स, सुरक्षित APIs और डेटा‑ड्रिवन ऑटोमेशन (AWS/Azure)।",
    cta_projects:"प्रोजेक्ट्स देखें", cta_about:"मेरे बारे में", cta_contact:"संपर्क",
    quick_facts:"त्वरित जानकारी",
    qf_1:"7+ वर्ष: एंटरप्राइज़ इंटीग्रेशन, APIs, GenAI एजेंट्स",
    qf_2:"टेक स्टैक: MuleSoft, FastAPI, LangChain/LangGraph, Databricks",
    qf_3:"सिक्योरिटी/ऑब्ज़र्वेबिलिटी: OAuth2/JWT, मेट्रिक्स, अलर्ट्स",
    certs:"प्रमाणपत्र",
    highlighted_projects:"मुख्य प्रोजेक्ट्स",
    proj1_title:"घूमस्टिक — AI ट्रैवल इटिनरेरी",
    proj1_desc:"भूस्थानिक संदर्भ, कैशिंग और बजट‑स्मार्ट योजनाओं के साथ एंड‑टू‑एंड इटिनरेरी जनरेशन।",
    proj2_title:"पशुगुरु / PashuGPT — किसानों के लिए AI",
    proj2_desc:"बहुभाषी पशुपालन सहायक; वॉइस क्वेरी, सेफ्टी रेल्स, वेट्स को एस्केलेशन।",
    proj3_title:"एंटरप्राइज़ इंटीग्रेशन किट्स",
    proj3_desc:"Salesforce/Workday/SAP के लिए पुन: प्रयोग योग्य कनेक्टर्स/टेम्पलेट्स; तेज़ डिलीवरी।",
    explore:"खोलें",
    recent_experience:"हालिया अनुभव", full_timeline:"पूरी टाइमलाइन",
    about_title:"मेरे बारे में",
    about_para:"मैं ऐसे सिस्टम बनाना पसंद करता/करती हूँ जो वास्तव में शिप हों — API प्लेटफ़ॉर्म, स्ट्रीमिंग इंटीग्रेशन, एजेंटिक वर्कफ़्लो व रिट्रीवल तक। प्राथमिकताएँ: भरोसेमंदी, प्राइवेसी, डेवलपर अनुभव।",
    contact_title:"संपर्क",
    contact_note:"रोल्स/कोलैब/एडवाइज़री हेतु आमतौर पर 24–48 घंटे में उत्तर देता/देती हूँ।",
    contact_profiles:"प्रोफाइल्स:",
    projects_title:"प्रोजेक्ट्स",
    projects_sub:"कुछ वास्तविक प्रोजेक्ट्स जिन्हें मैंने डिलीवर/लीड किया।",
    cases_title:"केस स्टडीज़",
    cases_sub:"मापने योग्य परिणामों वाली चुनिंदा सफलताएँ।",
    case1_title:"घूमस्टिक — इटिनरेरी जनरेशन प्लेटफ़ॉर्म",
    case1_b1:"थ्रूपुट: 120 रिक्वेस्ट/मिन (फ्री‑टियर)",
    case1_b2:"लेटेन्सी: p95 < 1.4s (कैश्ड)",
    case1_b3:"लागत: ~35% कम (कैश + प्रॉम्प्ट ऑप्टिमाइज़ेशन)",
    case2_title:"पशुगुरु — किसानों के लिए AI सहायक",
    case2_b1:"अपनापन: 1000+ किसान क्वेरी/दिन (पीक)",
    case2_b2:"विश्वसनीयता: 7‑दिन Redis सेशन पर्सिस्टेंस",
    case2_b3:"सुरक्षा: आवश्यकता पर वेट्स को एस्केलेशन",
    case3_title:"एंटरप्राइज़ इंटीग्रेशन — AWM (JPMC)",
    case3_b1:"रीयूज़: साझा कनेक्टर्स से ~40% समय बचत",
    case3_b2:"सिक्योरिटी: OAuth2/JWT, PII न्यूनतम, TLS नीतियाँ",
    case3_b3:"ऑप्स: डैशबोर्ड/अलर्ट से MTTR कम",
    footer_kicker:"आइए कुछ उपयोगी बनाते हैं"
  }
};

(function(){
  const savedTheme = localStorage.getItem(LS_THEME_KEY) || (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark':'light');
  applyTheme(savedTheme);
  const savedLocale = localStorage.getItem(LS_LOCALE_KEY) || 'en';
  applyLocale(savedLocale);

  document.querySelectorAll('[data-theme-btn]').forEach(btn => btn.addEventListener('click', ()=>applyTheme(btn.dataset.themeBtn)));
  document.querySelectorAll('[data-locale-btn]').forEach(btn => btn.addEventListener('click', ()=>{
    const locale = btn.dataset.localeBtn;
    applyLocale(locale);
    try{ localStorage.setItem(LS_LOCALE_KEY, locale);}catch{}
  }));
})();
