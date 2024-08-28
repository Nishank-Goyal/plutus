import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CONSTANTS } from 'src/constants';
@Injectable({ providedIn: 'root' })
export class HttpService {
    baseUrl = CONSTANTS.environment.baseUlr;
    constructor(private http: HttpClient) { }

    get(url: string, data: any = {}) {
        return this.http.get(`${this.baseUrl}${url}`, { params: data })
    }

    post(url: string, data: any) {
        return this.http.post(`${this.baseUrl}${url}`, data)
    }

    delete(url: string, data: any) {
        return this.http.delete(`${this.baseUrl}${url}`, { body: data });
    }

    put(url: string, data: any) {
        return this.http.put(`${this.baseUrl}${url}`, data);
    }
    postFormData(apiPath: string, data?: any) {
        console.log('API PATH -------------->>>',`${this.baseUrl}${apiPath}`);
        
        return this.http.post<any>(`${this.baseUrl}${apiPath}`, data,
            {
                headers: new HttpHeaders({
                    'Accept': 'multipart/form-data'
                })
            });
    }
}