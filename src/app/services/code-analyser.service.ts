import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {CandidateCodeModel} from "../models/candidate-code.model";

@Injectable({
  providedIn: 'root'
})
export class CodeAnalyserService
{
  constructor(private http:HttpClient) {
  }
  getCandidateCode():Observable<string>{
    return this.http.get<string>("http://localhost:8080/api/codeAnalyser")
  }

}
