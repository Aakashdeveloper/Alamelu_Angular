import { Pipe, PipeTransform} from '@angular/core';
import { IProduct } from './product.model';


@Pipe({
    name: 'filterProduct'
})

export class FilterProduct implements PipeTransform {
    transform(value: IProduct[], userInput: string) {
        userInput = userInput ? userInput.toLowerCase() : null;
        return userInput ? value.filter((product) =>
            product.productName.toLowerCase().indexOf(userInput) !== -1) : value;
    }
}
