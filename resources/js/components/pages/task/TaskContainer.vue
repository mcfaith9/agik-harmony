<script setup>
	import { Button } from '@/components/ui/button';
	import TaskList from '@/components/pages/task/TaskList.vue';
	import { Badge } from '@/components/ui/badge';	
</script>

<template>
	<h2
    class="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0"
  >
    Task List
  </h2>
	<div class="rounded-2xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-white/[0.03]">
		<div>
			<div class="items-center px-4 py-5 xl:px-6 xl:py-6">
				<div class="min-h-screen w-full gap-5 sm:justify-between xl:flex-row xl:items-center">
					<div class="items-center gap-x-1 gap-y-2 rounded-lg p-0.5">
						<TaskList />
					</div>
				</div>
			</div>
		</div>
	</div>
</template>