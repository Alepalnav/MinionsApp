import { Component ,EventEmitter, Input, Output} from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-menu',
    standalone: true,
    imports: [FormsModule],
    templateUrl: './menu.component.html'
})

export class MenuComponent {
    nombre:string="";

    @Output() send= new EventEmitter<string>();

    buscar(){
        this.send.emit(this.nombre);
    }
}