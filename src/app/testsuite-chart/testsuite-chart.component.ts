import { Component, Input } from '@angular/core';

import { ChartType } from 'chart.js';
import { MultiDataSet, Label } from 'ng2-charts';

@Component({
  selector: 'app-testsuite-chart',
  templateUrl: './testsuite-chart.component.html',
  styleUrls: []
})
export class TestsuiteChartComponent {

  public readonly labels: Label[] = ['Failed', 'Passed'];
  @Input() chartData: MultiDataSet;
  public readonly chartType: ChartType = 'doughnut';

}
