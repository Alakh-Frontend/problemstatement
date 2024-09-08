import { Injector, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyRoutingModule } from './lazy-routing.module';
import { LazyComponent } from './lazy.component';
import {MatCardModule} from '@angular/material/card';


@NgModule({
  declarations: [
    LazyComponent
  ],
  imports: [
    CommonModule,
    LazyRoutingModule,
    MatCardModule
  ]
})
export class LazyModule {}