"use client";
import { useState, useRef } from "react";
import { Howl } from "howler";

const AudioPlayer = () => {
  const firstSoundRef = useRef<Howl | null>(null);
  const secondSoundRef = useRef<Howl | null>(null);

  // State to manage the breath duration, ratio, and timeouts
  const [breathDuration, setBreathDuration] = useState(4000); // Default 4 seconds
  const [ratio, setRatio] = useState([1, 0, 1]); // Default 1:0:1 ratio (Inhale:Hold:Exhale)
  const [timeouts, setTimeouts] = useState<number[]>([]); // To store timeouts

  const playBreathingCycle = () => {
    if (firstSoundRef.current) {
      firstSoundRef.current.stop();
    }
    if (secondSoundRef.current) {
      secondSoundRef.current.stop();
    }

    // Initialize the Howl instance for inhale
    firstSoundRef.current = new Howl({
      src: ["/bell.mp3"],
      volume: 1,
    });

    // Initialize the Howl instance for exhale
    secondSoundRef.current = new Howl({
      src: ["/2.mp3"],
      volume: 1,
    });

    const playInhale = () => {
      console.log("playInhale");
      firstSoundRef.current?.stop();
      firstSoundRef.current?.play();
      firstSoundRef.current?.fade(1, 0, breathDuration * ratio[0]); // Ease-in (fade-in) over inhale duration
    };

    const playExhale = () => {
      console.log("playExhale");
      secondSoundRef.current?.stop();
      secondSoundRef.current?.play();
      secondSoundRef.current?.fade(1, 0, breathDuration * ratio[2]); // Ease-out (fade-out) over exhale duration
    };

    const loopBreathingCycle = () => {
      playInhale();

      const holdTimeout = ratio[1]
        ? setTimeout(() => {
            console.log("playHold");
            firstSoundRef.current?.stop(); // Silence during hold
          }, breathDuration * ratio[0])
        : null;

      const exhaleTimeout = setTimeout(
        () => {
          playExhale();
        },
        breathDuration * (ratio[0] + ratio[1]),
      ); // Delay exhale by inhale + hold

      const nextCycleTimeout = setTimeout(
        () => {
          loopBreathingCycle(); // Recursively call the function to loop
        },
        breathDuration * (ratio[0] + ratio[1] + ratio[2]),
      );

      // Store the timeouts in the state
      setTimeouts((prevTimeouts) => [
        ...(holdTimeout ? [holdTimeout] : []),
        exhaleTimeout,
        nextCycleTimeout,
      ]);
    };

    loopBreathingCycle();
  };

  const clearAllTimeouts = () => {
    timeouts.forEach((timeoutId) => clearTimeout(timeoutId));
    setTimeouts([]); // Clear the timeout array
  };

  const stopAllSounds = () => {
    if (firstSoundRef.current) {
      firstSoundRef.current.stop();
    }
    if (secondSoundRef.current) {
      secondSoundRef.current.stop();
    }
    clearAllTimeouts();
  };

  return (
    <div>
      <label>
        Initial Breath Duration (ms):
        <input
          type="number"
          value={breathDuration}
          onChange={(e) => setBreathDuration(Number(e.target.value))}
        />
      </label>
      <br />
      <label>
        Select Ratio:
        <select onChange={(e) => setRatio(JSON.parse(e.target.value))}>
          <option value="[1, 0, 1]">1:0:1 (Inhale:Hold:Exhale)</option>
          <option value="[1, 2, 2]">1:2:2 (Inhale:Hold:Exhale)</option>
          <option value="[4, 4, 4]">
            4:4:4 (Box Breathing: Inhale:Hold:Exhale)
          </option>
          <option value="[4, 7, 8]">
            4:7:8 (Relaxation Breath: Inhale:Hold:Exhale)
          </option>
        </select>
      </label>
      <br />
      <button
        onClick={() => {
          stopAllSounds(); // Ensure previous sounds are stopped
          playBreathingCycle(); // Start the breathing cycle
        }}
      >
        Play
      </button>
      <button
        onClick={() => {
          stopAllSounds(); // Stop all sounds and clear timeouts
        }}
      >
        Stop
      </button>
    </div>
  );
};

export default AudioPlayer;
