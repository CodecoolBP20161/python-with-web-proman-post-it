from flask import *
from models import *

app = Flask(__name__)
db.connect()


@app.route('/')
def main():
    return render_template('home.html')


@app.route('/get_boards/')
def get_boards():
    boards = []
    for board in Board.select():
        boards.append({'boardId': board.id, 'title': board.title})
    all_boards = {'boards': boards}
    return jsonify(all_boards)


@app.route('/save_board/', methods=['POST'])
def save_board():
    if not request.json or 'title' not in request.json:
        abort(400)
    board = Board(title=request.json['title'])
    board.save()
    return jsonify({'boardId': board.id, 'title': board.title}), 201


@app.before_request
def before_req():
    db.connect()


@app.after_request
def close_db(respond):
    db.close()
    return respond


if __name__ == '__main__':
    app.run(debug=True)
