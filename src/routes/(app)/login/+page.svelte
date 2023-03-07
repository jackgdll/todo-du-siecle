<script lang="ts">
  import { signIn } from '@auth/sveltekit/client';
  import GithubIcon from '$lib/assets/GithubIcon.svelte';
  import DiscordIcon from '$lib/assets/DiscordIcon.svelte';
  import TextInput from '$lib/components/inputs/TextInput.svelte';
  import { AtSymbol } from '@steeze-ui/heroicons';
  import ValidationError from '$lib/components/inputs/ValidationError.svelte';
  import { z, ZodError, type ZodIssue } from 'zod';

  let email = '';
  let loading = false;

  const emailSchema = z
    .string()
    .min(1)
    .regex(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\])|(\[IPv6:(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))\])|([A-Za-z0-9]([A-Za-z0-9-]*[A-Za-z0-9])*(\.[A-Za-z]{2,})+))$/,
      'Invalid email',
    );
  let emailErrors: string[] = [];
  let emailTouched = false;

  $: try {
    if (emailTouched) {
      emailErrors = [];
      emailSchema.parse(email);
    }
  } catch (error) {
    if (error instanceof ZodError) {
      const { issues } = error;
      issues &&
        (issues as ZodIssue[]).forEach((i) => {
          emailErrors = [...emailErrors, i.message];
        });
    } else {
      emailErrors = ['An unexpected error occured'];
    }
  }

  async function login(provider: string, options?: { email: string }) {
    if (emailErrors.length) return;
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
    <form on:submit|preventDefault={() => login('email', { email })} class="flex flex-col gap-3">
      <TextInput
        name="email"
        bind:value={email}
        on:blur={() => (emailTouched = true)}
        icon={AtSymbol}
        disabled={loading}
      />
      <ValidationError errors={emailErrors} touched={emailTouched} />
      <button
        type="submit"
        class="flex w-full items-center justify-center rounded-lg  bg-gray-600 py-2 px-4 text-center text-base font-semibold text-white shadow-md transition duration-200 ease-in hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-gray-200 disabled:cursor-not-allowed disabled:bg-gray-800 disabled:text-slate-700"
        disabled={!!emailErrors.length || loading}
      >
        Sign in with email
      </button>
        <span class="text-center text-sm text-gray-500 dark:text-gray-400">
          You will receive a verification email from <a href="mailto:todo.du.siecle@outlook.com" class="text-blue-500">todo.du.siecle@outlook.com</a>. 
        </span>
    </form>
  </div>
</div>
