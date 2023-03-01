import { Component } from '@angular/core';
import {CodeAnalyserService} from "../../services/code-analyser.service";
import {exhaustMap, interval} from "rxjs";
@Component({
  selector: 'app-code-analyser',
  templateUrl: './code-analyser.component.html',
  styleUrls: ['./code-analyser.component.css']
})
export class CodeAnalyserComponent {
  constructor(private analyserService:CodeAnalyserService) {
    interval(1000)
      .pipe(exhaustMap(()=>this.analyserService.getCandidateCode()))
        .subscribe(value=>this.runCode(value))
  }
  checkCode(candidateCode:string):boolean
  {
    return true;
  }
  runCode(candidateCode:string):boolean
  {
    console.log(candidateCode)
    const candidateFunction = new Function("value", candidateCode);
    const returnValue = candidateFunction()
    console.log(returnValue)
    return true;
  }
  checkCompilationResult(candidateCode:string):boolean
  {
    return true;
  }
}
export interface testInterface{
  name:string;
}
