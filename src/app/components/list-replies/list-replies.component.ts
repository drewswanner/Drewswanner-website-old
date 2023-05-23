import { Component, OnInit, Input, Directive } from '@angular/core';

@Directive()
@Component({
  selector: 'list-replies',
  templateUrl: './list-replies.component.html',
  styleUrls: ['./list-replies.component.scss']
})
export class ListRepliesComponent implements OnInit {
  @Input() replies: any;
  constructor() {}

  ngOnInit() {}
}
