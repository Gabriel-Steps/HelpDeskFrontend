import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-input-component',
  imports: [FormsModule],
  templateUrl: './input-component.html',
  styleUrl: './input-component.css',
})
export class InputComponent implements OnInit{
  @Input() icon: string = '';
  @Input() placeholder: string = '';
  @Input() type: string = 'text';
  @Input() value: string = '';
  @Input() iconEye: string = 'assets/eye.png';

  @Output() valueChange = new EventEmitter<string>();

  public typeMemory: string = '';

  ngOnInit():void {
    this.typeMemory = this.type;
  }
  
  public trocarIconView(): void{
    if(this.iconEye === 'assets/eye.png'){
      this.iconEye = 'assets/eye-crossed.png';
      this.type = 'text';
    }else{
      this.iconEye = 'assets/eye.png';
      this.type = 'password';
    }
  }
}
