import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/servicios/login.service';

@Component({
  selector: 'app-cabecero',
  templateUrl: './cabecero.component.html',
  styleUrls: ['./cabecero.component.css']
})
export class CabeceroComponent implements OnInit{

  estalogueado: boolean;
  usuariologueado: string;

  constructor(
    private loginService: LoginService,
    private router: Router
  ){

  }


  ngOnInit() {
    this.loginService.getusuarioIdentificado().subscribe ( auth =>{
      if(auth){
        this.estalogueado = true;
        this.usuariologueado = auth.email ?? '';
      }
      else{
        this.estalogueado = false;

      }
    })

  }

  logout(){
    this.loginService.logout();
    this.estalogueado = false;
    this.router.navigate(['/login']);
  }

}
