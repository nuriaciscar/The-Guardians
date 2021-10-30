import { rest } from "msw";

export const handlers = [
  rest.get(
    "https://api-guardians.herokuapp.com/news",
    async (req, res, ctx) => {
      const resp = res(
        ctx.json([
          {
            sectionName: "SECTION",
            articleDate: "20-10-1994",
            imageSource: "http://url/",
            articleTitle: "ULTIMAS NOTICIAS",
            articleSubtitle: "Que fuerte todo esto, no me lo creo",
            bodyText:
              "Woooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooow",
            id: 1,
          },
          {
            sectionName: "SECTION 2",
            articleDate: "20-10-1994",
            imageSource: "http://url/",
            articleTitle: "ULTIMAS NOTICIAS",
            articleSubtitle: "Yo tampoco",
            bodyText:
              "Woooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooow wow",
            id: 2,
          },
        ])
      );
      return resp;
    }
  ),

  rest.delete(
    "https://api-guardians.herokuapp.com/news",
    +":id",
    async (req, res, ctx) => {
      const resp = res(ctx.status(200), ctx.json({}));
      return resp;
    }
  ),
];
