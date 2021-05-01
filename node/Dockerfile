# ---- Base Node ----
FROM alpine:3.11 AS base
# install node
RUN apk add --no-cache nodejs-current tini npm
# set working directory
WORKDIR /usr/src/app
# Set tini as entrypoint
ENTRYPOINT ["/sbin/tini", "--"]
# copy project file
COPY package.json .


# ---- Dependencies ----
FROM base AS dependencies
# install node packages
RUN npm set progress=false && npm config set depth 0
RUN npm install --only=production 
# copy production node_modules aside
RUN cp -R node_modules prod_node_modules

# install ALL node_modules, including 'devDependencies'
#RUN npm install


# ---- Release ----
FROM base AS release

COPY --from=dependencies /usr/src/app/prod_node_modules ./node_modules

COPY . .

EXPOSE 3000

ENV WAIT_VERSION 2.8.0

ADD https://github.com/ufoscout/docker-compose-wait/releases/download/$WAIT_VERSION/wait /wait

RUN chmod +x /wait

CMD ["node","index.js"]