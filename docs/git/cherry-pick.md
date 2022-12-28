# 複製 commit 到當前分支 cherry-pick

## 說明

`cherry-pick` 可以複製指定的 `commit` 到當前分支的未端，同時可以對這個 `commit` 修改 message 內容。

### 模擬操作

假設把 `Feature` 的 功能二 `commit` 複制到 `master` 分支上，複制的 `commit` 會在 `master` 分支的未端。

```
    功能一  功能二  功能三
o----o-----o------o Feature
|
∨
----------o master
```

```
    功能一  功能二  功能三
o----o-----o------o Feature
|
∨              功能二
----------o----o master
```

### 常用情景

- 忘了切換 `feature` 分支開發，直接 `commit` 到當前分支。
- 需要某個分支的 `commit` 來當前的分支。

## 使用方式

- 先切換到需要附加 `commit` 的分支。

- 複製 `commit`

  ```bash
  git cherry-pick fd23e1c
  # git cherry-pick <commit code>
  ```

  多選 `commit`

  ```bash
  git cherry-pick fd23e1c 6a498ec f4f4442
  ```

  :::tip
  當指令送出後，就會在分支未端新增上這筆 `commit` 紀錄 (message 會與複製 `commit` 相同)。
  :::

### 修改複製 `commit` message

在複制指令後面加上 `--no-commit` 就不會直接合拼這個 `commit` 紀錄，而你可以再進行 `git commit -m '修改 commit message'` 來寫上你想要的 message。

```bash
git cherry-pick <commit-hash> --no-commit

git commit -m '你想要修改成為的信息'
```

## Reference

- [git cherry-pick](https://git-scm.com/docs/git-cherry-pick)
- [【狀況題】如果你只想要某個分支的某幾個 Commit？](https://gitbook.tw/chapters/faq/cherry-pick)
- [教學 3 改寫提交](https://backlog.com/git-tutorial/tw/stepup/stepup7_4.html)
- [gitKraken cherry-pick](https://www.gitkraken.com/learn/git/cherry-pick)
