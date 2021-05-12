import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hera-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent implements OnInit {
  categories: string[] = [
    'Masáž',
    'Kaderníctvo',
    'Barber',
    'Manikúra',
    'Welness',
    '...',
  ];

  constructor() {}

  ngOnInit(): void {}
}
