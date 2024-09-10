import Title from "../component/Title.tsx";
import MainContentItemBox from "../component/MainContentItemBox.tsx";
import {Message} from "../component/chat/Message.tsx";


export const AboutPage = () => {

    const content = `好的，让我来为你介绍这款App
# 功能
该App是一个基于Electron+React的聊天机器人

# 架构
与其他客户端相比，该App架构上将所有RAG数据存储在本地，
后端仅提供API。
    `

    return (
        <>
            <Title>关于</Title>
            <MainContentItemBox>
                <Message content={`你好，介绍一下这款App吧`} role={'user'}></Message>
                <Message content={content} role={'assistant'}></Message>
            </MainContentItemBox>
        </>
    )
}
