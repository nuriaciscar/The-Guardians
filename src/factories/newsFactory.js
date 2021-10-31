import { Factory } from "fishery";
import { image, lorem } from "faker";
import { name } from "faker/locale/en_GB";
import faker from "faker/locale/en_GB";


const factoryNews = Factory.define(() => ({
  image: image.nature(110, 100),
  body: lorem.paragraph(4),
  title: name.title(),
  articleSubtitle: name.title(),
  date: faker.date(),
  icon: lorem.word(1),
}));

export const getNews = () => factoryNews.build();
export const getRecipes = (total = 3) => factoryNews.buildList(total);