from peewee import *

# everybody should define this on his own machine
# !!!ADD LOGIN.TXT TO GITIGNORE!!!
with open('login.txt', 'r') as f:
    dbname = f.readline().strip()
db = PostgresqlDatabase(dbname, dbname)


class BaseModel:

    class Meta:
        database = db


class Board(BaseModel):
    title = CharField()


class Card(BaseModel):
    task = CharField()
    board = ForeignKeyField(Board, related_name='cards')
