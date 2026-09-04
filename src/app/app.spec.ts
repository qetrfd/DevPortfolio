import { TestBed } from '@angular/core/testing';
import { App } from './app';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render title', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Fernando Santillan');
    expect(compiled.querySelector('h1')?.textContent).toContain(
      'Mechatronics, AI & Mobile Developer',
    );
  });

  it('should render the current featured projects only', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    const projectNames = [...compiled.querySelectorAll('.project-card h3')].map(
      (heading) => heading.textContent?.trim(),
    );

    expect(projectNames).toEqual(['KIVO', 'ABLE', 'NANU', 'PipBoyCPP2026']);
    expect(compiled.textContent).not.toContain('Cardinalis');
    expect(compiled.textContent).not.toContain('GestureOS');
  });

  it('should present Kuali as private professional experience', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    const experience = compiled.querySelector('.experience-card');

    expect(experience?.textContent).toContain('Kuali');
    expect(experience?.textContent).toContain('Inclusive AI-powered EdTech');
    expect(experience?.textContent).toContain('Co-Founder & CTO');
    expect(experience?.textContent).toContain('Designed and developed the main web platform.');
    expect(experience?.textContent).toContain(
      'Technical implementation details and source code are not publicly available.',
    );
    const logo = experience?.querySelector<HTMLImageElement>('.experience-logo');
    const website = experience?.querySelector<HTMLAnchorElement>('.experience-website');
    expect(logo?.getAttribute('src')).toBe('assets/kuali-logo.png');
    expect(logo?.alt).toBe('Kuali logo');
    expect(website?.href).toBe('https://kualiedu.com.mx/');
    expect(website?.target).toBe('_blank');
    expect(website?.rel).toBe('noopener noreferrer');
    expect(website?.textContent).toContain('Visit Kuali Website');
    expect(website?.href).not.toContain('github.com');
  });

  it('should provide the CV download and use verified project logos', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    const cvLink = compiled.querySelector<HTMLAnchorElement>('a[download]');
    const projectLogos = [
      ...compiled.querySelectorAll<HTMLImageElement>('.project-card .project-logo'),
    ];

    expect(cvLink?.getAttribute('href')).toBe('assets/Fernando_Santillan_CV_2026.pdf');
    expect(projectLogos.map((logo) => logo.getAttribute('src'))).toEqual([
      'assets/kivo-logo.png',
      'assets/able-logo.png',
      'assets/nanu-logo.png',
      'assets/pipboy-logo.png',
    ]);
    expect(projectLogos.map((logo) => logo.alt)).toEqual([
      'KIVO app logo',
      'ABLE app logo',
      'NANU app logo',
      'PipBoyCPP2026 project artwork',
    ]);
  });

  it('should show the verified KIVO award, team and official coverage', async () => {
    const fixture = TestBed.createComponent(App);
    fixture.componentInstance.selectedProject = fixture.componentInstance.projects[0];
    fixture.detectChanges();
    await fixture.whenStable();

    const compiled = fixture.nativeElement as HTMLElement;
    const eventImage = compiled.querySelector<HTMLImageElement>('.event-evidence img');
    const coverageLink = compiled.querySelector<HTMLAnchorElement>('.event-evidence a');

    expect(compiled.textContent).toContain('3rd Place — Swift Changemakers Hackathon 2026');
    expect(compiled.textContent).toContain('Waste Challenge · Team TrustTheCode · Tecmilenio');
    expect(eventImage?.alt).toBe('Team TrustTheCode at the Swift Changemakers Hackathon 2026');
    expect(coverageLink?.href).toBe('https://cmlab.org/');
    expect(coverageLink?.target).toBe('_blank');
    expect(coverageLink?.rel).toBe('noopener noreferrer');
  });

  it('should keep KIVO recognition with the project and omit the achievements section', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    const kivoCard = compiled.querySelector('.project-card');
    const eventLink = kivoCard?.querySelector<HTMLAnchorElement>('.project-event-link');

    expect(kivoCard?.textContent).toContain('3rd Place — Swift Changemakers Hackathon 2026');
    expect(kivoCard?.textContent).toContain('Waste Challenge · Team TrustTheCode · Tecmilenio');
    expect(eventLink?.href).toBe('https://cmlab.org/');
    expect(eventLink?.target).toBe('_blank');
    expect(eventLink?.rel).toBe('noopener noreferrer');
    expect(compiled.querySelector('#achievements')).toBeNull();
    expect(compiled.querySelector('a[href="#achievements"]')).toBeNull();
  });

  it('should describe ABLE for people with motor difficulties using concise details', async () => {
    const fixture = TestBed.createComponent(App);
    fixture.componentInstance.selectedProject = fixture.componentInstance.projects[1];
    fixture.detectChanges();
    await fixture.whenStable();

    const compiled = fixture.nativeElement as HTMLElement;
    const modal = compiled.querySelector('.project-modal');

    expect(modal?.textContent).toContain('people with motor difficulties');
    expect(modal?.textContent).toContain('Eye-tracking-assisted navigation');
    expect(modal?.textContent).toContain('dedicated volunteer space');
    expect(modal?.textContent).toContain('promote autonomy');
    expect(modal?.textContent).not.toContain('neurodivergent');
    expect(modal?.textContent).not.toContain('Pictogram-based communication');
  });

  it('should present NANU as the published inclusive learning application documented online', async () => {
    const fixture = TestBed.createComponent(App);
    fixture.componentInstance.selectedProject = fixture.componentInstance.projects[2];
    fixture.detectChanges();
    await fixture.whenStable();

    const compiled = fixture.nativeElement as HTMLElement;
    const modal = compiled.querySelector('.project-modal');

    expect(modal?.textContent).toContain('children and families');
    expect(modal?.textContent).toContain('Sign-language alphabet practice');
    expect(modal?.textContent).toContain('Published on the Apple App Store');
    expect(modal?.textContent).toContain('Accessibility Focused');
    expect(modal?.textContent).not.toContain('nearby businesses');
    expect(modal?.textContent).not.toContain('location-based recommendations');
    expect(modal?.textContent).not.toContain('AI-Powered');
  });

  it('should keep programming, web and database skills in their own categories', () => {
    const app = TestBed.createComponent(App).componentInstance;
    const skills = (title: string) => app.skillCategories.find(category => category.title === title)?.skills;
    expect(app.languageSkills).toContain('C#');
    expect(app.languageSkills).toContain('Rust');
    expect(app.languageSkills).not.toContain('SQL');
    expect(app.languageSkills).not.toContain('HTML');
    expect(app.languageSkills).not.toContain('CSS');
    expect(skills('Cloud & Databases')).toContain('SQL');
    expect(skills('Web & Mobile')).toEqual(['Angular', 'SwiftUI', 'iOS', 'Android', 'HTML', 'CSS']);
  });

  it('should link the national championship to official coverage and an accessible trophy', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const section = fixture.nativeElement.querySelector('.enactus-highlight') as HTMLElement;
    expect(section.textContent).toContain('National Champion');
    expect(section.textContent).toContain('São Paulo, Brazil');
    const link = section.querySelector('a')!;
    expect(new URL(link.href).hostname).toBe('kpmg.com');
    expect(link.target).toBe('_blank');
    expect(link.rel).toBe('noopener noreferrer');
    expect(section.querySelector('img')?.alt).toBe('Enactus Mexico 2026 National Champion trophy won by Kuali');
  });

  it('should resolve both CV downloads under the GitHub Pages base path', async () => {
    const base = document.createElement('base');
    base.href = 'https://qetrfd.github.io/DevPortfolio/';
    document.head.prepend(base);
    try {
      const fixture = TestBed.createComponent(App);
      await fixture.whenStable();
      const links = [...fixture.nativeElement.querySelectorAll('a[download]')] as HTMLAnchorElement[];
      expect(links).toHaveLength(2);
      for (const link of links) {
        expect(link.href).toBe('https://qetrfd.github.io/DevPortfolio/assets/Fernando_Santillan_CV_2026.pdf');
      }
    } finally {
      base.remove();
    }
  });

  it('should keep keyboard focus inside an open project modal', async () => {
    const fixture = TestBed.createComponent(App);
    fixture.componentInstance.selectedProject = fixture.componentInstance.projects[0];
    fixture.detectChanges();
    await fixture.whenStable();
    const controls = fixture.nativeElement.querySelectorAll('.project-modal button, .project-modal a[href]');
    const first = controls[0] as HTMLElement;
    const last = controls[controls.length - 1] as HTMLElement;
    first.focus();
    first.dispatchEvent(new KeyboardEvent('keydown', { key: 'Tab', shiftKey: true, bubbles: true, cancelable: true }));
    expect(document.activeElement).toBe(last);
    last.dispatchEvent(new KeyboardEvent('keydown', { key: 'Tab', bubbles: true, cancelable: true }));
    expect(document.activeElement).toBe(first);
  });

  it('should describe the AI, mobile, cloud and accessibility product focus', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    const about = compiled.querySelector('#about');

    expect(about?.textContent).toContain('I focus on building AI-powered mobile applications');
    expect(about?.textContent).toContain('product engineering');
    expect(about?.textContent).toContain('performance, usability and accessibility');
    expect(about?.textContent).not.toContain(
      'I have developed applications for iOS, Android and the web',
    );
  });
});
