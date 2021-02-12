import { Egreso } from "./egreso.model";

export class EgresoService{

  egresos: Egreso[] = [
    new Egreso("Cuota Captur", 60000),
    new Egreso("Salario Mariel", 30000)
  ];

  eliminar(egreso: Egreso){
    const index: number = this.egresos.indexOf(egreso);
    this.egresos.splice(index, 1);
  }

}
