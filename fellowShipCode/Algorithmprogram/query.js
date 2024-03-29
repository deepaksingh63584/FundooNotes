function permute(permutation) {
    var length = permutation.length;
    var result = [permutation.slice()];
    var c = new Array(length).fill(0);
    var i = 1, k, p;

    while (i < length) {
        if (c[i] < i) {
            k = i % 2 && c[i];
            p = permutation[i];
            permutation[i] = permutation[k];
            permutation[k] = p;
            ++c[i];
            i = 1;
            result.push(permutation.slice());
        } else {
            c[i] = 0;
            ++i;
        }
    }
    return result;
}

console.log(permute([1, 2, 3]));