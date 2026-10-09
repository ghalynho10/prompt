# Graph Engineering Resources

Note: the sandbox that wrote this list could not open these sites directly (network policy blocked them), so entries are based on search results only. Open each one before relying on it, and fix anything that turns out wrong.

## Knowledge

- [Paper: "From Local to Global: A Graph RAG Approach to Query-Focused Summarization" (Edge et al., Microsoft, 2024)](https://arxiv.org/abs/2404.16130)
  The original GraphRAG paper: LLM extracts an entity graph, groups entities into communities, pre-writes community summaries, answers by combining partial answers. Use for: the core GraphRAG idea and why it targets whole-corpus questions.
- [Docs: Microsoft GraphRAG](https://microsoft.github.io/graphrag/)
  Official docs for the open-source implementation. Use for: the indexing pipeline (text units, entities, relationships, Leiden communities, community reports) and exact config. Search results described the pipeline from mirrors, so confirm details here.
- [Course: Neo4j Fundamentals](https://graphacademy.neo4j.com/courses/neo4j-fundamentals/)
  Intro to graph thinking and when to use a graph database. Use for: first contact with the property graph model.
- [Course: Cypher Fundamentals](https://graphacademy.neo4j.com/courses/cypher-fundamentals)
  Hands-on reading and writing graph data with Cypher. Use for: learning the query language.
- [Course: Graph Data Modeling Fundamentals](https://graphacademy.neo4j.com/courses/modeling-fundamentals/)
  Taught approach: split the data into statements, turn nouns into nodes and verbs into relationships. Use for: modeling from the questions the app must answer. (URL is a guess from the course name; use the GraphAcademy catalog if it 404s.)
- [Site: graphrag.com](https://graphrag.com/)
  Pattern catalogue for GraphRAG, vendor-run by Neo4j. Use for: retriever patterns once the basics are in place. Treat as vendor material.

## Wisdom (Communities)

- Neo4j Community forum (community.neo4j.com): Use for: modeling and Cypher questions. Not yet vetted for quality; review before relying.

## Gaps

- A vendor-neutral resource on graph algorithms for retrieval (community detection, centrality) is not found yet.
- No vetted GraphRAG evaluation resource yet (how to tell if the graph helped).
- No vetted community for GraphRAG practitioners yet.
