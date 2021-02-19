export const  guidGenerator = () => {
    var S4 = function() {
       return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
    };
    return (S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4());
}

export const calculateError = (error: any): boolean => {
    if (!error) return false
    const errors = (Object.values(error).filter(r => {
        if (typeof r === "object") return calculateError(r)
        return r !== null && r !== ""
    }).length > 0)
    return errors
}