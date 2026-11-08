/* =====================================================================
   PORTFOLIO CONTENT — edit everything about the site from this file.
   Components read from here; you never need to touch them for content.

   Search for "YOUR_" / "TODO" to find the remaining placeholders.
   ===================================================================== */

/* ---------- Personal info ---------- */
export const personal = {
  name: 'Jerome Oswald Ebenezer J',
  firstName: 'Jerome Oswald',
  greeting: "Hi there, I'm",
  // Cycled by the typing animation in the hero
  roles: [
    'Administrative Professional',
    'Data Analyst',
    'Software Developer',
    'MERN Full Stack Developer',
    'Frontend Developer',
    'Backend Developer',
    'Open Source Contributor',
  ],
  tagline: 'From messy to meaningful. I organize, analyze, and present data so teams can act with confidence.',
  bio: [
    "I’m Jerome Oswald Ebenezer J, a data analyst and administrator based in Dubai, UAE, with a Master’s in Computer Applications and a strong technical foundation in software development.",
    'I design and manage data in MySQL and MongoDB, writing queries, organizing records, and turning raw information into clear reports, while my development background in React and Node.js and design experience in Figma help me build clean, easy-to-read dashboards and tools.',
    "I’m detail-oriented and organized, and I’m eager to support data-driven decisions and smooth operations as part of a dynamic, collaborative team.",
  ],
  location: 'Dubai, UAE',
  phone: '+971 559293231', // shown on the site
  // WhatsApp number: country code + number, digits only (no +, spaces or dashes)
  whatsapp: '971559293231',
  whatsappMessage: "Hi Jerome! I came across your portfolio and I'd love to connect.",
  email: 'jeromeoswald7@gmail.com',
  emailSubject: 'Hello Jerome — enquiry from your portfolio',
  resumeUrl: 'https://drive.google.com/file/d/1geCI4FHJ2ZNjn76kjFYwij6b-9-yl1M1/view?usp=sharing',
  // Photo: replace public/images/profile.webp (640×640) and profile-360.webp (360×360), square crops.
  image: '/images/profile.webp',
  imageSmall: '/images/profile-360.webp',
  imageAlt: 'Portrait of Jerome Oswald Ebenezer J',
};

/* ---------- Social links ----------
   `hero: true` shows the icon in the hero; all of them appear in the footer.
   Valid icon keys: linkedin, github, email, whatsapp, instagram, x            */
export const socials = [
  { label: 'LinkedIn', icon: 'linkedin', url: 'https://www.linkedin.com/in/jerome-oswald-ebenezer-j', hero: true },
  { label: 'GitHub', icon: 'github', url: 'https://github.com/jeromeoswald', hero: true },
  { label: 'Email', icon: 'email', url: `mailto:${personal.email}`, hero: true },
  {
    label: 'WhatsApp',
    icon: 'whatsapp',
    url: `https://wa.me/${personal.whatsapp}?text=${encodeURIComponent(personal.whatsappMessage)}`,
    hero: true,
  },
  { label: 'Instagram', icon: 'instagram', url: 'https://www.instagram.com/jeromeoswald' },
  { label: 'X (Twitter)', icon: 'x', url: 'https://x.com/Jeromeoswald7' },
];

export const githubProfile = 'https://github.com/jeromeoswald';

/* ---------- Navigation (ids must match section ids) ---------- */
export const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'experience', label: 'Work Experience' },
  { id: 'education', label: 'Educational Qualification' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Get in Touch' },
];

/* ---------- Work experience ----------
   TODO: replace these placeholder entries with your real experience.
   Dates use "MM-YYYY" (or "Present"); durations are calculated automatically. */
