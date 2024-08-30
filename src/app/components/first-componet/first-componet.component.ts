import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-componet',
  standalone: true,
  imports: [],
  templateUrl: './first-componet.component.html',
  styleUrl: './first-componet.component.css'
})
export class FirstComponetComponent implements OnInit{
  name = 'Ronaldo';

  constructor(){ }

  ngOnInit(): void{

  }

}
