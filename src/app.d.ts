/// <reference types="@sveltejs/kit" />

// See https://kit.svelte.dev/docs#typescript
// for information about these interfaces
declare namespace App {
	import type { Lang } from './global';

	interface Locals {
		lang: Lang | null;
	}

	interface Session {
		lang: Lang | null;
	}
}
