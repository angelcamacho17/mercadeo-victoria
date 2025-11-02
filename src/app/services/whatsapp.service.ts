import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

export interface WhatsAppRequest {
  phoneNumber: string;
  message: string;
  tags: string[];
  notes: string;
}

export interface WhatsAppResponse {
  success: boolean;
  message?: string;
  error?: string;
}

@Injectable({
  providedIn: 'root'
})
export class WhatsAppService {
  private readonly API_URL = 'https://mv-whatsapp-backend.onrender.com/api';

  constructor(private http: HttpClient) {}

  sendWhatsAppMessage(phoneNumber: string): Observable<WhatsAppResponse> {
    const payload: WhatsAppRequest = {
      phoneNumber: phoneNumber,
      message: 'Ingresa al siguiente link y hazle copia al documento para poder trabajar en el 👋🏼\n\n🔗 https://www.canva.com/design/DAGp0e_2T04/UppeJXF6Gm-X6aAcP2UwtQ/edit?utm_content=DAGp0e_2T04&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton\n\n💡 cualquier duda o comentario que quieras dejarme sobre la plantilla puedes hacerlo por aquí!',
      tags: ['landing-page', 'lead'],
      notes: 'Capturado desde landing page'
    };

    return this.http.post<WhatsAppResponse>(
      `${this.API_URL}/send-whatsapp-text`,
      payload
    ).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    let errorMessage = 'Ocurrió un error al enviar el mensaje';

    if (error.error instanceof ErrorEvent) {
      // Error del lado del cliente
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Error del lado del servidor
      if (error.status === 0) {
        errorMessage = 'No se pudo conectar al servidor. Verifica tu conexión a internet.';
      } else if (error.status >= 500) {
        errorMessage = 'Error del servidor. Por favor intenta más tarde.';
      } else if (error.error?.error) {
        errorMessage = error.error.error;
      }
    }

    return throwError(() => new Error(errorMessage));
  }
}
