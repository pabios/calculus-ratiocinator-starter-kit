/**
 * Logique Recursive ET affichage du resultat
 * - Objectif: gestion des tour de seance de tir et restitution du resultat
 * 2 fonctions principal:
 * - playPenaltyShootoutRecursive
 * - displayHistory
 *
 */

import {
    Score,
    PenaltyHistory,
    simulatePenalty,
    updateScore,
    addToHistory, PenaltyResult,
} from "../functional-core/functions";
import {Either} from "../functional-core/either/Either.ts";

const MAX_SEANCE_DE_TIRE_SENARIOT_D_EXCEPTION = 100; // Au bout de 100 prolongation alos match null stp

export const playPenaltyShootoutRecursive = (
    score: Score,
    history: PenaltyHistory = [],
    seance: number = 1
): Either<string, PenaltyHistory> => {
    const resultA: PenaltyResult = { team: "TeamA", scored: simulatePenalty() };
    const updatedScoreA = updateScore(score, resultA);

    const resultB: PenaltyResult = { team: "TeamB", scored: simulatePenalty() };
    const updatedScoreB = updateScore(updatedScoreA, resultB);

    const updatedHistory = addToHistory(
        addToHistory(history, seance, updatedScoreA, resultA),
        seance,
        updatedScoreB,
        resultB
    );

    if (seance >= 5 && updatedScoreB.TeamA === updatedScoreB.TeamB) {
        // console.log("Egalité apres 5 tours, passage au Sudden Death !");
        return playPenaltyShootoutRecursive(updatedScoreB, updatedHistory, seance + 1);
    }

    if (seance >= 5 && updatedScoreB.TeamA !== updatedScoreB.TeamB) {
        // console.log("Victoire  apres 5 tirs !");
        return Either.right(updatedHistory); // Victoire
    }

    if (seance > 5 && Math.abs(updatedScoreB.TeamA - updatedScoreB.TeamB) === 1) {
        // console.log("Victoire en des qu'une equipe depasse !");
        return Either.right(updatedHistory);
    }

    if (seance >= MAX_SEANCE_DE_TIRE_SENARIOT_D_EXCEPTION) {
        // console.log("Match nul apres des prolongations interminables !");
        return Either.left("Match nul apres des prolongations interminables !");
    }

    return playPenaltyShootoutRecursive(updatedScoreB, updatedHistory, seance + 1);
};
const displayHistory = (result: Either<string, PenaltyHistory>): void => {
    if (result.isLeft()) {
        console.log("Résultat : " + result.getLeft());
        return;
    }

    const history = result.getRight();

    if (!history || history.length === 0) {
        console.log("Aucun historique disponible.");
        return;
    }

    history.forEach(({ seance, score, result }) => {
        console.log(
            `Seance de tir ${seance}: Score: ${score.TeamA}/${score.TeamB} (Équipe ${
                result.team
            }: ${result.scored ? "✅" : "❌"})`
        );
    });

    const finalScore = history[history.length - 1]?.score;
    if (finalScore) {
        console.log(
            `Victoire : ${
                finalScore.TeamA > finalScore.TeamB ? "TeamA" : "TeamB"
            } (Score final: ${finalScore.TeamA}/${finalScore.TeamB})`
        );
    } else {
        console.log("Impossible de determiner le score final.");
    }
};



export function mainTD(): void {
    const initialScore: Score = { TeamA: 0, TeamB: 0 };
    const history = playPenaltyShootoutRecursive(initialScore);
    displayHistory(history);
}
