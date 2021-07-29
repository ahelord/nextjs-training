#Seccion 9

## Utilizar hooks de react
- utilizaremos useState
- utilizaremos useCounter
- utilizaremos useEffect (algo cambio dispera esta funcion)
- utilizaremos useRef me sirve para mantener una posicion en memoria de la computadora, necesitemos una variable que 
necesito controlar el cambio pero no necesito que redibuje todo
- utilizaremos useLayerEffect
- utilizaremos memo
- utilizaremos useMemo memorizar memo para depreciaciones de rendimiento
- utilizaremos useCallback


- Profundizar en el tema de los Hooks

- Crear otros customHooks

- useState

- useCounter - Personalizado

- useEffect y sus precauciones

- useRef

- useFetch - Personalizado + optimizaciones

- useLayoutEffect

- Memo

- useMemo

- useCallback



¿Qué veremos en esta sección?

    useReducer

    Reducers

    Teoría de un reducer

    Aplicación de TODOs

    CRUD local

Esta es una sección dedicada a comprender el concepto de un Reducer, el cual es sumamente importante para poder entrar a Redux o bien usar el contextAPI fácilmente.


Que es un reducers?
1. Una funcion comun y corriente no puede ser asincrona
2. debe ser una funciona pura todo lo que esa funcion realice se debe resolver de manera interno
3. Esta funcion debe retorna un nuevo estado
5. No se debe llamar localStorage o sessionStorage se puede hacer pero son tareas sincronas son efectos secundarios si no regresamos un nuevo estado se rompe
6. para modificar el state no debe requierir mas de una accion que puede tener un argumento
4. usalmente recibe dos argunmentos el valor inicial y la accion a ejecutar

La idea es tener en un solo lugar controlado las acciones que modifican el state de mi aplicacion podemos ver a nivel general
las modificaciones que tiene mi aplicacion, si quiero saber que acciones hace esa aplicacion, cuando mire los reducers
debe aparecer la logica de las posibles acciones de mi aplicacion

Ciclo de vida reducers
- hay un state inicial
- le pasar esos todos a la pagina o la vista
- la pagina no habla directamente con el state
- La pagina tiene que hacer una action 
- la accion es la que nosotros le vamos a enviar al reducer
- el reducer tiene el mapa de las acciones que se pueden realizar
- el reducer tiene los procedimiento para agregar eliminar actualizar, sino encuentra el action devuelve el estado anterior
- una sola via
- de manera controlada

useReducer
- useState y useReducer se usan para lo mismo
- si tienen varias acciones y estar enviando con los properties
- cuando se tiene una lógica compleja que involucra múltiples subvalores o cuando el próximo estado depende del anterior


```
const initialState = {count: 0};

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return {count: state.count + 1};
    case 'decrement':
      return {count: state.count - 1};
    default:
      throw new Error();
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      Count: {state.count}
      <button onClick={() => dispatch({type: 'decrement'})}>-</button>
      <button onClick={() => dispatch({type: 'increment'})}>+</button>
    </>
  );
}
```



