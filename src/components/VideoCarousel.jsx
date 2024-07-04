import React, { useEffect, useRef, useState } from 'react'
import { hightlightsSlides } from "../constants"
import gsap from 'gsap';

import { pauseImg, playImg, replayImg } from "../utils";

const VideoCarousel = () => {
    const videoRef = useRef([]);        // 비디오 요소를 참조하기 위한 배열
    const videoSpanRef = useRef([]);    // 비디오 스팬 요소를 참조하기 위한 배열
    const videoDivRef = useRef([]);     // 비디오 컨텐이너를 참조하기 위한 배열

    // 비디오와 관련된 상태 관리
    const [video, setVideo] = useState({
        isEnd: false,
        startPlay: false,
        videoId: 0,
        isLastVideo: false,
        isPlaying: false
    });

    const [loadedData, setLoadedData] = useState([]);   //로드된 데이터 상태
    const { isEnd, isLastVideo, startPlay, videoId, isPlaying } = video; // 비디오 상태 비구조화 할당

    useEffect(() => {
        if (loadedData.length > 3) {
            if (!isPlaying) {
                videoRef.current[videoId].pause();  // 비디오 일시 정지
            } else {
                startPlay && videoRef.current[videoId].play(); // 비디오 재생
            }
        }
    }, [startPlay, videoId, isPlaying, loadedData])

    useEffect(() => {
        const currentProgress = 0;  // 현재 진행 상태
        let span = videoSpanRef.current;

        if (span[videoId]) {
            let anim = gsap.to(span[videoId], {
                onUpdate: () => {

                },
                onComplete: () => {

                }
            })
        }
    }, [videoId, startPlay])

    // 비디오 상태를 업데이트 하는 함수
    const handleProcess = (type, i) => {
        switch (type) {
            case "video-end":
                setVideo((pre) => ({ ...pre, isEnd: true, videoId: i + 1 }));
                break;

            case "video-last":
                setVideo((pre) => ({ ...pre, isLastVideo: true }));
                break;

            case "video-reset":
                setVideo((pre) => ({ ...pre, videoId: 0, isLastVideo: false }));
                break;

            case "pause":
            case "play":
                setVideo((pre) => ({ ...pre, isPlaying: !pre.isPlaying }));
                break;

            default:
                return video;
        }
    }

    return (
        <>
            <div className='flex items-center'>
                {hightlightsSlides.map((list, i) => (
                    <div key={i} id='slider' className='pr-10'>
                        <div className='video-carousel_container'>
                            <div className='w-full h-full flex-center bg-black rounded-3xl overflow-hidden'>
                                <video
                                    id='video'
                                    playsInline={true}  // 인라인 재생
                                    preload='auto'  // 자동으로 로드
                                    muted
                                    ref={(el) => (videoRef.current[i] = el)}    // 비디오 요소 참조 저장
                                    onPlay={() => {
                                        setVideo((prevVideo) => ({
                                            ...prevVideo, isPlaying: true
                                        }));
                                    }}
                                >
                                    <source src={list.video} type='video/mp4' />
                                </video>
                            </div>

                            <div className='absolute top-12 left-[5%] z-10'>
                                {list.textLists.map((text, i) => (
                                    <p key={i} className='md:text-2xl text-xl'>
                                        {text}
                                    </p>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className='relative flex-center mt-10'>
                <div className='flex-center py-5 px-7 bg-gray-300 rounded-full'>
                    {videoRef.current.map((_, i) => (
                        <span
                            key={i}
                            className='mx-2 w-3 h-3 bg-gray-200 rounded-full relative cursor-pointer'
                            ref={(el) => (videoDivRef.current[i] = el)}
                        >
                            <span
                                className='absolute h-full w-full rounded-full'
                                ref={(el) => (videoSpanRef.current[i] = el)}
                            >
                            </span>
                        </span>
                    ))}
                </div>
                <button className='control-btn'>
                    <img
                        src={isLastVideo ? replayImg : !isPlaying ? playImg : pauseImg}
                        alt={isLastVideo ? "replay" : !isPlaying ? "play" : "pause"}
                        onClick={
                            isLastVideo
                                ? () => handleProcess("video-reset")    // 마지막 비디오일 경우 리셋 처리
                                : !isPlaying
                                    ? () => handleProcess("play")   // 재생 중이 아닐 경우 재생 처리
                                    : () => handleProcess("pause")  // 재생 중일 경우 일시 정지 처리
                        }
                    />
                </button>
            </div>
        </>
    )
}

export default VideoCarousel