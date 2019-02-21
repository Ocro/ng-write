import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { Article } from '../../models/article';
import { ArticleService } from '../../services/article.service';

@Component({
  selector: 'app-list-articles',
  templateUrl: './list-articles.component.html',
  styleUrls: ['./list-articles.component.scss']
})
export class ListArticlesComponent implements OnInit {

  articles: Observable<Article[]>;
  loading: Boolean;

  constructor(private articleService: ArticleService) { }

  ngOnInit() {
    this.articles = this.articleService.getAllArticles();
  }

}
