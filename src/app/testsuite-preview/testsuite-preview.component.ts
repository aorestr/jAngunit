import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-testsuite-preview',
  templateUrl: './testsuite-preview.component.html',
  styleUrls: ['./testsuite-preview.component.css']
})
export class TestsuitePreviewComponent {

  @Input() testsuite;

}
