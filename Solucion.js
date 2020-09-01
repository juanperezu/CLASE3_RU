// 2X + 3(AB-3)-Z  +(A/B) con A Y B <> 0
 function evaluar(x,a,b,z){
 let resp=0.0;
  if(a==0 || b==0){ // &&
     console.log("Tanto A cómo B <> 0");
 }else{
 resp=2*x + 3*(a*b-z)+(a/b);
 console.log(resp);
 }// fin si no
    
 }// fin function
//export default Solucion;
console.log(evaluar(1,2,6,7));
console.log(evaluar(0,2,6,0));
console.log(evaluar(1,0,6,7));
console.log(evaluar(1,2,0,7));
