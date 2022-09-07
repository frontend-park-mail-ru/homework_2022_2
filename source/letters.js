function letters(string, bool = null){
    if (bool === null){
        let set = new Set();
        let extraSet = new Set();

        for (char of string){
            if (set.has(char)) extraSet.add(char);
            else set.add(char);
        }
        for (item of extraSet){
            set.delete(item);
        }

        return Array.from(set).join('');
    }

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