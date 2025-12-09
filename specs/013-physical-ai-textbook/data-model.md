# Data Model: Physical AI & Humanoid Robotics Textbook

**Feature Branch**: `013-physical-ai-textbook`
**Created**: 2025-12-08
**Status**: Draft

## Entities

### User

Represents a user interacting with the textbook and its features.

*   **id**: (Primary Key) Unique identifier for the user (UUID).
*   **username**: (String) Unique username for login.
*   **email**: (String) Unique email address for contact and login.
*   **password_hash**: (String) Hashed and salted password for security.
*   **software_background**: (JSON/Text) Details about the user's software expertise (e.g., programming languages, frameworks, tools). This can be a flexible JSON object or a text field.
*   **hardware_background**: (JSON/Text) Details about the user's hardware experience (e.g., robotic platforms, embedded systems, sensors). This can be a flexible JSON object or a text field.
*   **personalization_settings**: (JSON) User-specific preferences that influence content presentation (e.g., preferred examples, depth of explanation).
*   **preferred_language**: (String) User's preferred language for content display (e.g., 'en', 'ur').

### BookContent

Represents a segment of the textbook content, primarily for the RAG chatbot and personalization/translation features. This will likely correspond to chunks of Docusaurus Markdown files.

*   **id**: (Primary Key) Unique identifier for the content segment (UUID).
*   **chapter_id**: (String) Identifier for the chapter this segment belongs to.
*   **segment_id**: (String) Unique identifier for the segment within its chapter.
*   **text_content**: (Text) The actual textual content of the segment.
*   **embedding**: (Vector) Numerical representation of the `text_content` for vector search (stored in Qdrant).
*   **metadata**: (JSON) Additional contextual information (e.g., section title, original file path, keywords).

### ChatInteraction (Optional - for future analytics/history)

Represents a user's interaction with the RAG chatbot. This might be used for logging, analytics, or displaying chat history.

*   **id**: (Primary Key) Unique identifier for the chat interaction (UUID).
*   **user_id**: (Foreign Key) Links to the `User` entity.
*   **query**: (Text) The user's input query to the chatbot.
*   **response**: (Text) The chatbot's generated response.
*   **timestamp**: (Datetime) Time of the interaction.

## Relationships

*   **User** has many **ChatInteraction**s (One-to-Many).
*   **BookContent** is associated with **User** for personalization (Many-to-Many through `personalization_settings` and `preferred_language` on User).
*   **BookContent** provides data for **ChatInteraction**s.
