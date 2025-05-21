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
import TaskContainer from '@/components/pages/task/TaskContainer.vue';
import TimesheetContainer from '@/components/pages/TimesheetContainer.vue';

const currentPage = ref('task');
const parent = ref('work');

const version = import.meta.env.VITE_APP_VERSION;

const pages = {
	task: TaskContainer,
	project: ProjectContainer,
	timesheet: TimesheetContainer,
};

const breadcrumbTitles = {
	work: 'Work',
	settings: 'Settings',
	admin: 'Admin',
	task: 'Tasks',
	project: 'Projects',
	timesheet: 'Timesheet',
	general: 'General',
	accounts: 'Accounts',
	users: 'Users',
	roles: 'Roles',
};

const menuStructure = {
	work: ['task', 'project', 'timesheet'],
	settings: ['general', 'accounts'],
	admin: ['users', 'roles'],
};

function findParent(pageName) {
	for (const [parentName, children] of Object.entries(menuStructure)) {
		if (children.includes(pageName)) return parentName;
	}
	return null;
}

function switchPage(pageName) {
	currentPage.value = pageName;
	parent.value = findParent(pageName);
}
</script>

<template>
	<SidebarProvider>
		<AppSidebar @change-page="switchPage" />
		<SidebarInset>
			<header class="flex justify-between h-16 shrink-0 items-center gap-2 px-4 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12 sticky top-0">
				<div class="flex items-center gap-2 bg-white rounded-full">
					<SidebarTrigger class="-ml-1" />
					<Separator orientation="vertical" class="mr-2 data-[orientation=vertical]:h-4" />
					<Breadcrumb>
						<BreadcrumbList>
							<BreadcrumbItem class="hidden md:block">
								<BreadcrumbLink href="#">App</BreadcrumbLink>
							</BreadcrumbItem>
							<BreadcrumbSeparator class="hidden md:block" />
							<BreadcrumbItem v-if="parent && breadcrumbTitles[parent]">
								<BreadcrumbLink href="#">{{ breadcrumbTitles[parent] }}</BreadcrumbLink>
							</BreadcrumbItem>
							<BreadcrumbSeparator class="hidden md:block" />
							<BreadcrumbItem>
								<BreadcrumbPage>{{ breadcrumbTitles[currentPage] }}</BreadcrumbPage>
							</BreadcrumbItem>
						</BreadcrumbList>
					</Breadcrumb>
				</div>

				<DarkMode />
			</header>
			<div class="flex flex-1 flex-col gap-4 p-4 pt-0">
				<div class="mt-2">
					<component :is="pages[currentPage]" />
				</div>

				<div class="fixed bottom-4 right-4 z-50 text-sm px-3 py-1">
					version {{ version }}
				</div>
			</div>
		</SidebarInset>
	</SidebarProvider>
</template>
