FROM docker/whalesay:latest
LABEL Name=2022dwcca22danielll Version=0.0.1
RUN apt-get -y update && apt-get install -y fortunes
CMD ["sh", "-c", "/usr/games/fortune -a | cowsay"]
