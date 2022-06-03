import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AtualizarComponent } from "./atualizar/atualizar.component";
import { CadastrarComponent } from "./cadastrar/cadastrar.component";
import { ListarComponent } from "./listar/listar.component";

const routes: Routes = [
  {path: '', component: ListarComponent},
  {path: 'atualizar/:id', component: AtualizarComponent},
  {path: 'cadastrar', component: CadastrarComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
