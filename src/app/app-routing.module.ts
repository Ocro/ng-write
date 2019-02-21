import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { NewArticleComponent } from './components/new-article/new-article.component';
import { DetailsArticleComponent } from './components/details-article/details-article.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent,
    children: [
      {
        path: 'new-article',
        component: NewArticleComponent
      },
      {
        path: 'details-article/:id',
        component: DetailsArticleComponent
      }
    ] 
  },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}