import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
})
export class WelcomeComponent implements OnInit {
  constructor() {}
  test = async (payload: any) => {
    try {
      payload();
    } catch (err) {
      throw Error('ERROR');
    }
  };

  ngOnInit(): void {}
}
