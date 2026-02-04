# 🎵 RollingCode Music

Una aplicación web moderna para descubrir, reproducir y gestionar tu música favorita con integración de iTunes.

## 📋 Descripción

RollingCode Music es una plataforma de música interactiva construida con React y Vite que permite a los usuarios explorar canciones, reproducir música, dejar comentarios y buscar contenido desde iTunes. La aplicación cuenta con un diseño intuitivo y funcionalidades completas de gestión de música.

## ✨ Características

- 🎧 **Reproductor de Audio**: Reproduce tus canciones favoritas con controles completos
- 🔍 **Búsqueda de iTunes**: Busca y descubre música desde la API de iTunes
- 💬 **Sistema de Comentarios**: Comparte tus opiniones sobre las canciones
- 📝 **Información Detallada**: Visualiza información completa de cada canción
- 🎨 **Interfaz Moderna**: Diseño responsivo y atractivo
- 🔐 **Panel de Administración**: Gestiona el contenido (requiere autenticación)
- 🗂️ **Listas de Reproducción**: Organiza tus canciones favoritas

## 🚀 Tecnologías

- **React 18**: Biblioteca de UI moderna
- **Vite**: Herramienta de construcción ultrarrápida
- **React Router**: Navegación entre páginas
- **ESLint**: Linting y calidad de código
- **CSS Moderno**: Estilos personalizados

## 📦 Instalación

1. Clona el repositorio:
```bash
git clone <url-del-repositorio>
cd "RollingCode Music"
```

2. Instala las dependencias:
```bash
npm install
```

3. Inicia el servidor de desarrollo:
```bash
npm run dev
```

4. Abre tu navegador en ``

## 🛠️ Scripts Disponibles

```bash
npm run dev          # Inicia el servidor de desarrollo
npm run build        # Construye la aplicación para producción
npm run preview      # Previsualiza la build de producción
npm run lint         # Ejecuta ESLint para verificar el código
```

## 📁 Estructura del Proyecto

```
RollingCode Music/
├── public/              # Archivos estáticos
├── src/
│   ├── assets/         # Imágenes y recursos
│   ├── components/     # Componentes reutilizables
│   │   ├── Audioplayer.jsx
│   │   ├── SearchItunes.jsx
│   │   ├── SongCard.jsx
│   │   ├── Songlist.jsx
│   │   └── ...
│   ├── data/           # Datos y almacenamiento local
│   ├── pages/          # Páginas de la aplicación
│   │   ├── Home.jsx
│   │   ├── Detail.jsx
│   │   ├── Admin.jsx
│   │   └── ...
│   ├── services/       # Servicios y APIs
│   │   └── itunesApi.js
│   ├── styles/         # Estilos globales
│   ├── App.jsx         # Componente principal
│   └── main.jsx        # Punto de entrada
├── index.html
├── package.json
└── vite.config.js
```
## 🔐 Credenciales de Acceso (Testing)

Para facilitar las pruebas del proyecto **Rolling Code Music**, se incluyen los siguientes usuarios de prueba con distintos roles dentro de la aplicación.

### 👑 Administradores

Estos usuarios tienen acceso completo al panel **Admin**, incluyendo gestión de canciones y funciones CRUD.

* **[adminfacu@rolling.com](mailto:adminfacu@rolling.com)**
  Password: `123456789`

* **[adminmike@rolling.com](mailto:adminmike@rolling.com)**
  Password: `maikisita1234`

* **[adminbenja@rolling.com](mailto:adminbenja@rolling.com)**
  Password: `987654321`

---

### 🎧 Usuario Invitado (INVITED)

Cuenta con permisos limitados dentro de la plataforma.

* **[gonzavip@rolling.com](mailto:gonzavip@rolling.com)**
  Password: `gonza1234`

---

⚠️ **Importante:**
Estas credenciales están pensadas únicamente para entorno de desarrollo y demostración académica. No utilizar en producción real.



## 🔧 Configuración

La aplicación está configurada con:

- **Vite**: Configuración optimizada para desarrollo rápido
- **ESLint**: Reglas de linting para mantener código limpio
- **React Router**: Para navegación SPA

## 📱 Páginas

- **Home**: Página principal con lista de canciones
- **Detail**: Vista detallada de una canción
- **About**: Información sobre la aplicación
- **Admin**: Panel de administración
- **Login**: Página de autenticación

## 🤝 Contribuir

Las contribuciones son bienvenidas. Por favor:

1. Haz fork del proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT.

## 👨‍💻 Autor

Desarrollado con ❤️ por el equipo de RollingCode

---

⭐ Si te gusta este proyecto, no olvides darle una estrella!
