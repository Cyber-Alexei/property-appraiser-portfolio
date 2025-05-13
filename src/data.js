export const certifications = [
  {
    id: 0,
    name: "JavaScript Algorithms and Data Structures",
    institution: "FreeCodeCamp",
    url: "https://www.freecodecamp.org/certification/Alexei_Torres/javascript-algorithms-and-data-structures",
  },
  {
    id: 1,
    name: "Front End Development Libraries",
    institution: "FreeCodeCamp",
    url: "https://www.freecodecamp.org/certification/Alexei_Torres/front-end-development-libraries",
  },
  {
    id: 2,
    name: "Modern JavaScript",
    institution: "Udemy",
    url: "https://www.udemy.com/certificate/UC-d40ae4bb-bac0-44c5-8a87-77f3c1c93c44/",
  },
];

// Data to show a presentation of the project in the landing page
export const spotlightProjects = [
  {
    index: 0,
    name: "Wasppet.dev",
    path: "/wasppet",
    logoPath: "/images/projectCards/wasppet.png",
    styles: {
      title: "W",
      titleCss: {
        color: "#ffbf00",
      },
      title2: "asppet.dev",
      title2Css: {
        color: "#000000",
      },
    },
  },
  {
    index: 1,
    name: "Servo",
    path: "/servo",
    logoPath: "/images/projectCards/servo.png",
    styles: {
      title: "Servo",
      titleCss: {
        fontWeight: "500",
        color: "#c74ef5",
      },
    },
  },
];

