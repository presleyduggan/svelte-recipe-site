<script>
	let name;
	let ingredients;
	let details;
	let message = '';

	function submitButton() {
		message = 'You have submitted! Thx m8';
		name = '';
		ingredients = '';
		details = '';
	}
</script>

<title>Recipe Home</title>
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
