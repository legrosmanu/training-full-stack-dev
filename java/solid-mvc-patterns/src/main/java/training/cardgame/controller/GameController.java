package training.cardgame.controller;

import training.cardgame.games.GameEvaluator;
import training.cardgame.model.Deck;
import training.cardgame.model.Player;
import training.cardgame.model.PlayingCard;
import training.cardgame.view.CommandLineView;

import java.util.ArrayList;

public class GameController {
    private Deck deck;
    private ArrayList<Player> players;
    private Player winner;
    private CommandLineView view;
    private GameState gameState;
    private GameEvaluator gameEvaluator;

    enum GameState {
        AddingPlayers,
        CardsDealt,
        WinnerRevealed
    }

    public GameController(CommandLineView view, Deck deck, GameEvaluator evaluator) {
        this.view = view;
        this.deck = deck;
        this.players = new ArrayList<>();
        this.gameState = GameState.AddingPlayers;
        this.view.setController(this);
        this.gameEvaluator = evaluator;
    }

    public void run(){
        while(true) {
            switch (this.gameState) {
                case AddingPlayers:
                    view.promptForPlayerName();
                    break;
                case CardsDealt:
                    view.promptForFlip();
                    break;
                case WinnerRevealed:
                    view.promptForNewGame();
                    break;
            }
        }
    }

    public void addPlayer(String playerName) {
        if (this.gameState == GameState.AddingPlayers) {
            this.players.add(new Player(playerName));
            this.view.showPlayerName(players.size(), playerName);
        }
    }

    public void startGame(){
        if (this.gameState == GameState.AddingPlayers){
            this.deck.shuffle();
            int playerIndex = 1;
            for (Player player : this.players){
                player.addCardToHand(this.deck.removeTopCard());
                this.view.showFaceDownCardForPlayer(playerIndex, player.getName());
            }
            this.gameState = GameState.CardsDealt;
        }

    }

    public void flipCards(){
        if (this.gameState == GameState.CardsDealt) {
            int playerIndex = 1;
            for (Player player : this.players){
                PlayingCard card = player.getCard(0);
                card.flip();
                this.view.showCardForPlayer(playerIndex++, player.getName(), card.getRank().toString(), card.getSuit().toString());
            }
            this.evaluateWinner();
            this.displayWinner();
            this.rebuildDeck();
        }
    }

    private void evaluateWinner(){
        this.winner = gameEvaluator.evaluateWinner(this.players);
    }

    private void displayWinner(){
        this.view.showWinner(this.winner.getName());
        this.gameState = GameState.WinnerRevealed;
    }

    private void rebuildDeck(){
        for (Player player : this.players) {
            this.deck.returnCardToDeck(player.removeCard());
        }
        this.gameState = GameState.AddingPlayers;
    }
}
