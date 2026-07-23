// src/i18n/locations-zh-hant.ts
export type LocationTrZhHant = {
  title: string; dek: string; body?: string[];
  sections?: { title: string; body: string }[];
  faq?: { q: string; a: string }[];
  related?: { label: string; href: string }[];
};

export const locationsZhHant: Record<string, LocationTrZhHant> = {
  town: {
    title: '小鎮', dek: '七大超自然家族的魔法山間小鎮,你在這裏開始吸血鬼的新生活。',
    body: [
      'Moonlight Peaks 的故事發生在一座魔法山間小鎮,幾個世紀以來一直是七大家族的家園。你以一名年輕吸血鬼的身份到來,離開了大城市。',
      '小鎮把溫馨的村莊生活和超自然元素混合在一起——你的鄰居是狼人、女巫、人魚等等,認識他們是遊戲的重要部分。',
    ],
    faq: [
      { q: 'Moonlight Peaks 的故事發生在哪裏?', a: '發生在一座魔法山間小鎮,是七大超自然家族的家園。' },
      { q: 'Moonlight Peaks 裏的鄰居是誰?', a: '已確認:分屬七大家族的狼人、女巫、人魚和其他超自然居民——認識他們是遊戲的核心內容。' },
    ],
  },
  'town-square': {
    title: '小鎮廣場', dek: '小鎮的社區中心,居民聚集、季節活動舉辦的地方。',
    body: [
      '和大多數溫馨模擬遊戲的小鎮一樣,Moonlight Peaks 也聚焦於居民每天會經過的社區空間。',
      '季節性慶典是小鎮生活的一部分——已展示過一位戲劇化的活動主持人在這裏活躍氣氛。具體佈局和在這裏舉辦的活動會在正式發售時確認。',
    ],
  },
  'your-farm': {
    title: '你的農場', dek: '你搬進並重建爲月光農場的那座廢棄家族農場。',
    body: [
      '你的起點是一座廢棄的家族農場,把它重建爲正常運作的農場是遊戲的核心。',
      '你種植被施了魔法的作物和發光的花朵,飼養像德古拉羊這樣的魔法家畜——這一切都在夜裏維護,因爲日出時你要回到棺材裏。',
      '已確認:你在創建角色時給自己的農場命名(連同你的地獄貓一起)——並沒有唯一固定的"官方"名字,因爲這是你自己選擇的名字。發售前泄露的文件中提到過一個內部工作代號"the Plot",但那只是開發者一側的標籤,不是你在遊戲裏看到或選擇的名字。',
    ],
    faq: [
      { q: 'Moonlight Peaks 裏白天能種地嗎?', a: '不能——你在夜裏種地,日出時回到棺材裏。' },
      { q: 'Moonlight Peaks 裏你的農場叫什麼名字?', a: '沒有唯一固定的名字——已確認:你在創建角色時自己選擇農場的名字,就像給角色和地獄貓命名一樣。' },
    ],
  },
  'your-cottage': {
    title: '你的小屋', dek: '你可以自定義的哥特風住所,可以按自己的喜好裝飾和佈置。',
    body: [
      '你住在一座哥特風小屋裏,可以把它變成自己的家。裝飾——擺放和佈置傢俱與裝飾品——是核心的溫馨活動之一。',
      '具體有哪些房間、傢俱套裝和自定義選項,會在完整版正式發售時確認。',
    ],
  },
  forest: {
    title: '森林', dek: '小鎮周圍的樹林,你在這裏日落之後採集。',
    body: [
      '在森林裏採集是遊戲已確認的活動之一,所以可以期待在小鎮邊緣的樹林間發現應季的東西。',
      '具體能採集到什麼,以及森林裏有沒有地標,會在完整版正式發售時確認。',
    ],
  },
  lake: {
    title: '銀紗湖', dek: '小鎮已確認的湖泊,是釣魚活動和人魚家族的家園。',
    body: [
      '已確認的名字:銀紗湖。這片水域支持釣魚——試玩版展示過的活動之一——小鎮的人魚(Hosu 家族)也與這片水域有關。',
      '具體的魚種名稱和確切釣點還沒有資料來源——目前已確認的內容參見釣魚指南。',
    ],
  },
  pier: {
    title: '碼頭', dek: '一個在水面上釣魚和享受寧靜時光的地方。',
    body: [
      '溫馨模擬遊戲的釣魚區通常包括一座碼頭或棧橋用來拋竿。',
      'Moonlight Peaks 是否給某個具體碼頭命名,會在正式發售時確認——目前先把它當作湖泊釣魚區的一部分。',
    ],
  },
  mines: {
    title: '回聲洞穴 & 礦場', dek: '如何解鎖回聲洞穴、去哪找銅和鐵,以及最常見的進度卡關問題。',
    sections: [
      { title: '如何解鎖回聲洞穴', body: '已確認:回聲洞穴位於 Misty Shores 區域左下方,在 Orlock 莊園的西邊。它一開始是鎖着的,完成"A Bridge Too Far"任務後纔會打開——這個任務會重新開放 Ambrosia 莊園以及周邊的 Misty Shores 區域。' },
      { title: '爲什麼回聲洞穴還是鎖着', body: '如果你還進不去,幾乎總是任務問題——而不是缺了某個關鍵物品或商店購買——纔是真正的原因。社區報告:這個區域被 Orlock 和 Fiona 之間關於一座"被詛咒"的橋的劇情糾紛鎖住了。' },
      { title: '"A Bridge Too Far" 如何與進度綁定', body: '完整的前置條件和步驟請見"A Bridge Too Far"任務完整攻略。簡而言之:先完成"Orlock 的釀酒計劃",然後和鎮上的女巫們談談,再回到橋邊解開糾紛/詛咒,打開這個區域。' },
      { title: '銅礦石在哪找', body: '社區報告:進去之後,銅礦石看起來就像帶銅色斑點的普通岩石,用鎬子採集。較大的礦脈可能一次給 6 份礦石,而不是普通礦脈的 1 份。在爐子用 4 份銅礦石 + 1 份木炭製作銅錠。' },
      { title: '鐵礦石在哪找', body: '已確認是同一個礦場系統裏的後期資源,在劇情推進超過初期的銅階段後解鎖。具體的解鎖觸發條件和洞穴內位置,這裏還沒有獨立驗證。' },
      { title: '新的礦石種類何時解鎖', body: '已確認:礦石的獲取是分階段的,而不是一次性全部開放——銅礦石最先可用,鐵礦石和金礦石會隨着主線劇情推進而在之後開放,而不是一進洞穴就都有。' },
      { title: '礦場裏常見的進度問題', body: '如果你缺銅,先檢查"A Bridge Too Far"的進度,而不是更賣力地在洞穴裏搜索。如果你的鎬子敲不碎某個礦脈,很可能需要先在嚎叫錘子(Ridge 的商店)升級一個等級,才能開採那種礦石。' },
      { title: '礦場裏有戰鬥嗎?', body: '沒有——已確認 Moonlight Peaks 全程(包括礦場)都沒有戰鬥,所以地下探索始終保持平靜。' },
    ],
    faq: [
      { q: '礦場裏有戰鬥嗎?', a: '沒有——預覽資料確認 Moonlight Peaks 全程(包括礦場)都沒有戰鬥。' },
      { q: '爲什麼我在礦場找不到銅礦石?', a: '已確認:銅礦石位於回聲洞穴,而回聲洞穴只有在完成"A Bridge Too Far"任務後纔會打開——在假設自己錯過了某個礦點之前,先檢查一下任務進度。' },
    ],
  },
  graveyard: {
    title: '墓地', dek: 'Misty Shores 裏一個安靜的月光籠罩之處,你在這裏遇見 Death——已確認是 Ambrosia 家族的墓地。',
    body: [
      '發售時已確認:這座墓地位於 Misty Shores 區域,一開始被一座橋擋住,那座橋是 Fiona 在與 Orlock 醉酒爭吵後詛咒的。完成"A Bridge Too Far"任務能解除詛咒,打開通路。',
      '進去之後,你會在這裏第一次遇見 Death——他已確認的住所"Death 的小屋"就在附近。',
      '發售前泄露的遊戲文件把這個地方稱爲"Ambrosia 墓地",並配有一座對應的"Ambrosia 莊園"——很可能是這個吸血鬼家族的祖宅。',
    ],
    faq: [
      { q: 'Moonlight Peaks 裏怎麼解鎖墓地?', a: '已確認:完成"A Bridge Too Far"任務,這會解除 Fiona 因爲和 Orlock 爭吵而對通往 Misty Shores 的橋施加的詛咒。' },
      { q: 'Moonlight Peaks 裏在哪能遇到 Death?', a: '已確認:在 Ambrosia 墓地,前提是"A Bridge Too Far"已經解鎖了 Misty Shores。Death 已確認的住所"Death 的小屋"就在附近。' },
    ],
  },
  shops: {
    title: '小鎮商店', dek: '小鎮上已命名的商店——大多數店主現已確認。',
    body: [
      '已確認的商店和店主:嚎叫錘子是 Ridge 的工具升級商店(只在工作日營業);破燈酒館是 Samael 的酒吧;咖啡與棺材是 Mina 和 Evan 的咖啡館;Third Eye Threads 是 Aras 的裁縫店;Webb of Wonders 是 Sabrina 的商店,出售另我藥水和法術——這個名字也是拿她自己的姓氏 Webb 玩的文字遊戲。',
      '發售前泄露的遊戲文件還提到過 Midnight Market 和 Bloom Boutique——目前還沒有在實際遊戲中確認。',
    ],
    faq: [
      { q: 'Moonlight Peaks 裏有哪些商店?', a: '已確認:嚎叫錘子(工具升級,Ridge)、破燈酒館(酒吧,Samael)、咖啡與棺材(咖啡館,Mina 和 Evan)、Third Eye Threads(服裝,Aras)以及 Webb of Wonders(藥水與服裝,Sabrina)。' },
      { q: 'Moonlight Peaks 裏有 Midnight Market 或 Bloom Boutique 嗎?', a: '目前還沒有確認——這兩個名字出現在發售前泄露的文件中,但還沒有在實際遊戲中得到驗證。' },
    ],
  },
  landmarks: {
    title: '地標與知名地點', dek: '核心區域之外的知名地點——大多數現已確認並附有真實背景信息。',
    sections: [
      { title: 'Misty Shores、月光松林、粉紅樹林 & Luna Bay', body: '已確認:Misty Shores 是 Ambrosia 家族的領地,是回聲洞穴(礦石)和你遇見 Death 的墓地的所在地,通過"A Bridge Too Far"任務解鎖。月光松林是女巫團的所在地。粉紅樹林是愛情惡魔 Llemi 的家,通常只在節日期間出現在那裏。Luna Bay 是人魚家族 Hosu 居住的地方,在劇情開始約一年後到達。' },
      { title: 'Howling Marshes', body: '多個首發周資料來源確認:位於小鎮主城區正北方,月光松林東邊。已確認兩個入口——一個在月光松林 Luna 的種子攤位正東邊,另一個在市政廳正東邊。你會作爲"Tension in the Crest Garden"任務的一部分被派往這裏。這裏已確認的可採集物包括 Sugarbone 和幾種花——值得在烹飪臺或乾燥架加工,而不是直接生賣。Logan 家族的房子也在這裏,首次到訪時有一個進不去的地窖,以及一個同樣還進不去的北部區域——這兩處很可能與後續任務相關。' },
      { title: 'Moonlit Slopes、地窖、Moonlight Tower & Crest Garden', body: '也通過官方 wiki 確認:Moonlit Slopes、地窖、Moonlight Tower 以及 Khazan 家族的 Crest Garden 都是真實存在的地點。各自的完整描述仍有待驗證。' },
    ],
  },
  'town-hall': {
    title: '市政廳', dek: '在鎮長 Brook 的指引下,你在這裏登記成爲新居民。',
    body: [
      '發售時已確認:市政廳是你早期登記成爲新居民、並遇見鎮長 Brook(狼人家族 Logan 之首)的地方,她會在這次拜訪中送給你 Chester——一個活的儲物箱。',
      '小鎮的告示板——由一隻名叫 Albertus 的貓頭鷹管理的"Albertus 打工板"——也設在這裏,上面列出了可用的任務。',
    ],
    faq: [
      { q: 'Moonlight Peaks 裏市政廳由誰管理?', a: '已確認:鎮長 Brook,狼人家族 Logan 之首,在你登記成爲新居民時會送給你 Chester(一個活的儲物箱)。' },
      { q: 'Moonlight Peaks 裏任務告示板在哪?', a: '已確認:Albertus 打工板,由一隻名叫 Albertus 的貓頭鷹管理的告示板,設在市政廳,列出了可用的任務。' },
    ],
  },
  'ambrosia-mansion': {
    title: 'Ambrosia 莊園', dek: '吸血鬼家族 Ambrosia 的祖宅。',
    body: [
      '通過遊戲官方 wiki 確認:Ambrosia 莊園是吸血鬼家族 Ambrosia 的住所,與附近有 Death 存在的 Ambrosia 墓地相關聯。',
    ],
    faq: [
      { q: 'Ambrosia 莊園裏住着誰?', a: '通過遊戲官方 wiki 確認:吸血鬼家族 Ambrosia,這裏是他們的祖宅。' },
      { q: 'Ambrosia 莊園離墓地近嗎?', a: '是的,已確認:Ambrosia 莊園與附近有 Death 存在的 Ambrosia 墓地相關聯。' },
    ],
  },
  'silverveil-museum': {
    title: '博物館', dek: '一座基於捐贈的收藏建築,在 Persephone、Jada 和 Winston 搬到鎮上後,於第一年年中開放。',
    body: [
      '已確認:博物館並非從第一天就存在——它是在涉及 Persephone、Jada 和 Winston 搬到鎮上(碼頭那座廢棄的房子)的劇情線推進後纔開放的。社區報告:對很多玩家來說,這大約發生在第一年秋季初,具體取決於你自己前期任務的推進節奏。',
      '已確認:捐贈的運作方式和與商人對話不同。博物館有多個主題收藏室,通過主廳裏的一道傳送門進入,你通過走到對應收藏室並與旁邊的感嘆號面板互動來完成捐贈——這和遊戲其他地方用來標記待處理劇情內容的圖標樣式相同。',
      '已確認:你身上還欠缺的收藏品會在揹包裏顯示一個小小的博物館圖標,以免你不小心賣掉或用掉還需要的東西。品質要求因收藏而異——農業收藏特別要求更高品質的作物和農產品(而不是隨便什麼都行),所以留下你最好的收成而不是全部賣掉是值得的。',
      '這裏還未獨立確認:確切的收藏室數量、每個房間的完整捐贈清單,以及每個收藏具體解鎖什麼獎勵。',
    ],
    faq: [
      { q: 'Moonlight Peaks 裏博物館什麼時候開放?', a: '已確認:不是第一天就開放——它是在 Persephone、Jada 和 Winston 搬到鎮上之後纔開放的,這條劇情線對很多玩家來說大約發生在第一年秋季初。' },
      { q: '博物館怎麼捐贈?', a: '已確認:前往對應的收藏室(通過主廳裏的傳送門進入),與旁邊的感嘆號面板互動,而不是和商人對話。' },
    ],
  },
  'yoga-shack': {
    title: '瑜伽小屋', dek: '一個已確認的活動地點,對應遊戲"暗黑消遣"之一的瑜伽。',
    body: [
      '通過遊戲官方 wiki 確認存在,與瑜伽相關聯——這是與釣魚、烹飪和 Nokturna 並列的愛好之一。',
    ],
  },
  'khazan-temple': {
    title: 'Khazan 神殿', dek: '與預言家族 Khazan 相關聯的地點。',
    body: [
      '通過遊戲官方 wiki 確認存在。這裏具體發生什麼,目前還沒有更多資料來源。',
    ],
  },
  'crystal-cave': {
    title: '水晶洞穴 & 暮光墓穴', dek: '一個與回聲洞穴不同的富含寶石的洞穴,位於 Fiona 家旁邊。',
    body: [
      '已確認:水晶洞穴是與回聲洞穴不同的獨立地下區域,位於 Fiona 家的左邊。一塊大石頭擋住了入口,直到你把鎬子至少升級到銅級爲止。',
      '已確認:內部有大量的 Rose Quartz 礦脈,還有其他寶石。Rose Quartz 用魔法研鉢(開始學習魔法後解鎖)研磨成粉末,用於多個工藝配方和任務中。',
      '通過遊戲官方 wiki 確認:除了回聲洞穴之外,礦場還包括另一個叫暮光墓穴的區域——這表明地下區域被分成了多個獨立區塊,而不是單一的一個洞穴。另有其他地方確認:蝙蝠人(藏在鎮上和大多數房子裏的小生物)一旦早期劇情任務解鎖墓穴通道,也會通過這裏的一個洞被帶到這裏,完成它們的收集任務鏈。',
      '要到達水晶洞穴本身,需要先解鎖 Misty Shores(通過"A Bridge Too Far"任務),因爲回聲洞穴及其鎬子升級都在那裏。',
    ],
    faq: [
      { q: 'Moonlight Peaks 裏水晶洞穴在哪?', a: '已確認:這是一個與回聲洞穴不同的獨立地下區域,位於 Fiona 家左邊。一塊石頭擋住入口,直到你的鎬子達到銅級爲止。' },
      { q: '水晶洞穴能獲得什麼?', a: '已確認:內部有大量 Rose Quartz 礦脈,還有其他寶石。Rose Quartz 用魔法研鉢研磨成粉末,用於多個工藝配方和任務中。' },
    ],
  },
  'howling-marshes': {
    title: 'Howling Marshes', dek: '就在小鎮正北方、月光松林東邊——兩個已確認的入口,可收穫的 Sugarbone 和花朵,以及 Logan 家族的房子。',
    body: [
      '多個首發周資料來源確認:Howling Marshes 位於小鎮主城區正北方,月光松林東邊。',
      '已確認兩個入口:一個在月光松林 Luna 的種子攤位正東邊,另一個在市政廳正東邊。你會作爲"Tension in the Crest Garden"任務的一部分被派往這裏。',
      '這裏已確認的可採集物包括 Sugarbone 和幾種花——值得在烹飪臺或乾燥架加工,而不是直接生賣。',
      'Logan 家族的房子也在這裏,首次到訪時有一個進不去的地窖,以及一個同樣還進不去的北部區域——這兩處很可能與後續任務相關。',
    ],
    related: [{ label: '所有地標', href: '/locations/landmarks' }, { label: 'Logan 家族', href: '/families' }, { label: '小鎮', href: '/locations/town' }],
    faq: [
      { q: 'Moonlight Peaks 裏 Howling Marshes 在哪?', a: '已確認:就在小鎮主城區正北方,月光松林東邊。有兩個入口——一個在月光松林 Luna 的種子攤位正東邊,另一個在市政廳正東邊。' },
      { q: 'Howling Marshes 怎麼解鎖?', a: '你會作爲"Tension in the Crest Garden"主線任務的一部分被派往這裏——這裏並不是靠單獨的解鎖條件鎖住的。' },
      { q: 'Howling Marshes 能採集到什麼?', a: '已確認的可採集物包括 Sugarbone 和幾種花。值得在烹飪臺或乾燥架加工,而不是直接生賣。' },
    ],
  },
  'twilight-catacombs': {
    title: '暮光墓穴', dek: '一個鎖着的地下隧道網絡,連接地窖、水晶洞穴、Misty Shores 墓地、Luna Bay 和 Howling Marshes,通過向博物館捐贈解鎖。',
    body: [
      '已確認:暮光墓穴是一個鎖着的地下隧道網絡,入口/出口散佈在地圖各處,而不是單一的獨立地下城。地窖(Viktor 所在處)和 Misty Shores 墓地都有門;解鎖前互動只會顯示"另一邊鎖着",不會說明怎麼打開。',
      '已確認:解鎖路徑要通過博物館,而不是探索時找到的獨立關鍵物品。博物館捐贈總進度達到 25% 後,Jada 會給你德古拉封印鑰匙。把這把鑰匙拿給地窖裏的 Viktor 看,會觸發"A Key to the Deep"任務,打開墓穴。',
      '已確認:進去之後,這個隧道網絡通過藍色感應板連接了遊戲裏多個地下和地面區域——一個通向水晶洞穴裏一扇坍塌的門,另一個通向 Misty Shores 墓地的墓穴入口,再一個通向北邊河流附近 Luna Bay 的一扇坍塌門,還有一個通向東邊 Howling Marshes 的墓穴入口。',
      '一份攻略的報告:找到這些連接點之後,在棺材裏睡一覺、第二天查看信箱,會收到 Samael 的一封信。到破燈酒館拜訪他會解鎖一個額外的入口。',
    ],
    related: [{ label: '水晶洞穴', href: '/locations/crystal-cave' }, { label: '礦場', href: '/locations/mines' }, { label: 'Howling Marshes', href: '/locations/howling-marshes' }, { label: '博物館', href: '/locations/silverveil-museum' }, { label: 'Viktor', href: '/characters/viktor-dracula' }, { label: 'Samael', href: '/characters/samael' }],
    faq: [
      { q: 'Moonlight Peaks 裏暮光墓穴怎麼解鎖?', a: '已確認:博物館捐贈進度達到 25% 後從 Jada 那裏獲得德古拉封印鑰匙,然後拿給地窖裏的 Viktor 看,觸發"A Key to the Deep"任務,打開墓穴。' },
      { q: 'Moonlight Peaks 裏暮光墓穴的入口在哪?', a: '已確認的入口在地窖(Viktor 所在處)和 Misty Shores 墓地。一份攻略的報告:進去之後,內部的感應板還會連接到水晶洞穴、Luna Bay 和 Howling Marshes。' },
      { q: '暮光墓穴裏的藍色感應板是做什麼的?', a: '一份攻略的報告:踩上每一塊都會打開一條通往地圖其他地方另一扇坍塌門的捷徑連接——水晶洞穴、Misty Shores 墓地、Luna Bay 和 Howling Marshes——讓墓穴成爲縮短這些區域之間往返路程的樞紐。' },
    ],
  },
  'crest-garden': {
    title: 'Crest Garden', dek: '市政廳旁邊的一座小鎮花園,會隨着你在主線劇情中的推進,逐一展示七大家族的紋章。',
    body: [
      '通過官方 wiki 確認:Crest Garden 位於市政廳旁邊,會隨着劇情推進逐一展示 Moonlight Peaks 七大家族各自的紋章——這是你在遊戲核心家族劇情線中進度的一個視覺追蹤器。',
      '一份攻略的報告:Logan 家族的紋章在劇情中途特別消失了,導致你要繞道完成一個找回任務——Dragan 會指引你去破燈酒館打聽消息,這會引向 Howling Marshes,結果發現是 Yabbis 把紋章喫了,想要用一根銅錠來交換。',
      '一份攻略的報告:最後填滿的兩個紋章屬於兩個吸血鬼家族,Ambrosia 和 Dracula。Orlock 會爲 Ambrosia 紋章索要工藝材料(精煉石、金錠和玻璃),而 Dracula 紋章任務被描述爲主線劇情的情感高潮,在解鎖蝙蝠變身幾天後由一封信觸發。',
    ],
    related: [{ label: '市政廳', href: '/locations/town-hall' }, { label: '家族', href: '/families' }, { label: 'Howling Marshes', href: '/locations/howling-marshes' }, { label: 'Dragan', href: '/characters/dragan' }, { label: 'Yabbis', href: '/characters/yabbis' }, { label: 'Orlock', href: '/characters/orlock' }],
    faq: [
      { q: 'Moonlight Peaks 裏 Crest Garden 在哪?', a: '通過官方 wiki 確認:它位於市政廳旁邊。' },
      { q: 'Moonlight Peaks 裏 Crest Garden 有什麼作用?', a: '已確認:它展示小鎮七大家族的紋章,隨着你在每個家族主線劇情中的推進而逐一解鎖。' },
      { q: '爲什麼 Crest Garden 裏少了一個家族紋章?', a: '一份攻略的報告:至少有一個紋章(Logan 家族的)被寫成了一個小型的找回任務,而不是自動解鎖——在這個例子裏,Yabbis 把它喫了,想用一根銅錠交換回去。' },
      { q: 'Crest Garden 裏哪些紋章最後解鎖?', a: '一份攻略的報告:兩個吸血鬼家族的紋章,Ambrosia 和 Dracula,是最後填滿的,其中 Dracula 紋章任務被描述爲劇情的情感高潮。' },
    ],
  },
  'moonlit-slopes': {
    title: 'Moonlit Slopes', dek: '月亮女神的居所,已確認在你第一次受邀之後會重新鎖上,直到解鎖蝙蝠形態爲止。',
    body: [
      '已確認:Moonlit Slopes 是月亮女神的居所,在完成"A Missing Moon"劇情線之後可以進入——在這條劇情線裏,Khazan 家族的預言家們同時陷入了恍惚,月亮也從天空中消失了。一個簡短的後續任務"The Moon in the Sky"會讓她正式邀請你去拜訪。',
      '已確認:這次首次拜訪之後,Moonlit Slopes 會重新鎖上,一直到你通過"Master of the Night"任務解鎖蝙蝠形態爲止——所以如果你在遇見月亮女神之後無法直接再回去,這是正常現象,不是 bug。',
    ],
    related: [{ label: '變身', href: '/shapeshifting' }, { label: '月亮女神', href: '/characters/moon-goddess' }, { label: '任務', href: '/quests' }],
    faq: [
      { q: 'Moonlight Peaks 裏在哪能遇到月亮女神?', a: '已確認:在 Moonlit Slopes,前提是完成"A Missing Moon"和簡短的後續任務"The Moon in the Sky",她會在那裏正式邀請你。' },
      { q: '爲什麼第一次拜訪後我回不去 Moonlit Slopes 了?', a: '已確認:這個區域在你首次拜訪後會重新鎖上,只有通過"Master of the Night"任務解鎖蝙蝠形態後纔會再次打開——這是正常現象,不是 bug。' },
    ],
  },
  'midnight-market': {
    title: 'Midnight Market', dek: '鎮上一個只在週末開放的市場,出售動物帽子、藥水材料和其他平日買不到的物品。',
    body: [
      '經社區報告確認:Midnight Market 是鎮上的一個週末活動,在週六和週日舉行,與遊戲常規的平日商店是分開的。',
      '據報道:Snek 會在 Midnight Market 出售給你農場動物戴的迷你帽子,Sabrina 也會在那裏出售鍊金術士寶珠和其他藥水相關物品——這些物品目前都沒有確認在兩位角色平日的正常營業時間內出售。',
    ],
    related: [{ label: 'Snek', href: '/characters/snek' }, { label: 'Sabrina', href: '/characters/sabrina' }, { label: '農場動物', href: '/farm/animals' }, { label: '藥水', href: '/items/potions' }],
    faq: [
      { q: 'Moonlight Peaks 裏 Midnight Market 什麼時候開放?', a: '社區報告:只在週六和週日,和遊戲常規的平日營業時間是分開的。' },
      { q: 'Moonlight Peaks 的 Midnight Market 能買到什麼?', a: '據報道:Snek 出售的農場動物迷你帽子,以及 Sabrina 出售的鍊金術士寶珠和其他藥水相關物品——這些物品都沒有確認在平日出售。' },
    ],
  },
  'bloom-boutique': {
    title: 'Bloom Boutique', dek: '根據官方 wiki 導航確認存在於鎮上的一家命名商店,細節尚未確認。',
    body: [
      '通過官方 wiki 自身的頁面導航確認存在,和遊戲其他已命名的商店並列列出。除了名字之外,我們目前還沒有獨立驗證過 Bloom Boutique 賣什麼、由誰經營,或者營業時間——我們不會僅僅因爲名字暗示"花"就去猜測它的主題。',
      '考慮到這個名字,以及遊戲中已有的插花和送禮系統,一個以花卉或裝飾爲主題的商店是合理的猜測,但在有資料來源對照實際遊戲驗證之前,我們把這標記爲預期,而不是已確認。',
    ],
    related: [{ label: '商店', href: '/locations/shops' }, { label: '活動:插花', href: '/activities/flower-arranging' }],
    faq: [
      { q: 'Moonlight Peaks 裏 Bloom Boutique 是什麼?', a: '根據官方 wiki 自身的導航確認存在這樣一家命名商店。它賣什麼、由誰經營,這裏還沒有獨立確認——我們不會僅憑名字就猜測商店內容。' },
    ],
  },
};
