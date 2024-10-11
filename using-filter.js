function hasExactLength(word, length) {
  return word.length < length;
}

function filterShortStateName(words) {
  return words.filter((word) => hasExactLength(word, 7));
}

function filterStartVowel(arr) {
  return arr.filter((num) => /^[aeuio]/i.test(num));
}

function filter5Vowels(arr) {
  return arr.filter((word) => {
    const vowels = word.match(/[AEIOUaeiou]/g) || [];
    return vowels.length >= 5;
  });
}

function filter1DistinctVowel(arr) {
  return arr.filter((words) => {
    const vow = words.match(/[aoiue]/gi) || [];
    const matches = [...new Set(vow.map((aa) => aa.toLowerCase()))];
    return matches.length === 1;
  });
}

function multiFilter(objects) {
  return objects.filter(
    (obj) =>
      obj.region !== "South" && obj.capital.length >= 8 &&  !/^[aoiue]/i.test(obj.name)&& /[aeuio]/i.test(obj.tag)
  );
}
