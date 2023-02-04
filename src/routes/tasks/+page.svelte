<script lang="ts">
  import Button from '$lib/components/inputs/Button.svelte';
  import TaskDialog, { type Values } from '$lib/components/Task/TaskDialog.svelte';
  import TaskCard from '$lib/components/Task/TaskCard.svelte';
  import { PlusCircle } from '@steeze-ui/heroicons';
  import { Icon } from '@steeze-ui/svelte-icon';
  import { flip } from 'svelte/animate';
  import type { PageServerData } from './$types';

  export let data: PageServerData;

  let open = false;
  let editId: string | null = null;
  let values: Values | undefined;

  const newTask = () => {
    editId = null;
    open = true;
  };

  const bgColors = {
    LOW: 'bg-lime-200 dark:bg-emerald-700',
    MEDIUM: 'bg-yellow-200 dark:bg-yellow-700',
    HIGH: 'bg-pink-200 dark:bg-pink-700',
  } as const;
</script>

<svelte:head>
  <title>Todo du Siècle</title>
  <meta name="description" content="Tasks" />
</svelte:head>

{#if open}
  <TaskDialog open={true} {editId} close={() => (open = false)} initialValues={values} />
{/if}
<header class="flex items-center">
  <h1 class="my-14 mr-auto text-center text-5xl font-extrabold text-zinc-800 dark:text-zinc-100">
    Le <span class="funky-text">Todo</span> du siècle
  </h1>
  <Button on:click={newTask}>
    <Icon src={PlusCircle} size="20" />
    New Task</Button
  >
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
        class="list-none rounded-lg border border-stone-300 bg-opacity-10 dark:bg-opacity-100 {bgColors[
          task.priority
        ]} p-5 shadow-md shadow-slate-200 dark:shadow-slate-800"
        class:border-lime-600={task.priority === 'LOW'}
        class:border-amber-400={task.priority === 'MEDIUM'}
        class:border-pink-600={task.priority === 'HIGH'}
        animate:flip={{ duration: 300 }}
      >
        <TaskCard
          {task}
          edit={() => {
            editId = task.id;
            open = true;
            values = { ...task, due: task.due ? new Date(task.due) : null };
          }}
        />
      </li>
    {/each}
  {/if}
</ul>
