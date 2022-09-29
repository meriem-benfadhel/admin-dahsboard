import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AjoutclientComponent } from './dashboard/gestionclient/ajoutclient/ajoutclient.component';
import { GestionclientComponent } from './dashboard/gestionclient/gestionclient.component';
import { ListclientComponent } from './dashboard/gestionclient/listclient/listclient.component';
import { UpdateclientComponent } from './dashboard/gestionclient/updateclient/updateclient.component';
import { AjoutdepComponent } from './dashboard/gestiondepartement/ajoutdep/ajoutdep.component';
import { GestiondepartementComponent } from './dashboard/gestiondepartement/gestiondepartement.component';
import { ListdepComponent } from './dashboard/gestiondepartement/listdep/listdep.component';
import { UpdatedepComponent } from './dashboard/gestiondepartement/updatedep/updatedep.component';
import { AjoutempComponent } from './dashboard/gestionemployee/ajoutemp/ajoutemp.component';
import { GestionemployeeComponent } from './dashboard/gestionemployee/gestionemployee.component';
import { ListempComponent } from './dashboard/gestionemployee/listemp/listemp.component';
import { UpdateempComponent } from './dashboard/gestionemployee/updateemp/updateemp.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SecurityGuard } from './services/security.guard';
const routes: Routes = [
  { path : '', redirectTo : '/dashboard', pathMatch: 'full'},
  { path : 'dashboard',canActivate: [ SecurityGuard ] ,component: DashboardComponent, children: [

    { path: '', redirectTo: 'gestiondepartement', pathMatch: 'full'},
    { path: 'gestionclient', component: GestionclientComponent , children : [
      { path : '', redirectTo :'list',pathMatch: 'full'},
      { path : 'ajout', component: AjoutclientComponent},
      { path : 'list', component: ListclientComponent},
      { path : 'update/:id', component: UpdateclientComponent}
    ]},
    { path: 'gestionemployee', component:GestionemployeeComponent, children : [
      { path : '', redirectTo :'list',pathMatch: 'full'},
      { path : 'ajout', component: AjoutempComponent},
      { path : 'list', component: ListempComponent},
      { path : 'update/:id', component: UpdateempComponent}
    ]},
    { path: 'gestiondepartement', component: GestiondepartementComponent, children: [
      { path : '', redirectTo :'list',pathMatch: 'full'},
      { path : 'ajout', component: AjoutdepComponent},
      { path : 'list', component: ListdepComponent},
      { path : 'update/:id', component: UpdatedepComponent}
    ]}
  ]},
  { path : 'login', component: LoginComponent},
  { path: 'register', component : RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
