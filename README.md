THIS REPOSITORY IS OUTDATED, PLEASE VISIT OUR NEW ONE TO STAY UP TO DATE!
DEZE REPOSITORY GELDT NIET MEER, A.U.B VOLG ONZE NIEUWE REPOSITORY VOOR DE NIEUWSTE!

https://github.com/LX-Chrome/UrenRegistratie

Here's a **README.md** file that provides clear setup instructions. It includes installation steps, environment variable setup, and how to run the application.  

---

### **README.md**  

```markdown
# Flask Web Application Setup Guide  

This guide will help you set up and run your Flask web application in a local development environment.  

## **Prerequisites**  
Ensure you have the following installed on your system:  
- Python (≥ 3.7) → [Download Python](https://www.python.org/downloads/)  
- pip (Python package manager)  
- VS Code (Recommended for development) → [Download VS Code](https://code.visualstudio.com/)  

---

## **1. Clone the Repository**  
If you haven't already, navigate to your workspace and clone the project:  
```sh
git clone https://github.com/your-repository.git
cd your-repository
```

---

## **2. Set Up a Virtual Environment**  
To avoid dependency conflicts, it's recommended to use a virtual environment:  
```sh
python -m venv venv
```
Activate the virtual environment:  
- **Windows (PowerShell):**  
  ```sh
  venv\Scripts\activate
  ```
- **Linux/macOS:**  
  ```sh
  source venv/bin/activate
  ```

---

## **3. Install Dependencies**  
Run the following command to install all required dependencies:  
```sh
pip install email-validator flask-login flask flask-sqlalchemy gunicorn psycopg2-binary routes flask-wtf pdfkit sqlalchemy werkzeug twilio xlsxwriter openpyxl
```

---

## **4. Set Up Environment Variables**  
Create a **`.env`** file in the project folder and add the following:  
```ini
SESSION_SECRET=your_secret_key
DATABASE_URL=sqlite:///database.db  # Change this for PostgreSQL, MySQL, etc.
API_KEY=your_api_key
```
If using PostgreSQL, replace the `DATABASE_URL` with:  
```ini
DATABASE_URL=postgresql://user:password@localhost/db_name
```

---

## **5. Run Database Migrations**  
Initialize and migrate the database schema:  
```sh
flask db init
flask db migrate -m "Initial migration"
flask db upgrade
```
For SQLite, you can also create tables manually:  
```sh
python
>>> from app import db
>>> db.create_all()
>>> exit()
```

---

## **6. Run the Application**  
Start the Flask application:  
```sh
python main.py
```
You should see output like:  
```
 * Running on http://127.0.0.1:5000/
```
Open the link in your browser to access the site.

---

## **7. Deploying with Gunicorn (Optional)**  
If you want to run the app with **Gunicorn** in a production-like environment:  
```sh
gunicorn -w 4 -b 0.0.0.0:5000 main:app
```

---

## **Troubleshooting**  
- **If you get "ModuleNotFoundError"** → Ensure your virtual environment is activated.  
- **If Flask doesn’t run** → Check if all required environment variables are set.  
- **Database connection issues?** → Verify `DATABASE_URL` in `.env`.  

---

