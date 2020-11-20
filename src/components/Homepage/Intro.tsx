import Markdown from "markdown-to-jsx";

const IntroMarkdown = `
  Designing tools to help businesses succeed at [MYOB](https://myob.com/).
  Previously at [Canstar](https://canstar.com.au/), [NetEngine](https://netengine.com.au/) & [QUT](https://qut.edu.au/).
`;

const Intro = () => <Markdown>{IntroMarkdown}</Markdown>;

export default Intro;
