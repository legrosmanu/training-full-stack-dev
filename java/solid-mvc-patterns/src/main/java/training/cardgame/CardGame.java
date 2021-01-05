package training.cardgame;

import training.cardgame.controller.GameController;
import training.cardgame.games.HighCardGameEvaluator;
import training.cardgame.model.Deck;
import training.cardgame.view.CommandLineView;

public class CardGame {

    public static void main(String[] args) {
        GameController gc = new GameController(new CommandLineView(), new Deck(), new HighCardGameEvaluator());
        gc.run();
    }

}
