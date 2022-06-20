# Sample web application

This is a sample [Next.js](https://nextjs.org) application using [Prisma](https://www.prisma.io/), [TRPC](https://trpc.io/) and React Context API. 
The application contains unit tests with [Jest](https://jestjs.io/) and [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/).

This NextJS application is designed to act as a full-stack application. It means the application uses Prisma as ORM solution and contains backend code for data fetching.
TRPC is included for easy and clean data fetching operations both server-side and client-side. The application has sample code for todo application.

## Setup

To start working with the application, you need a Postgres database. Set it's connection URL to `.env` file inside the application directory. You'll find `example.env` file 
in the repository to help you with the configuration.

## To develop

```bash
$ pnpm run dev
```

## To build

```bash
$ pnpm run build
```

## To run tests

```bash
$ pnpm run test     # Run in watch-mode
$ pnpm run test:ci
```