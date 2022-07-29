import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faqs',
  templateUrl: './faqs.page.html',
  styleUrls: ['./faqs.page.scss'],
})
export class FaqsPage implements OnInit {

  constructor() { }
  faqs: any[] = [
    {
      "question": "River Clean-Up",
      "answer": "The blue veins of our globe are rivers. However, plastic pollution is one of the main causes of the severe pollution that plagues many of the world's rivers and streams. We must eliminate plastic pollution before it enters our seas in order to reduce the quantity that cannot be collected or recycled from entering those waters. The best approaches to prevent plastic pollution from entering our ecosystem, in our opinion, are through educating people, changing businesses, and vigorously cleaning our waterways.",
    },

    {
      "question": "River Clean-Up",
      "answer": "The blue veins of our globe are rivers. However, plastic pollution is one of the main causes of the severe pollution that plagues many of the world's rivers and streams. We must eliminate plastic pollution before it enters our seas in order to reduce the quantity that cannot be collected or recycled from entering those waters. The best approaches to prevent plastic pollution from entering our ecosystem, in our opinion, are through educating people, changing businesses, and vigorously cleaning our waterways.",
    },

    {
      "aquestion": "River Clean-Up",
      "answer": "The blue veins of our globe are rivers. However, plastic pollution is one of the main causes of the severe pollution that plagues many of the world's rivers and streams. We must eliminate plastic pollution before it enters our seas in order to reduce the quantity that cannot be collected or recycled from entering those waters. The best approaches to prevent plastic pollution from entering our ecosystem, in our opinion, are through educating people, changing businesses, and vigorously cleaning our waterways.",
    },
 ]



  ngOnInit() {
  }

}
