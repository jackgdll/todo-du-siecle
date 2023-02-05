import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load = (async (event) => {
  const id = event.params.id;
  const { tasks } = await event.parent();
  const values = tasks.find((task) => task.id === id);
  if (!values) throw redirect(307, '/tasks/new');
  return {
    values,
  };
}) satisfies PageServerLoad;
