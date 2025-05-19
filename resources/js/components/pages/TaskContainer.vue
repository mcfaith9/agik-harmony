<script setup>
	import { Button } from '@/components/ui/button'
</script>

<template>
	<div class="flex">
		<div class="flex ml-auto gap-2 px-4">
			<Button class="rounded-full select-none cursor-pointer px-3 py-2 text-xs font-medium">Completed</Button>
			<Button class="rounded-full select-none cursor-pointer px-3 py-2 text-xs font-medium">In Review</Button>
			<Button class="rounded-full select-none cursor-pointer px-3 py-2 text-xs font-medium">On Hold</Button>
			<Button class="rounded-full select-none cursor-pointer px-3 py-2 text-xs font-medium">In Progress</Button>
		</div>
	</div>
</template>