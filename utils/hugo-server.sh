#!/bin/bash
lsof -ti:1313 | xargs kill
hugo server

