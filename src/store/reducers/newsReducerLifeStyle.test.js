import newsReducerLifeStyle from "./newsReducerLifeStyle"
import { loadNewsListLifeStyleAction } from "../actions/actionCreator"

describe("Given a newsReducerLifeStyle reducer", () => {
  describe("When it is used the loadNewsListLifeStyleAction", () => {
    test("Then it should return a list of news", () => {
      const news = {
        response: {
          results:
            [
              {
                articleDate: "2021-03-06",
                articleSubtitle: "The 27-year-old British runner ended a near seven-year spell since her last medal with a gritty performance in Poland",
                articleTitle: "Jodie Williams takes bronze in European Indoor 400m final",
                bodyText: "Years ago, when Jodie Williams was being hailed as the next great British sprinter, she had a tattoo on her wrist: “Pain is Temporary, Victory is Forever.” It was an impressive work of art, but a lousy piece of prophecy. The pain – from injuries, setbacks and defeats – has lasted since 2014, the last time Williams stood on an international podium. But in the Polish renaissance city of Torun, Williams’ career experienced a notable rebirth as she scratched her seven-year itch by claiming 400m bronze at the European Indoor Championships. By the time the lactic acid had started burning through her lungs in the last 150m, the brilliant young Dutch athlete Femke Bol was already on her way to gold in 50.63sec, with Poland’s Justyna Swiety-Ersetic far behind her in silver. But the 27-year-old Williams, who had been inconvenienced by starting in lane one, gritted her teeth to hold off a spirited charge from Ireland’s Phil Healy finish in a personal best 51.73sec. “It was all a blur, honestly, I saw the lane draw and knew it would be tough, but I thought: ‘I have to do it the hard way’ and I did it,” said Williams, who is captain of the British team at these championships. “2014 was the last time I was on an international podium, but I am a determined woman, I cannot quit on myself.” It has been a heck of a journey. Williams was once seen as a future star after winning the world under-18 titles at 100m and 200m, and was given the nickname Miss Money Legs by her friends. But she struggled to make the transition to elite level and her career looked to be fizzling out. Now, though, she can kick on again at the Tokyo Olympics. “For sure, I have my mojo back,” she said. Earlier in the evening Holly Archer navigated one of the scrappiest indoor finals in recent memory - and also overcame being disqualified for “jostling” with another athlete - to win a surprise silver 1500m medal. The 25-year-old Archer is not lottery funded, because she is not seen as a realistic Olympic medal contender, and so has to combine her athletics career with working in pharmaceutical marketing in the US. But in her first competition in a British vest she showed considerable nous in a highly tactical affair to come through behind the Belgian Elise Vanderelst, who took gold in 4:18.44. When Archer heard that she had been disqualified she was in tears on an Instagram post, although she also admitted making a mistake. There then followed a three-hour wait during which a successful appeal from the British team was heard and a counter-appeal then rejected. “That was the longest wait ever,” said Archer after her medal was confirmed. “It was supposed to be half an hour but it turned into three hours. I feel absolutely delighted. To come so close and then get it taken away, I’ve been on a rollercoaster. But I’m really happy to finally get that silver. ““From the gun it was just jostling,” she added. “The first 10m, arms and legs were going everywhere, so I don’t really remember much. All I remember is being fifth or sixth. At the bell, I still didn’t know where I was. It’s been an incredible experience.” There was a third British medal on the night in the women’s pole vault, but Holly Bradshaw was left bitterly disappointed after only clearing 4.65m to take bronze. “To come here and do my lowest all season, it’s not what you expect,” said Bradshaw, who finished behind Switzerland’s Angelica Moser, who cleared a personal best 4.75m for a surprise win. There was little joy either for Britain in the men’s 60m as Andy Robertson could only run 6.63sec behind the Italian Marcell Jacobs, who produced a stunning performance to take gold in 6.47. The most exciting event of the night came in the women’s long jump as the Ukrainian Maryna Bekh-Romanchuk jumped 6.92m on her final attempt to pip the German Malaika Mihambo, who took silver with 6.88m. There should be more British medallists on Sunday with 19-year-old Keely Hodgkinson producing a masterly performance to reach the 800m final as the fastest qualifier. Isabelle Boffey and Ellie Baker also made it through, although the home favourite Joanna Jozwik looks the one to beat. In the men’s 800m, Jamie Webb hopes to go one better than his silver in Glasgow two years’ ago and Andy Pozzi is also the favourite in the men’s 60m hurdles. Meanwhile, in the women’s 60m hurdles, Tiffany Porter is seeking to become the first athlete to win an international medal wearing a mask.",
                imageSource: "https://media.guim.co.uk/76fca342404adf482822463ea24254f82a5e7921/0_172_4307_2584/500.jpg",
                sectionName: "Life and style",
              },
              {
                articleDate: "2021-03-06",
                articleSubtitle: "Jamie George has no fears that England are on a similar slide to 2018 when two defeats in their opening three Six Nations matches shredded their hopes of retaining the title",
                articleTitle: "Jamie George adamant England will not repeat Six Nations slide of 2018",
                bodyText: "Jamie George has no fears England are on a similar slide to 2018, when two defeats in their opening three Six Nations matches shredded their hopes of retaining the title. England mounted a meek defence of their crown three years ago, losing their final three matches and the opening two Tests of their tour to South Africa, prompting Eddie Jones to overhaul his squad before the 2019 World Cup. “It has a different feel to 2018,” says George, the Saracens hooker who like many of his colleagues went into the Six Nations less than match hardened. “We were nowhere near our best against Scotland, and while it was more like us against Italy, we were still not firing on all cylinders. “While we got a lot wrong against Wales, the feeling in the camp is that we are getting somewhere. My immediate feeling on the field in Cardiff was that we were at it more than we had been since the World Cup semi-final. We played some good stuff in attack and defence. It was more like us: we were brilliant in parts, but our discipline was not good enough.” Jones has been criticised for largely sticking with the same players who served him in the last World Cup, but he has yet to use the Six Nations as a time to experiment, with France up next at Twickenham next Saturday. “Nothing has changed in that we were always going to have to beat France and Ireland, two of the most dangerous teams in the Six Nations, to win it again,” says George. “We are desperate to finish the campaign with two victories and we want to be a confrontational team. That brings penalties, but it was the avoidable ones which cost us against Wales. “I do not know what effect missing the last round will have on France, but we will be hurting and intent on putting in a serious performance. People said we looked off the pace against Scotland, but physically we were in good shape and it was just the way the game panned out. I am not sure that a lack of match fitness is an issue given the way teams train.” George expects his club colleague Maro Itoje to make up for his performance in Cardiff when he was responsible for more than a third of the penalties conceded by England, including the one that gave Wales the chance to regain the lead after the champions had fought back to 24-24. “Maro is one of the best players in the world,” says George, “competitive and confrontational. He will learn his lessons and on a different day some of the penalties against him might not have been given, we win and he is named man of the match. It is a fine line and you cannot take away from his intensity or the way he plays the game.”",
                imageSource: "https://media.guim.co.uk/4c465bca73ed00c27ce309ec53b9ebf7ff7bab23/0_109_5568_3341/500.jpg",
                sectionName: "Life and style"
              }
            ]
        }
      }
      const action = loadNewsListLifeStyleAction(news);
      const newNews = newsReducerLifeStyle(news, action);

      expect(newNews).toEqual(news.response.results);
    })
  })
})