import { Injectable } from '@nestjs/common';

import { PowerService } from 'src/power/power.service';

@Injectable()
export class DiskService {

    private powerService:PowerService
    constructor(powerService:PowerService){
this.powerService = powerService
    }

    getData(){
        console.log(`Drawing 20 watts of power from power services`)
        this.powerService.supplyPower(20)
        return 'data'
         
    }
}
