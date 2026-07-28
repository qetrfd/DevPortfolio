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
    technologies: ['Swift', 'iOS', 'Camera-based interaction', '3D content', 'App Store deployment'],
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
  logo: 'assets/kuali-logo.png',
  logoAlt: 'Kuali logo',
  description:
    'Contributed to the development of Kuali, an AI-powered accessibility platform focused on improving communication, learning and digital accessibility through mobile and web technologies. Worked across multiple areas of the product, including frontend development, backend services, AI integration, cloud infrastructure and user experience improvements.',
  contributions: [
    'Designed and developed the main web platform.',
    'Designed and implemented the administrative dashboard used to manage platform content and services.',
    'Developed a significant portion of the Android application.',
    'Participated in the development of the iOS application.',
    'Designed and implemented AI-powered features for both web and mobile platforms.',
    'Integrated conversational AI into the user experience.',
    'Implemented authentication, cloud services and backend communication.',
    'Developed REST API integrations.',
    'Worked with Firebase services for authentication, cloud storage and databases.',
    'Implemented OCR and document processing workflows.',
    'Developed features for educational content management.',
    'Participated in testing, debugging, deployment and product maintenance.',
    'Improved accessibility-focused interfaces and user experience.',
    'Collaborated across frontend, backend and AI development.',
  ],
  technologies: [
    'Java',
    'Swift',
    'JavaScript',
    'TypeScript',
    'HTML',
    'CSS',
    'Node.js',
    'Firebase',
    'Firebase Authentication',
    'Cloud Firestore',
    'Firebase Storage',
    'Firebase Hosting',
    'Firebase App Check',
    'Google Cloud Run',
    'REST APIs',
    'JWT Authentication',
    'OCR',
    'Computer Vision',
    'Conversational AI',
    'AI API Integration',
    'Prompt Engineering',
  ],
  note:
    'Kuali is a private commercial product. Technical implementation details and source code are not publicly available.',
};

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
