function suma(...valores){
let suma=0;
let con=0;
for(x=0;x<valores.length;x++){
suma+=valores[x];
con++;
//suma=suma+valores[x];

}
return "suma : "+ suma + " de "+ con + " datos";
}
console.log(suma(1,3,6,8,-3));
console.log(suma(1,3));
console.log(suma());
