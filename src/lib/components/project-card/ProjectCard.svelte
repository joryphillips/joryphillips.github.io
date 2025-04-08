<script lang="ts">
	import Clock from './Clock.svelte';
	import type { Project } from '$lib/jory.ts';
	import { kebabCase } from '$lib/kebab_case';
	import { fade, fly } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
	import { page } from '$app/state';
	import { goto } from '$app/navigation';

	interface Props {
		project: Project;
		selected?: boolean;
	}

	const { project, selected = false }: Props = $props();
	const params = $derived(page.url.searchParams);

	const IMAGE_PATH = './images/';
	const CLOCK_PATH = 'heathrow-clock.svg';

	const showClock = project.imageSources[0] === CLOCK_PATH;
	const imageSourcePath = IMAGE_PATH + project.imageSources[0];
	const queryTitle = encodeURIComponent(kebabCase(project.title));
	const projectParams = $derived(params.get('project'));

	const showModal = $derived(queryTitle === projectParams);

	function toggleModal() {
		if (projectParams) {
			goto('/', { noScroll: true });
		} else {
			goto(`/?project=${queryTitle}`, { noScroll: true });
		}
	}

	function handleKeydown(event: KeyboardEvent) {
		if (event.key === 'Escape' && showModal) {
			goto('/', { noScroll: true });
		}
	}

	function handleOverlayClick(event: MouseEvent) {
		if (event.target === event.currentTarget) {
			goto('/', { noScroll: true });
		}
	}
</script>

<svelte:window onkeydown={handleKeydown} />

<div
	class={{
		'project-card': true,
		selected: selected
	}}
>
	<button
		onclick={toggleModal}
		onkeydown={(e) => e.key === 'Enter' && toggleModal()}
		class="group flex h-[300px] w-full items-center justify-center overflow-hidden rounded-lg border border-neutral-200 bg-white p-3 shadow-sm transition-shadow duration-300 ease-in-out hover:shadow-lg focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 focus:outline-none dark:border-neutral-700 dark:bg-neutral-200"
		aria-label="Get more project info"
	>
		{#if showClock}
			<Clock />
		{:else}
			<img
				loading="lazy"
				class="block max-h-full max-w-full transition-opacity duration-200 ease-out hover:opacity-100"
				src={imageSourcePath}
				alt="image of {project.title}"
			/>
		{/if}
	</button>

	<div class="flex h-8 items-center justify-between p-[.25rem_.5rem]">
		<h2 class="m-0 text-base font-medium">
			{project.title}
		</h2>
		<div class="ml-[0.7rem] flex items-center">
			{#if project.href}
				<a
					class="m-0 flex h-auto cursor-pointer items-center bg-transparent leading-[1.125rem] font-bold no-underline opacity-70 hover:opacity-100"
					href={project.href}
				>
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18px" height="18px">
						<path d="M0 0h24v24H0z" fill="none" />
						<path
							class="launch"
							d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"
						/>
					</svg>
					<span class="sr-only">Go to project reference</span>
				</a>
			{/if}
		</div>
	</div>
</div>

{#if showModal}
	<div
		class="fixed inset-0 z-50 flex items-center justify-center bg-neutral-900/85 px-2 dark:bg-neutral-950/80"
		onclick={handleOverlayClick}
		onkeydown={handleKeydown}
		role="dialog"
		tabindex="-1"
		transition:fade={{ duration: 200 }}
	>
		<div
			class="modal-content relative w-full max-w-4xl rounded-lg bg-white p-6 shadow-xl dark:bg-neutral-800"
			transition:fly={{ y: 20, duration: 300, easing: quintOut }}
		>
			<button
				class="absolute top-3 right-3 rounded-full p-1 text-neutral-500 hover:bg-neutral-100 hover:text-neutral-700 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-200"
				onclick={toggleModal}
				aria-label="Close modal"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
				>
					<path d="M18 6L6 18M6 6l12 12"></path>
				</svg>
			</button>

			<div class="flex flex-col gap-6 md:flex-row">
				<div class="min-w-0 flex-1">
					<div
						class="flex h-[200px] items-center justify-center overflow-hidden rounded-lg bg-white p-3 md:h-[300px] dark:bg-neutral-700"
					>
						{#if showClock}
							<Clock />
						{:else}
							<img
								class="block max-h-full max-w-full"
								src={imageSourcePath}
								alt="image of {project.title}"
							/>
						{/if}
					</div>
				</div>

				<div class="min-w-0 flex-1">
					<h2 class="mb-4 text-xl font-bold">{project.title}</h2>
					<p class="mb-4">{project.description}</p>

					{#if project.keywords?.length}
						<div class="mb-4 flex flex-wrap gap-2">
							{#each project.keywords as tag}
								<span class="rounded-full bg-neutral-100 px-3 py-1 text-sm dark:bg-neutral-700"
									>{tag}</span
								>
							{/each}
						</div>
					{/if}

					{#if project.href}
						<a
							href={project.href}
							class="inline-flex items-center gap-2 rounded-md bg-sky-800 px-4 py-2 text-white transition-colors hover:bg-sky-700 dark:bg-sky-700 dark:hover:bg-sky-600"
						>
							Visit Project
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="16"
								height="16"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
							>
								<path d="M7 17l10-10M7 7h10v10"></path>
							</svg>
						</a>
					{/if}
				</div>
			</div>
		</div>
	</div>
{/if}

<style>
	@media (prefers-color-scheme: dark) {
		.project-card {
			opacity: 0.95;
		}
	}

	svg path.launch {
		fill: currentColor;
	}

	.modal-content {
		max-height: 90vh;
		overflow-y: auto;
	}
</style>
