class GameAudio {
    static silentSound = "/1-second-of-silence.mp3";

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
        const basePath = document.location.origin + "/sound";

        this.ambientAudio = new Audio(basePath + "/ambient.mp3");
        this.hitAudio = new Audio(basePath + "/hit.mp3");

        this.successAnswerAudio = new Audio(basePath + GameAudio.silentSound);
        this.wrongTryAudio = new Audio(basePath + GameAudio.silentSound);
        this.wrongAnswerAudio = new Audio(basePath + GameAudio.silentSound);

        this._volume = 0.5

        this.updateVolume()

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

    isAmbientPaused() {
        return this.ambientAudio.paused
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
        this.wrongTryAudio.play();
    }

    playWrong() {
        this.wrongTryAudio.play();
    }

    private updateVolume() {
        this.ambientAudio.volume = this._volume;
        this.hitAudio.volume = this._volume;
        this.successAnswerAudio.volume = this._volume;
        this.wrongTryAudio.volume = this._volume;
        this.wrongAnswerAudio.volume = this._volume;
    }

}

const gameAuio = new GameAudio();

export default gameAuio;
