<script setup>
	import { ref } from 'vue';
	import DarkMode from '@/components/DarkMode.vue';
	import AppSidebar from '@/components/AppSidebar.vue';
	import {
		Breadcrumb,
		BreadcrumbItem,
		BreadcrumbLink,
		BreadcrumbList,
		BreadcrumbPage,
		BreadcrumbSeparator,
	} from '@/components/ui/breadcrumb';
	import { Separator } from '@/components/ui/separator';
	import {
		SidebarInset,
		SidebarProvider,
		SidebarTrigger,
	} from '@/components/ui/sidebar';
	
	import ProjectContainer from '@/components/pages/ProjectContainer.vue';
	import TaskContainer from '@/components/pages/TaskContainer.vue';

	const currentPage = ref('task');
	const version = import.meta.env.VITE_APP_VERSION;

	const pages = {
	  task: TaskContainer,
	  project: ProjectContainer,
	};

	function switchPage(pageName) {
	  currentPage.value = pageName;
	}
</script>

<template>
	<SidebarProvider>
		<AppSidebar @change-page="switchPage" />
		<SidebarInset>
			<header class="flex justify-between h-16 shrink-0 items-center gap-2 px-4 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
				<div class="flex items-center gap-2">
					<SidebarTrigger class="-ml-1" />
					<Separator orientation="vertical" class="mr-2 data-[orientation=vertical]:h-4" />
					<Breadcrumb>
						<BreadcrumbList>
							<BreadcrumbItem class="hidden md:block">
								<BreadcrumbLink href="#">
									Building Your Application
								</BreadcrumbLink>
							</BreadcrumbItem>
							<BreadcrumbSeparator class="hidden md:block" />
							<BreadcrumbItem>
								<BreadcrumbPage>Data Fetching</BreadcrumbPage>
							</BreadcrumbItem>
						</BreadcrumbList>
					</Breadcrumb>
				</div>

				<DarkMode />
			</header>
			<div class="flex flex-1 flex-col gap-4 p-4 pt-0">
				<component :is="pages[currentPage]" />

				<div class="fixed bottom-4 right-4 z-50 text-sm px-3 py-1">
					version {{ version }}
				</div>
			</div>
		</SidebarInset>
	</SidebarProvider>
</template>
