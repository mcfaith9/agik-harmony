<script setup>
  import axios from '@/lib/axios';
  import { useRouter } from 'vue-router';
  import { computed } from 'vue'; 
  import {
    BadgeCheck,
    Bell,
    ChevronsUpDown,
    CreditCard,
    LogOut,
    Sparkles,
  } from 'lucide-vue-next';

  import {
    Avatar,
    AvatarFallback,
    AvatarImage,
  } from '@/components/ui/avatar';
  import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from '@/components/ui/dropdown-menu';
  import {
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    useSidebar,
  } from '@/components/ui/sidebar';

  const router = useRouter();

  async function logoutUser() {
    try {
      await axios.post('/logout', {}, { withCredentials: true });
      router.push('/');
    } catch (error) {
      console.error('Logout failed:', error);
    }
  }

  const userInitials = computed(() => {
    if (!props.user?.name) return '';

    const parts = props.user.name.trim().split(' ');

    if (parts.length === 1) {
      return parts[0][0]?.toUpperCase() ?? '';
    }

    return (
      (parts[0][0] ?? '').toUpperCase() +
      (parts[1][0] ?? '').toUpperCase()
    );
  });

  const props = defineProps({
    user: { type: Object, required: true },
  });

  const { isMobile } = useSidebar();
</script>

<template>
  <SidebarMenu>
    <SidebarMenuItem>
      <DropdownMenu>
        <DropdownMenuTrigger as-child>
          <SidebarMenuButton 
            size="lg" 
            class="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground">
            <Avatar class="h-8 w-8 rounded-lg">
              <AvatarImage src="https://static.vecteezy.com/system/resources/previews/009/292/244/non_2x/default-avatar-icon-of-social-media-user-vector.jpg" :alt="user.name" />
              <AvatarFallback class="rounded-lg">{{ userInitials }}</AvatarFallback>
            </Avatar>
            <div class="grid flex-1 text-left text-sm leading-tight">
              <span class="truncate font-medium">{{ user.name }}</span>
              <span class="truncate text-xs">{{ user.email }}</span>
            </div>
            <ChevronsUpDown class="ml-auto size-4" />
          </SidebarMenuButton>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          class="w-[--reka-dropdown-menu-trigger-width] min-w-56 rounded-lg"
          :side="isMobile ? 'bottom' : 'right'"
          align="end"
          :side-offset="4"
        >
          <DropdownMenuLabel class="p-0 font-normal">
            <div class="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
              <Avatar class="h-8 w-8 rounded-lg">
                <AvatarImage src="https://static.vecteezy.com/system/resources/previews/009/292/244/non_2x/default-avatar-icon-of-social-media-user-vector.jpg" :alt="user.name" />
                <AvatarFallback class="rounded-lg">{{ userInitials }}</AvatarFallback>
              </Avatar>
              <div class="grid flex-1 text-left text-sm leading-tight">
                <span class="truncate font-semibold">{{ user.name }}</span>
                <span class="truncate text-xs">{{ user.email }}</span>
              </div>
            </div>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem @click="logoutUser" class="cursor-pointer">
            <LogOut />
            Log out
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </SidebarMenuItem>
  </SidebarMenu>
</template>
