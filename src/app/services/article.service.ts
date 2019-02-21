import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/delay';

import { Globals } from '../globals';

import { Article } from '../models/article';

@Injectable()
export class ArticleService {

  constructor(private http: HttpClient) { }

  getArticle(id: number): Observable<Article> {
    return this.http.get<Article>(`${Globals.API_LINK}/articles/${id}`);
  }

  getAllArticles(): Observable<Article[]> {
    return this.http.get<Article[]>(`${Globals.API_LINK}/articles`)/*.delay(2000)*/;
  }

  saveArticle(article: Article) {
    
    console.log(this.http.post(`${Globals.API_LINK}/articles`, article).subscribe(te => console.log(te)));
  }

}
