<script lang="ts">
  import { signIn } from '@auth/sveltekit/client';
  import GithubIcon from '$lib/assets/GithubIcon.svelte';
  import DiscordIcon from '$lib/assets/DiscordIcon.svelte';
  import TextInput from '$lib/components/inputs/TextInput.svelte';
  import { AtSymbol } from '@steeze-ui/heroicons';

  let email = '';
  let loading = false;

  async function login(provider: string, options?: { email: string }) {
    loading = true;
    await signIn(provider, options);
    loading = false;
  }
</script>

<svelte:head>
  <title>Sign in</title>
  <meta name="description" content="Sign in to your account" />
</svelte:head>

<header class="mt-14 mb-7 text-center">
  <h1 class="text-center text-5xl font-extrabold text-zinc-800 dark:text-zinc-100">
    Le <span class="funky-text">Todo</span> du siècle
  </h1>
  <h2 class="funky-text mt-4 p-4 text-4xl font-extrabold">Sign in :</h2>
</header>
<div>
  <div class="flex flex-col gap-3">
    <button
      type="button"
      class="flex w-full items-center justify-center rounded-lg  bg-gray-600 py-2 px-4 text-center text-base font-semibold text-white shadow-md transition duration-200 ease-in hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2  focus:ring-offset-gray-200 "
      on:click={() => login('github')}
    >
      <GithubIcon />
      Sign in with GitHub
    </button>
    <button
      type="button"
      on:click={() => login('discord')}
      class="flex w-full items-center justify-center rounded-lg  bg-[#5865f2] py-2 px-4 text-center text-base font-semibold text-white shadow-md transition duration-200 ease-in hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2  focus:ring-offset-gray-200 "
    >
      <DiscordIcon />
      Sign in with Discord
    </button>
    <hr class="border-gray-300 dark:border-gray-700" />
    <form
      on:submit|preventDefault={() => login('email', {email})}
      class="flex flex-col gap-3"
    >
      <TextInput name="email" bind:value={email} icon={AtSymbol} disabled={loading} />
      <button
        type="submit"
        class="flex w-full items-center justify-center rounded-lg  bg-gray-600 py-2 px-4 text-center text-base font-semibold text-white shadow-md transition duration-200 ease-in hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2  focus:ring-offset-gray-200 "
        disabled={loading}
      >
        Sign in with email
      </button>
    </form>
  </div>
</div>
