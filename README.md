# Course Management System

A simple JavaScript project for homework 3.

## Files
- `models.js`: Defines the Student class.
- `database.js`: Gets fake student data after 2 seconds.
- `analytics.js`: Calculates grades, top student, and filters.
- `main.js`: Runs the whole project and prints results.

## Challenges
- Locking the student `id` so it cannot be changed.
- Catching the error when trying to change the locked `id`.
- Turning simple objects into real Student objects to use their functions.
- Waiting for the fake database delay before running the code.

## How to Run
```bash
node main.js