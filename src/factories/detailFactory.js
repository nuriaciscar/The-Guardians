import { Factory } from "fishery";
import { image, lorem } from "faker";
import { date } from "faker/locale/zh_TW";

const factoryDetails = Factory.define(() => ({
  sectionName: lorem.word,
  articleDate: date.recent,
  imageSource: image.imageUrl,
  articleTitle: lorem.sentence(),
  articleSubtitle: lorem.sentences(3),
  bodyText: lorem.paragraphs(10),
}));

const getNewsDetails = () => factoryDetails.build();
export default getNewsDetails;
