import { CommonModule } from '@angular/common';
import { Component ,EventEmitter, Input, Output} from '@angular/core';
import { FormsModule } from "@angular/forms";

@Component({
    selector: 'app-card',
    standalone: true,
    imports: [FormsModule,CommonModule],
    templateUrl: './card.component.html',
  })

  export class CardComponent {
  }