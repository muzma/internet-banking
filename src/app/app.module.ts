import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AccordionModule } from 'ngx-bootstrap'; 
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { MenuSampingComponent } from './menu-samping/menu-samping.component';
import { SelamatDatangComponent } from './selamat-datang/selamat-datang.component';
import { MenuAtasComponent } from './menu-atas/menu-atas.component';
import { RekeningModule } from './rekening/rekening.module';
import { TransferComponent } from './transfer/transfer.component';
import { ProfilComponent } from './profil/profil.component';

const routingAplikasi: Routes  =  [
   { path: 'rekening', redirectTo: '/rekening', pathMatch: 'full' },
   { path: 'transfer', component:TransferComponent},
   { path: 'profil', component:ProfilComponent},
   { path: '**' , component:SelamatDatangComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    MenuSampingComponent,
    SelamatDatangComponent,
    MenuAtasComponent,    
    TransferComponent,
    ProfilComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routingAplikasi),
    RekeningModule,
    AccordionModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
