<script lang="ts">
  import {
    Listbox,
    ListboxButton,
    ListboxLabel,
    ListboxOption,
    ListboxOptions,
    Transition,
  } from '@rgossiaux/svelte-headlessui';
  import { ChevronDown, Flag } from '@steeze-ui/heroicons';
  import Icon from '@steeze-ui/svelte-icon/Icon.svelte';

  export let value: string;
  export let options: { name: string; value: string; color: string }[];
</script>

<Listbox on:change {value} class="relative flex flex-col items-start">
  <ListboxLabel class="mr-2 p-0 text-sm text-slate-700">Priority</ListboxLabel>
  <ListboxButton
    class="flex items-center gap-1 rounded-lg border border-gray-300 bg-white p-3 capitalize text-slate-800 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-sky-600"
    >{value.toLowerCase()}
    <Icon src={Flag} size="16" class={`${options.find((o) => o.value === value)?.color}`} />
    <Icon src={ChevronDown} size="16" />
  </ListboxButton>
  <Transition
    enter="transition duration-100 ease-out"
    enterFrom="transform scale-95 opacity-0"
    enterTo="transform scale-100 opacity-100"
    leave="transition duration-75 ease-out"
    leaveFrom="transform scale-100 opacity-100"
    leaveTo="transform scale-95 opacity-0"
  >
    <ListboxOptions class="rounded-lg border border-gray-300 bg-white p-2 text-slate-800">
      {#each options as option}
        <ListboxOption
          value={option.value}
          class="flex items-baseline justify-between rounded-sm py-1 px-2  hover:bg-indigo-100"
        >
          {option.name}
          <Icon src={Flag} size="16" class={`${option.color} ml-2`} />
        </ListboxOption>
      {/each}
    </ListboxOptions>
  </Transition>
</Listbox>
