from google import genai
import json

from app.core.config import settings
from app.schemas.ai import AITask
from app.exceptions.ai import AIServiceError


client = genai.Client(
    api_key=settings.GEMINI_API_KEY
)


def test_connection():
    response = client.models.generate_content(
        model=settings.GEMINI_MODEL,
        contents="Say hello in one sentence."
    )

    return response.text


def generate_tasks_from_description(project_description: str):
    prompt = f"""
You are an experienced software project manager.

Break the following software project into implementation tasks.

Generate between 6 and 10 development tasks.

Focus only on software implementation.

Do not include deployment, marketing, or business tasks.

Return ONLY valid JSON.

Do not include markdown.

Do not include code fences.

Do not include explanations.

Use this format exactly:

[
    {{
        "title": "Task Title",
        "description": "Task Description"
    }}
]

Project:

{project_description}
"""

    try:
        response = client.models.generate_content(
            model=settings.GEMINI_MODEL,
            contents=prompt,
        )

        response_text = response.text

        response_text = response_text.replace(
            "```json",
            ""
        )

        response_text = response_text.replace(
            "```",
            ""
        )

        response_text = response_text.strip()

        tasks = json.loads(response_text)

        validated_tasks = []

        for task in tasks:
            validated_tasks.append(
                AITask(**task)
            )

        return validated_tasks

    except Exception as e:
        raise AIServiceError(
            "Failed to generate AI tasks."
        ) from e