import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BadgeComponent } from './badge/badge.component';
import { ButtonComponent } from './button/button.component';
import { CardComponent } from './card/card.component';
import { CardHeaderComponent } from './card-header/card-header.component';
import { CardFooterComponent } from './card-footer/card-footer.component';
import { FieldGroupComponent } from './field-group/field-group.component';
import { ListComponent } from './list/list.component';
import { MagicHeadersComponent } from './magic-headers/magic-headers.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MagicHeadingComponent } from './magic-heading/magic-heading.component';

@NgModule({
  declarations: [
    BadgeComponent,
    ButtonComponent,
    CardComponent,
    CardHeaderComponent,
    CardFooterComponent,
    FieldGroupComponent,
    ListComponent,
    MagicHeadersComponent,
    MagicHeadingComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  exports: [
    BadgeComponent,
    ButtonComponent,
    CardComponent,
    CardHeaderComponent,
    CardFooterComponent,
    FieldGroupComponent,
    ListComponent,
    MagicHeadersComponent,
    MagicHeadingComponent
  ]
})
export class ComponentsModule { }
