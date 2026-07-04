class engine {

    context!: AudioContext

    node!: AudioWorkletNode

    async init() {

        this.context = new AudioContext()

        await this.context.audioWorklet.addModule(
            "/oscillatorProcessor.js"
        )

        this.node = new AudioWorkletNode(

            this.context,

            "waveform"

        )

        this.node.connect(this.context.destination)

    }

    updateWaveform(samples: Float32Array) {

        this.node.port.postMessage(samples)

    }

}

export default new engine()