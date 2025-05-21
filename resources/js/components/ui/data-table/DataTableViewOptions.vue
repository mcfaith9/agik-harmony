<script setup>
  import { Icon } from '@iconify/vue';
  import { Button } from '@/components/ui/button'
  import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
  import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
    CommandShortcut,
  } from '@/components/ui/command';

  const viewOptions = [
    { value: 'table', label: 'Table', icon: 'radix-icons:table' },
    { value: 'list', label: 'List', icon: 'radix-icons:list-bullet' },
    { value: 'gallery', label: 'Gallery', icon: 'radix-icons:columns' },
  ]

  const selectedValue = 'table';
</script>

<template>
  <Popover>
    <PopoverTrigger as-child>
      <Button variant="outline" size="sm" class="h-8" disabled>
        <Icon :icon="viewOptions.find(v => v.value === selectedValue).icon" class="mr-2 h-4 w-4" />
        {{ viewOptions.find(v => v.value === selectedValue).label }}
      </Button>
    </PopoverTrigger>

    <PopoverContent class="w-[160px] p-0" align="start" disabled>
      <Command class="rounded-lg border shadow-md max-w-[450px]">
          <CommandInput placeholder="Type a command or search..." />
        </Command>
    </PopoverContent>
  </Popover>
</template>
