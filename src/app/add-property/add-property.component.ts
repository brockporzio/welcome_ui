import { Component } from '@angular/core';
import { Property } from '../models/property.model';
import { PropertyService } from '../property.service';

@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css']
})
export class AddPropertyComponent {
  // constructor(private propertyService: PropertyService){}

  newProperty: Property = { 
    name: '',
    location: '',
    type: '',
    bedrooms: 0,
    image: ''
  };


  onSubmit() {
    console.log('New Property:', this.newProperty);
    // this.propertyService.addProperty(this.newProperty);
    this.resetForm();
  }

  resetForm() {
    this.newProperty = {
      name: '',
      location: '',
      type: '',
      bedrooms: 0,
      image: ''
    }; // Resetting the form fields after submission
  }
}
