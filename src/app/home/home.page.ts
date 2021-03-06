import { Component, OnInit } from '@angular/core';
import { RequestsService } from '../providers/requests.service';
import { NavController } from '@ionic/angular';
import { ReviewsPage } from '../reviews/reviews.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  reviews: any = [];
  isLoading: boolean;

  constructor(private requests: RequestsService, private navCtrl: NavController) {

  }

  click(page) {
    this.navCtrl.navigateRoot(page);
  }

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

