# 104-f2e-vue - Frontend

[![Build Status](https://travis-ci.com/104corp/104-f2e-cvue.svg?token=vmwyP7fYfDjryqnXzKK3&branch=lab)](https://travis-ci.com/104corp/104-f2e-cvue)
[![Cypress.io tests](https://img.shields.io/badge/cypress.io-tests-green.svg?style=flat-square)](https://cypress.io)


- [104-f2e-vue - Frontend](#104-f2e-vue---frontend)
  - [Storybook](#storybook)
  - [Url](#url)
    - [Dev](#dev)
    - [Staging](#staging)
    - [Prod](#prod)
  - [分支說明](#分支說明)
  - [Demo](#demo)
  - [環境](#環境)
    - [node v14.20.0](#node-v14200)
    - [yarn 1.22.17](#yarn-12217)
  - [Getting Started](#getting-started)
  - [指令](#指令)
    - [Confirm node version](#confirm-node-version)
    - [Install](#install)
    - [Compiles and hot-reloads for development](#compiles-and-hot-reloads-for-development)
    - [Build](#build)
      - [Local](#local)
      - [Lab](#lab)
      - [Staging](#staging-1)
      - [Compiles and minifies for production](#compiles-and-minifies-for-production)
    - [Build files at local](#build-files-at-local)
      - [Serve or Build 結果畫面](#serve-or-build-結果畫面)
    - [Tests](#tests)
    - [Lints and fixes files](#lints-and-fixes-files)
    - [Run your end-to-end tests](#run-your-end-to-end-tests)
    - [Run your unit tests](#run-your-unit-tests)
    - [Storybook](#storybook-1)
      - [Development](#development)
      - [Build](#build-1)
  - [CI / CD](#ci--cd)
  - [Vue 相關](#vue-相關)
    - [Storybook](#storybook-2)
  - [頁面說明](#頁面說明)
    - [My104](#my104)
        - [變數(重要)](#變數重要)
    - [Components](#components)
    - [templates](#templates)
  - [圖片](#圖片)
  - [Tips](#tips)
    - [注意IE11 Class 數量上限](#注意ie11-class-數量上限)
      - [css, js 等等資源](#css-js-等等資源)
    - [登入 Cookie 設定](#登入-cookie-設定)
    - [lab 帳號申請方式](#lab-帳號申請方式)
  - [開發](#開發)
    - [圖片資源](#圖片資源)
  - [Pull Request](#pull-request)
    - [reference](#reference)
    - [storybook alias not fully support](#storybook-alias-not-fully-support)
    - [VSCode Settings](#vscode-settings)
      - [ext](#ext)
      - [settings](#settings)
      - [結果畫面](#結果畫面)

## Storybook
> https://f2e.s3.104-dev.com.tw/cvue/

## Url

### Dev
> cdn.104-dev.com.tw/

### Staging
> cdn.104-staging.com.tw/

### Prod
> cdn.104.com.tw/

## 分支說明
| 分支名稱  | 對應環境 | 是否可以進行強推 | 主要功能<br>其他說明 |
| ------------- | ------------- | ------------- | ------------- |
| lab  | Lab  | 否 | Lab 環境分支 |
| staging  | Staging  | 否 | Staging 環境分支 |
| prod  | Prod  | 否 | Prod 環境分支 |

## Demo

> https://preview.f2e.s3.104-dev.com.tw/[project_name]/[path]

**example:**
```
branch = project/clinic
output_path = common/pages/profile/clinic/index.html
```

https://preview.f2e.s3.104-dev.com.tw/clinic/common/pages/profile/clinic/index.html


## 環境

### node v14.20.0
### yarn 1.22.17


## Getting Started

PORT預設值為`8787`。

設定你自己開發環境的PORT(`.env.development`)

```yml
VUE_APP_PORT=16888
```


## 指令


### Confirm node version

```sh
nvm use
```
### Install

```sh
yarn install
```

### Compiles and hot-reloads for development
***workspace*** : `cmy104`, `cindex`, `time4jobs`, `profile`, `msc`, `common`

```sh
yarn serve
yarn serve:{workspace}
```

***free style***
```sh
yarn serve:free --pages cmy104-cprofile-resume,cmy104-cprofile-overview
```

### Build
***workspace*** : `cmy104`, `cindex`, `time4jobs`, `profile`, `msc`, `common`

#### Local

local 不太會使用到 build.

```sh
yarn build
```

#### Lab

```sh
yarn build:{workspace}-lab
```

#### Staging

```sh
yarn build:{workspace}-staging
```

#### Compiles and minifies for production

```sh
yarn build:{workspace}-production
```
`????? 這要幹嘛`
### Build files at local

如要提供各環境的產出檔案 `local`

```sh
yarn build:{workspace}-{env} --local
```
`????? 這要幹嘛`
#### Serve or Build 結果畫面

![](./docs/vue-serve.png)

![](./docs/vue-build.png)



### Tests

```sh
yarn run test
```

### Lints and fixes files

```sh
yarn run lint
```

### Run your end-to-end tests

```sh
yarn run test:e2e
```

### Run your unit tests

```sh
yarn run test:unit
```

### Storybook

#### Development

```sh
storybook:serve
```

#### Build

```sh
storybook:build
```

## CI / CD

...待補

## Vue 相關
// 可以寫一下 vue2/vue3 規範
### Storybook

See [vue-cli-plugin-storybook](https://github.com/storybooks/vue-cli-plugin-storybook)

## 頁面說明

### My104
- My104 相關頁面需起後端環境 [104jb-c-my104-v2
](https://github.com/104corp/104jb-c-my104-v2) 並且驗證登入（詳見[ 登入 Cookie 設定](#登入-cookie-設定)）

##### 變數(重要)

```javascript
// 頁面 POC 用變數
const PAGESETTINGS = JSON.parse(localStorage.getItem("PAGESETTINGS"));
// 後端傳給前端的變數
const PAGEVARS = window.PAGEVARS;
```


### Components

`src/components`

### templates

開發用

`templates/**/index.html`

從

`config/vue/workspace/*.js`

設定

## 圖片

請放在 `/public/static/(images|svgs)`

## Tips

### 注意IE11 Class 數量上限

IE10+:

A stylesheet may contain up to 65,534 selectors

A document may load up to 4095 stylesheets

@import nesting is limited to 4095 levels (due to the 4095 stylesheet limit)

The IE10 Dev Guide says the limits for IE10 have been removed entirely, but in the comments of his blog post on the IE limits, Eric Law says these limits for IE10 are accurate. Again, I don't have a test case for this.

#### css, js 等等資源

- //pda.104(-dev).com.tw/{workspace}/assets (js/css)
- //pda.104(-dev).com.tw/{workspace}/static (public/static 底下靜態資源)

### 登入 Cookie 設定
1. 首先登入 [lab](https://www.104-dev.com.tw/jobs/main/)（如果沒有 lab 帳號請看 [lab 帳號申請方式](#lab-帳號申請方式)）
2. 在 `.104-dev.com.tw` 的 Cookies 中找到 `JBCLOGIN` 後，將其對應的值複製到 localhost 的 `JBCLOGIN`
3. 確認 localhost Cookies 中的 `AC` 有值，沒有的話填上任意數字即可
4. 重新整理即可看到登入後的畫面

### lab 帳號申請方式
- 使用 [AC 小工具](https://ac-manager.104-dev.com.tw/dev) 點選`帳號註冊`，填寫帳號資訊後提交即可完成申請

## 開發

`??????再調整一下?????`
### 圖片資源
1. html中建議使用 `${VUE_APP_CDN_STATIC_URL}xxx/xxx.jpg` 少用 `~static/` or `./`。
2. css中禁止使用 `/` 也無法使用 `${VUE_APP_CDN_STATIC_URL}` ，請用 `~static/xxx/xxx.jpg`。

[範例請看此](https://github.com/104corp/104-f2e-cvue/wiki/Vue-Component-Import-And-Static-Assets)

`???????再調整一下??????`

## Pull Request
打包到 prod 時，必須建立 Pull Request且符合 [Pull Request guideline](https://github.com/104corp/guideline/blob/master/pull-request/README.md)。

### reference
`???????再確認一下??????`
### storybook alias not fully support

https://github.com/storybooks/vue-cli-plugin-storybook/issues/37

為了方便管理，暫時先不用 alias 的功能

`???????再確認一下??????`

### VSCode Settings

#### ext

- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) (建議)
- [StyleLint](https://marketplace.visualstudio.com/items?itemName=shinnn.stylelint) (建議)
- [StyleLint 支援auto fix](https://marketplace.visualstudio.com/items?itemName=stuartzhang.stylelint-stzhang) (不強迫)

#### settings
`.vscode.sample` 更名 `.vscode`


#### 結果畫面
如果有設定成功的話，VSCode一直存檔你應該會看到以下畫面：

![](./docs/eslint.gif)

have fun ~
