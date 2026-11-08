/* =====================================================================
   All site copy lives here.

   VERIFIED  = taken from marginal-energy.com/our-commitment or from
               published news coverage of the company.
   DRAFT     = placeholder wording written for layout purposes. Replace
               with approved Marginal Energy text before launch.
   ===================================================================== */

export const company = {
  name: "Marginal Energy",
  legalName: "MARGINAL ENERGY LIMITED",
  address: ["Ivie House, 4 Ajose Adeogun Street,", "Victoria Island, Lagos."],
  email: "info@marginal-energy.com",
  phone: "+234 807 247 4283",
  phoneHref: "+2348072474283",
  // The live site links these to the platforms' home pages. Point them at real profiles.
  social: [
    { label: "Facebook", href: "https://www.facebook.com/" },
    { label: "X", href: "https://x.com/" },
    { label: "Instagram", href: "https://www.instagram.com/" },
    { label: "YouTube", href: "https://www.youtube.com/" },
  ],
};

export const nav = [
  {
    label: "About",
    items: [
      { label: "Who We Are", to: "/about" },
      { label: "Corporate Governance", to: "/corporate-governance" },
    ],
  },
  { label: "Services", to: "/services" },
  {
    label: "Commitment",
    items: [
      { label: "Our Commitment", to: "/our-commitment" },
      { label: "Health & Environment", to: "/health-environment" },
      { label: "Our Employees", to: "/our-team" },
    ],
  },
  {
    label: "Media & Blog",
    items: [
      { label: "Publications", to: "/media-blog" },
      { label: "Gallery", to: "/gallery" },
    ],
  },
  { label: "Careers", to: "/careers" },
  { label: "Contact", to: "/contact" },
];

/* ---------- Home ---------- */
export const hero = {
  kicker: "Indigenous integrated energy company", // VERIFIED (our-commitment page)
  title: "Marginal Energy",
  tagline: "Powering more responsibly", // VERIFIED (page banner)
};

export const home = {
  statement:
    "We are an indigenous integrated energy company with a deep understanding of our host communities: their needs, aspirations, and expectations.", // VERIFIED
  tiles: [
    {
      title: "Who we are",
      text: "A Lagos-based Nigerian energy company with a focus on upstream oil and gas.",
      to: "/about",
      cta: "Learn more",
    },
    {
      title: "Our governance",
      text: "Responsible operations, clear accountability and ethical conduct.",
      to: "/corporate-governance",
      cta: "Governance policies",
    },
    {
      title: "Our services",
      text: "From marginal field development to integrated energy solutions.",
      to: "/services",
      cta: "Find out more",
    },
    {
      title: "Our commitment",
      text: "Scholarships, skills training and jobs for the communities that host us.",
      to: "/our-commitment",
      cta: "Learn more",
    },
  ],
  latest: {
    heading: "Offshore Sierra Leone",
    // VERIFIED: PSA signed 23 April 2026 with the Petroleum Directorate of Sierra Leone
    text: "In April 2026, Marginal Energy signed a $225 million production sharing agreement covering five offshore blocks with the Petroleum Directorate of Sierra Leone.",
    to: "/media-blog",
    cta: "Read the coverage",
  },
};

/* ---------- About ---------- */
const UP = "https://marginal-energy.com/wp-content/uploads/2026/02/";

