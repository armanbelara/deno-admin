import { Router } from 'https://deno.land/x/oak@v6.4.1/mod.ts';

const router = new Router();

router
  .get('/', (context) => {
    context.response.body = "Hello World"
  })
  .get('/new', ({ response }) => {
    response.body = "New Endpoint"
  });

  export default router;