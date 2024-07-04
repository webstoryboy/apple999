import {
    highlightFirstVideo,
    highlightFourthVideo,
    highlightSecondVideo,
    highlightThirdVideo,
} from "../utils";

export const navLists = ["Mac", "iPhone", "iPad", "Watch", "AirPods"];

export const hightlightsSlides = [
    {
        id: 1,
        textLists: [
            "Enter A17 Pro.",
            "Game-changing chip.",
            "Broundbreaking performance",
        ],
        video: highlightFirstVideo,
        videoDuration: 4
    },
    {
        id: 2,
        textLists: ["Titanium.", "So strong. So light. So Pro."],
        video: highlightFourthVideo,
        videoDuration: 5
    },
    {
        id: 3,
        textLists: [
            "Enter A17 Pro.",
            "Game-changing chip.",
            "Broundbreaking performance",
        ],
        video: highlightSecondVideo,
        videoDuration: 2
    },
    {
        id: 4,
        textLists: [
            "All-new Actin button",
            "what will yours do?",
        ],
        video: highlightThirdVideo,
        videoDuration: 3.64
    }
]