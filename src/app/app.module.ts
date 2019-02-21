import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { ArticleService } from './services/article.service';
import { ListArticlesComponent } from './components/list-articles/list-articles.component';
import { NewArticleComponent } from './components/new-article/new-article.component';
import { HomeComponent } from './components/home/home.component';
import { DetailsArticleComponent } from './components/details-article/details-article.component';


@NgModule({
  declarations: [
    AppComponent,
    ListArticlesComponent,
    NewArticleComponent,
    HomeComponent,
    DetailsArticleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [ArticleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
