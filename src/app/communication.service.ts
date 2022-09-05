import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Fault} from "./fault";
import {environment} from "../environments/environment";

@Injectable({
  providedIn: "root"
})
export class FaultService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {
  }

  public getFault(): Observable<Fault[]> {
    return this.http.get<Fault[]>(`${this.apiServerUrl}/comtrade/getFault`);
  }

  // public readAndSave(path: string, fileName: string){
  //
  //   return this.http.post(`${this.apiServerUrl}/comtrade/getFault`, path)
  // }

}
