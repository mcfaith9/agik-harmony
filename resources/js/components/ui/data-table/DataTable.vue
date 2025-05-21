<script setup>
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';

import { DataTablePagination, DataTableToolbar } from '@/components/ui/data-table'

// Fake task data
const tasks = [
  { id: 'TASK001', title: 'Design homepage', status: 'In Progress', priority: 'High', dueDate: '2025-05-25' },
  { id: 'TASK002', title: 'Write blog post', status: 'Backlog', priority: 'Medium', dueDate: '2025-06-01' },
  { id: 'TASK003', title: 'Fix mobile nav bug', status: 'Done', priority: 'Low', dueDate: '2025-05-18' },
  { id: 'TASK004', title: 'Update user onboarding', status: 'Todo', priority: 'High', dueDate: '2025-05-30' },
]
</script>

<template>
  <div class="space-y-4">
    <DataTableToolbar />
    <div class="rounded-md border">
      <Table class="space-x-4">
        <TableCaption>A list of your current tasks.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead class="w-[120px]">Task ID</TableHead>
            <TableHead>Title</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Priority</TableHead>
            <TableHead class="text-right">Due Date</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          <TableRow v-for="task in tasks" :key="task.id">
            <TableCell class="font-medium">{{ task.id }}</TableCell>
            <TableCell>{{ task.title }}</TableCell>
            <TableCell>{{ task.status }}</TableCell>
            <TableCell>{{ task.priority }}</TableCell>
            <TableCell class="text-right">{{ task.dueDate }}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>

    <DataTablePagination />
  </div>
</template>
