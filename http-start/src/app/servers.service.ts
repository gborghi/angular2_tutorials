import { Injectable } from "@angular/core";
//import { HttpHeaders } from "@angular/common/http";
import { Http, Headers, Response } from "@angular/http"
import { RequestOptions } from "@angular/http"
import 'rxjs/Rx';
import { Observable } from "rxjs";

@Injectable()
export class ServersService {
  constructor(private http: Http){};
  storeServers(servers: any[]){
    const headers = new Headers({'Content-Type': 'application/json'});
    // return this.http.post(
    //   'https://udemy-ng-http-fa61d.firebaseio.com/data.json', servers, new RequestOptions({headers:headers})
    // );
    return this.http.put(
      'https://udemy-ng-http-fa61d.firebaseio.com/data.json',
      servers,
      new RequestOptions({headers:headers})
    );
  }
  getServers(){
    return this.http.get('https://udemy-ng-http-fa61d.firebaseio.com/').map(
      (response: Response)=>{
        const data = response.json();
        for (const server of data){
          server.name = "fetched_"+server.name;
        }
        return data;
      }
    )
    .catch((error: Response) => {
      return Observable.throw('Stickazzons!!!!');
    }
    );
  }
  getAppName(){
    return this.http.get('https://udemy-ng-http-fa61d.firebaseio.com/appName.json').map(
      (response: Response)=>{
        return response.json();
      }
    )
  }
}
