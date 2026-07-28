import {
  AfterViewInit,
  Component,
  HostListener,
  OnDestroy,
  OnInit,
} from '@angular/core';

interface Project {
  name: string;
  eyebrow: string;
  summary: string;
  description: string;
  image: string;
  imageAlt: string;
  repositoryUrl: string;
  demoUrl?: string;
  status: string;
  technologies: string[];
  highlights: string[];
}

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
})
export class App implements OnInit, AfterViewInit, OnDestroy {
  readonly projects: Project[] = [
    {
      name: 'GestureOS',
      eyebrow: 'Computer vision · Human–computer interaction',
      summary:
        'Touch-free computer control through real-time hand-gesture recognition.',
      description:
        'GestureOS tracks hand landmarks from a webcam and turns intentional poses into system actions. A hold-time validation layer helps prevent accidental commands while keeping the interaction responsive.',
      image: 'assets/gestureos.png',
      imageAlt: 'GestureOS hand-recognition interface',
      repositoryUrl: 'https://github.com/qetrfd/GestureOS',
      status: 'Prototype in active development',
      technologies: ['Python', 'OpenCV', 'MediaPipe', 'PyAutoGUI'],
      highlights: [
        'Real-time webcam and hand-landmark processing',
        'Configurable gesture detection and activation delays',
        'Modular architecture for adding new system commands',
      ],
    },
    {
      name: 'NANU',
      eyebrow: 'Accessible learning · Interactive web',
      summary:
        'An accessible learning platform with visual, creative and cognitive activities.',
      description:
        'NANU brings together interactive modules for logic, art, fine-motor practice, environmental awareness and cultural exploration. It includes responsive multimedia experiences and interactive 3D models.',
      image: 'assets/nanu.png',
      imageAlt: 'NANU interactive learning platform',
      repositoryUrl: 'https://github.com/qetrfd/NANU',
      demoUrl: 'https://qetrfd.github.io/NANU/',
      status: 'Live web experience',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'model-viewer'],
      highlights: [
        'Seven learning experiences in one platform',
        'Interactive 3D cultural and scientific objects',
        'Responsive interface designed for different devices',
      ],
    },
    {
      name: 'PipBoy Interface',
      eyebrow: 'Embedded systems · HMI',
      summary:
        'A retro-futuristic monitoring dashboard designed for Raspberry Pi.',
      description:
        'A lightweight C++ interface that explores responsive HMI design for embedded hardware. Its layered architecture separates rendering, application logic and hardware interaction so sensors and control modules can be added independently.',
      image: 'assets/pipboy.png',
      imageAlt: 'Retro PipBoy embedded dashboard',
      repositoryUrl: 'https://github.com/qetrfd/PipBoyCPP2026',
      status: 'Early embedded prototype',
      technologies: ['C++', 'Raspberry Pi', 'GPIO', 'Embedded HMI'],
      highlights: [
        'Modular real-time monitoring screens',
        'Architecture prepared for sensors and GPIO devices',
        'Custom boot sequence, audio and retro interface treatment',
      ],
    },
    {
      name: 'Cardinalis',
      eyebrow: 'Local AI · Desktop automation',
      summary:
        'A privacy-minded desktop assistant built around voice and modular agents.',
      description:
        'Cardinalis routes spoken commands through a local core engine to specialized agents for system, file and utility tasks. Context, memory, voice synthesis and desktop tools are kept modular so capabilities can evolve without changing the core.',
      image: 'assets/cardinalis.png',
      imageAlt: 'Cardinalis local AI desktop assistant',
      repositoryUrl: 'https://github.com/qetrfd/Cardinalis',
      status: 'Early alpha',
      technologies: ['Python', 'PyTorch', 'ONNX Runtime', 'PySide6'],
      highlights: [
        'Voice-first computer interaction',
        'Agent-based task routing with contextual memory',
        'Local processing focused on privacy and extensibility',
      ],
    },
  ];

  selectedProject: Project | null = null;
  particles: Array<{
    x: number;
    y: number;
    vx: number;
    vy: number;
    size: number;
  }> = [];
  mouse = { x: 0, y: 0 };

  private animationFrameId = 0;

  ngOnInit(): void {
    const loader = document.getElementById('loader');
    if (loader) {
      loader.style.opacity = '0';
      window.setTimeout(() => loader.remove(), 500);
    }

    this.initParticles();
    this.animateParticles();
  }

  ngAfterViewInit(): void {
    this.initTiltCards();
    this.initProjectGlow();
    this.initProjectGridMotion();
    window.requestAnimationFrame(() => this.revealElements());
  }

  ngOnDestroy(): void {
    window.cancelAnimationFrame(this.animationFrameId);
    document.body.classList.remove('modal-open');
  }

  openProject(project: Project): void {
    this.selectedProject = project;
    document.body.classList.add('modal-open');
    window.setTimeout(() => document.getElementById('project-modal-close')?.focus());
  }

  closeProject(): void {
    this.selectedProject = null;
    document.body.classList.remove('modal-open');
  }

  onModalBackdrop(event: MouseEvent): void {
    if (event.target === event.currentTarget) {
      this.closeProject();
    }
  }

  @HostListener('document:keydown.escape')
  onEscape(): void {
    if (this.selectedProject) {
      this.closeProject();
    }
  }

  initTiltCards(): void {
    const cards = document.querySelectorAll<HTMLElement>('.tilt-card');

    cards.forEach((card) => {
      card.addEventListener('mousemove', (event: MouseEvent) => {
        const rect = card.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = (y - centerY) / 16;
        const rotateY = (centerX - x) / 16;

        card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`;
        card.style.setProperty('--x', `${x}px`);
        card.style.setProperty('--y', `${y}px`);
      });

      card.addEventListener('mouseleave', () => {
        card.style.transform = 'rotateX(0deg) rotateY(0deg) scale(1)';
      });
    });
  }

  initProjectGlow(): void {
    const cards = document.querySelectorAll<HTMLElement>('.project-card');

    cards.forEach((card) => {
      card.addEventListener('mousemove', (event: MouseEvent) => {
        const rect = card.getBoundingClientRect();
        card.style.setProperty('--x', `${event.clientX - rect.left}px`);
        card.style.setProperty('--y', `${event.clientY - rect.top}px`);
      });
    });
  }

  initProjectGridMotion(): void {
    const grids = document.querySelectorAll<HTMLElement>('.projects-grid');

    grids.forEach((grid) => {
      grid.addEventListener('mousemove', (event: MouseEvent) => {
        const rect = grid.getBoundingClientRect();
        const move = (event.clientX - rect.left - rect.width / 2) / 18;
        grid.style.transform = `translateX(${move}px)`;
      });

      grid.addEventListener('mouseleave', () => {
        grid.style.transform = 'translateX(0)';
      });
    });
  }

  @HostListener('window:scroll')
  onScroll(): void {
    this.revealElements();
    this.updateNavbar();
    this.detectSection();
  }

  revealElements(): void {
    const elements = document.querySelectorAll('.reveal');

    elements.forEach((element) => {
      if (element.getBoundingClientRect().top < window.innerHeight - 100) {
        element.classList.add('active');
      }
    });
  }

  updateNavbar(): void {
    const nav = document.getElementById('navbar');

    if (window.scrollY > 50) {
      nav?.classList.add('shadow-lg', 'bg-[#0B0F19]/90');
    } else {
      nav?.classList.remove('shadow-lg', 'bg-[#0B0F19]/90');
    }
  }

  detectSection(): void {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('#navbar a');
    let current = '';

    sections.forEach((section) => {
      if (window.scrollY >= (section as HTMLElement).offsetTop - 200) {
        current = section.getAttribute('id') ?? '';
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove('text-violet-400');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('text-violet-400');
      }
    });
  }

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent): void {
    this.mouse.x = event.clientX;
    this.mouse.y = event.clientY;

    const glow = document.querySelector<HTMLElement>('.cursor-glow');
    if (glow) {
      glow.style.left = `${event.clientX}px`;
      glow.style.top = `${event.clientY}px`;
    }

    const dot = document.querySelector<HTMLElement>('.cursor-dot');
    if (dot) {
      dot.style.left = `${event.clientX}px`;
      dot.style.top = `${event.clientY}px`;
    }

    const hero = document.querySelector<HTMLElement>('#home');
    if (hero) {
      const x = (window.innerWidth / 2 - event.clientX) / 40;
      const y = (window.innerHeight / 2 - event.clientY) / 40;
      hero.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
    }
  }

  initParticles(): void {
    const canvas = document.getElementById('particles') as HTMLCanvasElement | null;
    if (!canvas) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    this.particles = Array.from({ length: 80 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.6,
      vy: (Math.random() - 0.5) * 0.6,
      size: Math.random() * 2 + 1,
    }));

    window.addEventListener('resize', () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    });
  }

  animateParticles(): void {
    const canvas = document.getElementById('particles') as HTMLCanvasElement | null;
    const ctx = canvas?.getContext('2d');
    if (!canvas || !ctx) return;

    const loop = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      this.particles.forEach((particle) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

        const dx = particle.x - this.mouse.x;
        const dy = particle.y - this.mouse.y;
        if (Math.sqrt(dx * dx + dy * dy) < 120) {
          particle.x += dx * 0.02;
          particle.y += dy * 0.02;
        }

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = '#7C3AED';
        ctx.fill();
      });

      this.animationFrameId = window.requestAnimationFrame(loop);
    };

    loop();
  }
}
