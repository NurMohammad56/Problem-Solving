function generateUniqueId() {
  return "_" + Math.random().toString(36).substr(2, 9);
}

console.log(generateUniqueId()); // Outputs: _5g4x9k1bd
