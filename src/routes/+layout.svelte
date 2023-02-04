<script lang="ts">
  import { invalidateAll } from '$app/navigation';
  import { signOut } from '@auth/sveltekit/client';
  import '../app.css';
  import type { LayoutServerData } from './$types';

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
</svelte:head>

<button
  on:click={() => {
    signOut();
    invalidateAll();
  }}
  class="absolute right-4 top-4 block"
>
  <img
    alt="profile"
    src={data.session?.user?.image}
    class="mx-auto h-20 w-20 rounded-lg object-cover "
  />
  <div
    class="center absolute h-full w-full -translate-y-full rounded-lg bg-slate-900 p-2 align-middle text-white underline opacity-0 transition-opacity hover:opacity-70"
    style="line-height: 4rem;"
  >
    Sign out
  </div>
</button>
<main class="m-auto h-full max-h-full max-w-2xl p-6">
  <slot />
</main>

<style lang="postcss">
  :global(html) {
    background-color: theme(colors.stone.100);
  }
</style>
