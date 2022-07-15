import "./App.css";
import github from "./GitHub-Mark.png";
import logo from "./logo.svg";
import ReactForm from "./ReactForm";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          Tell me a secret &nbsp;
          <a href="https://github.com/skarfie123/ghp-input">
            <img class="github" src={github} alt="GitHub Logo" />
          </a>
        </h1>
        <div class="row">
          <div class="column">
            <h2>Via a html form</h2>
            <form>
              <label for="secret1">Secret 1:</label>
              <br />
              <input type="password" id="secret1" name="secret1" />
              <input type="submit" value="Submit" />
            </form>
          </div>
          <div class="column">
            <h2>Via a react form</h2>
            <ReactForm />
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
