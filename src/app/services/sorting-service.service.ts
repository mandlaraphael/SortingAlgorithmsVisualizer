import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import RangeNumbers from '../modal/RangeNumbers';

@Injectable({
  providedIn: 'root'
})
export class SortingServiceService {

  constructor(private readonly httClient: HttpClient) { }

  public sort(type: string, array: []): Observable<[]> {
    return this.httClient.post<[]>(
      `http://localhost:8080/sort/${type}`,
      array
    );
  }

  public generateNumbers(rage: RangeNumbers): Observable<[]> {
    return this.httClient.post<[]>(
      `http://localhost:8080/generate-numbers`,
      rage
    );
  }
}
