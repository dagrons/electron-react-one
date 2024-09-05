import {Box, useTheme} from "@mui/material";
import Markdown from "react-markdown";
import './Message.css'
import remarkGfm from 'remark-gfm';
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import rehypeHighlight from "rehype-highlight";
import rehypeRaw from "rehype-raw";


export const Message = ({content, role}) => {
    const theme = useTheme();
    const remarkPlugins = [
        remarkMath,
        remarkGfm
    ]
    const rehypePlugins = [
        rehypeKatex
    ]

    return (
        <Box sx={{
            display: "flex",
            alignItems: "center",
            backgroundColor: role === "user" ? theme.palette.grey[100] : 'white',
            borderRadius: "0.5rem",
            gap: "0.5rem",
            padding: "1rem"
        }}>
            <Box sx={{
                alignSelf: "flex-start",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}>
                <img
                    src={role === "user" ? "https://api.dicebear.com/9.x/adventurer-neutral/svg?seed=Felix" : "https://api.dicebear.com/9.x/bottts-neutral/svg?seed=Aneka"}
                    alt="avatar"
                    style={{
                        width: "2rem",
                        height: "2rem",
                        borderRadius: "0.5rem"
                    }}
                />
            </Box>
            <Box sx={{
                flexGrow: 1
            }}>
                <Markdown
                    remarkPlugins={remarkPlugins}
                    rehypePlugins={[...rehypePlugins, [rehypeHighlight, rehypeRaw, {detect: true}]]}>
                    {content}
                </Markdown>
            </Box>
        </Box>
    )
}
