import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'iq-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListComponent implements OnInit {

  @Input()
  list: Record<string, any> = {};

  @Input()
  ratio: string = '1:3';

  classDD: string = 'col-sm-6';
  classDT: string = 'col-sm-6';

  get keys(): string[] {
    return Object.keys(this.list);
  }

  ngOnInit(): void {
      const parts: number[] = this.ratio.split(':').map(number => Number.parseInt(number));
      const sum = parts[0] + parts[1];
      const fraction = Math.floor(12 / sum);
      this.classDD = `col-sm-${parts[0] * fraction}`;
      this.classDT = `col-sm-${parts[1] * fraction}`;
  }

}
