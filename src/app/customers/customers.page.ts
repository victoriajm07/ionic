import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.page.html',
  styleUrls: ['./customers.page.scss'],
})
export class CustomersPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  /* Funcion para ir a home */
  goToHome() {
    this.router.navigate(['/home'])
  }

}
