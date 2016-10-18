from flask import *
from models import *

app = Flask(__name__)
db.connect()

@app.route('/')
def main():
    return render_template('home.html')


if __name__ == '__main__':
    app.run(debug=True)
