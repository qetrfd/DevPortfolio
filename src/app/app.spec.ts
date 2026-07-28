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
    expect(experience?.querySelector('a')).toBeNull();
  });

  it('should provide the CV download and avoid project imagery', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    const cvLink = compiled.querySelector<HTMLAnchorElement>('a[download]');

    expect(cvLink?.getAttribute('href')).toBe('assets/Fernando_Santillan_CV.pdf');
    expect(compiled.querySelector('.project-card img')).toBeNull();
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
});
