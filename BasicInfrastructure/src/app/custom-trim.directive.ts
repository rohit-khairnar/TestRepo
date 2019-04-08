import { Directive } from '@angular/core';
import { Validator, AbstractControl, NG_VALIDATORS } from '@angular/forms';
@Directive({
  selector: '[appCustomTrim]',
  // providers: [
  //   {
  //     provide: NG_VALIDATORS,
  //     useExisting: CustomTrimDirective,
  //     multi: true
  //   }]
})
export class CustomTrimDirective {
/*implements Validator {
  validate(control: AbstractControl): { [key: string]: any } | null {
   
    var change=false;
    var  regexp = new RegExp(/^\s/g)
    if(regexp.test(control.value)){
      var value =control.value as string;
      control.setValue(value.trim());
      console.log("Value", control.value);
    }
    return control.value != 'rohit' ? { 'isError': true } : null;
  }*/

}
