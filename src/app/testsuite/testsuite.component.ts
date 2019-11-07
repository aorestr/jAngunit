import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-testsuite',
  templateUrl: './testsuite.component.html',
  styleUrls: ['./testsuite.component.css']
})
export class TestsuiteComponent implements OnInit {

  @Input() testsuite;

  constructor() { }

  ngOnInit() {
  }

}
