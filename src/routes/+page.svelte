<script lang="ts">
	import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';
	import { faArrowRight, faSpinner } from '@fortawesome/free-solid-svg-icons';
	import Tags from 'svelte-tags-input';
	import { goto } from '$app/navigation';
	import genres_and_platforms from '$lib/utils/genre-and-platforms.json';
	import type { Tags as TagsType, Tag } from './+page';
	import { onMount } from 'svelte';
	import { fade, slide } from 'svelte/transition';
	const { genreMap, genres, platforms } = genres_and_platforms as any;
	let tags: TagsType = [];
	let isLoading = false;
	const handleSubmit = async (e: any) => {
		e.preventDefault();
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

		return await new Promise((res, rej) => {
			setTimeout(() => {
				isLoading = false;
				res(1);
			}, 3000);
		});
	};

	// Call the function on component mount
	onMount(async () => {
		initializeTagsFromURL();
		await retrieveSearchResults();
	});
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<main id="app-main" class="h-full w-full flex">
	<div class="app-search w-full bg-gray-300 min-h-[48px] rounded-full text-black relative">
		<form on:submit={handleSubmit} class="h-full">
			<Tags
				bind:tags
				name="tags"
				maxTags={5}
				autoComplete={genres}
				autoCompleteKey={'value'}
				autoCompleteShowKey={'label'}
				onlyUnique
				splitWith=","
				placeholder="Search a game genre"
				onlyAutocomplete
			/>
			<div class="absolute right-0 p-2 top-0 h-full flex justify-center items-center">
				<button
					class="transition-all justify-center bg-[#3D2BBE] flex gap-1 items-center p-2 rounded-full w-30 h-10 text-white"
          class:ease-in={isLoading}
          class:w-[40px]={isLoading}
          class:ease-out={!isLoading}
					class:px-5={!isLoading}
          type="submit"
				>
					{#if isLoading}
						<span><FontAwesomeIcon spinPulse icon={faSpinner} /></span>
					{:else}
						<span>Search <FontAwesomeIcon icon={faArrowRight} /></span>
					{/if}
				</button>
			</div>
		</form>
	</div>
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
	.app-main {
		height: 200px;
		width: 200px;
	}
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}

	h1 {
		width: 100%;
	}

	.welcome {
		display: block;
		position: relative;
		width: 100%;
		height: 0;
		padding: 0 0 calc(100% * 495 / 2048) 0;
	}

	.welcome img {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		display: block;
	}
</style>
