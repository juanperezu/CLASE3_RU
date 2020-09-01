class Usuario{
constructor(id, nombre,perfil,clave){
this.id=id;
this.nombre=nombre;
this.perfil=perfil;
this.clave=clave;
}// fin del constructor
crear(){
console.log(`usuario, ${this.id} con perfil ${this.perfil} creado`);
}
editar(){
    console.log(`usuario, ${this.id} con perfil ${this.perfil} editado`);
}
buscar(ide){
    console.log(`usuario, ${ide} con perfil ${this.perfil} encontrado`);
}

}//fin de clase
// Crear los objetos
const admin= new Usuario("01","Carlos","Administrador","123");
const per= new Usuario("02","Juana","Persona","123");
const coor= new Usuario("03","Sacarias","Coordinado","123");
console.log(admin.crear());
console.log(per.crear());
console.log(coor.crear());


//export default Usuario;