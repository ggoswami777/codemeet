export function getDifficultyBadgeClass(difficulty = "easy") {
  if (!difficulty) return "badge-success";

  switch (difficulty.toLowerCase()) {
    case "easy":
      return "badge-success";
    case "medium":
      return "badge-warning";
    case "hard":
      return "badge-error";
    default:
      return "badge-success";
  }
}
