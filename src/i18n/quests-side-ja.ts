// src/i18n/quests-side-ja.ts
// Japanese translations for side quests (title/summary/reward text only).
// slug/npc/status/related are shared from data/quests-side.ts.
export type SideQuestTrJa = { title: string; summary: string; reward?: string };

export const sideQuestsJa: Record<string, SideQuestTrJa> = {
  'noels-fishing-contest': {
    title: 'Noelの釣り大会',
    summary: '確認済み:ゲーム開始から最初の数夜以内に、Noelが川辺で釣り大会を挑んできます——彼より先に3種類の異なる魚を釣り上げましょう。時間制限はないので簡単に勝てます。',
    reward: '最初の釣り竿と、コインボーナス',
  },
  'fix-the-roof': {
    title: '屋根の修理',
    summary: '確認済み:Ridgeから受けるクエストで、住宅アップグレードが解放され、その後Howling Hammerで購入できるようになります。',
    reward: '住宅アップグレードの解放',
  },
  'the-magic-of-crops': {
    title: '作物の魔法',
    summary: '確認済み:Lunaからの手紙で始まるクエストで、Aquaflux(魔法による自動水やり)の呪文が解放されます。「マナを求めて」に至るクエストチェーンの前提条件の一つです。',
    reward: 'Aquaflux呪文の解放',
  },
  'the-need-for-herbs': {
    title: 'ハーブの必要性',
    summary: '報告済み:「作物の魔法」の後に続くクエストとされ、ハーブガーデンの設計図につながります。',
    reward: 'ハーブガーデンの設計図',
  },
  'the-familys-heirloom-artifact': {
    title: 'Draganの秘宝(ノクターナ対戦)',
    summary: '報告済み:Draganとのノクターナ対戦に勝利すると、彼から神器を入手できるとされ、博物館の設立と関連しています。',
  },
  'vampster-collection-quest': {
    title: 'Vampster集め',
    summary: '確認済み:Cave of Echoesの中にいるAlinaが、町中に散らばる53匹のVampsterが迷子になっていることを説明し、一匹ずつMisty Shoresにある洞窟へ連れて帰るよう頼んできます。',
  },
  'soul-blobs-favor': {
    title: 'Deathの頼み事(Soul Blobs)',
    summary: '確認済み:町でDeathと2回目に会った後、彼が100個のSoul Blobsについて説明し、虫網で集めるよう頼んできます。',
    reward: '100個すべて集めるとAntique Clockがもらえる(夜の長さが15分から25分に延長)',
  },
  'albertus-job-board': {
    title: 'Albertusの仕事掲示板(常駐)',
    summary: '確認済み:一度きりのクエストではなく、常駐の繰り返し可能なサイドシステムです——タウンホールにあるAlbertusの掲示板に貼られた短い依頼をこなすと、コイン、時にはアイテム、そして依頼者との好感度が得られます。',
  },
};
