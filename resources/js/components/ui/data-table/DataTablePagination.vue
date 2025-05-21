<script setup>
import { Icon } from '@iconify/vue'

import { Button } from '@/components/ui/button'
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from '@/components/ui/select'

// Static placeholders
const selectedRows = 3
const totalRows = 25
const pageSize = '10'
const pageIndex = 1
const pageCount = 5
</script>

<template>
  <div class="flex items-center justify-between px-2">
    <div class="flex-1 text-sm text-muted-foreground">
      {{ selectedRows }} of {{ totalRows }} row(s) selected.
    </div>

    <div class="flex items-center space-x-6 lg:space-x-8">
      <!-- Rows per page -->
      <div class="flex items-center space-x-2">
        <p class="text-sm font-medium">Rows per page</p>
        <Select :model-value="pageSize">
          <SelectTrigger class="h-8 w-[70px]">
            <SelectValue :placeholder="pageSize" />
          </SelectTrigger>
          <SelectContent side="top">
            <SelectItem v-for="size in [10, 20, 30, 40, 50]" :key="size" :value="String(size)">
              {{ size }}
            </SelectItem>
          </SelectContent>
        </Select>
      </div>

      <!-- Page indicator -->
      <div class="flex w-[100px] items-center justify-center text-sm font-medium">
        Page {{ pageIndex }} of {{ pageCount }}
      </div>

      <!-- Pagination buttons -->
      <div class="flex items-center space-x-2">
        <Button variant="outline" class="hidden h-8 w-8 p-0 lg:flex" disabled>
          <span class="sr-only">Go to first page</span>
          <Icon icon="radix-icons:double-arrow-left" class="h-4 w-4" />
        </Button>
        <Button variant="outline" class="h-8 w-8 p-0" disabled>
          <span class="sr-only">Go to previous page</span>
          <Icon icon="radix-icons:chevron-left" class="h-4 w-4" />
        </Button>
        <Button variant="outline" class="h-8 w-8 p-0">
          <span class="sr-only">Go to next page</span>
          <Icon icon="radix-icons:chevron-right" class="h-4 w-4" />
        </Button>
        <Button variant="outline" class="hidden h-8 w-8 p-0 lg:flex">
          <span class="sr-only">Go to last page</span>
          <Icon icon="radix-icons:double-arrow-right" class="h-4 w-4" />
        </Button>
      </div>
    </div>
  </div>
</template>
