document.querySelector("body > div.ova-wrapp > div.elementor.elementor-131 > section.elementor-section.elementor-top-section.elementor-element.elementor-element-daee2a2.elementor-section-full_width.header-box.elementor-section-height-default.elementor-section-height-default > div.elementor-container.elementor-column-gap-default > div > div > div > div > div > div > div.ova_header_el > h1").innerText + "," + Array.from(document.querySelectorAll("#nutrition-information tbody tr")).reduce((obj, row) => {
    const [nutrient, amount, unit] = Array.from(row.querySelectorAll("td")).map(cell => cell.textContent.trim());
    if (nutrient === "Energy" && unit === "kcal") obj[0] = amount;
    if (nutrient === "Protein") obj[1] = amount;
    if (nutrient === "Carbohydrate") obj[2] = amount;
    if (nutrient === "Freesugar") obj[3] = amount;
    if (nutrient === "Fibre") obj[4] = amount;
    if (nutrient === "Fat") obj[5] = amount;
    if (nutrient === "Sodium") obj[6] = amount // Sodium in mg
    return obj;
}, Array(7).fill("")).join(",")