// Data for the projects single page
export const projects = {
  servo: {
    name: "Servo",
    description: `
    Una aplicación para RRHH que permite crear y publicar múltiples horarios para diferentes
    fechas, el usuario podrá seleccionar algún horario disponible y después de otorgar a Servo (la aplicación) los permisos
    necesarios de Google Calendar, entonces programar una reunión de Google Meets
    que sera registrada directamente en el calendarios de Google del usuario.
    Tiempo de desarrollo: 5 días.
    `,
    stack:
      "React.js, Next.js, Tailwindcss, TypeScript, JavaScript, Express.js, Sequelize, PostgreSQL",
    videoLink: "https://youtu.be/fKFRRqSiaXA?si=0tQvqminlk1oIoO0",
    githubRep: "https://github.com/Cyber-Alexei/servo",
    styles: {
      title: "Servo",
      titleCss: {
        fontWeight: "500",
        color: "#c74ef5",
      },
      bgColor: "#f2e3ff",
    },
    desktopPreview: [
      ["1.png", "Servo"],
      [
        "2.png",
        "En el panel de administración, el profesional de RRHH crea una fecha.",
      ],
      [
        "3.png",
        "En la fecha se crean las horas que se ofrecerán a los usuarios para que puedan reservar su entrevista.",
      ],
      [
        "4.png",
        "Fechas y horas expuestas en la página principal. El usuario deberá seleccionar una hora disponible.",
      ],
      [
        "5.png",
        "Al hacer clic en una hora disponible, el usuario debe otorgar permiso a Servo para acceder a su Calendario de Google y registrar una reunión.",
      ],
      ["6.png", "Se le pide al usuario que inicie sesión."],
      ["7.png", ""],
      ["8.png", ""],
      [
        "9.png",
        "Se informa al usuario que aceptará otorgar permiso a Servo para acceder a su Google Calendar.",
      ],
      [
        "10.png",
        "Una vez que Servo tiene los permisos del usuario para acceder a su Calendario de Google, le permite entonces reservar una fecha y hora.",
      ],
      [
        "11.png",
        "Se informa y agradece al usuario por haber reservado una fecha y hora en Servo",
      ],
      [
        "12.png",
        "La fecha y la hora están reservadas (en purpura) y no pueden ser seleccionadas por otros usuarios.",
      ],
      [
        "13.png",
        "En el panel de administración, el profesional de RRHH puede ver que alguien ya ha reservado la hora en purpura para la fecha indicada.",
      ],
      [
        "14.png",
        "Cuando el profesional de RRHH hace clic en la hora reservada, aparece la información de la reserva/entrevista y el enlace a Google Meet.",
      ],
      ["15.png", "Meet de Google."],
    ],
    movilPreview: [
      ["1.png", "Servo"],
      [
        "2.png",
        "En el panel de administración, el profesional de RRHH crea una fecha.",
      ],
      [
        "3.png",
        "En la fecha se crean las horas que se ofrecerán a los usuarios para que puedan reservar su entrevista.",
      ],
      [
        "4.png",
        "Fechas y horas expuestas en la página principal. El usuario deberá seleccionar una hora disponible.",
      ],
      [
        "5.png",
        "Al hacer clic en una hora disponible, el usuario debe otorgar permiso a Servo para acceder a su Calendario de Google y registrar una reunión.",
      ],
      ["6.png", "Se le pide al usuario que inicie sesión."],
      ["7.png", ""],
      ["8.png", ""],
      [
        "9.png",
        "Se informa al usuario que aceptará otorgar permiso a Servo para acceder a su Google Calendar.",
      ],
      [
        "10.png",
        "Una vez que Servo tiene los permisos del usuario para acceder a su Calendario de Google, le permite entonces reservar una fecha y hora.",
      ],
      [
        "11.png",
        "Se informa y agradece al usuario por haber reservado una fecha y hora en Servo",
      ],
      [
        "12.png",
        "La fecha y la hora están reservadas (en purpura) y no pueden ser seleccionadas por otros usuarios.",
      ],
      [
        "13.png",
        "En el panel de administración, el profesional de RRHH puede ver que alguien ya ha reservado la hora en purpura para la fecha indicada.",
      ],
      [
        "14.png",
        "Cuando el profesional de RRHH hace clic en la hora reservada, aparece la información de la reserva/entrevista y el enlace a Google Meet.",
      ],
      ["15.png", "Meet de Google."],
    ],
  },
  wasppet: {
    name: "Wasppet.dev",
    description: `La combinación de Stackoverflow y Reddit.
      Permite a los desarrolladores compartir soluciones en fragmentos de código.
      Los desarrolladores/usuarios pueden crear artículos sobre un tema en particular,
      representar bloques de código de cualquier lenguaje o tecnología de programación,
      comentar dichos artículos, recibir notificaciones,
      buscar otros usuarios por su nombre de usuario o nombre personal
      y ver las soluciones que han compartido con la comunidad de Wasppet.dev.
      Tiempo de desarrollo: 2 meses 1 semana.`,
    stack:
      "React.js, Next.js, Tailwindcss, TypeScript, JavaScript, Python, Django, Django REST Framework, PostgreSQL",
    videoLink: "https://youtu.be/WXH_-Yl50jg?si=C8TWsQIQso1HMkS5",
    githubRep: "https://github.com/Cyber-Alexei/wasppet",
    styles: {
      title: "W",
      titleCss: {
        color: "#ffbf00",
      },
      bgColor: "#ffffca",
      title2: "asppet.dev",
      title2Css: {
        color: "#000000",
      },
    },
    desktopPreview: [
      ["1.png", "Wasppet.dev"],
      ["2.png", "Sign-up."],
      ["3.png", "Log-in."],
      [
        "4.png",
        "Perfil o página 'Home' con datos y configuraciones del usuario logeado.",
      ],
      ["5.png", "Menú y modo luminoso."],
      ["6.png", "Menú y modo oscuro."],
      ["7.png", "Opciones de seguridad."],
      ["8.png", "Publicaciones del usuario."],
      [
        "9.png",
        "Página de Notifications, muestra cómo el usuario recibe notificaciones.",
      ],
      [
        "10.png",
        "Página de My snippets permite al usuario ver y crear sus propios fragmentos para usar en publicaciones o simplemente guardar el código.",
      ],
      [
        "11.png",
        "Los snippets se consultan por lotes y se muestran por paginación o mediante una barra de búsqueda.",
      ],
      [
        "12.png",
        "El motor de publicaciones de Wasppet. Permite crear, editar y organizar el contenido de una publicación.",
      ],
      ["13.png", "Motor de publicaciones de Wasppet con snippet adjunto."],
      [
        "14.png",
        "La página People permite buscar a un usuario por nombre o @nickname.",
      ],
      ["15.png", "Resultados de busqueda en la página People."],
      [
        "16.png",
        "Perfil de usuario consultado en la página People, las secciones de ‘seguridad’ y ‘actualizar datos del usuario’ están restringidas.",
      ],
      [
        "17.png",
        "Sección de publicaciones del usuario con nueva publicación creada mediante el motor de publicaciones.",
      ],
      [
        "18.png",
        "Cómo se muestran las publicaciones / artículos a la comunidad Wasppet.",
      ],
      ["19.png", "Sección de datos de la publicación y comentarios."],
    ],
    movilPreview: [
      ["1.png", "Wasppet.dev"],
      ["2.png", "Sign-up."],
      ["3.png", "Log-in."],
      [
        "4.png",
        "Perfil o página 'Home' con datos y configuraciones del usuario logeado.",
      ],
      ["5.png", "Menú y modo luminoso."],
      ["6.png", "Menú y modo oscuro."],
      ["7.png", "Opciones de seguridad."],
      ["8.png", "Publicaciones del usuario."],
      [
        "9.png",
        "Página de Notifications, muestra cómo el usuario recibe notificaciones.",
      ],
      [
        "10.png",
        "Página My snippets permite al usuario ver y crear sus propios fragmentos para usar en publicaciones o simplemente guardar el código.",
      ],
      ["11.png", "Página My snippets, creando un snippet de JavaScript."],
      [
        "12.png",
        "Los snippets se consultan por lotes y se muestran por paginación o mediante una barra de búsqueda.",
      ],
      [
        "13.png",
        "El motor de publicaciones de Wasppet. Permite crear, editar y organizar el contenido de una publicación.",
      ],
      ["14.png", "Motor de publicaciones de Wasppet con snippet adjunto."],
      [
        "15.png",
        "La página People permite buscar a un usuario por nombre o @nickname.",
      ],
      ["16.png", "Resultados de busqueda en la página People."],
      [
        "17.png",
        "Perfil de usuario consultado en la página People, las secciones de ‘seguridad’ y ‘actualizar datos del usuario’ están restringidas.",
      ],
      [
        "18.png",
        "Sección de publicaciones del usuario con nueva publicación creada mediante el motor de publicaciones.",
      ],
      [
        "19.png",
        "Cómo se muestran las publicaciones / artículos a la comunidad Wasppet.",
      ],
      ["20.png", "Sección de datos de la publicación y comentarios."],
    ],
  },
  propertyAppraiser: {
    name: "Property Appraiser",
    description: `
    Esta es una aplicación del mundo real, desarrolle la parte del frontend para una
    reconocida empresa mexicana que se dedica a la venta de bicicletas. Se trata de un
    analizador de inmuebles que evalúa automáticamente la viabilidad de un terreno o construcción
    para formar parte de la cadena de franquicias, sin embargo, estos en forma de solicitudes
    deben ser aprobados primero por un rol Regional, después Nacional y por último el Director de
    empresa, cada uno funciona como un filtro donde el Director es el último eslabón para que las
    solicitudes (inmuebles) sean completamente aprobadas. La aplicación posee un chat en tiempo real
    por cada solicitud, donde estos tres roles son capaces de comunicarse y las solicitudes de
    inmueble son la combinación de una serie de formularios, la información de estas se representa en un
    apartado especial de visualización donde además el usuario según el rol podrá aprobar o cancelar. Es
    posible la subida de imágenes y se previsualizan en un dialog antes de ser subidas y en un light box
    cuando estas ya están cargadas (se almacenan en el file system del backend).
    `,
    stack:
      "Angular, SCSS, TypeScript, JavaScript, Sweet Alert 2, RxJS, Material Angular",
    videoLink: "",
    githubRep: "",
    styles: {
      title: "Property Appraiser",
      titleCss: {
        fontWeight: "500",
        color: "#b50811",
      },
      bgColor: "#f2e3ff",
    },
    desktopPreview: [
      ["1.png", "Panel de administración / menú."],
      ["2.png", "Creación de nuevos usuarios por parte del rol Administrador."],
      ["3.png", "Validación de formularios."],
      [
        "4.png",
        "Formulario de tipo agencia. La aplicación cuenta con 3 tipos de formulario que se combinan en pares para formar una solicitud completa.",
      ],
      ["5.png", "Validación de los campos de los formularios."],
      [
        "6.png",
        "Estudio de mercado. La aplicación calcula un puntaje final en base a la información ingresada para finalmente calificar la viabilidad del inmueble.",
      ],
      [
        "7.png",
        "Al llenar uno de los formularios iniciales (ya sea el de tipo Agencia o CEDIS), el usuario es dirigido a llenar uno más para la indexación de restricciones.",
      ],
      [
        "8.png",
        "Formulario de restricciones con subida de imágenes (segundo y último en el proceso de creación de una solicitud de inmueble) e indexación automática del formulario previo.",
      ],
      [
        "9.png",
        "Dialog para previsualizar y editar las imágenes que se subirán en cada apartado de restricción.",
      ],
      [
        "10.png",
        "Una vez que se llena el segundo formulario (restricciones) ambos son adjuntados en una nueva instancia de objeto en la DB, el objeto de la solicitud completa (se unen en uno solo).",
      ],
      ["11.png", "Visualización de las solicitudes."],
      [
        "12.png",
        "Visualización de la información y análisis de cada solicitud de inmueble.",
      ],
      ["13.png", "Estudio de mercado del inmueble de la solicitud."],
      [
        "14.png",
        "Puntuación y calificación del inmueble según el estudio de mercado.",
      ],
      [
        "15.png",
        "Reporte de restricciones (información del segundo formulario de restricciones).",
      ],
      [
        "16.png",
        "Light box para visualizar las imágenes de cada apartado de restricciones.",
      ],
      [
        "17.png",
        "Botones de acción para aprobar o cancelar la solicitud de inmueble.",
      ],
      ["18.png", "Login."],
      ["19.png", "Al crearse una nueva cuenta los usuarios deben validarla."],
      ["20.png", "Validación de cuenta con código de verificación."],
      ["21.png", ""],
      ["22.png", "Aprobación de las solicitudes."],
      [
        "23.png",
        "Solicitudes aprobadas por el rol Regional se le muestran al Nacional.",
      ],
      [
        "24.png",
        "Solicitudes aprobadas por el rol Nacional se le muestran al Director.",
      ],
      [
        "25.png",
        "El rol Director tiene un apartado para visualizar solo las solicitudes que han sido completadas (aprobadas por Regional, Nacional, Director).",
      ],
      ["26.png", "Chat en tiempo real con WebSockets."],
      ["27.png", "Chat entre Director y Nacional."],
    ],
    movilPreview: [
      ["1.png", "Panel de administración / menú."],
      ["2.png", "Creación de nuevos usuarios por parte del rol Administrador."],
      ["3.png", "Validación de formularios."],
      [
        "4.png",
        "Formulario de tipo agencia. La aplicación cuenta con 3 tipos de formulario que se combinan en pares para formar una solicitud completa.",
      ],
      ["5.png", "Validación de los campos de los formularios."],
      [
        "6.png",
        "Estudio de mercado. La aplicación calcula un puntaje final en base a la información ingresada para finalmente calificar la viabilidad del inmueble.",
      ],
      [
        "7.png",
        "Al llenar uno de los formularios iniciales (ya sea el de tipo Agencia o CEDIS), el usuario es dirigido a llenar uno más para la indexación de restricciones.",
      ],
      [
        "8.png",
        "Formulario de restricciones con subida de imágenes (segundo y último en el proceso de creación de una solicitud de inmueble) e indexación automática del formulario previo.",
      ],
      [
        "9.png",
        "Dialog para previsualizar y editar las imágenes que se subirán en cada apartado de restricción.",
      ],
      [
        "10.png",
        "Una vez que se llena el segundo formulario (restricciones) ambos son adjuntados en una nueva instancia de objeto en la DB, el objeto de la solicitud completa (se unen en uno solo).",
      ],
      ["11.png", "Visualización de las solicitudes."],
      [
        "12.png",
        "Visualización de la información y análisis de cada solicitud de inmueble.",
      ],
      ["13.png", "Estudio de mercado del inmueble de la solicitud."],
      [
        "14.png",
        "Puntuación y calificación del inmueble según el estudio de mercado.",
      ],
      [
        "15.png",
        "Reporte de restricciones (información del segundo formulario de restricciones).",
      ],
      [
        "16.png",
        "Light box para visualizar las imágenes de cada apartado de restricciones.",
      ],
      [
        "17.png",
        "Botones de acción para aprobar o cancelar la solicitud de inmueble.",
      ],
      ["18.png", "Login."],
      ["19.png", "Al crearse una nueva cuenta los usuarios deben validarla."],
      ["20.png", "Validación de cuenta con código de verificación."],
      ["21.png", ""],
      ["22.png", "Aprobación de las solicitudes."],
      [
        "23.png",
        "Solicitudes aprobadas por el rol Regional se le muestran al Nacional.",
      ],
      [
        "24.png",
        "Solicitudes aprobadas por el rol Nacional se le muestran al Director.",
      ],
      [
        "25.png",
        "El rol Director tiene un apartado para visualizar solo las solicitudes que han sido completadas (aprobadas por Regional, Nacional, Director).",
      ],
      ["26.png", "Chat en tiempo real con WebSockets."],
      ["27.png", "Chat entre Director y Nacional."],
    ],
  },
};

// Plants images for projects single page
export const plants = [
  ["0.png", "right"],
  ["1.png", "left"],
  ["2.png", "left"],
  ["3.png", "left"],
  ["4.png", "left"],
  ["5.png", "left"],
  ["6.png", "left"],
  ["7.png", "left"],
  ["8.png", "left"],
  ["9.png", "left"],
  ["10.png", "left"],
  ["11.png", "left"],
  ["12.png", "left"],
];
