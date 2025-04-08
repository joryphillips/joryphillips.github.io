<script lang="ts">
	import { ROLES, RESUME, PORTFOLIO } from '$lib/jory';
	import Typewriter from '$lib/components/typewriter/Typewriter.svelte';
	import VennDiagram from '$lib/components/venn-diagram/VennDiagram.svelte';
	import Jobs from '$lib/components/jobs/Jobs.svelte';
	import ProjectCard from '$lib/components/project-card/ProjectCard.svelte';
	import { page } from '$app/state';
	import { kebabCase } from '$lib/kebab_case';

	let params = $derived(page.url.searchParams);
	let selectedProject = $derived(params.get('project') || '');
</script>

<main>
	<section id="summary" class="bg-neutral-50 px-4 pt-21 pb-8 text-center dark:bg-sky-950">
		<h1 class="mb-4 text-6xl font-semibold tracking-wider uppercase">Jory Phillips</h1>
		<Typewriter class="text-2xl" items={ROLES} />
	</section>

	<section class="bg-neutral-50 dark:bg-sky-950">
		<div class="mx-auto max-w-prose px-4">
			<p class="mb-4 text-lg leading-[2.2rem] font-normal">
				I build things that make people's lives easier and better. I have designed & developed apps
				for Google, helped a branding agency brand itself, and created design guidelines and
				illustrations for major cities and a movie studio/theme park. I've led teams that make
				complicated stuff, and I am often eager to attempt the impossible.
			</p>

			<VennDiagram />
		</div>
	</section>

	<section
		id="visuals"
		class="border-y border-neutral-200/50 bg-gray-100 pt-21 pb-12 dark:border-neutral-500/50 dark:bg-sky-950/90"
	>
		<div class="mx-auto max-w-6xl px-4">
			<h2 class="mb-6 text-3xl font-semibold">Visuals & Projects</h2>
			<div
				class="grid auto-rows-[minmax(300px,auto)] grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-4"
			>
				{#each PORTFOLIO as project}
					<ProjectCard
						{project}
						selected={selectedProject === encodeURIComponent(kebabCase(project.title))}
					/>
				{/each}
			</div>
		</div>
	</section>

	<section id="experience" class="bg-neutral-50 pt-21 pb-21 dark:bg-sky-950">
		<div class="mx-auto max-w-prose px-4">
			<h1 class="mb-6 text-3xl font-bold">Experience</h1>
			<div class="mt-6">
				{#each RESUME as job}
					<Jobs {job} />
				{/each}
			</div>
		</div>
	</section>
</main>

<footer
	class="bg-neutral-100dark:border-neutral-500/50 bottom-0 h-13 border-t border-neutral-200/50 dark:bg-sky-950"
>
	<div class="mx-auto flex max-w-prose flex-1 gap-4 px-4">
		<a href="https://www.linkedin.com/in/joryphillips" class="py-4 text-xs">linkedin</a>
		<a href="https://github.com/joryphillips/joryphillips.github.io" class="ml-8 py-4 text-xs"
			>src</a
		>
	</div>
</footer>
