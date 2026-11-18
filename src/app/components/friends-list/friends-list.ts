import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-friends-list',
  imports: [FormsModule],
  templateUrl: './friends-list.html',
  styleUrl: './friends-list.css',
})
export class FriendsList {
  friends =[
    { name: 'Ahmed' ,email:'ahmed@esprit.tn'},
    { name: 'Ali' ,email:'ali@esprit.tn'},
  ]
}
