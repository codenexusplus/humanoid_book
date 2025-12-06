# Implementation Plan: Overall Textbook Project

**Branch**: `000-project-plan` | **Date**: 2025-12-05 | **Spec**: N/A
**Input**: User provided 10-chapter outline for "The Architecture of Embodied Intelligence: Building a Humanoid AI Textbook"

**Note**: This template is filled in by the `/sp.plan` command. See `.specify/templates/commands/plan.md` for the execution workflow.

## Summary

This plan outlines a comprehensive 10-chapter structure to guide students from theoretical foundations to full Sim-to-Real deployment of a bipedal humanoid control system.

## Technical Context

**Language/Version**: Markdown (MDX), Python, YAML, XML/URDF/XACRO, C++ (for Isaac ROS)
**Primary Dependencies**: Docusaurus, ROS 2, Isaac Sim/Gazebo, ROS 2 Control, rclpy, PlaTyo, Gemini API
**Storage**: N/A (Content is Markdown files)
**Testing**: Manual review of content, execution of code examples.
**Target Platform**: Web (Docusaurus) for the textbook content. ROS 2 applications target Ubuntu 22.04 LTS.
**Project Type**: Web (Docusaurus) for the textbook, with embedded code examples for robotics platforms.
**Performance Goals**: N/A (for the textbook itself, performance goals will be relevant for the robotics examples)
**Constraints**:
*   Content length per chapter: 2,000 - 3,000 words.
*   Format: Docusaurus Markdown (.md) with required frontmatter.
*   Image Use: Use image tags for diagrams.
**Scale/Scope**: 10 chapters, covering 6 modules, aiming to guide students to Sim-to-Real deployment of a bipedal humanoid control system.

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

### Core principles:

**Course Alignment:** Content must directly map to the "Weekly Breakdown" and "Learning Outcomes" specified in the course details.

**Hardware Contextualization:** All theoretical concepts must be grounded by reference to the required hardware (RTX GPUs, Jetson Orin, RealSense D435i).

**Practical Relevance (Project Focus):** Chapters must prepare students for the Capstone Project (The Autonomous Humanoid).

**Rigor:** Maintain clarity and precision suitable for a Computer Science/Engineering academic audience.

### Key standards:

**Tone:** Technical, authoritative, and project-oriented.

**Chapter Structure (Mandatory):**

*   **Frontmatter:** Must include id, title, and sidebar_position.
*   **Course Mapping:** States which Module and Weeks the chapter covers.
*   **Learning Outcomes:** A clear, bulleted list of 3-5 technical skills gained.
*   **Key Concepts:** Detailed explanations, using bold text for primary terminology. Include relevant physics and kinematics concepts where appropriate.
*   **Code/Configuration Example:** Must include a runnable ROS 2 or configuration snippet (e.g., Python/YAML).
*   **Hardware Connection:** A section detailing which required component (e.g., RTX 4070 Ti, Jetson Orin Nano, RealSense) is essential for this chapter's exercise and why.
*   **Summary/Recap:** A concise paragraph summarizing the chapter's main takeaways.
*   **Review Questions:** 3-5 technical questions testing comprehension.

**Code Quality:** All generated code examples must be minimal, runnable, and use standard ROS 2/Python best practices.

**Readability:** Flesch-Kincaid Grade Level 10-12 (Academic audience).

### Constraints:

**Length:** 2,000 - 3,000 words per chapter/document.

**Format:** Docusaurus Markdown (.md) with required frontmatter.

**Image Use:** Use image tags to request diagrams for complex system architectures or hardware component layouts (e.g., ).

### Success criteria:

*   Chapter content is directly usable for a university-level Physical AI course.
*   Chapter adheres to all new structural and hardware-referencing standards.
*   Content is technically rigorous and clearly explains complex topics like SLAM, kinematics, and simulation physics.

## Project Structure

### Documentation (this feature)

```text
specs/000-project-plan/
├── plan.md              # This file (/sp.plan command output)
├── research.md          # Phase 0 output (/sp.plan command)
├── data-model.md        # Phase 1 output (/sp.plan command)
├── quickstart.md        # Phase 1 output (/sp.plan command)
├── contracts/           # Phase 1 output (/sp.plan command)
└── tasks.md             # Phase 2 output (/sp.tasks command - NOT created by /sp.plan)
```

### Source Code (repository root)

```text
my-website/
├── docs/
│   ├── 001-foundation-embodied-intelligence.md
│   ├── 002-ros2-architecture-core.md
│   ├── 003-robot-modeling-urdf-xacro.md
│   ├── 004-sim-to-real-control-loop-and-simulation-setup.md
│   ├── 005-implementing-dynamic-locomotion.md
│   ├── 006-visual-slam-and-environmental-mapping.md
│   ├── 007-sensor-fusion-and-state-estimation.md
│   ├── 008-goal-oriented-task-planning.md
│   ├── 009-vlm-integration-and-conversational-control.md
│   └── 010-real-world-deployment-and-debugging.md
```

**Structure Decision**: The textbook content will reside in the `my-website/docs` directory, with each chapter as a separate Markdown file.

## Complexity Tracking

| Violation | Why Needed | Simpler Alternative Rejected Because |
|-----------|------------|-------------------------------------|
| | | |
| | | |