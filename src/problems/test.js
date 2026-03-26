const pieceIds = [0, 1, 2, 3];
const COLORS = ["#f97316", "#22c55e", "#3b82f6", "#eab308"]; // orange, green, blue, yellow

  // TODO: Create `pieces` — an array of objects with id, label, and color. Use pieceIds.map((id) => ({ ... })) and COLORS[id].
  const pieces = pieceIds.map( (id) => ({
	id: pieceIds[id],
	color: COLORS[id],
	label: "label"
	}) );

console.log(pieces)