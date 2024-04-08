import express from "express";
const app = express();

app.get('/', (req, res) => {
    res.send("Hey there");
})

app.get("/api/jokes", (req, res) => {
    const jokes = [
        {
            id: 1,
            title: "A jokes",
            content: "This is a joke",
        },
        {
            id: 2,
            title: "Another jokes",
            content: "This is another joke",
        }
    ];
    res.send(jokes);
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`app listening on port ${PORT}`)
})