import { Factory } from "fishery";
import { image, lorem } from "faker";

const factoryNews = Factory.define(() => ({
  image: image.nature(110, 100),
  text: lorem.paragraph(4),
  icon: lorem.word(1),
}));

export const getNews = () => factoryNews.build();
