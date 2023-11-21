import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titlechange'
})
export class TitlechangePipe implements PipeTransform {

  transform(title:string): string{
    return title;
  }
  
}
