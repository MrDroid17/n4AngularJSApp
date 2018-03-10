import { Component, OnInit } from '@angular/core';
import { DataService} from '../../services/data.service';
import { Title } from '@angular/platform-browser';

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
  posts: Posts[];
  isEdit: boolean = false;
  
  /** constructor() and ngOnInit()
   * these two idiots runs together
   */
  constructor(private dataService: DataService) { 
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
    this.hobbies= ['Coding','Watching movies', 'Reading books'];
    this.dataService.getPosts().subscribe((posts) => {
      //console.log(posts);
      this.posts = posts;
    });
  
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

  deleteHobby(hobby){
    for(let i=0; i< this.hobbies.length; i++){
      if(this.hobbies[i] == hobby){
        this.hobbies.splice(i, 1);
      }
    }
  }

  toggleEditUser(){
    this.isEdit = !this.isEdit;
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

interface Posts {
  id: number,
  title: string,
  body: string,
  userId: number
}
