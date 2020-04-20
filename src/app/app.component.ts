import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Smartphone } from './shared/smartphone';
import { SmartphoneService } from './shared/smartphone.service';
import { tap, debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  // tslint:disable-next-line:no-inferrable-types
  loading: boolean = false;
  smartphone: Smartphone[] = [];

  constructor(private smartphoneService: SmartphoneService) { }
  getSmartphones() {
    this.smartphoneService.getSmartphone()
      .subscribe(data => {
        this.smartphone = data;
        console.log(this.smartphone);
      });
  }

  ngOnInit(): void {
    this.getSmartphones();
  }
}
