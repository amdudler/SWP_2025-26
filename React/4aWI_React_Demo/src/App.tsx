import TrafficLight from "./components/TrafficLight";
import TrafficStatistics from "./components/TrafficStatistics";

export default function App() {
  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">🚦 Ampel System</h1>

      <div className="grid grid-cols-2 gap-6 w-80">
        <TrafficLight mode="red" />
        <TrafficLight mode="redyellow" />
        <TrafficLight mode="green" />
        <TrafficLight mode="blinking" />
      </div>

      <TrafficStatistics />
    </div>
  );
}
