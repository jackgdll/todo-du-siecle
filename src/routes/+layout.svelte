<script lang="ts">
  import { darkMode } from '$lib/darkMode';
  import '../app.css';

  $darkMode;
</script>

<slot />

<style lang="postcss">
  :global(html) {
    background-color: theme(colors.stone.100);
    @apply transition-all duration-300;
  }
  :global(html.dark) {
    background-color: theme(colors.slate.900);
  }
</style>
