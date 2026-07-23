// src/i18n/faq-zh-hant.ts
export type FaqTranslationZhHant = { q: string; a: string; more?: string[] };

export const faqZhHant: Record<string, FaqTranslationZhHant> = {
  // ── 平臺、價格 & 試玩版 ──
  'when-does-moonlight-peaks-release': {
    q: 'Moonlight Peaks 什麼時候發售?',
    a: 'Moonlight Peaks 已於 2026 年 7 月 7 日發售,現已上市。',
    more: ['同一天在 Steam(PC 和 Mac)、Steam Deck、Nintendo Switch、Nintendo Switch 2 和 Android(通過 Google Play)上同步發售。'],
  },
  'how-much-does-moonlight-peaks-cost': {
    q: 'Moonlight Peaks 多少錢?',
    a: '在 Steam(PC/Mac)、Switch 和 Android 上售價 34.99 美元,Switch 2 上爲 39.99 美元。',
    more: ['首發第一週有折扣,也提到過從 Switch 升級到 Switch 2 的方案。'],
  },
  'what-platforms-is-moonlight-peaks-on': {
    q: 'Moonlight Peaks 支持哪些平臺?',
    a: 'Moonlight Peaks 現已在 Steam(Windows 和 Mac)、Steam Deck、Nintendo Switch、Nintendo Switch 2 和 Android(通過 Google Play)上發售。',
  },
  'is-moonlight-peaks-on-ps5-or-xbox': {
    q: 'Moonlight Peaks 有 PS5 或 Xbox 版本嗎?',
    a: '簡單說:沒有。沒有公佈任何 PlayStation 或 Xbox 版本。已確認的平臺是 Steam、Steam Deck、Switch、Switch 2 和 Android。',
    more: ['如果之後公佈了 PS5 或 Xbox 版本,我們會更新這個頁面。'],
  },
  'is-there-a-moonlight-peaks-demo': {
    q: '有 Moonlight Peaks 的試玩版嗎?',
    a: '有——Steam 和任天堂 eShop 都提供免費試玩版。',
    more: ['包含角色創建和溫馨活動,如釣魚、插花和刺繡,加上與小鎮居民的早期互動。'],
  },
  'does-demo-progress-carry-over': {
    q: '試玩版的進度會保留到 Moonlight Peaks 正式版嗎?',
    a: '不會——沒有確認任何進度轉移機制,所以無論你在試玩版裏進展到哪裏,完整版都會重新開始。可以把試玩版當作測試節奏、操作手感和早期流程的預告片。',
  },

  // ── 通用 ──
  'what-is-moonlight-peaks-about': {
    q: 'Moonlight Peaks 講的是什麼?',
    a: '這是一款溫馨的吸血鬼生活模擬遊戲。你扮演德古拉伯爵的孩子,離開大城市去重建一座廢棄的家族農場,小鎮上滿是狼人、女巫、人魚等超自然居民。',
    more: ['你在夜裏種地,學習魔法和藥水釀造,與七大家族的居民交朋友或談戀愛。'],
  },
  'who-makes-moonlight-peaks': {
    q: 'Moonlight Peaks 是誰開發的?',
    a: '由 Little Chicken Game Company 開發,美洲地區發行商爲 XSEED Games,歐洲地區爲 Marvelous Europe。',
  },
  'is-moonlight-peaks-multiplayer': {
    q: 'Moonlight Peaks 是多人遊戲嗎?',
    a: '不是——Moonlight Peaks 是純單人體驗。沒有公佈任何多人或聯機合作模式;Steam 上標註爲單人遊戲,曾有玩家在 Steam 社區討論區直接詢問開發者關於聯機合作的問題,但沒有得到確認回應。',
    more: ['如果之後公佈了聯機合作功能,我們會更新此頁面。'],
  },
  'moonlight-peaks-reddit-discord-community': {
    q: 'Moonlight Peaks 有官方 Reddit 或 Discord 嗎?',
    a: '我們目前還沒找到官方專屬的 subreddit——我們不會去猜測,也不會把非官方社區當作官方來呈現。已確認的社區聚集地是官方 Discord 服務器和 Steam 社區討論區,兩者都由開發者鏈接。',
    more: ['如果確認了官方 subreddit,我們會加進來,而不是鏈接到未經驗證的社區。'],
  },
  'how-to-change-portrait-style': {
    q: 'Moonlight Peaks 裏怎麼更改角色肖像風格?',
    a: '發售時已確認:打開主菜單(Nintendo Switch 上是"+"按鈕),可以在角色肖像的兩種預設之間切換——寫實上色的卡通風格,或更可愛的動漫風格。',
  },
  'moonlight-peaks-age-rating': {
    q: 'Moonlight Peaks 的年齡分級是什麼?',
    a: '發售時已確認:英國/歐洲 PEGI 12,美國 ESRB Teen(T)級,原因是涉及酒精內容(可以釀造並飲用啤酒和葡萄酒)以及略帶暗示性的浪漫用語。',
  },
  'moonlight-peaks-crashing-freezing': {
    q: 'Moonlight Peaks 爲什麼會崩潰或卡死?',
    a: '多份已確認的玩家報告描述了每隔幾秒出現的短暫卡頓(即使在高端 PC 上也會發生),以及在 Steam Deck 上離開農場或啓動時崩潰。目前還沒有官方解決方案,但更新 GPU 驅動、開啓"最高性能"模式,以及在 Steam Deck 上切換到 Proton 9.0-4,對部分玩家有效。',
  },
  'moonlight-peaks-controller-not-working': {
    q: '我的手柄在 Moonlight Peaks 裏不能用怎麼辦?',
    a: '這是一個已報告且尚未解決的問題——手柄在角色創建時能用,但之後可能失去響應,重新映射選項也會變灰。可以嘗試斷開重連手柄,或者暫時切換到鍵鼠,直到官方修復出現。',
  },
  'moonlight-peaks-crops-wither-season-change': {
    q: 'Moonlight Peaks 裏換季會導致作物枯萎嗎?',
    a: '是的——經測試者確認:春季轉入夏季時(其他換季可能也是如此),春季作物會枯萎,連魔法作物也不例外。做好圍繞季節邊界規劃種植的準備。',
  },
  'moonlight-peaks-mana-stamina-balance': {
    q: 'Moonlight Peaks 裏法力/體力的管理難嗎?',
    a: '多位測試者批評了法力管理,尤其是遊戲前期——你一開始只有很少的法力池,每晚睡覺只恢復一顆星,而能恢復法力的食物/飲品早期又很稀缺。多篇評測認爲,這一點加上體力條和日出限制,平衡性還有提升空間。',
  },
  'moonlight-peaks-night-length-cycle': {
    q: 'Moonlight Peaks 裏一個夜晚有多長?',
    a: '已確認:遊戲內的夜晚從 18:00 持續到 6:00,默認現實時長約 15 分鐘(類似《星露穀物語》的一天)。爲 Death 收集滿 100 個靈魂球會獎勵一座古董鍾,能把這個時長延長到 25 分鐘。',
  },
  'moonlight-peaks-how-to-save': {
    q: 'Moonlight Peaks 怎麼存檔?',
    a: '已確認:只能通過在棺材裏睡覺存檔,這會讓你直接推進到第二天 18:00。半夜沒有手動存檔,所以要規劃好活動,確保在日出前趕回去。',
  },
  'moonlight-peaks-starting-mana-energy': {
    q: '一開始有多少法力和體力?',
    a: '已確認:你一開始只有 3 點法力,每晚睡覺大約只恢復一顆星,而不是完全回滿。你的體力(耐力)和法力都可以通過喫烹飪食物來恢復——所以儲備一點食物比單純依賴經濟作物更重要。',
  },
  'moonlight-peaks-mini-map': {
    q: 'Moonlight Peaks 有小地圖嗎?',
    a: '沒有——已確認沒有小地圖。你的位置和重要地標顯示在一張完整地圖上,這張地圖還會顯示居民當前所在的位置。',
  },
  'moonlight-peaks-well-price': {
    q: 'Moonlight Peaks 裏水井多少錢?',
    a: '據報道:水井售價 1500 金,有助於澆水——比 4000 金的穀倉更便宜的早期購買項。',
  },
  'moonlight-peaks-best-universal-gifts': {
    q: 'Moonlight Peaks 裏適合送給所有人的禮物是什麼?',
    a: '社區禮物測試(通過 TheGamer 和玩家報告)表明,紫色鬱金香普遍受歡迎,而洋蔥種子普遍不受歡迎——應該避開。除此之外,大多數居民都有各自的偏好,目前仍在收集整理中。Saga 是唯一完全確認的例子:她最愛白葡萄酒和單支的花,但不喜歡花束。',
  },
  'moonlight-peaks-how-to-get-copper': {
    q: 'Moonlight Peaks 裏怎麼獲得銅?',
    a: '已確認:銅來自回聲洞穴,位於 Misty Shores 區域左下方(Orlock 莊園西邊)。它一開始被 Orlock 和 Fiona 的糾紛鎖住——你需要完成"Orlock 的釀酒計劃"和"A Bridge Too Far",解開橋的詛咒,打開這個區域。進去之後,用鎬子採集帶銅色斑點的岩石;較大的礦脈可能一次給 6 份礦石而不是 1 份。在爐子用 4 份銅礦石 + 1 份木炭製作銅錠。',
  },
  'moonlight-peaks-how-to-go-on-dates': {
    q: 'Moonlight Peaks 裏怎麼去約會?',
    a: '已確認:先與某位居民達到 4 級好感,才能邀請對方約會。約會以小遊戲的形式進行(比如按要求的顏色組一束花)——不是被動的過場動畫。要找好感度事件的過場動畫,打開地圖查看感嘆號(進入某區域觸發)或建築上的閃爍光環(進去觸發)。',
  },
  'moonlight-peaks-tool-upgrade-materials': {
    q: 'Moonlight Peaks 裏升級工具需要什麼?',
    a: '已確認:工具在嚎叫錘子(Ridge 的商店,僅工作日週一到週五營業)升級。找 Ridge 交談,選擇"商店",再選"我想買點東西",往右滑兩次到達升級標籤頁。升級需要金幣加銅錠、銀錠或金錠,具體取決於等級——所以你需要先能進入礦場。社區報告:優先把鎬子升到金級,因爲它決定了回聲洞穴能給你多少礦石,來製作其他所有工具的材料。',
  },
  'moonlight-peaks-cant-interact-indoors': {
    q: '爲什麼我在家裏點不了東西?',
    a: '這是一個已報告且尚未解決的 bug——部分玩家無法在室內點擊物品(比如用來睡覺的棺材或寵物),而室外互動卻正常。目前還沒有確認的解決方法;可以嘗試重新加載區域,或睡到第二天,如果問題持續,請聯繫 support@xseedgames.com。',
  },
  'moonlight-peaks-exe-deleted-antivirus': {
    q: '我的殺毒軟件刪除了 Moonlight Peaks.exe 怎麼辦?',
    a: '據報道:部分殺毒軟件會誤報並刪除"Moonlight Peaks.exe",可能導致啓動錯誤。把該 .exe 加入殺毒軟件的例外列表,並檢查遊戲文件完整性(Steam → 右鍵遊戲 → 屬性 → 已安裝的文件 → 驗證文件完整性)來恢復它。',
  },

  // ── 世界 & 玩法 ──
  'is-there-combat-in-moonlight-peaks': {
    q: 'Moonlight Peaks 裏有戰鬥嗎?',
    a: '沒有。預覽資料確認遊戲全程都沒有戰鬥——連礦場和地下墓穴都是平靜的,全程保持溫馨的基調。',
  },
  'do-you-farm-at-night': {
    q: 'Moonlight Peaks 裏是在晚上種地嗎?',
    a: '是的。作爲吸血鬼,你會在日落之後種地和照料農場,日出之前回到棺材裏——這是對常見白天農耕循環的一種反轉。',
  },
  'how-does-magic-work-in-moonlight-peaks': {
    q: 'Moonlight Peaks 裏魔法是怎麼運作的?',
    a: '魔法以魔杖爲基礎:你修好一根壞掉的魔杖,畫出法術圖案來施法,並管理法力(通過進食來恢復)。',
    more: ['有一個小小的澆水小遊戲,你還會解鎖省力法術來減輕農活負擔。你也會釀造像"另我藥水"這樣能改變外貌的藥劑。'],
  },
  'can-you-shapeshift-in-moonlight-peaks': {
    q: 'Moonlight Peaks 裏能變身嗎?',
    a: '能。你可以變身——比如變成蝙蝠——快速穿越小鎮,到達隱藏區域。',
  },
  'what-is-nokturna': {
    q: 'Moonlight Peaks 裏 Nokturna 是什麼?',
    a: 'Nokturna 是小鎮上流行的集換式卡牌遊戲。你收集卡牌,和居民們對戰。',
    more: ['完整規則和卡牌列表會在正式發售時確認——我們不會編造卡牌。'],
  },
  'what-pets-and-livestock-are-there': {
    q: 'Moonlight Peaks 裏有什麼寵物和家畜?',
    a: '你可以養一隻三隻眼的地獄貓作爲寵物,還能飼養像德古拉羊這樣的魔法家畜。',
  },

  // ── 戀愛 & 結婚 ──
  'can-you-get-married-in-moonlight-peaks': {
    q: 'Moonlight Peaks 裏能結婚嗎?',
    a: '能——發售時已確認。達到好感度 8 級時求婚,婚禮會在一週內舉行,小鎮上的吸血鬼和狼人都會來參加。之後你的伴侶會搬進你的農場,還會解鎖一個額外的好感度事件。遊戲裏沒有孩子系統。',
  },
  'can-you-have-children-in-moonlight-peaks': {
    q: 'Moonlight Peaks 裏能生孩子嗎?',
    a: '不能。你可以和居民約會結婚,但撫養孩子不是一個功能。',
  },
  'best-general-gifts-in-moonlight-peaks': {
    q: 'Moonlight Peaks 裏通用的保險禮物是什麼?',
    a: '社區禮物測試(通過 TheGamer 和玩家報告)表明,把禮物的顏色配合居民喜歡的顏色通常反響不錯,而自己用插花小遊戲做出符合對方喜歡顏色的花束是一個安全又隨時可用的選擇——即使不被採納也能當裝飾品用。據報道:手工禮物(包括花束和刺繡)在個人偏好之外普遍反響不錯。',
  },
  'how-many-romance-options-are-there': {
    q: 'Moonlight Peaks 裏有多少戀愛對象?',
    a: 'Steam 頁面描述約有兩打(約 24 個)可戀愛的居民。早期報道曾提到過 15 個,說明陣容在開發過程中有所擴大。',
    more: ['約會不限制性別,完整命名列表已在臨近發售時確認。'],
  },
  'is-dating-gender-locked-in-moonlight-peaks': {
    q: 'Moonlight Peaks 里約會限制性別嗎?',
    a: '不限制。角色模型刻意做成不分性別,所以無論你怎麼創建自己的吸血鬼,都可以和任何可用居民戀愛。',
  },
  'can-you-romance-a-werewolf': {
    q: 'Moonlight Peaks 裏能和狼人談戀愛嗎?',
    a: '能。Saga 是一名女性狼人,是已確認的戀愛對象。既然吸血鬼和狼人素來不和,跨越這個鴻溝去談戀愛正是它的魅力所在。',
  },
  'can-you-date-multiple-characters': {
    q: 'Moonlight Peaks 裏能同時和多個角色約會嗎?',
    a: '發售前沒有確認這一點——排他性和多角戀規則尚未公開。',
    more: ['一旦正式版展示了同時約會多位居民的具體規則,我們會更新這個答案。'],
  },

  // ── 角色 ──
  'who-is-saga': {
    q: 'Moonlight Peaks 裏 Saga 是誰?',
    a: 'Saga 是開發者展示過的一位狼人居民,也是已確認的戀愛對象。據說她的能量會隨滿月變化。',
  },
  'who-is-luna': {
    q: 'Moonlight Peaks 裏 Luna 是誰?',
    a: '據報道 Luna 是一位偏向農耕方向的女巫——可能是早期法術和園藝知識的來源。具體細節會在正式發售時確認。',
  },
  'who-is-orlock': {
    q: 'Moonlight Peaks 裏 Orlock 是誰?',
    a: '據報道 Orlock 是一個吸血鬼家族之首,在實機試玩報道中被描繪成一個搞笑角色。',
  },
  'who-is-count-dracula': {
    q: 'Moonlight Peaks 裏德古拉伯爵是誰?',
    a: '德古拉伯爵是你的父親,也是核心劇情人物。他不是戀愛對象;劇情讓你走出他的陰影,證明更溫和的不死生活是可能的。',
  },

  // ── 高意圖"是不是/怎麼"類問題 ──
  'is-moonlight-peaks-worth-it': {
    q: 'Moonlight Peaks 值得入手嗎?',
    a: '它已經確立爲 2026 年最有特色的溫馨模擬遊戲之一——一款 3D 吸血鬼生活模擬遊戲,有夜間農耕、魔杖魔法和豐富的戀愛選項——但誠實的答案是先試試免費試玩版。',
    more: ['試玩版讓你免費體驗角色創建器和溫馨活動——這是購買前判斷自己是否喜歡的最好方式。'],
  },
  'is-moonlight-peaks-free': {
    q: 'Moonlight Peaks 免費嗎?',
    a: '不免費——完整版售價 34.99 美元(Switch 2 上爲 39.99 美元)。不過 Steam 和任天堂 eShop 上有免費試玩版。',
  },
  'is-moonlight-peaks-open-world': {
    q: 'Moonlight Peaks 是開放世界嗎?',
    a: '它沒有以開放世界遊戲的名義宣傳。這是一款溫馨生活模擬遊戲,你在小鎮、自己的農場以及周邊區域(如森林、湖泊和礦場)之間穿行。',
    more: ['具體的地圖佈局以及自由探索程度會在正式發售時確認。'],
  },
  'is-moonlight-peaks-cozy': {
    q: 'Moonlight Peaks 是溫馨遊戲嗎?',
    a: '是的。這是一款沒有任何戰鬥的哥特式溫馨生活模擬遊戲,專注於種地、手工、魔法和人際關係。',
  },
  'how-long-is-moonlight-peaks': {
    q: 'Moonlight Peaks 要玩多久?',
    a: '和大多數生活模擬遊戲一樣,它是開放式的,而不是固定的劇情長度,所以遊玩時長因人而異,差別很大。',
  },
  'is-moonlight-peaks-on-game-pass': {
    q: 'Moonlight Peaks 在 Game Pass 上嗎?',
    a: '沒有公佈 Game Pass 上線計劃,而且由於沒有確認 Xbox 版本,預計也不會上 Game Pass。已確認平臺是 Steam、Steam Deck、Switch、Switch 2 和 Android。',
  },
  'can-you-play-moonlight-peaks-offline': {
    q: 'Moonlight Peaks 能離線玩嗎?',
    a: 'Moonlight Peaks 是單人遊戲,沒有公佈聯網要求,所以預計可以離線遊玩。具體細節會在正式發售時確認。',
  },
  'is-moonlight-peaks-coming-to-mobile': {
    q: 'Moonlight Peaks 會登陸移動端嗎?',
    a: '會——在發售當天就通過 Google Play 登陸了 Android。沒有公佈 iOS 或 iPhone 版本。',
  },
  'does-moonlight-peaks-have-co-op': {
    q: 'Moonlight Peaks 有本地或聯機合作模式嗎?',
    a: '沒有公佈任何合作模式。曾有玩家在 Steam 社區討論區直接向開發者詢問聯機合作的問題,但沒有得到確認回應。目前一切跡象都表明 Moonlight Peaks 是單人遊戲。',
  },
  'what-age-rating-is-moonlight-peaks': {
    q: 'Moonlight Peaks 的年齡分級是什麼?',
    a: '已確認:歐洲 PEGI 12,美國 ESRB Teen(T)級——儘管整體基調溫馨、沒有戰鬥,分級仍然是由酒精內容(可以釀造並飲用啤酒和葡萄酒)以及略帶暗示性的浪漫用語決定的,而不是暴力內容。',
  },
  'how-do-you-make-money-in-moonlight-peaks': {
    q: 'Moonlight Peaks 裏怎麼賺錢?',
    a: '已確認的主要循環是種植並出售作物——Steam 頁面把解鎖技能和升級的方式描述爲圍繞"更豐厚的收成"展開。一份次要的遊戲數據庫摘要補充說,更奇怪、"不自然"的作物賣得更貴,但這一細節沒有得到開發者確認。具體價格、買家和售賣機制會在正式發售時確認。',
  },
  'can-you-sell-crops-in-moonlight-peaks': {
    q: 'Moonlight Peaks 裏能賣作物嗎?',
    a: '出售作物換取金幣,作爲這類農耕模擬遊戲的核心循環是可以推斷出來的,而且 Moonlight Peaks 自己的商店頁面也把農場收入和解鎖升級、技能聯繫了起來。我們還沒看到開發者確認具體誰會買你的作物,或者出售機制在遊戲機制層面如何運作——這些會在正式發售時揭曉。',
  },
  'is-there-a-shop-in-moonlight-peaks': {
    q: 'Moonlight Peaks 裏有商店嗎?',
    a: '有,已確認——鎮上有幾家已命名的商店,包括 Webb of Wonders(Sabrina,藥水和服裝)、嚎叫錘子(Ridge,工具升級)、Third Eye Threads(Aras,服裝)和咖啡與棺材(Mina 和 Evan 經營的咖啡館)。出售你自己的物品是通過 Chester 單獨進行的,而不是和商人交易。',
  },
  'how-to-get-dark-wood-in-moonlight-peaks': {
    q: 'Moonlight Peaks 裏怎麼獲得暗黑木材?',
    a: '已確認:用銅斧(升級過的斧頭等級——初始生鏽的斧頭不行)砍伐農場地塊上的大型樹樁。暗黑木材用於多個裝飾配方,包括一把毛皮扶手椅(需要硬木板和布料)和一個棺材書架(需要木板)。',
  },
  'how-does-the-museum-work-in-moonlight-peaks': {
    q: 'Moonlight Peaks 裏博物館是怎麼運作的?',
    a: '已確認:博物館要到第一年內纔會開放,前提是涉及 Persephone、Jada 和 Winston 搬到鎮上的劇情線完成——而不是一開始就有。捐贈是通過走到主題收藏室並與感嘆號面板互動來完成的,而不是找館長對話。你還欠缺的收藏品會在揹包裏標出一個博物館圖標。品質要求因收藏而異;農業收藏特別要求更高品質的作物。',
  },
  'does-moonlight-peaks-have-accessibility-options': {
    q: 'Moonlight Peaks 有無障礙選項嗎?',
    a: '有一些,但不算全面:已確認的選項包括垂直同步開關、手柄震動、屏幕互動提示和文字動畫開關,外加可重新映射的按鍵、幀率上限和渲染縮放。未確認:目前沒有報告任何色盲模式或適合閱讀障礙者的文字選項。',
  },
  'can-you-romance-death-in-moonlight-peaks': {
    q: 'Moonlight Peaks 裏能和 Death 談戀愛嗎?',
    a: '尚未確認。Death 在發售前泄露的遊戲文件中是一個真實的名字,有自己的住所("Death 的小屋"),部分發售前傳聞曾把他列爲可能的戀愛對象——但這只是推測,不是開發者確認的內容。等正式版澄清這一點後我們會更新。',
  },
  'is-count-dracula-romanceable': {
    q: 'Moonlight Peaks 裏德古拉伯爵是戀愛對象嗎?',
    a: '不是。德古拉伯爵是你角色的父親,也是核心劇情人物,而不是戀愛對象——遊戲明確表示你和他的關係是親情,而非浪漫關係。',
  },
  'is-logan-romanceable-in-moonlight-peaks': {
    q: 'Moonlight Peaks 裏 Logan 是戀愛對象嗎?',
    a: '據報道,但還沒有被開發者完全確認——Logan 作爲狼人居民出現在媒體報道中,獨立的線索(一篇開發日誌和發售前泄露的文件)都表明他的名字和住所是真實的。在正式發售前,可以把他當作一個大概率但尚未保證的戀愛對象。',
  },
  'can-you-divorce-in-moonlight-peaks': {
    q: 'Moonlight Peaks 裏能離婚或分手嗎?',
    a: '尚未確認。開發者確認了可以和戀愛對象結婚,但之後能不能離婚、分手,或者再婚,我們目前沒有找到任何相關說明。',
  },
  'is-there-a-wedding-ceremony-in-moonlight-peaks': {
    q: 'Moonlight Peaks 裏有婚禮儀式嗎?',
    a: '尚未確認。結婚本身已經確認,但它是否伴隨真正的儀式、賓客或專門的活動——而不只是一個菜單確認——目前還沒有展示或描述過。',
  },
  'do-families-disapprove-of-cross-family-romance': {
    q: 'Moonlight Peaks 裏家族會反對跨家族戀愛嗎?',
    a: '作爲遊戲機制尚未確認,但這符合遊戲的基調:據報道吸血鬼和狼人一直爭吵不休,媒體報道也描述了小鎮超自然家族之間的一段舊恩怨。這是否會轉化爲跨家族戀愛的實際反對機制,目前未知。',
  },
  'is-moonlight-peaks-scary': {
    q: 'Moonlight Peaks 恐怖嗎,算恐怖遊戲嗎?',
    a: '不算。儘管有哥特式美學(吸血鬼、墓地,還有一個角色直接就叫 Death),但目前展示過的所有內容——試玩版、媒體預覽、官方預告片——都指向溫馨輕鬆的基調。報道把它的社交劇情描述爲"萌系但嚴重有毒",而不是恐怖。目前沒有確認任何戰鬥或恐怖內容。',
  },
  'is-moonlight-peaks-based-on-a-book-or-show': {
    q: 'Moonlight Peaks 改編自某本書、電影或劇集嗎?',
    a: '不是。據我們所知,Moonlight Peaks 是 Little Chicken Game Company 的原創作品——它沒有改編任何現有的書籍、電影或劇集。',
  },
  'does-moonlight-peaks-have-a-tutorial': {
    q: 'Moonlight Peaks 有新手教程嗎?',
    a: '細節尚未確認,但免費試玩版已經通過角色創建和一些核心活動(釣魚、插花、刺繡)以及早期的小鎮互動,爲新玩家提供了引導——即使沒有正式宣佈"教程模式",這也起到了柔和入門的作用。',
  },
  'does-moonlight-peaks-have-a-story': {
    q: 'Moonlight Peaks 有劇情嗎,還是完全開放式?',
    a: '它有一個輕量的敘事起點——你是一名吸血鬼,搬進廢棄的家族農場,向持懷疑態度的父親證明更溫和的不死生活是可能的——建立在一個開放式的溫馨生活模擬循環(種地、魔法、人際關係)之上。除了這個前提之外還有多少劇本化的敘事內容,目前還沒有詳細描述。',
  },
  'does-moonlight-peaks-support-a-controller': {
    q: 'Moonlight Peaks 能用手柄玩嗎?',
    a: '能,在 Switch、Switch 2 和 Steam Deck 上,手柄是默認輸入方式。在 PC 上,一篇媒體實機預覽明確建議用手柄而不是鍵鼠,暗示遊戲本身設計時就考慮了手柄操作,即便在 Steam 上也是如此。',
  },
  'is-moonlight-peaks-difficult': {
    q: 'Moonlight Peaks 難嗎,會失敗嗎?',
    a: '沒有任何跡象表明有嚴苛的難度——沒有確認戰鬥,基調也一直是溫馨而非挑戰導向。是否存在失敗條件(比如沒錢了)或難度選項,目前還沒有詳細描述。',
  },
  'does-moonlight-peaks-have-voice-acting': {
    q: 'Moonlight Peaks 有配音嗎?',
    a: '未確認。我們看過的試玩版、預告片或媒體報道里都沒有提到配音對白——在正式發售前,這一點保持未確認狀態。',
  },
  'is-moonlight-peaks-turn-based-or-real-time': {
    q: 'Moonlight Peaks 是回合制還是實時制?',
    a: '實時制,和大多數這類溫馨生活模擬遊戲一樣——晝夜時鐘會在你種地、探索、和居民交談時持續走動,而不是等你完成一個回合。',
  },
  'does-moonlight-peaks-have-achievements': {
    q: 'Moonlight Peaks 有成就或獎盃嗎?',
    a: '目前任何平臺都還沒有確認。如果 Steam 成就或特定平臺的獎盃列表存在,我們會在正式版發售後記錄下來。',
  },
  'is-moonlight-peaks-family-friendly': {
    q: 'Moonlight Peaks 適合孩子玩嗎?',
    a: '從溫馨基調和沒有戰鬥來看,大多數年齡段可能都合適,但我們無法給出確切答案——截稿時遊戲還沒有 ESRB 分級(部分媒體報道過主機/移動端的 Teen 分級,但我們無法獨立覈實)。等官方分級確認後請查看,尤其考慮到遊戲面向成人的戀愛和結婚系統。',
  },
  'how-to-get-married-in-moonlight-peaks': {
    q: 'Moonlight Peaks 裏怎麼結婚?',
    a: '發售時已確認:約會在好感度 4 級解鎖,好感度達到 8 級就可以求婚。約會以小遊戲形式進行(比如按要求的顏色組一束花)——有可能約會失敗,比如遲到,這會扣掉好感度點數,但不會直接分手。求婚後一週內舉行婚禮,小鎮上的吸血鬼和狼人都會來參加。婚姻本身是一夫一妻制,婚後伴侶會搬進你的農場。',
  },
  'can-you-date-multiple-people-moonlight-peaks': {
    q: 'Moonlight Peaks 裏能同時和多人約會嗎?',
    a: '能,發售時已確認——你可以同時追求多位居民。他們會注意到並有所反應,但被描述爲輕微的喫醋,而不是硬性的競爭系統。一旦求婚,婚姻本身是嚴格一夫一妻制的。',
  },
  'moonlight-peaks-step-parent-children': {
    q: 'Moonlight Peaks 裏能有孩子或成爲繼父母嗎?',
    a: '不能有親生孩子——多個來源確認,也沒有公佈添加這個機制的計劃。據報道的一個細節:如果你和已經有孩子的年長角色結婚,比如 Orlock(Mina 和 Evan 的父親),你就會成爲他們的繼父母。',
  },
  'how-to-turn-into-a-bat-hellkitten': {
    q: 'Moonlight Peaks 裏怎麼變成蝙蝠或地獄貓?',
    a: '發售時已確認:一旦通過劇情推進解鎖變身能力,長按左扳機打開法術輪盤,選擇你的形態——蝙蝠用於快速旅行,或你的三眼地獄貓用於更快的移動和免費耕地。',
  },
  'is-there-fast-travel-in-moonlight-peaks': {
    q: 'Moonlight Peaks 裏有快速旅行嗎?',
    a: '有,多個來源確認:女巫團提供鎮內快速旅行選項,蝙蝠形態解鎖後也能快速穿越地圖。遊戲沒有小地圖或任務標記系統,所以遊戲內地圖(帶有感嘆號和閃爍光環符號,標記待處理劇情)是主要的導航輔助工具。',
  },
  'how-to-find-quests-heart-events': {
    q: 'Moonlight Peaks 裏怎麼找到任務和好感度事件?',
    a: '發售時已確認:查看地圖上的標記——感嘆號表示進入該區域會觸發劇情,建築周圍的閃爍光環表示進去會觸發劇情。鎮上的告示板(由貓頭鷹 Albertus 管理)也列出了可接的委託/任務。',
  },
  'how-many-quests-are-in-moonlight-peaks': {
    q: 'Moonlight Peaks 裏有多少任務?',
    a: '經交叉覈對的任務日誌確認:主線劇情至少包含 20 多個已命名任務,從抵達小鎮一直到婚禮劇情線,外加多個已確認的支線任務和持續系統,比如告示板。可能還有比目前記錄更多的劇情內容。',
    more: ['完整任務指南見 /quests(目前僅有英文版)。'],
  },
  'what-does-a-bridge-too-far-quest-unlock': {
    q: 'Moonlight Peaks 裏 "A Bridge Too Far" 任務解鎖了什麼?',
    a: '已確認:完成後會解除通往 Misty Shores 的橋的詛咒,打開這個區域(包括回聲洞穴,你最早的銅礦石來源)以及墓地,並觸發下一段在 Crest Garden 展開的劇情線。',
  },
  'what-quest-unlocks-hellkitten-form': {
    q: '哪個任務解鎖地獄貓(貓形態)?',
    a: '經交叉覈對的任務日誌確認:任務"The Dinner Party"獎勵貓形態(地獄貓變身)。它出現在"A Bridge Too Far"之後的幾個劇情節點,緊隨法力提取器任務鏈之後。',
  },
  'why-is-my-quest-not-starting-in-moonlight-peaks': {
    q: 'Moonlight Peaks 裏任務爲什麼不觸發?',
    a: '社區報告:很多任務只是通過進入新區域、等待特定天數,或閱讀一封信/邀請函來觸發,而不是靠明顯的屏幕提示。如果某個任務卡住了,先檢查這條任務鏈的前一個任務是否真的完成了、天數是否夠了,以及你是否進入了下一步所綁定的區域或建築。',
  },
  'how-does-the-job-board-work-in-moonlight-peaks': {
    q: 'Moonlight Peaks 裏告示板是怎麼運作的?',
    a: '已確認:Albertus 打工板是市政廳裏一塊持續可用、可重複完成的告示板,由貓頭鷹 Albertus 管理。完成一份公告的委託能獲得金幣,有時還有物品,以及和委託人的好感度提升——這是一個持續性系統,而不是一次性任務。',
  },
  'what-are-the-main-story-quests-in-moonlight-peaks': {
    q: 'Moonlight Peaks 的主線任務按順序是什麼?',
    a: '經交叉覈對的任務日誌確認:任務鏈大致從在市政廳登記、遇見 Orlock 開始,經過"A Bridge Too Far"(Fiona/Orlock 的橋樑糾紛)、Crest Garden 的一個謎團、解鎖你的第一個魔法和法力提取器、"The Dinner Party"(解鎖貓形態),一直到一段婚禮劇情線。完整的分章節順序和解鎖條件見總覽頁面。',
  },
};
