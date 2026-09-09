# 将此目录上传到 GitHub

本项目已上传到公开仓库 https://github.com/TerrificXu/diabetic-retinopathy-web 。以下初始化步骤仅供发布另一个独立副本参考；现有目录已完成 Git 初始化并关联 origin，不要重复执行。

此文件所在目录的上一级是仓库根目录。包内已经包含两个开放模型和配套 scaler；没有包含 RuleFit、Pruned RuleFit 或原来的 Git 历史。

## 大模型必须使用 Git LFS

Two-level Ensemble.pkl 为 702,816,259 字节，超过 GitHub 普通 Git 文件的 100 MiB 限制。不要将整个目录直接拖入 GitHub 网页上传。根目录的 .gitattributes 已为该文件配置 LFS，但必须安装 Git LFS，并在第一次 git add 之前启用。

1. 安装 Git 和 Git LFS。
2. 在 GitHub 创建空仓库；不要预先生成 README 或许可证。
3. 在本目录打开 PowerShell，逐条执行：

```powershell
git init
git lfs install --local
git add .
git lfs ls-files
git status --short
```

确认 `git lfs ls-files` 列出 `backend/models/Two-level Ensemble/Two-level Ensemble.pkl` 后，再继续：

```powershell
git commit -m "Add diabetic retinopathy web application"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPOSITORY.git
git push -u origin main
```

将示例地址替换为你自己的空仓库地址。现有发布目录已完成初始化、提交、创建远程仓库及上传。LFS 使用量受你的 GitHub 账户配额约束。

不要漏传以点开头的 .gitignore 和 .gitattributes。首次提交前可阅读 release-notes.md，了解发布副本与原项目的区别。原项目目录未修改。

其他人获取模型：

```powershell
git clone https://github.com/TerrificXu/diabetic-retinopathy-web.git
cd diabetic-retinopathy-web
git lfs pull
```

官方说明：https://docs.github.com/en/repositories/working-with-files/managing-large-files/about-git-large-file-storage
