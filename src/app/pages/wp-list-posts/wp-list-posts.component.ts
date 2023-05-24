import { Component, OnInit, Directive } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Directive()
@Component({
  selector: 'app-wp-list-posts',
  templateUrl: './wp-list-posts.component.html',
  styleUrls: ['./wp-list-posts.component.scss']
})
export class WpListPostsComponent implements OnInit {
  posts: Array<any>;
  title: string = 'Archive';

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    if (this.route.snapshot.data.title)
      this.title = this.route.snapshot.data.title;

    this.route.data.subscribe((data: { posts: Array<any> }) => {
      this.posts = data.posts;

      console.log('Posts', this.posts);
    });
  }
}
