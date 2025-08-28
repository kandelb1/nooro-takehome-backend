import { Prisma } from "../../generated/prisma";

export const tasks: Prisma.TaskCreateInput[] = [
  {
    title: "Start essay for english class",
    color: "red",
  },
  {
    title: "Finish reading book",
    color: "blue",
  },
  {
    title: "Go to gym",
    color: "blue",
  },
  {
    title: "Call dad",
    color: "green",
  }
];