export const experience = [
  {
    company: 'Drydocks World Dubai',
    role: 'Administrator - Data Analyst',
    location: 'Dubai, UAE · On-site',
    start: '03-2025',
    end: 'Present',
    achievements: [
      'Collect, analyze, validate, and maintain operational data; prepare daily, weekly, and monthly reports, KPI dashboards, and performance analysis using Advanced Excel and Visualization Tools.',
      'Manage operational records, documentation, email correspondence, Minutes of Meetings (MOM), presentations, and maintain accurate and updated reporting records.',
      'Coordinate with foremen, subcontractors, and various departments; monitor welding progress, joint-wise updates, quality and safety observations, and support management in tracking operational performance and improving workflow efficiency.',
    ],
    tags: ['Advanced Excel', 'Power BI', 'MySQL', 'Visualization Tools', 'Data Analysis', 'Reporting', 'Administration'],
  },
  {
    company: 'VDart Technologies',
    role: 'Senior Data Analyst',
    location: 'Tamil Nadu, India',
    start: '08-2024',
    end: '12-2024',
    achievements: [
      'Analyze large datasets, identify trends and patterns, perform data validation, and generate actionable insights to support business decisions and improve operational performance.',
      'Develop interactive dashboards, MIS reports, and KPI performance reports using Advanced Excel, Power BI, and SQL. Prepare daily, weekly, and monthly reports for management.',
      'Manage databases, automate reporting processes, maintain data accuracy, handle data extraction and transformation, and collaborate with cross-functional teams to streamline workflows and improve business efficiency.',
    ],
    tags: ['Advanced Excel', 'Power BI', 'MySQL', 'Visualization Tools', 'Data Analysis', 'Reporting', 'Administration'],
  },
  {
    company: 'Bishop Heber College',
    role: 'Software Developer',
    location: 'Tamil Nadu, India',
    start: '12-2019',
    end: '08-2024',
    achievements: [
      'Developed and implemented scalable ASP.NET web applications using the C and MySQL framework with customer satisfaction and worked with college confidential data.',
      'Applied behavioral psychology principles to understand user behavior and preferences, contributing to more targeted and effective strategies.',
      'Created data visualizations and generated reports that effectively communicated insights and findings to stakeholders, aiding in informed decision-making across the organization.',
    ],
    tags: ['MERN', 'ASP.NET', 'MySQL', 'Visualization Tools', 'Data Analysis', 'Reporting', 'Administration'],
  },
  {
    company: 'Capgemini Technology Services India Limited',
    role: 'Associate',
    location: 'Tamil Nadu, India',
    start: '06-2019',
    end: '11-2019',
    achievements: [
      'Utilized advanced spatial analysis techniques to analyze and interpret geospatial data.',
      'Providing valuable insights and recommendations for decision-making processes.',
    ],
    tags: ['GIS', 'SAP', 'Advanced Excel', 'Data Analysis', 'Reporting', 'Administration'],
  },
];

/* ---------- Education ---------- */
export const education = [
  {
    degree: 'Master of Computer Applications (MCA)',
    institution: 'Bharathidasan University',
    start: '2017',
    end: '2019',
    description: 'Major in Computer Applications, with additional coursework in Data Science, Cloud Computing and Full Stack Development.',
  },
  {
    degree: 'B.Sc. Computer Science',
    institution: 'Bishop Heber College',
    start: '2014',
    end: '2017',
    description: 'Major in Computer Science, with additional courses in Microsoft technologies and UX Design.',
  },
];

/* ---------- Skills (grouped) ---------- */
export const skills = [
  { group: 'Frontend', items: ['React', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'Bootstrap', 'Redux'] },
  { group: 'Backend', items: ['Node.js', 'Express', '.NET', 'Python', 'REST APIs'] },
  { group: 'Databases', items: ['MySQL', 'MongoDB'] },
  { group: 'Tools & Design', items: ['Advanced Excel', 'Git & GitHub', 'Docker', 'AWS', 'Power BI', 'Figma (UI/UX)'] },
];

/* ---------- Certifications ----------
   The first 6 are shown by default; the rest appear after "Show All".
   Put your most impressive certificates at the top.                     */
const drive = (id) => `https://drive.google.com/file/d/${id}/view`;

