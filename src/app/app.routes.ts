import { Routes } from '@angular/router';
import { Catalogo } from './pages/catalogo/catalogo';
import { ProductoDetalle } from './pages/producto-detalle/producto-detalle';
import { Carrito } from './pages/carrito/carrito';
import { Login } from './pages/login/login';
import { Registro } from './pages/registro/registro';
import { MisPedidos } from './pages/mis-pedidos/mis-pedidos';

export const routes: Routes = [
  { path: '', component: Catalogo },
  { path: 'producto/:id', component: ProductoDetalle },
  { path: 'carrito', component: Carrito },
  { path: 'login', component: Login },
  { path: 'registro', component: Registro },
  { path: 'mis-pedidos', component: MisPedidos },
  { path: '**', redirectTo: '' },
];
