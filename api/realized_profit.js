// /api/realized_profit.js

export default async function handler(req, res) {
  const token = "0d866412-d29c-41ed-a044-7be4fb52478a";
  const endpoint = `https://api.researchbitcoin.net/v1/realizedprofit/realized_profit`;
  const params = new URLSearchParams({
    token: token,
    date_field: "2023-01-01",
    output_format: "json"
  });

  try {
    const response = await fetch(`${endpoint}?${params}`);
    if (!response.ok) {
      console.error("External API error:", response.status);
      return res.status(response.status).json({ error: "External API error" });
    }

    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    console.error("Fetch error:", error);
    res.status(500).json({ error: "Failed to fetch data" });
  }
}
