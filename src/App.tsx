import "./App.css";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="p-0 lg:p-8 min-h-screen flex flex-col">
      <div className="flex-grow">
        <h1 className="text-4xl">New</h1>
        <p className="text-neutral-400">
          Discover the latest submissions in the Hacker News community.
        </p>
      </div>
      <Footer />
    </div>
  );
}

export default App;
