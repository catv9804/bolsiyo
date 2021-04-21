import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Store, select} from '@ngrx/store'
import * as action from '../../actions/images.actions'; 
import { Image } from '../../models/images';
import { ImageService } from 'src/app/services/image.service';
@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

  almacenar$: Observable<[]>;
  images: Image[];
  searchQuery:string;
  categoryQuery:string;
  imagesFound= false;
  searching:false;
  selected:any[]
  

  leerQAndCat(){

  }
  //una vez ejecutandose buscarImagenes se usa este metodo para pasar la información y que acceda al hits
  //hits es el arreglo de imagenes dentro del json resultante de la peticion
  handleSucces(data){
    this.imagesFound = true;
    this.images = data.hits;
    console.log(data)
  }
  handleError(error) {
   console.log(error);
  }

  constructor( private store: Store<{almacenar:[]}>, private imageService: ImageService) { }

  
//el método buscarImagenes recibe como parametro un string que se obtiene del input text 
//se ejecuta esta función al hacer click sobre el botón o presionar enter en el form 
  buscarImagenes(query: string){
    //si el query no está vacio
    if(query){
      //se eliminan espacios sobrantes
      query=query.trim()
      //se reemplaza el espacio vacio cuando la busqueda es más de una palabra y se reemplaza con un + para que la petición funcione correctamente
      query=query.replace(' ','+')

      //invoca a imageService a la cual le pasa el quer y este le devuelve un JSON
     return this.imageService.getImages(query).subscribe(
       data=> this.handleSucces(data),
       error => this.handleError(error)
     )

    }
  }
  //metodo que recibe la imagen seleccionada por el usuario y la guarda en el store
  //este metodo tambien sirve para mostrar más grande la imagen y sus detalles
  abrirImagen(image){
    //select = true;
    this.store.dispatch(action.almacenar({image}))
    //this.almacenar$=this.store.pipe(select('almacenar'));
    //var p= document.getElementById('hola')
    this.selected=image
    console.log('click')
    
    

  }
  //este metodo se ejectua cuando el usuario selecciona uno de los elementos del dropdown y agrega al parametro q=(parametro de)
  categoriaImagenes (query){
    if(query){
      query=this.searchQuery+'&category='+query;
      return this.imageService.getImages(query).subscribe(
        data=> this.handleSucces(data),
        error => this.handleError(error)
      )
    }
    console.log(this.searchQuery)
  }
  ngOnInit() {
    this.almacenar$=this.store.pipe(select('almacenar'));
    console.log(this.almacenar$)
    
  }

}
