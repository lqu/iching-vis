
color_yellow = '#ffd700' 	// gold, (self)
color_grey = '#b8b8b8'		// grey, (not in focus)

color_red = '#e2062c'		// red, medium candy apple, (negate)
color_green = '#059033'		// gree, north texas, (adjacent six)
color_blue = '#0067a5'		// blue, sapphire, (reverse)

color_green_mix = '#1b4d3e' 	// green, english, (mix yellow/blue, self/reverse)
color_purple = '#9400d3'	// purple, dark violet, (mix negate/reverse)

function negate_hexagram(x) {
  return x ^ 63
}

function reverse_hexagram(x) {
  return ((x & 1) << 5)
       + ((x & 2) << 3)
       + ((x & 4) << 1)
       + ((x & 8) >> 1)
       + ((x & 16) >> 3)
       + ((x & 32) >> 5)
}

var width = 1200,
    height = 1200

var svg = d3.select("body").append("svg")
    .attr("width", width)
    .attr("height", height);

var force = d3.layout.force()
    .gravity(0.05)
    .distance(100)
    .charge(-300)
    .size([width, height])

d3.json("d3-graph.json", function(error, json) {
  if (error) throw error;

  //create a copy, then sort out of place
  sortedNodes = [...json.nodes].sort((a, b) => a.id - b.id)

  force
      .nodes(sortedNodes)
      .links(json.links)
      .start();

  var link = svg.selectAll(".link")
      .data(json.links)
      .enter().append("line")
      .attr("class", "link");

  var node = svg.selectAll(".node")
      .data(sortedNodes)
      .enter().append("g")
      .attr("class", "node")
      .attr("id", function(d, i) { return i })
      .call(force.drag);

  node.append("image")
      .attr("xlink:href", function(d, i) {
        // d is the node data, i is the index of the node
	pos = json.nodes.map(obj => obj.id).indexOf(i); // i == d.id
        return "images/hexagram" + String(pos + 1).padStart(2, '0') + ".png";
       })
      .attr("x", -8)
      .attr("y", -8)
      .attr("width", 16)
      .attr("height", 16);

  node.append("text")
      .attr("dx", 12)
      .attr("dy", "-.25em")
      .text(function(d) { return d.name.substring(0, d.name.indexOf(' ')) });

  node.append("text")
      .attr("dx", 12)
      .attr("dy", ".75em")
      .text(function(d) {
        // console.log(d);
        return d.hbin + ", "     + d.id });

  node
    .on('mouseover', function(event, d) {
      node.style('fill', color_grey)
      d3.select(this).style('fill', color_yellow)

      adjArr = [1, 2, 4, 8, 16, 32]
      for (x in adjArr) {
        n = d ^ adjArr[x]
        d3.select(`[id='${n}']`).style('fill', color_green)
      }

      neg = negate_hexagram(d)
      d3.select(`[id='${neg}']`).style('fill', color_red)

      rev = reverse_hexagram(d)
      d3.select(`[id='${rev}']`).style('fill', color_blue)

      if (neg == rev) {
        console.log("mix: neg == rev")
        d3.select(`[id='${rev}']`).style('fill', color_purple)
      }

      if (d == rev) {
        console.log("mix: self == rev")
        d3.select(`[id='${rev}']`).style('fill', color_green_mix)
      }

    })
    .on('mouseout', function(event, d) {
      node.style('fill', "")
    })

  force.on("tick", function() {
    link.attr("x1", function(d) { return d.source.x; })
        .attr("y1", function(d) { return d.source.y; })
        .attr("x2", function(d) { return d.target.x; })
        .attr("y2", function(d) { return d.target.y; });

    node.attr("transform", function(d) { return "translate(" + d.x + "," + d.y + ")"; });
  });
});

