# 后台管理模板

当前项目为后台管理系统前端项目模板，所采用前端基础架构为 React，生态圈为 Ant Design Pro 及 umi 等阿里旗下应用框架体系。

## 注意：此项目所用语言为 TypeScript

## 安装环境搭建及依赖程序下载

本项目运行需要依赖于 node.js 服务框架以及推荐使用 yarn 管理器，下载方式如下所示

#### nodejs 下载

安装 nodejs 并配置环境，nodejs 下载地址：[https://nodejs.org/zh-cn/download/](https://nodejs.org/zh-cn/download/)

#### yarn 包管理器安装

通过 npm 指令下载安装 yarn，进入 cmd 输入：

```bash
npm install -g yarn
```

## 克隆远程仓库至本地

当环境搭建完成后需要将远程文件克隆至所对应的文件夹下

#### 使用 git 命令克隆项目

克隆远程仓库至本地（xxx 为当前 git 项目对应地址）

```bash
git clone xxx
```

## 项目安装及构建

当项目已经克隆成功后需要安装项目运行的依赖项（node_modules），找到项目，进入项目根目录，使用命令

```bash
yarn
```

或者

```bash
yarn install
```

## 项目运行

当项目依赖项安装好后，使用命令（如下命令）启动 node 服务，运行项目,启动成功后，根据控制台提示地址，在浏览器中输入对应链接即可查看项目

```bash
yarn start
```

## 项目基本配置

项目中很多使用了 antd 默认的配置项，需要修改成自己项目的内容

#### 去除国际化语言

使用命令```bash npm run i18n-remove

````
并在config.ts中设置local为false

#### 左侧菜单标题修改

根目录中 config 文件夹下 defaultsetting.js 文件，修改 title 字段

#### 左侧菜单 logo 修改

根目录中 public 文件夹下，替换 loge.svg 文件,并在 app.tsx 文件中引入对应 logo 配置

#### 浏览器页签图标更换

根目录中 public 文件夹下替换 favicon.ico 文件

#### 修改项目主题及基本配置

根目录中 config 文件夹下修改 defaultSettings.ts 文件

#### 路由添加及修改

根目录中 config 文件夹下修改 routes.ts 文件

#### 权限添加及修改

根目录中 src 文件夹下修改 access.ts 文件

#### 配置请求反向代理

根目录中 config 文件夹下修改 proxy.ts 文件

#### 配置请求拦截

根目录中 utils 文件夹下修改 app.tsx

## 项目打包及发行

项目开发完成后，需要将项目通过 webpack 打包成静态文件，然后发送至测试环境或者生产环境的服务下，需要使用以下命令在根目录生成 dist 以供发布

```bash
npm run build
````

## 更多生态及帮助

当前项目所用框架繁多，并使用了 eslint,jest,stylelint 等众多代码校验及单元测试检查工具，请确保代码的严谨性，否则无法提交代码

参考链接：[antd](https://ant.design/index-cn)，[antd pro](https://pro.ant.design/index-cn)，[antd charts](https://charts.ant.design/)，[umi](https://umijs.org/zh-CN/docs)，[eslint](https://eslint.org/)，[jest](https://jestjs.io/)，[stylelint](https://stylelint.io/)，[webpack](https://webpack.js.org/)...
