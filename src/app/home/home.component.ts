import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  categories = [
    {
      name: 'beaches',
      img: 'assets/icon1.png',
    },
    {
      name: 'deserts',
      img: 'assets/image16.png',
    },
    {
      name: 'mountains',
      img: 'assets/image3.png',
    },
    {
      name: 'iconic cities ',
      img: 'assets/image13.png',
    },
    {
      name: 'Housebats',
      img: 'assets/image17.png',
    },
    {
      name: 'countryside',
      img: 'assets/image10.png',
    },
    {
      name: 'camping',
      img: 'assets/image5.png',
    },
    {
      name: 'Casties',
      img: 'assets/image12.png',
    },
    {
      name: 'Skiiing',
      img: 'assets/image15.png',
    },
    {
      name: 'Tropical',
      img: 'assets/image8.png',
    },
  ];

  destinations = [
    { image: 'assets/bali.svg', name: 'Bali,indonesiya' },
    { image: 'assets/kerry.svg', name: 'Kerry,ireland' },
    { image: 'assets/sydney.svg', name: 'Sydney,Australia' },
    { image: 'assets/paris.svg', name: 'Paris,France' },
  ];
  property = [
    {
      image: 'assets/pro1.svg',
      name: 'Hotels',
    },
    {
      image: 'assets/pro2.svg',
      name: 'Apartments',
    },
    {
      image: 'assets/pro3.svg',
      name: 'Resorts',
    },
    {
      image: 'assets/pro4.svg',
      name: 'Villas',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
