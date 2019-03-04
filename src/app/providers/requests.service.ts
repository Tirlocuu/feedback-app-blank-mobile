import { Injectable } from "@angular/core";
import { Http, Headers } from '@angular/http';
import { map } from "rxjs/operators";

@Injectable() 
export class RequestsService {
    constructor(private http: Http) {

    }

    get(route: string) {
        var headers = new Headers();
        headers.append("Content-type", "application/json");
        headers.append("Access-Control-Allow-Origin", "*");
        
        return this.http.get("http://localhost:54982/" + route,
                { headers: headers })
            .pipe(map(res => res.json()));
    }

    post(route: string, model: any) {
        var headers = new Headers();
        headers.append("Content-type", "application/json");
        
        return this.http.post("http://localhost:54982/" + route, model,
                { headers: headers })
            .pipe(map(res => res.json()));
    }

    put(route: string, model: any) {
        var headers = new Headers();
        headers.append("Content-type", "application/json");
        
        return this.http.put("http://localhost:54982/" + route, model,
                { headers: headers })
            .pipe(map(res => res.json()));
    }

    delete(route: string) {
        var headers = new Headers();
        headers.append("Content-type", "application/json");
        
        return this.http.delete("http://localhost:54982/" + route,
                { headers: headers })
            .pipe(map(res => res.json()));
    }
}