package training.cardgame.model;

import lombok.Getter;

public class PlayingCard {

    @Getter
    private Rank rank;
    @Getter
    private Suit suit;
    @Getter
    private boolean faceUp;

    public PlayingCard(Rank rank, Suit suit) {
        this.rank = rank;
        this.suit = suit;
        this.faceUp = false;
    }

    public boolean flip() {
        this.faceUp = !this.faceUp;
        return this.faceUp;
    }


}
