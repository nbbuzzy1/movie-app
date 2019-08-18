import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filterText: any) {
    return value.filter((movie) => movie.title.toLowerCase().includes(filterText));
  }

}
