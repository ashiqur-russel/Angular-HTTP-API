import { UserService } from './service/user.service';
import { Component, OnInit } from '@angular/core';
import { UserInterface } from './UserInterface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'json-fetch';

  private user: any = { 'id': 'oHLOrfV', 'age': 10 };

  constructor(private userService: UserService) {


  }


  onGetUsers(): void {
    this.userService.getUsers().subscribe(
      (response) => console.table(response),
      (error) => console.log(error),
      () => console.log('Done getting users'),
    );
  }

  onGetUser(): void {
    this.userService.getUser().subscribe(
      (response) => console.table(response),
      (error) => console.log(error),
      () => console.log('Done getting user'),
    );
  }


  onCreateUser(): void {
    this.userService.createUser(this.user).subscribe(
      (response) => console.log(response),
      (error) => console.log(error),
      () => console.log('Done creating user'),
    );
  }


  onUpdateUser(): void {
    this.userService.updateUser(this.user).subscribe(
      (response) => console.log(response),
      (error) => console.log(error),
      () => console.log('Done updating  user'),
    );
  }



  onPatchUser(): void {
    this.userService.patchUser(this.user).subscribe(
      (response) => console.log(response),
      (error) => console.log(error),
      () => console.log('Done Patching  user'),
    );
  }


  onDeleteUser(): void {
    this.userService.deleteUser('OeI9W2D').subscribe(
      (response) => console.log(response),
      (error) => console.log(error),
      () => console.log('Done Deleting  user'),
    );
  }


  ngOnInit(): void {
    /*   console.log('ngOnInit');
      this.http.get('http://localhost:9000/users').subscribe((users: UserInterface[]) => {
        console.log('res', users);
        this.users = users;
  
      }) */
    //this.onUpdateUser();
    //this.onPatchUser();

    this.onDeleteUser();
    this.onGetUsers();
    // this.onCreateUser();





  }

}
