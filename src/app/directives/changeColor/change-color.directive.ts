import {Directive, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[appChangeColor]'
})
export class ChangeColorDirective {


    @HostBinding('style.color') myColor: string;

    @HostListener('click', ['$event']) changeColor(event) {
        this.myColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    }

  constructor() { }

}
