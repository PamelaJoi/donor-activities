import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.page.html',
  styleUrls: ['./activities.page.scss'],
})
export class ActivitiesPage implements OnInit {

  constructor() { }
  activities: any[] = [
    {
      "activity": "Mangrove Reforestation",
      "info": "As the risks facing our natural world increase, environmentalists are always looking for new ways to tackle issues such as deforestation, climate change and carbon emissions. Whilst many organisations such as The Word Forest Organisation are busy rallying volunteers to bang the drum for the environment, there is perhaps an unsung hero patiently waiting on the side-lines – the mangrove tree. Planting mangroves has been proven to help with environmental issues and is perhaps something more of us should get on board with, moving forward.",
      "image": 'https://thumbs.dreamstime.com/b/phetchaburi-thailand-june-thai-student-plant-young-tree-d-deep-mud-mangrove-reforestation-87330669.jpg'
    },

    {
      "activity": "Seminar Human Impact on River",
      "info": "Water is the origin of the river. Water for a country is like blood for humans and the river is the bloodstream. Rivers are the lifeblood of a country that is the nation’s precious asset, determining the survival of a nation’s culture. Rivers and water resources of rivers play an important role in water, ecological and environmental security. The protection of rivers is the protection of life for people, the existence and prosperity of the country.",
      "image": 'https://theyellowspot.com/wp-content/uploads/2019/07/corporate-training.jpg'
    },

    {
      "activity": "River Clean-Up Drive",
      "info": "The blue veins of our globe are rivers. However, plastic pollution is one of the main causes of the severe pollution that plagues many of the world's rivers and streams. We must eliminate plastic pollution before it enters our seas in order to reduce the quantity that cannot be collected or recycled from entering those waters. The best approaches to prevent plastic pollution from entering our ecosystem, in our opinion, are through educating people, changing businesses, and vigorously cleaning our waterways.",
      "image": 'https://img.huffingtonpost.com/asset/5b928e13200000390937b8b6.jpeg?ops=scalefit_970_noupscale'
    },
  ]

  ngOnInit() {
  }

}
