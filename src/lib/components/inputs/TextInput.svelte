<script lang="ts">
  import { Icon } from '@steeze-ui/svelte-icon';
  import type { IconSource } from '@steeze-ui/svelte-icon/types';

  export let name: string;
  export let label: string = name;
  export let placeholder: string = label;
  export let type: string = 'text';
  export let icon: IconSource | undefined = undefined;
</script>

<div class="flex items-baseline flex-col relative">
  <label for={name} class="text-sm p-0 text-slate-700 capitalize">{label}</label>
  {#if !!icon}
    <Icon src={icon} size="20" class="absolute translate-y-8 translate-x-2" />
  {/if}
  <input
    {type}
    {name}
    {placeholder}
    class="border bg-white border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-600 focus:border-transparent pl-$pr-2 py-2 flex-1 w-full ml-auto placeholder:capitalize"
    class:p-8={!!icon}
    class:p-2={!icon}
  />
</div>
