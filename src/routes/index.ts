import { Router } from "express";
import emailRoutes from './emailRoutes'

const router = Router();

const defaultRoutes = [
    { path: "/email", route: emailRoutes }
]

defaultRoutes.forEach((route) => {
    router.use(route.path, route.route);
  });
  
  export default router;