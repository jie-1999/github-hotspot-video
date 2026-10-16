# GitHub 热点视频项目

当前主样片：**REA / Reverse Engineer Anything**。

视觉基线：真实照片、真实 GitHub 页面、真实项目素材、纪实科技栏目质感。

## 默认渲染

```powershell
npm install
npm run typecheck
npm run render
```

默认输出：

```text
out/github-hotspot-rea-full.mp4
```

## 当前完整版

- 主题：`morluto/rea`
- 片长：约 125 秒
- 规格：1080×1920，30fps，H.264 + AAC
- 结构：问题提出 → 项目与作者 → 工作机制 → 真实 README 素材 → 适用范围 → 安装方式 → 结论
- 数据快照：2026-10-16
- 原始资料记录：`public/rea/snapshot-2026-10-16.json`

## 内容边界

REA 涉及逆向工程。视频只展示合法授权环境下的研究、理解和证据链，不把项目描述为破解工具，也不鼓励对无授权软件进行分析。

## 声音

当前完整版使用本地自然中文男声作为配音占位。若替换为真人录音，只需把真人录音处理成同规格文件并替换：

```text
public/voice/rea-narration-final.wav
```

然后重新运行：

```powershell
npm run render
```

## 其他 Composition

```powershell
npm run render:legacy
```

`--real` 版本仍保留在 `GithubHotspotReal`，用于 Context Mode 样片。
