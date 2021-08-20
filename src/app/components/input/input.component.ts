import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, ControlContainer } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent implements OnInit {
  @Input() label: string;
  @Input() value: string;
  @Input() error: string | null;
  @Input() customError: string;
  @Input() class: string;
  @Input() type: string;
  @Input() disabled: boolean;
  @Input() controlName: string;
  warning: boolean;

  form: FormGroup;

  @Input() formGroupParent: FormGroup | null;
  @Input() formGroupControlName: string | null;
  // FormControl store validators
  control: FormControl;

  constructor(public controlContainer: ControlContainer) {}

  ngOnInit(): void {
    this.form = <FormGroup>this.controlContainer.control;
  }
}
