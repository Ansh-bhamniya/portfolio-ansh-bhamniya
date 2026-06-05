export interface Experience {
  slug: string
  number: string
  company: string
  role: string
  period: string
  tagline: string
  imgSrc: string
  websiteUrl: string
  highlights: string[]
  description: string
  stack: string[]
}

export const experiences: Experience[] = [
  {
    slug: 'railse',
    number: '01',
    company: 'Railse',
    role: 'Software Developer',
    period: 'June 2025 – July 2025',
    tagline: 'Built core features for Railse\'s admin app, enabling teams to manage and track logistics orders from a single dashboard.',    
    imgSrc:
      'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80&auto=format&fit=crop',
    websiteUrl: 'https://www.railse.com/',
    highlights: [
      'Company Admin App for orders & delivery partners',
      'Real-time WebSocket chat with saved history',
      'Receipt flows, WhatsApp updates & bulk notifications',
      'Secure file handling & order tracking sync',
    ],
    description: `During my time at Railse, I worked on the company's core Admin App, which manages day-to-day operations across orders, delivery partners, and customer communication. I built real-time chat using WebSockets with saved chat history, enabling seamless coordination between teams and clients.

My work also included creating receipt-generation flows, WhatsApp-based delivery updates, payment breakdowns, and bulk-notification systems that improved operational efficiency. I optimized data handling by implementing secure file-injection protection and integrated backend logic for reliable order tracking, customer engagement, and delivery system syncing.`,
    stack: ['WebSockets', 'Node.js', 'Admin Dashboards', 'WhatsApp APIs', 'Order Management'],
  },
  {
    slug: 'techspr',
    number: '02',
    company: 'TechSPR Private Limited',
    role: 'App Developer',
    period: 'April 2025 – June 2025',
    tagline: 'Developed the consumer-facing experience for a quick-commerce platform with seamless onboarding, secure payments, and an intuitive shopping journey.',
    imgSrc:
      'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80&auto=format&fit=crop',
    websiteUrl: 'https://techspr.net/',
    highlights: [
      'Full quick-commerce app in Flutter + responsive web',
      'BLoC architecture & Firebase OTP authentication',
      'Stripe payment flow end-to-end',
      'GoMaps real-time tracking & MongoDB backend',
    ],
    description: `At TechSPR, I developed a full quick-commerce application in Flutter that also worked seamlessly on web using responsive design. I implemented BLoC architecture for maintainable state management and integrated Firebase Authentication with OTP verification for secure onboarding.

I also built the entire payment flow using Stripe, ensuring a smooth and trustworthy checkout experience. A major part of the project involved adding real-time delivery partner tracking using GoMaps API (100M+ location points) and designing backend interactions with MongoDB for persistent storage. This internship strengthened my ability to build scalable, high-performance consumer applications end-to-end.`,
    stack: ['Flutter', 'BLoC', 'Firebase Auth', 'Stripe', 'GoMaps API', 'MongoDB'],
  },
  {
    slug: 'dhadkan',
    number: '03',
    company: 'Dhadkan App (AIIMS Delhi + IIT Roorkee)',
    role: 'Lead Developer',
    period: 'Nov 2024 – April 2025',
    tagline: 'Collected and managed data from 400+ patients through a real-time cardiology app developed by AIIMS Delhi and IIT Roorkee.',
    imgSrc: '/images/dhadkan_v2.png',
    websiteUrl: 'https://compbio.iitr.ac.in/Dhadkan/login',
    highlights: [
      'Doctor–patient messaging & medical timelines',
      'AssemblyAI real-time voice transcription (SSE)',
      'Offline-first sync architecture',
      'Vitals dashboards (SBP, DBP, weight)',
    ],
    description: `Dhadkan is a real-time cardiology communication platform built for doctors and cardiac patients to manage treatment more effectively. I led the development of the entire app ecosystem, designing a system where patients can upload medical reports, track vitals, and communicate directly with doctors through socket-based real-time messaging.

Doctors can prescribe medicines, update patient histories, and view complete medical timelines with timestamps, making it easier to monitor long-term health data. I integrated AssemblyAI's real-time voice transcription (SSE) to help patients speak their symptoms naturally while converting them into structured notes.

To ensure uninterrupted usage, I built an offline-first architecture where patient data is saved locally and synced when the user reconnects. The app also visualizes key vitals like SBP, DBP, and weight through intuitive graph dashboards. Using Flutter, Express.js, and MongoDB, I engineered a secure, scalable healthcare system aimed at improving remote care, faster diagnosis, and medical accessibility for cardiac patients.`,
    stack: ['Flutter', 'Express.js', 'MongoDB', 'WebSockets', 'AssemblyAI', 'Offline-first'],
  },
  {
    slug: 'quddle',
    number: '04',
    company: 'Quddle.ai',
    role: 'Founding Engineer',
    period: 'Sep 2025 – Present',
    tagline: 'Led the end-to-end development of a mobile app for Tier 2 and Tier 3 cities, combining audio/video calls, reels, and a marketplace into one platform.',
    imgSrc:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80&auto=format&fit=crop',
    websiteUrl: 'https://quddle.ai/',
    highlights: [
      'Real-time chat for deals, reels & marketplace listings',
      'Admin tools for pricing, orders & negotiations',
      'Flutter BLoC architecture at scale',
      'AWS EC2, S3 & elemental converters for streaming',
    ],
    description: `At Quddle.ai, I worked as a Tech Lead responsible for architecting and building multiple core modules of the platform, including the real-time chat system, admin communication tools, and live-streaming workflows. I engineered the app using Flutter with BLoC for scalable state management and coordinated closely with backend teams to align product flows with business needs.

My work included developing the end-to-end chat feature where customers and businesses interact about deals, reels, and marketplace listings, along with building the admin interface that allows Quddle's internal team to communicate with businesses about pricing, orders, and negotiations.

I also contributed to integrating AWS infrastructure—EC2 for backend deployment, S3 buckets for media storage, and elemental converters for bitrate management—to support upcoming livestreaming and video features. Throughout the project, I operated at the intersection of engineering and product, shaping user flows, improving system reliability, and driving decisions that moved the product closer to launch.`,
    stack: ['Flutter', 'BLoC', 'AWS EC2', 'AWS S3', 'Real-time Chat', 'Live Streaming'],
  },
]

export function getExperienceBySlug(slug: string): Experience | undefined {
  return experiences.find((e) => e.slug === slug)
}
