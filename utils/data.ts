interface DataObject {
    [key: string]: string | number | boolean | object
}

export function flattenData(key: string | undefined, data: any) {
    let flattened = [];

    switch (key) {
        case '/coaches':
            for (const coach of data) {
                flattened.push(...coach.seasons.map((s: DataObject) => {
                    s.first_name = coach.first_name;
                    s.last_name = coach.last_name;
                    s.hire_date = coach.hire_date;

                    return s;
                }));
            }
            break;
        case '/teams/matchup':
            flattened = data.games.map((g: DataObject) => flatten(g));
            break;
        case '/lines':
            for (const game of data) {
                for (const line of game.lines) {
                    flattened.push({
                        gameId: game.gameId,
                        season: game.season,
                        seasonType: game.seasonType,
                        startDate: game.startDate,
                        homeTeam: game.homeTeam,
                        homeScore: game.homeScore,
                        awayTeam: game.awayTeam,
                        awayScore: game.awayScore,
                        lineProvider: line.provider,
                        overUnder: line.overUnder,
                        spread: line.spread,
                        openingSpread: line.spreadOpen,
                        openingOverUnder: line.overUnderOpen,
                        homeMoneyline: line.homeMoneyline,
                        awayMoneyline: line.awayMoneyline
                    });
                }
            }
            break;
        default:
            flattened = data.map((d: DataObject) => flatten(d));
    }

    return flattened;
}

const flatten = (data: DataObject) => {
    const result: DataObject = {};

    function recurse(cur: DataObject, prop: string) {
        if (Object(cur) !== cur) {
            result[prop] = cur;
        } else if (Array.isArray(cur)) {
            const l = cur.length;
            for (let i = 0; i < l; i++)
                recurse(cur[i], prop + "[" + i + "]");
            if (l == 0)
                result[prop] = [];
        } else {
            let isEmpty = true;
            for (const p in cur) {
                isEmpty = false;
                // eslint-disable-next-line
                // @ts-ignore
                recurse(cur[p], prop ? prop + "_" + p : p);
            }
            if (isEmpty && prop)
                result[prop] = {};
        }
    }
    recurse(data, "");
    return result;
};
