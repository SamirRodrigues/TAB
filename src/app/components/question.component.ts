import { Component, EventEmitter, Input, Output } from "@angular/core"

export interface Question {
  options: string[]  // opções da questão
  answers: string[]  // opções da questão
  selection: 0 // índice da opção selecionada, se houver
}

@Component({
  selector: 'app-question',
  template: `
    <button *ngFor="let option of options; let i = index"
      (click)="onSelection.emit(i)">
      {{ option }}
    </button>
    <div class="questionNumber" >
      {{ answers[selection] }}
    </div>
  `,
  styles: [`
    h2 {
      font-weight: normal;
      font-size: 20pt;
      margin-top: 0;
    }
    button {
      margin-right: 10px;
      background-color: #ccc;
      border: 1px solid rgb(118, 118, 118);
      border-radius: 3px;
      padding: 2px 5px;
    }
    .selected {
      font-weight: bold;
      background-color: #aaa;
    }

    .questionNumber {
      font-style: italic;
      font-size: smaller;
    }
  `]
})
export class QuestionComponent {
   @Input() options!: string[]    // opções da questão
   @Input() answers!: string[]    // opções da questão
   @Input() selection!: number    // índice da opção selecionada, se houver
   @Output() onSelection = new EventEmitter<number>() // quando o usuário selecionar uma opção, passa seu índice
}