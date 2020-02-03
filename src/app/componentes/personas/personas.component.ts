import { Component, OnInit } from '@angular/core';
import { PERSONAS } from "../../mock-personas";
import { Persona, Alert } from 'src/app/personas';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2';

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

  constructor( config: NgbModalConfig, private modalService: NgbModal ) {
    config.backdrop = 'static';
    config.keyboard = false;
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

  addAlerts(){
    this.alerts.push({
      type: 'dark',
      message: 'Hola a todos',
    });
  }

  showModal(){
    Swal.mixin({
      input: 'text',
      confirmButtonText: 'Next &rarr;',
      showCancelButton: true,
      progressSteps: ['1', '2', '3']
    }).queue([
      {
        title: 'Question 1',
        text: 'Chaining swal2 modals is easy'
      },
      'Question 2',
      'Question 3'
    ]).then((result) => {
      if (result.value) {
        const answers = JSON.stringify(result.value)
        Swal.fire({
          title: 'All done!',
          html: `
            Your answers:
            <pre><code>${answers}</code></pre>
          `,
          confirmButtonText: 'Lovely!'
        })
      }
    })
  }
}
