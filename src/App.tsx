import Toolbar from "./components/toolbar"
import Waveform from "./components/waveform"
import Sidebar from "./components/sidebar"
import Piano from "./components/piano"

export default function App() {
  return (
    <div className="flex h-screen flex-col bg-zinc-950 text-white">
      <Toolbar />

      <main className="flex flex-1 overflow-hidden">
        <Waveform />

        <Sidebar />
      </main>

      <Piano />
    </div>
  )
}