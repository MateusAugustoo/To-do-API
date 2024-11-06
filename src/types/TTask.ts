export type TTAsk = {
  id: string;
  name: string;
  description: string;
  status: "todo" | "doing" | "done";
  created_at: Date;
}