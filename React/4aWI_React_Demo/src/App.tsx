import Card from './components/Card';

export default function App() {
  return (
    <div>
      <h1>HELLO</h1>
      <div className="grid grid-cols-2 w-80 gap-4"></div>
      <Card title="Susi" description="Super Lehrerin"/>
      <Card title="Hans" description="Super Typ"/>
      <Card title="Sepp" description="Echt gut"/>
    </div>
  );
}
