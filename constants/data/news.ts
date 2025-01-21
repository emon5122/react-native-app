import { TNewsCard } from "@/types";

export const newsMockData: TNewsCard[] = [
    {
        type: "system",
        msg: "System maintenance scheduled for tonight.",
        publishedAt: new Date("2025-01-20T18:00:00Z"),
    },
    {
        type: "system",
        msg: "Scheduled backup completed successfully.",
        publishedAt: new Date("2025-01-19T20:00:00Z"),
    },
    {
        type: "news",
        headline: "Breaking News: Major event in the city!",
        comments: 102,
        publishedAt: new Date("2025-01-21T12:00:00Z"),
        image: "https://randomuser.me/api/portraits/men/84.jpg",
    },
    {
        type: "news",
        headline: "New Technology Revolutionizes the Industry",
        comments: 50,
        publishedAt: new Date("2025-01-20T09:00:00Z"),
        image: "https://randomuser.me/api/portraits/men/93.jpg",
    },
    {
        type: "event",
        headline: "Football Match Results: City FC vs. Town FC",
        messages: 55,
        publishedAt: new Date("2025-01-21T14:00:00Z"),
        matchResult: {
            team1: [
                {
                    name: "John Doe",
                    image: "https://randomuser.me/api/portraits/men/38.jpg",
                    nationality: "Brazil",
                    title: "Striker",
                },
                {
                    name: "Jake Smith",
                    image: "https://randomuser.me/api/portraits/men/52.jpg",
                    nationality: "Brazil",
                    title: "Midfielder",
                },
            ],
            team2: [
                {
                    name: "Michael Brown",
                    image: "https://randomuser.me/api/portraits/men/57.jpg",
                    nationality: "Brazil",
                    title: "Defender",
                },
                {
                    name: "David Green",
                    image: "https://randomuser.me/api/portraits/men/12.jpg",
                    nationality: "Brazil",
                    title: "Midfielder",
                },
            ],
            score1: [2, 1, 3],
            score2: [1, 3, 2],
        },
    },
    {
        type: "event",
        headline: "Champions League: United FC vs. Kings FC",
        messages: 120,
        publishedAt: new Date("2025-01-22T16:00:00Z"),
        matchResult: {
            team1: [
                {
                    name: "James Anderson",
                    image: "https://randomuser.me/api/portraits/men/88.jpg",
                    nationality: "Brazil",
                    title: "Defender",
                },
                {
                    name: "Chris Johnson",
                    image: "https://randomuser.me/api/portraits/men/96.jpg",
                    nationality: "Brazil",
                    title: "Midfielder",
                },
            ],
            team2: [
                {
                    name: "Robert Lee",
                    image: "https://randomuser.me/api/portraits/men/5.jpg",
                    nationality: "Brazil",
                    title: "Striker",
                },
                {
                    name: "William Harris",
                    image: "https://randomuser.me/api/portraits/men/70.jpg",
                    nationality: "Brazil",
                    title: "Goalkeeper",
                },
            ],
            score1: [3, 2, 1],
            score2: [0, 1, 3],
        },
    },
    {
        type: "event",
        headline: "World Cup: Dragon FC vs. Eagle FC",
        messages: 80,
        publishedAt: new Date("2025-01-19T18:00:00Z"),
        matchResult: {
            team1: [
                {
                    name: "Michael Brown",
                    image: "https://randomuser.me/api/portraits/men/57.jpg",
                    nationality: "Brazil",
                    title: "Champion",
                },
                {
                    name: "David Green",
                    image: "https://randomuser.me/api/portraits/men/12.jpg",
                    nationality: "Brazil",
                    title: "Contender",
                },
            ],
            team2: [
                {
                    name: "James Anderson",
                    image: "https://randomuser.me/api/portraits/men/88.jpg",
                    nationality: "Brazil",
                    title: "Midfielder",
                },
                {
                    name: "Jake Smith",
                    image: "https://randomuser.me/api/portraits/men/52.jpg",
                    nationality: "Brazil",
                    title: "Forward",
                },
            ],
            score1: [1, 0, 2],
            score2: [2, 1, 0],
        },
    },
    {
        type: "event",
        headline: "European Cup: Thunder FC vs. Lightning FC",
        messages: 75,
        publishedAt: new Date("2025-01-18T20:00:00Z"),
        matchResult: {
            team1: [
                {
                    name: "Robert Lee",
                    image: "https://randomuser.me/api/portraits/men/5.jpg",
                    nationality: "Brazil",
                    title: "Midfielder",
                },
                {
                    name: "William Harris",
                    image: "https://randomuser.me/api/portraits/men/70.jpg",
                    nationality: "Brazil",
                    title: "Striker",
                },
            ],
            team2: [
                {
                    name: "James Anderson",
                    image: "https://randomuser.me/api/portraits/men/88.jpg",
                    nationality: "Brazil",
                    title: "Defender",
                },
                {
                    name: "Chris Johnson",
                    image: "https://randomuser.me/api/portraits/men/96.jpg",
                    nationality: "Brazil",
                    title: "Goalkeeper",
                },
            ],
            score1: [2, 2, 2],
            score2: [1, 3, 2],
        },
    },
    {
        type: "event",
        headline: "Asian Championship: Falcons FC vs. Tigers FC",
        messages: 95,
        publishedAt: new Date("2025-01-23T11:00:00Z"),
        matchResult: {
            team1: [
                {
                    name: "Alex King",
                    image: "https://randomuser.me/api/portraits/men/86.jpg",
                    nationality: "Brazil",
                    title: "Striker",
                },
                {
                    name: "Max Carter",
                    image: "https://randomuser.me/api/portraits/men/93.jpg",
                    nationality: "Brazil",
                    title: "Defender",
                },
            ],
            team2: [
                {
                    name: "Michael Brown",
                    image: "https://randomuser.me/api/portraits/men/57.jpg",
                    nationality: "Brazil",
                    title: "Champion",
                },
                {
                    name: "David Green",
                    image: "https://randomuser.me/api/portraits/men/12.jpg",
                    nationality: "Brazil",
                    title: "Contender",
                },
            ],
            score1: [1, 4, 3],
            score2: [2, 0, 2],
        },
    },
];
