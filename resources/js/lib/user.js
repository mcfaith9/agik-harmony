import { reactive } from 'vue';
import axios from '@/lib/axios';

export const user = reactive({
  data: null,
  loading: false,
  error: null,
});

export async function fetchUser() {
  user.loading = true;

  try {
    const res = await axios.get('/user', {
      withCredentials: true,
    });
    console.log('✅ User fetched:', res.data);
    user.data = res.data;
    user.error = null;
  } catch (err) {
    console.error(err);
  } finally {
    user.loading = false;
  }
}
