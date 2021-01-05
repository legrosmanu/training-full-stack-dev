package training.cardgame.model;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Random;

public class Deck {

    private ArrayList<PlayingCard> cards;

    public Deck() {
        this.cards = new ArrayList<>();
        for (Rank rank : Rank.values()) {
            for (Suit suit : Suit.values()) {
                System.out.println("Creating card [" + rank + " - " + suit + "]");
                this.cards.add(new PlayingCard(rank, suit));
            }
        }
        this.shuffle();
    }

    public void shuffle() {
        Random random = new Random();
        for (int i = 0 ; i < this.cards.size() ; i++){
            Collections.swap(this.cards, i, random.nextInt(this.cards.size()-1));
        }
    }

    public PlayingCard removeTopCard() {
        return this.cards.remove(0);
    }

    public void returnCardToDeck(PlayingCard pc) {
        if (pc.isFaceUp()) { pc.flip(); }
        cards.add(pc);
    }
}
