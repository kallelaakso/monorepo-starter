# Turborepo monorepo starter with pnpm

This is a monorepo starter repository for a web application use. It's not perfect, I made it for my use. Right now, it feels this 
is how I would like to start my web application project. Subject to change though. ;)

## Components

Base for this repository is Turborepo installation with [pnpm](https://pnpm.io). The repository consists of following components:

- `web`: [Next.js](https://nextjs.org) app using [Prisma](https://www.prisma.io/), [TRPC](https://trpc.io/) and React Context API.
- `ui`: a stub React component library shared by applications
- `eslint-config-custom`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- `tsconfig`: `tsconfig.json`s used throughout the monorepo
- `e2e`: End-to-end tests with [Cypress](https://www.cypress.io/)

## Utilities

The following utilities/apps are added for better developer experience:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting

## Scripts

These are the project-level scripts. See application/package-level READMEs for more specific information.

### Dependencies / Get started

To install all dependencies, run:

```bash
$ pnpm recursive install
```

### Build

To build all apps and packages, run the following command:

```bash
$ pnpm run build
```

### Develop

To develop all apps and packages, run the following command:

```bash
$ pnpm run dev
```

## Contact me

Any questions regarding this repository? Feel free to contact me, please leave an issue here on Github or drop me a message by email hello@kallelaakso.eu.