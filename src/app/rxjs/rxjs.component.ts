import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.scss'],
})
export class RxjsComponent {
  agents: Observable<string>;

  constructor() {}

  ngOnInit(): void {
    this.agents = new Observable((observer) => {
      try {
        observer.next('Emma');
        observer.next('Emm');
      } catch (error) {
        observer.error(error);
      }
    });

    this.agents.subscribe((data) => {
      console.log(data);
    });
  }
}
