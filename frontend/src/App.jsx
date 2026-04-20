import { useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    try {
      const res = await fetch("https://namegenerator-ressdominik-backend.jcloud.jedlik.cloud/api/name");
      const name = await res.json();
      setData(name);
    } catch {
      setData("Hiba történt a lekérés közben.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="app-shell">
      <section className="generator-card">
        <h1>Random név generátor</h1>
        <p>Kattints a gombra egy új névért.</p>
        <button type="button" onClick={fetchData} disabled={loading}>
          {loading ? "Betöltés..." : "Generálás"}
        </button>
        <div className="result-box">{data || "Itt fog megjelenni az eredmeny."}</div>
      </section>
    </main>
  );
}

export default App;
