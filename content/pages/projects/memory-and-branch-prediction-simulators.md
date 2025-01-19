---
type: ProjectLayout
title: Memory and Branch Prediction Simulators
date: '2023-10-19'
client: Awesome client
description: >-
  Designed and implemented performance-optimizing simulators for memory
  hierarchy and branch prediction.
featuredImage:
  type: ImageBlock
  url: /images/cache.jpg
  altText: ''
  caption: ''
  elementId: ''
media:
  type: ImageBlock
  url: /images/cache.jpg
  altText: ''
  caption: ''
  elementId: ''
addTitleSuffix: true
colors: colors-a
backgroundImage:
  type: BackgroundImage
  url: /images/bg2.jpg
  backgroundSize: cover
  backgroundPosition: center
  backgroundRepeat: no-repeat
  opacity: 100
---
**Project Overview**
The Cache Design and Memory Hierarchy Simulator is a comprehensive tool designed to analyze and compare the performance, area, and energy of various memory hierarchy configurations using the SPEC-2000 benchmark suite. This simulator enables efficient exploration of memory system designs for modern computing architectures.

**Project Features**

**Generic Cache Module:**

*   Configurable parameters such as cache size, associativity, and block size.

*   Flexible support for L1, L2, and L3 caches within a multi-level memory hierarchy.

**Replacement Policies:**

*   **LRU (Least-Recently-Used):** Ensures the most recently used blocks stay in the cache.

*   **FIFO (First-In-First-Out):** Evicts the oldest block first for simplicity and efficiency.

**Write Policy:**

*   **Write-Allocate:** Allocates a block on a write miss for optimal utilization.

*   **Write-Back:** Updates blocks in the cache and marks them dirty for deferred writes.

**Memory Hierarchy Management:**

*   Handles multiple cache levels and manages data requests from CPU and other caches.

*   Implements efficient strategies for handling cache misses, including eviction and block fetching.

**Simulator Outputs**
The tool provides detailed metrics and outputs, including:

1.  **Memory Hierarchy Configuration:** Display the setup of the cache and memory.

2.  **Final Cache Contents:** Visualize the state of all cache levels after the simulation.

3.  **Performance Metrics:**

    *   L1/L2 reads and writes

    *   Miss counts and rates for each level

    *   Writeback statistics

    *   Total memory traffic

**How to Use the Simulator**

*   **Compilation:** Use the provided Makefile to compile the simulator into an executable named `sim_cache`.

*   **Execution:** Run the simulator using command-line arguments to specify configurations and inputs.

*   **Inputs:** Specify cache parameters, replacement policies, and the trace file to analyze memory access patterns.

