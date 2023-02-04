<script lang="ts">
  import { Switch } from '@rgossiaux/svelte-headlessui';

  export let enabled: boolean;
</script>

<Switch
  checked={enabled}
  on:change={(e) => {
    enabled = e.detail;
  }}
  class="relative inline-flex h-6 w-11 items-center rounded-full {enabled
    ? 'bg-sky-600'
    : 'bg-stone-400 dark:bg-slate-100'}"
>
  <span
    class="absolute m-[-1px] h-[1px] w-[1px] overflow-hidden whitespace-nowrap border-0 p-0"
    style="clip: rect(0, 0, 0, 0)">Enable notifications</span
  >
  <span
    class="inline-block h-4 w-4 rounded-full bg-white transition-all dark:bg-slate-900"
    class:translate-x-6={enabled}
    class:translate-x-1={!enabled}
  />
</Switch>