export const certifications = [
  { title: 'Full Stack Developer', issuer: 'Guvi', url: drive('1QObZds9c5zoOaauZo6oJLsT-tnmYZLUG') },
  { title: 'Python', issuer: 'Guvi · IIT Madras', url: drive('1jZz2GoVLvr72MAtbexzd9kFSQRGVq0aX') },
  { title: 'Data Engineering and Big Data', issuer: 'Guvi', url: drive('11Id_2iiTZOA153MPgV_UE07oIX8G7ViF') },
  { title: 'Mastering Figma: UI/UX Design', issuer: 'Guvi', url: drive('19SzHq_bbO-XpwLeJg9GJoco7uvrd3pBW') },
  { title: 'Data Analytics Essentials', issuer: 'Cisco', url: drive('1LPYYkRSZCn1TxXB17wPz5_CojvoQMWfI') },
  { title: 'AWS', issuer: 'Guvi', url: drive('14sX1XlV620MWr2mZz7ibHHgceNPUNys8') },
  { title: 'React.js', issuer: 'Guvi', url: drive('1KiEINMQ1l6bIzd4qlfbOUJ0oBUuUZRXe') },
  { title: 'Node.js', issuer: 'Guvi', url: drive('1v0HZIad_jiyxqrt_ufyOI2dv3_UFZgFp') },
  { title: 'JavaScript', issuer: 'Guvi', url: drive('1YbWKIMLjmZghpxIZK9ch92_w7pm-vtwd') },
  { title: 'MongoDB', issuer: 'Guvi', url: drive('1Rt93x8-fO2xpCA0JirGC4LYOLiq3p0B4') },
  { title: 'MySQL', issuer: 'Guvi', url: drive('1eAHOJWTQKjYoJCNHTj5E53Qdr_cMtH9C') },
  { title: 'Docker', issuer: 'Programming Hub', url: drive('1EBqG9bE842qdsyEjgHiPIRkHs0NdO43A') },
  { title: 'Fundamentals of DevOps', issuer: 'Guvi', url: drive('1YIyr4S4PJMEsC63JmKXhgLTo9nrbfgXU') },
  { title: 'Git', issuer: 'Guvi', url: drive('1PrHadBWZS4nW6BCgxRQOuhVbbkzbSpim') },
  { title: 'Power BI', issuer: 'Guvi', url: drive('1OzF_IDa645YAYb44wOao1-D2g7YxdlR7') },
  { title: 'UI Fundamentals', issuer: 'Guvi', url: drive('1D8PfePxjWNqzzoEi2A6p4ykJfL7zq3hw') },
  { title: 'UX Fundamentals', issuer: 'Guvi', url: drive('1uHzwM-Qxu7Udm7cAHqPsJVdFSf77lFcw') },
  { title: 'HTML', issuer: 'Guvi', url: drive('1O-ZmYrWRshQp8MRVVKrlPSOkC6s8CuMq') },
  { title: 'CSS', issuer: 'Guvi', url: drive('1J9tkOzcoiRwH9jmp3A0gGWnA_93DmY_A') },
  { title: 'Bootstrap', issuer: 'Guvi', url: drive('1G2QIPPuX1DXw8Mt_RJnQZErrN-ucF9ax') },
  { title: 'MongoDB (Advanced)', issuer: 'Guvi', url: drive('1lPG7qeOIqBp7W3kgc-z7jSViy795h5Nl') },
  { title: 'MySQL (Advanced)', issuer: 'Guvi', url: drive('1LHai0wZeEgwDvukHvKxl6TGWkLQD1KYL') },
  { title: 'ChatGPT for Everyone', issuer: 'Guvi', url: drive('1_mu2l55YvSApUE4re4V2eTtikItdsVXu') },
  { title: 'DALL·E', issuer: 'Guvi', url: drive('1CpsqjF6UGuQrC1kHpiAkQNQqeKbwH5HP') },
  { title: 'SAP Crash Course for Beginners', issuer: 'Guvi', url: drive('1cVdkJbYLI8OCdgINf6NosueeAiQQOezX') },
  { title: 'Computer Hardware Basics', issuer: 'Cisco', url: drive('12IuU52opE6DO0W9Ayy6ielc4aCkuLnTV') },
  { title: 'Microsoft Excel', issuer: 'Guvi', url: drive('1wL2B1RsVGJyd7juVRow8AiAFazt4ZPdQ') },
  { title: 'Microsoft PowerPoint', issuer: 'Guvi', url: drive('1FYftRDz1vVkb1OpNzJtYIiuJ3vhFahJB') },
  { title: 'Microsoft Word', issuer: 'Guvi', url: drive('1L1zI1a77xIOcmVqNfOrRmHJAf3fTEu-g') },
];

