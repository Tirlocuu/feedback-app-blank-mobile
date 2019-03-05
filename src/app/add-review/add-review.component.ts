import { Component, OnInit } from '@angular/core';
import { RequestsService } from '../providers/requests.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-add-review',
  templateUrl: './add-review.component.html',
  styleUrls: ['./add-review.component.scss'],
})
export class AddReviewPage {
  review: any = {};
  stars: any = [ 1, 2, 3, 4, 5 ];
  constructor(private requests: RequestsService,
              private navCtrl: NavController) { 

  }

  addReview() {
    var route = "api/post/review";
    this.requests.post(route, this.review).subscribe((data) => {

    }, error => {

    }, () => {
      this.navCtrl.navigateRoot('reviews');
    })
  }

  setRating(value) {
    this.review.rate = value;
  }
}
