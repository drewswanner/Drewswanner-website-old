import { Component, Inject } from '@angular/core';
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
  feed$: Observable<string>;
  title: string;
  description: string;

  constructor(
    private wp: WordpressService,
    @Inject(RollbarService) private rollbar: Rollbar
  ) {

    this.posts$ = this.wp.getPosts();
    this.feed$ = this.wp.getFeed();
    this.title = "DrewSwanner.com";
    this.description = "";

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

    this.posts$.forEach((res) => {
      console.log(res);
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