package training.cardgame.view;

import training.cardgame.controller.GameController;

public interface GameViewable {

    public void setController(GameController gc);

    public void promptForPlayerName();

    public void promptForFlip();

    public void promptForNewGame();

    public void showPlayerName(int playerIndex, String name);

    public void showFaceDownCardForPlayer(int playerIndex, String name);

    public void showCardForPlayer(int playerIndex, String name, String rank, String suit);

    public void showWinner(String winnerName);
    
}
