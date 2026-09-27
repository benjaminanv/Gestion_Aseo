# Gestion aseo
Gestion aseo es un proyecto para gestionar tareas de aseo en un entorno preconfigurado, en este caso se representa una simulacion de el edifico L de la Universidad Autonoma de Chile en esepcifico la sede de Temuco.

# Login
USUARIO: admin
PASSWORD: UA2026

# Funcionalidades
El programa cuenta con Vista Principal, Salas, Asignacion Trabajadores y Historial de Trabajadores

Vista Principal: En esta escena se muestra un menu principal con datos rapidos a la vista como son total de salas en gestion y el estado de estas que pueden ser 3 (Limpias, Pendiente y En proceso), ademas de un grafico de torta de sus estados.

Salas: En esta escena se enseñan las salas vizualizadas por piso asi obteniendo una facilidad y comodida para poder observar las salas, al seleccionar una sala accedemos a una burbuja con informacion piso, estado, ultima limpieza,trabajadores asignados, incidencias y botones para actualizar el estado de la sala
ademas la caracteristica de incidencias permite agregar descripciones de estas y marcar su estado como pendiente o resuelta y alternar entre estos estados si es necesario, como caracteristica de esta escena se implemento la capacidad de filtrar por estado asi poder visualizar su estado rapidamente, como ultima caracteristica relacionada con las incidencias cuando una sala tiene una incidencia pendiente se muestra una marca de advertencia sobre ella para que sea mas facil de ver.

Asignar Trabajadores: En esta escena con acceso solamente a administradores o gestores del sistema podemos encontrar a cada uno de los trabajadores inscritos permitiendonos gestionar sus salas designadas para trabajar pudiendo agregar o quitar asignaciones dependiendo de los requisitos

Historial de Trabajadores: En esta escena podemos encontrar a la totalidad de trabajadores inscritos perimitiendo la visual rapida de sus salas asignadas y el estado de cada una de ellas.

Como agregado para mejorar la experiencia de usuario se agrego el boton de "cerrar sesion" en la parte inferior izquierda.