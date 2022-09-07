function letters(string, bool = null){
    const start = bool ? 0 : string.length - 1;
    const end = bool ? string.length : -1;
    const step = bool ? 1 : -1;
    
    let set = new Set();
    for (let i = start; i != end; i += step){
        set.add(string[i]);
    }

    let arr = Array.from(set);
    if (!bool) arr = arr.reverse();
    return arr.join('');
}