# 个人网站维护指南（Yiwei Ou's Website）

网站地址：**https://yiweiou.github.io/**
托管方式：GitHub Pages（免费、永久有效，只要 GitHub 账号和仓库在，网站就在）

---

## 一、网站结构（只需了解，不用背）

```
personal-website/
├── index.html            ← 网页骨架（一般不用改）
├── assets/
│   ├── css/style.css     ← 样式（想改颜色/字体才动它）
│   ├── js/content.js     ← ★ 所有网站内容都在这一个文件里 ★
│   ├── js/main.js        ← 渲染逻辑（不用改）
│   └── img/              ← 照片、图片放这里（photo.jpg 等）
└── README.md             ← 本文件
```

**核心原则：日常更新只改 `assets/js/content.js` 这一个文件。**
它是一个结构化文本文件，每个模块（简介、新闻、论文、奖项……）都有中文注释说明格式。

---

## 二、常见维护操作

### 1. 加一条新闻（News）
打开 `content.js`，找到 `news: [`，在最上面仿照现有条目加一行：
```js
{ date: "09/2026", text: "这里写新闻内容。" },
```
注意：`date` 和 `text` 用英文双引号，行尾有英文逗号。

### 2. 加一篇论文（Publications）
找到 `publications: [`，在最上面加一段（复制现有条目改最快）：
```js
{
  year: 2026, type: "Journal",        // type 只能选 Preprint / Journal / Conference / Dataset
  authors: "Ou, Y. *, & Manfredini, M.",
  title: "论文标题",
  venue: "期刊或会议名称（会显示为斜体）",
  links: [ { label: "DOI", url: "https://doi.org/..." } ]   // 没有链接就写 links: []
},
```
"Ou, Y." 会自动加粗，筛选按钮和数量会自动更新，无需其他操作。

### 3. 换头像
1. 把照片文件命名为 `photo.jpg`，放进 `assets/img/` 文件夹；
2. 在 `content.js` 里把 `photo: "assets/img/photo.svg"` 改成 `photo: "assets/img/photo.jpg"`。

### 4. 填 Google Scholar / ORCID / CV 链接
在 `content.js` 的 `links` 里把空引号 `""` 填上链接即可（留空会自动隐藏该图标）：
- 放 CV：把 PDF 命名 `cv.pdf` 放进 `assets/`，然后 `cv: "assets/cv.pdf"`，侧栏会出现 Download CV 按钮。

### 5. 改简介 / 奖项 / 教育 / 服务等
都在 `content.js` 里对应的中文注释区块，仿照现有格式改文字即可。

---

## 三、改完后如何发布更新（三选一）

### 方式 A：直接找 WorkBuddy（最省心）
对 WorkBuddy 说一句，例如：
> "帮我在个人网站的新闻里加一条：……，然后发布更新"

它会自动改文件并推送到 GitHub，1–2 分钟后网站生效。

### 方式 B：GitHub 网页上传（不用装任何软件）
1. 打开 https://github.com/YiweiOu/YiweiOu.github.io
2. 进入对应路径（如 `assets/js/`），点 **Add file → Upload files**，上传改好的 `content.js`（覆盖同名文件）；
3. 点 **Commit changes**。等 1–2 分钟刷新网站即可。

### 方式 C：命令行（熟悉 git 后用）
```bash
cd 网站所在文件夹
git add .
git commit -m "Update news"
git push
```

---

## 四、本地预览（可选）

想先看效果再发布：在网站文件夹里运行
```bash
python -m http.server 8000
```
然后浏览器打开 http://localhost:8000 。

---

## 五、几点说明

- **永久有效**：GitHub Pages 是 GitHub 官方免费服务，无到期概念；仓库保持 Public 即可。
- **更新延迟**：每次 push 后 GitHub 自动重新部署，通常 1–2 分钟生效，强刷（Ctrl+F5）可立即看到。
- **深色模式**：网站右上角有切换按钮，会自动记住访客选择。
- **手机端**：已自适应，无需额外维护。
- **改颜色/字体等深度定制**：找 WorkBuddy 描述你想要的效果即可，不用自己研究 CSS。
