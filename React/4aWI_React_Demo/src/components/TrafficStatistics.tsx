import rawData from "../data/trafficData.json";

type TrafficEntry = {
    id: number;
    name: string;
    cars: number;
};

const data = rawData as TrafficEntry[];

export default function TrafficStatistics() {
    return (
        <div className="mt-6 bg-gray-100 p-4 rounded-xl w-80">
            <h2 className="font-bold mb-2">🚗 Verkehr Statistik</h2>

            {data.map((a: TrafficEntry) => (
                <div key={a.id} className="flex justify-between">
                    <span>{a.name}</span>
                    <span>{a.cars} Autos</span>
                </div>
            ))}
        </div>
    );
}
