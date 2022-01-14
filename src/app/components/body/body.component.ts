import {Component,ViewChild,ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  amount = 0;
  result = "";
  @ViewChild('check1') check1!: ElementRef;
  @ViewChild('check2') check2!: ElementRef;
  @ViewChild('nameFigure') nameFigure!: ElementRef;

  constructor() {
   }

  ngOnInit(): void {
  }

  onCheck1(){
    this.check2.nativeElement.checked = false;
    this.nameFigure.nativeElement.innerText = "CUADRADO";
  }
  onCheck2(){
    this.check1.nativeElement.checked = false;
    this.nameFigure.nativeElement.innerText = "CIRCULO";
  }

  calcularPerimetro(){
    if (this.check1.nativeElement.checked) {
      this.result = `Perimetro del Cuadrado: ${this.amount * 4}`;
    }else if (this.check2.nativeElement.checked) {
      this.result = `Perimetro del Circulo: ${Math.round((Math.PI* 2)*this.amount)}`
    }
  }
calcularArea(){
    if (this.check1.nativeElement.checked) {
      this.result = `Area del Cuadrado: ${this.amount * this.amount}`;
    }else if (this.check2.nativeElement.checked) {
      this.result = `Area del Circulo: ${Math.round(Math.PI * Math.pow(this.amount,2))}`;
    }
  }


}
