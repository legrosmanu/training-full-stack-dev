package training.cardgame.model;

import lombok.Getter;

public class Player {

    @Getter
    private String name;
    private Hand hand;

    public Player (String name){
        this.name = name;
        this.hand = new Hand();
    }

    public void addCardToHand(PlayingCard pc) {
        this.hand.addCard(pc);
    }

    public PlayingCard getCard(int index) {
        return this.hand.getCar(index);
    }

    public PlayingCard removeCard() {
        return this.hand.removeCard();
    }
}
