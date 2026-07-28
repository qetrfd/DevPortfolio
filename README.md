# Fernando Santillan — Developer Portfolio

Professional portfolio for Fernando Santillan, an AI, Mobile & Software Developer and
Mechatronics Engineering student. The site highlights current public projects, private
professional experience, achievements and technical skills.

## Live website

[https://qetrfd.github.io/DevPortfolio/](https://qetrfd.github.io/DevPortfolio/)

## Technology

- Angular 21
- TypeScript
- Tailwind CSS 3
- HTML5 and CSS3
- GitHub Pages

The portfolio is a single-page Angular application. Project, experience, achievement and
skill content is centralized in `src/app/portfolio.data.ts`.

## Local development

Install dependencies:

```bash
npm install
```

Start the Angular development server:

```bash
npm start
```

Open [http://localhost:4200](http://localhost:4200). Do not open
`src/app/app.html` directly with Live Server; it is an Angular template.

## Validation

Run the automated tests:

```bash
npm test
```

Create the standard production build:

```bash
npm run build
```

Create the GitHub Pages build with the required `/DevPortfolio/` base path:

```bash
npm run build:github
```

## Deploy to GitHub Pages

The deployment script builds with the correct repository subdirectory and publishes the
generated browser files to the `gh-pages` branch:

```bash
npm run deploy:github
```

The GitHub repository must have Pages configured to publish from the `gh-pages` branch.

## Content maintenance

Projects support optional repository, live project, App Store and official website links.
Buttons render only when the corresponding URL exists.

The public NANU repository currently exposes its website experience and official website
link. Add the verified App Store URL to `appStoreUrl` in `src/app/portfolio.data.ts` when it
is available.
