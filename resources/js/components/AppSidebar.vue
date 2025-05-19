<script setup>
  import { inject } from 'vue';
  import {
    AudioWaveform,
    Command,
    Frame,
    GalleryVerticalEnd,
    Map,
    PieChart,
    Settings2,
    SquareTerminal,
  } from 'lucide-vue-next';
  import NavMain from '@/components/NavMain.vue';
  import NavProjects from '@/components/NavProjects.vue';
  import NavUser from '@/components/NavUser.vue';
  import TeamSwitcher from '@/components/TeamSwitcher.vue';

  import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarRail,
  } from '@/components/ui/sidebar';

  const props = defineProps({
    side: { type: String, required: false },
    variant: { type: String, required: false },
    collapsible: { type: String, required: false, default: 'icon' },
    class: { type: null, required: false },
  });

  const user = inject('user');

  const data = {
    teams: [
      {
        name: 'Acme Inc',
        logo: GalleryVerticalEnd,
        plan: 'Enterprise',
      },
      {
        name: 'Acme Corp.',
        logo: AudioWaveform,
        plan: 'Startup',
      },
      {
        name: 'Evil Corp.',
        logo: Command,
        plan: 'Free',
      },
    ],
    navMain: [
      {
        title: 'Work',
        url: '#',
        icon: SquareTerminal,
        isActive: true,
        items: [
          {
            title: 'Task',
            url: 'task',
          },
          {
            title: 'Projects',
            url: 'project',
          },
          {
            title: 'Timesheet',
            url: 'timesheet',
          },
        ],
      },
      {
        title: 'Settings',
        url: '#',
        icon: Settings2,
        items: [
          {
            title: 'General',
            url: '#',
          },
          {
            title: 'Accounts',
            url: '#',
          },
        ],
      },
    ],
    projects: [
      {
        name: 'Design Engineering',
        url: '#',
        icon: Frame,
      },
      {
        name: 'Sales & Marketing',
        url: '#',
        icon: PieChart,
      },
      {
        name: 'Travel',
        url: '#',
        icon: Map,
      },
    ],
  };

  const emit = defineEmits(['change-page']);

  function handleChangePage(pageName) {
    emit('change-page', pageName);
  }
</script>

<template>
  <Sidebar v-bind="props">
    <SidebarHeader>
      <TeamSwitcher :teams="data.teams" />
    </SidebarHeader>
    <SidebarContent>
      <NavMain :items="data.navMain" @change-page="handleChangePage" />
      <NavProjects :projects="data.projects" />
    </SidebarContent>
    <SidebarFooter>
      <NavUser :user="user.data" />
    </SidebarFooter>
    <SidebarRail />
  </Sidebar>
</template>
