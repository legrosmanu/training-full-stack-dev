package training.cardgame.model;

import java.util.ArrayList;

public class Hand {

    private ArrayList<PlayingCard> cards;

    public Hand(){
        this.cards = new ArrayList<>();
    }

    public void addCard(PlayingCard pc) {
        this.cards.add(pc);
    }

    public PlayingCard getCar(int index) {
        return this.cards.get(index);
    }

    public PlayingCard removeCard() {
        return this.cards.remove(0);
    }

}
