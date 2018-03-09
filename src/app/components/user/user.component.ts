import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  name: string;
  profession: string;
  experience: string;
  age: number;
  address: Address;
  hobbies: string[];
  

  /** constructor() and ngOnInit()
   * these two idiots runs together
   */
  constructor() { 
    console.log('constructor running...')
  }

  ngOnInit() {
    console.log('ngOnInit() is  running...')
    this.name = 'Sobhit Kumar'
    this.profession = 'MEAN Stack developer'
    this.experience = 'Not Much' 
    this.age = 25
    this.address ={
      house_no: '2160/13,',
      street: ' Patil Nagar, Balewadi',
      city: ' Pune,',
      state: ' Maharashtra-',
      pin: 411008,
      country: ' India'
    }
    this.hobbies= ['Coding','Watching movies', 'Reading books']
  }
  onClick(){
    //console.log('Hello')
    /***
     * can also manupulate events
     */
    this.name= 'Kumar Sobhit';
    this.hobbies.push('Listening to classisal songs');
  }

  addHobby(hobby){
    console.log(hobby);
    this.hobbies.unshift(hobby);
    return false;
  }
}

interface Address  {
  house_no: string,
  street: string,
  city: string,
  state: string,
  pin: number,
  country: string
}
