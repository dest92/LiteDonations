import { Low } from "lowdb";
import { JSONFile } from "lowdb/node";
import { join } from "node:path";
import Donor from "../Models/donor.js";
import Enumerable from "linq";
import lodash from "lodash";

const file = join("donations.json");

// Configure lowdb to write to JSONFile
const adapter = new JSONFile(file);
const db = new Low(adapter);

db.data ||= { donors: [] };
// Read data from JSON file, this will set db.data content
await db.read();
db.chain = lodash.chain(db.data);

function InitialForm() {
  const donor = new Donor();
  db.data ||= { donors: [] };
  db.data.donors.push(donor);
  db.write();
}

export function CreateDonor(name, lastName, donations) {
  const donor = new Donor();

  if (db.data === null) {
    InitialForm();
    DeleteDonor(null);
  }

  if (db.data.donors.length === 0) {
    donor.id = 1;
  } else {
    db.data ||= { donors: [] };
    donor.id = Enumerable.from(db.data.donors).max((donor) => donor._id) + 1;
  }

  donor.name = name;
  donor.lastName = lastName;
  donor.donations = donations;

  db.data ||= { donors: [] };
  db.data.donors.push(donor);
  db.write();
}

export function GetDonors() {
  return Enumerable.from(db.data.donors).toArray();
}

export function GetDonor(id) {
  return db.chain.get("donors").find({ _id: id }).value();
}

export function DeleteDonor(id) {
  // console.log(db.chain.get("donors").find({ _id: id }).value());
  const donorIndex = db.data.donors.findIndex((donor) => donor._id === id);
  if (donorIndex !== -1) {
    db.data.donors.splice(donorIndex, 1);
    db.write();
    console.log(`Donor with ID ${id} erased.`);
  } else {
    console.log(`Donor with ID ${id} not found.`);
  }
}

export function UpdateDonor(id, name, lastName, donations) {
  const donorIndex = db.data.donors.findIndex((donor) => donor._id === id);
  if (donorIndex !== -1) {
    if (typeof name !== "string" && name !== null) {
      console.log("Name must be a string. This value is not updated.");
    }

    if (typeof lastName !== "string" && lastName !== null) {
      console.log("Last name must be a string. This value is not updated.");
    }

    if (typeof donations !== "number" && donations !== null) {
      console.log("Donations must be a number. This value is not updated.");
    }

    if (name !== null && typeof name == "string" && name !== "") {
      db.data.donors[donorIndex]._name = name;
    }
    if (lastName !== null && typeof lastName == "string" && lastName !== "") {
      db.data.donors[donorIndex]._lastName = lastName;
    }
    if (donations !== null && typeof donations == "number" && donations !== 0) {
      db.data.donors[donorIndex]._donations.push(donations);
    }
    db.write();
    console.log(`Donor with ID ${id} updated.`);
  } else {
    console.log(`Donor with ID ${id} not found.`);
  }
}

export default function DonorsByDonation() {
  let donors = GetDonors();
  donors = Enumerable.from(donors)
    .orderByDescending((donor) => donor._donations.length)
    .toArray();

  for (let i = 0; i < donors.length; i++) {
    console.log(donors[i]._name);
    console.log(donors[i]._lastName);
    console.log(donors[i]._donations.lenght);
  }
}

