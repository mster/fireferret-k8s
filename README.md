<div style="inline-block; vertical-align: middle;">
    <img src="https://user-images.githubusercontent.com/15038724/94491772-b7cb9d80-019d-11eb-9d6f-1997b3f88b3d.png" height="150"/>
    <img src="https://user-images.githubusercontent.com/15038724/94491862-e21d5b00-019d-11eb-8f6f-e36f48709d90.png" height="150"/>
    <img height="150" alt="MongoDB_Leaf_FullColor_RGB" src="https://user-images.githubusercontent.com/15038724/94492332-f01fab80-019e-11eb-8fd5-2e9eda7b9844.png"/>
</div>

# FireFerret Kubernetes Example

## Background

**FireFerret**

FireFerret is a client designed to mimic the usage of the tried-and-true [MongoDB driver](https://www.npmjs.com/package/mongodb), while providing caching functionality out of the box. FireFerret aims to reduce the quantity of expensive network requests by utilizing Redis instance(s), while simultaneously retaining content parity with MongoDB.

FireFerret for Node can be found [here](https://github.com/mster/fireferret).

**Sidecar Pattern**

Read more about Kubernetes patterns [here](https://kubernetes.io/blog/2015/06/the-distributed-system-toolkit-patterns/).

## Benchmarks

We use [Autocannon](https://github.com/mcollina/autocannon) for local load testing.

**MongoDB Driver**

**FireFerret Client**
