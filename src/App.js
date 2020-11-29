import React from 'react';
import './App.css';
import Layout from "./components/UI/Layout/Layout";
import Content from "./components/Content/Content";

const App = () => {
  return (
    <div className="App">
      <Layout>
        <Content/>
      </Layout>
    </div>
  );
}

export default App;
