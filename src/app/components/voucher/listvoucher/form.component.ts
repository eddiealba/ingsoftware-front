import { Component, OnInit } from '@angular/core'
import { Voucher } from './voucher'
import {VoucherService} from './voucher.service'
import {Router, ActivatedRoute} from '@angular/router'
import swal from 'sweetalert2'


@Component({
    selector: 'app-form',
    templateUrl: './form.component.html'
})
export class FormComponent implements OnInit {

    voucher: Voucher = new Voucher()

    

    constructor(private voucherService: VoucherService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

    ngOnInit() {
       
    }

    create(): void{
        this.voucherService.create(this.voucher)
        .subscribe(json => {
                this.router.navigate(['/voucher/listvoucher'])
                swal.fire('Nuevo Comprobante', `${json.mensaje} # ${json.voucher.voucherId}`, 'success') 
        },
        err => {
            console.error('Codigo de error desde el backend: '+err.error.errors);
            console.error(err.error.errors);
        }
        );
    }

   

}
