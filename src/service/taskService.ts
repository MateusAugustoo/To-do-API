import { prisma } from "../prisma";
import { TTAsk } from "../types/TTask";

export const createTask = async (data: TTAsk) => {
  return await prisma.task.create({data})
}

export const getTasks = async () => {
  return await prisma.task.findMany()
}

export const updateTask = async (id: string, data: TTAsk) => {
  return await prisma.task.update({where: {id}, data})
}

export const deleteTask = async (id: string) => {
  return await prisma.task.delete({where: {id}})
}
