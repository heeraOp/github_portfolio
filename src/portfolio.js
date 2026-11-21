const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://github.com/heeraOp/',
  title: 'WHS.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Wahengbam Heramani Singh',
  role: 'B.Tech CSE Student',
  picture: 'profile.jpg',

  description:
    'I am a Computer Science and Engineering student at NIT Manipur, passionate about software development, cybersecurity, and artificial intelligence. I enjoy building practical technology solutions, exploring new tools and technologies, and turning ideas into working projects. Through hands-on development and hackathon experiences, I continuously challenge myself to learn, solve problems, and grow as an engineer.',
  resume: `${process.env.PUBLIC_URL}/Wahengbam_Heramani_Singh_Resume.pdf`,
  sponsor: 'https://github.com/sponsors/heeraOp/button',
  social: {
    linkedin:
      'https://www.linkedin.com/in/wahengbam-heeramani-singh-6648263a3',
    github: 'https://github.com/heeraOp/',
  },
  education: {
    degree: 'B.Tech Computer Science & Engineering',
    institute: 'National Institute of Technology Manipur',
    year: '2025–2029 (3rd Semester)',
    cgpa: '8.33/10',
    location: 'NIT Manipur, India',
  },
  headlines: [
    'Software Developer',
    'Cybersecurity Enthusiast',
    'AI & Technology Builder',
  ],
  techBadges: ['python', 'javascript', 'django', 'react', 'docker', 'git'],
  terminalCard: true,
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'PAANGBA — AI-Assisted Financial Access & Lender-Matching Platform',
    description:
      'A platform connecting citizens seeking financial assistance with relevant private companies through consent-based information sharing, with work exploring document verification, forgery detection, and vernacular AI model fine-tuning.',
  },
  {
    name: 'HOUSIE — Real-Time Multiplayer Gaming Platform',
    description:
      'A real-time multiplayer gaming platform with automated gameplay, ticket management, and prize validation, deployed on a Linux VPS with secure access.',
    stack: ['Django', 'React', 'WebSockets'],
  },
  {
    name: 'Coaching Website — Serverless Content Management Platform',
    description:
      'A platform where students access learning materials and teachers upload and manage PDFs, images, and other educational resources, using Google Drive for file storage and Google Sheets for structured data and activity logging.',
    stack: ['Google Drive', 'Google Sheets'],
    sourceCode: 'https://github.com/heeraOp/scigenesis-coaching',
  },
  {
    name: 'Offline Mesh Communication for Disaster Relief Camps',
    description:
      'A disaster-relief communication project that connects nearby relief camps through an offline mesh network, allowing important information to be shared and forwarded between camps when internet connectivity breaks down.',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'Python',
  'JavaScript',
  'TypeScript',
  'Django',
  'React',
  'PostgreSQL',
  'Docker',
  'Redis',
  'RAG',
  'Ollama',
  'Git',
  'Linux VPS',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'iamalldestitute@gmail.com',
  sponsorCard: 'https://github.com/sponsors/heeraOp/card',
}

export { header, about, projects, skills, contact }