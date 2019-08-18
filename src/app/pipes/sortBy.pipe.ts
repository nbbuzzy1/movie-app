import { PipeTransform, Pipe } from "@angular/core";

@Pipe({
  name: 'sortBy'
})

export class SortByPipe implements PipeTransform {
  transform(value: any, propName: string) {
    if (propName === 'title') {
      return value.sort((a, b) => {
        if (a[propName].toLowerCase() > b[propName].toLowerCase()) {
          return 1;
        } else {
          return -1;
        }
      });
    } else {
      return value.sort((a, b) => {
        if (a[propName] < b[propName]) {
          return 1;
        } else {
          return -1;
        }
      });
    }
  }
}
