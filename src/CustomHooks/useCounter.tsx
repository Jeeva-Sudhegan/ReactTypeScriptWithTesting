import { useState, useCallback } from "react"

export const useCounter = () => {
    const [ count, setCount ] = useState(0);

    const changeCount = useCallback( () => setCount( prevCount => prevCount + 1 ), [] );

    return { count, changeCount };
}