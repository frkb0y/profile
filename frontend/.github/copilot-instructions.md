# Copilot instructions

## Project overview
- This is a Create React App single-page portfolio. Entry point is `src/index.js`, which renders `App`.
- Routing is handled with `react-router-dom` in `src/App.js`. Routes map to page components under `src/components/*`.
- Layout is consistent across pages: `Navbar` + `ScrollToTop` + page content + `Footer` in `App`.
- Visual styling is a mix of `src/style.css`, `src/App.css`, and `src/index.css`, plus Bootstrap styles via `bootstrap/dist/css/bootstrap.min.css`.

## Key structure and patterns
- Pages live in `src/components/<Section>/` (e.g., `Home`, `About`, `Projects`, `Resume`). Each page exports a default React component.
- Shared UI components live in `src/components/` (e.g., `Navbar`, `Footer`, `Particle`, `Pre`).
- `Particle` is used as a background effect on pages like `Home` and `Projects`.
- `Navbar` uses `react-bootstrap` components and `react-router-dom` `Link` for navigation.
- `Projects` renders multiple `ProjectCard` items; each card is configured via props (image, title, description, links).

## Adding or modifying content
- To add a new page/route: create a component under `src/components/<NewPage>/`, add a `<Route>` in `src/App.js`, and add a `Nav.Link` in `src/components/Navbar.js`.
- To add a new project card: add the asset under `src/Assets/Projects/`, import it in `src/components/Projects/Projects.js`, then add a `<ProjectCard>` in the list.
- `ProjectCard` expects `imgPath`, `title`, `description`, `ghLink`, and optional `demoLink`; `isBlog` controls label text.
- File downloads can be linked via `require(...)` (see PBIX example in `Projects.js`).

## Dependencies and integrations
- UI components: `react-bootstrap` + `bootstrap` styles.
- Icons: `react-icons` (e.g., `AiOutlineHome`, `BsGithub`).
- Routing: `react-router-dom` with `BrowserRouter`, `Routes`, and `Navigate`.

## Developer workflows (CRA)
- Start dev server: `npm start`
- Run tests (watch mode): `npm test`
- Production build: `npm run build`

## Example files to reference
- App routing + layout: `src/App.js`
- Navbar pattern: `src/components/Navbar.js`
- Project card composition: `src/components/Projects/Projects.js` and `src/components/Projects/ProjectCards.js`
- Home page + particle effect: `src/components/Home/Home.js`
