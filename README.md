# About This

用於 node.js 或瀏覽器之中：簡轉繁，或繁轉簡。

# Install

> shell (node.js)

```shell
npm install monkey-chinese
```

# Usage

> node.js

```js
import { toCN, toTW } from "monkey-chinese";

// 轉成正體中文
let text = toTW(
  "所谓知己知彼百战不殆",
  "作为星际2职业选手",
  "他们在平时练习中不仅要练好自己的本族",
  "还会经常选择其他两个族进行练习",
  "这样可以更加了解本族之外两个种族的运营流程、弱点、真空期等。因此不只有Flash",
  "全世界许多职业选手都会在练习时偶尔使用下别的种族",
  "这也是他们众多练习手段的一种"
);

console.log(text);
// >>>
```
