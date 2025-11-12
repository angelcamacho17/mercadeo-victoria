import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, timeout } from 'rxjs/operators';

export interface EmailRequest {
  email: string;
  name?: string;
  subject?: string;
  message?: string;
  tags?: string[];
  notes?: string;
}

export interface EmailResponse {
  success: boolean;
  emailId: string;
}

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  private apiUrl = 'https://mv-whatsapp-backend.onrender.com/api/send-email-text';
  private readonly REQUEST_TIMEOUT = 10000; // 10 seconds

  constructor(private http: HttpClient) { }

  sendEmail(emailData: EmailRequest): Observable<EmailResponse> {
    // Default message if not provided
    const defaultMessage = `¡Hola${emailData.name ? ' ' + emailData.name : ''}!

Gracias por tu interés en nuestro curso de Social Media Marketing.

Te hemos enviado un PDF con contenido exclusivo que te ayudará a dar tus primeros pasos en redes sociales.

Si tienes alguna pregunta, no dudes en contactarnos.

¡Nos vemos dentro!

Equipo de Social Media Marketing`;

    const payload: EmailRequest = {
      email: emailData.email,
      name: emailData.name || 'Nuevo prospecto',
      subject: emailData.subject || '¡Bienvenido! Tu contenido exclusivo está aquí',
      message: emailData.message || defaultMessage,
      tags: emailData.tags || ['landing-page', 'lead-capture'],
      notes: emailData.notes || 'Lead capturado desde landing page'
    };

    return this.http.post<EmailResponse>(this.apiUrl, payload).pipe(
      timeout(this.REQUEST_TIMEOUT),
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    let errorMessage = 'Ocurrió un error al enviar el email';

    if (error.error instanceof ErrorEvent) {
      // Client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side error
      switch (error.status) {
        case 0:
          errorMessage = 'No se pudo conectar con el servidor. Por favor verifica tu conexión a internet.';
          break;
        case 400:
          errorMessage = 'Email inválido. Por favor verifica el formato.';
          break;
        case 500:
          errorMessage = 'Error en el servidor. Por favor intenta nuevamente más tarde.';
          break;
        case 504:
          errorMessage = 'El servidor tardó demasiado en responder. Por favor intenta nuevamente.';
          break;
        default:
          errorMessage = `Error del servidor: ${error.status}`;
      }
    }

    return throwError(() => ({ message: errorMessage }));
  }
}
