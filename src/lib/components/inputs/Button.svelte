<script lang="ts">
  export let variant: 'primary' | 'secondary' = 'primary';
  export let type: 'button' | 'reset' | 'submit' | null = 'button';

  const classes = {
    primary: 'to-purple-400 from-sky-600 text-white',
    secondary:
      'from-white to-stone-50 text-stone-800 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-sky-600 focus:border-transparent dark:border-gray-700 dark:from-slate-500 dark:to-slate-700 dark:text-slate-200',
  };
</script>

<button
  on:click
  class="flex w-fit items-center justify-between gap-1 rounded-md bg-gradient-to-br px-3 py-2 {$$restProps.class} {classes[
    variant
  ]}"
  {type}
>
  <slot />
</button>
