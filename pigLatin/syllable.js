const VOWELS = ["A", "E", "I", "O", "U"];
const CONSONANTS = ["B", "C", "D", "F", "G", "H", "J", "K", "L", "M", "N", "P", "Q", "R", "S", "T", "V", "W", "X", "Y", "Z"];

function pigLatinSyllable(syllable) {
    let pig_latin = "";
    let end_pig_latin = "";
    let vowel_cluster = true;
    for(let i = 0; i < syllable.length; i++) {
        let letter = syllable[i].toUpperCase();
        if(VOWELS.includes(letter) || (!vowel_cluster && letter == "Y")) {
            if(vowel_cluster) {
                end_pig_latin += syllable[i];
                continue;
            }
            pig_latin = syllable.slice(i, syllable.length);
            return pig_latin + end_pig_latin + "ay";
        }
        if(CONSONANTS.includes(letter)) {
            vowel_cluster = false;
            end_pig_latin += syllable[i];
        }
    }
    return syllable + "ay";
}
