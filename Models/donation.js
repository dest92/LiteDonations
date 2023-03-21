var Donation = /** @class */ (function () {
    function Donation() {
    }
    Object.defineProperty(Donation.prototype, "_id", {
        get: function () {
            return this._id;
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Donation.prototype, "_amount", {
        get: function () {
            return this._amount;
        },
        set: function (value) {
            this._amount = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Donation.prototype, "_donor", {
        get: function () {
            return this._donor;
        },
        set: function (value) {
            this._donor = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Donation.prototype, "_proyect", {
        get: function () {
            return this._proyect;
        },
        set: function (value) {
            this._proyect = value;
        },
        enumerable: false,
        configurable: true
    });
    return Donation;
}());

exports.Donation = Donation;
