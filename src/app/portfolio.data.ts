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
  repositoryNote?: string;
}

export interface Experience {
  role: string;
  organization: string;
  label: string;
  description: string;
  contributions: string[];
  technologies: string[];
}

export interface Achievement {
  title: string;
  project: string;
  platform?: string;
  marker: string;
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
    badge: ['3rd Place — Mexico City Hackathon'],
    status: 'Inclusive iOS application',
    featured: true,
    award: '3rd Place — Mexico City Hackathon',
    primaryLanguage: 'Swift',
  },
  {
    title: 'ABLE',
    description:
      'An inclusive mobile platform for autonomy, communication and coordinated support for neurodivergent people.',
    longDescription: [
      'ABLE is an inclusive mobile application designed to strengthen the autonomy, communication and support of neurodivergent people through accessible and easy-to-use tools.',
      'The platform brings together pictogram and voice-based communication, routine tracking, access to support networks, microjobs and customizable settings designed to adapt to different user needs.',
      'ABLE also includes a differentiated experience for volunteers, allowing them to create more detailed profiles, manage support activities, monitor routines and visualize the impact of their assistance.',
      'As part of its accessibility approach, ABLE incorporates features such as large text, accessible mode, haptic feedback and eye-tracking-assisted navigation, aiming to make interaction more natural, safe and intuitive for each user.',
    ],
    features: [
      'Pictogram-based communication',
      'Voice-assisted communication',
      'Routine tracking',
      'Support networks',
      'Microjobs',
      'Personalized accessibility settings',
      'Dedicated volunteer experience',
      'Volunteer profile management',
      'Support activity management',
      'Routine monitoring',
      'Volunteer impact visualization',
      'Large text',
      'Accessible mode',
      'Haptic feedback',
      'Eye-tracking-assisted navigation',
      'Inclusive and adaptive user experience',
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
  },
  {
    title: 'NANU',
    description:
      'A published iOS application developed with Swift and released on the Apple App Store.',
    longDescription: [
      'A published iOS application developed with Swift and released on the Apple App Store. NANU represents experience taking a mobile product beyond development and into a public production release.',
    ],
    features: [],
    technologies: ['Swift', 'iOS', 'App Store deployment'],
    repositoryUrl: 'https://github.com/qetrfd/NANU',
    websiteUrl: 'https://qetrfd.github.io/NANU/',
    badge: ['Available on the App Store', 'iOS Application'],
    status: 'Published application',
    featured: true,
    award: 'Published iOS Application',
    primaryLanguage: 'Swift',
    repositoryNote:
      'The public repository currently contains NANU’s HTML website experience; the App Store URL is not published there.',
  },
  {
    title: 'PipBoyCPP2026',
    description:
      'An interactive Pip-Boy-inspired interface developed in C++ for Raspberry Pi 5.',
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
  },
];

export const PROFESSIONAL_EXPERIENCE: Experience = {
  role: 'Software Developer',
  organization: 'Kuali',
  label: 'Private Product',
  description:
    'Contributed to the development of a cross-platform accessibility-focused software product available across mobile and web environments. My work has involved application development, AI-assisted functionality, cloud service integration, accessibility improvements, testing and deployment.',
  contributions: [
    'Developed and maintained features across mobile and web environments.',
    'Integrated cloud services, authentication and external APIs.',
    'Worked with AI-assisted functionality and conversational interfaces.',
    'Improved accessibility-focused interfaces and user experiences.',
    'Participated in testing, debugging, deployment and product maintenance.',
    'Contributed to Android, iOS and web development workflows.',
  ],
  technologies: [
    'Java',
    'Swift',
    'JavaScript',
    'Firebase',
    'Firestore',
    'Firebase Authentication',
    'Cloud Storage',
    'Cloud Run',
    'REST APIs',
    'Node.js',
    'AI API integration',
  ],
};

export const ACHIEVEMENTS: Achievement[] = [
  {
    title: '3rd Place — Mexico City Hackathon',
    project: 'KIVO',
    marker: '03',
  },
  {
    title: 'Winning Project — Tecmilenio Competition',
    project: 'ABLE',
    marker: 'W',
  },
  {
    title: 'Published iOS Application',
    project: 'NANU',
    platform: 'Apple App Store',
    marker: 'iOS',
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Languages',
    description: 'Programming and web languages used across product development.',
    skills: ['C++', 'Java', 'JavaScript', 'TypeScript', 'Python', 'Swift', 'HTML', 'CSS'],
  },
  {
    title: 'Mobile Development',
    description: 'Native iOS and Android development tools and platform capabilities.',
    skills: [
      'SwiftUI',
      'UIKit',
      'Android SDK',
      'iOS SDK',
      'Xcode',
      'Android Studio',
      'MapKit',
      'Core Location',
      'AVFoundation',
      'AVSpeechSynthesizer',
      'Vision',
      'Core ML',
      'Haptic Feedback',
      'Apple Accessibility APIs',
    ],
  },
  {
    title: 'Web Development',
    description: 'Responsive frontend and API-connected web experiences.',
    skills: [
      'HTML5',
      'CSS3',
      'JavaScript',
      'TypeScript',
      'Node.js',
      'Express.js',
      'REST APIs',
      'Responsive Web Design',
      'GitHub Pages',
    ],
  },
  {
    title: 'Cloud & Backend',
    description: 'Cloud services, identity, storage and backend integration.',
    skills: [
      'Firebase',
      'Firebase Authentication',
      'Cloud Firestore',
      'Firebase Storage',
      'Firebase Hosting',
      'Firebase App Check',
      'Google Cloud Run',
      'REST API integration',
      'JWT authentication',
    ],
  },
  {
    title: 'Artificial Intelligence',
    description: 'Applied AI, vision and local inference workflows.',
    skills: [
      'AI API integration',
      'Conversational AI',
      'Prompt engineering',
      'OCR pipelines',
      'Computer vision',
      'Local LLM inference',
      'GGUF models',
      'llama.cpp',
      'Retrieval-based systems',
    ],
  },
  {
    title: 'Tools & Platforms',
    description: 'Development, deployment and hardware platforms.',
    skills: [
      'Git',
      'GitHub',
      'Visual Studio Code',
      'Xcode',
      'Android Studio',
      'Raspberry Pi',
      'App Store deployment',
      'Google Play Console',
      'Firebase Console',
      'Google Cloud Console',
    ],
  },
];
