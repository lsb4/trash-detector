const express = require("express");
const cors = require("cors");
const { Sequelize } = require("sequelize");
const db = require("./models");

const app = express();

const sequelize = new Sequelize("trash_detector", "root", "password", {
  dialect: "mysql",
  host: "localhost",
});

app.use(express.json());
app.use(cors());

// Collection Points

app.post("/collectionpoints", async (req, res) => {
  try {
    const {
      latitude,
      longitude,
      accumulation_degree,
      priority,
      last_collection_date,
    } = req.body;
    const collectionPoint = await db.CollectionPoint.create({
      latitude,
      longitude,
      accumulation_degree,
      priority,
      last_collection_date,
    });
    res.status(201).json(collectionPoint);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get("/collectionpoints", async (req, res) => {
  try {
    const collectionPoints = await db.CollectionPoint.findAll();
    res.status(200).json(collectionPoints);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get("/collectionpoints/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const collectionPoint = await db.CollectionPoint.findByPk(id);
    if (collectionPoint) {
      res.status(200).json(collectionPoint);
    } else {
      res.status(404).json({ message: "CollectionPoint not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.put("/collectionpoints/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const {
      latitude,
      longitude,
      accumulation_degree,
      priority,
      last_collection_date,
    } = req.body;
    const collectionPoint = await db.CollectionPoint.findByPk(id);
    if (collectionPoint) {
      collectionPoint.latitude = latitude;
      collectionPoint.longitude = longitude;
      collectionPoint.accumulation_degree = accumulation_degree;
      collectionPoint.priority = priority;
      collectionPoint.last_collection_date = last_collection_date;
      await collectionPoint.save();
      res.status(200).json(collectionPoint);
    } else {
      res.status(404).json({ message: "CollectionPoint not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.delete("/collectionpoints/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const collectionPoint = await db.CollectionPoint.findByPk(id);
    if (collectionPoint) {
      await collectionPoint.destroy();
      res.status(204).json();
    } else {
      res.status(404).json({ message: "CollectionPoint not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Organizations

app.post("/organizations", async (req, res) => {
  try {
    const { trucks, busy_trucks, collects } = req.body;
    const organization = await db.Organization.create({
      trucks,
      busy_trucks,
      collects,
    });
    res.status(201).json(organization);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get("/organizations", async (req, res) => {
  try {
    const organizations = await db.Organization.findAll();
    res.status(200).json(organizations);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get("/organizations/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const organization = await db.Organization.findByPk(id);
    if (organization) {
      res.status(200).json(organization);
    } else {
      res.status(404).json({ message: "Organization not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.put("/organizations/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { trucks, busy_trucks, collects } = req.body;
    const organization = await db.Organization.findByPk(id);
    if (organization) {
      organization.trucks = trucks;
      organization.busy_trucks = busy_trucks;
      organization.collects = collects;
      await organization.save();
      res.status(200).json(organization);
    } else {
      res.status(404).json({ message: "Organization not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.delete("/organizations/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const organization = await db.Organization.findByPk(id);
    if (organization) {
      await organization.destroy();
      res.status(204).json();
    } else {
      res.status(404).json({ message: "Organization not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(3002, () => {
  console.log("Server started on port 3002");
});
