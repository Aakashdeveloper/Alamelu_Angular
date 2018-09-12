import {Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'myUpper'
})

export class MyUpperPipe implements PipeTransform {
    transform(value: string, kindReq: string) {
        if (kindReq === 'upper') {
            value = value.toUpperCase();
        } else {
            value = value.toLowerCase();
        }
        return value;
    }
}
