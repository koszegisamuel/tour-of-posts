import { Component, OnInit } from '@angular/core';
import { Article } from '../article';
import { ARTICLES } from '../mock-articles';
import { ArticleService } from '../article.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {
  selectedArticle?: Article;


  articles: Article[] = []

  constructor(private articleService: ArticleService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.getArticles()
  }

  onSelect(article: Article): void {
    this.selectedArticle = article;
    this.messageService.add(`The title of the selected article is ${article.title} and it was written by ${article.author}`);
  }
  getArticles(): void {
    this.articleService.getArticles()
        .subscribe(articles => this.articles = articles)
  }
}
