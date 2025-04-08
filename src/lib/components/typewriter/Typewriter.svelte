<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import type { ClassValue } from 'svelte/elements';

	interface TypewriterProps {
		class?: ClassValue;
		items: string[];
		typeSpeed?: number;
		eraseSpeed?: number;
		delayAfterType?: number;
	}

	let {
		class: classes,
		items = [],
		typeSpeed = 70,
		eraseSpeed = 50,
		delayAfterType = 1000
	}: TypewriterProps = $props();

	// Internal state
	let currentText = $state('');
	let currentIndex = 0;
	let isTyping = true;
	let commonPrefixLength = 0;
	let targetString = '';
	let timer: number;

	function startAnimation() {
		if (items.length === 0) return;

		if (isTyping) {
			const target = targetString || items[currentIndex];

			// If we still have characters to type
			if (currentText.length < target.length) {
				currentText = target.substring(0, currentText.length + 1);
				timer = window.setTimeout(() => startAnimation(), typeSpeed);
			} else {
				// Finished typing, wait before erasing
				timer = window.setTimeout(() => {
					isTyping = false;

					const currentString = items[currentIndex];
					const nextIndex = (currentIndex + 1) % items.length;
					const nextString = items[nextIndex];

					// Find the common prefix
					let i = 0;
					while (
						i < currentString.length &&
						i < nextString.length &&
						currentString[i] === nextString[i]
					) {
						i++;
					}
					commonPrefixLength = i;

					// Set target string for next phase
					targetString = nextString;

					startAnimation();
				}, delayAfterType);
			}
		} else {
			// Erasing phase
			// If we still have characters to erase to reach the common prefix
			if (currentText.length > commonPrefixLength) {
				currentText = currentText.substring(0, currentText.length - 1);
				timer = window.setTimeout(() => startAnimation(), eraseSpeed);
			} else {
				// Finished erasing, start typing the next string from the common prefix
				currentIndex = (currentIndex + 1) % items.length;
				isTyping = true;
				timer = window.setTimeout(() => startAnimation(), typeSpeed);
			}
		}
	}

	onMount(() => {
		startAnimation();
	});

	onDestroy(() => {
		if (timer) {
			window.clearTimeout(timer);
		}
	});
</script>

<span class={classes}>{currentText}</span>
<span class="cursor"></span>

<style>
	.cursor {
		display: inline-block;
		width: 2px;
		height: 1em;
		background-color: currentColor;
		margin-left: 2px;
		animation: blink 1s step-end infinite;
	}

	@keyframes blink {
		from,
		to {
			opacity: 1;
		}
		50% {
			opacity: 0;
		}
	}
</style>
