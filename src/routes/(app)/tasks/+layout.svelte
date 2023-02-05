<script lang="ts">
  import Button from '$lib/components/inputs/Button.svelte';
  import TaskCard from '$lib/components/Task/TaskCard.svelte';
  import { PlusCircle } from '@steeze-ui/heroicons';
  import { Icon } from '@steeze-ui/svelte-icon';
  import { flip } from 'svelte/animate';
  import type { LayoutServerData } from './$types';
  import { goto } from '$app/navigation';

  export let data: LayoutServerData;

  const newTask = () => {
    goto('/tasks/new');
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

<slot />
<header class="mt-16 mb-8 flex items-center gap-4 ">
  <h1 class="mr-auto text-5xl font-extrabold text-zinc-800 dark:text-zinc-100 md:text-center">
    Le <span class="funky-text">Todo</span><br class="md:hidden" />
    du siècle
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
            goto(`/tasks/edit/${task.id}`);
          }}
        />
      </li>
    {/each}
  {/if}
</ul>
