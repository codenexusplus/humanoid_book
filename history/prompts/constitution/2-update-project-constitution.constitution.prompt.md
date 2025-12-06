---
id: 2
title: Update Project Constitution
stage: constitution
date: 2025-12-05
surface: agent
model: gemini-pro
feature: none
branch: main
user: user
command: /sp.constitution
labels: [constitution]
links:
  spec: null
  ticket: null
  adr: null
  pr: null
files:
 - .specify/memory/constitution.md
tests:
 - none
---

## Prompt

/sp.constitution

Project: Embodied Intelligence: A Textbook for Physical AI & Humanoid Robotics

Core principles:

Course Alignment: Content must directly map to the "Weekly Breakdown" and "Learning Outcomes" specified in the course details.

Hardware Contextualization: All theoretical concepts must be grounded by reference to the required hardware (RTX GPUs, Jetson Orin, RealSense D435i).

Practical Relevance (Project Focus): Chapters must prepare students for the Capstone Project (The Autonomous Humanoid).

Rigor: Maintain clarity and precision suitable for a Computer Science/Engineering academic audience.

Key standards:

Tone: Technical, authoritative, and project-oriented.

Chapter Structure (Mandatory):

Frontmatter: Must include id, title, and sidebar_position.

Course Mapping: States which Module and Weeks the chapter covers.

Learning Outcomes: A clear, bulleted list of 3-5 technical skills gained.

Key Concepts: Detailed explanations, using bold text for primary terminology. Include relevant physics and kinematics concepts where appropriate.

Code/Configuration Example: Must include a runnable ROS 2 or configuration snippet (e.g., Python/YAML).

Hardware Connection: A section detailing which required component (e.g., RTX 4070 Ti, Jetson Orin Nano, RealSense) is essential for this chapter's exercise and why.

Summary/Recap: A concise paragraph summarizing the chapter's main takeaways.

Review Questions: 3-5 technical questions testing comprehension.

Code Quality: All generated code examples must be minimal, runnable, and use standard ROS 2/Python best practices.

Readability: Flesch-Kincaid Grade Level 10-12 (Academic audience).

Constraints:

Length: 2,000 - 3,000 words per chapter/document.

Format: Docusaurus Markdown (.md) with required frontmatter.

Image Use: Use image tags to request diagrams for complex system architectures or hardware component layouts (e.g., ).

Success criteria:

Chapter content is directly usable for a university-level Physical AI course.

Chapter adheres to all new structural and hardware-referencing standards.

Content is technically rigorous and clearly explains complex topics like SLAM, kinematics, and simulation physics.

## Response snapshot

Updated the project constitution with new principles and standards.

## Outcome

- ✅ Impact: The project constitution has been updated to reflect the new principles and standards for the Embodied Intelligence textbook.
- 🧪 Tests: None
- 📁 Files: .specify/memory/constitution.md
- 🔁 Next prompts: None
- 🧠 Reflection: The new constitution is well-defined and provides clear guidelines for content creation.
