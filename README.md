````markdown
# Proyecto E-commerce Entrega Final Curso React JS

Este proyecto es una aplicación web de comercio electrónico construida con **React** y **Vite**. La aplicación permite a los usuarios navegar por un catálogo de productos, ver detalles de cada uno, agregar productos al carrito de compras y finalizar la compra.

## Características Principales

1. **Visualización de productos**: El catálogo de productos es mostrado con la ayuda de componentes que permiten filtrar y visualizar los productos disponibles.
2. **Detalle de productos**: Cada producto tiene una vista de detalle donde el usuario puede ver información más específica y decidir si desea agregarlo al carrito.
3. **Carrito de compras**: El carrito de compras mantiene los productos seleccionados por el usuario y permite gestionar la cantidad de cada artículo.
4. **Finalización de compra**: Los usuarios pueden proceder con la compra de los productos seleccionados, y se guarda un registro de la transacción.

## Tecnologías Utilizadas

- **React**: Para la construcción de la interfaz de usuario y la gestión de componentes.
- **Vite**: Como herramienta de construcción rápida y configuración del entorno de desarrollo.
- **Firebase**: Se utiliza Firebase Firestore para gestionar la base de datos de productos y pedidos. También se utiliza Firebase Authentication para gestionar el inicio de sesión de los usuarios. (No logrado).
- **React Router**: Para manejar la navegación dentro de la aplicación de una manera declarativa y mantener la SPA (Single Page Application).

### Principales Componentes:

- `ItemListContainer`: Muestra el catálogo de productos con opción de filtrado.
- `ItemDetailContainer`: Despliega la información detallada de un producto seleccionado.
- `Cart`: Muestra los productos agregados al carrito y permite modificar las cantidades.
- `Checkout`: Formulario para completar la compra y confirmar el pedido.

## Instalación y Configuración

1. **Clonar el repositorio:**

   ```bash
   git clone https://github.com/Carlos-Bertoni/ProyectoFinal-Bertoni.git
   ```
````

2. **Instalar dependencias:**

   ```bash
   npm install
   ```

3. **Ejecutar el proyecto:**

   ```bash
   npm run dev
   ```

## Dependencias

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [Firebase](https://firebase.google.com/docs/web/setup)
- [React Router](https://reactrouter.com/en/main)
- [React Bootstrap](https://react-bootstrap.github.io/)

## Próximas Mejoras

- **Autenticación de usuarios**: Integrar un sistema de autenticación completo con Firebase Authentication.
- **Historial de órdenes**: Mostrar el historial de compras del usuario autenticado.
- **Búsqueda de productos**: Implementar una barra de búsqueda para facilitar la navegación por el catálogo.

```

Este markdown incluye las características del proyecto, pasos de instalación, y las dependencias utilizadas con sus respectivas documentaciones oficiales. ¡Gracias!
```
