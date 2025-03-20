"use client";
import React, { useCallback, useEffect, useState } from "react";
import { testimonialsList } from "../data";
import { ChevronRightIcon, PlayIcon, PuaseIcon, QuatationIcon } from "../svg";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import { EmblaCarouselType } from "embla-carousel";

type UsePrevNextButtonsType = {
  prevBtnDisabled: boolean;
  nextBtnDisabled: boolean;
  onPrevButtonClick: () => void;
  onNextButtonClick: () => void;
};

export const usePrevNextButtons = (
  emblaApi: EmblaCarouselType | undefined,
  onButtonClick?: (emblaApi: EmblaCarouselType) => void
): UsePrevNextButtonsType => {
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);

  const onPrevButtonClick = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollPrev();
    if (onButtonClick) onButtonClick(emblaApi);
  }, [emblaApi, onButtonClick]);

  const onNextButtonClick = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollNext();
    if (onButtonClick) onButtonClick(emblaApi);
  }, [emblaApi, onButtonClick]);

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setPrevBtnDisabled(!emblaApi.canScrollPrev());
    setNextBtnDisabled(!emblaApi.canScrollNext());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onSelect(emblaApi);
    emblaApi.on("reInit", onSelect).on("select", onSelect);
  }, [emblaApi, onSelect]);

  return {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  };
};

const Testimonials = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { slidesToScroll: "auto", loop: true, dragFree: true },
    [AutoScroll({ stopOnInteraction: false })]
  );

  const [isPlaying, setIsPlaying] = useState(false);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  const onButtonAutoplayClick = useCallback(
    (callback: () => void) => {
      const autoScroll = emblaApi?.plugins()?.autoScroll;
      if (!autoScroll) return;

      const resetOrStop =
        autoScroll.options.stopOnInteraction === false
          ? autoScroll.reset
          : autoScroll.stop;

      resetOrStop();
      callback();
    },
    [emblaApi]
  );

  const toggleAutoplay = useCallback(() => {
    const autoScroll = emblaApi?.plugins()?.autoScroll;
    if (!autoScroll) return;

    const playOrStop = autoScroll.isPlaying()
      ? autoScroll.stop
      : autoScroll.play;
    playOrStop();
  }, [emblaApi]);

  useEffect(() => {
    const autoScroll = emblaApi?.plugins()?.autoScroll;
    if (!autoScroll) return;

    setIsPlaying(autoScroll.isPlaying());
    emblaApi
      .on("autoScroll:play", () => setIsPlaying(true))
      .on("autoScroll:stop", () => setIsPlaying(false))
      .on("reInit", () => setIsPlaying(autoScroll.isPlaying()));
  }, [emblaApi]);

  return (
    <>
      <div className="mt-10 overflow-hidden" ref={emblaRef}>
        <div className="flex -ml-4">
          {testimonialsList.map(({ text, userSrc, username }, index) => (
            <div
              key={index}
              className="pl-4 min-w-0 shrink-0 grow-0 basis-full md:basis-1/2 lg:basis-[33%]"
            >
              <div className="border pt-4 rounded-md flex flex-col justify-between h-full">
                <div className="ps-4">
                  <QuatationIcon />
                </div>
                <p className="mt-10 px-4">{text}</p>
                <div className="bg-secondary-3 rounded-md px-4 py-2 flex items-center gap-3 mt-4">
                  <div className="size-10 rounded-full overflow-hidden">
                    <Image
                      alt="profile image"
                      src={userSrc}
                      height={40}
                      width={40}
                      className="size-full object-cover object-center"
                    />
                  </div>
                  <p className="text-accent-1 font-medium">{username}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-10  flex justify-center gap-4">
        <button
          onClick={() => onButtonAutoplayClick(onPrevButtonClick)}
          disabled={prevBtnDisabled}
          aria-disabled={prevBtnDisabled}
          className="size-8 inline-flex items-center justify-center bg-secondary-4 border rounded-md disabled:opacity-50 disabled:cursor-not-allowed "
        >
          <ChevronRightIcon className="rotate-180" />
        </button>
        <button
          onClick={() => onButtonAutoplayClick(onNextButtonClick)}
          disabled={nextBtnDisabled}
          aria-disabled={nextBtnDisabled}
          className="size-8 inline-flex items-center justify-center bg-secondary-4 border rounded-md disabled:opacity-50 disabled:cursor-not-allowed "
        >
          <ChevronRightIcon />
        </button>
        <button
          onClick={toggleAutoplay}
          className="size-8 inline-flex items-center justify-center bg-secondary-4 border rounded-md disabled:opacity-50 disabled:cursor-not-allowed "
        >
          {isPlaying ? <PuaseIcon /> : <PlayIcon />}
        </button>
      </div>
    </>
  );
};

export default Testimonials;
