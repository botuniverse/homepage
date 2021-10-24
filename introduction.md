# 介绍

OneBot 是一个聊天机器人应用接口标准，旨在统一不同聊天平台上的机器人应用开发接口，使开发者只需编写一次业务逻辑代码即可应用到多种机器人平台。

## 背景

OneBot 标准最初是从原 CKYU 平台的 [CQHTTP](https://github.com/kyubotics/coolq-http-api) 插件接口修改而来。

CQHTTP 插件是 2017 年初出现的基于 CKYU（一个 QQ 机器人插件平台）的一款开源免费插件，它使用户能够通过 HTTP 或 WebSocket 对 CKYU 的事件进行上报以及接收请求来调用 CKYU 的 DLL 接口，从而可以使用其它语言（不方便编译到原生二进制的语言）编写 CKYU 插件。

在 CQHTTP 活跃开发和维护期间，有非常多的开发者使用 Python、Java、Node.js 等 web 开发常用语言基于 CQHTTP 插件编写各式各样的聊天机器人。

在新的机器人平台 [Mirai](https://github.com/mamoe/mirai) 开始发展、以及 CKYU 决定停运之后，为了让原来基于 CQHTTP 插件编写的机器人能够继续运行，一些开发者在其它机器人平台上编写了兼容 CQHTTP 接口的插件/模块，较为广泛使用的有 [go-cqhttp](https://github.com/Mrs4s/go-cqhttp)、[cqhttp-mirai](https://github.com/yyuueexxiinngg/onebot-kotlin) 和 [mirai-native](https://github.com/iTXTech/mirai-native) 等。

各 CQHTTP 兼容项目通常是实现了部分原 CQHTTP 插件的接口，并利用新平台的特性，新增了一些扩展接口。长远来看，这可能导致不同兼容项目最终形成了各自的“CQHTTP 接口变种”，当用户深度接入其中一个兼容项目后，可能又会出现与其它变种不兼容的情况，最终仍然存在潜在的迁移困难。

为了推动各 CQHTTP 兼容项目实现长远的兼容，为用户带来便利，2020 年我们通过改写原 CQHTTP 插件文档 + 引入 CQHTTP 兼容项目的新特性的方式，尝试维护一个统一的、不断发展的接口标准（即 [OneBot 11 标准](https://11.onebot.dev)）。

再后来，我们不满足于仅仅支持 QQ 平台，而是希望能够在更多其它机器人平台上实现 OneBot 标准。但要在 QQ 之外的机器人平台实现 OneBot 11 标准存在困难，或至少不优雅，因为它存在许多与 QQ 和原 CKYU 平台耦合的内容。于是我们又设计了 [OneBot 12 标准](https://12.onebot.dev)，试图消除 OneBot 11 的历史包袱，使 OneBot 真正成为一个现代的、通用的聊天机器人接口标准。

## 愿景

从 OneBot 12 开始，OneBot 标准不再与 QQ 紧耦合，而是适用于一切支持聊天机器人的地方。

我们的愿景是未来开发者可以在各类聊天平台（甚至任何可以打字的地方，例如命令行 shell 等）实现 OneBot 标准，从而让基于 OneBot 标准编写机器人应用可以无缝迁移到不同聊天平台，甚至可以同时支持不同平台。
