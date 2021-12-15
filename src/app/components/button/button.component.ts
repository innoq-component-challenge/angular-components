import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'iq-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonComponent {

  @Input()
  cta: boolean = false;

  @Input()
  additional: string = '';

  get classes(): string {
    return `btn ${this.cta ? 'btn-primary': 'btn-secondary'} ${this.additional}`;
  }
}
