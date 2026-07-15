// src/i18n/quests-story-zh-hant.ts
// Traditional Chinese (Taiwan) translations, auto-converted from quests-story-zh.ts via OpenCC for the main story quest chain (title/summary/reward/unlock text only).
// slug/chapter/status/leadsTo are shared from data/quests-story.ts.
export type StoryQuestTrZhHant = { title: string; unlock?: string; summary: string; reward?: string; troubleshooting?: { q: string; a: string }[] };

export const storyChaptersZhHant: { number: number; title: string; dek: string }[] = [
  { number: 1, title: '初到月光峰', dek: '登記成為居民、遇見Orlock和Viktor，以及你的第一株作物。' },
  { number: 2, title: '遙遠的橋', dek: 'Fiona對Orlock那座橋施下的詛咒，以及解除詛咒的儀式。' },
  { number: 3, title: '徽章花園與魔力', dek: '失蹤的家族徽章、你的第一次真正施法，以及Ambrosia家族的危機。' },
  { number: 4, title: '小鎮生活與家庭糾葛', dek: '鎮公所的人際往來、家族間的緊張關係，以及在月光峰安頓下來。' },
  { number: 5, title: '婚禮篇章', dek: '一場小鎮婚禮——請柬、彩排，以及未了的心事。' },
];

