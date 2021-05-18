function App(props) {
  const subject = props.subject;
  console.log(props);
  return (
    <div className="App">
      <header className="App-header">
        <p>Hello, {subject}!</p>
      </header>
    </div>
  );
}

export default App;
