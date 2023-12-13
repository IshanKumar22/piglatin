function pigLatinWord(word) {
    const syllables = syllabify(word);
    if(!syllables) {
        return matchCase(pigLatinSyllable(word), word);
    }
    console.log(syllables);
    return matchCase(syllables.map(pigLatinSyllable).join(""), word);
}
