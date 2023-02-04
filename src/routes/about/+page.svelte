<script lang="ts">
</script>

<svelte:head>
  <title>About</title>
  <meta name="description" content="About le Todo du Siecle" />
</svelte:head>

<div class="container mx-auto p-5 dark:text-slate-200">
  <h1 class="mt-20 mb-11 text-5xl font-extrabold">
    About le <a href="/tasks" class="funky-text">Todo</a> du Siècle
  </h1>
  <p>
    Déployé à l'adresse : <a
      class="text-sky-600 underline dark:text-sky-400"
      target="_blank"
      rel="noopener noreferrer"
      href="https://todo-du-siecle-production.up.railway.app/"
      >todo-du-siecle-production.up.railway.app/</a
    >
  </p>
  <p>
    Dépôt GitHub: <a
      class="text-sky-600 underline dark:text-sky-400"
      target="_blank"
      rel="noopener noreferrer"
      href="https://github.com/therosbif/todo-du-siecle">github.com/therosbif/todo-du-siecle</a
    >
  </p>
  <h2 class="mt-7 mb-4 text-3xl font-bold">Stack Technologique</h2>
  <ul class="mt-5 ml-5 list-disc">
    <li class="font-medium">
      Language : <a
        target="_blank"
        rel="noopener noreferrer"
        class="text-sky-600 underline dark:text-sky-400"
        href="https://www.typescriptlang.org/">TypeScript</a
      >
    </li>
    <li class="font-medium">
      FrameworkJS : <a
        target="_blank"
        rel="noopener noreferrer"
        class="text-sky-600 underline dark:text-sky-400"
        href="https://kit.svelte.dev/">SvelteKit</a
      >
    </li>
    <li class="font-medium">
      Framework CSS : <a
        target="_blank"
        rel="noopener noreferrer"
        class="text-sky-600 underline dark:text-sky-400"
        href="https://tailwindcss.com/">TailwindCSS</a
      >
    </li>
    <li class="font-medium">
      Librairie UI : <a
        target="_blank"
        rel="noopener noreferrer"
        class="text-sky-600 underline dark:text-sky-400"
        href="https://headlessui.dev/">Headless UI</a
      >
    </li>
    <li class="font-medium">
      Authentication: <a
        target="_blank"
        rel="noopener noreferrer"
        class="text-sky-600 underline dark:text-sky-400"
        href="https://vercel.com/blog/announcing-sveltekit-auth">SvelteKitAuth</a
      >
    </li>
    <li class="font-medium">
      Validation: <a
        target="_blank"
        rel="noopener noreferrer"
        class="text-sky-600 underline dark:text-sky-400"
        href="https://zod.dev/">Zod</a
      >
    </li>
    <li class="font-medium">
      API: <a
        target="_blank"
        rel="noopener noreferrer"
        class="text-sky-600 underline dark:text-sky-400"
        href="https://trpc.io/">tRPC</a
      >
    </li>
    <li class="font-medium">
      ORM: <a
        target="_blank"
        rel="noopener noreferrer"
        class="text-sky-600 underline dark:text-sky-400"
        href="https://www.prisma.io/">Prisma</a
      >
    </li>
    <li class="font-medium">
      Base de Donées: <a
        class="text-sky-600 underline dark:text-sky-400"
        href="https://www.postgresql.org/">PostgreSQL</a
      >
    </li>
    <li class="font-medium">
      Déploiement: <a class="text-sky-600 underline dark:text-sky-400" href="https://railway.app/"
        >Railway</a
      >
    </li>
  </ul>
  <h2 class="mt-7 mb-4 text-3xl font-bold">Choix des Technologies</h2>
  <p class="mt-2 indent-4 ">
    <strong>TypeScript</strong> est un sur-ensemble fortement typé de JavaScript qui fournit une vérification
    facultative des types et est plus facile à maintenir. Cela en fait un excellent choix pour les applications
    plus grandes, où la sécurité des types et la lisibilité du code sont importantes.
  </p>
  <p class="mt-2 indent-4">
    <strong>SvelteKit</strong> est un framework moderne et orienté pour la construction d'applications
    web. Il fournit un runtime rapide et optimisé pour Svelte, une bibliothèque JavaScript populaire
    pour la construction d'interfaces utilisateur. Il fournit également un ensemble d'outils pour construire
    et déployer des applications web modernes et progressives.
  </p>
  <p class="mt-2 indent-4">
    <strong>TailwindCSS</strong> est un framework CSS hautement personnalisable, axé sur les utilitaires,
    qui fournit un ensemble de classes CSS prédéfinies qui peuvent être utilisées pour styliser rapidement
    les applications web. Cela permet de se concentrer sur la construction de application au lieu d'écrire
    du CSS à partir de zéro.
  </p>
  <h2 class="mt-7 mb-4 text-3xl font-bold">Choix de Librairies</h2>
  <p class="mt-2 indent-4">
    <strong>Headless UI</strong> est une bibliothèque de composants d'interface utilisateur prédéfinis
    et entièrement accessibles. Il fournit un ensemble de composants qui peuvent être utilisés tels quels
    et peuvent également être personnalisés pour répondre à des besoins spécifiques.
  </p>
  <p class="mt-2 indent-4">
    <strong>SvelteKitAuth</strong> est une solution d'authentification et d'autorisation sans
    serveur spécialement conçue pour <strong>SvelteKit</strong>. Il fournit un moyen simple,
    sécurisé et évolutif d'authentifier et d'autoriser les utilisateurs dans les applications
    <strong>SvelteKit</strong>.
  </p>
  <p class="mt-2 indent-4">
    <strong>Zod</strong> est une bibliothèque de validation suralimentée et fortement typée qui
    facilite la validation de données dans les applications <strong>TypeScript</strong>. Il fournit
    une API simple et intuitive pour définir et valider des structures de données complexes et est
    conçu pour être rapide, efficient et facile à utiliser.
  </p>
  <p class="mt-2 indent-4">
    The <strong>tRPC</strong> est un framework RPC (Remote Procedure Call) moderne, évolutif et
    performant pour Node.js. Il fournit une API simple et intuitive pour construire et consommer des
    API hautes performances et à faible latence. <br /> Les API RPC permettent une communication plus
    efficace entre les applications en transmettant des informations structurées directement à des méthodes
    spécifiques plutôt que de simplement manipuler des ressources via des URL, ce qui est le cas avec
    les API REST.
  </p>
  <p class="mt-2 indent-4">
    <strong>Prisma</strong> est un outil ORM (Object-Relational Mapping) moderne qui permet de travailler
    facilement avec des bases de données dans des applications Node.js. Il fournit une API simple et
    intuitive pour définir et interroger des bases de données, et est conçu pour être rapide, efficace
    et facile à utiliser.
  </p>
  <h2 class="mt-7 mb-4 text-3xl font-bold">Software Development Cycle</h2>
  <h3 class="mt-2 font-semibold">
    Le cycle de développement du logiciel suivi pour ce projet comprenait les étapes suivantes :
  </h3>
  <ul class="mt-2 list-disc">
    <li class="mt-2 font-medium">
      <strong>Conception</strong> : L'interface utilisateur a été conçue directement dans un projet
      <strong>SvelteKit</strong>
      avec <strong>Headless UI</strong>
      et <strong>TailwindCSS</strong>.
    </li>
    <li class="mt-2 font-medium">
      <strong>Development</strong> : La sauvegarde de l'état de l'application a été implémenté avec
      <strong>tRPC</strong> et <strong>Prisma</strong>, et l'authentification avec
      <strong>SvelteKitAuth</strong>.
    </li>
    <li class="mt-2 font-medium">
      <strong>Test</strong> : L'application a été testée manuellement avec plusieurs utilisateurs pour
      s'assurer qu'elle fonctionne comme prévu.
    </li>
    <li class="mt-2 font-medium">
      <strong>Déploiement</strong> : L'application est automatiquement déployé sur
      <strong>Railway</strong> quand des changements sont détectés sur la branche <code>main</code>.
    </li>
  </ul>
  <h2 class="mt-7 mb-4 text-3xl font-bold">Choix de Plateforme de Déploiement</h2>
  <p class="mt-2 indent-4">
    <strong>Railway</strong> est une plateforme moderne, basée sur le cloud, pour le déploiement et la
    gestion d'applications web et de bases de données. Elle offre une interface simple et intuitive,
    et est conçue pour être rapide, efficace et facile à utiliser.
  </p>
  <h2 class="mt-7 mb-4 text-3xl font-bold">Fonctionnalités</h2>

  <ul class="mt-2 list-disc">
    <li class="font-medium">
      <a class="text-sky-600 underline dark:text-sky-400" href="/tasks">Connexion d'utilisateurs</a>
      :
    </li>
    <ul class="mt-2 ml-8 mb-4 list-disc">
      <li class="font-medium">
        L'authentification utilisateur implémenté avec <strong>SvelteKitAuth</strong>.
      </li>
      <li class="font-medium">
        Connexion avec <strong>Github</strong> ou <strong>Discord</strong>
      </li>
      <li class="font-medium">La session est stockée dans le context / cookie</li>
    </ul>
    <li class="font-medium">
      <a class="text-sky-600 underline dark:text-sky-400" href="/tasks">Todo</a> :
    </li>
    <ul class="mt-2 ml-8 mb-4 list-disc">
      <li class="font-medium">
        Synchronisation avec la base de données avec <strong>tRPC</strong>.
      </li>
      <li class="font-medium">Création, édition, and déltétion de tâches.</li>
      <li class="font-medium">Validation des champs avec <strong>Zod</strong>.</li>
      <li class="font-medium">Mises à jour optimiste et invalidation de route.</li>
      <li class="font-medium">Triage des tâches par completion, priorité, and date limite.</li>
    </ul>
    <li class="font-medium">Autre :</li>
    <ul class="mt-2 ml-8 mb-4 list-disc">
      <li class="font-medium">Responsive design.</li>
      <li class="font-medium">
        Mode sombre (stocké dans le localStorage, prends en compte le préférences du navigateur)
      </li>
    </ul>
  </ul>
</div>
