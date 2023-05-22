import { Injectable } from "@angular/core";
import { Escuelita } from "../Modelo/escuelita.model";
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from "@angular/fire/compat/firestore";
import { Observable, map } from "rxjs";
import { AngularFireStorage } from '@angular/fire/compat/storage';

@Injectable()
export class EscuelitaServicio{
  escuelitasColeccion: AngularFirestoreCollection<Escuelita>;
  escuelitaDoc: AngularFirestoreDocument<Escuelita>;
  escuelitas: Observable<Escuelita[]>;
  escuelita!: Observable<Escuelita>;

   //Metodo conectar base de datos
   constructor(private db: AngularFirestore, private storage: AngularFireStorage) {
    //recuperar coleccion de comedores
    this.escuelitasColeccion = db.collection('escuelitas', (ref) =>
      ref.orderBy('nombre', 'asc')
    );
  }

    //Solicitud datos de comedores pidiendo id (regresa objeto de tipo comedor)
    getEscuelitas(): Observable<Escuelita[]> {
      //Obtener los comedores
      this.escuelitas = this.escuelitasColeccion.snapshotChanges().pipe(
        map((cambios) => {
          return cambios.map((accion) => {
            const datos = accion.payload.doc.data() as Escuelita;
            datos.id = accion.payload.doc.id;
            return datos;
          });
        })
      );
      return this.escuelitas;
    }

    agregarEscuelita(escuelita: Escuelita) {
      this.escuelitasColeccion.add(escuelita);
    }
}
