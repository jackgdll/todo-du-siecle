<script lang="ts">
  import { goto, invalidateAll } from '$app/navigation';
  import Switch from '$lib/components/inputs/Switch.svelte';
  import { darkMode } from '$lib/darkMode';
  import { signOut } from '@auth/sveltekit/client';
  import { ArrowRightOnRectangle, Moon, Sun } from '@steeze-ui/heroicons';
  import { Icon } from '@steeze-ui/svelte-icon';
  import type { LayoutServerData } from './$types';
  import { page } from '$app/stores';

  export let data: LayoutServerData;
</script>

<svelte:head>
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
  <link
    href="https://fonts.googleapis.com/css2?family=Cormorant:wght@500&display=swap&text=BOOKSTALFNTYVE"
    rel="stylesheet"
  />
  <title>Login</title>
</svelte:head>

<div class="absolute top-4 flex w-full items-center justify-evenly md:right-4 md:w-auto md:gap-3">
  {#if $page.route.id === '/(app)/about'}
    <a
      href={data.session ? '/tasks' : '/login'}
      class="w-fit items-center justify-between gap-1 rounded-md border border-gray-300 bg-gradient-to-br from-white to-stone-50 px-3 py-2 text-stone-800 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-sky-600 dark:border-gray-700 dark:from-slate-500 dark:to-slate-700 dark:text-slate-200"
      >{data.session ? 'Home' : 'Login'}</a
    >
  {:else}
    <a
      href="/about"
      class="w-fit items-center justify-between gap-1 rounded-md border border-gray-300 bg-gradient-to-br from-white to-stone-50 px-3 py-2 text-stone-800 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-sky-600 dark:border-gray-700 dark:from-slate-500 dark:to-slate-700 dark:text-slate-200"
      >About</a
    >
  {/if}
  <Icon
    src={$darkMode ? Moon : Sun}
    theme="solid"
    size="20"
    class="ml-9 fill-sky-600 stroke-sky-600 transition-all dark:fill-sky-300 dark:stroke-sky-300"
  />
  <Switch on:change={() => ($darkMode = !$darkMode)} bind:enabled={$darkMode} />
  {#if data.session}
    <button
      on:click={() => {
        signOut();
        invalidateAll();
        goto('/login');
      }}
      class="ml-9"
    >
      <img
        alt="profile"
        src={data.session.user?.image}
        class="mx-auto h-12 w-12 rounded-lg object-cover md:h-20 md:w-20 "
      />
      <div
        class="center absolute flex h-12 w-12 -translate-y-full items-center justify-center rounded-lg bg-slate-900 p-2 align-middle opacity-0 transition-opacity hover:opacity-70 md:h-20 md:w-20"
      >
        <Icon src={ArrowRightOnRectangle} size="50" class="stroke-white" />
      </div>
    </button>
  {/if}
</div>
<main class="m-auto h-screen max-w-2xl p-6">
  <slot />
</main>
