export default function getPolynomial(...coefficients) {
    let a = coefficients;
    if (a.length > 1){
        if (a.every(elem => elem === 0)){
            return "0"
            }
     let c = a.map(function (currentItem, index) {
        let b = a.length - 1 - index
        if (b === 0){return `${currentItem}`}
        if (currentItem === 1 && b === 1){ return "x"} 
        if (b === 1){return `${currentItem}*x`}
        if (currentItem === 1) {return `x^${b}`}
        return currentItem + `*x^${b}`;
    }); 
        let h = c.filter(str => !str[0].includes('0')).join("+")
        return h.split("+-").join("-");
  }
    else {
      if (a.length === 0){ return "0"}
      else {return a.join()}
    }
}
//console.log(getPolynomial(1, -3, 0, -4, 6, 1, 0))