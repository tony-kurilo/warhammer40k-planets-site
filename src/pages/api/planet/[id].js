import pool from "../../../app/database/db"

// req = HTTP incoming message, res = HTTP server response
export default async function handler(req, res) {
    if (req.method === "GET") {
        const { id } = req.query;
        const result = await pool.query("SELECT p.*, pi.*, pim.* FROM planets p LEFT JOIN planets_info pi ON p.id = pi.id LEFT JOIN planets_images pim ON p.id = pim.id WHERE p.id = $1", [id]);

        if (result.rows.length === 0) {
            return res.status(404).send("No data");
        }

        return res.status(200).json(result.rows || []);
    } else {
        return res.status(405).send("No data");
    }
}