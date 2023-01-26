import { Component } from '@angular/core';
import { Empleado } from "./models/empleado";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  empleadoArray: Empleado[] = [
    { id: 1, name: "Anthony", country: "Ecuador" },
    { id: 2, name: "Albieri", country: "USA" },
    { id: 3, name: "Juan", country: "Peru" },
  ];

  seleccionEmpleado: Empleado = new Empleado();

  agregarEditar() {
    if (this.seleccionEmpleado.id === 0) {
      this.seleccionEmpleado.id = this.empleadoArray.length + 1;
      this.empleadoArray.push(this.seleccionEmpleado);
    }
    this.seleccionEmpleado = new Empleado();
  }
  Editar(empleado: Empleado) {
    this.seleccionEmpleado = empleado;
  }
  Eliminar(){
    if(confirm('¿Estás seguro de Eliminarlo?')){
      this.empleadoArray = this.empleadoArray.filter(x => x != this.seleccionEmpleado);
      this.seleccionEmpleado = new Empleado();
    }
  }
}

