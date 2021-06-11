import { Directive, Input } from '@angular/core';
import { NG_VALIDATORS, Validator, ValidationErrors, FormGroup } from '@angular/forms';

@Directive({
    selector: '[numberCheck]',
    providers: [{ provide: NG_VALIDATORS, useExisting: NumberCheckDirective, multi: true }]
})
export class NumberCheckDirective implements Validator {
    @Input('numberCheck') numberCheck: any;
    validate(formGroup: FormGroup): ValidationErrors {
        if(this.numberCheck == null || this.numberCheck == undefined || formGroup.controls['password'].errors) {
            return null;
        }
        let checkMas = ['1','2','3','4','5','6','7','8','‍9','0'];
        let value = formGroup.controls['password'].value;
        for (let index = 0; index < checkMas.length; index++) {
            if(value.indexOf(checkMas[index]) > -1)
            {
                return null;
            }
        }
        formGroup.controls['password'].setErrors({numberCheck: true});
    }
}