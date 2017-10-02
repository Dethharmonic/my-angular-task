import { Injectable } from '@angular/core';
import { Obj } from '../domain/obj';
import { PrimeObj } from '../domain/primeobj';

//Service for working with table's data objects
@Injectable()
export class ObjService {
    constructor() { }
    
    // Returns an array of data
    getData(count:number, objs:Obj[]) {
        for (let i:number = 0; i < count; i++) {
           objs.push(this.genObj(i));
        }
        return objs;
    }
    // Generates an array of data randomly
    genObj(num:number):PrimeObj{
        let isp="Name"+num;
        let fnn_number="N"+num;
        let peak_bandwidth=Math.trunc((Math.random() * 100 ) * 100) / 100;
        let network_sio=(Math.floor(Math.random() * (1500 - 100 + 1)) + 100)*10;
        let kbps_sio=Math.floor(Math.random() * (10000 - 500 + 1)) + 500;;
        let current_tier=Math.floor(Math.random() * (15)) + 1;
        let last_month_tier=Math.floor(Math.random() * (15)) + 1;
        return new PrimeObj(isp, fnn_number, peak_bandwidth, network_sio, kbps_sio, current_tier, last_month_tier);
    }

}