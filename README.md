# SPRING 5. REACT - S5.Onboarding digital (React)
## Descripción del proyecto

Este proyecto es una aplicación interactiva desarrollada en React que guía al usuario a través de un proceso de onboarding digital. Incluye componentes dinámicos como indicadores, transiciones suaves y botones de navegación para garantizar una experiencia intuitiva y atractiva.
<br>
<br>

![image](https://github.com/user-attachments/assets/99df1477-e2a0-4a63-a5de-5127d84170c4)
<br>*Vista de la primera tarjeta.*
<br>
<br>
## Estructura principal del proyecto

La estructura sigue un enfoque modular para mantener el código organizado y fácil de escalar.
- **src**
   - **assets/**: Recursos estáticos como imágenes y estilos.
   - **components/**: Componentes reutilizables como botones, indicadores, y tarjetas.
   - **data/**: Datos de prueba o configuración estática para la app (por ejemplo, tutorialData).
   - **App.jsx**: Punto de entrada principal para el proyecto.
   - **Card.jsx**: Componente principal para mostrar contenido dinámico basado en el paso actual.
<br>

## Funcionalidades principales

- **Navegación paso a paso**: Los usuarios pueden avanzar y retroceder entre los pasos del tutorial.
- **Indicadores dinámicos**: Muestran el progreso del usuario y permiten saltar a pasos específicos.
- **Transiciones suaves**: La interfaz utiliza efectos visuales para mejorar la experiencia del usuario.
- **Gestión de estados**: Controla el flujo de navegación con **useState** y **useEffect**.
<br>

## Tecnologias utilizadas en el proyecto

- **React**: Framework principal para construir la interfaz de usuario.
- **Styled-components**: Para estilos dinámicos basados en props.
- **CSS Modules**: Modularización de estilos para evitar conflictos entre clases.
- **JavaScript**: Lógica y funcionalidades del proyecto.
<br>

## Instalación para ver el proyecto

1. Clona el repositorio:

   ```bash
   git clone https://github.com/danilly7/s5onboardingDigital-react.git
   cd s5onboardingDigital-react
   ``` 
   
2. Instala las dependencias del proyecto:

   ```bash
   npm install
   ```

3. Inicia el servidor de desarrollo:

    ```bash
   npm run dev
   ```
4. Abre el navegador y accede a la URL proporcionada en la consola, ésta mostrará un localhost. El host puede variar, pero será algo similar a:

    ```bash
   Local: http://localhost:5174/
   ```
<br>

## Autora

- Danilly Condori Lerpido - [GitHub](https://github.com/danilly7)
