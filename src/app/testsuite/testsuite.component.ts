import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { MultiDataSet } from 'ng2-charts';

import { JunitParserService, Testsuite, TestsuiteProperties, Testcase } from "../junit-parser.service";
import { SlashToDashPipe } from "../slash-to-dash.pipe";

@Component({
  selector: 'app-testsuite',
  templateUrl: './testsuite.component.html',
  styleUrls: ['./testsuite.component.css']
})
export class TestsuiteComponent implements OnInit {

  public testsuite: TestsuiteProperties;
  public testcases: Array<Testcase>;
  public results: MultiDataSet;

  constructor(
    private activatedRoute: ActivatedRoute,
    private junitParserService: JunitParserService,
    private slashToDashPipe: SlashToDashPipe
    ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(
      paramMap => {
        let ts_package: string = paramMap.get('package');
        this.junitParserService.getXMLObject().subscribe(
          xml_object => {
            let ts = this.findTestsuite(
              this.junitParserService.parseXML(xml_object).testsuites.testsuite,
              ts_package
            );
            this.testsuite = ts.$;
            this.testcases = ts.testcase;
            this.results = [
              [
                this.testsuite.failures,
                this.testsuite.tests - this.testsuite.failures,
              ]
            ]
          }
        );
      }
    );
  }

  /**
   * Find the testsuite that belongs to a certain package
   * @param testsuites array of testsuites where to search
   * @param ts_package name of the package that the testsuite has tested
   */
  private findTestsuite(testsuites: Array<Testsuite>, ts_package: string): Testsuite {
    let testsuite: Testsuite = null;
    for (let ts of testsuites){
      if (
        this.slashToDashPipe.transform(ts.$.package) === ts_package
      ) { testsuite = ts; break; }
    }
    return testsuite;
  }

}
