import { Injectable } from '@angular/core';
import { Leader } from '../shared/leader';
import { LEADERS } from '../shared/leaders';

import { delay, map } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { Restangular } from 'ngx-restangular';
import { ProcessHTTPMsgService } from './process-httpmsg.service';

@Injectable({
  providedIn: 'root'
})
export class LeaderService {

  constructor(private restangular: Restangular, private processHTTPMsgService: ProcessHTTPMsgService) { }
  getLeaders(): Observable<Leader[]> {
    return this.restangular.all('leaders').getList();

  }

  getLeader(id: number): Observable<Leader> {
    return this.restangular.one('leaders').get();

  }

  getFeaturedLeader(): Observable<Leader> {
    return this.restangular.all('leaders').getList({ featured: true })
      .pipe(map(leaders => leaders[0]));

  }
}
