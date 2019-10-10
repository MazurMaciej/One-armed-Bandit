class Statistics {
    constructor() {
        this.gameResult = [];
    }

    addGameToStatistics(win, bid) {
        let gameResult = {
            win,
            bid
        }
        this.gameResult.push(gameResult);
    }

    showGameStatisctis() {
        let games = this.gameResult.length;
        let wins = this.gameResult.filter(result => result.win).length;
        let looses = this.gameResult.filter(result => !result.win).length

        return [games, wins, looses]
    }
}

const stats = new Statistics;