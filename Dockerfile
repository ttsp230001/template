FROM mcr.microsoft.com/devcontainers/base:bullseye

WORKDIR /app

RUN apt update && apt-get install -y \
    curl \
    lsb-release \
    git \
    unzip

USER root
RUN chown -R root:vscode /app
USER vscode

RUN curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash \
    && . "$HOME/.nvm/nvm.sh"

USER root
RUN curl -fsSL https://deb.nodesource.com/setup_22.x | bash - \
    && apt-get install -y nodejs

USER vscode
RUN curl -fsSL https://bun.sh/install | bash
ENV PATH="/home/vscode/.bun/bin:${PATH}"

CMD ["bash"]