import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NvbarComponent } from './nvbar/nvbar.component';
import { ProductosComponent } from './productos/productos.component';
import { CategoriasComponent } from './categorias/categorias.component';
import { CarritoComponent } from './carrito/carrito.component';
import { MarcasComponent } from './marcas/marcas.component';

const routes: Routes = [
  { path:'login', component:LoginComponent},
  { path:'Home', component:HomeComponent},
  { path:'Nvbar', component:NvbarComponent},
  { path:'productos/:parameterSearch',component:ProductosComponent },
  { path:'Categorias',component:CategoriasComponent},
  { path:'Carrito',component:CarritoComponent},
  { path: 'Marcas',component:MarcasComponent},
];
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
