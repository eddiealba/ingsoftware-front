import { Injectable } from '@angular/core';
import { formatDate, DatePipe, registerLocaleData } from '@angular/common';
import localeES from '@angular/common/locales/es';

import { from } from 'rxjs';
import { Voucher } from './voucher';

import { of,Observable, throwError } from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http'; 
import {map, catchError, tap} from 'rxjs/operators';
import swal from 'sweetalert2';

import {Router} from '@angular/router';


@Injectable()
export class VoucherService{
    private urlEndPoint:string = 'http://localhost:8080/api/voucher';

    private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'})

    constructor(private http: HttpClient, private router:Router) { }

    getVocuher(page: number): Observable<any[]> {
        return this.http.get(this.urlEndPoint +'/page/' + page).pipe(
            tap( (response: any) =>{
                (response.content as Voucher[]).forEach(voucher => {
                    console.log(voucher.voucherId);
                });
            }),
            
            map( (response: any) => {
                
                (response.content as Voucher[]).map(voucher =>{
                    
                return voucher;
                });
                return response;
            })
        );
    }

    create(voucher: Voucher) : Observable<any> {
        return this.http.post<any>(this.urlEndPoint, voucher, {headers: this.httpHeaders}).pipe(
            catchError(e => {
                if(e.status==400){
                    return throwError(e);
                }
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
                if(e.status==400){
                    return throwError(e);
                }

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