from random import random
import uuid
import json

board = {
    'name': "Test Fundraiser",
    'description': "Raising money for our test MVP",
    'owner': "dankramp",
    'teams': ['boys', 'girls'],
    'boxes': [],
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
        "uuid": str(uuid.uuid4()),
    }
    board['boxes'].append(box['uuid'])
    boxes.append(box)

response = {"board": board,
            "boxes": boxes
            }

with open("./data/data.json", "w+") as f:
    f.write(json.dumps(response, indent=4))
