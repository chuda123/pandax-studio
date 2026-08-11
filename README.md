# PandaX Studio — pandax-studio.com

高端不锈钢定制橱柜品牌单页官网。中英文双语，纯静态实现（HTML / CSS / vanilla JS），无构建步骤。

Bilingual (zh-CN / EN) single-page marketing site for a bespoke stainless-steel kitchen brand. Pure static, no build step.

## 结构 · Structure

```
pandax-studio/
├── index.html      # 双语内容 + 语义化结构
├── styles.css      # 全部样式（编辑级排版，暖金属配色）
├── script.js       # 语言切换 / 滚动状态 / 入场动画
└── README.md
```

## 本地预览 · Preview

```bash
cd pandax-studio
python3 -m http.server 5173
# 打开 http://localhost:5173
```

## 设计说明 · Design Notes

- **参考**：Altwood Design 的编辑式排版、大留白、暖冷金属色
- **字体**：Cormorant Garamond（西文衬线）· Noto Serif SC（中文衬线）· Inter（正文）
- **配色**：温暖米纸底 `#f5f3ee` + 深墨 `#17171a` + 琥珀点缀 `#b48a5c`
- **内容源自**：`优居邦不锈钢橱柜工艺手册20260316.pdf`
  - 三大基础钢面：琥珀银蚕 / 雅致银丝 / 米勒布纹
  - 四大工艺：激光切割 / 一体折弯 / 激光焊接 / 预埋件
  - 单层 vs 双层铝蜂窝对比
  - 九大门型系列
  - 台面工艺 + 六款款式
  - 养护指南

## 语言切换 · Language Toggle

- 右上角 `中 / EN` 按钮
- 首次访问按浏览器语言自动切换
- `localStorage` 记忆用户偏好
- 所有可翻译元素通过 `data-zh` / `data-en` 属性驱动

## 上线部署 · Deploy

推荐 **Vercel** 或 **Cloudflare Pages**：

1. `git init && git add . && git commit -m "init pandax-studio"`
2. 推到 GitHub 仓库
3. Vercel Import → Framework 选 "Other" → Root Directory `pandax-studio`
4. 域名设置里绑定 `pandax-studio.com` 并按提示添加 DNS 记录

或直接 `vercel --prod` 部署当前目录。

## 待办 · Next Steps

- [ ] 替换门型 / 台面 / 材料区域的 CSS 渐变占位为真实产品摄影
- [ ] 添加实体展厅地址、真实电话、微信二维码
- [ ] （可选）接入表单服务（Formspree / Vercel Functions）承接"预约设计咨询"
- [ ] 补充 `favicon.ico` 与 `og-image.jpg`（社交分享图）
- [ ] SEO：为每个主要 section 增加 schema.org / Product 结构化数据
