#!/bin/bash

git checkout main && git pull && rm -R node_modules && rm yarn.lock && yarn install && npm run docs:build