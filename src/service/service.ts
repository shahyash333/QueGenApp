import { Observable } from 'rxjs/Observable';
import { environment } from '../environment/environment';
import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class Service {
    constructor(private http: Http) { }

    // To extract data from response
    private extractData(res: Response): void {
        const body = res.json();
        return body || {};
        // return body.data || {};
    }
    // To handle error from response
    private handleError(error: Response | any): any {
        // In a real world app, we might use a remote logging infrastructure
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
    }

    public getRequest(url : string , options: any): Observable<any> {
        return this.http.get(`${environment.origin}` + `${url}`, options)
            .map(this.extractData)
            .catch(this.handleError);
    }

    // public deleteRequest(options: any): Observable<any> {
    //     return this.http.delete(`${environment.origin}` + '/b2b/management/search?type=exhibition&product=color_stone', options)
    //         .map(this.extractData)
    //         .catch(this.handleError);
    // }

    // public putRequest(options: any): Observable<any> {
    //     return this.http.put(`${environment.origin}` + '/b2b/management/search?type=exhibition&product=color_stone', options)
    //         .map(this.extractData)
    //         .catch(this.handleError);
    // }

    public postRequest(url : string, data: any, options: any): any {
        return this.http.post(`${environment.origin}` + `${url}`, data, options)
            .map(this.extractData)
            .catch(this.handleError);
    }

    public makeRequest(url:string, options : any){        
        return this.http.get(`${environment.origin}`+ url, options)
            .map(this.extractData)
            .catch(this.handleError);
    }

}
