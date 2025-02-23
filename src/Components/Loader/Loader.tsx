import "./Loader.css";

export type LoaderProps = {
    isFinished: boolean
}

export default function Loader({ isFinished }: LoaderProps) {
    return (
        <div className={"Loader " + (isFinished ? "End" : "")}>
            <div>
                <div className="Loader__Text">JS Learner</div>
                <div className="Loader__Bar"></div>
            </div>
        </div>
    );
}
