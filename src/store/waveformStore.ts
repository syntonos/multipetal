import { create } from "zustand"

interface waveformStore {

    samples: Float32Array

    setSamples: (samples: Float32Array) => void

}

export const useWaveformStore = create<waveformStore>((set) => ({

    samples: new Float32Array(512),

    setSamples: (samples) => set({ samples })

}))