import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ColorService {

  private colors = {
    car: 'Red',
    salon: 'White',
    wheels: 'Silver'
  };




  public getColors(): { wheels: string; car: string; salon: string } {
    return this.colors;
  }

  public setColors(car: string, salon: string, wheels: string) {
    this.colors.car = car;
    this.colors.salon = salon;
    this.colors.wheels = wheels;
  }
}
