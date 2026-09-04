export interface Project {
  title: string;
  description: string;
  longDescription: string[];
  features: string[];
  technologies: string[];
  repositoryUrl?: string;
  liveUrl?: string;
  appStoreUrl?: string;
  websiteUrl?: string;
  badge: string[];
  status: string;
  featured: boolean;
  award?: string;
  primaryLanguage: string;
  secondaryLabel?: string;
  eventCoverageUrl?: string;
  eventImage?: string;
  eventImageAlt?: string;
  repositoryNote?: string;
  logo?: string;
  logoAlt?: string;
}

export interface Experience {
  role: string;
  organization: string;
  label: string;
  logo?: string;
  logoAlt?: string;
  websiteUrl?: string;
  description: string;
  contributions: string[];
  technologies: string[];
  note: string;
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: string[];
}

export const PROJECTS: Project[] = [
  {
    title: 'KIVO',
    description:
      'An inclusive, AI-supported mobile application that makes recycling and environmental decisions easier to understand and act on.',
    longDescription: [
      'KIVO is an inclusive application that uses artificial intelligence to help people make better environmental decisions. It allows users to scan objects, waste and logos to identify how they can be reused, recycled or taken to a nearby collection center.',
      'The application includes Milo, a virtual assistant that guides users through voice-based support and accessible instructions. KIVO also provides MapKit-powered routes, weekly, monthly and annual environmental impact tracking, challenges, microjobs, community tools and a rewards system.',
      'KIVO turns small everyday actions into sustainable habits, making recycling simpler, easier to understand and more accessible for everyone.',
      'KIVO was developed by Team TrustTheCode for the Waste Challenge at the Swift Changemakers Hackathon 2026, where the project earned third place.',
    ],
    features: [
      'AI-powered object, waste and logo scanning',
      'Reuse and recycling recommendations',
      'Nearby collection center guidance',
      'Milo virtual assistant',
      'Voice-based accessible instructions',
      'MapKit routes and location-based navigation',
      'Weekly, monthly and annual environmental impact tracking',
      'Sustainability challenges',
      'Microjobs',
      'Community tools',
      'Rewards system',
      'Accessibility-focused user experience',
    ],
    technologies: [
      'Swift',
      'SwiftUI',
      'Foundation Models',
      'Core ML',
      'Vision',
      'ARKit',
      'MapKit',
      'Core Location',
      'Speech',
      'AVFoundation',
    ],
    repositoryUrl: 'https://github.com/qetrfd/KIVO',
    badge: ['3rd Place — Swift Changemakers Hackathon 2026'],
    status: 'Inclusive iOS application',
    featured: true,
    award: '3rd Place — Swift Changemakers Hackathon 2026',
    primaryLanguage: 'Swift',
    secondaryLabel: 'Waste Challenge · Team TrustTheCode · Tecmilenio',
    eventCoverageUrl: 'https://cmlab.org/',
    eventImage: 'assets/swift-changemakers-trustthecode-2026.jpg',
    eventImageAlt: 'Team TrustTheCode at the Swift Changemakers Hackathon 2026',
    logo: 'assets/kivo-logo.png',
    logoAlt: 'KIVO app logo',
  },
  {
    title: 'ABLE',
    description:
      'An inclusive mobile application that helps people with motor difficulties communicate, organize routines and navigate everyday support more independently.',
    longDescription: [
      'ABLE is an inclusive mobile application designed for people with motor difficulties. It supports communication, routine organization, access to microjobs and connection with a support network. Eye-tracking-assisted navigation allows users to move through the interface and select controls using their gaze, alongside large text, accessible mode and haptic feedback.',
      'A dedicated volunteer space helps volunteers provide support, manage assistance routines and review the impact of their actions. ABLE aims to promote autonomy, participation and a more accessible daily life.',
    ],
    features: [
      'Accessible communication',
      'Routine organization',
      'Microjobs and support network',
      'Eye-tracking-assisted navigation',
      'Large text and accessible mode',
      'Haptic feedback',
      'Dedicated volunteer support space',
      'Support routine management',
      'Volunteer impact overview',
    ],
    technologies: [
      'Swift',
      'SwiftUI',
      'SwiftData',
      'AVFoundation',
      'Speech',
      'ARKit',
      'SceneKit',
      'UIKit haptics',
    ],
    repositoryUrl: 'https://github.com/qetrfd/ABLE',
    badge: ['Winning Project — Tecmilenio'],
    status: 'Inclusive iOS application',
    featured: true,
    award: 'Winning Project — Tecmilenio',
    primaryLanguage: 'Swift',
    logo: 'assets/able-logo.png',
    logoAlt: 'ABLE app logo',
  },
  {
    title: 'NANU',
    description:
      'A published inclusive iOS application with short, visual and guided learning experiences for children and families.',
    longDescription: [
      'NANU is a published inclusive iOS application designed for children and families to learn at their own pace through short, visual and guided experiences.',
      'It brings communication, logic, creativity, culture and exploration into one clear and friendly interface. Six focused modules encourage active learning through immediate feedback, short challenges and visible progress.',
      'Developed for iOS with Swift and released on the Apple App Store, NANU represents experience taking a product from concept and development to a public production release.',
    ],
    features: [
      'Short, visual and guided learning modules',
      'Sign-language alphabet practice with camera-based hand recognition',
      'Logic, patterns and visual memory challenges',
      'Interactive 3D cultural exploration',
      'Digital drawing and creative activities',
      'Guided number tracing',
      'Immediate feedback and visible progress',
    ],
    technologies: [
      'Swift',
      'iOS',
      'Camera-based interaction',
      '3D content',
      'App Store deployment',
    ],
    repositoryUrl: 'https://github.com/qetrfd/NANU',
    websiteUrl: 'https://qetrfd.github.io/NANU/',
    badge: ['Published on the Apple App Store', 'iOS Application', 'Accessibility Focused'],
    status: 'Published iOS application',
    featured: true,
    award: 'Published iOS Application',
    primaryLanguage: 'Swift',
    repositoryNote:
      'The official website documents NANU’s product experience. Its public repository contains the website, while the App Store URL is not published there.',
    logo: 'assets/nanu-logo.png',
    logoAlt: 'NANU app logo',
  },
  {
    title: 'PipBoyCPP2026',
    description: 'An interactive Pip-Boy-inspired interface developed in C++ for Raspberry Pi 5.',
    longDescription: [
      'An interactive Pip-Boy-inspired interface developed in C++ for Raspberry Pi 5. The project explores embedded interfaces, physical computing and software designed for dedicated hardware.',
    ],
    features: [],
    technologies: ['C++', 'Raspberry Pi 5', 'SDL2', 'SDL_image', 'SDL_ttf', 'SDL_mixer', 'libcurl'],
    repositoryUrl: 'https://github.com/qetrfd/PipBoyCPP2026',
    badge: ['Work in Progress', 'In Development'],
    status: 'In Development',
    featured: true,
    primaryLanguage: 'C++',
    logo: 'assets/pipboy-logo.png',
    logoAlt: 'PipBoyCPP2026 project artwork',
  },
];

