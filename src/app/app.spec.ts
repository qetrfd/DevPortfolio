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
    expect(experience?.textContent).toContain('Private Product');
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

    expect(cvLink?.getAttribute('href')).toBe('assets/Fernando_Santillan_CV.pdf');
    expect(projectLogos.map((logo) => logo.getAttribute('src'))).toEqual([
      'assets/kivo-logo.png',
      'assets/able-logo.png',
      'assets/nanu-logo.png',
    ]);
    expect(projectLogos.map((logo) => logo.alt)).toEqual([
      'KIVO app logo',
      'ABLE app logo',
      'NANU app logo',
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

  it('should classify HTML and CSS under web development instead of programming languages', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    const webDevelopment = app.skillCategories.find(
      (category) => category.title === 'Web Development',
    );

    expect(app.languageSkills).toEqual([
      'C++',
      'Java',
      'JavaScript',
      'TypeScript',
      'Python',
      'Swift',
    ]);
    expect(app.languageSkills).not.toContain('HTML');
    expect(app.languageSkills).not.toContain('CSS');
    expect(webDevelopment?.skills).toContain('HTML5');
    expect(webDevelopment?.skills).toContain('CSS3');
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
