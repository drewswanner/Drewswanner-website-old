import { Component, Inject, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import xml2js from 'xml2js';
import { WordpressService } from './services/wordpress.service';

import { RollbarService } from './rollbar';

import Rollbar from 'rollbar';

interface Page {
  pageName: string,
  pageID: number
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  // Wordpress observables
  posts$: Observable<any[]>;
  pages$: Observable<any[]>;

  feed$: Observable<string>;

  // Site Info
  title: string;
  description: string;
  listPages: Array<Page>;

  constructor(
    private wp: WordpressService,
    @Inject(RollbarService) private rollbar: Rollbar
  ) {

    // Define wordpress calls to service
    this.posts$ = this.wp.getPosts();
    this.pages$ = this.wp.getPages();
    this.feed$ = this.wp.getFeed();

    // Set Title and descriptions
    this.title = "DrewSwanner.com";
    this.description = "";

    // Available Pages
    this.listPages = new Array();
  }

  ngOnInit() {

    // storing this
    let curThis = this;

    // Parse Feed for Page details
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
      post.forEach((tab) => {
        curThis.listPages.push({
          pageName: tab.title.rendered,
          pageID: tab.id
        });
        //curThis.listPages.push(post[0].title.rendered);
      });

    });

    // rollbarInfo() {
    //     // Needs the rollbar object from the constructor.
    //     this.rollbar.info('angular test log');
    //   }

    // throwError() {
    //     // Does not need the rollbar object from the constructor,
    //     // and will still log to Rollbar.
    //     throw new Error('angular test error');
    //   }

  }


}