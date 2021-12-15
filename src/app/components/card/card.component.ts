import { ChangeDetectionStrategy, Component, ContentChild, Input } from '@angular/core';
import { CardFooterComponent } from '../card-footer/card-footer.component';
import { CardHeaderComponent } from '../card-header/card-header.component';

@Component({
  selector: 'iq-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardComponent {

  @Input()
  headingLevel: number = 2;

  @Input()
  heading!: string;

  @Input()
  headerLink!: string;

  @ContentChild(CardHeaderComponent)
  cardHeader!: CardHeaderComponent;

  @ContentChild(CardFooterComponent)
  cardFooter!: CardFooterComponent;

}
