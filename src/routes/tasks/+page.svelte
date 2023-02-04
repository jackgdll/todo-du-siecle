<script lang="ts">
  import { invalidateAll } from '$app/navigation';
  import Button from '$lib/components/inputs/Button.svelte';
  import TaskDialog from '$lib/components/Task/TaskDialog.svelte';
  import TaskCard from '$lib/components/Task/TaskCard.svelte';
  import { signOut } from '@auth/sveltekit/client';
  import { PlusCircle } from '@steeze-ui/heroicons';
  import { Icon } from '@steeze-ui/svelte-icon';
  import { flip } from 'svelte/animate';
  import type { PageServerData } from './$types';

  export let data: PageServerData;

  let open = false;

  const bgColors = {
    LOW: 'bg-lime-200',
    MEDIUM: 'bg-yellow-200',
    HIGH: 'bg-pink-200',
  } as const;

  let editId: string | null = null;

  const newTask = () => {
    editId = null;
    open = true;
  };
</script>

<svelte:head>
  <title>Todo du Siècle</title>
  <meta name="description" content="Tasks" />
</svelte:head>

<TaskDialog {open} {editId} close={() => (open = false)} />
<header class="flex items-center">
  <h1 class="my-14 text-center text-5xl font-extrabold text-zinc-800">
    Le <span class="funky-text">Todo</span> du siècle
  </h1>
  <div class="ml-auto flex gap-2 text-right">
    <Button
      on:click={() => {
        signOut();
        invalidateAll();
      }}
      variant="secondary">Sign Out</Button
    >
    <Button on:click={newTask}>
      <Icon src={PlusCircle} size="20" />
      New Task</Button
    >
  </div>
</header>

<ul class="flex flex-col gap-2">
  {#if !data.tasks.length}
    <li
      class="list-none rounded-lg border border-stone-300 bg-opacity-10 p-5 shadow-md shadow-slate-200"
    >
      <Button on:click={newTask} class="m-auto">
        <Icon src={PlusCircle} size="20" />
        New Task</Button
      >
    </li>
  {:else}
    {#each data.tasks as task (task.id)}
      <li
        class="list-none rounded-lg border border-stone-300 bg-opacity-10 {bgColors[
          task.priority
        ]} p-5 shadow-md shadow-slate-200"
        class:border-lime-600={task.priority === 'LOW'}
        class:border-yellow-400={task.priority === 'MEDIUM'}
        class:border-pink-600={task.priority === 'HIGH'}
        animate:flip={{ duration: 200 }}
      >
        <TaskCard {task} />
      </li>
    {/each}
  {/if}
</ul>
