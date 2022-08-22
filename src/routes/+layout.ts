
import { loadTranslations } from '$lib/translations';
import type { LayoutData } from '../../.svelte-kit/types/src/routes/$types';

export const load: LayoutData = async ({ data }) => {

  await loadTranslations(data.lang)
  return
}