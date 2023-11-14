import { writable } from "svelte/store";

export const tags = writable([]);
export const isLoading = writable(false);
export const isError = writable(false);
export const searched = writable(false);
export const results = writable([]);
