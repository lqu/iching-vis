import hexagrams as h
import json

d = dict()
d["nodes"] = []
d["links"] = []

for hexagram in h.hexagrams_binary:
  # hexagram is a str like '111111' or '000000'
  num = int(hexagram, 2)
  d["nodes"] += [{"id": num, "name": hexagram}]

#print(d)

for hexagram in h.hexagrams_binary:
  num = int(hexagram, 2)
  for j in [1, 2, 4, 8, 16, 32]:
    x = num ^ j
    if num < x:
      d["links"] += [{"source": num, "target": x}]

#print(d)
print(len(d["nodes"]))
print(len(d["links"]))

datastr = json.dumps(d, indent=2)
with open('d3-graph.json', 'w') as outfile:
  outfile.write(datastr)
