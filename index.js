function theBeatlesPlay(mus, inst) {
  array = [];
  for(i = 0; i < mus.length; i++) {
    array.push(mus[i] + 'plays' + inst[i]);
    return array;
  }
}

function johnLennonFacts(facts) {
  facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];

newFacts = [];
while (i < facts.length) {
  newFacts.push(facts[i] + '!!!');
  i++;
}
return facts;
}













