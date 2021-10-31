import { Factory } from "fishery";
import { image, lorem } from "faker";
import { date } from "faker/locale/zh_TW";

const factoryCard = Factory.define(() => ({
  sectionName: lorem.word(1),
  articleDate: date.recent(),
  imageSource: image.imageUrl(),
  articleTitle: lorem.sentence(),
  articleSubtitle: lorem.sentences(3),
  bodyText: lorem.paragraphs(10),
}));

export const getCard = () => factoryCard.build();
export default getCard;
