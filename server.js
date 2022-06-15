import express from "express";
import axios from "axios";
const app = express();
const port = 3007;
const nounsFromApi = (
  await axios.get("https://edwardtanguay.netlify.app/share/germanNouns.json")
).data;
const nounsList = `<ol>
${nounsFromApi
  .map(
    (noun) => `<li>${noun.article} ${noun.singular} (pl. ${noun.plural})</li>`
  )
  .join("")}
</ol>`;
app.get("/", (req, res) => {
  res.send(nounsList);
});
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
