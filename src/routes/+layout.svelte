<script>
	import Header from '$lib/Header.svelte';
	import '../app.css';
	import Footer from '$lib/Footer.svelte';
</script>

<div class="app">
	<Header />
	<main>
		<slot />
	</main>
	<Footer />
</div>

<style>
	.app {
		display: flex;
		font-family: monospace;
		flex-direction: column;
		min-height: 100vh;
		background-size: contain;
		background-image: url('/src/lib/images/app-bg.jpg');
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 80rem;
		margin: 0 auto;
		box-sizing: border-box;
	}
</style>
