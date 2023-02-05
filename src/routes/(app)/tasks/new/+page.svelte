<script lang="ts">
  import { goto } from '$app/navigation';
  import TaskDialog from '$lib/components/Task/TaskDialog.svelte';
</script>

<TaskDialog open close={() => goto('/tasks/')} />
