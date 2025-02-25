import { useEffect, useState } from "react";

export default function useDebounce<T>(value: T, timeoutMs: number) {
    const [debouncedValue, setDebouncedValue] = useState<T>(value)

    useEffect(() => {
        const timeout = setTimeout(() => {
            setDebouncedValue(value)
        }, timeoutMs)

        return () => {
            clearTimeout(timeout)
        }
    }, [value])


    return debouncedValue
}
