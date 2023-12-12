import { postRouter } from "~/server/api/routers/post";
import { createTRPCRouter } from "~/server/api/trpc";
import { navigationRouter } from "./routers/navigations";
import { certRouter } from "./routers/certificate";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  post: postRouter,
  navItems: navigationRouter,
  cert: certRouter
});

// export type definition of API
export type AppRouter = typeof appRouter;
