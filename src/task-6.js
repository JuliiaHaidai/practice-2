export default function findPath(obj) {
    for(let key in obj) {
            if(obj[key]===15) {return key;}
            else if(typeof obj[key] === "object") {
                let path = findPath(obj[key]);
                if(path) {return key + "." + path};
            }
    }
    return null;
}