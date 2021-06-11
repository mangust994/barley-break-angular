import { Directive, Input } from '@angular/core';
import { NG_VALIDATORS, Validator, ValidationErrors, FormGroup } from '@angular/forms';

@Directive({
    selector: '[upperReg]',
    providers: [{ provide: NG_VALIDATORS, useExisting: UpperRegDirective, multi: true }]
})
export class UpperRegDirective implements Validator {
    @Input('upperReg') upperReg: any;
    validate(formGroup: FormGroup): ValidationErrors {
        if(this.upperReg == null || this.upperReg == undefined || formGroup.controls['password'].errors) {
            return null;
        }
        let checkMas = ['Q','W','E','R','T','Y','U','I','‍O','P','A','S','D','F','G','H', 'J','K', 'L','Z', 'X','C', 'V','B', 'N','M'];
        let value = formGroup.controls['password'].value;
        for (let index = 0; index < checkMas.length; index++) {
            if(value.indexOf(checkMas[index]) > -1)
            {
                return null;
            }
        }
        formGroup.controls['password'].setErrors({upperReg: true});
    }
}