import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './dashboard/layout/header/header.component';
import { SidebarComponent } from './dashboard/layout/sidebar/sidebar.component';
import { FooterComponent } from './dashboard/layout/footer/footer.component';
import { GestionclientComponent } from './dashboard/gestionclient/gestionclient.component';
import { GestionemployeeComponent } from './dashboard/gestionemployee/gestionemployee.component';
import { GestiondepartementComponent } from './dashboard/gestiondepartement/gestiondepartement.component';
import { AjoutdepComponent } from './dashboard/gestiondepartement/ajoutdep/ajoutdep.component';
import { ListdepComponent } from './dashboard/gestiondepartement/listdep/listdep.component';
import { UpdatedepComponent } from './dashboard/gestiondepartement/updatedep/updatedep.component';
import { FormsModule } from '@angular/forms';
import { AjoutempComponent } from './dashboard/gestionemployee/ajoutemp/ajoutemp.component';
import { ListempComponent } from './dashboard/gestionemployee/listemp/listemp.component';
import { UpdateempComponent } from './dashboard/gestionemployee/updateemp/updateemp.component';
import { AjoutclientComponent } from './dashboard/gestionclient/ajoutclient/ajoutclient.component';
import { ListclientComponent } from './dashboard/gestionclient/listclient/listclient.component';
import { UpdateclientComponent } from './dashboard/gestionclient/updateclient/updateclient.component';
import { HttpClientModule } from '@angular/common/http'
@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    DashboardComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    GestionclientComponent,
    GestionemployeeComponent,
    GestiondepartementComponent,
    AjoutdepComponent,
    ListdepComponent,
    UpdatedepComponent,
    AjoutempComponent,
    ListempComponent,
    UpdateempComponent,
    AjoutclientComponent,
    ListclientComponent,
    UpdateclientComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
