from random import random
import uuid
import json
import sys

board = {
    'name': "Test Fundraiser",
    'description': "Raising money for our test MVP",
    'owner': "dankramp",
    'teams': {
        'boys': '#46f',
        'girls': '#fbd',
    },
    'id': '20',
}

boxes = []

for i in range(36):
    bought = random() < .5
    box = {
        "value": i+1,
        "bought": bought,
        "buyer": "Grandma" if bought else None,
        "message": "I'll buy you anything any day" if bought else None,
        "team": ("girls" if random() < .7 else "boys") if bought else None,
        "id": str(uuid.uuid4()),
        "board_id": 20
    }
    boxes.append(box)

response = {"board": board,
            "boxes": boxes
            }

print(json.dumps(response))
sys.stdout.flush()
