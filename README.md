# Le Todo du Siècle

Deployment : [todo-du-siecle-production.up.railway.app](https://todo-du-siecle-production.up.railway.app)

GitHub Repo: [github.com/therosbif/todo-du-siecle](https://github.com/therosbif/todo-du-siecle)

## Tech Stack

- Language: [TypeScript](https://www.typescriptlang.org/)
- JS Framework: [SvelteKit](https://kit.svelte.dev/)
- CSS Framework [TailwindCSS](https://tailwindcss.com/)
- UI Library: [Headless UI](https://headlessui.dev/)
- Authentication: [SvelteKit Auth](https://vercel.com/blog/announcing-sveltekit-auth)
- Validation: [Zod](https://zod.dev/)
- API: [tRPC](https://trpc.io/)
- ORM: [Prisma](https://www.prisma.io/)
- Database: [PostgreSQL](https://www.postgresql.org/)
- Deployment: [Railway](https://railway.app/)

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

⚠️ **Note**: *Remember to create a `.env` file in the root of the project to run locally: An example file is provided [here](./.env.example).*
