"use client";

import React, { useEffect, useState } from "react";
import Flame from "@/components/Flame";
import { useMinDimension } from "@/hooks/useMaxDimention";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { clsx } from "clsx";

const DyanPage = () => {
  const minDimension = useMinDimension();
  const [radius, setRadius] = useState<number>(100);
  const [whiteCircle, setWhiteCircle] = useState<number>(0.2);
  const [duration, setDuration] = useState<number>(20);

  const [hidden, setHidden] = useState<boolean>(false);
  const [timer, setTimer] = useState<NodeJS.Timeout | null>(null);

  const requestFullScreen = () => {
    const elem = document.documentElement as any;
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.mozRequestFullScreen) {
      // Firefox
      elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) {
      // Chrome, Safari and Opera
      elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) {
      // IE/Edge
      elem.msRequestFullscreen();
    } else if (elem.webkitEnterFullscreen) {
      // iOS Safari
      elem.webkitEnterFullscreen();
    }
  };

  const handleStart = () => {
    setHidden(true);
    requestFullScreen();
    if (timer) clearTimeout(timer);
    const newTimer = setTimeout(
      () => {
        setHidden(false);
      },
      duration * 60 * 1000,
    );
    setTimer(newTimer);
  };
  useEffect(() => {
    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [timer]);
  return (
    <div className="w-full">
      <h1
        className={clsx("text-2xl p-2", {
          hidden: hidden,
        })}
      >
        ध्यान
      </h1>
      <div
        className={clsx("w-full flex flex-row justify-center space-x-3 p-4", {
          hidden: hidden,
        })}
      >
        <div className="grow">
          <div>Radius</div>
          <Slider
            defaultValue={[100]}
            min={10}
            max={minDimension}
            step={10}
            onValueChange={(value) => setRadius(value[0])}
          />
        </div>
        <div className="grow">
          <div>Core radius</div>
          <Slider
            defaultValue={[0.2]}
            min={0.1}
            max={0.8}
            step={0.1}
            onValueChange={(value) => setWhiteCircle(value[0])}
          />
        </div>
      </div>

      <Flame
        radius={minDimension}
        circleRadius={radius}
        whiteCircle={whiteCircle}
        duration={duration}
      />
      <div
        className={clsx(
          "fixed bottom-0 left-0 right-0 flex flex-row w-full justify-center p-10 space-x-4 text-gray-700",
          {
            hidden: !hidden,
          },
        )}
      >
        <p>Refresh the page to restart</p>
      </div>

      <div
        className={clsx(
          "fixed bottom-0 left-0 right-0 flex flex-row w-full justify-center p-10 space-x-4",
          {
            hidden: hidden,
          },
        )}
      >
        <div className="grow">
          <div>Duration ({duration} min)</div>
          <Slider
            defaultValue={[20]}
            min={2}
            max={60}
            step={1}
            onValueChange={(value) => setDuration(value[0])}
          />
        </div>
        <Button className="w-3/12" onClick={handleStart}>
          Start
        </Button>
      </div>
    </div>
  );
};

export default DyanPage;
