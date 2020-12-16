import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { Voucher} from './voucher';
import { VoucherService } from './voucher.service';
import Swal from 'sweetalert2';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-listvoucher',
  templateUrl: './listvoucher.component.html'
  
})
export class ListvoucherComponent implements OnInit {

  vouchers!: Voucher[];
  paginador: any;

  constructor(private voucherService: VoucherService, 
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    
    this.activatedRoute.paramMap.subscribe (params =>{
      let page: number = +params.get('page');
      if(!page){
        page=0;
      }
    this.voucherService.getVocuher(page).subscribe(
      response => {
        this.vouchers = response.content as Voucher[];
        this.paginador= response;
      });
    });
  }

  delete(voucher: Voucher): void{
            
    Swal.fire({
      title: '¿Esta Seguro?',
      text: `¿Seguro que desea eliminar el comprobante ${voucher.voucherId}?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar'
      }).then((result) => {
      if (result.isConfirmed) {

        this.voucherService.delete(voucher.voucherId).subscribe(
          response => {
            this.vouchers = this.vouchers.filter(vou => vou !== voucher)
            Swal.fire(
              'Comprobante Eliminado',
              `Comprobante ${voucher.voucherId} eliminado con exito.`,
              'success'
            )
          }
        )
        
      }
    })
      }

}
