import { Component, OnInit } from '@angular/core';
import { JunitParserService } from "./junit-parser.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'jAngunit';
  public xml_object: any;
  public testsuites: Array<any>

  constructor(private junitParserService: JunitParserService) {}

  ngOnInit() {
    this.junitParserService.getXMLObject().subscribe(
      xml_object => {
        this.xml_object = this.junitParserService.parseXML(xml_object);
        this.testsuites = this.xml_object.testsuites.testsuite;
      }
    );
  }

}  