<script setup>
  import { Icon } from '@iconify/vue';
  import { Badge } from '@/components/ui/badge';
  import { Button } from '@/components/ui/button';
  import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
  import { Separator } from '@/components/ui/separator';

  const title = 'Status'

  const options = [
    { label: 'Backlog', value: 'backlog' },
    { label: 'Todo', value: 'todo' },
    { label: 'In Progress', value: 'in progress' },
    { label: 'Done', value: 'done' },
  ]

  const selectedValues = new Set(['todo', 'done'])
</script>

<template>
  <Popover>
    <PopoverTrigger as-child>
      <Button variant="outline" size="sm" class="h-8 border-dashed" disabled>
        <Icon icon="radix-icons:plus-circled" class="mr-2 h-4 w-4" />
        {{ title }}

        <Separator orientation="vertical" class="mx-2 h-4" />

        <Badge variant="secondary" class="rounded-sm px-1 font-normal lg:hidden">
          {{ selectedValues.size }}
        </Badge>

        <div class="hidden space-x-1 lg:flex">
          <Badge variant="secondary" class="rounded-sm px-1 font-normal" v-if="selectedValues.size > 2">
            {{ selectedValues.size }} selected
          </Badge>

          <template v-else>
            <Badge
              v-for="option in options.filter(o => selectedValues.has(o.value))"
              :key="option.value"
              variant="secondary"
              class="rounded-sm px-1 font-normal"
            >
              {{ option.label }}
            </Badge>
          </template>
        </div>
      </Button>
    </PopoverTrigger>

    <PopoverContent class="w-[200px] p-0" align="start" disabled>
      <div class="p-3">
        <input type="text" placeholder="Status" disabled class="w-full p-2 border rounded mb-2" />
        <div class="space-y-1 max-h-48 overflow-y-auto">
          <div
            v-for="option in options"
            :key="option.value"
            class="flex items-center cursor-default select-none p-1 rounded border border-primary bg-primary text-primary-foreground"
          >
            <Icon icon="radix-icons:check" class="h-4 w-4 mr-2" />
            <span>{{ option.label }}</span>
            <span class="ml-auto font-mono text-xs">12</span>
          </div>
        </div>
        <button disabled class="w-full mt-2 py-1 text-center text-sm text-muted-foreground border rounded">
          Clear filters
        </button>
      </div>
    </PopoverContent>
  </Popover>
</template>
