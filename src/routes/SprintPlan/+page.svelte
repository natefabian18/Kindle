<script lang="ts">
	import type { Task } from '$lib/DBTypes';
	let Tasks: Task[] = $state([]);
</script>

<main class="container-fluid">
	<h1>Sprint Planning</h1>

	<div class="SprintControls">
		<button>Back</button>
		<div>
			<p>Sprint</p>
			<p>1</p>
		</div>
		<button>Next</button>
	</div>
	<div class="content">
		<div class="NewTask">
			<button>Add</button>
			<input type="text" placeholder="Task Name" />
		</div>

		<div class="TaskList">
			{#each Tasks as Task}{/each}
		</div>
	</div>
</main>

<style>
	h1 {
		text-align: center;
	}

	.content {
		display: grid;
	}

	.SprintControls {
		display: flex;
		justify-content: center;
		gap: 1rem;
		text-align: center;
	}

	.SprintControls p {
		margin: 0;
	}
</style>
