import Markdown from "markdown-to-jsx";
import intro from "./intro.md";
import mvp0 from "./mvp-0.md";
import mvp1 from "./mvp-1.md";
import mvp2 from "./mvp-2.md";
import summary from "./summary.md";

const FolioCamp = () => (
    <div>
        <Markdown>{intro}</Markdown>
        <Markdown>{mvp0}</Markdown>
        <Markdown>{mvp1}</Markdown>
        <Markdown>{mvp2}</Markdown>
        <Markdown>{summary}</Markdown>
    </div>
)

export default FolioCamp;