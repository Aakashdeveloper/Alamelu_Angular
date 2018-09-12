import { Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'addValue'
})

export class AddValuePipe implements PipeTransform {
    transform(value: number) {
        if (value < 20) {
            value = value + 10;
        }
        return value;
    }
}
