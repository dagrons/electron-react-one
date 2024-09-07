const endpoint = "http://localhost:8000"

export async function* streamChat(model, prompt, chatHistory) {
    const path = "/chat/generate"
    const urlWithParams = new URL(`${endpoint}${path}`);
    const params = {
        "model": model,
        "prompt": prompt
    };
    Object.keys(params).forEach(key => urlWithParams.searchParams.append(key, params[key]));
    const response = await fetch(urlWithParams, {
        method: "post",
        headers: {
            'Content-Type': "application/json"
        },
        body: JSON.stringify(chatHistory)
    });
    // 获取响应体的可读流
    const reader = response.body.getReader();

    // 创建一个 TextDecoder 来将 Uint8Array 转换为字符串
    const decoder = new TextDecoder('utf-8');

    let done = false;

    // 循环读取流
    while (!done) {
        // 读取流中的一个块（chunk）
        const {value, done: readerDone} = await reader.read();
        done = readerDone;

        // 如果有数据，使用 decoder 将 Uint8Array 转换为字符串
        if (value) {
            const chunk = decoder.decode(value, {stream: true});
            yield chunk;
        }
    }
}
