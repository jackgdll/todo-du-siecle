<script lang="ts">
  import type { IconSource } from '@steeze-ui/heroicons/types';
  import { Icon } from '@steeze-ui/svelte-icon';

  export let icon: IconSource | undefined;
</script>

<button
  class={`flex w-full items-center justify-between gap-5 rounded-md border-0 p-2 text-sm hover:bg-indigo-100 ${
    $$restProps.class || ''
  }`}
  on:click
>
  <slot />
  {#if !!icon}
    <Icon src={icon} size="20" />
  {/if}
</button>
