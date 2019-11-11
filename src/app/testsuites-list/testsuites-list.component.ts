import { Component, OnInit } from '@angular/core';

import { JunitParserService, JUnitXML, Testsuite } from "../junit-parser.service";

@Component({
  selector: 'app-testsuites-list',
  templateUrl: './testsuites-list.component.html',
  styleUrls: ['./testsuites-list.component.css']
})
export class TestsuitesListComponent implements OnInit {

  public xml_object: JUnitXML;
  public testsuites: Array<Testsuite>

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
