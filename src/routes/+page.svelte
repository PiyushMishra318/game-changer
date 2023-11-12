<script lang="ts">
	import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';
	import { faArrowRight, faSpinner } from '@fortawesome/free-solid-svg-icons';
	import Tags from 'svelte-tags-input';
	import { goto } from '$app/navigation';
	import genres_and_platforms from '$lib/utils/genre-and-platforms.json';
	import type { Tags as TagsType, Tag, Game } from './+page';
	import { onMount } from 'svelte';
  import Recommendations from "./Recommendations.svelte"

  const { genreMap, platforms } = genres_and_platforms as any;
	let tags: TagsType = [];
	let isLoading = false;
	let isError = false;
	let results: Game[] = [];
  let searched = false;

	const triggerShake = () => {
		isError = true;
		// Use a timeout to ensure the class is removed and then re-added
		setTimeout(() => (isError = false), 250);
	};

	const handleSubmit = async (e: any) => {
		e.preventDefault();

		if (tags.length == 0) return triggerShake();

		const queryParams = new URLSearchParams();

		tags.forEach((tag: Tag) =>
			platforms.includes(tag.value)
				? queryParams.append('platform', tag.value)
				: queryParams.append('genre', tag.value)
		);
		goto('?' + queryParams.toString(), { replaceState: true });
		await retrieveSearchResults();
	};

	// Function to parse URL and update tags
	function initializeTagsFromURL() {
		const params = new URLSearchParams(window.location.search);
		const genreQ = params.getAll('genre');
		const platformQ = params.getAll('platform');
		tags = [
			...genreQ.map((gen) => ({ label: genreMap[gen], value: gen })),
			...platformQ.map((gen) => ({ label: genreMap[gen], value: gen }))
		];
	}

	const retrieveSearchResults = async () => {
		isLoading = true;
    searched = true;

		await new Promise((res, rej) => {
			setTimeout(() => {
				res(1);
        results = []
			}, 3000);
		});

		isLoading = false;
	};

	$: filteredGenres = Object.keys(genreMap)
		.map((val) =>
			tags.find((tag) => tag.value == val) ? undefined : { label: genreMap[val], value: val }
		)
		.filter((_) => _ != undefined);

	// Call the function on component mount
	onMount(async () => {
		initializeTagsFromURL();
		if (tags.length > 0) await retrieveSearchResults();
	});
</script>

<svelte:head>
	<title>Game Changer - Find the games that match your taste!</title>
	<meta
		name="description"
		content="Game changer helps you find the games that you like and similar games in the same genres."
	/>
</svelte:head>

<main id="app-main" class="h-full w-full flex flex-col">
	<div
		class:shake={isError}
		class="app-search max-w-[64rem] self-center w-full bg-gray-300 min-h-[48px] rounded-full text-black relative"
	>
		<form on:submit={handleSubmit} class="h-full">
			<Tags
				bind:tags
				name="tags"
				maxTags={5}
				autoComplete={filteredGenres}
				autoCompleteKey={'label'}
				autoCompleteShowKey={'value'}
				onlyUnique
				splitWith=","
				placeholder="Search a game genre"
				onlyAutocomplete
			/>

			<div class="absolute right-0 p-2 top-0 h-full flex justify-center items-center">
				<button
					class={`transition-all justify-center bg-[#3D2BBE] flex gap-1
          items-center p-2 rounded-full w-30 h-10 text-white
          disabled:cursor-not-allowed disabled:bg-[#8782AF]`}
					class:ease-in={isLoading}
					class:w-[40px]={isLoading}
					class:ease-out={!isLoading}
					class:px-5={!isLoading}
					type="submit"
					disabled={isLoading}
				>
					{#if isLoading}
						<span><FontAwesomeIcon class="h-4 w-4" spinPulse icon={faSpinner} /></span>
					{:else}
						<span class="flex items-center gap-1"
							>Search <FontAwesomeIcon class="h-4 w-4" icon={faArrowRight} /></span
						>
					{/if}
				</button>
			</div>
		</form>
	</div>
	<Recommendations {results} {searched} />
</main>

<style>
	.app-search :global(.svelte-tags-input-layout) {
		padding-left: 40px !important;
		padding-right: 130px !important;
		border-radius: 9999px !important;
		min-height: 48px !important;
		width: 100% !important;
		outline: none !important;
		border: none !important;
		background: rgb(232, 230, 227) !important;
	}
	.app-search :global(.svelte-tags-input-layout.focus) {
		box-shadow: 1px 1px 5px 1px #7045ff !important;
		outline: none !important;
	}

	.app-search :global(.svelte-tags-input-tags) {
		padding-left: 40px !important;
		padding-right: 130px !important;
		border-radius: 9999px !important;
		min-height: 48px !important;
		width: 100% !important;
		outline: none !important;
		border: none !important;
		background: rgb(232, 230, 227) !important;
	}
	.app-search :global(.svelte-tags-input-layout.focus) {
		box-shadow: 1px 1px 5px 1px #7045ff !important;
		outline: none !important;
	}
	@keyframes shake {
		0%,
		100% {
			transform: translateX(0);
		}
		25% {
			transform: translateX(-5px);
		}
		50% {
			transform: translateX(5px);
		}
		75% {
			transform: translateX(-5px);
		}
	}

	.shake {
		animation: shake 0.5s ease-in-out;
		box-shadow: 1px 1px 5px 1px red !important;
	}
</style>
