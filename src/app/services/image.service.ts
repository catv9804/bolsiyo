import {Injectable} from '@angular/core';
import {environment} from 'src/environments/environment';
import { HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Image} from '../models/images'

@Injectable({
    providedIn: 'root'
})
//creando servicio para acceder a la API
//La URL quese divide en enviroments se junta para posteriormente realizar la peticion get
export class ImageService{
    private API_KEY: string = environment.PIXABAY_API_KEY
    private API_URL: string = environment.PIXABAY_API_URL;
    private URL: string = this.API_URL+this.API_KEY+'&q=';

    constructor(private http: HttpClient){}
    //se pasa el query para realizar la peticion get
    //se realiza la peticion
    getImages(query:string): Observable<Image[]>{
        console.log(this.URL+query)
        return this.http.get<Image[]>(this.URL+query)
    }
}