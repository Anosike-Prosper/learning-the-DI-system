import { Controller, Get } from '@nestjs/common';
import { CpuService } from 'src/cpu/cpu.service';
import { DiskService } from 'src/disk/disk.service';

@Controller('computer')
export class ComputerController {
    private diskService: DiskService
    private cpuService:CpuService
    constructor(diskService:DiskService, cpuService:CpuService){
this.diskService = diskService
this.cpuService = cpuService
    }

    @Get()
    run(){
        return [this.cpuService.compute(6, 4), this.diskService.getData()]
    }
}
