# 🤖 Robot Wars Frontend

Aplicación web desarrollada en **React** para gestionar y explorar robots famosos del cine, series y ciencia ficción. Permite a los usuarios visualizar detalles, agregar a favoritos, y a los administradores editar o eliminar contenido. Además, permite crear eventos históricos asociados a cada robot.

## 🧩 Tecnologías
```
- ⚛️ React + Vite
- 🧠 Context API (auth + favoritos)
- 🛠️ Tailwind CSS
- 📦 Axios
- 🧪 SweetAlert2
- 🌙 Soporte Dark Mode
- 🔐 Autenticación con roles (admin/usuario)
```

## 🚀 Instalación

```
Clona este repositorio:
git clone https://github.com/tu-usuario/robot-wars-frontend.git
cd robot-wars-frontend

Instala dependencias:
npm install

Levantá el proyecto:
npm run dev
```

📦 Scripts útiles
```
Comando	Descripción
npm run dev	Inicia el entorno de desarrollo
npm run build	Compila el proyecto para producción
npm run preview	Vista previa del build local
```

✨ Funcionalidades

```
🔍 Buscar y ver detalles de robots
❤️ Agregar/quitar de favoritos
✏️ Crear, editar y eliminar robots (solo admin)
📆 Asociar eventos históricos a robots
📱 Responsive
🔐 Login y manejo de sesión
📁 Estructura del proyecto
```

```
src/
├── api/              # Funciones Axios para llamadas a la API
├── components/       # Componentes reutilizables (cards, forms)
├── context/          # Contextos de autenticación y favoritos
├── pages/            # Vistas principales
├── routes/           # Configuración de rutas
└── main.jsx          # Punto de entrada de la app
```

Link del despliegue: 
```
robotsfamosos.netlify.app
```