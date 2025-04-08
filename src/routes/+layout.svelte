<script lang="ts">
	import '../app.css';
	const { children } = $props();

	const navColors =
		'border-transparent bg-transparent text-sky-900/90 dark:text-sky-100/90 text-sky-900/90 dark:text-sky-100/90 hover:bg-sky-200/30 dark:hover:bg-sky-700/30';

	const navFocus =
		'focus:outline-none focus-visible:bg-sky-100/20 focus-visible:ring-2 focus-visible:ring-sky-800 dark:focus-visible:ring-sky-700 ring-inset';

	const navText = 'leading-[1.125rem] font-semibold text-inherit no-underline';

	const navOther =
		'relative z-10 float-left cursor-pointer border p-4 align-middle transition-colors duration-150 ease-[cubic-bezier(0.645,0.045,0.355,1)]';

	const navItemClasses = [navColors, navFocus, navText, navOther];
</script>

<header
	class="fixed top-0 right-0 left-0 z-10 h-13 border-b border-neutral-200 bg-neutral-100 dark:border-neutral-500/50 dark:bg-sky-950"
>
	<nav class="mx-auto flex max-w-xl flex-1">
		<a href="/#summary" class={navItemClasses}>Summary</a>
		<a href="/#visuals" class={navItemClasses}>Visuals</a>
		<a href="/#experience" class={navItemClasses}>Experience</a>
	</nav>
</header>

{@render children()}
