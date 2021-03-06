/**
 * The Ghost Score Animation
 * @extends {Animation}
 */
class GhostScoreAnimation extends Animation {

    /**
     * The Ghost Score Animation constructor
     * @param {Canvas} canvas
     * @param {String} text
     * @param {{x: Number, y: Number}} pos
     */
    constructor(canvas, text, pos) {
        super();

        this.canvas     = canvas;
        this.text       = text;
        this.pos        = pos;
        this.blocksGame = true;
        this.endTime    = 1000;
    }



    /**
     * Does the Ghost Score animation
     * @returns {Void}
     */
    animate() {
        const size = Math.min(0.2 + Math.round(this.time * 100 / 500) / 100, 1);

        this.canvas.clearSavedRects();
        this.canvas.drawText({
            size  : size,
            color : "rgb(51, 255, 255)",
            text  : this.text,
            pos   : {
                x : this.pos.x + 0.5,
                y : this.pos.y + 0.5,
            },
        });

        if (this.time > 200) {
            this.blocksGame = false;
        }
    }
}
