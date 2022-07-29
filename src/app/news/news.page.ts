import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {

  constructor() { }

  news: any[] = [
    {
      "word": "Comprehensive Development Plan for Calumpang River",
      "info": "The blue veins of our globe are rivers. However, plastic pollution is one of the main causes of the severe pollution that plagues many of the world's rivers and streams. We must eliminate plastic pollution before it enters our seas in order to reduce the quantity that cannot be collected or recycled from entering those waters. The best approaches to prevent plastic pollution from entering our ecosystem, in our opinion, are through educating people, changing businesses, and vigorously cleaning our waterways.",
      "image": 'https://img.huffingtonpost.com/asset/5b928e13200000390937b8b6.jpeg?ops=scalefit_970_noupscale'
    },

    {
      "word": "Coordination with one of the Upstream Municipality on River Rehabilitation Project",
      "info": "The blue veins of our globe are rivers. However, plastic pollution is one of the main causes of the severe pollution that plagues many of the world's rivers and streams. We must eliminate plastic pollution before it enters our seas in order to reduce the quantity that cannot be collected or recycled from entering those waters. The best approaches to prevent plastic pollution from entering our ecosystem, in our opinion, are through educating people, changing businesses, and vigorously cleaning our waterways.",
      "image": 'https://img.huffingtonpost.com/asset/5b928e13200000390937b8b6.jpeg?ops=scalefit_970_noupscale'
    },

    {
      "word": "Local Youth Development Council for a 3-year Comprehensive Development Plan",
      "info": "The blue veins of our globe are rivers. However, plastic pollution is one of the main causes of the severe pollution that plagues many of the world's rivers and streams. We must eliminate plastic pollution before it enters our seas in order to reduce the quantity that cannot be collected or recycled from entering those waters. The best approaches to prevent plastic pollution from entering our ecosystem, in our opinion, are through educating people, changing businesses, and vigorously cleaning our waterways.",
      "image": 'https://img.huffingtonpost.com/asset/5b928e13200000390937b8b6.jpeg?ops=scalefit_970_noupscaleG'
    },
  ]

  ngOnInit() {
  }

}
