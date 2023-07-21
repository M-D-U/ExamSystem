# Online Examination System

## Description

The Online Examination System is a web application that allows students to download exam papers, upload their answers, and enables the examination department to view student submissions and upload exams for courses offered by the university.

## Features

- Student Dashboard:
  - View available exam papers for courses enrolled.
  - Download exam papers.
  - Upload answers for exams.

- Examination Department Dashboard:
  - View submitted exam answers by students.
  - Upload new exam papers for courses.

## Technologies Used

- Front-end:
  - Angular [14.2.11]
  - Angular CLI [Version]
  - Bootstrap [5.2.2]

- Back-end:
  - Laravel [ v9.40.1]
  - PHP [v8.2.8]
  - MySQL [5.1.1]

## Installation and Setup

1. Clone the repository:

```bash
git clone [repository_url.git]

Install dependencies:
  **Front-end:**
  cd front-end
  npm install

**Back-end:**
cd back-end
composer install

**Configure the database:**
Create a new database for the application.
Rename the .env.example file to .env in the back-end directory and update the database connection details.
**Migrate and seed the database:**
php artisan migrate --seed

Usage
Start the Laravel development server:
cd back-end
php artisan serve

**Start the Angular development server:**
cd front-end
ng serve
