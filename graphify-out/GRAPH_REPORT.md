# Graph Report - sumitdvlp.github.io  (2026-09-06)

## Corpus Check
- 2 files · ~33,482 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 40 nodes · 104 edges · 8 communities detected
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- [[_COMMUNITY_Community 0|Community 0]]
- [[_COMMUNITY_Community 1|Community 1]]
- [[_COMMUNITY_Community 2|Community 2]]
- [[_COMMUNITY_Community 3|Community 3]]
- [[_COMMUNITY_Community 4|Community 4]]
- [[_COMMUNITY_Community 5|Community 5]]
- [[_COMMUNITY_Community 6|Community 6]]
- [[_COMMUNITY_Community 7|Community 7]]

## God Nodes (most connected - your core abstractions)
1. `Me()` - 13 edges
2. `De()` - 10 edges
3. `m()` - 8 edges
4. `Ce()` - 8 edges
5. `_t()` - 8 edges
6. `ne()` - 7 edges
7. `u()` - 6 edges
8. `B()` - 6 edges
9. `gt()` - 6 edges
10. `g()` - 5 edges

## Surprising Connections (you probably didn't know these)
- `Te()` --calls--> `u()`  [EXTRACTED]
  attn.js → attn.js  _Bridges community 5 → community 6_
- `I()` --calls--> `u()`  [EXTRACTED]
  attn.js → attn.js  _Bridges community 5 → community 2_
- `Ue()` --calls--> `u()`  [EXTRACTED]
  attn.js → attn.js  _Bridges community 5 → community 7_
- `ne()` --calls--> `g()`  [EXTRACTED]
  attn.js → attn.js  _Bridges community 4 → community 2_
- `Me()` --calls--> `g()`  [EXTRACTED]
  attn.js → attn.js  _Bridges community 4 → community 0_

## Communities

### Community 0 - "Community 0"
Cohesion: 0.29
Nodes (10): $(), B(), Et(), Fe(), ht(), Me(), qe(), re() (+2 more)

### Community 1 - "Community 1"
Cohesion: 0.47
Nodes (6): be(), l(), St(), _t(), ve(), We()

### Community 2 - "Community 2"
Cohesion: 0.7
Nodes (5): Ce(), De(), I(), ne(), Pe()

### Community 3 - "Community 3"
Cohesion: 0.7
Nodes (4): ct(), ge(), he(), ze()

### Community 4 - "Community 4"
Cohesion: 0.4
Nodes (5): g(), gt(), Ie(), Ke(), Ye()

### Community 5 - "Community 5"
Cohesion: 0.67
Nodes (3): dt(), oe(), u()

### Community 6 - "Community 6"
Cohesion: 1.0
Nodes (3): le(), m(), Te()

### Community 7 - "Community 7"
Cohesion: 1.0
Nodes (2): Ue(), xe()

## Knowledge Gaps
- **Thin community `Community 7`** (2 nodes): `Ue()`, `xe()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `Me()` connect `Community 0` to `Community 1`, `Community 2`, `Community 3`, `Community 4`?**
  _High betweenness centrality (0.040) - this node is a cross-community bridge._
- **Why does `De()` connect `Community 2` to `Community 0`, `Community 3`, `Community 4`, `Community 6`?**
  _High betweenness centrality (0.018) - this node is a cross-community bridge._
- **Why does `_t()` connect `Community 1` to `Community 0`, `Community 3`?**
  _High betweenness centrality (0.012) - this node is a cross-community bridge._