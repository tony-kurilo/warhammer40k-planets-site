import pool from "../../app/database/db"

// req = HTTP incoming message, res = HTTP server response
export default async function handler(req, res) {
    if (req.method === "GET") {
        const result = await pool.query("SELECT * FROM planets");

        if (result.rows.length === 0) {
            return res.status(404).send("No planets");
        }

        return res.status(200).json(result.rows || []);
    } else {
        return res.status(405).send("No planets");
    }
}