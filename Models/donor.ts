class Donor {
  _id: number;
  _name: string;
  _lastName: string;
  _donations: number;

  public get id() {
    return this.id;
  }

  public set id(value: number) {
    this.id = value;
  }

  public get name() {
    return this.name;
  }

  public set name(value: string) {
    this.name = value;
  }

  public get lastName() {
    return this.lastName;
  }

  public set lastName(value: string) {
    this.lastName = value;
  }

  public get donations() {
    return this.donations;
  }
}

exports.Donor = Donor;