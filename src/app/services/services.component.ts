import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {

  selectedOption: string = 'addProperty';

  onOptionChange(event: any){
    this.selectedOption = (event.target as HTMLInputElement).value;
  }

}
