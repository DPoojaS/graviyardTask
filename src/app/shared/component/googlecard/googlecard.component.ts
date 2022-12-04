import { Component, OnInit } from '@angular/core';
import { IGoogle } from '../../model/data';
import { DatabaseService } from '../../services/database.service';

@Component({
  selector: 'app-googlecard',
  templateUrl: './googlecard.component.html',
  styleUrls: ['./googlecard.component.scss']
})
export class GooglecardComponent implements OnInit {
  selectedCard : IGoogle | undefined;
  selectedName : string = 'Revolv'
  selectedLink: string = 'https://en.wikipedia.org/wiki/Google_Blog_Search'; 
  constructor(private databaseService : DatabaseService) { }

  ngOnInit(): void {
    this.selectedCard = this.databaseService.getSingleCard(this.selectedName);
    // this.selectedLink = this.sanitizer.bypassSecurityTrustResourceUrl('https://en.wikipedia.org/wiki/Google_Blog_Search');
    // this.safeUrl = this._sanitizer.bypassSecurityTrustResourceUrl()
    // this.selectedLink = this.
  }

}
