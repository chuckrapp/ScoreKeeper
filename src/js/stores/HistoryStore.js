import { EventEmitter } from "events";

class HistoryStore extends EventEmitter{
  constructor() {
    super()
    this.history = [
      {
        name: "Chuck",
        score: 135,
        advanced: "is stuck on",
        round: 44
      },
      {
        name: "Alex",
        score: 23,
        advanced: "advanced to",
        round: 344
      },
      {
        name: "Vickie",
        score: 35,
        advanced: "advanced to",
        round: 334
      },
      {
        name: "Ward",
        score: 13,
        advanced: "advanced to",
        round: 333
      },
    ];
  }
  getAll() {
    return this.history;
  }
}

const historyStore = new HistoryStore;

export default historyStore;