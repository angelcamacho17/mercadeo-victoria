import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { WhatsAppService } from './services/whatsapp.service';

interface Step {
  title: string;
  description: string;
  items: string[];
  icon: string;
}

interface Testimonial {
  id: number;
  name: string;
  role: string;
  text: string;
  result: string;
  initials: string;
  imageExists: boolean;
}

@Component({
  selector: 'app-root',
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'curso-marketing-landing';
  currentYear = new Date().getFullYear();
  heroImageExists = true;
  vslVideoUrl: SafeResourceUrl | null = null;

  // You can set this later when you have the video URL
  // Example: https://www.youtube.com/embed/VIDEO_ID or Vimeo URL
  private videoUrl = ''; // Add your video URL here later

  steps: Step[] = [
    {
      title: 'Construye tu Fundamento Digital',
      description: 'Establece una presencia sólida que atraiga a tu audiencia ideal',
      items: [
        'Define tu nicho y posicionamiento único',
        'Crea un perfil optimizado que convierte',
        'Desarrolla tu estrategia de contenido orgánico',
        'Identifica a tu cliente ideal y sus puntos de dolor'
      ],
      icon: 'M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5'
    },
    {
      title: 'Domina el Arte de la Conexión',
      description: 'Construye relaciones auténticas que generan confianza y ventas',
      items: [
        'Técnicas de storytelling que venden sin vender',
        'Crea contenido que genera engagement real',
        'Sistema de respuestas para convertir comentarios en clientes',
        'Estrategias de DM que cierran ventas naturalmente'
      ],
      icon: 'M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 7a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75'
    },
    {
      title: 'Escala y Monetiza',
      description: 'Transforma tu audiencia en ingresos consistentes y predecibles',
      items: [
        'Sistema de embudos orgánicos de alta conversión',
        'Lanza ofertas irresistibles sin anuncios pagados',
        'Automatiza tu proceso de ventas sin perder autenticidad',
        'Estrategias para cerrar $10K+ mensualmente'
      ],
      icon: 'M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6'
    }
  ];

  testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'María González',
      role: 'Coach de Negocios',
      text: 'En solo 3 meses pasé de tener 500 seguidores a más de 15,000 y cerré mi primer mes de $12K. Este curso cambió completamente mi forma de ver las redes sociales.',
      result: '✨ De $0 a $12K/mes',
      initials: 'MG',
      imageExists: true
    },
    {
      id: 2,
      name: 'Carlos Ramírez',
      role: 'Consultor de Marketing',
      text: 'Probé con anuncios pagados por años sin resultados. Con estas estrategias orgánicas generé más leads en 2 meses que en todo el año anterior. Increíble.',
      result: '🚀 300% más leads',
      initials: 'CR',
      imageExists: true
    },
    {
      id: 3,
      name: 'Ana Martínez',
      role: 'Emprendedora Digital',
      text: 'Me sentía perdida en redes sociales. Este sistema me dio claridad total. Ahora tengo un negocio rentable y una comunidad leal que me compra constantemente.',
      result: '💰 $8.5K primer mes',
      initials: 'AM',
      imageExists: true
    },
    {
      id: 4,
      name: 'Roberto Silva',
      role: 'Coach de Ventas',
      text: 'Lo mejor no es solo el contenido del curso, sino la mentalidad que desarrollas. Ahora vendo todos los días desde Instagram sin sentirme invasivo. Es oro puro.',
      result: '⭐ 45 ventas en 60 días',
      initials: 'RS',
      imageExists: true
    },
    {
      id: 5,
      name: 'Laura Fernández',
      role: 'Consultora de Negocios',
      text: 'Invertí en varios cursos antes, pero este es diferente. Es práctico, directo al punto y con estrategias que funcionan HOY. Recuperé mi inversión en 2 semanas.',
      result: '🎯 ROI en 14 días',
      initials: 'LF',
      imageExists: true
    },
    {
      id: 6,
      name: 'Diego Morales',
      role: 'Mentor de Emprendedores',
      text: 'Pasé de tener miedo a vender en redes a cerrar clientes premium de forma orgánica. El módulo de conexión auténtica vale por sí solo todo el precio del curso.',
      result: '💎 3 clientes premium/mes',
      initials: 'DM',
      imageExists: true
    }
  ];

  // WhatsApp Form State
  phoneNumber: string = '';
  isSubmitting: boolean = false;
  showSuccessMessage: boolean = false;
  showErrorMessage: boolean = false;
  errorMessage: string = '';

  constructor(
    private sanitizer: DomSanitizer,
    private whatsappService: WhatsAppService
  ) {
    // When you have the video URL, uncomment and update this:
    // this.setVideoUrl('YOUR_VIDEO_URL_HERE');
  }

  get isPhoneValid(): boolean {
    // Simple validation: must start with + and have at least 10 digits
    const phoneRegex = /^\+\d{10,}$/;
    return phoneRegex.test(this.phoneNumber.replace(/\s/g, ''));
  }

  setVideoUrl(url: string): void {
    if (url) {
      this.vslVideoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
    }
  }

  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  purchaseCourse(): void {
    // Add your purchase/checkout URL here
    // window.location.href = 'YOUR_CHECKOUT_URL';
    alert('Funcionalidad de compra - Agrega tu URL de checkout aquí');
  }

  sendWhatsAppMessage(): void {
    if (!this.isPhoneValid || this.isSubmitting) {
      return;
    }

    // Reset messages
    this.showSuccessMessage = false;
    this.showErrorMessage = false;
    this.errorMessage = '';

    // Set loading state
    this.isSubmitting = true;

    // Clean phone number (remove spaces)
    const cleanPhone = this.phoneNumber.replace(/\s/g, '');

    // Call the service
    this.whatsappService.sendWhatsAppMessage(cleanPhone).subscribe({
      next: (response) => {
        this.isSubmitting = false;
        this.showSuccessMessage = true;
        this.phoneNumber = ''; // Clear the form

        // Auto-hide success message after 5 seconds
        setTimeout(() => {
          this.showSuccessMessage = false;
        }, 5000);
      },
      error: (error) => {
        this.isSubmitting = false;
        this.showErrorMessage = true;
        this.errorMessage = error.message || 'Ocurrió un error al enviar el mensaje';

        // Auto-hide error message after 7 seconds
        setTimeout(() => {
          this.showErrorMessage = false;
        }, 7000);
      }
    });
  }
}
