# 🧪 React Render Labs - Taller de Bucles Infinitos

Este proyecto de laboratorio ha sido diseñado para reproducir, analizar y corregir de manera aislada e instructiva dos de los errores más comunes en React relacionados con ciclos de renderizado y bucles infinitos.

**Institución:** Instituto Superior Tecnológico Monvilis  
**Asignatura:** Fundamentos de React  
**Periodo:** Primer Parcial  

---

## 📘 CASO 1: Bucle Infinito mediante `useEffect`

### 1. Qué ocurre cuando se ejecuta el ejemplo con error
El navegador experimenta una degradación inmediata del rendimiento, el hilo de ejecución principal se satura y la pestaña de la aplicación puede llegar a congelarse por completo debido a un consumo excesivo de CPU.

### 2. Por qué se produce el bucle infinito
Se genera porque se invoca una función actualizadora de estado (`setCount`) dentro del bloque del `useEffect`, y al mismo tiempo, esa misma variable de estado (`count`) se declara dentro del arreglo de dependencias. Cada vez que el efecto se ejecuta, modifica el estado; al modificarse el estado, React fuerza un re-renderizado; al re-renderizarse, el efecto detecta que su dependencia cambió y se vuelve a ejecutar de manera inmediata y cíclica.

### 3. Síntomas en la aplicación, el navegador o la consola
- Ralentización crítica de la interfaz de usuario.
- Incremento drástico en el uso de recursos de hardware.
- Multiplicación descontrolada de llamadas síncronas en segundo plano.

### 4. Cómo se solucionó el problema y por qué evita nuevas renderizaciones
Se eliminó la variable del arreglo de dependencias, dejándolo completamente vacío `[]`. Esto le indica formalmente a React que la lógica contenida dentro del efecto debe ejecutarse **únicamente una vez** durante la fase de montaje inicial del componente en el DOM, rompiendo la cadena infinita de actualización.

---

## 📕 CASO 2: Error “Too many re-renders”

### 1. Qué ocurre cuando se ejecuta el ejemplo con error
La aplicación colapsa instantáneamente antes de que el usuario pueda visualizar cualquier interfaz o presionar algún botón, mostrando una pantalla en blanco.

### 2. Por qué se produce el error de renderizado
Ocurre debido a que la función mutadora de estado (`setCount`) se llama directamente en el cuerpo o flujo síncrono del componente. React interpreta que se está solicitando un cambio de estado en medio de la fase de renderizado ("Render Phase"), lo que obliga a abortar el proceso actual para planificar un re-renderizado inmediato, cayendo en un bucle cerrado que el motor de React detiene por seguridad.

### 3. Síntomas en la aplicación, el navegador o la consola
- Interrupción total de la aplicación (Pantalla blanca).
- Mensaje explícito de error fatal en la consola de desarrollo del navegador:  
  `Uncaught Error: Too many re-renders. React limits the number of renders to prevent an infinite loop.`

### 4. Cómo se solucionó el problema y por qué evita nuevas renderizaciones
Se encapsuló la llamada de actualización dentro de una función manejadora de eventos (`handleIncrement`), la cual está vinculada directamente al atributo `onClick` de un botón. Al estar contenida, la mutación del estado deja de ser síncrona con el renderizado y pasa a ejecutarse de forma asíncrona y controlada exclusivamente bajo demanda explícita del usuario (al hacer clic).

---

## 🛠️ Instalación y Ejecución Local

Para clonar y poner en marcha este laboratorio de manera local, ejecute los siguientes comandos en su terminal:

1. **Clonar el repositorio público:**
   ```bash
   git clone [https://github.com/GaloRamiro/Render-Lab.git](https://github.com/GaloRamiro/Render-Lab.git)
   cd react-render-lab