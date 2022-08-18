# 元素置中的 5 個方法

<style>
.parent {
  margin-top: 1rem;
  width: 100px;
  height: 100px;
  border: 1px solid #1e1e1e;
  border-radius: 10px;
}

.child {
  width: 50px;
  height: 50px;
  background: lightblue;
}

/* Type1 parent Flex */
.parent-type1 {
  display: flex;
  justify-content: center;
  align-items: center;
}

/* Type2 positon */
.parent-type2 {
  position: relative;
}
.child-type2 {
  position: absolute;
  top: 50%;
  left: 50%;
  margin-left: -25%;
  margin-top: -25%;
}

/* Type3 Child set translate 50% */
.child-type3 {
  transform: translate(50%, 50%);
}

/* Type4 parent grid */
.parent-type4 {
  display: grid;
  place-items: center;
}

/* Type5 flex margin auto */
.parent-type5 {
  display: flex;
}
.child-type5 {
  margin: auto;
}
</style>

## 1️⃣ Flex
  <!-- Type1 -->
  <div class="parent parent-type1">
    <div class="child">
    </div>
  </div>

父層設置 `display: flex; justify-content: center; align-items: center;`

```css
/* Type1 parent Flex */
.parent-type1 {
  display: flex;
  justify-content: center;
  align-items: center;
}
```

## 2️⃣ relate && absolute
  <!-- Type2 -->
  <div class="parent parent-type2">
    <div class="child child-type2">
    </div>
  </div>  

- 父層 `position: relative;`
- 子層 `position: absolute;`


```css
/* Type2 position */
.parent-type2 {
  position: relative;
}
.child-type2 {
  position: absolute;
  top: 50%;
  left: 50%;
  margin-left: -25%;
  margin-top: -25%;
}
```

## 3️⃣ translate: 50%

  <!-- Type3 -->
  <div class="parent parent-type3">
    <div class="child child-type3">
    </div>
  </div> 

子層 `translate` 位移。

```css
/* Type3 Child set translate 50% */
.child-type3 {
  transform: translate(50%, 50%);
}
```

## 4️⃣ grid + place-items:center
  <!-- Type4 -->
  <div class="parent parent-type4">
    <div class="child child-type4">
    </div>
  </div>  

```css
/* Type4 parent grid */
.parent-type4 {
  display: grid;
  place-items: center;
}
```

## 5️⃣ flex + margin: auto

  <!-- Type5 -->
  <div class="parent parent-type5">
    <div class="child child-type5">
    </div>
  </div> 

```css
/* Type5 flex margin auto */
.parent-type5 {
  display: flex;
}
.child-type5 {
  margin: auto;
}
```