export const locales = [
  { code: 'en', label: 'English', toggleLabel: 'EN' },
  { code: 'hi', label: 'हिंदी', toggleLabel: 'हिं' },
];

export const defaultLocale = 'en';

export const dictionary = {
  en: {
    nav: {
      brand: 'Shanu Choudhary',
      home: 'Home',
      about: 'About',
      projects: 'Projects',
      caseStudies: 'Case Studies',
      contact: 'Contact',
      theme: { light: 'Light', dark: 'Dark' },
      language: 'Language',
    },
    hero: {
      greeting: 'Namaste — Welcome',
      title: 'Data & AI Integration Engineer — GenAI • MuleSoft • LangGraph • Azure',
      subtitle:
        'Results-driven engineer with 7+ years orchestrating secure APIs, GenAI copilots, and enterprise automations across finance, energy, and retail.',
      description:
        'I partner with leadership and delivery squads to fuse business logic, compliant data flows, and AI-first experiences using MuleSoft, FastAPI, LangChain/LangGraph, and cloud-native stacks.',
      buttons: {
        projects: 'See Projects',
        about: 'About Me',
        contact: 'Contact',
      },
      quickFactsTitle: 'Quick Facts',
      quickFacts: [
        '7+ years architecting data and AI integration fabrics',
        'Delivered 500+ production APIs for global teams',
        'Hands-on with LangChain, LangGraph, Databricks, and Azure',
      ],
      certificationsTitle: 'Certifications',
      certifications: ['Azure AZ-900', 'MuleSoft Integration (L1/L2)', 'Databricks Generative AI (Fundamentals)'],
      socialTitle: 'Let’s connect',
    },
    about: {
      heading: 'About Me',
      bioTitle: 'Designing resilient data + AI ecosystems',
      bioParagraphs: [
        'I translate complex business processes into integration blueprints that blend APIs, data platforms, and AI copilots. From discovery through hypercare, I prioritise secure patterns, reusable accelerators, and observability-first delivery.',
        'My recent focus spans LangGraph copilots for advisory teams, MuleSoft and FastAPI services for mission-critical workflows, and data meshes powered by Databricks, ADF, and Azure AI.',
      ],
      skillsTitle: 'Focus Areas',
      skills: [
        'GenAI orchestration with LangChain, LangGraph, and OpenAI',
        'API-led integration across MuleSoft, Salesforce, SAP, and Workday',
        'Data engineering with Databricks, Azure Data Factory, and Python',
        'Cloud automation & MLOps on Azure and AWS',
      ],
      certificationsTitle: 'Featured Credentials',
      contactCardTitle: 'Let’s collaborate',
      contactCardBody:
        'Based in Bengaluru, partnering remotely & on-site across APAC, EMEA, and North America.',
      timelineTitle: 'Experience Timeline',
      timeline: [
        {
          role: 'SDE III — AI & Integration',
          company: 'J.P. Morgan Chase & Co.',
          period: '2024 — Present',
          achievements: [
            'Shaping AI-first experiences for Asset & Wealth Management with LangChain and LangGraph copilots',
            'Delivering secure MuleSoft and FastAPI services that unify Salesforce, Workday, and SAP data',
          ],
        },
        {
          role: 'Senior Integration Engineer',
          company: 'AB InBev',
          period: '2022 — 2024',
          achievements: [
            'Led multi-region payroll and finance integrations across Workday, SAP, and legacy platforms',
            'Built reusable MuleSoft accelerators that reduced onboarding timelines for new regions',
          ],
        },
        {
          role: 'AI & Automation Lead',
          company: 'Shell',
          period: '2021 — 2022',
          achievements: [
            'Engineered MuleSoft integrations powering supply chain and energy operations',
            'Implemented observability, governance, and security guardrails for global integrations',
          ],
        },
        {
          role: 'Integration Engineer',
          company: 'Cognizant',
          period: '2020',
          achievements: [
            'Delivered MuleSoft and Python adapters for Shell’s supply chain and finance systems',
            'Accelerated cloud migration initiatives leveraging AWS services and API Gateway',
          ],
        },
        {
          role: 'Developer Analyst',
          company: 'Infosys',
          period: '2018 — 2020',
          achievements: [
            'Shipped integration adapters for ERP and HRIS platforms',
            'Introduced automation runbooks reducing onboarding effort',
          ],
        },
      ],
    },
    projects: {
      heading: 'Projects',
      intro: 'Representative work blending AI orchestration, integration rigor, and measurable outcomes.',
      cards: [
        {
          title: 'Ghumastic — AI Travel Itineraries',
          description:
            'End-to-end travel concierge using GenAI planners, supplier APIs, and event-driven personalization.',
          tech: ['LangGraph', 'FastAPI', 'Redis', 'Azure OpenAI', 'Supabase'],
          cta: 'Visit website',
          href: 'https://ghumastic.com/about',
        },
        {
          title: 'PashuGuru / PashuGPT — AI for Farmers',
          description:
            'Multilingual advisory platform for livestock health, bridging conversational AI with vet escalation.',
          tech: ['MuleSoft', 'Dialogflow CX', 'Firebase', 'Vertex AI'],
          cta: 'Visit website',
          href: 'https://pashushala.com',
        },
        {
          title: 'Enterprise Integration Kits',
          description:
            'Composable integration starter kits unifying Salesforce, Workday, and SAP with reusable patterns.',
          tech: ['MuleSoft', 'Kafka', 'Snowflake', 'Terraform'],
          cta: 'Preview architecture',
          href: 'https://github.com/Shanu-web',
        },
      ],
    },
    caseStudies: {
      heading: 'Case Studies',
      intro: 'Outcomes and operating metrics from recent engagements.',
      cards: [
        {
          title: 'Ghumastic',
          summary:
            'Scaled a leisure travel platform with AI-first itineraries and precision cost controls.',
          metrics: [
            { label: 'Requests per minute', value: '120' },
            { label: 'p95 latency', value: '< 1.4s' },
            { label: 'Infra cost reduction', value: '35%' },
          ],
        },
        {
          title: 'PashuGuru',
          summary:
            'Enabled frontline agri-support with persistent conversations and real-time expert routing.',
          metrics: [
            { label: 'Daily guided queries', value: '1000+' },
            { label: 'Session retention', value: '7-day Redis TTL' },
            { label: 'Escalation handling', value: 'Vet triage in <15m' },
          ],
        },
      ],
    },
    contact: {
      heading: 'Contact',
      intro: 'Let’s co-design your next integration or GenAI initiative. I respond within one business day.',
      email: 'Email',
      phone: 'Phone',
      location: 'Location',
      locationValue: 'Bengaluru, India',
      availability: 'Currently partnering on strategic AI and integration programs worldwide.',
      bookIntro: 'Prefer async? Drop a note or connect with me on LinkedIn.',
    },
    footer: {
      tagline: 'Bridging data, systems, and teams with thoughtful AI integrations.',
      builtWith: 'Crafted with React, Tailwind, and purposeful automation.',
      rights: '© {{year}} Shanu Choudhary. All rights reserved.',
    },
    common: {
      downloadResume: 'Download Resume',
      connect: 'Connect',
      themeToggle: 'Toggle theme',
      languageToggle: 'Switch language',
      viewProject: 'View Project',
      metrics: 'Metrics',
      explore: 'Explore',
    },
  },
  hi: {
    nav: {
      brand: 'शानू चौधरी',
      home: 'होम',
      about: 'परिचय',
      projects: 'प्रोजेक्ट्स',
      caseStudies: 'केस स्टडीज़',
      contact: 'संपर्क',
      theme: { light: 'प्रकाश', dark: 'गहरा' },
      language: 'भाषा',
    },
    hero: {
      greeting: 'नमस्ते — स्वागत है',
      title: 'डेटा एवं एआई इंटीग्रेशन इंजीनियर — GenAI • MuleSoft • LangGraph • Azure',
      subtitle:
        '7+ वर्षों का अनुभव, जहाँ मैंने वित्त, ऊर्जा और रिटेल जैसे उद्योगों के लिए सुरक्षित API, GenAI कोपायलट और स्वचालन समाधान तैनात किए हैं।',
      description:
        'मैं बिज़नेस प्रक्रियाओं, डेटा प्लेटफ़ॉर्म और एआई को जोड़कर MuleSoft, FastAPI, LangChain/LangGraph तथा क्लाउड नेटिव स्टैक्स से प्रोडक्शन-रेडी अनुभव तैयार करता हूँ।',
      buttons: {
        projects: 'प्रोजेक्ट देखें',
        about: 'मेरे बारे में',
        contact: 'संपर्क करें',
      },
      quickFactsTitle: 'त्वरित तथ्य',
      quickFacts: [
        '7+ वर्षों से डेटा और एआई इंटीग्रेशन फ्रेमवर्क तैयार कर रहा हूँ',
        'वैश्विक टीमों के लिए 500+ प्रोडक्शन API डिलीवर किए',
        'LangChain, LangGraph, Databricks और Azure में प्रत्यक्ष अनुभव',
      ],
      certificationsTitle: 'प्रमुख प्रमाणपत्र',
      certifications: ['Azure AZ-900', 'MuleSoft Integration (L1/L2)', 'Databricks Generative AI (Fundamentals)'],
      socialTitle: 'जुड़ें',
    },
    about: {
      heading: 'मेरे बारे में',
      bioTitle: 'मजबूत डेटा + एआई इकोसिस्टम का निर्माण',
      bioParagraphs: [
        'मैं जटिल बिज़नेस प्रक्रियाओं को ऐसा इंटीग्रेशन ब्लूप्रिंट बनाता हूँ जिसमें API, डेटा प्लेटफ़ॉर्म और एआई कोपायलट मिलकर काम करें। खोज से लेकर हाइपरकेयर तक मेरा ध्यान सुरक्षित पैटर्न, पुन: प्रयोज्य एसेट और बेहतर ऑब्ज़र्वेबिलिटी पर रहता है।',
        'हाल में मेरा काम LangGraph कोपायलट, MuleSoft व FastAPI सेवाएँ, तथा Databricks, ADF और Azure AI से डेटा मेष तैयार करने पर केंद्रित है।',
      ],
      skillsTitle: 'विशेषज्ञता क्षेत्र',
      skills: [
        'LangChain, LangGraph और OpenAI के साथ GenAI ऑर्केस्ट्रेशन',
        'MuleSoft, Salesforce, SAP और Workday के साथ API-प्रेरित इंटीग्रेशन',
        'Databricks, Azure Data Factory व Python से डेटा इंजीनियरिंग',
        'Azure और AWS पर क्लाउड ऑटोमेशन तथा MLOps',
      ],
      certificationsTitle: 'चयनित प्रमाणन',
      contactCardTitle: 'साथ मिलकर काम करें',
      contactCardBody:
        'बेंगलुरु स्थित, और APAC, EMEA व उत्तर अमेरिका में ऑन-साइट/रिमोट साझेदारी।',
      timelineTitle: 'अनुभव',
      timeline: [
        {
          role: 'एसडीई III — एआई एवं इंटीग्रेशन',
          company: 'जेपी मॉर्गन चेस एंड कंपनी',
          period: '2024 — वर्तमान',
          achievements: [
            'एसेट व वेल्थ मैनेजमेंट के लिए LangChain और LangGraph आधारित एआई अनुभव विकसित कर रहा हूँ',
            'Salesforce, Workday एवं SAP को एकीकृत करने वाले सुरक्षित MuleSoft व FastAPI सर्विस बना रहा हूँ',
          ],
        },
        {
          role: 'सीनियर इंटीग्रेशन इंजीनियर',
          company: 'एबी इनबेव',
          period: '2022 — 2024',
          achievements: [
            'Workday, SAP और लेगेसी सिस्टम के बीच बहु-क्षेत्रीय पेरोल व वित्तीय इंटीग्रेशन संचालित किए',
            'पुन: प्रयोज्य MuleSoft एक्सेलेरेटर तैयार किए जिससे नए क्षेत्रों का ऑनबोर्डिंग तेज हुआ',
          ],
        },
        {
          role: 'एआई एवं ऑटोमेशन लीड',
          company: 'शेल',
          period: '2021 — 2022',
          achievements: [
            'ऊर्जा एवं सप्लाई चेन संचालन के लिए MuleSoft इंटीग्रेशन इंजीनियर किए',
            'वैश्विक इंटीग्रेशन के लिए ऑब्ज़र्वेबिलिटी, गवर्नेंस और सुरक्षा नियंत्रण लागू किए',
          ],
        },
        {
          role: 'इंटीग्रेशन इंजीनियर',
          company: 'कॉग्निज़ेंट',
          period: '2020',
          achievements: [
            'Shell की सप्लाई चेन और वित्तीय प्रणालियों के लिए MuleSoft एवं Python एडेप्टर डिलीवर किए',
            'AWS सेवाओं और API Gateway द्वारा क्लाउड माइग्रेशन पहलों को गती दी',
          ],
        },
        {
          role: 'डेवलपर एनालिस्ट',
          company: 'इन्फोसिस',
          period: '2018 — 2020',
          achievements: [
            'ERP और HRIS प्लेटफ़ॉर्म के लिए इंटीग्रेशन एडेप्टर विकसित किए',
            'ऑनबोर्डिंग प्रयास घटाने वाले ऑटोमेशन रनबुक पेश किए',
          ],
        },
      ],
    },
    projects: {
      heading: 'प्रोजेक्ट्स',
      intro: 'GenAI ऑर्केस्ट्रेशन, इंटीग्रेशन अनुशासन और मापनीय परिणामों के चयनित उदाहरण।',
      cards: [
        {
          title: 'घुमास्टिक — एआई यात्रा योजनाकार',
          description:
            'GenAI प्लानर, सप्लायर API और इवेंट-ड्रिवन पर्सनलाइज़ेशन से युक्त संपूर्ण ट्रैवल कंसीयर्ज।',
          tech: ['LangGraph', 'FastAPI', 'Redis', 'Azure OpenAI', 'Supabase'],
          cta: 'वेबसाइट देखें',
          href: 'https://ghumastic.com/about',
        },
        {
          title: 'पशु गुरु / पशुGPT — किसानों के लिए एआई',
          description:
            'बहुभाषी सलाह मंच जो वार्तालापी एआई को पशु-चिकित्सक एस्केलेशन से जोड़ता है।',
          tech: ['MuleSoft', 'Dialogflow CX', 'Firebase', 'Vertex AI'],
          cta: 'वेबसाइट देखें',
          href: 'https://pashushala.com',
        },
        {
          title: 'एंटरप्राइज़ इंटीग्रेशन किट्स',
          description:
            'Salesforce, Workday और SAP को जोड़ने वाले पुन: प्रयोज्य पैटर्न के साथ कॉम्पोज़ेबल स्टार्टर्स।',
          tech: ['MuleSoft', 'Kafka', 'Snowflake', 'Terraform'],
          cta: 'आर्किटेक्चर देखें',
          href: 'https://github.com/Shanu-web',
        },
      ],
    },
    caseStudies: {
      heading: 'केस स्टडीज़',
      intro: 'हालिया एंगेजमेंट से प्राप्त परिणाम और ऑपरेशनल मीट्रिक्स।',
      cards: [
        {
          title: 'घुमास्टिक',
          summary:
            'एआई-फ़र्स्ट यात्रा प्लेटफ़ॉर्म को स्केल करते हुए लागत नियंत्रण और प्रदर्शन संतुलित किए।',
          metrics: [
            { label: 'मिनट प्रति अनुरोध', value: '120' },
            { label: 'p95 विलंब', value: '< 1.4s' },
            { label: 'लागत में कमी', value: '35%' },
          ],
        },
        {
          title: 'पशु गुरु',
          summary:
            'स्थायी संवाद और रियल-टाइम विशेषज्ञ रूटिंग से अग्रिम पंक्ति कृषि सहायता सक्षम की।',
          metrics: [
            { label: 'दैनिक प्रश्न', value: '1000+' },
            { label: 'सत्र संचयन', value: '7-दिन Redis TTL' },
            { label: 'एस्केलेशन प्रबंधन', value: '15 मिनट में पशु-चिकित्सक' },
          ],
        },
      ],
    },
    contact: {
      heading: 'संपर्क',
      intro: 'अपने अगले इंटीग्रेशन या GenAI पहल के लिए बात करें। मैं एक कार्य दिवस में जवाब देता हूँ।',
      email: 'ईमेल',
      phone: 'फ़ोन',
      location: 'स्थान',
      locationValue: 'बेंगलुरु, भारत',
      availability: 'वर्तमान में रणनीतिक एआई व इंटीग्रेशन कार्यक्रमों पर साझेदारी कर रहा हूँ।',
      bookIntro: 'असिंक्रोनस पसंद है? संदेश छोड़ें या LinkedIn पर जुड़ें।',
    },
    footer: {
      tagline: 'डेटा, सिस्टम और टीमों को जोड़ने वाले विचारशील एआई इंटीग्रेशन।',
      builtWith: 'React, Tailwind और उद्देश्यपूर्ण ऑटोमेशन से निर्मित।',
      rights: '© {{year}} शानू चौधरी. सर्वाधिकार सुरक्षित।',
    },
    common: {
      downloadResume: 'रेज़्यूमे डाउनलोड करें',
      connect: 'जुड़ें',
      themeToggle: 'थीम बदलें',
      languageToggle: 'भाषा बदलें',
      viewProject: 'प्रोजेक्ट देखें',
      metrics: 'मेट्रिक्स',
      explore: 'अधिक जानें',
    },
  },
};

export const translatePath = (locale, key) => {
  const segments = key.split('.');
  let current = dictionary[locale];
  for (const segment of segments) {
    if (current && Object.prototype.hasOwnProperty.call(current, segment)) {
      current = current[segment];
    } else {
      return key;
    }
  }
  return current;
};
