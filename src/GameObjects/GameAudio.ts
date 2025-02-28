
class GameAudio {

    static ambientSoundCoef = 0.5

    private readonly ambientAudio: HTMLAudioElement;
    private readonly hitAudio: HTMLAudioElement;

    private readonly wrongTryAudio: HTMLAudioElement;
    private readonly wrongAnswerAudio: HTMLAudioElement;
    private readonly successAnswerAudio: HTMLAudioElement;

    private _volume: number;

    get volume() {
        return this._volume * 100;
    }

    set volume(value: number) {
        this._volume = value / 100;

        this.updateVolume()
    }

    constructor() {
        const basePath = document.location.origin + import.meta.env.BASE_URL + "/sound";

        const silenceSound = basePath + '/1-second-of-silence.mp3'

        this.ambientAudio = new Audio(basePath + "/ambient.mp3");
        this.hitAudio = new Audio(basePath + "/hit.mp3");

        this.successAnswerAudio = new Audio(silenceSound);
        this.wrongTryAudio = new Audio(silenceSound);
        this.wrongAnswerAudio = new Audio(silenceSound);

        this._volume = 0.5

        this.updateVolume()

        // Audio can be played only by user's interaction with page
        // So we playing blank sound on each object before settings actual audio
        document.addEventListener(
            "click",
            () => {
                this.successAnswerAudio.play();
                this.wrongTryAudio.play();
                this.wrongAnswerAudio.play();

                this.successAnswerAudio.src = basePath + "/success.mp3";
                this.wrongTryAudio.src = basePath + "/wrong-try.mp3";
                this.wrongAnswerAudio.src = basePath + "/wrong-final.mp3";
            },
            { once: true }
        );

        document.addEventListener("click", (ev: MouseEvent) => {
            const target = ev.target as Element;

            if (
                target.closest("button, a") !== null &&
                target.closest("[data-answer]") === null &&
                !target.hasAttribute("data-answer")
            ) {
                this.playHit();
            }
        });
    }

    isAmbientPlayed() {
        return !this.ambientAudio.paused
    }

    playAmbient() {
        this.ambientAudio.play();
    }

    pauseAmbient() {
        this.ambientAudio.pause();
    }

    playHit() {
        this.hitAudio.play();
    }

    playSuccess() {
        this.successAnswerAudio.play();
    }

    playWrongTry() {
        this.playAsync(this.wrongTryAudio)
    }

    playWrong() {
        this.wrongAnswerAudio.play();
    }

    private async playAsync(audio: HTMLAudioElement) {
        const element = !audio.paused
            ? audio
            : audio.cloneNode() as HTMLAudioElement

        element.play()
    }

    private updateVolume() {
        this.ambientAudio.volume = this._volume * GameAudio.ambientSoundCoef;

        this.hitAudio.volume = this._volume;
        this.successAnswerAudio.volume = this._volume;
        this.wrongTryAudio.volume = this._volume;
        this.wrongAnswerAudio.volume = this._volume;
    }

}

const gameAuio = new GameAudio();

export default gameAuio;
