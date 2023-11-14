<script lang="ts">
	import Recommendations from './Recommendations.svelte';
	import SearchBar from './SearchBar.svelte';
</script>

<svelte:head>
	<title>Game Changer - Find the games that match your taste!</title>
	<meta
		name="description"
		content="Game changer helps you find the games that you like and similar games in the same genres."
	/>
</svelte:head>

<main id="app-main" class="h-full w-full flex flex-col">
	<SearchBar />
	<Recommendations />
</main>
