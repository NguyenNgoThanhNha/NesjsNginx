FROM node:22.17.0-alpine AS base
WORKDIR /usr/src/app

FROM base AS deps
COPY package*.json ./
RUN npm ci

FROM deps AS build
COPY . .
RUN npx prisma generate
RUN npm run build

FROM base AS final
ENV NODE_ENV=production
USER node
COPY package*.json ./
COPY --from=deps /usr/src/app/node_modules ./node_modules
COPY --from=build /usr/src/app/dist ./dist
COPY --from=build /usr/src/app/prisma ./prisma
EXPOSE 3000
CMD ["npm", "run", "start:prod"]
