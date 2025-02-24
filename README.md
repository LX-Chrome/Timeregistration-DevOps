# Timeregistration-DevOps
Tijd registrator gemaakt door groep 10
# Flask Web Application Setup Guide  

This guide provides step-by-step instructions to set up and run your Flask web application.  

## Prerequisites  
Ensure you have the following installed on your system:  
- **Python (≥ 3.7)** → [Download Python](https://www.python.org/downloads/)  
- **pip** (Python package manager)  
- **VS Code** (Recommended for development) → [Download VS Code](https://code.visualstudio.com/)  

## 1. Clone the Repository  
Navigate to your workspace and clone the project:  
```sh
git clone https://github.com/your-repository.git
cd your-repository

2. Set Up a Virtual Environment
To avoid dependency conflicts, use a virtual environment:

python -m venv venv

Activate the virtual environment:

Windows (PowerShell):
venv\Scripts\activate

3. Install Dependencies
Run the following command to install all required dependencies:
pip install email-validator flask-login flask flask-sqlalchemy gunicorn psycopg2-binary routes flask-wtf pdfkit sqlalchemy werkzeug twilio xlsxwriter openpyxl

4. Set Up Environment Variables
Create a .env file in the project folder and add the following:
SESSION_SECRET=your_secret_key
DATABASE_URL=sqlite:///database.db  # Change this for PostgreSQL, MySQL, etc.
API_KEY=your_api_key

If using PostgreSQL, replace the DATABASE_URL with:
DATABASE_URL=postgresql://user:password@localhost/db_name

5. Run Database Migrations
Initialize and migrate the database schema:
flask db init
flask db migrate -m "Initial migration"
flask db upgrade

For SQLite, you can also create tables manually:
python
>>> from app import db
>>> db.create_all()
>>> exit()

6. Run the Application
Start the Flask application:
python main.py

You should see output like:
 * Running on http://127.0.0.1:5000/

Troubleshooting
If you get "ModuleNotFoundError" → Ensure your virtual environment is activated.
If Flask doesn’t run → Check if all required environment variables are set.
Database connection issues? → Verify DATABASE_URL in .env.
