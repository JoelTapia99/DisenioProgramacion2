import { Component, OnInit } from '@angular/core';
import { PERSONAS } from "../../mock-personas";
import { Persona, Alert } from 'src/app/personas';
import Swal from 'sweetalert2';
import { BlockUI, NgBlockUI } from 'ng-block-ui';

const ALERTS: Alert[] = [];


@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})
export class PersonasComponent implements OnInit {

  alerts: Alert[];
  personas = PERSONAS;
  actual: Persona;
  @BlockUI() blockUI: NgBlockUI;

  constructor() {

    this.reset();
  }

  ngOnInit() {

  }

  close(alert: Alert) {
    this.alerts.splice(this.alerts.indexOf(alert), 1);
  }

  reset() {
    this.alerts = Array.from(ALERTS);
  }

  ressetAlerts(){
    if( this.alerts.length == 0  ){
      Swal.fire({
        position: 'top-end',
        icon: 'info',
        title: 'Información:',
        text: 'Historial Vacío',
        showConfirmButton: false,
        timer: 1000
      })
    }else{
      this.alerts = Array.from(ALERTS);
      this.blockUI.start('Borrando Historial');
      setTimeout(() => {
        this.blockUI.stop();
      }, 500);
    }
  }

  addAlerts() {
    this.alerts.push({
      type: 'primary',
      message: 'alerta generada con ng-Bootstrap',
    });
  }
  addAlert(persona: Persona) {
    this.alerts.push({
      type: 'primary',
      message: persona.nombre + " se describe así: " + persona.descripcion,
    });
  }

  showModal(persona: Persona) {
    Swal.fire({
      icon: 'info',
      title: persona.nombre + " " + persona.apellido,
      text: persona.descripcion,
      footer: '<a href="https://github.com/JoelTapia99/DisenioProgramacion2">Ir al repositorio del proyecto</a>'
    })
    this.addAlert(persona);

  }


}
