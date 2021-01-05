package training.cardgame.games;

import training.cardgame.model.Player;
import training.cardgame.model.PlayingCard;

import java.util.List;

public class HighCardGameEvaluator implements GameEvaluator{

    public Player evaluateWinner(List<Player> players){
        Player bestPlayer = null;
        int bestRank = -1;
        int bestSuit = -1;
        for (Player player : players) {
            PlayingCard card = player.getCard(0);
            if (card.getRank().value() > bestRank) {
                bestPlayer = player;
                bestRank = card.getRank().value();
            } else if (card.getRank().value() == bestRank) {
                if (card.getSuit().value() > bestSuit) {
                    bestPlayer = player;
                    bestSuit = card.getSuit().value();
                }
            }
        }
        return bestPlayer;
    }

}
