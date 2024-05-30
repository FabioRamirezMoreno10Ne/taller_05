




var Hora = document.getElementById("hora");
var Fecha = document.getElementById("fecha");
var Descripcion = document.getElementById("descripcion");
var Participantes = document.getElementById("participantes");

function guardar(){

    
    var eventos = JSON.parse(localStorage.getItem("evento") || "[]");
    
    var evento = new Eventos(Hora.value, Fecha.value, Descripcion.value, Participantes.value);
    eventos.push(evento);
    localStorage.setItem("evento", JSON.stringify(eventos));

    nuevo();
    listar();
}



function actualizar() {

    var empleados = JSON.parse(localStorage.getItem("empleados") || "[]")
    
    var cedula = document.getElementById("cedula")
    var nombres = document.getElementById("nombres")
    var apellidos = document.getElementById("apellidos")
    var salario = document.getElementById("salario")


    for (let i = 0; i < empleados.length; i++) {
        
        if (empleados[i].cedula == cedula.value) {

            empleados[i].nombres = nombres.value
            empleados[i].apellidos = apellidos.value
            empleados[i].salario = salario.value

            break

        }

    }

    localStorage.setItem("empleados", JSON.stringify(empleados))

}


function eliminar() {

    var empleados = JSON.parse(localStorage.getItem("empleados") || "[]")

    var cedula = document.getElementById("cedula")

    for (let i = 0; i < empleados.length; i++) {
        
        if (empleados[i].cedula == cedula.value) {

            empleados.splice(i,1)

            break

        }

    }

    localStorage.setItem("empleados", JSON.stringify(empleados))

}
function consultar() {

    var empleados = JSON.parse(localStorage.getItem("empleados") || "[]")

    var cedula = document.getElementById("cedula")
    var nombres = document.getElementById("nombres")
    var apellidos = document.getElementById("apellidos")
    var salario = document.getElementById("salario")


    for (let i = 0; i < empleados.length; i++) {
        
        if (empleados[i].cedula == cedula.value) {

            nombres.value = empleados[i].nombres
            apellidos.value = empleados[i].apellidos
            salario.value = empleados[i].salario

            break

        }
        
    }


}
/* function listar() {

    var empleados = JSON.parse(localStorage.getItem("empleados") || "[]")
    console.log(empleados)

} */
function nuevo() {

    Hora.value = "";
    Fecha.value = "";
    Descripcion.value = "";
    Participantes.value = "";
}

const listar = ()=>{
    var listaP = document.getElementById("tabla");
    var eventos = JSON.parse(localStorage.getItem("evento")||"[]")
    var div = ""
   
    eventos.forEach(e => {
    
        div += "<tr><td>"+e.Hora+"</td>";
        div += "<td>"+e.Fecha+"</td>";
        div += "<td>"+e.Descripcion+"</td>";
        div += "<td>"+e.Participantes+"</td></tr>"; 
    });
   listaP.innerHTML = div;
}