import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-add-room',
  standalone: true,
  imports: [CommonModule, RouterOutlet,],
  templateUrl: './add-room.component.html',
  styleUrl: './add-room.component.css'
})

export class AddRoomComponent{
}
