from flask import Flask, render_template
from datetime import datetime

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('home.html', 
                         name="Rishi Varma Kaladindi",
                         current_time=datetime.utcnow().strftime('%Y-%m-%d %H:%M:%S'))

@app.route('/artifacts')
def artifacts():
    return render_template('artifacts.html')

@app.route('/reflections')
def reflections():
    return render_template('reflections.html')

@app.route('/journey')
def journey():
    return render_template('journey.html')

if __name__ == '__main__':
    app.run(debug=True)