export default function sum(...values) {
    return values.reduce(function(sum, current){
        return sum + current;
    }, 0)
}
//console.log(sum(3, 2, -9, 7))