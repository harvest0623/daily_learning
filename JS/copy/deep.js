const obj = {
    name: 'henry',
    age: 18,
    like: {
        n: '🏸',
        m: '🎤'
    }
}
function deepClone(obj) {
    let o = {};
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            if(typeof(obj[key]) == 'object' && obj[key] != null){
                const childObj = deepClone(obj[key]);
                o[key] = childObj;
            } else{
                o[key] = obj[key];
            }
        }
    }
    return o;
}