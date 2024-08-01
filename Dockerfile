FROM cypress/browsers:node-20.15.1-chrome-127.0.6533.72-1-ff-128.0-edge-126.0.2592.102-1
RUN mkdir /cypress-project
WORKDIR /cypress-project
COPY ./package.json .
COPY ./cypress .
COPY ./cypress.config.js .
COPY ./cypress.env.json .
RUN npm install
ENTRYPOINT ["npx", "cypress", "run"]
CMD [""]
