/**
 *  Defition des differents types (Team, Score, PenaltyResult,PenaltyHistory)
 *  - simulatePenalty ==> Simule aleatoirement si un tir est marquer ou pas
 *  - updateScore ==> met a jours le score apres une seance
 *  - addToHistory ==> ajoute une seance de tir a l'historique
 */

export type Team = "TeamA" | "TeamB";

export type Score = {
    TeamA: number;
    TeamB: number;
};

export type PenaltyResult = {
    team: Team;
    scored: boolean;
};

export type PenaltyHistory = {
    seance: number;
    score: Score;
    result: PenaltyResult;
}[];

export const simulatePenalty = (): boolean => Math.random() < 0.5;

export const updateScore = (score: Score, result: PenaltyResult): Score => {
    const updatedScore = { ...score }; // immuabilité
    if (result.scored) {
        updatedScore[result.team]++;
    }
    return updatedScore;
};

export const addToHistory = (
    history: PenaltyHistory,
    seance: number,
    score: Score,
    result: PenaltyResult
): PenaltyHistory => [
    ...history,
    { seance, score, result },
];

