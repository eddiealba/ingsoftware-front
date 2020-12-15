import { Injectable } from '@angular/core';
import { from } from 'rxjs';
import { Voucher } from './voucher';

import { of,Observable, throwError } from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http'; 
import {map, catchError} from 'rxjs/operators';
import swal from 'sweetalert2';

import {Router} from '@angular/router';


@Injectable()
export class VoucherService{
    private urlEndPoint:string = 'http://localhost:8080/api/voucher';

    private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'})

    constructor(private http: HttpClient, private router:Router) { }

    getVocuher(): Observable<Voucher[]> {
        //return of(VOUCHERS);
        return this.http.get(this.urlEndPoint).pipe(
            map(response => response as Voucher[])
        )
    }

    create(voucher: Voucher) : Observable<any> {
        return this.http.post<any>(this.urlEndPoint, voucher, {headers: this.httpHeaders}).pipe(
            catchError(e => {
                console.error(e.error.mensaje);
                swal.fire(e.error.mensaje, e.error.error, 'error');
                return throwError(e);
            })
        )
    }

    getVoucher(voucherId: number): Observable<Voucher>{
        return this.http.get<Voucher>(`${this.urlEndPoint}/${voucherId}`).pipe(
            catchError(e => {
                this.router.navigate(['voucher/listvoucher']);
                console.error(e.error.mensaje);
                swal.fire('Error al editar', e.error.mensaje, 'error');
                return throwError(e);
            })
        );
    }

    update(voucher: Voucher): Observable<any>{
        return this.http.put<any>(`${this.urlEndPoint}/${voucher.voucherId}`, voucher, {headers: this.httpHeaders}).pipe(
            catchError(e => {
                console.error(e.error.mensaje);
                swal.fire(e.error.mensaje, e.error.error, 'error');
                return throwError(e);
            })
        );
    }

    delete(voucherId: number): Observable<Voucher>{
        return this.http.delete<Voucher>(`${this.urlEndPoint}/${voucherId}`, {headers: this.httpHeaders}).pipe(
            catchError(e => {
                console.error(e.error.mensaje);
                swal.fire(e.error.mensaje, e.error.error, 'error');
                return throwError(e);
            })
        );    
    }

}