---
id: 1
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

Project: Technical Book Series (Docusaurus/SpeckiT)

Core principles:

Pedagogical Structure: Every chapter must follow a defined learning flow (Objectives -> Content -> Summary -> Review).

Readability & Engagement: Content must be clear, engaging, and easy for the target audience to follow.

Actionable Examples: All technical concepts must be accompanied by working, well-commented code or configuration examples.

Modularity: Chapters must be self-contained but flow logically into the next chapter in the sequence.

Key standards:

Tone: Expert, supportive, and tutorial-focused. Avoid overly academic or dramatic language.

Chapter Structure (Mandatory):

Frontmatter: Must include id, title, and sidebar_position.

Learning Objectives: A short, bulleted list of 3-5 things the reader will know or be able to do after the chapter.

Key Concepts: Detailed explanations, using bold text for primary terminology.

Practical Example/Code Block: Must include a runnable code block (e.g., bash, javascript, python, etc.) for hands-on learning.

Summary/Recap: A concise paragraph summarizing the chapter's main takeaways.

Review Questions: 3-5 questions testing comprehension of the learning objectives.

Code Quality: All generated code examples must be complete, runnable, and include inline comments explaining the core logic.

Readability: Flesch-Kincaid Grade Level 8-10 (to ensure accessibility for a broad technical audience).

Constraints:

Length: 1,500 - 2,500 words per chapter/document.

Format: Docusaurus Markdown (.md) with required frontmatter.

External Links: Use sparingly, only linking to official documentation or highly authoritative resources (no internal linking to other chapters yet, as IDs might change).

Success criteria:

Chapter content is immediately ready for deployment within a Docusaurus site.

Chapter meets all defined structural standards (Objectives, Code, Summary, Review Questions).

The chapter successfully teaches the intended concept and includes working code examples.

## Response snapshot

Updated the project constitution with new principles and standards.

## Outcome

- ✅ Impact: The project constitution has been updated to reflect the new principles and standards for the Technical Book Series.
- 🧪 Tests: None
- 📁 Files: .specify/memory/constitution.md
- 🔁 Next prompts: None
- 🧠 Reflection: The new constitution is well-defined and provides clear guidelines for content creation.
