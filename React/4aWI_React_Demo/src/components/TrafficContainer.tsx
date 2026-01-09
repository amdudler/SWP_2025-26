import type { ReactNode } from "react";

type Props = {
    children: ReactNode;
};

export default function TrafficLightContainer({ children }: Props) {
    return (
        <div className="bg-black p-4 rounded-xl flex flex-col gap-3">
            {children}
        </div>
    );
}
