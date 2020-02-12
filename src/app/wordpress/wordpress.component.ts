import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { WordpressService } from '../services/wordpress.service';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-wordpress',
  templateUrl: './wordpress.component.html',
  styleUrls: ['./wordpress.component.scss']
})
export class WordpressComponent implements OnInit {

  // Observable for pages wordpress endpoint
  pages$: Observable<any[]>;

  // define content to display to page
  content: string;

  // which page should we load
  currentPage: string;

  constructor(
    private wp: WordpressService,
    private route: ActivatedRoute,
    private router: Router,
  ) {

    // Define wordpress calls to service
    this.pages$ = this.wp.getPages();

    // get currently sellected page
    this.currentPage = this.route.snapshot.paramMap.get('id') == null ? "2" : this.route.snapshot.paramMap.get('id'); // Default page

  }

  ngOnInit() {

    // Loop over the pages from wordpress api
    this.pages$.forEach((page) => {
      if (this.currentPage == page[0].id) {
        this.content = page[0].content.rendered;
        console.log(page[0].content.rendered);
      }
    });
  }

}
