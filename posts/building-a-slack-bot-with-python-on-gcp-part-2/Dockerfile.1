# Base image. This version is in the pyproject file as well.
# See Image Variants on https://hub.docker.com/_/python
FROM python:3.9-slim

# Install various system dependencies.
RUN pip install "poetry==1.1.8"

# Install various project dependencies.
# Copy only requirements to cache them in docker layer.
WORKDIR /app
COPY poetry.lock pyproject.toml /app/
# Install Python dependencies.
RUN poetry config virtualenvs.create false \
  && poetry install --no-interaction --no-ansi

# Run the server.
COPY src/ /app/
EXPOSE 5000
ENV FLASK_APP="valet_parking_slack_bot.server.py"

CMD [ \
	"flask", "run", \
	"--host=0.0.0.0" \
    ]
