import { Injectable } from '@angular/core';
import { Rekening } from './rekening.model';

@Injectable()
export class RekeningService {

  constructor() { }

  ambilDataRekening(): Promise<Rekening[]>{
    let hasil:Rekening[] = [
    new Rekening("r001",'12344325','Tabungan Mustofa'),
    new Rekening("r002",'98765','Giro Mustofa'),
    ]

    // return Promise.resolve(hasil);

     return new Promise(resolve => {
    // Simulate server latency with 2 second delay
    setTimeout(() => resolve(hasil), 2000);
      });
  }
}
