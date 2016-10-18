from peewee import *

# everybody should define this on his own machine
# !!!ADD LOGIN.TXT TO GITIGNORE!!!
with open('login.txt', 'r') as f:
    login_details = f.readline().strip().split(",")
    db_name = login_details[0]
    db_user = login_details[1]
db = PostgresqlDatabase(db_name, user=db_user)


class BaseModel(Model):

    class Meta:
        database = db


class Board(BaseModel):
    title = CharField()


class Card(BaseModel):
    task = CharField()
    board = ForeignKeyField(Board, related_name='cards')
