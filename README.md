# I-Ching Hexagrams Relation Visualization (易經64卦關係圖）
This interactive tool helps you visualize the relations between the Hexagrams. Play and learn [here](https://lqu.github.io/iching-vis/).

If you are not interested in any special or arbitrary name/meaning assignment, use it as a visualization of a 6D [Hamming Space](https://en.wikipedia.org/wiki/Hamming_space) or a [6-cube](https://en.wikipedia.org/wiki/6-cube).

## Features
* Shows Hamming distance between any two Hexagrams -- adjacent nodes d=1, opposite node d=6
* Supports drag-n-drop of any Hexagram to re-organize graph, and keep the same topology
* Graph reshapes itself automatically, and keeps all properties
* Color highlight related Hexagrams (self/selected, adjacent, opposite, reverse)
  - ![#ffd700](https://via.placeholder.com/15/ffd700/000000?text=+) `self`
  - ![#059033](https://via.placeholder.com/15/c5f015/000000?text=+) `adjacent`
  - ![#e2062c](https://via.placeholder.com/15/e2062c/000000?text=+) `opposite, bitwise negation`
  - ![#0067a5](https://via.placeholder.com/15/0067a5/000000?text=+) `reverse`

## Demo
https://github.com/lqu/iching-vis/assets/432856/75aa0dbd-0d6a-405e-a91c-994722fe902c

## Screenshots
![](docs/screenshot-1.png)
![](docs/screenshot-2.png)
![](docs/screenshot-3.png)
![](docs/screenshot-4.png)

## Notes
This visualization is to expand the [Hamming Space](https://en.wikipedia.org/wiki/Hamming_space) from 3D to six dimensions, from a cube to a [6-cube](https://en.wikipedia.org/wiki/6-cube) like this. 

<img width="256" alt="image" src="https://github.com/lqu/iching-vis/assets/432856/fcef21cf-3e75-4e3b-9c48-3cd009c2c160">
 =>> 
<img width="256" alt="image" src="https://github.com/lqu/iching-vis/assets/432856/6d16b447-9af6-4e99-882c-69dfbca43505">


In the 6-cube representation, 
an edge exists if two nodes have an [Hamming Distance](https://en.wikipedia.org/wiki/Hamming_distance) of one, meaning the binary forms differ at only one digit,
e.g. 000000 and 000100.

### Mixing Colors
In special cases, the reverse is the same as the opposite or self. The colors will mix, giving purple (red+blue) and dark green (yellow+blue).

#### rev == neg
(rev == neg) Hexagram | Binary | Negation | Reverse
---|---|---|---
䷊ 泰 Advance | 000111 | **111000** | **111000**
䷋ 否 Hindrance | 111000 | **000111** | **000111**
䷵ 歸妹 Marrying Maiden | 001011 | **110100** | **110100**
䷴ 漸 Developing Gradually | 110100 | **001011** | **001011** 
䷾ 既濟 Already Fulfilled | 010101 | **101010** | **101010**
䷿ 未濟 Not Yet Fulfilled | 101010 | **010101** | **010101**
䷑ 蠱 Remedying | 100110 | **011001** | **011001**
䷐ 隨 Following | 011001 | **100110** | **100110**

#### rev == self, Palindromes
(rev == self) Hexagram | Binary | Negation | Reverse
---|---|---|---
䷁ 坤 Responding | **000000** | 111111 | **000000**
䷽ 小過 Little Exceeding | **001100** | 110011 | **001100**
䷜ 坎 Darkness| **010010** | 101101 | **010010**
䷛ 大過 Great Exceeding | **011110** | 100001 | **011110** 
䷚ 頤 Nourishing | **100001** | 011110 | **100001**
䷝ 離 Brightness | **101101** | 010010 | **101101**
䷼ 中孚 Innermost Sincerity | **110011** | 001100 | **110011**
䷀ 乾 Initiating | **111111** | 000000 | **111111**

