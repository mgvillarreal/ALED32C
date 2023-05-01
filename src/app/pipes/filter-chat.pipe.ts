import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterChat'
})
export class FilterChatPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    if(arg === '' || arg.length < 3) return value;
    
    const resultMsj = [];

    for(const msj of value)
    {
      if(msj.texto.toLowerCase().indexOf(arg.toLowerCase()) >  -1 )
      {
        resultMsj.push(msj);
      }
    }

    return resultMsj;
  }

}
