import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pagina2',
  templateUrl: './pagina2.page.html',
  styleUrls: ['./pagina2.page.scss'],
})
export class Pagina2Page implements OnInit {

  argumentos = null;

  constructor(private activeRoute: ActivatedRoute) { }

  ngOnInit() {
    this.argumentos = this.activeRoute.snapshot.paramMap.get('id');
  }

}
