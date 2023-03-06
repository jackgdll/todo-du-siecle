<script lang="ts">
  import { Icon } from '@steeze-ui/svelte-icon';
  import { ExclamationCircle, InformationCircle } from '@steeze-ui/heroicons';

  export let errors: string[] = [];
  export let warnings: string[] = [];
  export let touched = false;
</script>

<div class="my-2 flex flex-col gap-1">
  {#each errors as error}
    <div
      class="flex items-center gap-2 rounded-lg border border-red-700 bg-red-200 p-2 text-pink-900 opacity-80"
    >
      <Icon src={ExclamationCircle} size="20" />
      <p class="text-sm text-red-800">
        {error}
      </p>
    </div>
  {:else}
    {#if touched}
      {#each warnings as warning}
        <div
          class="border border-yellow-700 bg-amber-200 opacity-80 p-2 flex gap-2 rounded-lg items-center text-amber-900"
        >
          <Icon src={InformationCircle} size="20" />
          <p class="text-yellow-700 text-sm">
            {warning}
          </p>
        </div>
      {/each}
    {/if}
  {/each}
</div>
