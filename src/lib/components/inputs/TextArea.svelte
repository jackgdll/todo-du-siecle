<script lang="ts">
  export let name: string;
  export let label: string = name;
  export let placeholder: string = label;
</script>

<div class="relative flex flex-col items-baseline">
  <label for={name} class="mb-1 p-0 text-sm capitalize text-slate-700 dark:text-slate-300"
    >{label}</label
  >
  <textarea
    {name}
    {placeholder}
    class="ml-auto w-full flex-1 rounded-lg border border-gray-300 bg-white px-2 py-2 placeholder:capitalize focus:border-transparent focus:outline-none focus:ring-2 focus:ring-sky-600 dark:border-gray-700 dark:bg-slate-700 dark:text-slate-200 dark:placeholder:text-slate-500"
  />
</div>
