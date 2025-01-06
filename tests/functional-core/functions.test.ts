/**
 * docker exec -it bun-container bash
 * root@<container-id>:/app#  bun test
 */
import { describe, it, expect } from "bun:test";
import { updateScore, simulatePenalty, addToHistory, Score, PenaltyResult, PenaltyHistory } from "../../src/functional-core/functions";

describe("simulatePenalty", () => {
    it("devrait retourner un boolean", () => {
        const result = simulatePenalty();
        expect(typeof result).toBe("boolean");
    });
});

describe("updateScore", () => {
    it("devrait incrementer le score de l'equipe si le penalty est marqué", () => {
        const initialScore: Score = { TeamA: 0, TeamB: 0 };
        const result: PenaltyResult = { team: "TeamA", scored: true };
        const updatedScore = updateScore(initialScore, result);

        expect(updatedScore.TeamA).toBe(1);
        expect(updatedScore.TeamB).toBe(0);
    });

    it("ne devrait pas modifier le score si le penalty est raté", () => {
        const initialScore: Score = { TeamA: 0, TeamB: 0 };
        const result: PenaltyResult = { team: "TeamB", scored: false };
        const updatedScore = updateScore(initialScore, result);

        expect(updatedScore.TeamA).toBe(0);
        expect(updatedScore.TeamB).toBe(0);
    });
});

describe("addToHistory", () => {
    it("devrait ajouter une nouvel seance à l'historique", () => {
        const initialHistory: PenaltyHistory = [];
        const seance = 1;
        const score: Score = { TeamA: 1, TeamB: 0 };
        const result: PenaltyResult = { team: "TeamA", scored: true };

        const updatedHistory = addToHistory(initialHistory, seance, score, result);

        expect(updatedHistory.length).toBe(1);
        expect(updatedHistory[0]).toEqual({
            seance,
            score,
            result,
        });
    });
});
