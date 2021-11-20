import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  valor = 'hola';

  constructor(private router: Router,
              private navCtrl: NavController) {

              }

  enrutarPagina(){
    this.router.navigate(['/pagina2', this.valor]);
  }

  routingViaNavParams(){
    this.navCtrl.navigateForward(['/pagina2', this.valor]);
  }

}
