export const  guidGenerator = () => {
    var S4 = function() {
       return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
    };
    return (S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4());
}

export const calculateError = (error: any): boolean => {
    return error && Object.values(error).filter(r => r !== null && r !== "").length > 0
}