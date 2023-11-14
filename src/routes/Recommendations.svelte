<script lang="ts">
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';
	import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
	import { results, searched } from '$stores/searchStore.js';

	const retrieveGeneral = async () => {
		results = [];
	};

	onMount(() => {
		// fetch the basic recommendations only if searched is false
	});
</script>

<div class="py-10 text-white flex flex-col gap-10">
	{#if searched}
		<div class="">Games you are looking for</div>
	{:else}
		<div class="flex flex-col gap-4">
			<div class="flex gap-2 items-end">
				<div class="text-3xl">Best of All Time</div>
			</div>
			<div class="flex gap-4 w-full h-[300px] overflow-hidden">
				<div
					class:visible={results.length > 3}
					class="invisible rounded-l-lg z-10 h-full opacity-50 flex items-center bg-black left-0 w-12 h-[250px]"
				>
					<FontAwesomeIcon class="h-10 w-10" icon={faChevronLeft} />
				</div>
				<div
					class="flex scroll-hidden items-center relative gap-4 w-full h-[300px] overflow-hidden"
				>
					<div
						class="flex flex-shrink-0 hover:shadow-lg shadow-[#5942FF] rounded-lg w-full h-full max-h-[250px] w-[350px] bg-white"
					/>
					<div
						class="flex flex-shrink-0 hover:shadow-lg shadow-[#5942FF] rounded-lg w-full h-full max-h-[250px] w-[350px] bg-white"
					/>
					<div
						class="flex flex-shrink-0 hover:shadow-lg shadow-[#5942FF] rounded-lg w-full h-full max-h-[250px] w-[350px] bg-white"
					/>
					<div
						class="flex flex-shrink-0 hover:shadow-lg shadow-[#5942FF] rounded-lg w-full h-full max-h-[250px] w-[350px] bg-white"
					/>
					<div
						class="flex flex-shrink-0 hover:shadow-lg shadow-[#5942FF] rounded-lg w-full h-full max-h-[250px] w-[350px] bg-white"
					/>
				</div>
				<div
					class:visible={false && page.bestOfAll < Math.floor(results.length / 3)}
					class="invisible rounded-r-lg z-10 flex items-center h-full opacity-50 bg-black right-4 h-[250px] w-12"
				>
					<FontAwesomeIcon class="h-10 w-10" icon={faChevronRight} />
				</div>
			</div>
		</div>
	{/if}
</div>
