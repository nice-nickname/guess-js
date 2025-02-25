
class GameAudio {

    private readonly ambientAudio: HTMLAudioElement
    private readonly hitAudio: HTMLAudioElement

    private _volume: number = 0.5

    constructor() {
        const basePath = document.location.origin

        document.addEventListener('click', (ev: MouseEvent) => {
            if ((ev.target as Element).closest('button, a') !== null) {
                this.playHit()
            }
        })

        this.ambientAudio = new Audio(basePath + '/ambient.mp3')
        this.hitAudio = new Audio(basePath + '/hit.mp3')

        this.ambientAudio.volume = this.volume
        this.hitAudio.volume = this.volume
    }

    play() {
        this.ambientAudio.play()
    }

    playHit() {
        this.hitAudio.play()
    }

    pause() {
        this.ambientAudio.pause()
    }

    set volume(value: number) {
        this._volume = value

        this.hitAudio.volume = this._volume;
        this.ambientAudio.volume = this._volume;
    }

    get volume() {
        return this._volume;
    }

}

const gameAuio = new GameAudio()

export default gameAuio
