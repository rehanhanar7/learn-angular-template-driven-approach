import { Component, ViewChild } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';

@Component({
  selector: 'app-sample-form',
  templateUrl: './sampleform.component.html',
  styles: [
    `
    input.ng-invalid.ng-touched{
      border: 1px solid red;
    }
    `,
  ],
})
export class SampleFormComponent {
  defaultage: number = 18;
  differentemailvariable: string = '';

  @ViewChild('f') testform: NgForm; // directly accessing ngform element
  @ViewChild('email') emailvariable: NgModel; // directly access ngModelControl Element

  /**
   * Default Submit Overridden
   */
  submitformdata(formdata: NgForm) {
    console.log('formdata', formdata); // passing ngform data throught submit method
    console.log('testform', this.testform); // passing ngform data through ViewChild method
  }

  /**
   * Set Name in the form element
   */
  setUserName() {
    // this.testform.setValue({}) -- used to set value for entire form
    this.testform.form.patchValue({ userdata: { username: 'test@test' } });
  }

  /**
   * clear entire form
   */
  clearForm() {
    this.testform.reset();
  }
}
