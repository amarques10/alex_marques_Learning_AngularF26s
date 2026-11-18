import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort',
})
export class SortPipe implements PipeTransform {

  transform(value: string | null | undefined, ): string {

    if (!value) {
      return '';
    } else {
      let arrayValue: string[] = value.split(',');
      arrayValue.sort();
      return arrayValue.join(", ");
    }

  }
}