export const about = {
  tagline: "Powering More, responsibly",
  intro: {
    heading: "Empowering Communities with Responsible Energy Innovation",
    body: "As an integrated energy company, we believe the future of energy must balance performance with responsibility. Guided by our tagline, \u201cPowering More, responsibly,\u201d we provide essential energy resources while continuously improving how we operate, invest, and innovate. Our approach ensures that economic progress, environmental stewardship, and social impact move forward together.",
  },
  // Hosted on the live site. Download licensed copies into src/assets/ before launch.
  photos: [
    { src: UP + "istockphoto-624185954-612x612-1.jpg", alt: "" },
    {
      src:
        UP +
        "team-industry-engineer-are-working-and-discussing-at-front-oil-and-gas-industrial-factory-oil-refinery-plant-for-industry-drone-view-generative-ai-free-photo-1024x683.jpeg",
      alt: "Engineers discussing work at an oil and gas facility",
    },
    { src: UP + "istockphoto-932140864-612x612-1.jpg", alt: "" },
  ],
  mv: [
    {
      title: "Mission",
      text: "At Marginal Energy, our mission is to be a responsible provider of integrated energy solutions, delivering lasting value across Africa and beyond.",
      image:
        UP +
        "our-mission-message-written-wooden-blocks-with-green-background-conceptual-our-mission-symbol-copy-space_648871-12666.avif",
    },
    {
      title: "Vision",
      text: "Our vision at Marginal Energy is to be the energy company of first preference in Africa, delivering reliable, impactful, and future-ready solutions across the entire energy value chain.",
      image: UP + "OIP-1.webp",
    },
  ],
  valuesHeading: "Our Core Values",
  values: [
    "Integrity",
    "Innovation",
    "Sustainability",
    "Excellence",
    "Partnership",
  ],

  // SOURCE: the company description in the site's SEO metadata.
  chain: {
    heading: "Activities across the oil and gas value chain",
    lead: "Marginal Energy is an integrated energy company with activities across the upstream, midstream, trading, and downstream segments of the oil and gas value chain.",
    stages: [
      {
        title: "Upstream",
        text: "Development and production of hydrocarbon assets.",
      },
      { title: "Midstream", text: "Storage, logistics, and transportation." },
      {
        title: "Trading",
        text: "Physical marketing of crude oil, condensates, NGLs, LPG, and refined petroleum products, connecting supply and demand across international markets.",
      },
      {
        title: "Downstream",
        text: "Distribution and commercial optimization, underpinned by strong execution capability, disciplined risk management, and deep understanding of physical energy markets.",
      },
    ],
  },

  approach: {
    heading: "Leading the Way in Sustainable Energy Solutions",
    paragraphs: [
      "At Marginal Energy, our approach is built on excellence, responsibility, and long-term value creation. We combine innovative thinking with proven industry practices to deliver safe, efficient, and sustainable energy solutions.",
      "Collaboration, integrity, and environmental responsibility guide every decision we make. By embedding safety and sustainability into our operations, we drive progress while meeting the evolving needs of our clients and stakeholders.",
    ],
    // CHECK: the live page shows these three numbers with no units or context.
    // Add a unit or label (for example "projects", "communities") before launch, or remove them.
    stats: [
      {
        value: 188,
        title: "Innovation Impact",
        text: "Showcasing our advancements in clean technology and operational excellence.",
      },
      {
        value: 450,
        title: "Sustainability Reach",
        text: "Demonstrating our efforts in reducing environmental footprint across communities served.",
      },
      {
        value: 75,
        title: "Growth Momentum",
        text: "Highlighting our continuous progress in driving economic and social benefits.",
      },
    ],
  },

  // CHECK: these three claims appear on the live page, but they read like template text.
  // Confirm each certification and award is real, and add certificate details, before launch.
  recognition: {
    heading: "Committed to Innovation, Driven by Responsibility",
    lead: "Explore our dedication to sustainability, operational excellence, and community impact that define our trusted energy solutions.",
    items: [
      {
        icon: "leaf",
        title: "Certified Sustainable Energy Provider",
        text: "Recognized for meeting rigorous environmental standards that ensure eco-friendly and efficient energy delivery.",
      },
      {
        icon: "shield",
        title: "ISO 9001 Quality Assurance",
        text: "Validated for superior management systems that guarantee consistent and reliable energy services.",
      },
      {
        icon: "award",
        title: "Community Impact Award",
        text: "Honored for outstanding contributions to local development and social responsibility initiatives.",
      },
    ],
  },
};

