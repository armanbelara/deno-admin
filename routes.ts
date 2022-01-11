import { Router } from 'https://deno.land/x/oak@v10.1.0/mod.ts';

const router = new Router();

router
  .get('/', (context) => {
    context.response.body = "Hello World"
  })
  .get('/new', ({ response }) => {
    response.body = "New Endpoint"
  });

  export default router;