<script lang="ts">
  import { browser } from '$app/environment';
  import { goto } from '$app/navigation';
  import type { PageData } from './$types';

  export let data: PageData;

  if (browser) {
    goto(data.session ? '/tasks' : '/login');
  }
</script>
