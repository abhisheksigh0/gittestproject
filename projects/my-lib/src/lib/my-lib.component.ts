import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-my-lib',
  template: `
  <div><h1>Lib Page</h1></div>
  <div>
      <label for="uname">Username:</label>
      <input type="text" id="text" placeholder="Username" name="name" required style="margin: 10px;">
      <br>
      <label for="password">Password:</label>
      <input type="password" placeholder="Enter Your Password" name="password" required style="margin: 10px;">
      <br>
      <button type="submit">Login</button>
  </div>
  `,
  styles: [
  ]
})
export class MyLibComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
