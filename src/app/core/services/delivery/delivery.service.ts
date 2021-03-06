import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {CONFIG} from '../../config/config';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class DeliveryService {

  constructor(private http: HttpClient) { }
  public getAllDelivery(): Observable<any> { // Update structutre
    return this.http.get(CONFIG.urls.getDelivery)
      .map((res: any) => {
        return res;
      });
  }
}
