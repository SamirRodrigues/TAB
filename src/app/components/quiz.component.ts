import { Component } from "@angular/core"
import { Question } from "./question.component"

@Component({


  selector: 'app-quiz',
  template: `
    <div class="quizPane">
        <div class="questionPane">
           <app-question
            [options]="tab.options"
            [answers]="tab.answers"
            [selection]="this.currentOption"
            (onSelection)="select($event)"
          ></app-question>  
        </div>
    </div>
  `,
  styles: [`
    .quizPane {
      padding: 50px;
    }
    .questionPane {
      padding: 20px;
      margin: 10px 0;
      border-radius: 10px;
      border: 1px solid #aaa;
      background-color: #f0f0f0;
    }
    
  `]
})
export class QuizComponent {
  tab: Question = 
    {
      options: ['opção 1', 'opção 2', 'opção 3', 'opção 4'],
      answers: ['resposta 1', 'resposta 2', 'resposta 3', 'resposta 4', ''],
      selection: 0
    }
  
  currentOption!: number; 

  select(optionIndex: number) {
    this.currentOption = optionIndex;
  }


}