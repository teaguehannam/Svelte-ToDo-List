import { writable } from 'svelte/store';

let storage = { ...localStorage };

function UserList() {
	const { subscribe, set, update } = writable([storage]);

	const addItem = (item) => {
		localStorage.setItem(Object.keys(storage).length, item);
	};

	return {
		subscribe,
		addItem
	}
}


export const List = UserList();

