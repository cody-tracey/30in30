const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

/*
We're given an HTML page with an unordered list, and an array of string values in the script tag. Sort the values in the array excluding the prefixes 'The', A', or 'An' and place the values into the unordered list as list items.
*/

let liItems = [...bands].sort((a, b) => {
    let aArr = a.split(' '),
        bArr = b.split(' ');
    let reg = /The|^An$|^A$/
    aArr[0] = aArr[0].replace(reg, "");
    bArr[0] = bArr[0].replace(reg, "");

    let aStr = aArr.join(' ').trim(),
        bStr = bArr.join(' ').trim();

        if(aStr > bStr) return 1
        else if (aStr < bStr) return -1
        else return 0;
}).map(i => `<li>${i}</li>`).join('');

document.getElementById('bands').innerHTML = liItems;

