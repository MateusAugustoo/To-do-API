export type TTAsk = {
  id: string;
  name: string;
  description: string;
  status: "done" | "not done";
  dateStart: Date;
  dateEnd: Date;
}