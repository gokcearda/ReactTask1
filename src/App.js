import React from "react";
import TaskForm from "./components/TaskForm";
import { SpeedInsights } from "@vercel/speed-insights/react"

function App() {
    return (
        <div className="app-container">
            <TaskForm />
            <SpeedInsights />

        </div>
    );
}

export default App;
