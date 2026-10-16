# GitHub 热点视频项目

当前视觉基线：**真实照片 + 真实 GitHub 页面 + 纪实科技栏目风格**。

## 默认渲染

```powershell
npm run typecheck
npm run render
```

默认输出：

```text
out/github-hotspot-context-mode-real.mp4
```

## 视觉规范

- 竖屏 1080×1920，30fps
- 真实办公／开发场景照片作为开场和转场
- GitHub 项目页面、README、Release 或实际运行结果作为证据画面
- 米白、黑色、暗红、暖黄色为主色
- 少量纸张、截图、批注和终端卡片
- 避免霓虹网格、纯抽象 UI 和大面积 AI 生成感
- 内容表达优先于装饰动效

## 项目事实

当前样片主题是 `mksglu/context-mode`，所有热点数据必须标注采集日期，并保留 GitHub 项目主页、README、Release 等来源。

## 声音

当前使用本地自然中文男声作为样片配音。若替换为真人录音，只需替换：

```text
public/voice/narration-final.wav
```

然后重新运行：

```powershell
npm run render
```
