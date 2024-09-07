import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { LazyComponent } from './lazy.component';
import { LazyGuard } from './lazy.guard';

const routes: Routes = [
  // { path: '', component: LazyComponent, canActivate: [LazyGuard] }
{ path: '', component: LazyComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LazyRoutingModule {
  // constructor(router: Router) {
  //   // Dynamically add more routes here
  //   router.config.push({
  //     path: 'dynamic',
  //     loadChildren: () => import('./dynamic/dynamic.module').then(m => m.DynamicModule)
  //   });
  // }
}


