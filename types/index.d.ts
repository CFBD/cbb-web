interface TeamRatings {
  season: number;
  teamId: number;
  team: string;
  conference: string;
  offensiveRating: number;
  defensiveRating: number;
  netRating: number;
  rankings: {
    offense: number;
    defense: number;
    net: number;
  };
}

interface Team {
  id: number;
  sourceId: string
  school: string;
  mascot: string;
  abbreviation: string;
  conference: string;
  primaryColor: string;
  secondaryColor: string;
}

interface Conference {
  id: number;
  sourceId: string;
  name: string;
  shortName: string;
  abbreviation: string;
}

interface TeamSeasonStats {
  /**
   * @isInt
   */
  season: number;
  seasonLabel: string;
  /**
   * @isInt
   */
  teamId: number;
  team: string;
  conference: string | null;
  /**
   * @isInt
   */
  games: number;
  wins: number;
  losses: number;
  totalMinutes: number | null;
  pace: number | null;
  offense: TeamSeasonUnitStats;
  defense: TeamSeasonUnitStats;
}

interface TeamSeasonUnitStats {
  fieldGoals: {
    made: number | null;
    attempted: number | null;
    pct: number | null;
  };
  twoPointFieldGoals: {
    made: number | null;
    attempted: number | null;
    pct: number | null;
  };
  threePointFieldGoals: {
    made: number | null;
    attempted: number | null;
    pct: number | null;
  };
  freeThrows: {
    made: number | null;
    attempted: number | null;
    pct: number | null;
  };
  rebounds: {
    offensive: number | null;
    defensive: number | null;
    total: number | null;
  };
  turnovers: {
    total: number | null;
    teamTotal: number | null;
  };
  fouls: {
    total: number | null;
    technical: number | null;
    flagrant: number | null;
  };
  points: {
    total: number | null;
    inPaint: number | null;
    offTurnovers: number | null;
    fastBreak: number | null;
  };
  fourFactors: {
    effectiveFieldGoalPct: number | null;
    turnoverRatio: number | null;
    offensiveReboundPct: number | null;
    freeThrowRate: number | null;
  };
  assists: number | null;
  blocks: number | null;
  steals: number | null;
  possessions: number | null;
  rating: number | null;
  trueShooting: number | null;
}
