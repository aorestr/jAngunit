import { Injectable } from '@angular/core';
import { Parser } from 'xml2js';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JunitParserService {

  // Path to the JUnit XML results file
  public readonly junit_xml: string = '/assets/junit_example.xml';

  private xml_object: object;
  private testsuites: Array<any>;

  /**
   * Constructor for the class. Reads the XML file
   * @param __http HttpClient object for handling these operations
   */
  constructor(private __http: HttpClient) { this.loadXML(this.junit_xml); }

  /**
   * Get the Junit XML file from its path and then parse it and save it in this.xml_object and this.testsuites
   * @param junit_xml Path to the JUnit XML results file
   */
  private loadXML(junit_xml: string) {
    this.__http.get(
      junit_xml, {  
        headers: new HttpHeaders()  
          .set('Content-Type', 'text/xml')  
          .append('Access-Control-Allow-Methods', 'GET')  
          .append('Access-Control-Allow-Origin', '*')  
          .append('Access-Control-Allow-Headers', "Access-Control-Allow-Headers, Access-Control-Allow-Origin, Access-Control-Request-Method"),  
        responseType: 'text'
      }
    ).subscribe(
      raw_xml => {
        this.__parseXML(raw_xml)
        .then(
          xml_object => {
            this.xml_object = xml_object;
            this.testsuites = xml_object.testsuites.testsuite;
          }
        ).catch(
          err => {
            this.xml_object = null;
            this.testsuites = null;
            console.error("There was an error when trying to read the XML file: ", err);
          }
        )
      }
    );
  }

  /**
   * Extract a Typescript object based on the JUnit document
   * @param raw_xml JUnit XML as a single string
   */
  private __parseXML(raw_xml: string): Promise<any> {
    let parser = new Parser( {trim: true, explicitArray: true} ),
      testsuites: object
    ;
    parser.parseString(raw_xml, function (err, result) { testsuites = result; });
    return new Promise(resolve => resolve(testsuites));  
  }

  public getXMLObject(): Observable<object> { return of(this.xml_object); }
  public getTestsuites(): Observable<Array<any>> { return of(this.testsuites); }

}
