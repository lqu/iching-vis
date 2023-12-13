import hexagrams as h
import json

d = dict()
d["nodes"] = []
d["links"] = []

for i in range(64):
  # hbin is a str like '111111' or '000000'
  # hexagram's binary format
  hbin = h.hexagrams_binary[i]

  # Chinese name
  cname = h.hexagrams_names[i]

  d["nodes"] += [{
    "id": int(hbin, 2), 
    "hbin": hbin,
    "name": cname
  }]

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
  json.dump(d, outfile, ensure_ascii=False, indent=2)
