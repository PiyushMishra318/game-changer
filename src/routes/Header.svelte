<script>
	import { page } from '$app/stores';
	import logo from '$lib/images/game-changer.png';
	import github from '$lib/images/github.svg';
	const githubURL = process.env.VITE_REPO_URL;

	const appURL =
		process.env.VITE_ENV === 'DEV' ? process.env.VITE_APP_DEV_URL : process.env.VITE_APP_PROD_URL;
</script>

<header class="shadow-lg rounded-b-lg sticky top-0 flex justify-between items-center">
	<div class="corner">
		<a href={appURL}>
			<img src={logo} class="rounded-full" alt="GameChanger" />
		</a>
	</div>

	<div class="uppercase text-xl text-white font-semibold">Game Changer</div>

	<div class="corner">
		<a href={githubURL}>
			<img src={github} alt="GitHub" />
		</a>
	</div>
</header>

<style>
	header {
		background: #3D2BBE;
	}

	.corner {
		width: 3em;
		height: 3em;
	}

	.corner a {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100%;
	}

	.corner img {
		width: 2em;
		height: 2em;
		object-fit: contain;
	}

	div {
		position: relative;
		padding: 0;
		margin: 0;
		height: 3em;
		display: flex;
		justify-content: center;
		align-items: center;
		list-style: none;
		background: var(--background);
		background-size: contain;
	}

	a:hover {
		color: var(--color-theme-1);
	}
</style>
