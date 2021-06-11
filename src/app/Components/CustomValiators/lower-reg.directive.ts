import { Directive, Input } from '@angular/core';
import { NG_VALIDATORS, Validator, ValidationErrors, FormGroup } from '@angular/forms';

@Directive({
    selector: '[lowerReg]',
    providers: [{ provide: NG_VALIDATORS, useExisting: LowerRegDirective, multi: true }]
})
export class LowerRegDirective implements Validator {
    @Input('lowerReg') lowerReg: any;
    validate(formGroup: FormGroup): ValidationErrors {
        if(this.lowerReg == null || this.lowerReg == undefined || formGroup.controls['password'].errors) {
            return null;
        }
        let checkMas = ['q','w','e','r','t','y','u','i','‍o','p','a','s','d','f','g','h', 'j','k', 'l','z', 'x','c', 'v','b', 'n','m'];
        let value = formGroup.controls['password'].value;
        for (let index = 0; index < checkMas.length; index++) {
            if(value.indexOf(checkMas[index]) > -1)
            {
                return null;
            }
        }
        formGroup.controls['password'].setErrors({lowerReg: true});
    }
}