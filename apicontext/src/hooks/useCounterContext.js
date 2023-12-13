    // useCounterContext.js
    import { useContext } from "react";
    import  CounterContext from "../context/CounterContext"; // Ajuste a importação aqui

    export const useCounterContext = () => {
    const context = useContext(CounterContext);

    if (!context) {
        console.log("Contexto não encontrado!");
    }

    return context;
    };
