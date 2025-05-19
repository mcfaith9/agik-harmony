<script setup lang="ts">
  import { ref } from 'vue';
  import axios from 'axios';
  import { Button } from '@/components/ui/button';
  import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
  import { Input } from '@/components/ui/input';
  import { Label } from '@/components/ui/label';
  import { toast } from 'vue-sonner';

  const form = ref({
    first_name: '',
    last_name: '',
    email: '',
    password: '',
  });

  async function register() {
    try {
      const res = await axios.post('/register', {
        name: `${form.value.first_name} ${form.value.last_name}`,
        email: form.value.email,
        password: form.value.password,
        password_confirmation: form.value.password,
      });

      toast('Account created!', {
        description: 'You can now sign in.',
      });
    } catch (err: any) {
      toast('Registration failed', {
        description: err.response?.data?.message || 'Something went wrong',
        variant: 'destructive',
      });
    }
  }
</script>

<template>
  <Card class="mx-auto max-w-sm">
    <form @submit.prevent="register">
      <CardHeader>
        <CardTitle class="text-xl">Sign Up</CardTitle>
        <CardDescription>
          Enter your information to create an account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div class="grid gap-4">
          <div class="grid grid-cols-2 gap-4">
            <div class="grid gap-2">
              <Label for="first-name">First name</Label>
              <Input v-model="form.first_name" id="first-name" placeholder="Max" required />
            </div>
            <div class="grid gap-2">
              <Label for="last-name">Last name</Label>
              <Input v-model="form.last_name" id="last-name" placeholder="Robinson" required />
            </div>
          </div>
          <div class="grid gap-2">
            <Label for="email">Email</Label>
            <Input v-model="form.email" id="email" type="email" placeholder="m@example.com" required />
          </div>
          <div class="grid gap-2">
            <Label for="password">Password</Label>
            <Input v-model="form.password" id="password" type="password" required />
          </div>
          <Button type="submit" class="w-full">Create an account</Button>
          <Button type="button" variant="outline" class="w-full">
            Sign up with GitHub
          </Button>
        </div>

        <div class="mt-4 text-center text-sm">
          Already have an account?
          <a href="#" class="underline">Sign in</a>
        </div>
      </CardContent>
    </form>
  </Card>
</template>
