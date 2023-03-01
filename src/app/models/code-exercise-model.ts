export interface CodeExerciseModel
{
  name:string;
  description:string;

  codeValidators:CodeValidator[];
  testCases:TestCase[];
}
export interface CodeValidator{
  type:string;
  value:string;
}
export interface TestCase{
  input:any;
  output:string;
}
