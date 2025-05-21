<script setup>
	import { Plus } from 'lucide-vue-next';
	import { Button } from '@/components/ui/button';
	import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
</script>

<template>
	<Tabs default-value="all-task">
	  <div class="flex select-none">
	  	<TabsList class="flex">
	  	  <TabsTrigger value="all-task" class="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-full h group">
	  	    All Tasks
	  	    <span class="inline-flex rounded-full py-0.5 text-xs font-medium leading-normal">23</span>
	  	  </TabsTrigger>
	  	  <TabsTrigger value="done" class="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-full h group">
	  	    To Do
	  	    <span class="inline-flex rounded-full py-0.5 text-xs font-medium leading-normal">4</span>
	  	  </TabsTrigger>	
	  	  <TabsTrigger value="in-progress" class="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-full h group">
	  	    In Progress
	  	    <span class="inline-flex rounded-full py-0.5 text-xs font-medium leading-normal">17</span>
	  	  </TabsTrigger> 	        
	  	</TabsList>	  
	  	<Button variant="outline" size="sm" class="ml-auto flex h-8 border-dashed rounded-full bg-blue">
	  	 Add Task 
	  	 <Plus />
	  	</Button>
	  </div> 		  
	  <TabsContent value="all-task">
	    Make changes to your account here.
	  </TabsContent>
	  <TabsContent value="done">
	    Change your password here.
	  </TabsContent>
	</Tabs>
</template>