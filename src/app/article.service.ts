import { Injectable } from '@angular/core';
import { Article } from './article';
import { ARTICLES } from './mock-articles';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(private messageService: MessageService) { }

  getArticles(): Observable<Article[]> {
    const articles = of (ARTICLES)
    this.messageService.add("ArticleService: fetched articles")
    return articles
  }
}
