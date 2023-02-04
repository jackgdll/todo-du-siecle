import { createContext } from '$lib/trpc/context';
import { router } from '$lib/trpc/router';
import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import type { Values } from '$lib/components/Task/TaskDialog.svelte';
import { tasksParamSchema } from '../../../../params/tasks';

export const load = (async (event) => {
  const { session } = await event.parent();
  if (!session) throw redirect(307, '/login');
  const tasks = await router.createCaller(await createContext(event)).tasks.all();
  let params: {
    mode: string;
    id: string | null;
    initialValues?: Values;
  } | null;

  try {
    params = tasksParamSchema.parse(event.params.rest);
    if (params?.mode === 'edit') {
      const values = tasks.find((t) => t.id === params?.id);
      if (values) {
        params = {
          ...(params satisfies { mode: string; id: string | null }),
          initialValues: { ...values, due: values.due ? new Date(values.due) : null },
        };
      }
    }
  } catch (e) {
    throw redirect(307, '/tasks');
  }

  return {
    session,
    tasks,
    ...(params ? params : {}),
  };
}) satisfies PageServerLoad;
