import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'slashToDash'
})
export class SlashToDashPipe implements PipeTransform {

  transform(value: string): string {
    return value.split('/').join('-');
  }

}
