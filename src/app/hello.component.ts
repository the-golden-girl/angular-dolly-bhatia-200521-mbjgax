import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'hello',
  templateUrl: './hello.component.html',
  styles: [
    `
      h1 {
        font-family: Lato;
      }
    `
  ]
})
export class HelloComponent implements OnInit {
  @Input() data: any;
  addForm;
  userId: number = 4;
  originalData;
  isMaleSelected: boolean = false;
  isFemaleSelected: boolean = false;
  searchValue: string; 

  ngOnInit() {
    this.originalData = new Object(this.data);
    this.initializeForm();
  }

  initializeForm() {
    this.addForm = new FormGroup({
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      email: new FormControl(''),
      gender: new FormControl('')
    });
  }

  onAdd() {
    let userInput = {
      id: this.userId + 1,
      first_name: this.addForm.value.firstName,
      last_name: this.addForm.value.lastName,
      email: this.addForm.value.email,
      gender: this.addForm.value.gender
    };
    this.data.push(userInput);
    this.initializeForm();
  }

  onCancel() {
    this.initializeForm();
  }

  onCheckboxSelection(value) {
    if (value === 'Male') {
      this.isMaleSelected = this.isMaleSelected === true ? false : true;
    } else {
      this.isFemaleSelected = this.isFemaleSelected === true ? false : true;
    }
    if (this.isMaleSelected && this.isFemaleSelected) {
      this.data = this.originalData;
    } else if (this.isMaleSelected) {
      this.data = this.data.filter(obj => {
        return obj.gender === 'Male';
      });
    } else if (this.isFemaleSelected) {
      this.data = this.data.filter(obj => {
        return obj.gender === 'Female';
      });
    } else {
      this.data = this.originalData;
    }
  }

  onSearch() {
    console.log(this.searchValue);
    if (this.searchValue && this.searchValue.length > 0) {
      this.data = this.data.filter(obj => {
        return (
          obj.first_name.includes(this.searchValue) ||
          obj.last_name.includes(this.searchValue) ||
          obj.email.includes(this.searchValue)
        );
      });
    } else {
      this.data = this.originalData;
    }
  }
}
