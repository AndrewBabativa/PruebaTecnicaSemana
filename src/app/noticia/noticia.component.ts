import { Component, OnInit } from '@angular/core';
import { NoticiaService } from '../servicio/noticia.service';
@Component({
  selector: 'app-noticia',
  templateUrl: './noticia.component.html',
  styleUrls: ['./noticia.component.css']
})
export class NoticiaComponent implements OnInit {

  Noticias : any;

  constructor( private noticiaService: NoticiaService) { }

  ngOnInit() {
  }

  ConsultarNoticia(Id)
  {
       this.noticiaService.ConsultarNoticia(Id).subscribe(resultado => {
       this.Noticias = resultado.data as string [];
     });
  }
}
