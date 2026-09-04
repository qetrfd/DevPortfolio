import { AfterViewInit, Component, HostListener, OnDestroy } from '@angular/core';
import {
  PROFESSIONAL_EXPERIENCE,
  PROJECTS,
  Project,
  SKILL_CATEGORIES,
} from './portfolio.data';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
})
export class App implements AfterViewInit, OnDestroy {
  readonly projects = PROJECTS;
  readonly experience = PROFESSIONAL_EXPERIENCE;
  readonly skillCategories = SKILL_CATEGORIES;
  readonly languageSkills = SKILL_CATEGORIES[0].skills;
  readonly primarySkillCategories = SKILL_CATEGORIES.slice(0, 2);
  readonly specializedSkillCategories = SKILL_CATEGORIES.slice(2);
  readonly kpmgCoverageUrl =
    'https://kpmg.com/mx/es/sala-de-prensa/comunicados-de-prensa/2026/08/cp-emprendimiento-de-impacto-con-proposito-e-inteligencia-artificial-kuali-gana-la-competencia-nacional-enactus-2026.html';
  readonly email = 'ferhsantillan@gmail.com';
  readonly githubUrl = 'https://github.com/qetrfd';
  readonly cvUrl = 'assets/Fernando_Santillan_CV_2026.pdf';
  readonly currentYear = new Date().getFullYear();
  readonly navigation = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Contact', href: '#contact' },
  ];

  readonly skillIcons: Record<string, string> = {
    'C#': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg',
    Rust: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rust/rust-original.svg',
    Kotlin: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg',
    'Embedded C': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg',
    'C++': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg',
    Java: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
    JavaScript:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
    TypeScript:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
    Python: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
    Swift: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg',
    HTML: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
    HTML5: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
    CSS: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
    CSS3: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
    Angular:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg',
    Tailwind:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg',
    SwiftUI: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg',
    UIKit: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apple/apple-original.svg',
    iOS: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apple/apple-original.svg',
    Android: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg',
    'Android SDK':
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg',
    'Node.js':
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
    'Express.js':
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
    Firebase:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-original.svg',
    Git: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
    GitHub: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
    Xcode: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/xcode/xcode-original.svg',
    'Android Studio':
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/androidstudio/androidstudio-original.svg',
    'Visual Studio Code':
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg',
    'Raspberry Pi':
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/raspberrypi/raspberrypi-original.svg',
  };

  selectedProject: Project | null = null;
  isMenuOpen = false;
  emailCopied = false;

  private particles: Particle[] = [];
  private mouse = { x: -1000, y: -1000 };
  private animationFrameId = 0;
  private canvas: HTMLCanvasElement | null = null;
  private context: CanvasRenderingContext2D | null = null;
  private prefersReducedMotion = false;
  private previouslyFocusedElement: HTMLElement | null = null;
  private copiedTimeoutId: number | null = null;

  ngAfterViewInit(): void {
    if (navigator.userAgent.toLowerCase().includes('jsdom')) {
      return;
    }

    this.prefersReducedMotion =
      window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false;
    this.canvas = document.getElementById('particles') as HTMLCanvasElement | null;
    this.context = this.canvas?.getContext('2d') ?? null;
    this.resizeParticles();
    this.createParticles();

    if (this.prefersReducedMotion) {
      this.drawParticles();
    } else {
      this.animateParticles();
    }
  }

  ngOnDestroy(): void {
    window.cancelAnimationFrame(this.animationFrameId);
    document.body.classList.remove('modal-open');
    if (this.copiedTimeoutId !== null) {
      window.clearTimeout(this.copiedTimeoutId);
    }
  }

  openProject(project: Project): void {
    this.previouslyFocusedElement = document.activeElement as HTMLElement | null;
    this.selectedProject = project;
    document.body.classList.add('modal-open');
    window.setTimeout(() => document.getElementById('project-modal-close')?.focus());
  }

  closeProject(): void {
    this.selectedProject = null;
    document.body.classList.remove('modal-open');
    window.setTimeout(() => this.previouslyFocusedElement?.focus());
  }

  onModalBackdrop(event: MouseEvent): void {
    if (event.target === event.currentTarget) {
      this.closeProject();
    }
  }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu(): void {
    this.isMenuOpen = false;
  }

  copyEmail(): void {
    this.emailCopied = true;
    if (this.copiedTimeoutId !== null) {
      window.clearTimeout(this.copiedTimeoutId);
    }
    this.copiedTimeoutId = window.setTimeout(() => {
      this.emailCopied = false;
    }, 2200);

    if (navigator.clipboard?.writeText) {
      void navigator.clipboard.writeText(this.email).catch(() => this.copyEmailWithFallback());
      return;
    }

    this.copyEmailWithFallback();
  }

  updateCardGlow(event: MouseEvent): void {
    const card = event.currentTarget as HTMLElement;
    const rect = card.getBoundingClientRect();
    card.style.setProperty('--pointer-x', `${event.clientX - rect.left}px`);
    card.style.setProperty('--pointer-y', `${event.clientY - rect.top}px`);
  }

  skillInitials(skill: string): string {
    return skill
      .split(/[\s.&+-]+/)
      .filter(Boolean)
      .slice(0, 2)
      .map((word) => word[0]?.toUpperCase())
      .join('');
  }

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent): void {
    this.mouse.x = event.clientX;
    this.mouse.y = event.clientY;

    const root = document.documentElement;
    root.style.setProperty('--cursor-x', `${event.clientX}px`);
    root.style.setProperty('--cursor-y', `${event.clientY}px`);
  }

  @HostListener('window:resize')
  onResize(): void {
    this.resizeParticles();
    this.createParticles();
    if (this.prefersReducedMotion) {
      this.drawParticles();
    }
  }

  @HostListener('document:keydown', ['$event'])
  trapModalFocus(keyEvent: Event): void {
    const event = keyEvent as KeyboardEvent;
    if (!this.selectedProject || event.key !== 'Tab') return;
    const controls = document.querySelectorAll<HTMLElement>(
      '.project-modal button, .project-modal a[href]',
    );
    const first = controls[0];
    const last = controls[controls.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last?.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first?.focus();
    }
  }

  @HostListener('document:keydown.escape')
  onEscape(): void {
    if (this.selectedProject) {
      this.closeProject();
      return;
    }
    this.closeMenu();
  }

  private resizeParticles(): void {
    if (!this.canvas) return;
    const ratio = Math.min(window.devicePixelRatio || 1, 2);
    this.canvas.width = Math.floor(window.innerWidth * ratio);
    this.canvas.height = Math.floor(window.innerHeight * ratio);
    this.canvas.style.width = `${window.innerWidth}px`;
    this.canvas.style.height = `${window.innerHeight}px`;
    this.context?.setTransform(ratio, 0, 0, ratio, 0, 0);
  }

  private createParticles(): void {
    const count = Math.min(95, Math.max(38, Math.floor(window.innerWidth / 18)));
    this.particles = Array.from({ length: count }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      vx: (Math.random() - 0.5) * 0.42,
      vy: (Math.random() - 0.5) * 0.42,
      size: Math.random() * 2.2 + 0.8,
      opacity: Math.random() * 0.55 + 0.35,
    }));
  }

  private animateParticles(): void {
    const loop = () => {
      this.updateParticles();
      this.drawParticles();
      this.animationFrameId = window.requestAnimationFrame(loop);
    };
    loop();
  }

  private updateParticles(): void {
    for (const particle of this.particles) {
      particle.x += particle.vx;
      particle.y += particle.vy;

      if (particle.x < -10) particle.x = window.innerWidth + 10;
      if (particle.x > window.innerWidth + 10) particle.x = -10;
      if (particle.y < -10) particle.y = window.innerHeight + 10;
      if (particle.y > window.innerHeight + 10) particle.y = -10;

      const dx = particle.x - this.mouse.x;
      const dy = particle.y - this.mouse.y;
      const distanceSquared = dx * dx + dy * dy;
      if (distanceSquared > 0 && distanceSquared < 18000) {
        const force = (18000 - distanceSquared) / 18000;
        const distance = Math.sqrt(distanceSquared);
        particle.x += (dx / distance) * force * 2.4;
        particle.y += (dy / distance) * force * 2.4;
      }
    }
  }

  private drawParticles(): void {
    if (!this.context) return;
    this.context.clearRect(0, 0, window.innerWidth, window.innerHeight);

    for (const particle of this.particles) {
      this.context.beginPath();
      this.context.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
      this.context.fillStyle = `rgba(139, 92, 246, ${particle.opacity})`;
      this.context.shadowColor = 'rgba(167, 139, 250, 0.75)';
      this.context.shadowBlur = 9;
      this.context.fill();
    }

    this.context.shadowBlur = 0;
  }

  private copyEmailWithFallback(): void {
    const input = document.createElement('textarea');
    input.value = this.email;
    input.setAttribute('readonly', '');
    input.style.position = 'fixed';
    input.style.opacity = '0';
    document.body.appendChild(input);
    input.select();
    document.execCommand('copy');
    input.remove();
  }
}
