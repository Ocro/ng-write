import { Component, OnInit, OnDestroy } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { ActivatedRoute } from '@angular/router';

import { Article } from '../../models/article';
import { ArticleService } from '../../services/article.service';

@Component({
  selector: 'app-details-article',
  templateUrl: './details-article.component.html',
  styleUrls: ['./details-article.component.scss']
})
export class DetailsArticleComponent implements OnInit, OnDestroy {

  private subRouteParams: any;

  article: Observable<Article>;

  constructor(private route: ActivatedRoute,
              private articleService: ArticleService) { }

  ngOnInit() {
    this.subRouteParams = this.route.params.subscribe(params => {
       this.article = this.articleService.getArticle(params['id']);
    });
  }

  ngOnDestroy() {
    this.subRouteParams.unsubscribe();
  }

}
