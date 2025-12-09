# 📚 Feature Specification: Module 1 - ROS 2 Fundamentals

**Feature Branch**: `006-module-1-ros2-fundamentals`
**Created**: 2025-12-07
**Status**: Draft

## Overview
This specification defines the requirements for creating the foundational content for **Module 1: ROS 2 (Weeks 3-5)**. This module establishes the fundamental concepts of the Robot Operating System 2, focusing on the communication graph, core command-line tools, and the creation of the robot's structural definition using URDF (Unified Robot Description Format).

## Goals and Rationale
The primary goal is to ensure students can understand, navigate, and utilize the ROS 2 ecosystem to create modular, decentralized robot software. By the end of this module, students must be able to define a multi-link robot in URDF and create basic Python nodes that communicate via topics. This is the "Nervous System" foundation for all subsequent modules.

## User Scenarios & Testing

### User Scenario 1: ROS 2 Communication Graph (P1)
**Given** the student has successfully installed ROS 2 (from the Introduction module),
**When** the student creates two separate Python executables (nodes): a Publisher and a Subscriber,
**Then** the nodes MUST successfully exchange data (e.g., a simple string or integer) over a custom ROS 2 topic, and the communication graph must be verifiable using `ros2 graph`.
**Acceptance Test**: The student runs both nodes, observes the data transfer in the console, and generates a valid `ros2 graph` visualization.

### User Scenario 2: Defining the Robot Structure (URDF) (P1)
**Given** the student understands the concepts of links, joints, and transmissions,
**When** the student writes a URDF file for a simple, two-armed humanoid torso (2 links, 1 joint per arm),
**Then** the robot model MUST successfully load and display in RViz2, with correct visual and coordinate frame assignments for all links and joints.
**Acceptance Test**: The student launches RViz2 with the URDF file, and a reviewer can visually confirm the structure and manipulate the joint state in the GUI.

### User Scenario 3: Python Node Development (rclpy) (P2)
**Given** the student needs to develop a reusable Python component (node),
**When** the student uses the `rclpy` client library to create a class-based node with logging, parameters, and a timer callback,
**Then** the node MUST be correctly compiled, installed, and executable using `ros2 run` from the install space.
**Acceptance Test**: The student creates a new package, builds it with `colcon`, and successfully runs the node, confirming its output via `ros2 topic echo` and `ros2 param list`.

## Functional Requirements (FR)

| ID | Requirement | Category |
| :--- | :--- | :--- |
| **FR-M1-001** | The content MUST comprehensively cover the ROS 2 middleware architecture: Nodes, Topics, Services, Actions, and Parameters. | Core Architecture |
| **FR-M1-002** | The module MUST provide clear tutorials for using the core ROS 2 command-line interface (CLI) tools (`ros2 run`, `ros2 topic`, etc.). | Tooling |
| **FR-M1-003** | The content MUST detail the creation of ROS 2 Packages using Python (`rclpy`) and the correct configuration of `setup.py` and `package.xml`. | Development Setup |
| **FR-M1-004** | The content MUST guide the student through defining the robot's kinematics and structure using URDF, including links, joints, and materials. | Robot Modeling (URDF) |
| **FR-M1-005** | The module MUST cover the use of RViz2 for visualizing the robot model, sensor data, and the communication graph. | Visualization |
| **FR-M1-006** | The content MUST introduce ROS 2 Launch files (Python structure) for simultaneously starting multiple nodes and RViz2. | Orchestration |
| **FR-M1-007** | The module MUST include an Exercise Block requiring students to integrate a sensor (simulated camera/LiDAR) into their URDF. | Assessment/Integration |

## Success Criteria

| ID | Criterion | Type |
| :--- | :--- | :--- |
| **SC-M1-001** | **Communication Fidelity**: 95% of students successfully implement the Publisher/Subscriber pattern for a custom message type. | Quantitative |
| **SC-M1-002** | **Model Accuracy**: The student-created URDF must pass a standard check and load without errors in RViz2. | Qualitative |
| **SC-M1-003** | **Package Readiness**: A student can create a new, functional ROS 2 Python package and run its executable node in under 20 minutes. | Quantitative |
| **SC-M1-004** | **Conceptual Grasp**: Students can accurately describe the difference between a Topic and a Service in the module assessment. | Qualitative |

## Assumptions
- **A-001**: Students have completed the Introduction module and have a working ROS 2 environment.
- **A-002**: All code examples will be provided in Python (`rclpy`).
- **A-003**: Focus is on the ROS 2 core concepts and kinematics; dynamics (physics) are reserved for a later module.

## Key Entities (Data Model)

| Entity | Description | Context |
| :--- | :--- | :--- |
| **Node** | An executable component in the ROS 2 graph. | Core concept (FR-M1-001). |
| **Topic** | A decentralized, asynchronous communication bus. | Used for data streaming. |
| **URDF** | XML format defining the robot's physical structure. | Robot definition (FR-M1-004). |
| **Package** | The standard unit of software organization in ROS 2. | Development unit (FR-M1-003). |
