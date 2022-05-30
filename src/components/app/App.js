import { Controls } from "../controls/controls";
import { Gentleman } from "../gentleman/gentleman.js";
import { Gentlemens } from "../gentlemes/gentlemes.js";
import "./App.css";

function App() {
    return (
        <div className="container">
            <header className="main-header">
                <h1 class="main-title">The pointing gentlemen</h1>
            </header>
            <Controls></Controls>
            <main className="main">
                <ul className="gentlemen">
                    <Gentleman></Gentleman>
                </ul>
            </main>
        </div>
    );
}

export default App;
