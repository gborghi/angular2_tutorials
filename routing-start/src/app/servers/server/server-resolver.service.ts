import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';

import { Observable } from 'rxjs';
import { ServersService } from '../servers.service';
import { Injectable } from '@angular/core';

interface Server{
  id: number;
  name: string;
  status: string;
}

interface ReturnData{
  server: Server,
  edit: number
}

@Injectable()
export class ServerResolver implements Resolve<ReturnData>{

  constructor(private serversService: ServersService) {}

  resolve(route:ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ReturnData> | Promise<ReturnData> | ReturnData {
    let temp: ReturnData = {server: this.serversService.getServer(+route.params['id']), edit: route.queryParams['allowEdit']};
    return temp;
  }
}
