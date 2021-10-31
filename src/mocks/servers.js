import { setupServer } from "msw/node";
import { detailPageHandlers, handlers } from "./handlers";

export const server = setupServer(...handlers);
export const serverArticleApiGuardian = setupServer(...detailPageHandlers);
