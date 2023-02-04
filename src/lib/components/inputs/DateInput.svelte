<script lang="ts">
  export let name: string;
  export let label: string = name;
  export let placeholder: string = label;
</script>

<div class="flex items-baseline sm:flex-col">
  <label for={name} class="p-0 text-sm capitalize text-slate-700">{label}</label>
  <input
    type="date"
    {name}
    {placeholder}
    class="w-full flex-1 rounded-lg border border-gray-300 bg-white p-2 placeholder:capitalize focus:border-transparent focus:outline-none focus:ring-2 focus:ring-sky-600"
  />
</div>
