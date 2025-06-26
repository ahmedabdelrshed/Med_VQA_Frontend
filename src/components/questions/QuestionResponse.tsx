import { useRef, useState, useEffect,  RefObject } from "react";
import { IoVolumeHighOutline } from "react-icons/io5";
import { TypeAnimation } from "react-type-animation";

const QuestionResponse = ({
  response,
  isNew,
  responseVoiceUrl,
  onPlay,
  scrollRef,
}: {
  response: string;
  isNew: boolean;
  responseVoiceUrl: string;
  onPlay: (audioElement: HTMLAudioElement) => void;
  scrollRef?: RefObject<HTMLDivElement | null>;
}) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleToggleAudio = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      onPlay(audioRef.current); // inform parent to stop others
      audioRef.current.play();
    }
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleEnded = () => setIsPlaying(false);
    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);

    audio.addEventListener("ended", handleEnded);
    audio.addEventListener("pause", handlePause);
    audio.addEventListener("play", handlePlay);

    return () => {
      audio.removeEventListener("ended", handleEnded);
      audio.removeEventListener("pause", handlePause);
      audio.removeEventListener("play", handlePlay);
    };
  }, []);

  useEffect(() => {
    if (isNew && scrollRef?.current) {
      const interval = setInterval(() => {
        scrollRef.current?.scrollIntoView({ behavior: "smooth" });
      }, 150);

      return () => clearInterval(interval);
    }
  }, [isNew, scrollRef]);
  return (
    <div>
      <div className="w-fit max-w-sm py-1 lg:py-2 text-sm lg:text-[16px] gradient-bg text-white rounded-md px-4 ml-auto">
        <h1 className="whitespace-pre-line">
          {isNew ? (
            <>
              <span>{response.split(" ")[0]} </span>
              <TypeAnimation
                sequence={[response.split(" ").slice(1).join(" ")]}
                speed={40}
                wrapper="span"
                cursor={false}
              />
            </>
          ) : (
            response
          )}
        </h1>
      </div>
      <div className="flex justify-end mt-2">
        <button onClick={handleToggleAudio}>
          <IoVolumeHighOutline
            className={`w-5 h-5 transition-colors cursor-pointer ${
              isPlaying ? "text-blue-500" : "text-gray-400"
            }`}
          />
        </button>
        <audio ref={audioRef} preload="auto">
          <source src={responseVoiceUrl} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      </div>
    </div>
  );
};

export default QuestionResponse;