export const PROFESSIONAL_EXPERIENCE: Experience = {
  role: 'Co-Founder & CTO',
  organization: 'Kuali',
  label: 'Inclusive AI-powered EdTech',
  logo: 'assets/kuali-logo.png',
  logoAlt: 'Kuali logo',
  websiteUrl: 'https://kualiedu.com.mx',
  description:
    'Kuali is an inclusive AI-powered educational technology ecosystem focused on personalized and accessible learning. As Co-Founder & CTO, I lead its technology development across AI, adaptive learning, web and mobile platforms, cloud infrastructure, accessibility and educational tools.',
  contributions: [
    'Designed and developed the main web platform and administrative dashboard.',
    'Developed Android experiences and contributed to the iOS application.',
    'Integrated AI, conversational experiences, OCR and educational tools.',
    'Implemented authentication, cloud services and REST API integrations.',
    'Improved accessibility through testing, deployment and product maintenance.',
  ],
  technologies: ['AI', 'Web & Mobile', 'Cloud Infrastructure', 'Accessibility'],
  note: 'Kuali is a private commercial product. Technical implementation details and source code are not publicly available.',
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Programming Languages',
    description: 'Software, mobile applications and embedded programming.',
    skills: [
      'Python',
      'C++',
      'C#',
      'Rust',
      'Swift',
      'Kotlin',
      'Java',
      'JavaScript',
      'TypeScript',
      'Embedded C',
    ],
  },
  {
    title: 'Web & Mobile',
    description: 'Accessible experiences across browsers and native platforms.',
    skills: ['Angular', 'SwiftUI', 'iOS', 'Android', 'HTML', 'CSS'],
  },
  {
    title: 'Cloud & Databases',
    description: 'Connected products, persistent data and cloud services.',
    skills: ['Firebase', 'Supabase', 'Google Cloud Platform', 'SQL', 'REST APIs'],
  },
  {
    title: 'AI & Intelligent Systems',
    description: 'Applied intelligence and personalized learning experiences.',
    skills: ['Generative AI', 'LLM Integration', 'Local AI', 'OCR', 'Adaptive Learning'],
  },
  {
    title: 'Engineering',
    description: 'Bringing software, hardware and intelligent systems together.',
    skills: ['Robotics', 'Embedded Systems', 'Mechatronics', 'Industrial Automation'],
  },
];
