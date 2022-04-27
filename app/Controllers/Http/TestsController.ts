import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class TestsController {
  public async test({request}:HttpContextContract){

    const strInput = request.input('teststring')
    function reverseString(str) {
      return str.split("").reverse().join("");
  }
  const data = reverseString(strInput);
  console.log(data);
  
 // return {"data":data}
   
  }




  public async test2(){
    
  }
}
