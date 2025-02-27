import { useEffect, useState } from "react";

const MS_IN_MINUTES = 60_000;

export default function Countdown() {
    const [time, setTime] = useState(() => {
        const today = new Date();
        today.setHours(23, 59, 59, 0);

        const now = new Date();
        now.setMilliseconds(0);

        const offset = today.valueOf() - now.valueOf();
        return new Date(offset + today.getTimezoneOffset() * MS_IN_MINUTES);
    });

    useEffect(() => {
        const handlerId = setInterval(() => {
            setTime((prevTime) => {
                const copy = new Date(prevTime);
                return new Date(copy.setSeconds(copy.getSeconds() - 1));
            });
        }, 1000);

        return () => clearInterval(handlerId);
    }, []);

    return (
        <>
            {time.toLocaleTimeString([], {
                hour12: false,
            })}
        </>
    );
}
