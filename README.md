# React template project

## Table of Contents

- [Sumary](#sumary)
- [Dependencies](#dependencies)
  - [Configuring Environment](#configuring-environment)
  - [Installing Dependencies](#installing-dependencies)
- [Running on your Machine](#running-on-your-machine)
- [Contributing](#contributing)
  - [Workspace](#workspace)
  - [Commiting](#commiting)
  - [Pull Request](#pull-request)

## Sumary

This is a react template project created with [Vite](https://vitejs.dev/) configured with typescript, eslint, prettier, husky and already set for unit testing (jest and testing library) and end to end testing (cypress and cucumber).

[↩ Back to top](#trivia-app-frontend) <br/>

---

## Dependencies

### Configuring Environment

In case you don't have node and npm installed, you can download it directly from [Node Website](https://nodejs.org/en/download/).

After installing node, install `yarn` with the following command

```bash
$ npm install --global yarn
```

[↩ Back to top](#trivia-app-frontend) <br/>

---

### Installing Dependencies

With Node and yarn installed, open a terminal within the project folder and run the following command to install all dependencies.

```bash
$ yarn install
```

[↩ Back to top](#trivia-app-frontend) <br/>

---

## Running on your Machine

Once you've installed all dependencies, the following commands will be available.

### `yarn dev`

Runs the app in the development mode.  
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.  
You will also see any lint errors in the console.

### `yarn build`

Builds the app for production to the `dist` folder using [vite](https://vitejs.dev/guide/build.html).  
It correctly bundles React in production mode and produces an application bundle that is suitable to be served over a static hosting service.

Your app is ready to be deployed!

See the section about [deployment](https://vitejs.dev/guide/static-deploy.html) for more information.

### `yarn test`

Launches the test runner for unit tests on the application.  
For more details about testing check [jest](https://jestjs.io/pt-BR/) and [testing-library](https://testing-library.com/docs/)

### `yarn lint`

Execute eslint checking.

### `yarn prettier:fix`

Fix formatting issues on the project.

[↩ Back to top](#trivia-app-frontend) <br/>

---

## Contributing

### Workspace

When developing new features, fixing a bug, adding tests, documentation or any other adition to this repository. First create a branch derived from `main` so that you can make your modifications, commit and then submit a pull request.

This project is already configured to enforce lint and code formatting with eslint and prettier.  
It is also integrated with husky so prior to any commit it will attempt to fix issues with lint, code formatting and will execute tests related to changes made.

If you're developing with `Visual Studio Code`, we recommend the following extensions:

- ESLint: Integrates ESLint JavaScript into VS Code.
- Prettier: Code formatter using prettier

[↩ Back to top](#trivia-app-frontend) <br/>

---

### Commiting

The commit message should be structured as follows:

```
<type>[optional scope]: <description>

[optional body]

[optional footer]
```

**Some commit types are:** fix, feat, chore, docs, style, refactor, test, and others.

For more details, refer to the following [documentation](https://www.conventionalcommits.org/en/v1.0.0-beta.2/).

[↩ Back to top](#trivia-app-frontend) <br/>

---

### Pull Request

When creating a pull request, always mark the option to squash commits when merging into `main`, assing a main revisor for the request and perform a sanity check with another developer or QA agent.

The **main revisor** is reponsible to download the code, check functionality running in his environment and performing the code review adding comments and requests if required.

The **sanity check** (smoke test) is a quick, broad, and shallow testing with the goal to evaluate the result of a subset of functionalities to determine whether it is possible and reasonable to proceed with further testing and the review process. This process shouldn't be more than 5 minutes.

The **code analysis** will be execute with CI/CD where the lint check and tests will be executed.

After each process, a vote up 👍 or vote down 👎 is added to the merge request and after acquiring success on all ends, the pull request can be merged.

[↩ Back to top](#trivia-app-frontend) <br/>

---
