# FireFerret Kubernetes Example

How much time On-CPU can you save using FireFerret alongside a Redis Sidecar? How does this reflect in response times?

This example will help illustrate the power of FireFerret.

## Background

**FireFerret**

FireFerret for Node.js can be found [here](https://github.com/mster/fireferret).

**Sidecar Pattern**

Read more about Kubernetes patterns [here](https://kubernetes.io/blog/2015/06/the-distributed-system-toolkit-patterns/).

## Benchmarks

We use [Autocannon](https://github.com/mcollina/autocannon) for local load testing.

**MongoDB Driver**

| Active Connections | Req/Sec | Bytes/Sec |
| ------------------ | ------- | --------- |
| 1                  | X       | Y         |
| 5                  | X       | Y         |
| 10                 | X       | Y         |
| 50                 | X       | Y         |

**FireFerret Client**

| Active Connections | Req/Sec | Bytes/Sec |
| ------------------ | ------- | --------- |
| 1                  | X       | Y         |
| 5                  | X       | Y         |
| 10                 | X       | Y         |
| 50                 | X       | Y         |
