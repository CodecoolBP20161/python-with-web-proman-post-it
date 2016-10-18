from flask import *
from models import *

app = Flask(__name__)
db.connect()

@app.route('/')
def main():
    return render_template('home.html')


@app.route('/get_boards/')
def get_boards():
    return 'hello'


@app.route('/save_boards/')
def save_boards():
    return 'hello'


@app.before_request
def before_req():
    db.connect()


@app.after_request
def close_db(respond):
    db.close()
    return respond


if __name__ == '__main__':
    app.run(debug=True)
