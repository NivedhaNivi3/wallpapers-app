import { Component, OnInit } from '@angular/core';
import { Subject, Subscription,of } from 'rxjs';

@Component({
  selector: 'app-rxjx',
  templateUrl: './rxjx.component.html',
  styleUrls: ['./rxjx.component.css']
})
export class RxjxComponent implements OnInit {
  count = 0;
  sub = new Subject;
  data:any
 array =[1,2,3,4,5,6,7,8,9]
  constructor() { }

  ngOnInit(): void {

   
    setInterval(() => {
      this.sub.next(this.count++)
    }, 1000)
  }

  start() {
    this.data = this.sub.subscribe((data) => {
   //   console.log('subscribe',data.pipe(take(2)))
    })
    this.array.reverse()
    console.log('reverse',this.array)
  }
  stop() {
    this.data.complete()
  }

  of(){
    const a = of(1,2,3,4,5,6)
    let b = a.subscribe((data)=>{ 
      console.log('of',data)
    })
  }
}
