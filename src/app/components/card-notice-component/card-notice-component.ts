import { Component, Input, OnInit } from '@angular/core';

type TypeNotice = "success" | "info" | "error" | "warning"

@Component({
  selector: 'app-card-notice-component',
  imports: [],
  templateUrl: './card-notice-component.html',
  styleUrl: './card-notice-component.css',
})

export class CardNoticeComponent implements OnInit{
  @Input() typeNotice: TypeNotice = "info";
  @Input() textNotice: string = "";
  visibleComponent: boolean = true;

  ngOnInit(): void {
    setTimeout(() => {
      this.visibleComponent = false;
    }, 3000);
  }
}
