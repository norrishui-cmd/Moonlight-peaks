// src/i18n/quests-side-zh-hant.ts
// Traditional Chinese (Taiwan) translations, auto-converted from quests-side-zh.ts via OpenCC for side quests (title/summary/reward/troubleshooting text only).
// slug/npc/status/related are shared from data/quests-side.ts.
export type SideQuestTrZhHant = { title: string; summary: string; reward?: string; troubleshooting?: { q: string; a: string }[] };

export const sideQuestsZhHant: Record<string, SideQuestTrZhHant> = {
  'noels-fishing-contest': {
    title: 'Noel的釣魚比賽(第一根魚竿)',
    summary: '確認:在遊戲最初幾個夜晚內，Noel會在河邊向你發起釣魚比賽的挑戰——比他先釣到3種不同的魚。比賽沒有時間限制，所以很容易贏。社群報告:有些攻略提到比賽涉及250金的賭注，所以開始前身上備點錢可能有用，不過這並不是一個硬性要求。',
    reward: '你的第一根魚竿，外加一筆獎金',
    troubleshooting: [
      { q: '我還沒有魚竿——去哪裡能拿到?', a: '確認(與whisperofthehouse.com的解鎖條件指南交叉核實):魚竿在任何商店都買不到——它是Noel釣魚比賽的任務獎勵。如果你還沒在河邊遇見Noel，那才是真正的卡點，而不是缺了某個購買項。' },
      { q: '找不到Noel開始比賽怎麼辦?', a: '社群報告:Noel在遊戲早期通常出現在河邊。如果已經過了好幾個遊戲內的夜晚都沒見到他的蹤影，先檢查一下你是否完成了最早的引導任務(在鎮公所登記、結識鎮上居民)，因為部分早期NPC要等這些任務完成後才會出現。' },
    ],
  },
  'fix-the-roof': {
    title: '修屋頂(房屋升級被鎖)',
    summary: '確認:Ridge給出的一個任務，解鎖房屋升級(之後在Howling Hammer購買)。同時也會解鎖Refiner的建造圖紙。',
    reward: '獲得房屋升級許可權、Refiner建造圖紙',
    troubleshooting: [
      { q: 'Howling Hammer不賣我房屋升級——為什麼?', a: '確認:房屋升級要先完成Ridge的"修屋頂"任務才能解鎖。如果Howling Hammer裡沒有顯示升級選項，說明缺的是這個任務，而不是商店出了bug。' },
      { q: '我沒有Refiner，做不了飼料或木板——是什麼卡住了?', a: '確認:Refiner的建造圖紙是與這條修屋頂任務鏈繫結的獎勵，不是單獨購買的東西。請先完成"修屋頂"。' },
    ],
  },
  'the-magic-of-crops': {
    title: '作物的魔法(Aquaflux/壞掉的法杖)',
    summary: '確認:Luna透過書信觸發的一個任務，解鎖Aquaflux法術(魔法自動澆水)——這是通向"魔力探尋之旅"，並最終通向法杖修復與施法系統的前置任務。',
    reward: '解鎖Aquaflux法術',
    troubleshooting: [
      { q: '我的法杖還是壞的——怎麼修?', a: '社群報告(whisperofthehouse.com):法杖修復不是靠商店購買的——它來自這條劇情任務鏈(Luna→Sabrina→Fiona→魔力提取器→Aquaflux)。如果你還沒從Luna那裡觸發"作物的魔法"，那才是真正的起點。' },
      { q: '我沒有Aquaflux，只能手動澆水卡住了——觸發條件是什麼?', a: '確認:這個任務由Luna的來信觸發。如果還沒開始，先確認你是否已經推進了更早的劇情節點(直到"遙遠的橋")，因為後續的來信通常要等前置任務完成才會觸發。' },
    ],
  },
  'the-net-and-death': {
    title: '解鎖捕蟲網(Death與Soul Blobs)',
    summary: '確認(與whisperofthehouse.com交叉核實):捕蟲網要透過Death獲得，前提是完成Orlock的釀酒計劃、遙遠的橋，並解鎖Misty Shores——不是商店道具。在小鎮上第二次遇見Death後，他會介紹100個Soul Blobs，並讓你用網把它們都收集起來。',
    reward: '捕蟲網(用於捕捉蟲子/Soul Blobs);集齊全部100個Soul Blobs後獲得古董鍾(將夜晚時長從15分鐘延長到25分鐘)',
    troubleshooting: [
      { q: '我抓不到蟲子或Soul Blobs——網在哪裡?', a: '確認:網在任何地方都買不到——它要透過Death解鎖，前提是完成更早的劇情進度(Orlock的釀酒計劃、遙遠的橋，以及解鎖Misty Shores)。如果你還沒見過Death兩次，那就是卡點所在。' },
      { q: '在月光峰哪裡能找到Death?', a: '確認:在小鎮上，位於Ambrosia墓地區域，該區域在"遙遠的橋"解鎖Misty Shores之後開放。' },
      { q: '為什麼我用網總是抓不到蟲子和Soul Blobs?', a: '確認:每次揮網都會消耗體力，無論有沒有抓到都一樣，所以揮空也會耗體力。社群報告:蟲子和Soul Blobs在你跑步靠近時往往會逃跑，所以慢慢走近再揮網，命中率更高，也比衝刺過去更省體力。' },
    ],
  },
  'vampster-collection-quest': {
    title: 'Vampster大集合',
    summary: '確認:在Cave of Echoes裡能找到的Alina會解釋，散落在鎮上各處的100只Vampster都迷路了，需要你把它們一隻一隻運回Misty Shores的一個洞穴。其中有一隻叫Larry，確認住在Alina自己家裡，它會選擇留下而不是被收集。',
    troubleshooting: [
      { q: '我總是弄丟正在運送的Vampster——為什麼?', a: '社群報告:跟任何居民對話，或觸發任何過場動畫，都會讓你手上正在運送的Vampster掉落。它會留在被放下的地方，所以出發前最好先清空對話密集的區域。' },
      { q: '我開始不了這個任務——Alina在哪裡?', a: '確認:在Cave of Echoes裡，而這個地方只有在"遙遠的橋"解鎖Misty Shores之後才會開放。如果你還沒到達Cave of Echoes，那就是前置條件所在。' },
    ],
  },
  'albertus-job-board': {
    title: 'Albertus的工作沒有顯示',
    summary: '確認:這是一個持續存在、可重複完成的支線系統，而不是一次性任務——在鎮公所Albertus的佈告欄上會發布一些短小的委託，每個都會獎勵金幣，有時還有道具，以及與釋出者的好感度。',
    troubleshooting: [
      { q: '鎮公所的工作佈告欄看起來是空的——是bug嗎?', a: '社群報告:佈告欄要先透過"在鎮公所登記"到達鎮公所才會開放。如果你已經完成登記但仍然什麼都看不到，工作內容可能只是按週期重新整理，不會一直有東西可接——睡一覺之後再來看看。' },
    ],
  },
  'npc-stuck-cant-interact': {
    title: 'NPC卡住了/僵住不說話',
    summary: '經遊戲官方"已知問題"追蹤和Steam社群bug報告確認:部分玩家發現某個特定NPC(尤其是Orlock)卡在原地，無法互動。這是一個已知但尚未解決的bug，而不是任務限制導致的問題。',
    troubleshooting: [
      { q: 'NPC對我的對話沒有反應——是bug還是我漏了什麼?', a: '經官方"已知問題"追蹤確認:這個問題已被報告，尤其常見於Orlock卡在原地的情況。重新載入該區域、睡一覺到第二天，目前對受影響的玩家都沒有效果，也還沒有確認的解決辦法。這是一個真實的bug，不是你漏掉了什麼任務要求。' },
      { q: '在等待修復期間有臨時解決辦法嗎?', a: '在官方Steam bug帖子裡有玩家報告:重新載入區域和睡到第二天都無效之後，反覆從NPC的東南方向進行互動，最終成功觸發了對話。這不是保證有效的辦法，但目前是唯一被報告確實有效的臨時解決方案。' },
      { q: '如果我遇到這種情況該怎麼辦?', a: '確認:發郵件到support@xseedgames.com，註明你的平臺並描述具體情況，因為目前還沒有玩家端能保證生效的解決辦法。' },
    ],
  },
  'form-wheel-softlock': {
    title: '卡在變身輪盤上/無法移動',
    summary: '經Steam上官方開發者的bug追蹤帖確認:部分鍵鼠玩家會卡在開啟的變身輪盤介面上(尤其是在離開Ambrosia莊園時)，無法關閉輪盤或恢復操作。',
    troubleshooting: [
      { q: '我卡在開啟的變身輪盤上無法移動——怎麼辦?', a: '經XSEED Games官方開發者帖子確認:這個問題影響了鍵鼠玩家，通常發生在離開Ambrosia莊園時。有一個被報告的原因是沒有給"變身輪盤"這個操作繫結任何按鍵——檢查一下設定裡的按鍵繫結，看是否有"開啟變身輪盤"這一項(部分配置下預設是R鍵)，如果是空的就繫結一個。' },
      { q: '我被鎖在這個狀態裡，進不了設定選單——現在怎麼辦?', a: '經同一開發者帖子確認:受影響的玩家不得不強制關閉遊戲(PC上按Alt+F4)作為最後手段。由於遊戲只在睡覺時存檔，你可能會丟失自上次存檔以來的進度——透過官方bug帖或support@xseedgames.com向XSEED Games反饋問題，以便他們優先修復。' },
    ],
  },
  'elviras-treasure-hunt': {
    title: 'Elvira的尋寶之旅(失落的寶物獵人)',
    summary: '確認:Elvira會讓你在鎮上完成一場5個線索的尋寶任務——據報告的路線是:Samael的酒吧→墓地→礦場的一口鐘→Cave of Echoes→Khazan神殿。完成後與"失落的寶物獵人"成就繫結。',
    reward: '"失落的寶物獵人"成就',
    troubleshooting: [
      { q: '我卡在Elvira尋寶任務的某個線索上——路線是什麼?', a: '社群報告:確認的地點順序是Samael的酒吧(The Broken Lamp)、然後是墓地、然後是礦場的一口鐘、然後是Cave of Echoes，最後是Khazan神殿。如果你卡在某個線索上，先確認自己是否已經徹底探索過上一個地點——據報告線索是繫結在每個區域內的特定地點，而不是隻要進入大致範圍就行。' },
      { q: '這個任務從哪裡開始?', a: '確認:由Elvira給出。如果你還沒見過她，或者她沒有任務可接，她的線索鏈可能被更早的劇情進度鎖著，因為Khazan神殿那一段需要更晚才會開放的區域。' },
    ],
  },
  'ui-softlock-after-shop': {
    title: '離開商店後介面卡死/無響應',
    summary: '經Steam社群官方bug報告確認:部分玩家在離開商店或某個任務過場動畫後，所有UI元素都失效了，無法開啟任何選單或進入其他地點——通常在連續遊玩約2小時後出現，有時之前會伴隨卡頓。',
    troubleshooting: [
      { q: '我離開了商店或過場動畫，現在什麼都沒反應了——這是已知bug嗎?', a: '經多份Steam社群官方報告確認:是的，這是一個已知的卡死問題，最常見於連續遊玩約2小時之後，有時發生前會出現卡頓。這不是你操作上的問題。' },
      { q: '有解決辦法或臨時方案嗎?', a: '目前還沒有確認有效的玩家端解決辦法。受影響的玩家不得不強制關閉遊戲。由於月光峰只在睡覺時存檔，你可能會丟失自上次存檔以來的進度——把你的平臺資訊反饋給support@xseedgames.com，幫助開發者優先處理補丁。' },
      { q: '我能預防這種情況發生嗎?', a: '尚未確認，但作為預防措施:比其他種田模擬遊戲更頻繁地睡覺存檔，因為沒有手動存檔功能;如果發現開始出現卡頓，考慮每隔一兩個小時短暫休息一下。' },
    ],
  },
  'lost-save-data': {
    title: '存檔資料丟失/進度消失',
    summary: '經Steam社群官方報告確認:玩家在遊戲崩潰或意外關閉(例如停電)後，丟失了好幾個夜晚的進度，因為月光峰只在睡覺時存檔，沒有手動存檔選項。',
    troubleshooting: [
      { q: '我的存檔在崩潰或停電後消失了——能找回來嗎?', a: '經Steam社群官方報告確認:這種情況也發生在其他玩家身上，目前沒有確認的恢復方法——遊戲只在你在棺材裡睡覺時才會寫入存檔，所以如果遊戲意外關閉，上次睡覺之後的一切都會丟失。' },
      { q: '如果我想自己備份存檔，存檔檔案在哪裡?', a: '經XSEED Games官方開發者的帖子確認——Windows:%USERPROFILE%/AppData/LocalLow/Little Chicken Game Company/Moonlight Peaks/。Mac:~/Library/Application Support/Little Chicken Game Company/Moonlight Peaks/。在一次不錯的遊玩之後手動複製這個資料夾是個合理的預防措施，直到(如果)手動/小型存檔功能被加入。' },
      { q: '要怎麼向開發者反饋這個問題?', a: '確認:發郵件到support@xseedgames.com。如果丟失是崩潰導致的，也請檢查一下%LOCALAPPDATA%\\CrashDumps資料夾裡是否有"Moonlight Peaks.exe"的崩潰轉儲檔案並一併提及——開發者在官方bug追蹤帖裡要求提供這些細節。' },
      { q: '有手動存檔選項嗎?', a: '目前沒有——確認發售時缺失此功能。在棺材裡睡覺是唯一的存檔方式，這也是遊戲官方Steam社群bug帖裡被頻繁要求加入的功能。' },
    ],
  },
  'fallen-tree-arborascend': {
    title: '找不到倒下的樹(神秘海灣)',
    summary: '經PC Gamer確認:在"神秘海灣"任務中，你需要清除一棵倒下的樹，好讓你新發現的人魚鄰居們能重新回到鎮上。這棵樹不在大多數玩家猜測的Howling Marshes——它擋在另一個區域的瀑布前。解決辦法是法術而不是工具:在Webb of Wonders向Sabrina購買Arborascend法術，然後對倒下的樹施法(消耗3點魔力)，觸發一段清除樹木的過場動畫。',
    reward: '為Hosu人魚家族重返小鎮掃清道路;通向Samael的戀愛劇情線',
    troubleshooting: [
      { q: '擋住瀑布的那棵倒樹到底在哪裡?', a: '經PC Gamer確認:不在Howling Marshes，儘管那是最容易猜到的地方。它擋在另一個區域的瀑布前，與Hosu人魚家族返鎮的路線有關——如果你已經檢查過Howling Marshes什麼都沒找到，這正好說明你找錯了地方，而不是漏看了那裡的隱藏地點。' },
      { q: '我沒有能清理這棵樹的工具——需要什麼?', a: '確認:根本不是工具——你需要的是Arborascend法術，在Webb of Wonders向Sabrina購買。施放需要消耗3點魔力，所以出發前請確儲存夠了魔力(吃恢復魔力的食物有幫助)，因為你無法手動砍掉或推開這棵樹。' },
      { q: '我買了Arborascend，但在樹那裡什麼都沒發生——為什麼?', a: '社群報告:直接對倒下的樹施放Arborascend會觸發一段清除它的過場動畫。如果什麼都沒發生，先仔細確認一下你是否真的有足夠的魔力(3點)來施法，而不是直接認定法術失效了。' },
    ],
  },
};
