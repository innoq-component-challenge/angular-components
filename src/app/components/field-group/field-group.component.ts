import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'iq-field-group',
  templateUrl: './field-group.component.html',
  styleUrls: ['./field-group.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FieldGroupComponent {

  @Input()
  label!: string;

  @Input()
  inputId!: string;

  @Input()
  name!: string;

  @Input()
  type!: string;

  @Input()
  value!: string;

  @Input()
  error!: string;

  @Input()
  form!: FormControl;

}
