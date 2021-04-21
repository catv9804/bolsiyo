import {createAction, props} from '@ngrx/store';
import { Image } from '../models/images';


//se crea el action de almacenar el contenido de la imagen que seleccionó el usuario
export const almacenar = createAction('almacenar',
    props<{image:Image[]}>());