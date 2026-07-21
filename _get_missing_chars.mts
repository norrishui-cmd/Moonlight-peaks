import { characters } from './src/data/characters.ts';
const missingJa = ['evan','logan','pumpkin-head','kai','celine','ridge','jada','jarvis','dragan','albertus','alina','death','samael','elvira','kim','ludo','tae','winston','rei','aras','persephone','llemi','viktor-dracula','judge','skull-girl','balthasar','chester','laveau','yabbis','grim','mr-deyes','hoodini','larry','rachel','snek','jacques','moon-goddess','sun-god','yasmin'];
for (const id of missingJa) {
  const c = characters.find(x => x.id === id);
  console.log(JSON.stringify(c));
}
