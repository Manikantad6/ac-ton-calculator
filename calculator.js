document.getElementById('calcForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const length    = parseFloat(document.getElementById('length').value);
  const width     = parseFloat(document.getElementById('width').value);
  const height    = parseFloat(document.getElementById('height').value);
  const sunlight  = parseFloat(document.getElementById('sunlight').value);
  const occupants = parseInt(document.getElementById('occupants').value);
  const roomBonus = parseFloat(document.getElementById('roomType').value);   // extra tons
  const floorBonus= parseFloat(document.getElementById('floorType').value);  // extra tons
  const climate   = parseFloat(document.getElementById('climate').value);    // multiplier

  // Step 1: base area
  const area = length * width;

  // Step 2: adjust for ceiling height (Indian standard is 10ft)
  let adjustedArea = area * (height / 10);

  // Step 3: sunlight exposure
  adjustedArea *= sunlight;

  // Step 4: climate zone multiplier (India runs hotter than western standards)
  adjustedArea *= climate;

  // Step 5: extra occupants — add 40 sq ft per person beyond 2
  if (occupants > 2) {
    adjustedArea += (occupants - 2) * 40;
  }

  // Step 6: map to Indian standard ton ranges
  // India needs ~20% more capacity vs western standards due to higher heat load
  // ≤ 80 sq ft   → 0.75 ton
  // 81–120       → 1.0 ton
  // 121–180      → 1.5 ton
  // 181–240      → 2.0 ton
  // 241–320      → 2.5 ton
  // 320+         → 3.0 ton
  let recommendedTon;
  if      (adjustedArea <= 80)  recommendedTon = 0.75;
  else if (adjustedArea <= 120) recommendedTon = 1.0;
  else if (adjustedArea <= 180) recommendedTon = 1.5;
  else if (adjustedArea <= 240) recommendedTon = 2.0;
  else if (adjustedArea <= 320) recommendedTon = 2.5;
  else                          recommendedTon = 3.0;

  // Step 7: add room type and floor bonuses, then snap to valid sizes
  const totalTon = recommendedTon + roomBonus + floorBonus;
  const validSizes = [0.75, 1.0, 1.5, 2.0, 2.5, 3.0];
  const finalTon = validSizes.reduce((prev, curr) =>
    Math.abs(curr - totalTon) < Math.abs(prev - totalTon) ? curr : prev
  );

  const note = `Room: ${length}×${width} = ${area} sq ft · Heat-adjusted: ${adjustedArea.toFixed(0)} sq ft · Before bonuses: ${recommendedTon} ton`;

  // Show result
  document.getElementById('resultValue').textContent = finalTon + ' Ton';
  document.getElementById('resultNote').textContent  = note;
  document.getElementById('result').classList.remove('hidden');
});
