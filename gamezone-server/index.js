const express = require("express");
const cors = require("cors");
require("dotenv").config();
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const app = express();
const port = process.env.PORT || 5000;

//middleware
app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.y3dh1.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    // await client.connect();

    const reviewCollection = client.db("reviewDB").collection("review");
    const watchListCollection = client.db("reviewDB").collection("watchlist");

    app.get("/review", async (req, res) => {
      const email = req.query.email;

      if (email) {

        const query = { email: email };
        const cursor = reviewCollection.find(query);
        const result = await cursor.toArray();
        res.send(result);
      }

      else {
        const cursor = reviewCollection.find();
        const result = await cursor.toArray();
        res.send(result);
      }

      
    });

    app.get("/review/:id", async (req, res) => {
      const id = req.params.id;

      const query = { _id: new ObjectId(id) };
      const result = await reviewCollection.findOne(query);
      res.send(result);
    });


    app.post("/review", async (req, res) => {
      const newReview = req.body;
      console.log(newReview);

      const result = await reviewCollection.insertOne(newReview);
      res.send(result);
    });

    app.get('/watchlist', async(req,res)=>{

      const userEmail = req.query.userEmail;

      if (userEmail) {

        const query = {userEmail: userEmail};
        const cursor = watchListCollection.find(query);
        const result = await cursor.toArray();
        res.send(result);
      }

      else {
        const cursor = watchListCollection.find();
      const result = await cursor.toArray();
      res.send(result);
      }


      
    })

    app.post("/watchlist", async(req,res)=>{

      const watchListData = req.body;
      console.log(watchListData);

      const existing = await watchListCollection.findOne({
        id: watchListData.id,
        userEmail: watchListData.userEmail
      });

      if(existing){
        return res.status(400).send({
          message: "This review is already in your watchlist",
        });
      }

      const result =await watchListCollection.insertOne(watchListData);
      res.send(result);

    });


    app.put('/review/:id', async(req,res)=>{
      const id =req.params.id;
      const filter ={_id: new ObjectId(id)};
      const options={upsert: true};
      const updatedReview = req.body;
      const review={
        $set: {
          photo:updatedReview.photo, 
          title:updatedReview.title, 
          des:updatedReview.des,
          rating:updatedReview.rating,
          year:updatedReview.year,
          genre:updatedReview.genre
        }
      }

      const result =await reviewCollection.updateOne(filter,review,options);
      res.send(result);
    })



    app.delete('/review/:id', async(req,res)=>{
      const id = req.params.id;
      const query = {_id: new ObjectId(id)};
      const result = await reviewCollection.deleteOne(query);
      res.send(result);
    })

    // Send a ping to confirm a successful connection
    // await client.db("admin").command({ ping: 1 });
    // console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("Game zone server is running");
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