/* ---------- Governance (all DRAFT) ---------- */
export const governance = {
  lead: "Our commitment to the highest standards of integrity, accountability, and transparency.",
  intro: {
    // Photos below are hosted on the live site. Download them into src/assets/ before launch.
    image: UP + "WhatsApp-Image-2026-02-10-at-1.33.53-PM-1024x768.jpeg",
    heading:
      "Explore Marginal Energy\u2019s Commitment to Strong Corporate Governance",
    paragraphs: [
      "At Marginal Energy, strong corporate governance is fundamental to how we conduct our business. We are committed to the highest standards of integrity, accountability, and transparency, ensuring that our operations are managed responsibly and in the best interests of our stakeholders.",
      "Our governance framework supports effective decision-making, risk management, and long-term value creation. It reflects our belief that responsible leadership and ethical business practices are essential to sustainable growth and operational excellence. Our leadership is guided by well-established policies, procedures, and ethical guidelines that support sound corporate conduct and responsible business operations.",
    ],
    keywords: ["Integrity", "Accountability", "Transparency"],
  },
  principles: {
    heading: "Corporate Governance Principles at Marginal Energy",
    lead: "Discover how our governance framework ensures transparency, accountability, and ethical leadership across all operations.",
    image: UP + "WhatsApp-Image-2026-02-10-at-2.17.45-PM-1024x768.jpeg",
    items: [
      {
        title: "Board Structure and Leadership",
        body: "Our board is composed of diverse, experienced members who guide strategic decisions with integrity and foresight.",
      },
      {
        title: "Corporate Policies and Ethics",
        body: "We uphold rigorous policies that foster responsible conduct, compliance, and a culture of continuous improvement.",
      },
      {
        title: "Sustainability and Accountability Mechanisms",
        body: "We implement robust practices that align our actions with economic progress, environmental care, and social responsibility.",
      },
    ],
  },
  overview: {
    heading: "Corporate Governance Overview",
    lead: "Explore Marginal Energy\u2019s governance framework, emphasizing transparency, ethical leadership, and accountability in all operations.",
    steps: [
      {
        title: "Board Structure and Responsibilities",
        text: "An in-depth look at our board\u2019s composition, roles, and how it ensures strategic guidance aligned with our corporate values.",
      },
      {
        title: "Corporate Policies",
        text: "Detailed explanation of our policies promoting compliance, sustainability, and responsible business conduct throughout the organization.",
      },
      {
        title: "Decision-Making Framework",
        text: "Understanding the mechanisms that support effective, ethical decisions fostering innovation and long-term value creation.",
      },
    ],
  },
  // CHECK: these four claims appear on the live page, but they read like template text
  // (as on the About page). Confirm each certification and award is real, and add
  // certificate details, before launch. ISO 27001 in particular is a formal certification.
  recognition: {
    heading: "Committed to Integrity, Driven by Transparency",
    lead: "Discover Marginal Energy\u2019s governance frameworks, policies, and board structure that uphold accountability, ethical leadership, and sustainable innovation.",
    image: UP + "WhatsApp-Image-2026-02-10-at-1.33.55-PM-1024x768.jpeg",
    items: [
      {
        icon: "leaf",
        title: "Sustainability Excellence Certification",
        text: "Awarded for adhering to rigorous environmental standards, reflecting our dedication to sustainable business practices.",
      },
      {
        icon: "lock",
        title: "ISO 27001 Information Security Standard",
        text: "Ensures our robust data protection measures meet international benchmarks, safeguarding stakeholder information.",
      },
      {
        icon: "award",
        title: "Corporate Governance Leadership Award",
        text: "Recognizes our commitment to ethical management and transparent decision-making processes within the energy sector.",
      },
      {
        icon: "users",
        title: "Stakeholder Engagement Accreditation",
        text: "Highlights our proactive approach to engaging with communities and stakeholders, strengthening trust and collaboration.",
      },
    ],
  },
};

