import { rest } from "msw";
import { mockArticle, mockArrayApi } from "./handlersCtx";

export const handlers = [
  rest.get(
    "https://api-guardians.herokuapp.com/news",
    async (req, res, ctx) => {
      const resp = res(ctx.json(mockArrayApi));
      return resp;
    }
  ),
];

export const detailPageHandlers = [
  rest.get(
    "https://content.guardianapis.com/football/live/2021/oct/23/crystal-palace-v-newcastle-leeds-v-wolves-and-more-football-clockwatch-live",
    async (req, res, ctx) => {
      const query = req.url.searchParams;
      query.append("api-key", "54d47472-427a-49dc-b6af-d65d241bc415");
      query.append("show-fields", "all");
      const resp = res(ctx.json(mockArticle));
      return resp;
    }
  ),
];
