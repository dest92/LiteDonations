class Proyect {
  id: number;
  name: string;
  amount: number;
  description: string;
  requiredAmount: number;
  totalDonated: number;

  constructor(
    id: number,
    name: string,
    amount: number,
    description: string,
    requiredAmount: number,
    totalDonated: number
  ) {
    this.id = id;
    this.name = name;
    this.amount = amount;
    this.description = description;
    this.requiredAmount = requiredAmount;
    this.totalDonated = totalDonated;
  }
}

exports.Proyect = Proyect;
