# 快速找出 bug commit

![](/git/img/git-bisect-flow.png)
[圖片出處](https://www.google.com/url?sa=i&url=https%3A%2F%2Fmedium.com%2Fstarbugs%2Fuse-git-bisect-to-find-the-buggy-commit-b35e12ddd26b&psig=AOvVaw2Jcfxl8HF3RqvRPDS6vn7i&ust=1668483629092000&source=images&cd=vfe&ved=0CBEQjhxqFwoTCID0_IHgrPsCFQAAAAAdAAAAABAJ)

## 說明
使用 `git bisect` 語法，藉由定義發生 `bug` 的 `commit` 與「沒問題」 `commit` 的範圍，運用演算法來幫助使用者，有效率找出「有問題」的 `commit`。

### 原理
當定義了 `bug` 出現的範圍，`git bisect` 會跳到範圍的「中間」 `commit` ，逐步引導使用者來依「當前」所在的 `commit` 來標記 `bad` 或 `good`，若標記為 `bad` 就會向 `good` 方向跳，而標記 `good` 就會向 `bad` 方向跳，交叉定位到「最初發生問題」的 `commit` 位置為止。

## 開始搜尋模式
當 `git bisect start` 啟動了搜尋模式，系統就會「等待」使用者在不同 `commit` 標記 「好」or「壞」。

```bash
git bisect start
```

**回傳**
```text
<< status: waiting for both good and bad commits
```

## 標記搜尋範圍

**標記含 bug 的 commit**

```bash
git bisect bad
```

**標記沒問題的 commit**
```bash
git bisect good
```


**回傳**

當定義好「好」與「壞」的範圍，系統會說明還有幾個版本需要測試，大約還要幾個步驟。
```text
<< Bisecting: 2 revisions left to test after this (roughly 2 steps)
```

## 定位到最初的問題 commit
當經過幾次 `commit` 標記的「好」與「壞」，最後系統會定位出「最初」發生 `bug` 的 `commit` 且說明其相關的內容。~~就可以抓到戰犯了~~

![](/git/img/git-bisect_bug.png)

```text
dd177ba7b1f2eb83a1e359960469e5bda0abd8e1 is the first bad commit
commit dd177ba7b1f2eb83a1e359960469e5bda0abd8e1
Author: NaikyDing <74ding@gmail.com>
Date:   Mon Nov 14 10:17:01 2022 +0800

    feat: bug-1

 test.yaml | 3 ++-
 1 file changed, 2 insertions(+), 1 deletion(-)
```

## 結束搜尋模式
已經定位到 `bug` 的 `commit` 後，就可以關閉搜尋模式，讓系統將知道已經結束。

```bash
git bisect reset
```

## Reference
- [不知道 bug 躲在哪個 commit 嗎？來試試 Git bisect 吧！](https://medium.com/starbugs/use-git-bisect-to-find-the-buggy-commit-b35e12ddd26b)
- [使用 Git Bisect 快速找到第一個有問題的 Commit
](https://www.gss.com.tw/blog/%E4%BD%BF%E7%94%A8-git-bisect-%E5%BF%AB%E9%80%9F%E6%89%BE%E5%88%B0%E7%AC%AC%E4%B8%80%E5%80%8B%E6%9C%89%E5%95%8F%E9%A1%8C%E7%9A%84-commit)
- [Use Git Bisect to Find the Commit That Introduced a Bug](https://dev.to/mokkapps/use-git-bisect-to-find-the-commit-that-introduced-a-bug-2j3b)