"use strict";

const fastifyPlugin = require("fastify-plugin");
const { MongoClient } = require("mongodb");

async function fireFerret(fastify, options) {
  try {
    const mongoOpts = {
      uri: process.env.MONGO_URI,
      dbName: process.env.MONGO_DB,
      collectionName: process.env.MONGO_COLLECTION,
    };
    const mongo = {
      client: new MongoClient(mongoOpts.uri, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
      }),
      db: null,
      collection: null,
    };

    await mongo.client.connect();
    fastify.log.info("MongoDB client connected.");

    if (mongoOpts.dbName) {
      mongo.db = await mongo.client.db(mongoOpts.dbName);
      fastify.log.info(`Connected to db: ${mongoOpts.dbName}`);
    }

    if (mongoOpts.collectionName && mongo.db) {
      mongo.collection = await mongo.db.collection(mongoOpts.collectionName);
      fastify.log.info(`Connected to collection: ${mongoOpts.collectionName}`);
    }

    fastify.decorate("mongo", mongo);
  } catch (err) {
    console.error(err);
  }
}

module.exports = fastifyPlugin(fireFerret);
