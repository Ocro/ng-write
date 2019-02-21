import { Component, OnInit } from '@angular/core';

import { Article } from '../../models/article';
import { ArticleService } from '../../services/article.service';

@Component({
  selector: 'app-new-article',
  templateUrl: './new-article.component.html',
  styleUrls: ['./new-article.component.scss']
})
export class NewArticleComponent implements OnInit {

  constructor(private articleService: ArticleService) { }

  ngOnInit() {
  }

  saveArticle() {
    this.articleService.saveArticle(new Article(0, "Test titre", "Test content", "2018-03-28T17:15:28+02:00"));
  }

}
