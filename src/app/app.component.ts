import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private router: Router){}

  public navigatePage1(): void{
    this.router.navigate(['/page1']);
  }

  public navigatePage2(): void{
    this.router.navigate(['/page2']);
  }

  public navigatePage3(): void{
    this.router.navigate(['/page3']);
  }
}