export const CERTIFICATES_VISIBLE = 6;

/* ---------- Projects ----------
   liveDemo: leave '' to hide the "Live Demo" button.
   image:    optional — import a screenshot and set it here; otherwise a
             branded gradient cover is generated automatically.            */
export const projects = [
  {
    title: 'URL Shortener',
    description: 'A React app that converts long URLs into short, shareable links with a clean, focused interface.',
    tags: ['React', 'JavaScript', 'CSS'],
    liveDemo: '',
    // TODO: the old site linked to someone else's repo here — replace with your own repository URL
    sourceCode: 'https://github.com/jeromeoswald/YOUR_URL_SHORTENER_REPO',
    lastUpdated: '2024-06-22',
  },
  {
    title: 'Password Reset Flow',
    description: 'Authentication UI in React that handles login credentials and a complete forgot / reset password journey.',
    tags: ['React', 'Node.js', 'MongoDB'],
    liveDemo: '',
    sourceCode: 'https://github.com/jeromeoswald/React/tree/12d4940c031951a499416a2ba41242db5bff0f9a/Password-Reset-Flow',
    lastUpdated: '2024-05-24',
  },
  {
    title: 'Gadget Shopping Cart',
    description: 'A React + Redux shopping cart for electronic gadgets with quantity controls and live price totals.',
    tags: ['React', 'Redux', 'Bootstrap'],
    liveDemo: '',
    sourceCode: 'https://github.com/jeromeoswald/React/tree/ccf4fbb377be2a3026e43cf8425224c0af478332/Redux-Task',
    lastUpdated: '2024-04-24',
  },
  {
    title: 'Todo List',
    description: 'A task manager to add, edit, filter and complete to-dos, built with reusable React components.',
    tags: ['React', 'JavaScript', 'CSS'],
    liveDemo: '',
    sourceCode: 'https://github.com/jeromeoswald/React/tree/e12c814868fe20e7d8863b145f675e6ffc8d24c6/Todo-List-Task',
    lastUpdated: '2024-03-16',
  },
  {
    title: 'Shopping Cart',
    description: 'A product listing with an add-to-cart flow that tracks selected items and the cart count in real time.',
    tags: ['React', 'Bootstrap'],
    liveDemo: '',
    sourceCode: 'https://github.com/jeromeoswald/React/tree/d4df3db98f0fd231aad1afdc83f82ee163b9d638/Day-2Shoping-Cart-main',
    lastUpdated: '2024-01-25',
  },
  {
    title: 'Calculator',
    description: 'A responsive calculator for everyday arithmetic with keyboard support, built with vanilla JavaScript.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    liveDemo: '',
    sourceCode: 'https://github.com/jeromeoswald/Zen-Class/tree/73714e522bd8a9168ccd73f67419b73ea50c4dd1/Class-18/Task-2',
    lastUpdated: '2024-01-20',
  },
  {
    title: 'Feedback Form',
    description: 'An accessible form for collecting user feedback, with client-side validation and a clear layout.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    liveDemo: '',
    sourceCode: 'https://github.com/jeromeoswald/Zen-Class/tree/73714e522bd8a9168ccd73f67419b73ea50c4dd1/Class-18/Task-1',
    lastUpdated: '2023-12-30',
  },
  {
    title: 'Pricing Cards',
    description: 'Responsive pricing-plan cards in React that compare tiers and highlight features at a glance.',
    tags: ['React', 'CSS'],
    liveDemo: '',
    sourceCode: 'https://github.com/jeromeoswald/React/tree/e1812906fe8a38c5655e192ae03d910b1856fb7a/Price-Card-Color',
    lastUpdated: '2023-12-10',
  },
];

/* ---------- SEO / site ---------- */
export const site = {
  url: 'https://YOUR_SITE_URL', // also update index.html meta tags
  footerNote: 'Designed & built with React, Tailwind CSS and Framer Motion.',
};
