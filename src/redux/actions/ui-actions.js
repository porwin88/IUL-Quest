export function toggleShowDetails (question, val) {
  return {
    type: 'TOGGLE_SHOW_DETAILS',
    question, val
  }
}