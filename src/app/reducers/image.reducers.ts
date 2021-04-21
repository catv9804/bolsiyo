import {createReducer,on} from '@ngrx/store';
import * as states from '../actions/images.actions';
import {ImageService} from '../services/image.service'

//creando el reducer para almacenar
//pasando el estado inicial que en este caso es un arreglo vacio
export const initialA=[]

const _almacenarReducer = createReducer(
    initialA,
    on(states.almacenar, (state,{ image}) => image )
)

//se exporta la función que como parametro recibe el estado 
export function almacenarReducer(state, action){
    return _almacenarReducer(state, action)
}