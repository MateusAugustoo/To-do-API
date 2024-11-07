import { FastifyInstance, FastifyRequest, FastifyReply } from "fastify";
import { createTask, deleteTask, getTasks, updateTask } from "../service/taskService";
import { TTAsk } from "../types/TTask";

export function taskRouter(fastify: FastifyInstance) {
  fastify.get('/tasks', async (request: FastifyRequest, reply: FastifyReply) => {
    const tasks = await getTasks();

    if(!tasks) reply.status(404).send({error: "Tasks not found"});
    reply.status(200).send({tasks})
  })

  fastify.post('/tasks', async (request: FastifyRequest, reply: FastifyReply) => {
    const task = request.body as TTAsk
    const createdTask = await createTask(task)
    reply.status(201).send({task: createdTask})
  })

  fastify.put('/tasks/:id', async (request: FastifyRequest, reply: FastifyReply) => {
    const { id } = request.params as {id: string}
    const task = request.body as TTAsk
    const updatedTask = await updateTask(id, task)
    reply.status(200).send({task: updatedTask, message: "Task updated"})
  })

  fastify.delete('/tasks/:id', async (request: FastifyRequest, reply: FastifyReply) => {
    const { id } = request.params as {id: string}
    const deletedTask = await deleteTask(id)
    reply.status(200).send({task: deletedTask, message: "Task deleted"})
  })
}