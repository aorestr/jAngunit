import { Component } from '@angular/core';  
import { Parser } from 'xml2js';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'jAngunit';
  public xmlItems: any;
  constructor(private _http: HttpClient) { this.loadXML(); }

  /**
   * 
   */
  loadXML() {
    this._http.get('/assets/junit_example.xml', {  
        headers: new HttpHeaders()  
          .set('Content-Type', 'text/xml')  
          .append('Access-Control-Allow-Methods', 'GET')  
          .append('Access-Control-Allow-Origin', '*')  
          .append('Access-Control-Allow-Headers', "Access-Control-Allow-Headers, Access-Control-Allow-Origin, Access-Control-Request-Method"),  
        responseType: 'text'
      })
      .subscribe((data) => {
        this.parseXML(data)
          .then((data) => {
            this.xmlItems = data;
          });
      });
  }

  /**
   * 
   * @param data 
   */
  parseXML(data) {  
    return new Promise(resolve => {  
      var k: string | number,  
        arr = [],  
        parser = new Parser(
          {  
            trim: true,  
            explicitArray: true  
          }
        );  
      parser.parseString(data, function (err, result) {  
        var obj = result.Employee;  
        for (k in obj.emp) {  
          var item = obj.emp[k];  
          arr.push({  
            id: item.id[0],  
            name: item.name[0],  
            gender: item.gender[0],  
            mobile: item.mobile[0]  
          });  
        }  
        resolve(arr);  
      });  
    });  
  } 

}  