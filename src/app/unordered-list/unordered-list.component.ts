import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-unordered-list',
  templateUrl: './unordered-list.component.html',
  styleUrls: ['./unordered-list.component.css']
})
export class UnorderedListComponent implements OnInit {

  list:string[] = [
    "Scunthorpe General Hospital",
    "Penistone Community Church",
    "Lightwater Country Park",
    "Jimmy Clitheroe",
    "Horniman Museum",
    "shitake mushrooms",
    "RomansInSussex.co.uk",
    "http://www.cum.qc.ca/",
    "Craig Cockburn, Software Specialist",
    "Linda Callahan",
    "Dr. Herman I. Libshitz",
    "magna cum laude",
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
