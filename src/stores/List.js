import { writable } from 'svelte/store';

let storage = { ...localStorage };
let i = Object.keys(storage).length;

function UserList() {
	const { subscribe, set, update } = writable([storage]);

	const addItem = (item) => {	
		localStorage.setItem(i, item);
		i += 1;
	};

	return {
		subscribe,
		addItem
	}
}


export const List = UserList();

