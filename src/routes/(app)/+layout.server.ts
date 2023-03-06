import type { LayoutServerLoad } from './$types';
import crypto from 'crypto-js';

export const load: LayoutServerLoad = async (event) => {
  const session = await event.locals.getSession();
  if (!session || !session.user || session.user.image)
    return { session };

  const initials = session.user.name ?? session.user.email?.split('@').at(0)?.split('.').join('+') ?? '';
  const initialsAvatar = `https://ui-avatars.com/api/?name=${initials}&background=random`;

  const gravatarId = crypto.MD5(session.user.email?.trim().toLowerCase() || '');
  const gravatar = `http://www.gravatar.com/avatar/${gravatarId}?d=${encodeURIComponent(initialsAvatar)}`;

  session.user.image = gravatar;

  return {
    session,
  };
};
