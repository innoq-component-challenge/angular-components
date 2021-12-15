import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'iq-badge',
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BadgeComponent  {

  @Input()
  type!: string;

  TYPES = {
    danger: "bg-danger",
    default: "bg-secondary"
  };

  get classes() {
    return {
      'badge': true,
      'bg-danger': this.type === 'danger',
      'bg-secondary': this.type !== 'danger'
    }
  }

}
