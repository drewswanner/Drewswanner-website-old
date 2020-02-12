import { Component, Inject, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import xml2js from 'xml2js';
import { WordpressService } from './services/wordpress.service';

import { RollbarService } from './rollbar';

import * as Rollbar from 'rollbar'; // When using Typescript < 3.6.0.
// `import Rollbar from 'rollbar';` is the required syntax for Typescript 3.6.x.
// However, it will only work when setting either `allowSyntheticDefaultImports` 
// or `esModuleInterop` in your Typescript options.

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  posts$: Observable<any[]>;
  pages$: Observable<any[]>;
  feed$: Observable<string>;
  title: string;
  description: string;
  listPages: Array<string>;

  constructor(
    private wp: WordpressService,
    @Inject(RollbarService) private rollbar: Rollbar
  ) {

    // Define wordpress calls to service
    this.posts$ = this.wp.getPosts();
    this.pages$ = this.wp.getPages();
    this.feed$ = this.wp.getFeed();
    this.title = "DrewSwanner.com";
    this.description = "";

    this.listPages = new Array();
  }

  ngOnInit() {

    let curThis = this;

    this.feed$.forEach((feed) => {
      let parser = new xml2js.Parser(
        {
          trim: true,
          explicitArray: true
        });
      parser.parseString(feed, function (err, result) {
        curThis.title = result.rss.channel[0].title[0];
        curThis.description = result.rss.channel[0].description[0];
      });
    });

    this.pages$.forEach((post) => {
      //curThis.listPages.push(post[0].slug);
      curThis.listPages.push(post[0].title.rendered);
    });


  }

  rollbarInfo() {
    // Needs the rollbar object from the constructor.
    this.rollbar.info('angular test log');
  }

  throwError() {
    // Does not need the rollbar object from the constructor,
    // and will still log to Rollbar.
    throw new Error('angular test error');
  }

}