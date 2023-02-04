<script lang="ts">
  import '../app.css';
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
