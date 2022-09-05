import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../environments/environment.prod";
import {Observable} from "rxjs";

export interface IDataDto {
  name: string,
  type: string,
  values: Array<number>,
  clicked: boolean,
  rms: Array<number>
}
export interface IFaultDTO {
  valueName: string,
  time: number,
  timeUnitOfMeasurement: string,
  fallbackValue: number,
  valueUnitOfMeasurement: string
}

const ENDPOINT_API = environment.ENDPOINT_API;
@Injectable({
  providedIn: 'root'
})
export class CommunicationService {

  constructor(private httpClient: HttpClient) { }


  public getScopes(path: string, fileName: string): Observable<IDataDto[]> {
    return this.httpClient.get<IDataDto[]>(`${ENDPOINT_API}/readAndSave`, {params: {path: path, fileName: fileName}} )
  }
  public getTable(): Observable<IFaultDTO[]> {
    return this.httpClient.get<IFaultDTO[]>(`${ENDPOINT_API}/getFault`)
  }
}
