# SpeechSynthesis 語音合成器

語音合成器實例來自 [Web Speech API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API)，是用來控制語音服務的介面，讓你的設備可以由文字轉化語音發出聲音。

## 實例屬性

- `SpeechSynthesis.paused` 是否暫停狀態 (回傳布林值)

- `SpeechSynthesis.pending` 序列中還有尚未說出的話語 (回傳布林值)

- `SpeechSynthesis.speaking` 是否說話中 (回傳布林值)

## 實例方法

- `SpeechSynthesis.cancel()`

- `SpeechSynthesis.getVoices()`

- `SpeechSynthesis.pause()`

- `SpeechSynthesis.resume()`

- `SpeechSynthesis.speak(utterance)` 將話語加入話語序列中 (`pending`)

  當前面沒有話語了，就會被說出來。
  [`utterance`](https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesisUtterance) 是話語的實例，可以建立被說的內容。(ex: 文字、音調...)

## 簡單範本

A:

```js
let utterance = new SpeechSynthesisUtterance('Hello world!')
speechSynthesis.speak(utterance)
```

B:

```js
const synth = speechSynthesis

export const speak = (content) => {
  // 沒有內容 或 正在說話中 return
  if (!content || synth.speaking) return false

  // 建立話語內容
  let utterance = new SpeechSynthesisUtterance(content)
  // 加入話語序例
  return synth.speak(utterance)
}
```

## Reference

- [Speech synthesizer demo](https://github.com/mdn/dom-examples/tree/main/web-speech-api/speak-easy-synthesis)
- [語音合成器 live](https://mdn.github.io/dom-examples/web-speech-api/speak-easy-synthesis/)
- [語音合成器](https://developer.mozilla.org/zh-CN/docs/Web/API/SpeechSynthesis)
- [Utterance 話語內容設置](https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesisUtterance)
- [SpeechSynthesis/getVoices 取得聲音列表](https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis/getVoices)
