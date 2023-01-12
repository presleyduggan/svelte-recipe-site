import { writable } from 'svelte/store';
import Pocketbase from 'pocketbase';

export let pocketbase = new pocketbase('127.0.0.1:8090');

export const user = writable(pocketbase.authStore.model);

function updateUser() {
	user.set(pb.authStore.model);
}

pb.authStore.onChange(updateUser);
