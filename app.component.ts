import { Component } from '@angular/core';

@Component({
  selector: 'app-exercicio',
  templateUrl: './exercicio.component.html',
})
export class ExercicioComponent {
  selectedOption: string = '';
  optionTexts: { [key: string]: string } = {
    opcao1: 'Texto da Opção 1',
    opcao2: 'Texto da Opção 2',
    opcao3: 'Texto da Opção 3',
    opcao4: 'Texto da Opção 4',
  };

  onSelectChange() {
    const selectedText = this.optionTexts[this.selectedOption];

    console.log(selectedText);
  }
}
