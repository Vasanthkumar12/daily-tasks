import { todoDetails } from "../Model/todoSchema"

export const postTodo = async (req, res) => {
    try {
        const todoData = new todoDetails(req.body)
        await todoData.save()
        res.status(200).json({ message: "Todo data is created successfully", todoData })
    }
    catch(error) {
        res.status(500).json({ error: error.message })
    }
}

