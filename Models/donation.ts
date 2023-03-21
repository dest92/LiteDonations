class Donation {
  _id: number;
  _amount: number;
  _donor: Donor;
  _proyect: Proyect;

  public get id(): number {
    return this.id;
  }

  public set id(value: number) {
    this.id = value;
  }

  public get amount(): number {
    return this.amount;
  }

  public set amount(value: number) {
    this.amount = value;
  }

  public get donor(): Donor {
    return this.donor;
  }

  public set donor(value: Donor) {
    this.donor = value;
  }

  public get proyect(): Proyect {
    return this.proyect;
  }

  public set proyect(value: Proyect) {
    this.proyect = value;
  }
}
