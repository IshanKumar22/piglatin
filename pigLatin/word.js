function pigLatinWord(word) {
    const syllables = syllabify(word);
    console.log(syllables);
    return matchCase(syllables.map(pigLatinSyllable).join(""), word);
}
