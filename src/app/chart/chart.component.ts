import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as echarts from 'echarts';
import { DateRangeComponent } from "../shared/date-range/date-range.component";
import { DropDownBtnComponent } from "../shared/drop-down-btn/drop-down-btn.component";

@Component({
  selector: 'app-chart',
  standalone: true,
  imports: [
    DateRangeComponent,
    DropDownBtnComponent
],
  templateUrl: './chart.component.html',
  styleUrl: './chart.component.scss',
})
export class ChartComponent implements OnInit {
  @ViewChild('chartContainer', { static: true }) chartContainer!: ElementRef;

  ngOnInit(): void {
    this.initializeChart();
  }

  initializeChart(): void {
    const chart = echarts.init(this.chartContainer.nativeElement);

    // Smooth Linear (Line) Chart Options
    const chartOptions = {
      tooltip: {
        trigger: 'axis',
        backgroundColor: '#1E1B39',
        textStyle: {
          color: '#E5E5EF',
          fontWeight: '400',
          fontFamily: 'Neo Sans Arabic',
          fontSize: '12',
        },
        formatter: (params: any) => {
          const { value } = params[0]; 
          return ` ${value} استخدام`;
        },
        axisPointer: {
          type: 'line',
          axis: 'x',
          lineStyle:{
            color: '#8A74F9',
            type: 'solid',
            cap: 'round',
            join: 'round',
            width: 2,
          },
        },
      },
      grid: {
        left: '0',
        right: '0',
        bottom: '0',
        top: '10',
        containLabel: true,
        borderColor: '#E5E5E5',
      },
      xAxis: {
        type: 'category',
        boundaryGap: true,
        data: ['ديسمبر', 'نوفمبر', 'أكتوبر', 'سبتمبر', 'أغسطس', 'يوليو', 'يونيو', 'مايو', 'أبريل', 'مارس', 'فبراير', 'يناير'],
        axisLine: {
          show: false,
        },
        axisTick: {
          show: false,
        },
        axisLabel: {
          color: '#9291A5',
          fontSize: 12,
          fontFamily: 'Neo Sans Arabic',
          fontWeight: 500,
          lineHeight: 16.13,
          letterSpacing: '-0.02em',
          align: 'center',
          formatter: (value: string) => {
            return `${value}`;
          }
        },
      },
      yAxis: {
        type: 'value',
        axisLine: {
          lineStyle: {
            color: '#BFBFBF',
          },
        },
        axisTick: {
          show: false,
        },
        splitLine: {
          lineStyle: {
            color: '#E5E5E5',
          },
        },
        axisLabel: {
          show: false,
        },
      },
      series: [
        {
          name: '',
          type: 'line',
          smooth: true, 
          data: [120, 132, 101, 150, 250 ,130 , 210, 140, 60 ,80 , 120, 150 ],
          lineStyle: {
            color: '#8A74F9', 
            width: 3,
          },
          itemStyle: {
            color: '#4CAF50',
            borderColor: '#ffffff',
            borderWidth: 2,
          },
          areaStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              { offset: 0, color: '#8A74F9' }, // Start color
              { offset: 0.8428, color: 'rgba(138, 116, 249, 0.263733)' }, // Mid gradient
              { offset: 1, color: 'rgba(138, 116, 249, 0)' }, // End color (transparent)
            ]),
          },
          symbol: 'circle',  // Shape of the data points
          symbolSize: 12,         // Size of the symbol when displayed
          showSymbol: false,     // Hides the circle by default
          emphasis: {
            focus: 'series',      // Show the circle when hovering
            itemStyle: {
              color: '#8A74F9',
              borderColor: '#fff',
              borderWidth: 2,     // Emphasize with a border on hover
            },
            showSymbol: true,     // Displays the symbol when hovering
          },

        },
      ],
      // Optional: Customize legend if needed
      legend: {
        top: '5%',
        textStyle: {
          color: '#4A4A4A',
          fontSize: 14,
        },
      },
    };

    chart.setOption(chartOptions);
    window.addEventListener('resize', () => chart.resize()); // Ensure responsiveness
  }
}
