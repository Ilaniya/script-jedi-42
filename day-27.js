// https://www.codewars.com/kata/56b71b1dbd06e6d88100092a/train/javascript
function buildFun(n) {
    const res = []
    for (let i = 0; i < n; i++) {
        res.push(function () {
            const number = i;
            return number;
        })
    }
    return res
}

// https://www.codewars.com/kata/shifty-closures/train/javascript
