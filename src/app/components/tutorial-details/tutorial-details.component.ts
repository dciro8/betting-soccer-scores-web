import { Component, OnInit } from '@angular/core';
import { bettingSoccerService} from 'src/app/Shared/services/bettingSoccer.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-tutorial-details',
  templateUrl: './tutorial-details.component.html',
  styleUrls: ['./tutorial-details.component.css']
})
export class TutorialDetailsComponent implements OnInit {
 
  message = '';

  constructor(
    private productAllService: bettingSoccerService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.message = '';
  }
age = '';

}
