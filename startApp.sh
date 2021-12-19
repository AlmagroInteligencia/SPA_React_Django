#!/bin/bash

echo "Welcome to this SPA ToDo List"
cd backend-app
pip install -r requirements.txt
python manage.py runserver
cd ..
cd frontend-app
npm start