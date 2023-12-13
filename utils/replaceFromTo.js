function replaceFromTo(target, start_index, end_index, replacement) {
    return target.substring(0, start_index) + replacement + target.substring(end_index);
}
