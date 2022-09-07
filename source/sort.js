// Кашапов Альберт (8 вариант)

'use strict';

const sort = (string) => {
    let collator = new Intl.Collator()
    let words = string.toLowerCase().split(' ');
    words.forEach((word, index) => {
            word = word.split('').sort(collator.compare).join('');
            words[index] = word.replace(/^./, word[0].toUpperCase());
        }
    )
    return words.sort(collator.compare).join(' ')
}
