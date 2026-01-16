export const languages = {
  es: "Español",
  en: "English",
} as const;

export type Language = keyof typeof languages;

export const defaultLang: Language = "es";

export const translations = {
  es: {
    // Navigation
    "nav.home": "Inicio",
    "nav.services": "Servicios",
    "nav.portfolio": "Portafolio",
    "nav.about": "Nosotros",
    "nav.contact": "Contacto",
    "nav.cta": "Cotizar Proyecto",

    // Hero
    "hero.badge": "Soluciones Digitales Integrales",
    "hero.title.line1": "De tu mente",
    "hero.title.line2": "a la web",
    "hero.description": "Diseñamos, desarrollamos y optimizamos sitios web y aplicaciones, integrando UI/UX, e-commerce, analítica y rendimiento para generar resultados reales de negocio.",
    "hero.cta.primary": "Iniciar Proyecto",
    "hero.cta.secondary": "Ver Portafolio",
    "hero.stats.projects": "Proyectos Completados",
    "hero.stats.clients": "Clientes Satisfechos",
    "hero.stats.experience": "Años de Experiencia",
    "hero.stats.commitment": "Compromiso",

    // Services
    "services.subtitle": "Lo que hacemos",
    "services.title": "Nuestros Servicios",
    "services.web.title": "Desarrollo Web",
    "services.web.description": "Creamos sitios web modernos, responsivos y optimizados para SEO, enfocados en rendimiento, usabilidad y una experiencia digital que representa tu marca.",
    "services.analytics.title": "Analítica Digital & Medición",
    "services.analytics.description": "Configuramos Google Analytics, Google Tag Manager y dashboards en Looker Studio para que entiendas el comportamiento de tus usuarios y tomes decisiones basadas en datos reales.",
    "services.ecommerce.title": "E-Commerce",
    "services.ecommerce.description": "Desarrollamos tiendas online completas con pasarelas de pago, gestión de inventario y pedidos, listas para vender de forma segura las 24/7.",
    "services.optimization.title": "Optimización Web",
    "services.optimization.description": "Optimizamos la velocidad, accesibilidad y posicionamiento SEO de tu sitio existente para mejorar la experiencia del usuario y aumentar conversiones.",
    "services.design.title": "Diseño UI/UX",
    "services.design.description": "Diseñamos interfaces atractivas y experiencias de usuario intuitivas que guían al visitante y lo convierten en cliente.",
    "services.maintenance.title": "Mantenimiento",
    "services.maintenance.description": "Brindamos soporte continuo, actualizaciones de seguridad y mejoras constantes para que tu sitio funcione de forma estable y segura.",

    // Portfolio
    "portfolio.subtitle": "Nuestro trabajo",
    "portfolio.title": "Portafolio",

    // Project Page
    "project.about": "Sobre el Proyecto",
    "project.gallery": "Galería",
    "project.tools": "Herramientas Utilizadas",
    "project.tags": "Etiquetas",
    "project.viewProject": "Ver Proyecto",
    "project.backToPortfolio": "Volver al Portafolio",
    "project.client": "Cliente",
    "project.year": "Año",
    "project.category": "Categoría",

    // Projects Content
    "projects.the-workshop-na.category": "E-Commerce",
    "projects.the-workshop-na.shortDescription": "Plataforma de comercio electrónico.",
    "projects.the-workshop-na.fullDescription": "Este proyecto hecho para N/A marca emergente de moda y diseño. Esta tienda ecommerce tiene funcionalidades personalizadas a la medida del cliente.",

    "projects.na-sitio-web.category": "Sitio Web",
    "projects.na-sitio-web.shortDescription": "Sitio web creativo.",
    "projects.na-sitio-web.fullDescription": "Sitio web de N/A, en la que se usan ilustraciones personalizadas, animaciones y un diseño distinto a lo ordinario. Se incluye showroom de videojuegos, libros y además contiene un blog.",

    "projects.circulos-333.category": "Sitio Web",
    "projects.circulos-333.shortDescription": "Sitio web de ONG.",
    "projects.circulos-333.fullDescription": "Este sitio web fue realizado para la iniciativa de Círculos 3:33, una ONG creada por Debi Nova y Meme Quirós para apoyar a las mujeres a encontrar un espacio seguro para aprender y crecer. Este proyecto incluye una página web creada con Astro, además de WordPress como CMS para el blog y las diferentes partes del sitio web.",

    "projects.vpass-guanacaste.category": "Aplicación Web",
    "projects.vpass-guanacaste.shortDescription": "Aplicación web de booking, reservaciones y back office.",
    "projects.vpass-guanacaste.fullDescription": "Página web y sistema web de reserva de tiquetes para la empresa VPass Guanacaste. Se realizó un plugin personalizado para el frontend y un back office completo para el manejo de los tiquetes y envío de correos.",

    "projects.staygoldcr.category": "Sitio Web",
    "projects.staygoldcr.shortDescription": "Sitio web corporativo.",
    "projects.staygoldcr.fullDescription": "Sitio web para la empresa de STAYGOLD COSTA RICA, una empresa de desarrollo de software personalizado, además de otros servicios de servidores y correos personalizados.",

    "projects.obelisko.category": "Sitio Web",
    "projects.obelisko.shortDescription": "Sitio web corporativo.",
    "projects.obelisko.fullDescription": "Sitio web para empresa de la agencia de viajes Obelisko, en la cual se incluye un showroom de viajes y la oportunidad de consultar acerca de precios y fechas.",

    // About
    "about.subtitle": "Quiénes somos",
    "about.title": "Sobre DevSZeta",
    "about.description1": "Somos una agencia de desarrollo web especializada en crear soluciones digitales que impulsan el crecimiento de negocios. Con más de 5 años de experiencia, hemos ayudado a empresas de todos los tamaños a establecer su presencia online.",
    "about.description2": "Nuestro enfoque combina diseño moderno, tecnología de punta y estrategia de negocio para entregar productos que no solo se ven bien, sino que generan resultados.",
    "about.cta": "Trabajemos Juntos",
    "about.value.innovation": "Innovación",
    "about.value.innovation.desc": "Siempre a la vanguardia de las tecnologías web.",
    "about.value.quality": "Calidad",
    "about.value.quality.desc": "Código limpio, optimizado y mantenible.",
    "about.value.commitment": "Compromiso",
    "about.value.commitment.desc": "Tu éxito es nuestro éxito.",
    "about.value.punctuality": "Puntualidad",
    "about.value.punctuality.desc": "Entregas en tiempo y forma.",

    // Contact
    "contact.subtitle": "Hablemos",
    "contact.title": "Contáctanos",
    "contact.form.title": "Envíanos un mensaje",
    "contact.form.name": "Nombre",
    "contact.form.name.placeholder": "Tu nombre",
    "contact.form.email": "Email",
    "contact.form.email.placeholder": "tu@email.com",
    "contact.form.subject": "Asunto",
    "contact.form.subject.placeholder": "¿En qué podemos ayudarte?",
    "contact.form.message": "Mensaje",
    "contact.form.message.placeholder": "Cuéntanos sobre tu proyecto...",
    "contact.form.submit": "Enviar Mensaje",
    "contact.info.title": "Información de contacto",
    "contact.info.email": "Email",
    "contact.info.phone": "Teléfono",
    "contact.info.location": "Ubicación",
    "contact.cta.title": "¿Listo para empezar?",
    "contact.cta.description": "Agenda una llamada gratuita de 30 minutos para discutir tu proyecto.",

    // Footer
    "footer.description": "De tu mente a la web.",
    "footer.services": "Servicios",
    "footer.services.web": "Desarrollo Web",
    "footer.services.mobile": "Aplicaciones Móviles",
    "footer.services.ecommerce": "E-Commerce",
    "footer.services.consulting": "Consultoría",
    "footer.company": "Empresa",
    "footer.company.about": "Nosotros",
    "footer.company.portfolio": "Portafolio",
    "footer.company.contact": "Contacto",
    "footer.rights": "Todos los derechos reservados.",
    "footer.developed": "Desarrollado por",

    // Meta
    "meta.title": "DevSZeta - De tu mente a la web",
    "meta.description": "Agencia de desarrollo web profesional. Transformamos tus ideas en experiencias digitales únicas.",
  },
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.services": "Services",
    "nav.portfolio": "Portfolio",
    "nav.about": "About",
    "nav.contact": "Contact",
    "nav.cta": "Get a Quote",

    // Hero
    "hero.badge": "Digital Solutions That Drive Results",
    "hero.title.line1": "From your mind",
    "hero.title.line2": "to the web",
    "hero.description": "We design, develop, and optimize websites and applications, combining UI/UX, e-commerce, analytics, and performance to deliver real business results.",
    "hero.cta.primary": "Start Project",
    "hero.cta.secondary": "View Portfolio",
    "hero.stats.projects": "Completed Projects",
    "hero.stats.clients": "Satisfied Clients",
    "hero.stats.experience": "Years of Experience",
    "hero.stats.commitment": "Commitment",

    // Services
    "services.subtitle": "What we do",
    "services.title": "Our Services",
    "services.web.title": "Web Development",
    "services.web.description": "We build modern, responsive, and SEO-optimized websites focused on performance, usability, and a strong digital presence for your brand.",
    "services.analytics.title": "Digital Analytics & Measurement",
    "services.analytics.description": "We set up Google Analytics, Google Tag Manager, and Looker Studio dashboards to help you understand user behavior and make data-driven decisions.",
    "services.ecommerce.title": "E-Commerce",
    "services.ecommerce.description": "We develop complete online stores with payment gateways, inventory management, and order processing, ready to sell securely 24/7.",
    "services.optimization.title": "Web Optimization",
    "services.optimization.description": "We improve the speed, accessibility, and SEO of your existing website to enhance user experience and increase conversions.",
    "services.design.title": "UI/UX Design",
    "services.design.description": "We design attractive interfaces and intuitive user experiences that guide visitors and turn them into customers.",
    "services.maintenance.title": "Maintenance",
    "services.maintenance.description": "We provide ongoing support, security updates, and continuous improvements to keep your website stable, secure, and up to date.",

    // Portfolio
    "portfolio.subtitle": "Our work",
    "portfolio.title": "Portfolio",

    // Project Page
    "project.about": "About the Project",
    "project.gallery": "Gallery",
    "project.tools": "Tools Used",
    "project.tags": "Tags",
    "project.viewProject": "View Project",
    "project.backToPortfolio": "Back to Portfolio",
    "project.client": "Client",
    "project.year": "Year",
    "project.category": "Category",

    // Projects Content
    "projects.the-workshop-na.category": "E-Commerce",
    "projects.the-workshop-na.shortDescription": "E-commerce platform.",
    "projects.the-workshop-na.fullDescription": "This project was made for N/A, an emerging fashion and design brand. This e-commerce store has custom functionalities tailored to the client's needs.",

    "projects.na-sitio-web.category": "Website",
    "projects.na-sitio-web.shortDescription": "Creative website.",
    "projects.na-sitio-web.fullDescription": "N/A website featuring custom illustrations, animations, and a unique design. Includes a video game and book showroom, plus a blog.",

    "projects.circulos-333.category": "Website",
    "projects.circulos-333.shortDescription": "NGO website.",
    "projects.circulos-333.fullDescription": "This website was created for Círculos 3:33, an NGO founded by Debi Nova and Meme Quirós to support women in finding a safe space to learn and grow. The project includes a website built with Astro, plus WordPress as CMS for the blog and various site sections.",

    "projects.vpass-guanacaste.category": "Web Application",
    "projects.vpass-guanacaste.shortDescription": "Booking, reservations, and back office web application.",
    "projects.vpass-guanacaste.fullDescription": "Website and ticket reservation system for VPass Guanacaste. A custom plugin was developed for the frontend and a complete back office for ticket management and email delivery.",

    "projects.staygoldcr.category": "Website",
    "projects.staygoldcr.shortDescription": "Corporate website.",
    "projects.staygoldcr.fullDescription": "Website for STAYGOLD COSTA RICA, a custom software development company that also offers server and email services.",

    "projects.obelisko.category": "Website",
    "projects.obelisko.shortDescription": "Corporate website.",
    "projects.obelisko.fullDescription": "Website for Obelisko travel agency, featuring a travel showroom and the ability to inquire about prices and dates.",

    // About
    "about.subtitle": "Who we are",
    "about.title": "About DevSZeta",
    "about.description1": "We are a web development agency specialized in creating digital solutions that drive business growth. With over 5 years of experience, we have helped companies of all sizes establish their online presence.",
    "about.description2": "Our approach combines modern design, cutting-edge technology, and business strategy to deliver products that not only look good but generate results.",
    "about.cta": "Let's Work Together",
    "about.value.innovation": "Innovation",
    "about.value.innovation.desc": "Always at the forefront of web technologies.",
    "about.value.quality": "Quality",
    "about.value.quality.desc": "Clean, optimized, and maintainable code.",
    "about.value.commitment": "Commitment",
    "about.value.commitment.desc": "Your success is our success.",
    "about.value.punctuality": "Punctuality",
    "about.value.punctuality.desc": "On-time deliveries.",

    // Contact
    "contact.subtitle": "Let's talk",
    "contact.title": "Contact Us",
    "contact.form.title": "Send us a message",
    "contact.form.name": "Name",
    "contact.form.name.placeholder": "Your name",
    "contact.form.email": "Email",
    "contact.form.email.placeholder": "your@email.com",
    "contact.form.subject": "Subject",
    "contact.form.subject.placeholder": "How can we help you?",
    "contact.form.message": "Message",
    "contact.form.message.placeholder": "Tell us about your project...",
    "contact.form.submit": "Send Message",
    "contact.info.title": "Contact information",
    "contact.info.email": "Email",
    "contact.info.phone": "Phone",
    "contact.info.location": "Location",
    "contact.cta.title": "Ready to start?",
    "contact.cta.description": "Schedule a free 30-minute call to discuss your project.",

    // Footer
    "footer.description": "From your mind to the web.",
    "footer.services": "Services",
    "footer.services.web": "Web Development",
    "footer.services.mobile": "Mobile Applications",
    "footer.services.ecommerce": "E-Commerce",
    "footer.services.consulting": "Consulting",
    "footer.company": "Company",
    "footer.company.about": "About",
    "footer.company.portfolio": "Portfolio",
    "footer.company.contact": "Contact",
    "footer.rights": "All rights reserved.",
    "footer.developed": "Developed by",

    // Meta
    "meta.title": "DevSZeta - From your mind to the web",
    "meta.description": "Professional web development agency. We transform your ideas into unique digital experiences.",
  },
} as const;

export type TranslationKey = keyof typeof translations.es;
