<script lang="ts" context="module">
  export type Values = RouterInputs['tasks']['create'];
</script>

<script lang="ts">
  import { Dialog, DialogOverlay, DialogTitle } from '@rgossiaux/svelte-headlessui';
  import { createForm } from 'felte';
  import { z, ZodError, type ZodIssue } from 'zod';
  import { validator } from '@felte/validator-zod';
  import { Icon } from '@steeze-ui/svelte-icon';
  import { PencilSquare, PlusCircle } from '@steeze-ui/heroicons';
  import TextInput from '../inputs/TextInput.svelte';
  import ValidationError from '../inputs/ValidationError.svelte';
  import SelectInput from '../inputs/SelectInput.svelte';
  import DateInput from '../inputs/DateInput.svelte';
  import { trpc } from '../../trpc/client';
  import { invalidateAll } from '$app/navigation';
  import Button from '../inputs/Button.svelte';
  import { TRPCClientError } from '@trpc/client';
  import type { RouterInputs } from '$lib/trpc/router';
  import TextArea from '../inputs/TextArea.svelte';
  import { page } from '$app/stores';

  export let open = false;
  export let close: () => void;
  export let initialValues: Values = {
    title: '',
    description: '',
    due: null,
    priority: 'LOW',
  };
  export let editId: string | null = null;

  const warnSchema = z.object({
    title: z.string().min(1).max(100),
    due: z.literal('').or(z.coerce.date().min(new Date(), 'Due date is in the past')),
  });

  const { form, setFields, setErrors, data, errors, warnings, touched } = createForm<Values>({
    onSubmit: async (v) => {
      if (editId) {
        await trpc($page).tasks.update.mutate({ id: editId, ...v });
      } else {
        await trpc($page).tasks.create.mutate(v);
      }
      invalidateAll();
    },
    onError: (err) => {
      if (err instanceof TRPCClientError) {
        const errors: ZodIssue[] = JSON.parse(err.message);
        errors && errors.forEach((e) => {
          const path = e.path.at(0)?.toString() as keyof Values | undefined;
          if (path)
            setErrors(path, e.message);
        });
      } else {
        throw err;
      }
    },
    initialValues,
    extend: [validator({ schema: warnSchema, level: 'warning' })],
  });

  const options = [
    { id: 0, name: 'Low', value: 'LOW', color: 'fill-lime-600' },
    { id: 1, name: 'Medium', value: 'MEDIUM', color: 'fill-yellow-400' },
    { id: 2, name: 'High', value: 'HIGH', color: 'fill-pink-600' },
  ];
</script>

<Dialog bind:open on:close={close}>
  <DialogOverlay class="absolute top-0 left-0 z-10 h-full w-full bg-slate-600 opacity-50" />
  <form
    use:form
    class="absolute top-1/2 left-1/2 z-20 flex max-h-[90vh] w-11/12 max-w-full -translate-x-1/2 -translate-y-1/2 flex-col space-y-4 rounded-lg bg-slate-50 py-7 shadow-lg dark:bg-slate-800 md:w-1/2"
  >
    <DialogTitle class="funky-text z-20 text-center text-3xl"
      >{editId ? 'Edit Task' : 'Create new Task'}</DialogTitle
    >
    <section class="flex flex-col overflow-y-auto px-11">
      <TextInput name="title" />
      <ValidationError
        errors={$errors.title ?? []}
        warnings={$warnings.title ?? []}
        touched={$touched.title}
      />
      <TextArea name="description" />
      <ValidationError
        errors={$errors.description ?? []}
        warnings={$warnings.description ?? []}
        touched={$touched.description}
      />
      <div class="flex justify-between gap-2">
        <SelectInput
          on:change={(e) => setFields('priority', e.detail)}
          value={$data.priority ?? 'LOW'}
          {options}
        />
        <DateInput name="due" label="Due Date" />
      </div>
      <ValidationError
        errors={$errors.due ?? []}
        warnings={$warnings.due ?? []}
        touched={$touched.due}
      />
    </section>
    <div class="flex w-full flex-col-reverse justify-end gap-2 px-7  md:flex-row">
      <Button on:click={close} variant="secondary" class="w-full md:w-auto">Cancel</Button>
      <Button on:click={close} type="submit" variant="primary" class="w-full md:w-auto">
        <Icon src={editId ? PencilSquare : PlusCircle} size="20" />
        {editId ? 'Edit' : 'Create'}
      </Button>
    </div>
  </form>
</Dialog>
