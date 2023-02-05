<script lang="ts">
  import type { PageServerData } from './$types';
  import { goto } from '$app/navigation';
  import TaskDialog from '$lib/components/Task/TaskDialog.svelte';

  export let data: PageServerData;
</script>

<TaskDialog
  open
  close={() => goto('/tasks/')}
  editId={data?.values.id}
  initialValues={{ ...data.values, due: data.values.due ? new Date(data.values.due) : null }}
/>