/* ---------- Services (all DRAFT) ---------- */
export const services = {
  lead: "Our operations span the entire oil and gas spectrum.",
  intro: {
    heading: "Empowering Progress Through Responsible Energy",
    body: "Our operations span the entire oil and gas spectrum, encompassing the identification of oil and natural gas deposits, as well as the profitable exploration and drilling of these resources. Additionally, we offer Subsurface Engineering services to other energy companies, employing cutting-edge data collection and appraisal tools.",
  },
  items: [
    {
      icon: "derrick",
      title: "Exploration & Production",
      text: "Our focus on Exploration & Production involves identifying and extracting oil and gas reserves to meet energy demands efficiently. We employ cutting-edge technology and rigorous exploration methods to uncover new reserves while maximizing production from existing fields.",
    },
    {
      icon: "pump",
      title: "Retail Marketing & Distribution",
      text: "Our operations in Retail Marketing & Distribution caters to diverse consumer needs, delivering quality refined petroleum products and services through an extensive network of retail outlets that we partner with.",
    },
    {
      icon: "swap",
      title: "Supply & Trading",
      text: "Our Supply & Trading operations involves navigating global markets to procure and distribute oil and gas products, ensuring reliable supply chains and optimized trading strategies.",
    },
    {
      icon: "tank",
      title: "Terminals & Storage",
      text: "Our Terminals & Storage facilities play a crucial role in our operations, providing secure storage and efficient distribution hubs for our oil and gas products.",
    },
    {
      icon: "truck",
      title: "Haulage",
      text: "Our operations in Haulage services ensure the seamless transportation of oil and gas products, optimizing logistics and maintaining supply chain integrity.",
    },
    {
      icon: "ship",
      title: "Shipping",
      text: "Our Shipping operations facilitate the global movement of oil and gas products, leveraging strategic routes and vessel management for safe and efficient delivery worldwide.",
    },
  ],
  // SOURCE: the intro paragraph on the live page.
  subsurface: {
    heading: "Subsurface Engineering",
    text: "Alongside our own operations, we offer Subsurface Engineering services to other energy companies, employing cutting-edge data collection and appraisal tools.",
    tags: ["Data collection", "Appraisal tools"],
  },
  // CHECK: this block and the "experience" block below read like template text. They mention
  // renewable investments and combining multiple energy sources, which does not match the
  // oil and gas services above. Confirm with Marginal Energy before launch.
  features: {
    heading: "Innovating Sustainable Energy Solutions for All",
    lead: "Discover how our commitment to innovation, efficiency, and sustainability drives energy solutions that empower communities and protect the environment.",
    items: [
      {
        icon: "grid",
        title: "Integrated Energy Management",
        text: "Offering seamless solutions that optimize energy use while promoting environmental responsibility.",
      },
      {
        icon: "sun",
        title: "Renewable Energy Investments",
        text: "Driving growth through strategic investments in clean and sustainable energy technologies.",
      },
      {
        icon: "users",
        title: "Community-Focused Initiatives",
        text: "Engaging with local communities to ensure energy development supports social and economic progress.",
      },
    ],
  },
  commitment: {
    heading: "Our Commitment",
    body: "At Marginal Energy, our commitment extends beyond operations, it is reflected in how we care for our people, protect the environment, and support the communities where we operate. We uphold the highest standards of safety, health, and operational excellence while actively contributing to community development. Our goal is to create shared value, ensuring that our presence delivers long-term benefits to all stakeholders, in alignment with our vision and mission.",
    cta: "Explore More",
    image:
      UP +
      "top-view-diverse-people-putting-their-hands-together-green-grass-background-unity-teamwork-concept_14117-374358.jpg",
  },
  experience: {
    heading: "Experience Sustainable Energy Solutions That Drive Progress",
    lead: "Discover how Marginal Energy\u2019s innovative and responsible energy services deliver lasting value to communities and businesses alike.",
    cta: "Learn More",
    // Stock photos. Confirm licences, then download into src/assets/.
    items: [
      {
        title: "Innovative Energy Integration",
        text: "Seamlessly combining multiple energy sources for optimized efficiency and sustainability, supporting reliable and adaptive power delivery.",
        alt: "Engineers discussing work at an oil and gas facility",
        image:
          UP +
          "team-industry-engineer-are-working-and-discussing-at-front-oil-and-gas-industrial-factory-oil-refinery-plant-for-industry-drone-view-generative-ai-free-photo-1024x683.jpeg",
      },
      {
        title: "Commitment to Environmental Stewardship",
        text: "Prioritizing eco-friendly practices to minimize impact while promoting renewable energy adoption and long-term ecological balance.",
        alt: "",
        image: UP + "360_F_432359625_N0VEVQ2DLLthQAkAokmREtdfa3vvoe31.jpg",
      },
      {
        title: "Community-Centered Development",
        text: "Engaging with local stakeholders to ensure energy projects benefit social growth and foster transparent, responsible partnerships.",
        alt: "",
        image:
          "https://images.unsplash.com/photo-1760270129343-6190b2f340e9?auto=format&fit=crop&w=1280&q=80",
      },
    ],
  },
};

/* ---------- Our Commitment (VERIFIED) ---------- */
export const intro = {
  heading: "Explore Marginal Energy’s commitment to sustainable growth",
  body: "Marginal Energy’s Corporate Social Responsibility philosophy is grounded in the belief that sustainable success is built together. As an indigenous integrated energy company, we maintain a deep understanding of our host communities: their needs, aspirations, and expectations.",
};

export const csr = {
  heading: "Experience sustainable growth and lasting impact",
  body: "Since inception, we have implemented policies and initiatives aimed at improving livelihoods and fostering community resilience.",
  listTitle: "Environmental Stewardship Commitment",
  items: [
    "Academic scholarships for students",
    "Support initiatives for the elderly",
    "Vocational training and skills development",
    "Employment opportunities for local youth",
    "Women empowerment programs",
  ],
  closing:
    "Through these efforts, we aim to strengthen communities, promote self-reliance, and create lasting positive impact.",
  // Hosted on the current site. Download into src/assets/ and import before launch.
  image:
    "https://marginal-energy.com/wp-content/uploads/2026/02/top-view-diverse-people-putting-their-hands-together-green-grass-background-unity-teamwork-concept_14117-374358.jpg",
  imageAlt: "People joining hands over green grass",
};

