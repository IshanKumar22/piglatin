function getCase(ch) {
    if(!ch) return "";
    return ch == ch.toUpperCase()
        ? "Upper"
        : "Lower";
}

function convertCase(s, wordCase) {
    if(!s || !wordCase) return "";
    return s["to" + wordCase + "Case"]();
}

function matchCase(s, target) {
    return convertCase(s[0], getCase(target[0]))
        + convertCase(s.substr(1), getCase(target[1]));
}
