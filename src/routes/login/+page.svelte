<script lang="ts">
  import { signIn, signOut } from '@auth/sveltekit/client';
  import { page } from '$app/stores';
  import GithubIcon from '$lib/assets/GithubIcon.svelte';
  import DiscordIcon from '$lib/assets/DiscordIcon.svelte';
</script>

<svelte:head>
  <title>Sign in</title>
  <meta name="description" content="Sign in to your account" />
</svelte:head>

<header class="mt-14 mb-7 text-center">
  <h1 class="text-center text-5xl font-extrabold text-zinc-800">
    Le <span class="funky-text">Todo</span> du siècle
  </h1>
  <h2 class="funky-text mt-4 p-4 text-4xl font-extrabold">Sign in :</h2>
</header>
<div>
  {#if Object.keys($page.data.session || {}).length}
    {#if $page.data.session?.user?.image}
      <span style="background-image: url('{$page.data.session.user.image}')" class="avatar" />
    {/if}
    <span class="signedInText">
      <small>Signed in as</small><br />
      <strong>{$page.data.session?.user?.email || $page.data.session?.user?.name}</strong>
    </span>
    <button on:click={() => signOut()} class="button">Sign out</button>
  {:else}
    <div class="flex flex-col gap-3">
      <button
        type="button"
        class="flex w-full items-center justify-center rounded-lg  bg-gray-600 py-2 px-4 text-center text-base font-semibold text-white shadow-md transition duration-200 ease-in hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2  focus:ring-offset-gray-200 "
        on:click={() => signIn('github')}
      >
        <GithubIcon />
        Sign in with GitHub
      </button>
      <button
        type="button"
        on:click={() => signIn('discord')}
        class="flex w-full items-center justify-center rounded-lg  bg-[#5865f2] py-2 px-4 text-center text-base font-semibold text-white shadow-md transition duration-200 ease-in hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2  focus:ring-offset-gray-200 "
      >
        <DiscordIcon />
        Sign in with Discord
      </button>
    </div>
  {/if}
</div>