/* ---------- Health & Environment (all DRAFT) ---------- */
export const hse = {
  lead: "Nobody should be harmed by the work we do, and the environments we operate in should be left in good condition.",
  items: [
    {
      title: "Safety first",
      text: "Clear procedures, regular training and the authority for anyone to stop work they believe is unsafe.",
    },
    {
      title: "Environmental stewardship",
      text: "We work to reduce our footprint, manage waste responsibly and restore the land and water we touch.",
    },
    {
      title: "Community health",
      text: "We listen to host communities and act on their health and environmental concerns.",
    },
  ],
};

/* ---------- Our Employees ---------- */
export const people = {
  lead: "Our people are why we can deliver. We invest in their skills and give local talent room to grow.",
  items: [
    {
      title: "Local talent first",
      text: "We create employment opportunities for local youth.",
    }, // VERIFIED (CSR list)
    {
      title: "Skills that last",
      text: "Vocational training and skills development at every stage of a career.",
    }, // VERIFIED (CSR list)
    {
      title: "Opportunity for women",
      text: "Women empowerment programmes that open doors in energy.",
    }, // VERIFIED (CSR list)
  ],
};

/* ---------- Media & Blog ---------- */
export const publications = {
  lead: "News about Marginal Energy and the markets we work in.",
  // VERIFIED headlines and links from press coverage. Summaries are paraphrased.
  items: [
    {
      source: "OE Digital",
      date: "April 2026",
      title: "Marginal Energy, Sierra Leone Sign $225m Offshore Oil Agreement",
      text: "Sierra Leone grants offshore exploration and production rights to Marginal Energy under a petroleum licence agreement.",
      href: "https://www.oedigital.com/news/538420-marginal-energy-sierra-leone-sign-225m-offshore-oil-agreement",
    },
    {
      source: "ThisDay",
      date: "28 April 2026",
      title:
        "S’Leone Signs $225m Offshore Oil Deal with Nigeria’s Marginal Energy",
      text: "Coverage of the agreement as Sierra Leone works to revive interest in its under-explored upstream sector.",
      href: "https://www.thisdaylive.com/2026/04/28/sleone-signs-225m-offshore-oil-deal-with-nigerias-marginal-energy/",
    },
    {
      source: "Bavijas Energy",
      date: "2026",
      title:
        "Who is Marginal Energy, the Nigerian indie entering Sierra Leone?",
      text: "A profile of the company’s marginal-field background and Niger Delta operations.",
      href: "https://bavijas.substack.com/p/who-is-marginal-energy-the-nigerian",
    },
  ],
};

/* ---------- Gallery ---------- */
// Add real photos: put files in src/assets/gallery/, import them and set `src`.
export const gallery = [
  { title: "Community programmes", src: csr.image, tone: "a" },
  { title: "Field operations", tone: "b" },
  { title: "Skills training", tone: "c" },
  { title: "Scholarship awards", tone: "d" },
  { title: "Offshore exploration", tone: "b" },
  { title: "Our team", tone: "a" },
  { title: "Host community visits", tone: "d" },
  { title: "Head office, Victoria Island", tone: "c" },
];

/* ---------- Careers ---------- */
export const careers = {
  lead: "Join a Nigerian energy company that invests in local talent.",
  // Add roles as { title, location, type, href } objects. An empty list shows the open-application message.
  roles: [],
};

export const footerLinks = {
  about: [
    { label: "Who We Are", to: "/about" },
    { label: "Corporate Governance", to: "/corporate-governance" },
    { label: "Services", to: "/services" },
  ],
  commitment: [
    { label: "Our Commitment", to: "/our-commitment" },
    { label: "Health & Environment", to: "/health-environment" },
    { label: "Our Employees", to: "/our-team" },
  ],
  company: [
    { label: "Media & Blog", to: "/media-blog" },
    { label: "Careers", to: "/careers" },
    { label: "Contact Us", to: "/contact" },
    { label: "Privacy Policy & Cookies Policy", to: "/privacy-policy" },
  ],
};
