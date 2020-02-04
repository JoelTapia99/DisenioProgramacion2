import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  informacion(){
    Swal.fire({
      position: 'top-end',
      icon: 'info',
      title: 'Autor',
      text: 'Joel Tapia, Tervero "A"',
      showConfirmButton: false,
      timer: 2000
    })
  }

}
