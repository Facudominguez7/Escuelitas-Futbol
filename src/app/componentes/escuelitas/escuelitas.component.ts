import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Escuelita } from 'src/app/Modelo/escuelita.model';
import { EscuelitaServicio } from 'src/app/servicios/escuelita.service';

@Component({
  selector: 'app-escuelitas',
  templateUrl: './escuelitas.component.html',
  styleUrls: ['./escuelitas.component.css']
})
export class EscuelitasComponent implements OnInit {
  escuelitas?: Escuelita[];
  escuelita: Escuelita = {
    nombre: '',
    direccion: '',
    descripcion: '',
    nombreRes: '',
    ubicacion: '',
    numTelefono: 0,



  };
  busqueda: string;
  busquedaDni: string;
  escuelitasFiltradas: Escuelita[];

  @ViewChild("escuelitaForm") escuelitaForm: NgForm;
  @ViewChild("botonCerrar") botonCerrar: ElementRef;

  constructor(private escuelitasServicio: EscuelitaServicio,
    private flashMessages: FlashMessagesService ){

}
ngOnInit() {
  this.escuelitasServicio.getEscuelitas().subscribe(
    escuelitas => {
      this.escuelitas = escuelitas;
      this.escuelitasFiltradas = escuelitas;
    }
  );
}

agregar(escuelitaForm: NgForm){

  if(!escuelitaForm.valid){
    this.flashMessages.show('Por favor llena el formulario correctamente', {
      cssClass: 'alert-danger', timeout: 4000
    });
  }
  else{
    //Agregar el nuevo comedor
    this.escuelitasServicio.agregarEscuelita(escuelitaForm.value);
    this.escuelitaForm.resetForm();
    this.cerrarModal();

  }
}

private cerrarModal(){
  this.botonCerrar.nativeElement.click()
}

}
