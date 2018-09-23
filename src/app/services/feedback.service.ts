import { Injectable } from '@angular/core';
import { Feedback } from '../shared/feedback';

import { delay, map } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { Restangular } from 'ngx-restangular';
import { ProcessHTTPMsgService } from './process-httpmsg.service';
@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  constructor(private restangular: Restangular, private processHTTPMsgService: ProcessHTTPMsgService) { }

  submitFeedback(feedback: Feedback): Observable<Feedback> {

   return this.restangular.all('feedback').post(feedback);
  }
}
