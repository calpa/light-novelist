var sentence = require('./sentence.json');

var prefix = sentence.prefix,
    suffix = sentence.suffix,
    my = sentence.replacement.my,
    catchphrase = sentence.catchphrase,
    actions = sentence.actions,
    venue = sentence.venue;

var man = '人';
var total = 10;

function random(array) {
  var len = array.length;
  return array[Math.floor(Math.random() * len)];
}

function log(output) {
  if (Math.random() > 0.5) {
    console.log(output);
  }
}

function output(total) {
  for (var i = 0; i < total; i++) {
    var pre = `${random(prefix)}，`

    var setting = `${random(sentence.who)}${random(actions.observe)}${random(venue)}，${random(sentence.unexpected)}${random(sentence.actions.human)}。`

    var a = `${random(catchphrase.if)}，我${random(catchphrase.preRequest)}${random(actions.protect)}${random(venue)}。`;

    var b = `"${random(catchphrase.so)}${random(catchphrase.sorry)}，${random(sentence.nickname)}，我還不可以${random(sentence.replacement.withYou)}${random(actions.wants)}。"`

    if (Math.random() > 0.5) {
      a = `${pre}${a}`;
    }

    console.log(`${i})\n${setting}\n`);

    console.log(`"${a}"\n`);

    if (Math.random() > 0.5) {
      log(`${b}（${random(actions.human)}\n`);
    }
    console.log(random(sentence.suffix.end));
    console.log("﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣");

  }
}

output(total);
