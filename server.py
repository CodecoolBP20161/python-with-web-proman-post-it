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


@app.route('/save_board/', methods=['POST'])
def save_board():
    if not request.json or 'boardTitle' not in request.json:
        abort(400)
    new_board = Board(title=request.json['boardTitle'])
    new_board.save()
    return jsonify(request.json), 201


@app.before_request
def before_req():
    db.connect()


@app.after_request
def close_db(respond):
    db.close()
    return respond


if __name__ == '__main__':
    app.run(debug=True)
