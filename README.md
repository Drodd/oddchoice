<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/drive/1cOrSmiBaXx7hIkWpPRVIdrkkN1wkWOCV

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`

## Deploy to Netlify

### 方式一：通过 Netlify 控制台部署

1. 将项目推送到 GitHub/GitLab/Bitbucket
2. 登录 [Netlify](https://app.netlify.com/)
3. 点击 "Add new site" → "Import an existing project"
4. 选择你的代码仓库
5. 构建设置会自动从 `netlify.toml` 读取
6. 在 **Environment variables** 中添加环境变量：
   - `GEMINI_API_KEY`: 你的 Gemini API 密钥（从 https://aistudio.google.com/apikey 获取）
7. 点击 "Deploy site"

### 方式二：通过 Netlify CLI 部署

```bash
# 安装 Netlify CLI
npm install -g netlify-cli

# 登录 Netlify
netlify login

# 初始化项目（首次部署）
netlify init

# 设置环境变量
netlify env:set GEMINI_API_KEY your_api_key_here

# 部署
netlify deploy --prod
```

### 注意事项

- 确保在 Netlify 中配置了 `GEMINI_API_KEY` 环境变量，否则 AI 搜索功能将无法使用
- 构建命令：`npm run build`
- 发布目录：`dist`
