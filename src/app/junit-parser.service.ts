import { Injectable } from '@angular/core';
import { Parser } from 'xml2js';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JunitParserService {

  // Path to the JUnit XML results file
  public readonly junit_xml: string = '/assets/junit_example.xml';

  /**
   * Constructor for the class. Reads the XML file
   * @param http HttpClient object for handling these operations
   */
  constructor(private http: HttpClient) { }

  /**
   * Get the Junit XML file from its path and export it as an Observable with a string of the file
   * @param junit_xml Path to the JUnit XML results file
   */
  private loadXML(junit_xml: string): any {
    return this.http.get(junit_xml, {  
      headers: new HttpHeaders()  
        .set('Content-Type', 'text/xml')  
        .append('Access-Control-Allow-Methods', 'GET')  
        .append('Access-Control-Allow-Origin', '*')  
        .append('Access-Control-Allow-Headers', "Access-Control-Allow-Headers, Access-Control-Allow-Origin, Access-Control-Request-Method"),
      responseType: 'text'
      }
    );
  }

  /**
   * Extract a Typescript object based on the JUnit document
   * @param raw_xml JUnit XML as a single string
   */
  public parseXML(raw_xml: string): JUnitXML {
    let parser = new Parser( {trim: true, explicitArray: true} ), testsuites: JUnitXML;
    parser.parseString(raw_xml, function (err, result) { testsuites = result; });
    return testsuites;
  }

  public getXMLObject() { return this.loadXML(this.junit_xml); }

}

export interface JUnitXML {
  testsuites: Testsuites;
}

export interface Testsuites {
  $: {
    "duration": number
  };
  testsuite: Array<Testsuite>;
}

export interface Testsuite {
  $: TestsuiteProperties;
  testcase: Array<Testcase>;
}

export interface TestsuiteProperties {
  failures: number;
  name: string;
  package: string;
  tests: number;
  time: number;
}

export interface Testcase {
  $: {
    "classname": string,
    "name": string,
    "time": number
  };
}
