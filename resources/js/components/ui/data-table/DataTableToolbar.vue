<script setup>
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Icon } from '@iconify/vue'

import { DataTableFacetedFilter, DataTableViewOptions } from '@/components/ui/data-table';

// Static example data for filters
const statuses = [
  { value: 'backlog', label: 'Backlog' },
  { value: 'todo', label: 'Todo' },
  { value: 'in progress', label: 'In Progress' },
  { value: 'done', label: 'Done' },
  { value: 'canceled', label: 'Canceled' },
]

const priorities = [
  { value: 'low', label: 'Low' },
  { value: 'medium', label: 'Medium' },
  { value: 'high', label: 'High' },
]
</script>

<template>
  <div class="flex items-center justify-between">
    <div class="flex flex-1 items-center space-x-2">
      <Input
        placeholder="Filter tasks..."
        model-value="example filter"
        class="h-8 w-[150px] lg:w-[250px]"
        disabled
      />

      <!-- Static Faceted Filters -->
      <DataTableFacetedFilter
        title="Status"
        :options="statuses"
        disabled
      />

      <DataTableFacetedFilter
        title="Priority"
        :options="priorities"
        disabled
      />

      <Button variant="ghost" class="h-8 px-2 lg:px-3" disabled>
        Reset
        <Icon icon="radix-icons:cross-2" class="ml-2 h-4 w-4" />
      </Button>
    </div>

    <DataTableViewOptions />
  </div>
</template>
