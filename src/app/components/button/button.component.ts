import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  @Input() value: string;
  @Input() size: string;
  @Input() kind: string;
  @Input() disabled: boolean;

  constructor() {
    this.size = 'medium';
    this.value = '';
    this.kind = 'default';
    this.disabled = false;
  }

  ngOnInit(): void {}
}
