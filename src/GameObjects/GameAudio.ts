
const url = ''

class GameAudio {

    private audio: HTMLAudioElement

    constructor() {
        this.audio = new Audio(url)
        this.audio.volume = 0.5
    }

    play() {
        this.audio.play()
    }

    pause() {
        this.audio.pause()
    }

    setVolume(value: number) {
        if (value < 0 || value > 1) {
            return
        }

        this.audio.volume = value
    }

}

export default new GameAudio()
