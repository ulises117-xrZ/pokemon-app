import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent implements OnInit {
  @Input() direction: string = "";
  @Input() text: string = "";
  constructor(
    private route: Router
  ) {

  }
  ngOnInit(): void {
    setTimeout(() => {
      this.route.navigate([this.direction])
    }, 1000);
  }

}
