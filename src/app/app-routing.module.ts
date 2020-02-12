import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { WordpressComponent } from './wordpress/wordpress.component';

const routes: Routes = [
  // Here are the routes to the WordpressComponent
  {
    path: 'home/:id',
    component: WordpressComponent
  },
  {
    path: 'home',
    component: WordpressComponent
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  { path: '**', redirectTo: '/home' },
];

@NgModule({
  imports: [RouterModule.forRoot(
    routes,
    { enableTracing: true } // <-- debugging purposes only
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
