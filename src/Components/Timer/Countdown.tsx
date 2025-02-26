import { Box } from "@radix-ui/themes";
import { useEffect, useState } from "react";

export default function Timer() {
    const [time, setTime] = useState(() => {
        const today = new Date()
        today.setHours(23, 59, 59, 999)

        const now = new Date()

        const offset = today.valueOf() - now.valueOf()
        return new Date(offset)
    })

    useEffect(() => {
        const handlerId = setInterval(() => {
            setTime(time => new Date(
                time.setSeconds(time.getSeconds() - 1)
            ))
        }, 1000)

        return () => {
            clearInterval(handlerId)
        }
    }, [])

    return (
        <Box>
            {time.toLocaleTimeString([], {
                hour12: false
            })}
        </Box>
    )
}
