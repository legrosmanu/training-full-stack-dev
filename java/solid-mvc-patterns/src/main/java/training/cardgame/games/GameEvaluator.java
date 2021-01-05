package training.cardgame.games;

import java.util.List;
import training.cardgame.model.Player;

public interface GameEvaluator {

    public Player evaluateWinner(List<Player> players);
    
}
