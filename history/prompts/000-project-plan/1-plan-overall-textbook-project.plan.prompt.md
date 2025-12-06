---
id: 1
title: Plan Overall Textbook Project
stage: plan
date: 2025-12-05
surface: agent
model: gemini-pro
feature: 000-project-plan
branch: 000-project-plan
user: user
command: /sp.plan
labels: [plan]
links:
  spec: null
  ticket: null
  adr: null
  pr: null
files:
 - specs/000-project-plan/plan.md
 - specs/000-project-plan/research.md
 - specs/000-project-plan/data-model.md
 - specs/000-project-plan/quickstart.md
tests:
 - none
---

## Prompt

/sp.plan

The Architecture of Embodied Intelligence: Building a Humanoid AI Textbook

This plan outlines a comprehensive 10-chapter structure to guide students from theoretical foundations to full Sim-to-Real deployment of a bipedal humanoid control system.

Module 1: The Foundations of Physical AI

Chapter 1: The Foundation of Embodied Intelligence (Conceptual): Differentiating Physical AI from Digital AI. Introduction to Kinematics, Dynamics, and the required hardware stack (RTX GPU, Jetson Orin Nano).

Module 2: The Robotic Core - Communication and Modeling

Chapter 2: The Robotic Nervous System (ROS 2 Fundamentals) (YAML/Python): Mastering ROS 2 concepts (Nodes, Topics, Services, Actions) as the robot's middleware.

Chapter 3: The Digital Twin (Modeling the Humanoid Structure) (XML/XACRO): Building the geometric and physical model using URDF/XACRO and visualizing the kinematic chain in RViz.

Module 3: Low-Level Control and Locomotion

Chapter 4: Sim-to-Real Control Loop and Simulation Setup (YAML/ROS 2 Control): Integrating the model into a physics simulator and implementing basic joint control using the ROS 2 Control framework.

Chapter 5: Implementing Dynamic Locomotion (Python/Control Theory): Deep dive into Bipedal Walking Theory (Zero Moment Point, Capture Point). Developing high-frequency, stable walking gaits.

Module 4: Perception and State Estimation

Chapter 6: Visual SLAM and Environmental Mapping (C++/Isaac ROS): Using depth cameras and IMUs to create real-time maps and track the robot's pose using Visual-Inertial Odometry (VIO) and SLAM algorithms.

Chapter 7: Sensor Fusion and State Estimation (Python/Kalman Filters): Combining sensor data (IMU, F/T, Camera) using advanced filtering techniques (e.g., Extended Kalman Filters) for robust position and velocity estimates.

Module 5: High-Level Cognition and Task Planning

Chapter 8: Goal-Oriented Task Planning (Python/PlaTyo): Moving from low-level control to symbolic reasoning. Implementing hierarchical task planners (HTN) for multi-step tasks (e.g., "Find and open the door").

Chapter 9: VLM Integration and Conversational Control (Python/Gemini API): Integrating Large Vision Models (VLMs) and LLMs to enable natural language understanding and real-time environment querying for autonomous decision-making.

Module 6: Final Deployment and Debugging

Chapter 10: Real-World Deployment and Safety (Linux/Shell): Strategies for optimizing and deploying the complete ROS 2 stack onto the Jetson Orin Nano. Debugging Sim-to-Real gap issues and physical safety protocols.

## Response snapshot

Created the overall implementation plan for the textbook project.

## Outcome

- ✅ Impact: The overall project plan has been created, outlining the 10-chapter structure, technical context, and project structure.
- 🧪 Tests: None
- 📁 Files: 
  - specs/000-project-plan/plan.md
  - specs/000-project-plan/research.md
  - specs/000-project-plan/data-model.md
  - specs/000-project-plan/quickstart.md
- 🔁 Next prompts: /sp.specify for individual chapters
- 🧠 Reflection: The planning phase for the overall project was successful. The plan provides a high-level overview of the textbook content and technical considerations.
