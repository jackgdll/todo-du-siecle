<script lang="ts">
  import { Icon } from '@steeze-ui/svelte-icon';
  import type { IconSource } from '@steeze-ui/svelte-icon/types';

  export let name: string;
  export let label: string = name;
  export let placeholder: string = label;
  export let icon: IconSource | undefined = undefined;
  export let value: string | undefined = undefined;
  export let disabled = false;
</script>

<div class="relative flex flex-col items-baseline">
  <label for={name} class="mb-1 p-0 text-sm capitalize text-slate-700 dark:text-slate-300"
    >{label}</label
  >
  {#if !!icon}
    <Icon
      src={icon}
      size="20"
      class="absolute translate-y-8 translate-x-2 stroke-slate-800 dark:stroke-slate-100"
    />
  {/if}
  <input
    type="text"
    {name}
    {placeholder}
    bind:value
    {disabled}
    class="pl-$pr-2 ml-auto w-full flex-1 rounded-lg border border-gray-300 bg-white py-2 placeholder:capitalize focus:border-transparent focus:outline-none focus:ring-2 focus:ring-sky-600 disabled:text-slate-400 dark:border-gray-700 dark:bg-slate-700 dark:text-slate-200 dark:placeholder:text-slate-500"
    class:p-8={!!icon}
    class:p-2={!icon}
  />
</div>
