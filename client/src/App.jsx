import { useState } from "react";
import axios from "axios";

function App() {
  const [text, setText] = useState("");
  const [result, setResult] = useState(null);
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleAnalyze = async () => {
    if (!text.trim()) return;

    try {
      setLoading(true);

      const response = await axios.post("https://ai-security-copilot.onrender.com/analyze", {
        text,
      });

      setResult(response.data);

      const newHistoryItem = {
        input: text,
        result: response.data,
        time: new Date().toLocaleTimeString(),
      };

      setHistory([newHistoryItem, ...history]);
    } catch (error) {
      console.error("Error analyzing text:", error);
    } finally {
      setLoading(false);
    }
  };

  const severityColor =
    result?.severity === "High"
      ? "bg-red-600"
      : result?.severity === "Medium"
      ? "bg-yellow-500"
      : "bg-green-600";

  return (
    <div className="min-h-screen bg-slate-950 text-white p-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-6">
          <h1 className="text-4xl font-bold text-blue-400">
            AI Security Copilot
          </h1>
          <p className="text-slate-400 mt-2">
            SOC-style alert analyzer for suspicious emails, login events, and scripts.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-4 mb-6">
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-4">
            <p className="text-slate-400">Alerts Reviewed</p>
            <h2 className="text-3xl font-bold">{history.length}</h2>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-xl p-4">
            <p className="text-slate-400">High Risk</p>
            <h2 className="text-3xl font-bold text-red-500">
              {history.filter((item) => item.result.severity === "High").length}
            </h2>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-xl p-4">
            <p className="text-slate-400">Status</p>
            <h2 className="text-3xl font-bold text-green-500">Online</h2>
          </div>
        </div>

        <div className="grid xl:grid-cols-3 gap-6">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
            <h2 className="text-xl font-semibold mb-4">
              Analyze Security Event
            </h2>

            <textarea
              className="w-full bg-slate-950 border border-slate-700 rounded-lg p-4 h-44 text-white outline-none focus:border-blue-500"
              placeholder="Paste suspicious email, login alert, PowerShell activity, or security log here..."
              value={text}
              onChange={(e) => setText(e.target.value)}
            />

            <div className="flex gap-2 mt-3 flex-wrap">
              <button
                onClick={() =>
                  setText("User received email asking to reset Microsoft 365 password")
                }
                className="bg-slate-800 hover:bg-slate-700 px-3 py-2 rounded-lg text-sm"
              >
                Phishing Test
              </button>

              <button
                onClick={() => setText("PowerShell script ran from temp folder")}
                className="bg-slate-800 hover:bg-slate-700 px-3 py-2 rounded-lg text-sm"
              >
                Script Test
              </button>
            </div>

            <button
              onClick={handleAnalyze}
              disabled={loading}
              className="mt-5 bg-blue-600 hover:bg-blue-700 transition px-6 py-3 rounded-lg font-semibold disabled:opacity-50"
            >
              {loading ? "Analyzing..." : "Analyze Alert"}
            </button>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
            <h2 className="text-xl font-semibold mb-4">Analysis Result</h2>

            {!result && (
              <p className="text-slate-400">
                No alert analyzed yet. Paste an event and click Analyze Alert.
              </p>
            )}

            {result && (
              <div className="space-y-4">
                <div>
                  <p className="text-slate-400 text-sm">Category</p>
                  <h3 className="text-2xl font-bold">{result.category}</h3>
                </div>

                <div>
                  <p className="text-slate-400 text-sm mb-1">Severity</p>
                  <span
                    className={`${severityColor} px-3 py-1 rounded-full text-sm font-bold`}
                  >
                    {result.severity}
                  </span>
                </div>

                <div>
                  <p className="text-slate-400 text-sm">Explanation</p>
                  <p>{result.explanation}</p>
                </div>

                <div>
                  <p className="text-slate-400 text-sm mb-2">
                    Recommended Actions
                  </p>
                  <ul className="space-y-2">
                    {result.actions.map((action, index) => (
                      <li
                        key={index}
                        className="bg-slate-950 border border-slate-800 rounded-lg p-3"
                      >
                        {action}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
            <h2 className="text-xl font-semibold mb-4">Analysis History</h2>

            {history.length === 0 && (
              <p className="text-slate-400">
                No history yet. Your analyzed alerts will appear here.
              </p>
            )}

            <div className="space-y-3 max-h-[500px] overflow-y-auto">
              {history.map((item, index) => (
                <div
                  key={index}
                  className="bg-slate-950 border border-slate-800 rounded-xl p-4"
                >
                  <div className="flex justify-between items-center mb-2">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-bold ${
                        item.result.severity === "High"
                          ? "bg-red-600"
                          : item.result.severity === "Medium"
                          ? "bg-yellow-500"
                          : "bg-green-600"
                      }`}
                    >
                      {item.result.severity}
                    </span>
                    <span className="text-xs text-slate-500">{item.time}</span>
                  </div>

                  <p className="text-sm font-semibold">
                    {item.result.category}
                  </p>

                  <p className="text-xs text-slate-400 mt-2 line-clamp-2">
                    {item.input}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;