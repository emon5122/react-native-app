export type TNewsCard =
    | {
          type: "system";
          msg: string;
          publishedAt: Date;
      }
    | {
          type: "news";
          headline: string;
          comments: number;
          publishedAt: Date;
          image: string;
      }
    | {
          type: "event";
          headline: string;
          messages: number;
          publishedAt: Date;
          matchResult: TMatchResult;
      };

type TMatchResult = {
    team1: TPlayer[];
    team2: TPlayer[];
    score1: number[];
    score2: number[];
};

type TPlayer = {
    name: string;
    image: string;
    nationality: string;
    title: string;
};
