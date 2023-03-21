function Donor() {
  this._id = null;
  this._name = null;
  this._lastName = null;
  this._donations = [];
}

Object.defineProperty(Donor.prototype, "id", {
  get: function () {
    return this._id;
  },
  set: function (value) {
    this._id = value;
  },
  enumerable: false,
  configurable: true,
});

Object.defineProperty(Donor.prototype, "name", {
  get: function () {
    return this._name;
  },
  set: function (value) {
    this._name = value;
  },
  enumerable: false,
  configurable: true,
});

Object.defineProperty(Donor.prototype, "lastName", {
  get: function () {
    return this._lastName;
  },
  set: function (value) {
    this._lastName = value;
  },
  enumerable: false,
  configurable: true,
});

Object.defineProperty(Donor.prototype, "donations", {
  get: function () {
    return this._donations;
  },
  set: function (value) {
    this._donations = value;
  },
  enumerable: false,
  configurable: true,
});

export default Donor;
