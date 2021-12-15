import { AfterContentInit, Component, ContentChildren, Input, QueryList } from '@angular/core';
import { MagicHeadingComponent } from '../magic-heading/magic-heading.component';

@Component({
  selector: 'iq-magic-headers',
  templateUrl: './magic-headers.component.html',
  styleUrls: ['./magic-headers.component.scss'],
})
export class MagicHeadersComponent implements AfterContentInit {


  @Input()
  id!: string;

  @ContentChildren(MagicHeadersComponent)
  subSections!: QueryList<MagicHeadersComponent>;

  @ContentChildren(MagicHeadingComponent)
  headings!: QueryList<MagicHeadingComponent>;

  startLevel: number = 1;

  setLevel(level: number) {
    this.startLevel = level;
    this.updateChildren();
  }

  ngAfterContentInit(): void {
    this.updateChildren();
  }

  updateChildren(): void {
    // tell all nested sections what their start is
    this.subSections?.toArray().forEach((h: MagicHeadersComponent) => {
      h.setLevel(this.startLevel + 1);
    });

    // set the current level on all our headers
    this.headings?.toArray().forEach((h: MagicHeadingComponent) => {
      h.level = this.startLevel;
    });
  }

}
