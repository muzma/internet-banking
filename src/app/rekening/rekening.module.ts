import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown'

import { RekeningComponent } from './rekening.component';
import { DaftarRekeningComponent } from './daftar-rekening/daftar-rekening.component';
import { SaldoRekeningComponent } from './saldo-rekening/saldo-rekening.component';
import { MutasiRekeningComponent } from './mutasi-rekening/mutasi-rekening.component';
import { PilihanRekeningComponent } from './pilihan-rekening/pilihan-rekening.component';

import { RekeningService} from './rekening.service';

const routingRekening: Routes  =  [
   { path: 'rekening/list', component:DaftarRekeningComponent},
   { path: 'rekening/saldo', component:SaldoRekeningComponent},
   { path: 'rekening/mutasi', component:MutasiRekeningComponent},
   { path: 'rekening/**', component:RekeningComponent}
];

@NgModule({
  imports: [
    CommonModule,
     RouterModule.forChild(routingRekening),
     BsDropdownModule.forRoot()
  ],
  declarations: [RekeningComponent,DaftarRekeningComponent, SaldoRekeningComponent, MutasiRekeningComponent, PilihanRekeningComponent],
  exports:[
    PilihanRekeningComponent
  ],
  providers:[
    RekeningService
  ]
})
export class RekeningModule { }
