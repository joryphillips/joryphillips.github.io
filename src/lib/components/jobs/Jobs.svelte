<script lang="ts">
	import type { Job } from '$lib/jory';
	interface Props {
		job: Job;
	}

	const { job }: Props = $props();
</script>

<div class="mb-8">
	<h2 class="mb-2 flex flex-wrap items-baseline gap-2">
		<div class="text-lg font-semibold text-pink-700/95 dark:text-pink-400/95">{job.place}</div>
		<div class="text-lg font-semibold text-gray-600 dark:text-gray-300">{job.date}</div>
	</h2>
	<p class="leading-relaxed">{job.summary}</p>
</div>
