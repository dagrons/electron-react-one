import Markdown from "react-markdown";
import MainContentItemBox from "../component/MainContentItemBox.tsx";
import Title from "../component/Title.tsx";
import remarkGfm from "remark-gfm";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMarkdown} from "@fortawesome/free-brands-svg-icons";
import {useTheme} from "@mui/material";

export const MarkdownPage = () => {
    const theme = useTheme();

    const markdown = `
# 这是一级标题
## 这是二级标题
### 这是三级标题
#### 这是四级标题
这是**加粗文字**

这是*italic文字*

这是列表：
- [ ] 未完成
- [x] 已完成

这也是列表：
- item1 
- item2

这是个链接[chagpt](https://chatgpt.com)

这是普通文本。

这是表格
|技术|性能|
|---|---|
|react|好|
|pyqt|差|

`;


    return (
        <>
            <Title>
                <FontAwesomeIcon style={{marginRight: theme.spacing(1)}} icon={faMarkdown}/>
                MD语法
            </Title>
            <MainContentItemBox>
                <Markdown remarkPlugins={[[remarkGfm, {singleTilde: false}]]}>
                    {markdown}
                </Markdown>
            </MainContentItemBox>
        </>
    )
}

