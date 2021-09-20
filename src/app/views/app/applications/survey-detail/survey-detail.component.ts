import { Component, OnInit, OnDestroy, Renderer2 } from '@angular/core';
import { ISurvey, SurveyService } from '../survey/survey.service';
import { Colors } from 'src/app/constants/colors.service';
import { ChartService } from 'src/app/components/charts/chart.service';

@Component({
  selector: 'app-survey-detail',
  templateUrl: './survey-detail.component.html'
})
export class SurveyDetailComponent implements OnInit, OnDestroy {
  chartDataConfig: ChartService;
  currentSurvey: ISurvey;
  colors = Colors.getColors();
  ageChartData = {
    labels: ['12-24', '24-30', '30-40', '40-50', '50-60'],
    datasets: [{
      label: '',
      borderColor: [
        this.colors.themeColor1,
        this.colors.themeColor2,
        this.colors.themeColor3,
        this.colors.themeColor4,
        this.colors.themeColor5
      ],
      backgroundColor: [
        this.colors.themeColor1_10,
        this.colors.themeColor2_10,
        this.colors.themeColor3_10,
        this.colors.themeColor4_10,
        this.colors.themeColor5_10
      ],
      borderWidth: 2,
      data: [15, 25, 20, 30, 14]
    }]
  };

  genderChartData = {
    labels: ['Male', 'Female', 'Other'],
    datasets: [{
      label: '',
      borderColor: [
        this.colors.themeColor1,
        this.colors.themeColor2,
        this.colors.themeColor3
      ],
      backgroundColor: [
        this.colors.themeColor1_10,
        this.colors.themeColor2_10,
        this.colors.themeColor3_10
      ],
      borderWidth: 2,
      data: [85, 45, 20]
    }]
  };

  workChartData = {
    labels: [
      'Employed for wages',
      'Self-employed',
      'Looking for work',
      'Retired'
    ],
    datasets: [{
      label: '',
      borderColor: [
        this.colors.themeColor1,
        this.colors.themeColor2,
        this.colors.themeColor3,
        this.colors.themeColor4
      ],
      backgroundColor: [
        this.colors.themeColor1_10,
        this.colors.themeColor2_10,
        this.colors.themeColor3_10,
        this.colors.themeColor4_10
      ],
      borderWidth: 2,
      data: [15, 25, 20, 8]
    }]
  };

  codingChartData = {
    labels: ['Python', 'JavaScript', 'PHP', 'Java', 'C#'],
    datasets: [{
      label: '',
      borderColor: [
        this.colors.themeColor1,
        this.colors.themeColor2,
        this.colors.themeColor3,
        this.colors.themeColor4,
        this.colors.themeColor5
      ],
      backgroundColor: [
        this.colors.themeColor1_10,
        this.colors.themeColor2_10,
        this.colors.themeColor3_10,
        this.colors.themeColor4_10,
        this.colors.themeColor4_10
      ],
      borderWidth: 2,
      data: [15, 25, 20, 8, 25]
    }]
  };

  constructor(private surveyService: SurveyService, private chartService: ChartService, private renderer: Renderer2) {
    this.chartDataConfig = this.chartService;
  }

  ngOnInit(): void {
    this.renderer.addClass(document.body, 'right-menu');
    this.getItems();
  }

  ngOnDestroy(): void{
    this.renderer.removeClass(document.body, 'right-menu');
  }
  getItems(): void {
    this.surveyService.getSurveyItems()
      .subscribe(items => {
        this.currentSurvey = items[0];
      });
  }

  addNewQuestion(): void {
    this.currentSurvey.questions.push({
      id: this.currentSurvey.questions.length + 1,
      title: 'New Question',
      question: 'Question',
      answerType: 0,
      answers: []
    });
  }
}
