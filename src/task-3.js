export default function boundingRect(coordsList) {
    if (coordsList.length === 0){
    return {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
    };}

    let arr_x = coordsList.map(coords => coords.x);
    let arr_y = coordsList.map(coords => coords.y);

    let left = Math.min(...arr_x);
    let right = Math.max(...arr_x);
    let bottom = Math.min(...arr_y);
    let top = Math.max(...arr_y);
    
    return {
        top: top,
        right: right,
        bottom: bottom,
        left: left
    };
}
