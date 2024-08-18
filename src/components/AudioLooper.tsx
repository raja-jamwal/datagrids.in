"use client";

import React, { useEffect, useRef, useState } from "react";

const AudioLooper = () => {
  const audio1Ref = useRef<HTMLAudioElement>(null);
  const audio2Ref = useRef<HTMLAudioElement>(null);
  const [timer, setTimer] = useState<NodeJS.Timeout>();

  function stop() {
    if (timer) {
      audio1Ref.current?.pause();
      audio2Ref.current?.pause();
      clearInterval(timer);
    }
  }

  function play() {
    stop();
    const playPattern = () => {
      if (!audio1Ref.current || !audio2Ref.current) {
        return;
      }
      audio2Ref.current.pause();
      audio2Ref.current.currentTime = 0;

      audio1Ref.current.play();
      audio1Ref.current.currentTime = 0;

      setTimeout(() => {
        if (audio1Ref.current) {
          audio1Ref.current?.pause();
          audio1Ref.current.currentTime = 0;
        }

        // start the second audio after 1 second
        setTimeout(() => {
          if (audio2Ref.current) {
            audio2Ref.current.play();
          }
        }, 1000);
      }, 4000); // 4 seconds of playback of first audio
    };
    // Start the pattern and repeat it
    playPattern();
    const intervalId = setInterval(playPattern, 9 * 1000); // 4s + 1s + 4s
    setTimer(intervalId);
  }

  return (
    <div>
      <button
        onClick={() => {
          play();
        }}
      >
        Play
      </button>
      <button
        onClick={() => {
          stop();
        }}
      >
        Stop
      </button>
      <audio ref={audio1Ref} src="/bell.mp3" preload="auto" />
      <audio ref={audio2Ref} src="/bell.mp3" preload="auto" />
    </div>
  );
};

export default AudioLooper;