export const storyQuestsZhHant: Record<string, StoryQuestTrZhHant> = {
  'register-at-town-hall': {
    title: '在鎮公所登記',
    summary: '多個信源確認:離開家、遇見Orlock(見下文)之後，你會前往小鎮，鎮長Brook會在鎮公所為你辦理新居民登記，並送給你Chester——一個會在夜裡自動出售放入其中物品的活體箱子。',
    reward: '結識Brook，獲得Chester',
  },
  'meet-the-townsfolk': {
    title: '結識鎮上居民',
    unlock: '完成"在鎮公所登記"',
    summary: '確認:一系列早期引導任務，帶你認識鎮上的關鍵居民並熟悉環境，打通你的農場與主鎮區之間的早期路線。',
    reward: '開啟小鎮早期路線',
  },
  'orlocks-wine-scheme': {
    title: 'Orlock的釀酒計劃(血酒)',
    summary: '經Bonus Action確認，並與Into Indie Games交叉驗證:剛抵達時，你會發現宿醉的吸血鬼Orlock睡在你家草坪上——戳他一下而不是往他身上澆水，能獲得更好的對話選項。他會給你Blood Grape種子，讓你幫他釀造紅酒/血酒。釀好後與他對峙、要求他向Fiona道歉，他會讓你去The Broken Lamp幫他還清欠Samael的350金酒錢。',
    reward: '釀造血酒;讓Orlock道歉，替他償還欠Samael的350金債務;通向"遙遠的橋"',
    troubleshooting: [
      { q: '湊不齊350金還給Samael怎麼辦?', a: '社群報告(Output Lag):如果你還沒見過Mina，或者想跳過她的對話鏈，可以自己採集貝殼等物品、釣魚、出售初始住宅裡不需要的傢俱來慢慢攢夠350金。另外，在Orlock提到欠賬之後去Coffee and Coffins找Mina聊天，她會直接送你這筆錢，不用你自己掏腰包。' },
      { q: '到底在哪裡能找到Orlock?', a: '確認:第一次是在你農場家門外的草坪上睡覺。之後，他通常在鎮上的The Broken Lamp酒吧裡喝酒。' },
    ],
  },
  'a-bridge-too-far': {
    title: '遙遠的橋',
    unlock: '完成"Orlock的釀酒計劃"',
    summary: '經專門攻略(Output Lag)確認，並與Into Indie Games和Bonus Action交叉驗證:Moonlit Pines的女巫Fiona，因為Orlock在酒吧裡拿她開的一個粗俗玩笑而大發雷霆，實際上詛咒了通往他那一側小鎮的橋。找Fiona聊天瞭解此事，然後帶Orlock去她家上演一場道歉過場動畫。之後Fiona透露她一個人解不了這個"詛咒"，需要三位女巫——Noel、Sabrina和Luna——她們分散在鎮上各處。招募齊三人後回到橋邊，觸發解除詛咒的儀式。',
    reward: '重新開放Ambrosia莊園;解鎖Misty Shores與Cave of Echoes(銅礦)',
    troubleshooting: [
      { q: '我跟女巫們都聊過了，但她們沒在橋邊跟我碰面——是哪裡出問題了?', a: '社群報告(Output Lag):請確認你確實跟三位女巫——Noel、Sabrina、Luna——都聊過了。檢查一下任務日誌裡是否還有標記為待完成的專案，然後回鎮上找漏掉的那位聊天。' },
      { q: '儀式動畫播放完了，但橋還是過不去——現在該怎麼辦?', a: '社群報告:這種情況不常見，但如果過場動畫播完了橋仍然無法通行，可以嘗試離開該區域再重新進入，之後應該就能通行了。' },
      { q: '我會不會因為對話選項而卡關?', a: '確認:不會。"遙遠的橋"沒有會阻擋進度的對話選項——所有對話路徑都會推進任務進度。' },
      { q: '如果Misty Shores、釣魚或挖礦感覺被鎖住了，是bug嗎?', a: '不是——確認:在這個任務解決之前，Misty Shores會一直完全鎖著。如果你在那片區域的釣魚、挖礦或任何事情上卡住了，幾乎總是這個任務(而不是缺了某個商店道具)才是真正的瓶頸。' },
    ],
  },
  'tension-in-the-crest-garden': {
    title: '徽章花園的緊張氣氛',
    unlock: '完成"遙遠的橋"，然後等到第二天',
    summary: '經Neoseeker任務日誌確認，並與Output Lag交叉驗證:橋打通後的第二天，走進鎮上會觸發一段在徽章花園(鎮公所旁的新區域)的過場動畫，Brook指責Orlock偷了她家丟失的家族徽章，由此展開一段懸疑劇情。',
    reward: '需要完成"遙遠的橋"+等待1天;通向"蛙鳴與徽章"',
  },
  'a-croak-and-a-crest': {
    title: '蛙鳴與徽章',
    unlock: '完成"徽章花園的緊張氣氛"',
    summary: '經Neoseeker任務日誌記錄確認，是徽章花園懸疑劇情的直接後續。',
    reward: '將Logan家徽放入徽章花園，並計入徽章相關成就',
  },
  'the-quest-for-mana': {
    title: '魔力探尋之旅',
    unlock: '完成"用魔法修補"、等待1天、進鎮觸發"鎮長的重擔"，然後再等2天並閱讀Sabrina的信',
    summary: '經Neoseeker任務日誌記錄確認:這是一條通向你第一套真正制魔基礎設施的任務鏈。與whisperofthehouse.com的解鎖條件指南交叉引用，該指南將整條魔法/法杖路線歸納為依次經過Sabrina、Fiona、魔力提取器，以及Luna的Aquaflux法術。',
    troubleshooting: [
      { q: '我的法杖還是壞的，也沒有任何法術——要怎麼解鎖?', a: '社群報告(whisperofthehouse.com):壞掉的法杖和法術是靠劇情進度解鎖的，不是靠商店購買——它們來自這條任務鏈，涉及Sabrina、Fiona、魔力提取器、Luna，以及Aquaflux法術。如果你在劇情上還沒走到這一步，任何商店都不會賣給你修復的辦法。' },
    ],
  },
  'building-a-mana-extractor': {
    title: '建造魔力提取器',
    unlock: '完成"魔力探尋之旅"，然後等待2天',
    summary: '確認:是"魔力探尋之旅"的直接後續。',
    reward: '魔力精華和魔力提取器的建造圖紙',
  },
  'a-missing-moon': {
    title: '消失的月亮',
    summary: '經Neoseeker任務日誌記錄確認，是劇情中段的一個節點，緊接魔力提取器任務鏈，並通向Ambrosia家族危機。',
  },
  'the-ambrosia-crisis': {
    title: 'Ambrosia家族危機',
    unlock: '完成"夜之主宰"、等待2天，並閱讀Ambrosia莊園的來信',
    summary: '經Neoseeker任務日誌記錄確認:吸血鬼Ambrosia家族的家庭危機劇情節點，需要先完成"夜之主宰"並等待邀請信送達。',
  },
  'the-dinner-party': {
    title: '晚宴',
    summary: '經Neoseeker任務日誌確認:一場小鎮社交活動任務。',
    reward: '貓形態(解鎖Hellkitten變身)',
    troubleshooting: [
      { q: '具體什麼時候能拿到Hellkitten/貓形態?', a: '經交叉驗證的任務日誌確認:完成"晚宴"就會獎勵貓形態。它位於"遙遠的橋"之後的幾個劇情節點，緊接魔力提取器任務鏈——如果你還沒走到這裡，無論買了什麼、造了什麼，變身功能都還不會解鎖。' },
    ],
  },
  'mend-it-with-magic': {
    title: '用魔法修補/魔法初體驗',
    unlock: '完成"用魔法修補"，等待2天，並閱讀Fiona的來信',
    summary: '經Neoseeker任務日誌記錄確認，是一對以魔法為核心的後續任務。',
  },
  'town-hall-drama': {
    title: '與父母共進晚餐/鎮公所風波',
    summary: '經Neoseeker任務日誌確認:圍繞小鎮和家庭展開的劇情節點。',
  },
  'the-plastic-chairs': {
    title: '塑膠椅子',
    summary: '經Neoseeker任務日誌記錄確認。',
    reward: '4杯薑茶',
  },
  'a-family-reunion': {
    title: '家庭團聚',
    summary: '經Neoseeker任務日誌確認，是以家庭為主題的劇情節點。',
  },
  'the-mermaids-wish': {
    title: '美人魚的願望',
    summary: '經Neoseeker任務日誌確認:完成此任務並配合"魔法初體驗"，是解鎖"彩排晚宴"的前置條件。',
    reward: '水形態(解鎖美人魚變身)',
  },
  'the-rehearsal-dinner': {
    title: '彩排晚宴',
    unlock: '完成"美人魚的願望"和"魔法初體驗"，等待1天，並閱讀晚宴請柬',
    summary: '經Neoseeker任務日誌記錄確認——這是遊戲婚禮篇章劇情節點的開端。',
  },
  'kims-invite': {
    title: 'Kim的邀請',
    summary: '經Neoseeker任務日誌確認，是婚禮篇章的一部分。',
  },
  'brides-attendant-duty': {
    title: '伴娘的職責',
    summary: '經Neoseeker任務日誌確認，是婚禮篇章的一部分。',
  },
  'unfinished-business': {
    title: '未了心事',
    summary: '經Neoseeker任務日誌確認，是目前婚禮篇章已記錄的最終節點。後續劇情內容可能會延伸下去——一旦確認我們會及時更新。',
  },
};
