import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { WordpressComponent } from './wordpress/wordpress.component';

const routes: Routes = [
  // Here are the routes to the WordpressComponent
  {
    path: 'page/:id',
    component: WordpressComponent
  },
  {
    path: '',
    redirectTo: '/page',
    pathMatch: 'full'
  },
  //{ path: '**', redirectTo: '/home' },
];

@NgModule({
  imports: [RouterModule.forRoot(
    routes,
    {
      //enableTracing: true, // <-- debugging purposes only
      onSameUrlNavigation: 'reload'
    }
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
