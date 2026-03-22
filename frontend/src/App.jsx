import { useState } from "react";

import axios from "axios";

import Card from "./components/Card";

import { calculateScore } from "./utils/scoring";



function App() {

  const [input, setInput] = useState("");

  const [result, setResult] = useState(null);

  const [loading, setLoading] = useState(false);



  const analyze = async () => {

    setLoading(true);



    try {

      const res = await axios.post("https://explain-my-plan-ai-clarity-structuring-tool2-2a994kg62.vercel.app/", {

        input,

      });



      const score = calculateScore(res.data);



      setResult({ ...res.data, score });



    } catch (err) {

      console.error(err);

    }



    setLoading(false);

  };



  return (

    <div style={{ maxWidth: "800px", margin: "auto", padding: "40px 20px", textAlign: "center" }}>
      <h1 style={{ fontSize: "2.5rem", marginBottom: "10px" }}>Explain My Plan</h1>
      <p style={{ color: "#666", marginBottom: "30px" }}>Turn vague ideas into structured action plans.</p>



      <textarea
        rows="6"
        style={{ 
          width: "100%", 
          padding: "15px", 
          borderRadius: "10px", 
          border: "1px solid #ddd",
          fontSize: "16px",
          boxShadow: "inset 0 2px 4px rgba(0,0,0,0.05)"
        }}
        placeholder="Example: I want to start a YouTube channel and earn money quickly..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />



      <button onClick={analyze} style={{ marginTop: "10px", 
          padding: "12px 30px", 
          backgroundColor: "#2563eb", 
          color: "white", 
          border: "none", 
          borderRadius: "8px",
          cursor: "pointer",
          fontWeight: "bold",
          opacity: loading ? 0.7 : 1}}>

        {loading ? "Analyzing..." : "Analyze"}

      </button>



      {result && (

        <>

          <Card title="Goal" content={result.goal} />

          <Card title="method" content={result.method} />

          <Card

            title="Steps"

            content={

              <ol style={{ textAlign: "left", paddingLeft: "20px", margin: "0" }}>

                {result.steps.map((step, i) => (

                  <li key={i} style={{ marginBottom: "5px" }}>{step}</li>

                ))}

              </ol>

            }

          />

          <Card title="Timeline" content={result.timeline} />

          <Card title="Resources" content={result.resources} />

          <Card

            title="Missing Elements"

            content={

              <ul style={{ textAlign: "left", paddingLeft: "20px", margin: "0"}}>

                {Object.entries(result.missing_elements).map(([key, value], i) => (

                  <li key={i} style={{ marginBottom: "5px" }}>

                    <strong>{key.replace("_", " ")}:</strong> {value}

                  </li>

                ))}

              </ul>

            }

          />

          <Card title="Simplified Version" content={result.simplified_version} />

          <Card

            title="Action Steps"

            content={

              <ul style={{ textAlign: "left", listStyleType: "disc" }}>

                {result.action_steps.map((step, i) => (

                  <li key={i}>{step}</li>

                ))}

              </ul>

            }

          />

          <Card title="Clarity Score" content={`${result.score}/100`} />

        </>

      )}

    </div>

  );

}



export default App;