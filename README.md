# Le Todo du Siècle

[todo-du-siecle-production.up.railway.app](https://todo-du-siecle-production.up.railway.app)

## Description

Projet réalisé par Jack Goodall (NI: 537010048) dans le cadre du cours GLO-3202 — Sécurité des applications Web.

## Tech Stack

- **Frontend**
  - [SvelteKit](https://kit.svelte.dev/)
  - [TailwindCSS](https://tailwindcss.com/)
  - [Headless UI](https://headlessui.dev/)
- **Backend**
  - [tRPC](https://trpc.io/)
  - [Prisma](https://www.prisma.io/)
  - [PostgreSQL](https://www.postgresql.org/)
- **Deployment**
  - [Railway](https://railway.app/)

## Installation

```bash
# Clone the repository
git clone git@github.com:therosbif/todo-du-siecle.git
cd todo-du-siecle

# Install dependencies
pnpm install

# Generate Prisma client
pnpm prisma generate

# Start the development server
pnpm dev

# Build the project
pnpm build

# Preview the production build
pnpm preview
```
