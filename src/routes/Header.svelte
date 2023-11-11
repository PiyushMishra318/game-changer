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
		background: rgb(113 113 113 / 85%);
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

	nav {
		display: flex;
		justify-content: center;
		--background: rgba(255, 255, 255, 0.7);
	}

	svg {
		width: 2em;
		height: 3em;
		display: block;
	}

	path {
		fill: var(--background);
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

	li {
		position: relative;
		height: 100%;
	}

	li[aria-current='page']::before {
		--size: 6px;
		content: '';
		width: 0;
		height: 0;
		position: absolute;
		top: 0;
		left: calc(50% - var(--size));
		border: var(--size) solid transparent;
		border-top: var(--size) solid var(--color-theme-1);
	}

	nav a {
		display: flex;
		height: 100%;
		align-items: center;
		padding: 0 0.5rem;
		color: var(--color-text);
		font-weight: 700;
		font-size: 0.8rem;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		text-decoration: none;
		transition: color 0.2s linear;
	}

	a:hover {
		color: var(--color-theme-1);
	}
</style>
