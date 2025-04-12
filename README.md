# Descripción de la App Móvil
La aplicación móvil fue desarrollada con React Native utilizando Expo Go, una herramienta que simplifica el desarrollo y pruebas en dispositivos físicos sin necesidad de compilar manualmente. Esta app permite a los usuarios iniciar sesión y visualizar su información personal de manera sencilla.

# Funcionalidades Principales
Pantalla de inicio de sesión (login) con validación contra el backend

Visualización de datos del usuario una vez que ha iniciado sesión

Botón para mostrar los detalles completos del usuario, como nombre, correo electrónico, fecha de nacimiento, etc.

# Conexión con el Backend
La app consume la API REST del backend Flask desplegado en AWS EC2, utilizando la IP pública del servidor para enviar solicitudes. Una vez autenticado, el usuario puede ver sus datos personales, los cuales provienen de la base de datos MySQL en Amazon RDS.

# Tecnologías y Herramientas
Framework: React Native

Plataforma: Expo Go

Comunicación: Fetch/Axios hacia la ruta /api/users del backend

Backend: Flask en EC2

Base de datos: MySQL (Amazon RDS)