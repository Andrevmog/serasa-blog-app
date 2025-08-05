import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.scss']
})
export class ControlsComponent {
  // @Input recebe a lista de autores únicos do componente pai.
  @Input() authors: string[] = [];

  // @Output emite eventos para o componente pai quando uma opção é selecionada.
  @Output() filterChanged = new EventEmitter<string>();
  @Output() sortChanged = new EventEmitter<'asc' | 'desc'>();

  // Função chamada quando o usuário seleciona um autor.
  onFilterChange(event: Event): void {
    const selectedAuthor = (event.target as HTMLSelectElement).value;
    this.filterChanged.emit(selectedAuthor);
  }

  // Função chamada quando o usuário seleciona uma ordem.
  onSortChange(event: Event): void {
    const selectedSort = (event.target as HTMLSelectElement).value as 'asc' | 'desc';
    this.sortChanged.emit(selectedSort);
  }
}
