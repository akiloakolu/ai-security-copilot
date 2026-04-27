const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.post("/analyze", (req, res) => {
  const { text } = req.body;

  let result = {
    category: "General Security Alert",
    severity: "Medium",
    explanation: "This looks like a general security issue that needs review.",
    actions: [
      "Review the event carefully",
      "Check the affected account or device",
      "Escalate if suspicious"
    ]
  };

  if (text) {
    const input = text.toLowerCase();

    if (input.includes("password") || input.includes("login")) {
      result = {
        category: "Phishing / Login Threat",
        severity: "High",
        explanation: "This may involve a fake login request or suspicious password activity.",
        actions: [
          "Reset the password",
          "Enable MFA",
          "Check login history",
          "Warn the user"
        ]
      };
    }

    if (input.includes("powershell") || input.includes("script")) {
      result = {
        category: "Malicious Script Activity",
        severity: "High",
        explanation: "Suspicious script activity may indicate malware or unauthorized actions.",
        actions: [
          "Isolate the device",
          "Review script source",
          "Run antivirus or EDR scan",
          "Escalate to security team"
        ]
      };
    }
  }

  res.json(result);
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});