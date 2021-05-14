import { Injectable } from '@angular/core';
import { HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import { datamodel} from "./datamodel";


@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  public data: datamodel[] = [];

  constructor(private http: HttpClient){}

  public fetch(): Observable<any> {
    return this.http.get("https://datausa.io/api/data?drilldowns=Nation&measures=Population")
  }

  public idget: number;
  transporter(data: any): void{
    this.idget = this.data.indexOf(data);
    console.log("in transport func : ", + this.idget)

  }

}
