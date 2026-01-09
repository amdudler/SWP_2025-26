import { useEffect, useState } from "react";
import TrafficLightContainer from "./TrafficContainer";

type Props = {
    mode: "red" | "redyellow" | "green" | "blinking";
};

export default function TrafficLight({ mode }: Props) {
    const [blink, setBlink] = useState(true);

    useEffect(() => {
        if (mode === "blinking") {
            const i = setInterval(() => setBlink((b) => !b), 500);
            return () => clearInterval(i);
        }
    }, [mode]);

    return (
        <TrafficLightContainer>
            <Light color="red" on={mode === "red" || mode === "redyellow"} />
            <Light color="yellow" on={mode === "redyellow" || (mode === "blinking" && blink)} />
            <Light color="green" on={mode === "green"} />
        </TrafficLightContainer>
    );
}

function Light({ color, on }: { color: string; on: boolean }) {
    return (
        <div
            className="w-12 h-12 rounded-full"
            style={{
                backgroundColor: on ? color : "#333",
                boxShadow: on ? `0 0 15px ${color}` : "none"
            }}
        />
    );
}
