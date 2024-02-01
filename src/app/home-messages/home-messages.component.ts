import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, NgZone, OnInit, ViewChild } from '@angular/core';
import { SocketService } from '../../services/socket.service';

@Component({
  selector: 'homemessages',
  templateUrl: './home-messages.component.html',
  styleUrls: ['./home-messages.component.css']
})
export class HomeMessagesComponent implements OnInit, AfterViewInit {
  totalMessages: { user: string; message: string }[] = [];

  @ViewChild('messageContainer') private messageContainerRef?: ElementRef;

  constructor(
    private socketService: SocketService,
    private cdRef: ChangeDetectorRef,
    private zone: NgZone
  ) {}

  ngOnInit() {
    this.socketService.onMensaje().subscribe((mensaje) => {
      this.totalMessages.push(mensaje);
      this.scrollDown();
    });
  }

  ngAfterViewInit() {
    // Este método se ejecuta después de que @ViewChild haya recuperado la referencia al elemento
    this.scrollDown();
  }

  private scrollDown(): void {
    try {
      this.zone.runOutsideAngular(() => {
        setTimeout(() => {
          // Almacenar la referencia en una variable temporal
          const messageContainer = this.messageContainerRef?.nativeElement;
          // Verificar si messageContainer está definido antes de acceder a scrollTop
          if (messageContainer) {
            messageContainer.scrollTop = messageContainer.scrollHeight;
            this.cdRef.detectChanges();  // Forzar una actualización del ciclo de detección de cambios
          }
        }, 0);
      });
    } catch (err) {
      console.error(err);
    }
  }
}