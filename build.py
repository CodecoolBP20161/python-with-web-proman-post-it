from models import *

db.connect()


def make_tables():
    db.create_tables([Board, Card], safe=True)

def start_over_database():
    db.drop_tables([Board, Card], cascade=True)
    make_tables()

make_tables()