export default function createCounter(n) {
    let count = -n;
    return function() {
        count += n
        return count;
    };
}
