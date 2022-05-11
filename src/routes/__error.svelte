<script context="module">
	/** @type {import('@sveltejs/kit').Load} */
	export function load({ error, status }) {
		return {
			props: {
				error: `${status}: ${error?.message}`
			}
		};
	}
</script>

<script lang="ts">
	export let error: string;
</script>

<h1>{error}</h1>
