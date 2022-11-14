import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterChat'
})
export class FilterChatPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
