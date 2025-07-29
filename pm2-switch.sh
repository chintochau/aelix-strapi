#!/bin/bash

# PM2 Environment Switcher for Strapi

# Colors for output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Function to stop all PM2 processes
stop_all() {
    echo -e "${YELLOW}Stopping all PM2 processes...${NC}"
    pm2 stop all
    pm2 delete all
}

# Function to switch to development mode
switch_to_dev() {
    echo -e "${GREEN}Switching to DEVELOPMENT mode...${NC}"
    stop_all
    pm2 start ecosystem.dev.config.js
    echo -e "${GREEN}✓ Switched to development mode${NC}"
    echo -e "${YELLOW}Access Strapi at: http://localhost:1337${NC}"
}

# Function to switch to production mode
switch_to_prod() {
    echo -e "${GREEN}Switching to PRODUCTION mode...${NC}"
    stop_all
    
    # Check if build is needed
    if [ ! -d "build" ] || [ "$2" == "--rebuild" ]; then
        echo -e "${YELLOW}Building Strapi for production...${NC}"
        npm run build
    fi
    
    pm2 start ecosystem.config.js
    echo -e "${GREEN}✓ Switched to production mode${NC}"
    echo -e "${YELLOW}Access Strapi at: http://localhost:1337${NC}"
}

# Function to show current status
show_status() {
    echo -e "${GREEN}Current PM2 processes:${NC}"
    pm2 list
}

# Main script logic
case "$1" in
    dev)
        switch_to_dev
        ;;
    prod)
        switch_to_prod "$@"
        ;;
    status)
        show_status
        ;;
    *)
        echo -e "${RED}Usage: $0 {dev|prod|status}${NC}"
        echo -e "  dev    - Switch to development mode"
        echo -e "  prod   - Switch to production mode"
        echo -e "         --rebuild - Force rebuild in production mode"
        echo -e "  status - Show current PM2 processes"
        exit 1
        ;;
esac