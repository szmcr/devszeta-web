# DevSZeta

Sitio web profesional de DevSZeta - Agencia de desarrollo web especializada en soluciones digitales personalizadas.

## Tecnologías

- **Framework:** [Astro](https://astro.build) 5.14.1
- **Styling:** [TailwindCSS](https://tailwindcss.com) 4.1.14
- **Animations:** [Lottie Web](https://airbnb.io/lottie/)
- **Backend:** Supabase (Database)
- **Email:** Resend (Transactional emails)
- **Deployment:** Vercel
- **Language:** TypeScript

## Características

- ✅ Diseño responsive y moderno
- ✅ Soporte multiidioma (Español/Inglés)
- ✅ Formulario de contacto con validaciones
- ✅ Integración con Supabase para almacenamiento
- ✅ Notificaciones por email con Resend
- ✅ Protección anti-spam (honeypot + time-based validation)
- ✅ Animaciones con Lottie
- ✅ SEO optimizado
- ✅ Performance optimizado

## Estructura del Proyecto

```text
/
├── public/
│   ├── animations/      # Archivos Lottie JSON
│   ├── projects/        # Imágenes de proyectos
│   └── *.svg           # Iconos y assets
├── src/
│   ├── components/
│   │   ├── sections/   # Secciones de la página
│   │   └── ui/         # Componentes UI reutilizables
│   ├── data/           # Datos estáticos (proyectos, servicios)
│   ├── i18n/           # Traducciones y utilidades
│   ├── layouts/        # Layouts de página
│   └── pages/
│       ├── api/        # API endpoints
│       ├── en/         # Páginas en inglés
│       └── *.astro     # Páginas en español
├── .env.example        # Variables de entorno de ejemplo
├── astro.config.mjs    # Configuración de Astro
├── vercel.json         # Configuración de Vercel
└── package.json        # Dependencias del proyecto
```

## Instalación

### Requisitos previos

- Node.js 18+ 
- npm o pnpm
- Cuenta en Supabase
- Cuenta en Resend

### Pasos

1. Clonar el repositorio:

```bash
git clone https://github.com/tu-usuario/devszeta-web.git
cd devszeta-web
```

2. Instalar dependencias:

```bash
npm install
```

3. Iniciar servidor de desarrollo:

```bash
npm run dev
```

El sitio estará disponible en `http://localhost:4321`

## Scripts Disponibles

```bash
npm run dev       # Inicia servidor de desarrollo
npm run build     # Construye para producción
npm run preview   # Preview del build de producción
```

## Configuración de Supabase

### Crear tabla de contactos

Ejecuta el siguiente SQL en tu proyecto de Supabase:

```sql
CREATE TABLE contacts (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  subject TEXT NOT NULL,
  message TEXT NOT NULL,
  submitted_at TIMESTAMPTZ DEFAULT NOW(),
  status TEXT DEFAULT 'New',
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Habilitar Row Level Security
ALTER TABLE contacts ENABLE ROW LEVEL SECURITY;

-- Política para permitir inserts desde el cliente
CREATE POLICY "Allow public inserts" ON contacts
  FOR INSERT
  TO anon
  WITH CHECK (true);
```

## Configuración de Resend

1. Crea una cuenta en [Resend](https://resend.com)
2. Genera una API key
3. (Opcional) Verifica tu dominio para enviar desde tu email personalizado
4. Agrega la API key a tu archivo `.env`

## Deployment en Vercel

### Opción 1: Desde GitHub

1. Push tu código a GitHub
2. Importa el proyecto en [Vercel](https://vercel.com)
3. Configura las variables de entorno en Vercel
4. Deploy automático

### Opción 2: Vercel CLI

```bash
npm i -g vercel
vercel login
vercel
```

### Variables de entorno en Vercel

Agrega estas variables en **Settings → Environment Variables**:

- `SUPABASE_URL`
- `SUPABASE_ANON_KEY`
- `RESEND_API_KEY`
- `NOTIFICATION_EMAIL`

Consulta `DEPLOYMENT.md` para una guía detallada.

## Características del Formulario de Contacto

### Validaciones

- Nombre: mínimo 2 caracteres, máximo 100
- Email: formato válido, máximo 100 caracteres
- Asunto: mínimo 3 caracteres, máximo 200
- Mensaje: mínimo 10 caracteres, máximo 2000

### Protección Anti-Spam

- **Honeypot field:** Campo oculto para detectar bots
- **Time-based validation:** Mínimo 3 segundos para llenar el formulario
- **Spam pattern detection:** Detecta contenido sospechoso
- **Form expiration:** Formulario válido por 1 hora

### Flujo de Envío

1. Usuario llena el formulario
2. Validación en el frontend
3. Envío al endpoint `/api/contact`
4. Validaciones en el backend
5. Guardado en Supabase
6. Envío de email de notificación con Resend
7. Respuesta al usuario

## Internacionalización (i18n)

El sitio soporta español (por defecto) e inglés.

### Agregar traducciones

Edita `src/i18n/translations.ts`:

```typescript
export const translations = {
  es: {
    'tu.clave': 'Tu texto en español',
  },
  en: {
    'tu.clave': 'Your text in English',
  },
};
```

### Usar traducciones

```astro
---
import { useTranslations } from '../i18n';
const t = useTranslations(lang);
---

<h1>{t('tu.clave')}</h1>
```

## Agregar Nuevos Proyectos

Edita `src/data/projects.ts`:

```typescript
export const projects = [
  {
    id: 'tu-proyecto',
    title: 'Título del Proyecto',
    description: 'Descripción',
    image: '/projects/tu-imagen.webp',
    tags: ['React', 'Node.js'],
    link: 'https://tu-proyecto.com',
  },
];
```

Agrega la imagen en `public/projects/`

## Licencia

Este proyecto es privado y de uso exclusivo de DevSZeta.

## Contacto

- **Email:** info@devszeta.com
- **Teléfono:** +506 7278-8228
- **Ubicación:** San José, Costa Rica
- **GitHub:** [github.com/szmcr](https://github.com/szmcr)
