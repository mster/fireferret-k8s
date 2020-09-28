"use strict";

const { querySchema } = require("../schemas/query");
const httpError = require("http-errors");

module.exports = async function (fastify, opts) {
  fastify.addHook("onRequest", async (req, reply) => {});

  fastify.setNotFoundHandler(function (req, reply) {
    reply
      .code(404)
      .type("application/json")
      .send({ message: "Requested resource does not exist." });
  });

  fastify.get("/query", { schema: querySchema }, async function (req, reply) {
    let { query, page, size } = req.query;

    if (!query) {
      throw httpError(404, "QueryString parameter 'query' is required");
    }

    if ((page || size) && (isNaN(page) || isNaN(size))) {
      throw httpError(
        400,
        "Invalid pagination options. Page and size must be coercible non-negative integers."
      );
    }

    query = JSON.parse(query);
    const queryOpts = {};

    if (!isNaN(page) && !isNaN(size)) {
      queryOpts.skip = page * size;
      queryOpts.limit = Number(size);
    }

    try {
      const payload = await this.mongo.collection
        .find(query, queryOpts)
        .toArray();
      reply.send(payload);
    } catch (err) {
      throw httpError(500, err);
    }
  });
};
