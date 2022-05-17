export const toCapitalName= (name: string): string  =>{
    var first = name.charAt(0);
    return first.toUpperCase() + name.slice(1); 
}

export const decimalPoint = (number: number, factor: number): number=>{
    return Math.round(factor * number *10)  / 10;
}