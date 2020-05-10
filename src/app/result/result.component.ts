import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  constructor(private ds:DataService) { }
  predicted_data
  ngOnInit(): void {
    this.ds.getPrediction().subscribe((res)=>{
      this.predicted_data=res["data"]
      console.log(this.predicted_data);
    })
  }

}
