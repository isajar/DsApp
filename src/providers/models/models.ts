import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { housesBos } from "../../models/housesBos";

/*
  Generated class for the ModelsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ModelsProvider {
  baseUrl = "http://127.0.0.1:1081";
  urlPredictLM = `${this.baseUrl}/predict`;
  urlPredictTF = `${this.baseUrl}/predict-tf`;
  constructor(public http: HttpClient) {
    console.log("Hello ModelsProvider Provider");
  }

  predictLM(data: housesBos) {
    return this.http.post(this.urlPredictLM, data);
  }

  predictTF(data: housesBos) {
    return this.http.post(this.urlPredictTF, data);
  }
}
