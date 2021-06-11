import { Directive, Input } from '@angular/core';
import { NG_VALIDATORS, Validator, ValidationErrors, FormGroup } from '@angular/forms';

@Directive({
    selector: '[specSymbol]',
    providers: [{ provide: NG_VALIDATORS, useExisting: SpecSymbolDirective, multi: true }]
})
export class SpecSymbolDirective implements Validator {
    @Input('specSymbol') specSymbol: any;
    validate(formGroup: FormGroup): ValidationErrors {
        if(this.specSymbol == null || this.specSymbol == undefined || formGroup.controls['password'].errors) {
            return null;
        }
        let checkMas = ['<','>','&','»','«','-','_','—','‍;','/','.',',','+','=','`','|', '~', '!', '@', '#', '$', '%', '^', '*', '(', ')'];
        let value = formGroup.controls['password'].value;
        for (let index = 0; index < checkMas.length; index++) {
            console.log(value)
            if(value.indexOf(checkMas[index]) > -1)
            {
                return null;
            }
        }
        formGroup.controls['password'].setErrors({specSymbol: true});
    }
}