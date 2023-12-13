const regex = /[a-zA-Z\']+/g;

function pigLatin(sentence) {
    sentence = sentence.trim();
    const r = new RegExp(regex);
    let lastIndex = 0;
    let matches = [];
    while((match = r.exec(sentence)) != null) {
        match["last"] = r.lastIndex;
        matches.push(match);
    }
    matches = matches.reverse();
    for(let x = 0; x < matches.length; x++) {
        let match = matches[x];
        console.log(match);
        let i = match.index;
        let word = sentence.slice(i, match.last);
        let pig = pigLatinWord(word);
        sentence = replaceFromTo(sentence, i, match.last, pig);
        lastIndex = i;
    }
    return sentence;
}
