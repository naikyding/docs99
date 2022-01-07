# Functional Programming 函式程式設計

![](/Javascript/img/functional-programming.png)

**函式程式設計 `FP`** 是一種程式設計方法，意指 **函式** 為主的開發方式。常聽到的 **件件導向程式設計 `OOP`**，也是另一種程式設計方式，都是用來解決不同需求。而 `FP` 近年來也是前端非常熱門的設計主流(比如 `React JS` 框架就由此而生)。

> FP 則要求我們 「Everything think as function.」 以 Function 為中心的思考方式、以 Function 為最小單位的程式風格。

## 核心條件

### 1. 函式必須是一級公民 && 高階函式
- **一級公民**

  **函式** 也可以被指定給其它變數，在 `javascript` 中 **函式** 本來就符合這個特性。

  ```js
  let a = 1
  let a = (a, b) => a + b // 作為變數回傳
  ```

- **高階函式**
  - 可以將 **函式** 當成 `參數` 傳進另一個 **函式**
  - 可以將 **函式** 當成是另一個函式的 **回傳值**

  ```js
    const add = (a, b) => a + b

    const b = (fun, a, b) => fun(a, b) // 函式做為參數
    b(add, 3, 4) // 7 (函式作為回傳)
    ```

### 2. 使用 [純粹函式](/Javascript/pure-function)
> 相同的輸入，永遠會有相同的輸出，不會產生 [副作用 Side Effects](/Javascript/side-effects)
### 3. 使用 **宣告式函式 (Expression)**
> 只透過參數呼叫函式，得到需要的回傳值；不使用 **指令式函式 (instructions)**。
:::tip 提示
- **宣告式**

  **抽象化**具體作法，只呈現語意的方法，比如`.filter()` 就是一個宣告式函式。
  ```js {3}
  const filterId = 123
  const data = [...]
  const filterData = data.filter(item => item.id === filterId) 
  ```
- **指令式**

  **具體化** 所有處理方法的程式過程
  ```js {5-9}
  const filterId = 123
  const data = [...]

  const filterData = () => {
    let outputAry = []
    data.forEach(item => {
      if(item.id === filterId) outputAry.push(item)
    })
    return outputAry
  }
  ```
:::

### 4. 函式中避免使用 `for` 迴圈 操作
當你使用 `for` 廻圈時，你就會在函式內，寫下了 **指令式**函式，那就違背了 核心 [第 3 點](#_3-使用-宣告式函式-expression)

可以取代的操作方法：
- [`.map`](/Javascript/array-methods#map)
- `.filter`
- `.reduce`
## 好處

使用 FP 可以讓程式碼看起來更簡潔，且對功能的描述更精準、所以也就更好進行測試，對開發來說有不少好處，但是如果你對 FP 以及相關的概念還沒有很熟悉，FP 的程式碼也可能讓你需要更多時間來閱讀。
- 減少相互依賴
- 方便測試
- 程式看起來簡潔
- 函式之間，可以任意組成新的函式
## Reference

- [JS 原力覺醒 Day18 - Functional Programming](https://ithelp.ithome.com.tw/articles/10224130)
- [JavaScript: Functional Programming 函式編程概念](https://totoroliu.medium.com/javascript-functional-programming-%E5%87%BD%E5%BC%8F%E7%B7%A8%E7%A8%8B%E6%A6%82%E5%BF%B5-e8f4e778fc08)
- [Functional Programming 函式程式設計](https://mgleon08.github.io/blog/2019/07/26/functional-programming/)
- [[Javascript] Functional Programming 一文到底全紀錄](https://medium.com/%E4%B8%80%E5%80%8B%E5%B0%8F%E5%B0%8F%E5%B7%A5%E7%A8%8B%E5%B8%AB%E7%9A%84%E9%9A%A8%E6%89%8B%E7%AD%86%E8%A8%98/javascript-functional-programming-%E4%B8%80%E6%96%87%E5%88%B0%E5%BA%95%E5%85%A8%E7%B4%80%E9%8C%84-95ff19d9892)
- [寶哥 - 前端工程研究：理解函式編程核心概念與如何進行 JavaScript 函式編程](https://blog.miniasp.com/post/2016/12/10/Functional-Programming-in-JavaScript)
- [JS 原力覺醒 Day19 - 一級函式與高階函式](https://ithelp.ithome.com.tw/articles/10224519)
- [An introduction to functional programming in JavaScript](https://opensource.com/article/17/6/functional-javascript)
- [Vue 中的 FP | Functional programming in Vue
](https://sambitsahoo.com/blog/functional-programming-in-vue.html)