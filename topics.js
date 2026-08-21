// Add a new topic by pushing a new object into this array.
// id must be unique. difficulty: "Easy" | "Medium" | "Hard".
// vizSteps: array of plain-text strings shown one at a time in the Visualize modal.

const topics = [
  {
    id: "bfs",
    category: "Uninformed Search",
    name: "Breadth-First Search (BFS)",
    difficulty: "Easy",
    theoryLink: "https://www.geeksforgeeks.org/dsa/breadth-first-search-or-bfs-for-a-graph/",
    pythonCode: `
from collections import deque

def bfs(graph, start):
    visited = {start}
    queue = deque([start])
    order = []
    while queue:
        node = queue.popleft()
        order.append(node)
        for neighbor in graph[node]:
            if neighbor not in visited:
                visited.add(neighbor)
                queue.append(neighbor)
    return order
`,
    vizSteps: [
      "Start at node A. Queue: [A]. Visited: {A}",
      "Expand A -> neighbors B, C added. Queue: [B, C]",
      "Expand B -> neighbor D added. Queue: [C, D]",
      "Expand C -> no new neighbors. Queue: [D]",
      "Expand D -> goal found. Path: A -> B -> D"
    ]
  },
  {
    id: "hill-climbing-simple",
    category: "Local Search / Heuristic Search",
    name: "Hill Climbing - Simple",
    difficulty: "Easy",
    theoryLink: "https://www.javatpoint.com/hill-climbing-algorithm-in-ai",
    pythonCode: `
def hill_climb(start, get_neighbors, heuristic):
    current = start
    while True:
        neighbors = get_neighbors(current)
        best = max(neighbors, key=heuristic, default=None)
        if best is None or heuristic(best) <= heuristic(current):
            return current
        current = best
`,
    vizSteps: [
      "Current state value = 4. Checking neighbor states.",
      "Neighbor found with value 6 (better). Move there.",
      "Current state value = 6. Checking neighbors again.",
      "Neighbor found with value 8 (better). Move there.",
      "No neighbor better than 8. Stop — reached local/global maxima at 8."
    ]
  },
  {
    id: "beam-search",
    category: "Local Search / Heuristic Search",
    name: "Beam Search",
    difficulty: "Medium",
    theoryLink: "https://www.geeksforgeeks.org/artificial-intelligence/introduction-to-beam-search-algorithm/",
    pythonCode: `
def beam_search(start, get_neighbors, heuristic, beam_width, goal_test):
    beam = [start]
    while beam:
        if any(goal_test(s) for s in beam):
            return next(s for s in beam if goal_test(s))
        candidates = []
        for state in beam:
            candidates.extend(get_neighbors(state))
        candidates.sort(key=heuristic)
        beam = candidates[:beam_width]
    return None
`,
    vizSteps: [
      "Beam width B = 2. Open list from root A: children 6, 25, 35",
      "Keep only best 2 (lowest heuristic): C=6, B=25. Drop 35.",
      "Expand C and B's children, sort all, keep best 2 again.",
      "Repeat until a goal node is found within the kept beam."
    ]
  },
  {
    id: "a-star",
    category: "Informed Search",
    name: "A* Algorithm",
    difficulty: "Medium",
    theoryLink: "https://www.geeksforgeeks.org/dsa/a-search-algorithm/",
    pythonCode: `
import heapq

def a_star(start, goal, neighbors_fn, g_cost_fn, h_fn):
    open_set = [(h_fn(start), start)]
    g = {start: 0}
    came_from = {}
    while open_set:
        _, current = heapq.heappop(open_set)
        if current == goal:
            path = [current]
            while current in came_from:
                current = came_from[current]
                path.append(current)
            return path[::-1]
        for neighbor in neighbors_fn(current):
            tentative_g = g[current] + g_cost_fn(current, neighbor)
            if neighbor not in g or tentative_g < g[neighbor]:
                g[neighbor] = tentative_g
                f = tentative_g + h_fn(neighbor)
                came_from[neighbor] = current
                heapq.heappush(open_set, (f, neighbor))
    return None
`,
    vizSteps: [
      "Start node A: f = g(0) + h(10) = 10",
      "Expand A -> B: g=2, h=7, f=9. Expand A -> C: g=4, h=9, f=13",
      "B has lowest f, expand it -> D: g=5, h=3, f=8",
      "D has lowest f, expand it -> Goal: g=7, h=0, f=7",
      "Goal reached. Optimal path: A -> B -> D -> Goal"
    ]
  }
];