# 生态

:::tip 提示
基于 OneBot 标准的项目可以在 README 中添加徽章 ![Badge](https://img.shields.io/badge/OneBot-12-black) 或 ![Badge](https://img.shields.io/badge/OneBot-12-black?logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHAAAABwCAMAAADxPgR5AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAAxQTFRF////29vbr6+vAAAAk1hCcwAAAAR0Uk5T////AEAqqfQAAAKcSURBVHja7NrbctswDATQXfD//zlpO7FlmwAWIOnOtNaTM5JwDMa8E+PNFz7g3waJ24fviyDPgfhz8fHP39cBcBL9KoJbQUxjA2iYqHL3FAnvzhL4GtVNUcoSZe6eSHizBcK5LL7dBr2AUZlev1ARRHCljzRALIEog6H3U6bCIyqIZdAT0eBuJYaGiJaHSjmkYIZd+qSGWAQnIaz2OArVnX6vrItQvbhZJtVGB5qX9wKqCMkb9W7aexfCO/rwQRBzsDIsYx4AOz0nhAtWu7bqkEQBO0Pr+Ftjt5fFCUEbm0Sbgdu8WSgJ5NgH2iu46R/o1UcBXJsFusWF/QUaz3RwJMEgngfaGGdSxJkE/Yg4lOBryBiMwvAhZrVMUUvwqU7F05b5WLaUIN4M4hRocQQRnEedgsn7TZB3UCpRrIJwQfqvGwsg18EnI2uSVNC8t+0QmMXogvbPg/xk+Mnw/6kW/rraUlvqgmFreAA09xW5t0AFlHrQZ3CsgvZm0FbHNKyBmheBKIF2cCA8A600aHPmFtRB1XvMsJAiza7LpPog0UJwccKdzw8rdf8MyN2ePYF896LC5hTzdZqxb6VNXInaupARLDNBWgI8spq4T0Qb5H4vWfPmHo8OyB1ito+AysNNz0oglj1U955sjUN9d41LnrX2D/u7eRwxyOaOpfyevCWbTgDEoilsOnu7zsKhjRCsnD/QzhdkYLBLXjiK4f3UWmcx2M7PO21CKVTH84638NTplt6JIQH0ZwCNuiWAfvuLhdrcOYPVO9eW3A67l7hZtgaY9GZo9AFc6cryjoeFBIWeU+npnk/nLE0OxCHL1eQsc1IciehjpJv5mqCsjeopaH6r15/MrxNnVhu7tmcslay2gO2Z1QfcfX0JMACG41/u0RrI9QAAAABJRU5ErkJggg==) 来表示支持的 OneBot 版本，徽章图片 URL 可通过右击拷贝图片地址获得，可修改 URL 中的 `12` 以表示其它版本。
:::

:::tip 提示
在下面列出的项目中，

- **OneBot 实现**指的是与机器人平台对接、向上提供符合 OneBot 标准的接口的程序，可简称为**实现端**；
- **LibOneBot** 指的是不同 OneBot 实现可以复用的部分，可以帮助 OneBot 实现者快速在新的聊天机器人平台实现 OneBot 标准；
- **OneBot SDK** 指的是帮助 OneBot 用户对接 OneBot 实现，使用户不需要自行编写 HTTP、WebSocket 等通信逻辑的库，可简称为 **SDK** 或**框架**；
- **工具 / 中间件**指的是在 OneBot 实现和 OneBot SDK 之间作为中间层进行协调转发的程序，或是其它辅助 OneBot 实现和 SDK 运行的程序。

除了下面这些项目，也欢迎大家基于 OneBot 标准编写其它各类实现、框架、工具等，如果你已经实现了，欢迎通过 pull request 加到对应的表格里～
:::

## OneBot 12

### OneBot 实现

- 【QQ】[abrahum/walle-q](https://github.com/abrahum/walle-q)
- 【QQ】[Mrs4s/go-cqhttp](https://github.com/Mrs4s/go-cqhttp/tree/onebot.v12)（正在适配中）
- 【Telegram】[teyda/teyda_preview](https://github.com/teyda/teyda_preview)

### LibOneBot

- 【Go】[botuniverse/go-libonebot](https://github.com/botuniverse/go-libonebot)
- 【Rust】[abrahum/Walle-core](https://github.com/abrahum/Walle-core)
- 【PHP】[botuniverse/php-libonebot](https://github.com/botuniverse/php-libonebot)
- 【Deno】[teyda/dnlibob](https://github.com/teyda/dnlibob)

### OneBot SDK

- 【Rust】[abrahum/Walle](https://github.com/abrahum/Walle)
- 【Python】[nonebot/nonebot2](https://github.com/nonebot/nonebot2)
- 【C#】[theGravityLab/Onebot.Net](https://github.com/theGravityLab/Onebot.Net)

### 工具 / 中间件

- 【无】待补充

## OneBot 11 / 10 / CQHTTP

### OneBot 实现

- 【QQ】[Mrs4s/go-cqhttp](https://github.com/Mrs4s/go-cqhttp)
- 【QQ】[yyuueexxiinngg/onebot-kotlin](https://github.com/yyuueexxiinngg/onebot-kotlin)
- 【QQ】[takayama-lily/oicq](https://github.com/takayama-lily/oicq/tree/master/http-api)（原仓库为 [takayama-lily/node-onebot](https://github.com/takayama-lily/node-onebot)）
- 【QQ】[Yiwen-Chan/OneBot-YaYa](https://github.com/Yiwen-Chan/OneBot-YaYa)（已归档）
- 【QQ】[kyubotics/coolq-http-api](https://github.com/kyubotics/coolq-http-api)（使用 [mirai-native](https://github.com/iTXTech/mirai-native) 或 [MiraiCQ](https://github.com/super1207/MiraiCQ) 加载）
- 【开黑啦】[kaiheila-community/kaiheila-onebot](https://github.com/kaiheila-community/kaiheila-onebot)（已归档）

### OneBot SDK

- 【Python】[nonebot/nonebot2](https://github.com/nonebot/nonebot2)
- 【Python】[nonebot/nonebot](https://github.com/nonebot/nonebot)
- 【Python】[nonebot/aiocqhttp](https://github.com/nonebot/aiocqhttp)
- 【Python】[SSmJaE/PepperBot](https://github.com/SSmJaE/PepperBot)
- 【Python】[GraiaProject/AvillaCore](https://github.com/GraiaProject/AvillaCore)
- 【Python】[Lxns-Network/nakuru-project](https://github.com/Lxns-Network/nakuru-project)
- 【Python】[OlivOS-Team/OlivOS](https://github.com/OlivOS-Team/OlivOS)
- 【Node】[koishijs/koishi](https://github.com/koishijs/koishi)
- 【Deno】[satouriko/deno-cqhttp](https://github.com/satouriko/deno-cqhttp)
- 【PHP】[zhamao-robot/zhamao-framework](https://github.com/zhamao-robot/zhamao-framework)
- 【PHP】[LovelyA72/YeziiBot-v2](https://github.com/LovelyA72/YeziiBot-v2)
- 【PHP】[ParaParty/MPBot](https://github.com/ParaParty/MPBot)
- 【Go】[wdvxdr1123/ZeroBot](https://github.com/wdvxdr1123/ZeroBot)
- 【Go】[AkiinuBot/go-Pichubot](https://github.com/AkiinuBot/go-Pichubot)
- 【C#】[int-and-his-friends/Sisters.WudiLib](https://github.com/int-and-his-friends/Sisters.WudiLib)
- 【C#】[frank-bots/cqhttp.Cyan](https://github.com/frank-bots/cqhttp.Cyan)
- 【C#】[Yukari316/Sora](https://github.com/Yukari316/Sora)
- 【C#】[ParaParty/OneBot-Framework](https://github.com/ParaParty/OneBot-Framework)
- 【C#】[Milkitic/MilkiBotFramework](https://github.com/Milkitic/MilkiBotFramework)
- 【C#】[cqbef/cqhttp.WebSocketReverse.NETCore](https://github.com/cqbef/cqhttp.WebSocketReverse.NETCore)
- 【Java / Kotlin】[HyDevelop/PicqBotX](https://github.com/HyDevelop/PicqBotX)
- 【Java / Kotlin】[lz1998/Spring-CQ](https://github.com/lz1998/Spring-CQ)
- 【Java / Kotlin】[MisakaTAT/Shiro](https://github.com/MisakaTAT/Shiro)
- 【Java / Kotlin】[JuerGenie/juerobot](https://github.com/JuerGenie/juerobot)
- 【C++】[super1207/MiraiCQ](https://github.com/super1207/MiraiCQ)
- 【Ruby】[fantasyzhjk/ruby-cqhttp](https://github.com/fantasyzhjk/ruby-cqhttp)

### 工具 / 中间件

- [purerosefallen/onebot-lb](https://github.com/purerosefallen/onebot-lb)：负载均衡器
- [lunzhiPenxil/OlivOSOnebotV11](https://github.com/lunzhiPenxil/OlivOSOnebotV11)：多账号控制

## 教程

:::tip 提示
如果想要学习如何基于 OneBot 标准开发聊天机器人应用，可以参考这些教程。
:::

- 【文章】[使用 nonebot 搭建 qq 群聊机器人](https://zhuanlan.zhihu.com/p/340849952)
- 【视频】[基于 nonebot2 的 QQ 机器人的制作](https://www.bilibili.com/video/BV1JK4y1D7kX)
- 【视频】[Python 和 QQ 机器人开发基础培训](https://www.bilibili.com/video/BV19t411679V)（部分内容可能过时，需参考最新文档食用）

## 应用案例

:::tip 提示
如果你想分享你基于 OneBot 标准编写的有趣的聊天机器人，欢迎通过 pull request 补充在这里。
:::

- [milkice233/efb-qq-slave](https://github.com/milkice233/efb-qq-slave)：基于 ehForwarderBot 框架的 QQ 从端
- [projectriri/bot-gateway](https://projectriri.github.io/bot-gateway/)：提供跨聊天平台的通用机器人 API 的机器人消息网关
- [jqqqqqqqqqq/UnifiedMessageRelay](https://github.com/jqqqqqqqqqq/UnifiedMessageRelay)：QQ <-> Telegram Bot Framework & Forwarder
- [Mother-Ship/cabbageWeb](https://github.com/Mother-Ship/cabbageWeb)：基于 Java Web 的 osu! 游戏数据查询机器人
- [bdbai/Kobirt](https://github.com/bdbai/Kobirt)：Ingress 游戏辅助机器人
- [JRT-FOREVER/hub2coolq](https://github.com/JRT-FOREVER/hub2coolq)：GitHub webhook 消息转发至 QQ 群
- [Kurarion/Bangumi-for-QQ](https://github.com/Kurarion/Bangumi-for-QQ)：用于在 QQ 平台便捷地使用 Bangumi 部分功能（查寻条目、更新条目进度等）
- [rikakomoe/cqhttp-twitter-bot](https://github.com/rikakomoe/cqhttp-twitter-bot)：自动订阅 Twitter 发送到 QQ
- [XiaoLin0815/QQ2TG](https://github.com/XiaoLin0815/QQ2TG)：帮助 QQ 与 Telegram 互联的小程序
- [spacemeowx2/splatoon2-qqbot](https://github.com/spacemeowx2/splatoon2-qqbot)：宇宙第一的 Splatoon2 的地图机器人
- [OYMiss/forward-bot](https://github.com/OYMiss/forward-bot)：用 Telegram 和 QQ 好友聊天的转发机器人
- [mrthanlon/SICNUBOT](https://github.com/mrthanlon/SICNUBOT)：专为四川师范大学设计用于审核发布消息用的 QQ 机器人
- [billjyc/pocket48](https://github.com/billjyc/pocket48/tree/coolq)：监控成员口袋 48 聚聚房间、微博和摩点项目
- [chinshin/CQBot_hzx](https://github.com/chinshin/CQBot_hzx)：摩点 & 微博 & 口袋 48 机器人（BEJ48-黄子璇）
- [Ice-Hazymoon/grnd_bot](https://github.com/Ice-Hazymoon/grnd_bot)：订阅 RSSHub 更新并推送到 QQ 群
- [Ray-Eldath/Avalon](https://github.com/Ray-Eldath/Avalon)：多功能、可扩展的群机器人，支持 QQ 和 Discord
- [Bluefissure/FFXIVBOT](https://github.com/Bluefissure/FFXIVBOT)：基于 Django Channels 的最终幻想 14 游戏数据查询机器人
- [Milkitic/daylily](https://github.com/Milkitic/daylily)：基于 MilkiBotFramework 的机器人，可作为 MilkiBotFramework 示例仓库
- [cczu-osa/aki](https://github.com/cczu-osa/aki)：基于 NoneBot 的多功能 QQ 机器人
- [cleoold/sendo-erika](https://github.com/cleoold/sendo-erika)：基于 cqhttp 和 NoneBot 的，主要通过私聊摇控的 QQ 机器人
- [duan602728596/qqtools](https://github.com/duan602728596/qqtools)：基于 Nwjs 的 QQ 群工具（摩点、口袋 48、微博提醒、入群欢迎、定时喊话、自定义命令和回复信息等）
- [Tsuk1ko/CQ-picfinder-robot](https://github.com/Tsuk1ko/CQ-picfinder-robot)：基于 Saucenao 的搜图机器人
- [kasora/dice](https://github.com/kasora/dice)：COC7 骰子 QQ 机器人
- [shidenggui/tuishujun-for-qq](https://github.com/shidenggui/tuishujun-for-qq)：基于推书君的小说查询推荐 QQ 机器人
- [JuerGenie/cn.juerwhang.jgbot](https://github.com/JuerGenie/cn.juerwhang.jgbot)：基于 [JuerGenie/juerobot](https://github.com/JuerGenie/juerobot) 的娱乐用 QQ 机器人
- [drsanwujiang/DiceRobot](https://github.com/drsanwujiang/DiceRobot)：一个基于 coolq-http-api 插件的 TRPG 骰子机器人
- [UltraSoundX/SDFMU-Library](https://github.com/UltraSoundX/SDFMU-Library)：山东第一医科大图书馆预约机器人
- [Quan666/ELF_RSS](https://github.com/Quan666/ELF_RSS)：基于 NoneBot 的，交互式 RSS 订阅、转发机器人
- [lz1998/Spring-CQ-web](https://github.com/lz1998/Spring-CQ-web)：基于 SpringCQ 的机器人 web 控制台
- [suisei-cn/stargazer-qq](https://github.com/suisei-cn/stargazer-qq)：一个灵活的 vtuber 发推/直播动态监控机器人
- [Ninzore/Wecab](https://github.com/Ninzore/Wecab)：网络内容聚合机器人，支持微博、B站、Twitter 等
- [mgsky1/FG](https://github.com/mgsky1/FG)：基于 NoneBot 的 QQ 群机器人，特色功能是利用机器学习算法提取每日的聊天热词，并使用词云+文本的方式进行展示
- [Yiwen-Chan/ZeroBot-Plugin](https://github.com/Yiwen-Chan/ZeroBot-Plugin)：基于 ZeroBot 开发的群管、点歌、搜图等功能
- [yuudi/gypsum](https://github.com/yuudi/gypsum)：简单易用的网页控制台，匹配消息进行回复，也可以使用 jinja 模板与 lua 脚本实现高级功能
