import { Component, OnInit } from '@angular/core';
import {ColorService} from '../../serveces/color/color.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss']
})
export class CarComponent implements OnInit {

  name: string;
  model: string;
  speed: number;
  color;
  options: string[];
  isEdit: boolean;

  constructor(private colorService: ColorService) {
  }

  ngOnInit() {
    this.name = 'Audi';
    this.model = 'RS8';
    this.speed = 200;
    this.colorService.setColors('Red', 'White', 'Silver');
    this.color = this.colorService.getColors();
    this.options = ['ABS', 'Parking system'];
    this.isEdit = false;
  }

  carSelect(carName: string) {
    if (carName === 'bmw') {
      this.name = 'BMW';
      this.model = 'M5';
      this.speed = 280;
      this.colorService.setColors('White', 'Silver', 'Yellow');
      this.options = ['ABS', 'Parking system'];
    } else if (carName === 'audi') {
      this.name = 'Audi';
      this.model = 'RS8';
      this.speed = 200;
      this.colorService.setColors('Red', 'White', 'Silver');
      this.options = ['ABS', 'Parking system'];
    } else {
      this.name = 'Mercedes';
      this.model = 'c180';
      this.speed = 180;
      this.colorService.setColors('DarkBlue', 'White', 'Purple');
      this.options = ['ABS', 'Parking system'];
    }
  }

  addOption(option: string): boolean {
      if (option) {
          this.options.unshift(option);
          return false;
      }
      return true;
  }

  deleteOption(option: string) {
    const index: number = this.options.indexOf(option);
    if (index > -1) {
      this.options.splice(index, 1);
    }
  }

  showEdit() {
    this.isEdit = !this.isEdit;
  }
}
