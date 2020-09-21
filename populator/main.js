'use strict'

const dotenv = require('dotenv')
const printer = require('mockuments')
const { MongoClient } = require('mongodb')

async function main () {
  dotenv.config()

  const uri = process.env.MONGO_URI
  const dbName = process.env.MONGO_DB
  const collectionName = process.env.MONGO_COLLECTION
  if (!uri || !dbName || !collectionName) {
    console.error(
      'InvalidArguments: uri, dbName, and collectionName are required arguments. Please configure a .env file.'
    )
    process.exit(666)
  }

  const mongo = new MongoClient(uri, {
    useUnifiedTopology: true,
    useNewUrlParser: true
  })

  const docs = printer(1000)
  try {
    await mongo.connect()
    console.log('Connected to MongoDB...')
    await mongo.db(dbName).collection(collectionName).insertMany(docs)
    console.log(`Inserted ${docs.length} documents!`)
    await mongo.close()
  } catch (err) {
    console.error(err)
    process.exit(666)
  }

  return 0
}

main()
