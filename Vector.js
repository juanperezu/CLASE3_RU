let elementos=['Oxígeno','Helio','Magnesio',
              'Neón','Hidrógeno','Carbono',
              'Azufre','Calcio'];
for(let i=0;i<elementos.length;i++){
console.log("pos(" +i+ ") :  "+elementos[i]);
 // primero 0  , último n-1 donde n es la longitud del arreglo
}    
console.log('------- forEach-----') ;
elementos.forEach(dato=>{
    console.log(dato+ ' '+ dato.length );
})        