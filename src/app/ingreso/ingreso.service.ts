import { Ingreso } from './ingreso.model';

export class IngresoService{

  ingresos: Ingreso[] = [
    new Ingreso("Salario", 115000),
    new Ingreso("Salario", 70000)
  ];

  eliminar(ingreso: Ingreso){
    const index: number = this.ingresos.indexOf(ingreso);
    this.ingresos.splice(index, 1);
  }

}
