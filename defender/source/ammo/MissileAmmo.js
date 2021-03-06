/**
 * The Missile Ammo Class
 * @extends {Ammo}
 */
class MissileAmmo extends Ammo {

    /**
     * The Missile Ammo constructor
     * @param {Tower}  tower
     * @param {Array}  targets
     * @param {Number} boardSize
     */
    constructor(tower, targets, boardSize) {
        super();

        this.center      = 11;
        this.rotateTower = true;
        this.rotateAmmo  = true;
        this.className   = "missileAmmo";
        this.content     = `
            <div class="missileTail"></div>
            <div class="missileBody"></div>
            <div class="missileHead"></div>
        `;

        this.init(tower, targets, boardSize);
    }

    /**
     * Moves the ammo according to the given time. Returns true if it reached the target
     * @param {Number} time
     * @returns {Boolean}
     */
    move(time) {
        this.changeAngle();
        this.changePos(time);

        if (this.decTimer(time)) {
            this.tower.toggleAttack();
            this.destroy();
            return true;
        }
        return false;
    }
}
