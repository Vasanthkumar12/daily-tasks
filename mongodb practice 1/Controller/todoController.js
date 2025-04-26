import { todoDetails } from "../Model/todoSchema.js"

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

export const getTodo = async(req, res) => {
    try {
        const todoData = await todoDetails.find()
        res.status(200).json({ todoData })
    }
    catch(error) {
        res.status(500).json({ error: error.message })
    }
}
