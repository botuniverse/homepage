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

除了下面这些项目，也欢迎大家基于 OneBot 标准编写其它各类实现、框架、工具等，如果你已经实现了，欢迎通过 pull request 加到对应的列表中～

更多 GitHub 上的 OneBot 相关项目请查看 [onebot](https://github.com/topics/onebot?o=desc&s=updated) 和 [cqhttp](https://github.com/topics/cqhttp?o=desc&s=updated) 等 topic。
:::

## OneBot 12

### OneBot 实现

- 【QQ】[onebot-walle/walle-q](https://github.com/onebot-walle/walle-q)（已归档）
- 【QQ】[lc-cn/onebots](https://github.com/lc-cn/onebots)
- 【微信公众号】[crazywhalecc/onebot-woap](https://github.com/crazywhalecc/onebot-woap)
- 【微信】[JustUndertaker/ComWeChatBotClient](https://github.com/JustUndertaker/ComWeChatBotClient)
- 【KOOK】[onebot-walle/walle-k](https://github.com/onebot-walle/walle-k)
- 【Discord】[ITCraftDevelopmentTeam/OneDisc](https://github.com/ITCraftDevelopmentTeam/OneDisc)
- 【Vocechat】[Privoce/PyOneBot-Vocechat](https://github.com/Privoce/PyOneBot-Vocechat)

### LibOneBot

- 【Go】[botuniverse/go-libonebot](https://github.com/botuniverse/go-libonebot)
- 【Rust】[onebot-walle/Walle-core](https://github.com/onebot-walle/Walle-core)
- 【PHP】[botuniverse/php-libonebot](https://github.com/botuniverse/php-libonebot)
- 【Deno】[botuniverse/dnlibob](https://github.com/botuniverse/dnlibob)

### OneBot SDK

- 【Rust】[onebot-walle/Walle](https://github.com/onebot-walle/Walle)
- 【MoonBit】[biyuehu/moonbot](https://github.com/BIYUEHU/moonbot)
- 【Python】[nonebot/nonebot2](https://github.com/nonebot/nonebot2)
- 【Python】[OlivOS-Team/OlivOS](https://github.com/OlivOS-Team/OlivOS)
- 【Python】[AliceBotProject/alicebot](https://github.com/AliceBotProject/alicebot)
- 【Python】[PigBotFramework/next](https://github.com/PigBotFramework/next)
- 【C#】[theGravityLab/Onebot.Net](https://github.com/theGravityLab/Onebot.Net)
- 【Ruby】[fantasyzhjk/onebot-ruby](https://github.com/fantasyzhjk/onebot-ruby)
- 【PHP】[zhamao-robot/zhamao-framework](https://github.com/zhamao-robot/zhamao-framework)

### 工具 / 中间件

- [nonepkg/nonebot-plugin-all4one](https://github.com/nonepkg/nonebot-plugin-all4one)：NoneBot 2 转 OneBot 12
- [A-kirami/matcha](https://github.com/A-kirami/matcha)：模拟聊天交互的辅助开发工具

## OneBot 11 / 10 / CQHTTP

### OneBot 实现
- 【QQ】[Lagrange.OneBot](https://github.com/LagrangeDev/Lagrange.Core)（NTQQ 协议方案）
- 【QQ】[OpenShamrock](https://github.com/whitechi73/OpenShamrock) | [官方论坛](https://forum.libfekit.so/)（手机 QQ Xposed Hook 方案）
- 【QQ】[Mrs4s/go-cqhttp](https://github.com/Mrs4s/go-cqhttp)
- 【QQ】[yyuueexxiinngg/onebot-kotlin](https://github.com/yyuueexxiinngg/onebot-kotlin)
- 【QQ】[takayama-lily/oicq](https://github.com/takayama-lily/oicq/tree/master/http-api)（已归档）
- 【QQ】[lc-cn/onebots](https://github.com/lc-cn/onebots)
- 【QQ】[Yiwen-Chan/OneBot-YaYa](https://github.com/Yiwen-Chan/OneBot-YaYa)（已归档）
- 【QQ】[kyubotics/coolq-http-api](https://github.com/kyubotics/coolq-http-api)（已归档）
- 【QQ】[Hoshinonyaruko/Gensokyo](https://github.com/Hoshinonyaruko/Gensokyo)（基于 QQ 开放平台官方 API）
- 【开黑啦】[kaiheila-community/kaiheila-onebot](https://github.com/kaiheila-community/kaiheila-onebot)（已归档）
- 【开黑啦】[super1207/KookOneBot](https://github.com/super1207/KookOneBot)
- 【开黑啦】[Hoshinonyaruko/Gensokyo-kook](https://github.com/Hoshinonyaruko/Gensokyo-kook)
- 【Discord】[Hoshinonyaruko/Gensokyo-Discord](https://github.com/Hoshinonyaruko/Gensokyo-Discord)
- 【Discord】[ITCraftDevelopmentTeam/OneDisc](https://github.com/ITCraftDevelopmentTeam/OneDisc)
- 【微信公众平台】[Hoshinonyaruko/Gensokyo-wxmp](https://github.com/Hoshinonyaruko/Gensokyo-wxmp)（基于微信公众号+小程序 API）
- 【Telegram】[Hoshinonyaruko/Gensokyo-telegram](https://github.com/Hoshinonyaruko/Gensokyo-telegram)
- 【Telegram】[Echomirix/Tele-KiraLink](https://github.com/Echomirix/Tele-KiraLink)

### OneBot SDK

- 【Python】[nonebot/nonebot2](https://github.com/nonebot/nonebot2)
- 【Python】[nonebot/nonebot](https://github.com/nonebot/nonebot)
- 【Python】[nonebot/aiocqhttp](https://github.com/nonebot/aiocqhttp)
- 【Python】[SSmJaE/PepperBot](https://github.com/SSmJaE/PepperBot)
- 【Python】[GraiaProject/Avilla](https://github.com/GraiaProject/Avilla)
- 【Python】[Lxns-Network/nakuru-project](https://github.com/Lxns-Network/nakuru-project)
- 【Python】[OlivOS-Team/OlivOS](https://github.com/OlivOS-Team/OlivOS)
- 【Python】[AliceBotProject/alicebot](https://github.com/AliceBotProject/alicebot)
- 【Python】[PigBotFramework/next](https://github.com/PigBotFramework/next)
- 【Python】[Meloland/melobot](https://github.com/Meloland/melobot)
- 【Python】[MuRainBot/MuRainBot2](https://github.com/MuRainBot/MuRainBot2)
- 【Python】[avilliai/eridanus-dep](https://github.com/avilliai/eridanus-dep)
- 【Node】[koishijs/koishi](https://github.com/koishijs/koishi)
- 【Node】[Circkoooooo/cqhttp-ts](https://github.com/Circkoooooo/cqhttp-ts)
- 【Node】[kotorijs/kotori](https://github.com/kotorijs/kotori)
- 【Node】[SimonShiki/philia](https://github.com/SimonShiki/philia)
- 【Node】[huankong-team/node-napcat-ts](https://github.com/huankong-team/node-napcat-ts)
- 【Deno】[satouriko/deno-cqhttp](https://github.com/satouriko/deno-cqhttp)
- 【PHP】[zhamao-robot/zhamao-framework](https://github.com/zhamao-robot/zhamao-framework)
- 【PHP】[LovelyA72/YeziiBot-v2](https://github.com/LovelyA72/YeziiBot-v2)
- 【PHP】[ParaParty/MPBot](https://github.com/ParaParty/MPBot)
- 【Go】[nsxdevx/nsxbot](https://github.com/nsxdevx/nsxbot)
- 【Go】[arttnba3/Shigure-Bot](https://github.com/arttnba3/Shigure-Bot)
- 【Go】[wdvxdr1123/ZeroBot](https://github.com/wdvxdr1123/ZeroBot)
- 【Go】[AkiinuBot/go-Pichubot](https://github.com/AkiinuBot/go-Pichubot)
- 【Go】[BoyChai/CoralBot](https://github.com/BoyChai/CoralBot)
- 【C#】[FlandreDevs/Flandre](https://github.com/FlandreDevs/Flandre)
- 【C#】[int-and-his-friends/Sisters.WudiLib](https://github.com/int-and-his-friends/Sisters.WudiLib)
- 【C#】[frank-bots/cqhttp.Cyan](https://github.com/frank-bots/cqhttp.Cyan)
- 【C#】[Yukari316/Sora](https://github.com/Yukari316/Sora)
- 【C#】[ParaParty/OneBot-Framework](https://github.com/ParaParty/OneBot-Framework)
- 【C#】[Milkitic/MilkiBotFramework](https://github.com/Milkitic/MilkiBotFramework)
- 【C#】[cqbef/cqhttp.WebSocketReverse.NETCore](https://github.com/cqbef/cqhttp.WebSocketReverse.NETCore)
- 【Java / Kotlin】[HyDevelop/PicqBotX](https://github.com/HyDevelop/PicqBotX)（已归档）
- 【Java / Kotlin】[lz1998/Spring-CQ](https://github.com/lz1998/Spring-CQ)
- 【Java / Kotlin】[MisakaTAT/Shiro](https://github.com/MisakaTAT/Shiro)
- 【Java / Kotlin】[JuerGenie/juerobot](https://github.com/JuerGenie/juerobot)
- 【Java / Kotlin】[MrXiaoM/Overflow](https://github.com/MrXiaoM/Overflow)
- 【Kotlin(KMP)】[RTAkland/ROneBot](https://github.com/RTAkland/ROneBot)
- 【MoonBit】[biyuehu/moonbot](https://github.com/BIYUEHU/moonbot)
- 【C++】[super1207/MiraiCQ](https://github.com/super1207/MiraiCQ)
- 【Java / Kotlin(KMP)】[simbot-component-onebot](https://github.com/Simple-robot/simbot-component-onebot/)
- 【Rust】[ThriceCola/Kovi](https://github.com/ThriceCola/Kovi)

### 工具 / 中间件

- [purerosefallen/onebot-lb](https://github.com/purerosefallen/onebot-lb)：负载均衡器
- [lunzhiPenxil/OlivOSOnebotV11](https://github.com/lunzhiPenxil/OlivOSOnebotV11)：多账号控制
- [A-kirami/matcha](https://github.com/A-kirami/matcha)：模拟聊天交互的辅助开发工具

## 教程

:::tip 提示
如果想要学习如何基于 OneBot 标准开发聊天机器人应用，可以参考这些教程。
:::

- 【文章】[使用 nonebot 搭建 qq 群聊机器人](https://zhuanlan.zhihu.com/p/340849952)
- 【视频】[Python 和 QQ 机器人开发基础培训](https://www.bilibili.com/video/BV19t411679V)（部分内容可能过时，需参考最新文档食用）

## 应用案例

:::tip 提示
如果你想分享你基于 OneBot 标准编写的有趣的聊天机器人，欢迎通过 pull request 补充在这里。
:::

- [milkice233/efb-qq-slave](https://github.com/milkice233/efb-qq-slave)：基于 ehForwarderBot 框架的 QQ 从端
- [projectriri/bot-gateway](https://projectriri.github.io/bot-gateway/)：提供跨聊天平台的通用机器人 API 的机器人消息网关
- [jqqqqqqqqqq/UnifiedMessageRelay](https://github.com/jqqqqqqqqqq/UnifiedMessageRelay)：QQ <-> Telegram Bot Framework & Forwarder
- [Mother-Ship/cabbageWeb](https://github.com/Mother-Ship/cabbageWeb)：基于 Java Web 的 osu! 游戏数据查询机器人
- [arttnba3/Shione](https://github.com/arttnba3/Shione)：汐音 (Shione)，基于 Shigure-Bot 的机器人
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
- [FloatTech/ZeroBot-Plugin](https://github.com/FloatTech/ZeroBot-Plugin)：基于 ZeroBot 开发的群管、点歌、搜图等功能
- [yuudi/gypsum](https://github.com/yuudi/gypsum)：简单易用的网页控制台，匹配消息进行回复，也可以使用 jinja 模板与 lua 脚本实现高级功能
- [RicheyJang/PaimengBot](https://github.com/RicheyJang/PaimengBot): 基于 ZeroBot 的 QQ 娱乐机器人，支持 20 余种功能，可以大大丰富你的 QQ 体验或群活跃度
- [Alex1911-Jiang/GreenOnions](https://github.com/Alex1911-Jiang/GreenOnions): 实现了搜图、RSS 订阅转发,、根据 Pixiv ID 下载原图、翻译、setu 等功能
- [DeepOceanSoft/AntiRainBot](https://github.com/DeepOceanSoft/AntiRainBot): 一个主要为辅助游玩公主连结的群聊机器人
- [idanran/myrtus](https://github.com/idanran/myrtus): 在多个群组间传话的机器人
- [Kyomotoi/ATRI](https://github.com/Kyomotoi/ATRI): 为🐧即时聊天工具中复现一只优秀的功能性机器人是本项目的目标
- [KimigaiiWuyi/GenshinUID](https://github.com/KimigaiiWuyi/GenshinUID): 基于 HoshinoBot/NoneBot2/QQ 官方频道 Bot (Python SDK) 的原神 Uid 查询/原神 Wiki/米社签到/树脂提醒插件
- [Hoshinonyaruko/Sanaebot](https://github.com/Hoshinonyaruko/SanaeBot): 使用 Epl 编写的 MyPCQQ（MPQ）到 OneBot 11 兼容的娱乐聊天词库机器人——早苗，兼容层兼容 QQ 频道、KOOK、DoDo
- [SilveryStar/Adachi-BOT](https://github.com/SilveryStar/Adachi-BOT): 集成多种基础功能、易开发拓展的聊天机器人框架，兼容 OneBot 11
- [avilliai/Eridanus](https://github.com/avilliai/Eridanus): 以 LLM 函数调用（Function Calling）为核心编写的多功能机器人，插件化设计，具有一定拓展性
- [AstrBotDevs/AstrBot](https://github.com/AstrBotDevs/AstrBot): 一站式 LLM 聊天机器人平台及开发框架。
- [happysnaker/qq-ai-bot](https://github.com/happysnaker/qq-ai-bot): 基于 OneBot 11 与 ACP 的自托管 QQ ↔ AI 机器人骨架，支持会话持久化、进度回传与 Docker 部署。
