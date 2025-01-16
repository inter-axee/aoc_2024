const fs = require('fs');
const path = require('path');

const readInFile = () => {
    const input_filename = path.resolve(process.cwd(), path.basename(process.argv[1], '.js').replace(/\D+$/, '') + '.in');
    let input = fs.readFileSync(input_filename, 'utf-8');
    return input.trim();
}
//-------------
function parseInput(input_string) {
    return input_string.split('\n').map(x => {

        return x.trim().split(' ').map(x => +x);
    });
}

const input = parseInput(readInFile());

var firstlist = [];
var secondlist = [];
var acc = 0;
var acc2 = 0;
for (i = 0; i < input.length; i++) {
    var first = firstlist.push(+input[i][0]);
    var second = secondlist.push(+input[i][input[i].length - 1]);
}

//Part 2
for (i = 0; i < firstlist.length; i++) {
    var n = firstlist[i];
    var t = 0;
    for (j = 0; j < secondlist.length; j++) {
        if (secondlist[j] == n)
            t++;
    }
    acc2 += t * n;
}

firstlist.sort();
secondlist.sort();
for (i = 0; i < firstlist.length; i++) {
    acc += Math.abs(firstlist[i] - secondlist[i]);
}

console.log(acc);
console.log(acc2);