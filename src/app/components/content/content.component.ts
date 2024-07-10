import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
})
export class ContentComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  validatePhoneNumber(event: any) {
    const input = event.target;
    const value = input.value;

    input.value = value.replace(/[^0-9]/g, '');
  }
}
