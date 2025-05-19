<script setup>
  import { ChevronRight, HeartPlus } from 'lucide-vue-next';
  import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
  } from '@/components/ui/collapsible';
  import {
    SidebarGroup,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarMenuSub,
    SidebarMenuSubButton,
    SidebarMenuSubItem,
  } from '@/components/ui/sidebar';

  defineProps({
    items: { type: Array, required: true },
  });

  const emit = defineEmits(['change-page']);

  function onMenuItemClick(pageName) {
    emit('change-page', pageName);
  }
</script>

<template>
  <SidebarGroup>
    <SidebarGroupLabel>Home</SidebarGroupLabel>
    <SidebarMenu>
      <Collapsible
        v-for="item in items"
        :key="item.title"
        as-child
        :default-open="item.isActive"
        class="group/collapsible"
      >
        <SidebarMenuItem>
          <CollapsibleTrigger as-child>
            <SidebarMenuButton :tooltip="item.title" class="cursor-pointer select-none">
              <component :is="item.icon" v-if="item.icon" />
              <span>{{ item.title }}</span>
              <ChevronRight
                class="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90"
              />
            </SidebarMenuButton>
          </CollapsibleTrigger>
          <CollapsibleContent>
            <SidebarMenuSub>
              <SidebarMenuSubItem v-for="subItem in item.items" :key="subItem.title">
                <SidebarMenuSubButton 
                  class="cursor-pointer select-none"
                  as-child 
                  @click.prevent="onMenuItemClick(subItem.url)">
                  <span>{{ subItem.title }}</span>
                </SidebarMenuSubButton>
              </SidebarMenuSubItem>
            </SidebarMenuSub>
          </CollapsibleContent>
        </SidebarMenuItem>
      </Collapsible>

      <SidebarMenuItem>
        <SidebarMenuButton class="cursor-pointer">
          <HeartPlus />
          <span>Support</span>
        </SidebarMenuButton>
      </SidebarMenuItem>
    </SidebarMenu>
  </SidebarGroup>
</template>
