import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'iq-magic-heading',
  templateUrl: './magic-heading.component.html',
  styleUrls: ['./magic-heading.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MagicHeadingComponent {

  @Input()
  level: number = 1;
}
