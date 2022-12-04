import { Component, OnInit } from '@angular/core';
import { IGoogle } from '../../model/data';
import { DatabaseService } from '../../services/database.service';

@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.scss']
})
export class DashbordComponent implements OnInit {
  googleCardArr : IGoogle[]  = []
  constructor(private databaseService : DatabaseService) { }

  ngOnInit(): void {
    this.googleCardArr = this.databaseService.getAllCards()
  }

}
