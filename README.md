# Petra Developers Docs
[![Deploy VitePress site to Pages](https://github.com/tomoda-kazuya/petra-developers-docs/actions/workflows/petra-deploy.yml/badge.svg?branch=main)](https://github.com/tomoda-kazuya/petra-developers-docs/actions/workflows/petra-deploy.yml)

## ローカル起動方法
```npm
npm run docs:dev
```

## 本番環境（GitHub Pages）へのデプロイ方法
developブランチからmainブランチへマージ
※mainブランチにマージするとGithub CIが動き自動的にデプロイできるように設定しています。<br><br>
GitHub Actionsの設定は以下ymlを参照<br>
.github/workflows/petra-deploy.yml