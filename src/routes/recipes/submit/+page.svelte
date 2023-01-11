<script>
	import PocketBase from 'pocketbase';
	//import { onMount } from 'svelte';
	//import { API_ID } from '$env/static/public'; // just testing for now, will make private in ssr later
	//import { API_PASSWORD } from '$env/static/public'; // ^

	const pb = new PocketBase('http://127.0.0.1:8090');

	let name;
	let ingredients;
	let details;
	let message = '';

	/* onMount(async () => {
		const authData = await pb.admins.authWithPassword(API_ID, API_PASSWORD);
		console.log(pb.authStore.isValid);
	}); */

	async function submitButton() {
		message = 'You have submitted! Thx m8';

		// example create data
		const data = {
			name: name,
			ingredients: ingredients,
			details: details
		};

		const record = await pb.collection('recipes').create(data);

		name = '';
		ingredients = '';
		details = '';
	}
</script>

<title>Recipe Home</title>
<div class="flex justify-center border-blue-600 bg-purple-400 min-h-screen">
	<div>
		<h1 class="text-4xl font-bold">Please enter your recipe</h1>

		<h2>Recipe Name</h2>
		<input class="border border-black" bind:value={name} />
		<h2>Recipe Ingredients</h2>
		<textarea class="border border-black" bind:value={ingredients} cols="50" rows="10" />
		<h2>Recipe Instructions</h2>
		<textarea class="border border-black" bind:value={details} cols="50" rows="20" />
		<br />
		<button on:click={submitButton} class="border border-black bg-purple-200 rounded w-24"
			>Submit</button
		>
		<h1>{message}</h1>
		<a href="/" class="text-cyan-400">return to home</a>
	</div>
</div>
