<script lang="ts">
  import '../app.css';
</script>

<svelte:head>
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
  <link
    href="https://fonts.googleapis.com/css2?family=Cormorant:wght@500&display=swap&text=BOOKSTALFNTYVE"
    rel="stylesheet"
  />
</svelte:head>

<main class="m-auto max-w-2xl p-6">
  <slot />
</main>

<style lang="postcss">
  :global(html) {
    background-color: theme(colors.stone.100);
  }
</style>
