import { Component, ComponentRef, input, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { RouterModule } from '@angular/router';
// ------ Decrease the size of the bundle by removing unused imports ------
import type { BoxComponent } from 'remote/Box';
@Component({
  imports: [ RouterModule ],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'shell';

  //  ----- ViewChild to load the remote component -----
  @ViewChild('boxPlaceHolder', { read: ViewContainerRef})
  boxPlaceHolder!: ViewContainerRef;
  
  
  // ----- ComponentRef to store the reference of the loaded component -----
  private boxComponentRef: ComponentRef<BoxComponent> | null = null;
  

  // ----- Input property to pass data to the remote component -----
  ngOnInit(): void {
    this.loadRemotes();
  }
  
  // ----- Method to change the title of the remote component -----
  private changeTitle() {
    // ----- Array of random titles
    const randomTitles = [
      'Random Title 1',
      'Hello World!',
      'Dynamic Title',
      'Amazing Component',
      'Cool Stuff',
      'Angular Rocks',
      'Remote Component',
      'New Title Here'
    ];
    
    const selectedTitle = randomTitles[Math.floor(Math.random() * randomTitles.length)];
    if (this.boxComponentRef) {
      this.boxComponentRef.instance.title = selectedTitle;
    }
  }

  // ----- Method to load the remote component dynamically -----
  private async loadBox() {
    // Dynamically load the remote component
    const module = await import('remote/Box');
    this.boxComponentRef = this.boxPlaceHolder.createComponent(module.BoxComponent);

    // ----- Set the initial title of the remote component -----
    this.boxComponentRef.instance.title = 'Initial Title';
    this.boxComponentRef.instance.buttonClicked.subscribe(() => {
      this.changeTitle();
    })
  }
  
  // ----- Method to load the remote component dynamically -----
  private async loadRemotes(): Promise<void> {
    await this.loadBox();
  }
}