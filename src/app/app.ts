import { Component, HostListener } from '@angular/core';
import {
  ACHIEVEMENTS,
  PROFESSIONAL_EXPERIENCE,
  PROJECTS,
  Project,
  SKILL_CATEGORIES,
} from './portfolio.data';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
})
export class App {
  readonly projects = PROJECTS;
  readonly experience = PROFESSIONAL_EXPERIENCE;
  readonly achievements = ACHIEVEMENTS;
  readonly skillCategories = SKILL_CATEGORIES;
  readonly email = 'ferhsantillan@gmail.com';
  readonly githubUrl = 'https://github.com/qetrfd';
  readonly currentYear = new Date().getFullYear();
  readonly navigation = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Achievements', href: '#achievements' },
    { label: 'Skills', href: '#skills' },
    { label: 'Contact', href: '#contact' },
  ];

  selectedProject: Project | null = null;
  isMenuOpen = false;
  emailCopied = false;
  private previouslyFocusedElement: HTMLElement | null = null;
  private copiedTimeoutId: number | null = null;

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

  @HostListener('document:keydown.escape')
  onEscape(): void {
    if (this.selectedProject) {
      this.closeProject();
      return;
    }
    this.closeMenu();
  }
}
