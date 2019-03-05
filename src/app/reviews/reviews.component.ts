import { Component, OnInit } from '@angular/core';
import { RequestsService } from '../providers/requests.service';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss'],
})
export class ReviewsPage implements OnInit {
isLoading : boolean;
reviews: any = [];

  constructor(private requests: RequestsService) { }

  ngOnInit() {
    this.isLoading = true;
    var route = "api/get/reviews";
    this.requests.get(route).subscribe(data => {
      this.reviews = data;
    }, error => {
      console.error("Ba fraierica, vezi ca nu s-or luat reviewurile din back-end");
    }, () => {
      this.isLoading = false;
    })
  }  

}
