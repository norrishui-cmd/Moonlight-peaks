// src/i18n/families-de.ts
export type FamilyTrDe = {
  title: string; dek: string; body?: string[];
  faq?: { q: string; a: string }[];
  related?: { label: string; href: string }[];
};

export const familiesDe: Record<string, FamilyTrDe> = {
  vampires: {
    title: 'Vampire', dek: 'Zwei Vampirlinien — deine eigene Familie Dracula und die Familie Ambrosia in der Stadt.',
    body: [
      'Du spielst einen jungen Vampir, das Kind von Vlad Dracula, daher ist die Familie Dracula diejenige, in die du hineingeboren wurdest. Bestätigt zum Release: Es gibt auch eine zweite, separate Vampirfamilie in der Stadt — die Ambrosias, angeführt von Orlock, dessen Familie seine Kinder Mina und Evan sowie seine Nichte/seinen Neffen Samael und Elvira umfasst.',
      'Deine Mutter, Laveau, war eine Hexe, die den Webb-Zirkel anführte, bevor sie in die Familie Dracula einheiratete — daher hat dein Charakter ein gemischtes Vampir-/Hexen-Erbe.',
    ],
    faq: [{ q: 'Bist du ein Vampir in Moonlight Peaks?', a: 'Ja — du spielst einen jungen Vampir, das Kind von Vlad Dracula. Es gibt auch eine zweite Vampirfamilie in der Stadt, die Ambrosias, angeführt von Orlock.' }],
  },
  werewolves: {
    title: 'Werwölfe', dek: 'Wilder bei Vollmond — die Familie Logan, angeführt von Bürgermeisterin Brook.',
    body: [
      'Werwölfe sind eine der sieben Familien, und die benannte Werwolf-Familie sind die Logans. Bestätigt zum Release: Das Familienoberhaupt ist Brook, die Bürgermeisterin der Stadt — frühere Berichterstattung vor dem Release, die ihn "den Werwolf-Bürgermeister Logan" nannte, bezog sich auf sie und nutzte dabei den Familiennamen statt ihres eigenen.',
      'Brooks jüngerer Bruder Ridge ist der Zimmermann der Stadt; ihre Kinder Saga (eine bestätigte Romanze-Option, deren Energie sich mit dem Vollmond ändert) und Ludo sind beide romançable.',
    ],
  },
  witches: {
    title: 'Hexen', dek: 'Hüterinnen von Zauberstab und Trank in der magischen Stadt — die Familie Webb.',
    body: [
      'Hexen sind eine der sieben Familien, verbunden mit der zauberstabbasierten Magie und dem Trankbrauen des Spiels. Die benannte Hexenfamilie sind die Webbs, zuvor angeführt von Laveau (die Mutter der Spielfigur), bevor sie ging, um in die Familie Dracula einzuheiraten.',
      'Fiona führt jetzt die Familie Webb und den örtlichen Hexenzirkel als Stadtblumenhändlerin, mit hohen Erwartungen an ihren Bruder Noel (den Stadtschmied), ihre Cousine Sabrina (die den Laden Webb of Wonders betreibt) und Luna (die Meereshexe der Stadt).',
    ],
  },
  mermaids: {
    title: 'Meerjungfrauen', dek: 'Vom See und den Gezeiten — die Familie Hosu.',
    body: [
      'Meerjungfrauen sind als eine der sieben Familien bestätigt, verbunden mit den Wasserbereichen der Stadt. Die benannte Meerjungfrauenfamilie sind die Hosus — drei Geschwister, die zusammen in Luna Bay leben und etwa ein Jahr nach Beginn der Geschichte ankommen, wobei sie Hilfe brauchen, um sich wieder in die Stadt einzugliedern.',
      'Bestätigte Mitglieder: Kim (sonnig und endlos neugierig, mit einem Wiedervereinigungsbogen einer verlorenen Liebe), Rei (eine ruhige, schüchterne Umweltschützerin) und Tae (ein selbstbewusster, ermutigender Meermann).',
    ],
  },
  seers: {
    title: 'Seher', dek: 'Wahrsager der Familie Khazan.',
    body: [
      'Die Khazans sind eine Familie von drei Geschwistern mit wahrsagerischen Kräften unterschiedlicher Zuverlässigkeit — eine der sieben bestätigten Familien.',
      'Dragan kämpft mit seinen eigenen Kräften, hat aber im Universum das Kartenspiel Nokturna erfunden. Alina ist die sture, feurige Rebellin der Familie, und Aras betreibt den Schneiderladen "Third Eye Threads", während er seine eigenen Kräfte vermeidet.',
    ],
  },
  henderson: {
    title: 'Die Hendersons', dek: 'Die menschliche Familie der Stadt — die siebte, und die zuletzt angekommene.',
    body: [
      'Bestätigt als siebte Familie: die Hendersons, der einzige gewöhnliche menschliche Haushalt der Stadt, der etwa in der Mitte deines ersten Jahres nach Moonlight Peaks zieht.',
      'Persephone, eine freigeistige Tante, führt die Familie an und kümmert sich um ihre Nichte Jada (begeistert, unter Werwölfen und Vampiren zu leben) und ihren Neffen Winston (der in ständiger Angst lebt). Alle drei sind Romanze-Optionen.',
    ],
  },
};
