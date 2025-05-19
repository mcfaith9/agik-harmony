<script setup>
  import { ref } from 'vue';
  import axios from '@/lib/axios';
  import { cn } from '@/lib/utils';
  import { loading } from '@/lib/loading';
  import { useRouter } from 'vue-router';
  import { Button } from '@/components/ui/button';
  import { Card, CardContent } from '@/components/ui/card';
  import { Input } from '@/components/ui/input';
  import { Label } from '@/components/ui/label';
  import { Github, Facebook } from '@/components/svg';

  const props = defineProps({
    class: { type: null, required: false },
  });

  const email = ref('');
  const password = ref('');
  const errorMessage = ref(null);
  const router = useRouter();

  async function submitLogin(event) {
    event.preventDefault();
    errorMessage.value = null;

    try {
      // Get CSRF cookie
      await axios.get('/sanctum/csrf-cookie')

      await axios.request({
        method: 'POST',
        url: '/login',
        headers: {
          Accept: 'application/json',
        },
        data: {
          email: email.value,
          password: password.value,
        }
      }).catch(error => {
        console.log(error);
      });

      loading.value = true;
      setTimeout(() => {
        loading.value = false;
        router.push('/app');
      }, 3000);

    } catch (error) {
      if (error.response && error.response.status === 422) {
        errorMessage.value = 'Invalid email or password.'
      } else {
        errorMessage.value = 'Something went wrong. Please try again.'
      }
    }
  }
</script>

<template>
  <div :class="cn('flex flex-col gap-6', props.class)">
    <Card class="overflow-hidden p-0">
      <CardContent class="grid p-0 md:grid-cols-2">
        <form class="p-6 md:p-8" @submit="submitLogin">
          <div class="flex flex-col gap-6">
            <div class="flex flex-col items-center text-center">
              <h1 class="text-2xl font-bold">Welcome back</h1>
              <p class="text-muted-foreground text-balance">
                Login to your Acme Inc account
              </p>
            </div>
            <div class="grid gap-3">
              <Label for="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                v-model="email"
                required
              />
            </div>
            <div class="grid gap-3">
              <div class="flex items-center">
                <Label for="password">Password</Label>
                <a
                  href="#"
                  class="ml-auto text-sm underline-offset-2 hover:underline"
                >
                  Forgot your password?
                </a>
              </div>
              <Input id="password" type="password" v-model="password" required />
            </div>
            <Button type="submit" class="w-full"> Login </Button>
            <div
              class="after:border-border relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t"
            >
              <span class="bg-card text-muted-foreground relative z-10 px-2">
                Or continue with
              </span>
            </div>
            <div class="grid grid-cols-3 gap-4">
              <Button variant="outline" type="button" class="w-full">
                <Github />
                <span class="sr-only">Login with Github</span>
              </Button>
              <Button variant="outline" type="button" class="w-full">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path
                    d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"
                    fill="currentColor"
                  />
                </svg>
                <span class="sr-only">Login with Google</span>
              </Button>
              <Button variant="outline" type="button" class="w-full">
                <Facebook />
                <span class="sr-only">Login with Facebook</span>
              </Button>
            </div>
            <div class="text-center text-sm">
              Don't have an account?
              <a href="#" class="underline underline-offset-4"> Sign up </a>
            </div>
          </div>
        </form>
        <div class="bg-muted relative hidden md:block">
          <img
            src="https://plus.unsplash.com/premium_photo-1676478746990-4ef5c8ef234a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Image"
            class="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
          />
        </div>
      </CardContent>
    </Card>
    <div
      class="text-muted-foreground *:[a]:hover:text-primary text-center text-xs text-balance *:[a]:underline *:[a]:underline-offset-4"
    >
      By clicking continue, you agree to our
      <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>.
    </div>
  </div>
</template>
