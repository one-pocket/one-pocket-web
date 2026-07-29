# One Pocket — marketing site

The website for **One Pocket**, a lightweight budget tracker for a bounded amount of money: _simple budgets for a paycheck, a period, or a purpose._ The app itself lives in the sibling `one-pocket` repo.

A **pocket** is money set aside for a period, a purpose, or both — a paycheck, monthly spending, groceries, a trip, a renovation, school expenses. Create a pocket, set the amount, add expenses, see what remains.

See [CLAUDE.md](CLAUDE.md) for the positioning and copy rules this site must hold to, including the three places the home page's title and description have to stay in sync.

Angular, prerendered to static HTML and deployed to GitHub Pages. Generated with [Angular CLI](https://github.com/angular/angular-cli) 21.2.19.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Vitest](https://vitest.dev/) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
