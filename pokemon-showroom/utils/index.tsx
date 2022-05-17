export const toCapitalName= (name: string): string  =>{
    var first = name.charAt(0);
    return first.toUpperCase() + name.slice(1); 
}