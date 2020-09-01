

const os =require('os');
console.log();
console.log(os.platform());
console.log();
console.log(os.userInfo());
console.log();
console.log(os.release());
console.log();
console.log(os.freemem());
let men=os.freemem();
let menfinal=0;
let arreglo =['Oxígeno','Helio','Magnesio',
'Neón','Hidrógeno','Carbono',
'Azufre','Calcio'];
 menfinal=os.freemem();
console.log(men);
console.log(menfinal);


