import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'iq-card-footer',
  templateUrl: './card-footer.component.html',
  styleUrls: ['./card-footer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardFooterComponent {
}
