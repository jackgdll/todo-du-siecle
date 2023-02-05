<script lang="ts">
  import { invalidateAll } from '$app/navigation';
  import {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
    Transition,
  } from '@rgossiaux/svelte-headlessui';
  import { ChevronDown, EllipsisVertical, PencilSquare, Trash } from '@steeze-ui/heroicons';
  import { Icon } from '@steeze-ui/svelte-icon';
  import { trpc } from '../../trpc/client';
  import type { TaskOutput } from '../../trpc/routes/tasks';
  import CheckboxInput from '../inputs/CheckboxInput.svelte';
  import MenuItemButton from './MenuItemButton.svelte';

  export let task: TaskOutput;

  export let edit: () => void;

  const toggleCompleted = async (e: CustomEvent<boolean>) => {
    task.completed = e.detail;
    const res = await trpc().tasks.update.mutate({
      id: task.id,
      completed: e.detail,
    });
    if (res) {
      invalidateAll();
      return;
    }
    alert('Update failed');
  };

  const deleteTask = async () => {
    const res = await trpc().tasks.delete.mutate(task.id);
    if (res) {
      invalidateAll();
      return;
    }
    alert('Delete failed');
  };
</script>

<Disclosure let:open>
  <DisclosureButton
    class="flex w-full items-center gap-4 border-0 text-xl focus:shadow-none"
    disabled={!task.description}
  >
    <CheckboxInput checked={task.completed} on:change={toggleCompleted} />
    <h2 class="mr-auto text-slate-700 dark:text-slate-100 dark:text-opacity-90">
      {task.title}
    </h2>
    {#if task.due}
      <p class="text-sm text-slate-500 dark:text-slate-300">
        {task.due && new Date(task.due).toLocaleDateString()}
      </p>
    {/if}
    {#if task.description}
      <Icon
        src={ChevronDown}
        size="20"
        class="stroke-slate-800 transition dark:stroke-slate-100 {open ? 'rotate-180' : ''}"
      />
    {/if}
    <Menu class="relative">
      <MenuButton class="rounded-full border-0 p-2 hover:bg-gray-200 dark:bg-opacity-20">
        <Icon src={EllipsisVertical} size="20" class="stroke-slate-500 dark:stroke-slate-100" />
      </MenuButton>
      <MenuItems
        class="dark absolute z-20 translate-y-2 rounded-lg border border-gray-300 bg-white p-2 shadow-sm dark:border-slate-800 dark:bg-slate-700"
      >
        <MenuItem>
          <MenuItemButton
            on:click={edit}
            icon={PencilSquare}
            class="text-indigo-500 dark:text-violet-400"
          >
            Edit
          </MenuItemButton>
        </MenuItem>
        <MenuItem>
          <MenuItemButton
            on:click={deleteTask}
            icon={Trash}
            class="text-red-500 dark:text-rose-500"
          >
            Delete
          </MenuItemButton>
        </MenuItem>
      </MenuItems>
    </Menu>
  </DisclosureButton>
  <Transition
    enter="transition duration-100 ease-out"
    enterFrom="transform scale-95 opacity-0"
    enterTo="transform scale-100 opacity-100"
    leave="transition duration-75 ease-out"
    leaveFrom="transform scale-100 opacity-100"
    leaveTo="transform scale-95 opacity-0"
  >
    {#if open && task.description}
      <DisclosurePanel
        class="mx-3 mt-2 rounded-lg border border-slate-200 bg-slate-50 p-4 text-slate-600 dark:bg-slate-800 dark:text-slate-100"
        static>{task.description}</DisclosurePanel
      >
    {/if}
  </Transition>
</Disclosure>
