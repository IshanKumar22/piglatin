function getCase(ch) {
    return ch == ch.toUpperCase()
        ? "Upper"
        : "Lower";
}

function convertCase(s, wordCase) {
    return s["to" + wordCase + "Case"]();
}

function matchCase(s, target) {
    return convertCase(s[0], getCase(target[0]))
        + convertCase(s.substr(1), getCase(target[1]));
}
