const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

(async () => {
    const urls = [
        "https://www.anuvaad.org.in/nutrition-fact/boiled-egg-ubla-anda/",
        "https://www.anuvaad.org.in/nutrition-fact/boiled-rice-uble-chawal/",
        "https://www.anuvaad.org.in/nutrition-fact/butter-milk/",
        "https://www.anuvaad.org.in/nutrition-fact/bengal-gram-roasted/",
        "https://www.anuvaad.org.in/nutrition-fact/beans-chick-peas-kabuli-whole-dried-raw/",
        "https://www.anuvaad.org.in/nutrition-fact/chickpeas-garbanzo-beans-bengal-gram-mature-seeds-raw/",
        "https://www.anuvaad.org.in/nutrition-fact/chicken-pakora-pakoda/",
        "https://www.anuvaad.org.in/nutrition-fact/groundnut-roasted/",
        "https://www.anuvaad.org.in/nutrition-fact/peas-roasted/",
        "https://www.anuvaad.org.in/nutrition-fact/baked-stuffed-fish/",
        "https://www.anuvaad.org.in/nutrition-fact/fish-finger/",
        "https://www.anuvaad.org.in/nutrition-fact/salami/",
        "https://www.anuvaad.org.in/nutrition-fact/chicken-salad/",
        "https://www.anuvaad.org.in/nutrition-fact/pasta-white-dried-raw/",
        "https://www.anuvaad.org.in/nutrition-fact/pasta-white-dried-raw/",
        "https://www.anuvaad.org.in/nutrition-fact/pasta-salad/",
        "https://www.anuvaad.org.in/nutrition-fact/home-made-plain-noodles/",
        "https://www.anuvaad.org.in/nutrition-fact/raw-mango-chutney-kachhe-aam-kairi-ki-chutney/",
        "https://www.anuvaad.org.in/nutrition-fact/tomato-chutney-tamatar-ki-chutney/",
        "https://www.anuvaad.org.in/nutrition-fact/schezwan-chutney/",
        "https://www.anuvaad.org.in/nutrition-fact/green-chutney/",
        "https://www.anuvaad.org.in/nutrition-fact/tomato-sauce/",
        "https://www.anuvaad.org.in/nutrition-fact/tomato-ketchup-2/",
        "https://www.anuvaad.org.in/nutrition-fact/mayonnaise-standard-retail/",
        "https://www.anuvaad.org.in/nutrition-fact/low-calorie-quick-mayonnaise/",
        "https://www.anuvaad.org.in/nutrition-fact/tomato-onion-raita-tamatar-aur-pyaaz-ka-raita/",
        "https://www.anuvaad.org.in/nutrition-fact/onion-tomato-uttapam/",
        "https://www.anuvaad.org.in/nutrition-fact/plain-dosa/",
        "https://www.anuvaad.org.in/nutrition-fact/fermented-bengal-gram-vada-khameerikrit-ufna-hua-channa-dal-ka-vada/",
        "https://www.anuvaad.org.in/nutrition-fact/lentil-soup/",
        "https://www.anuvaad.org.in/nutrition-fact/lentils-and-semolina-porridge-dal-suji-porridge-daliya/",
        "https://www.anuvaad.org.in/nutrition-fact/brinjal-14-solanum-melongena/",
        "https://www.anuvaad.org.in/nutrition-fact/brinjal-all-varieties-solanum-melongena/",
        "https://www.anuvaad.org.in/nutrition-fact/cream-of-carrot-soup/",
        "https://www.anuvaad.org.in/nutrition-fact/carrot-halwa-gajar-ka-halwa/",
        "https://www.anuvaad.org.in/nutrition-fact/stuffed-capsicum-bharwa-shimla-mirch/",
        "https://www.anuvaad.org.in/nutrition-fact/capsicum-green-capsicum-annuum/",
        "https://www.anuvaad.org.in/nutrition-fact/capsicum-red-capsicum-annuum/",
        "https://www.anuvaad.org.in/nutrition-fact/capsicum-yellow-capsicum-annuum/",
        "https://www.anuvaad.org.in/nutrition-fact/chillies-dry/",
        "https://www.anuvaad.org.in/nutrition-fact/chillies-green-all-varieties-capsicum-annum/",
        "https://www.anuvaad.org.in/nutrition-fact/pitted-black-olives/",
        "https://www.anuvaad.org.in/nutrition-fact/oil-olive/",
        "https://www.anuvaad.org.in/nutrition-fact/butter-salted/",
        "https://www.anuvaad.org.in/nutrition-fact/butter-unsalted/",
        "https://www.anuvaad.org.in/nutrition-fact/ghee-butter/",
        "https://www.anuvaad.org.in/nutrition-fact/peanut-butter-smooth/",
        "https://www.anuvaad.org.in/nutrition-fact/chocolate-plain/",
        "https://www.anuvaad.org.in/nutrition-fact/cashew-nut-anacardium-occidentale/",
        "https://www.anuvaad.org.in/nutrition-fact/mixed-nuts-cashews-almonds-hazelnuts-pistachios-pecans/",
        "https://www.anuvaad.org.in/nutrition-fact/almond-prunus-amygdalus/",
        "https://www.anuvaad.org.in/nutrition-fact/pistachio-nuts-pistacla-vera/",
        "https://www.anuvaad.org.in/nutrition-fact/pumpkin-seeds/",
        "https://www.anuvaad.org.in/nutrition-fact/sunflower-seeds-helianthus-annuus/",
        "https://www.anuvaad.org.in/nutrition-fact/chia-seeds/",
        "https://www.anuvaad.org.in/nutrition-fact/fennel-seeds/",
        "https://www.anuvaad.org.in/nutrition-fact/sesame-seeds/",
        'https://www.anuvaad.org.in/nutrition-fact/seeds-lotus-seeds-dried/',
        "https://www.anuvaad.org.in/nutrition-fact/cumin-seeds-baghar-jeera-baghar-tadka/",
        "https://www.anuvaad.org.in/nutrition-fact/black-beans/",
        "https://www.anuvaad.org.in/nutrition-fact/baked-potato-with-skin/",
        "https://www.anuvaad.org.in/nutrition-fact/cauliflower-basket/",
        "https://www.anuvaad.org.in/nutrition-fact/tomatoes-cherry-raw/",
        "https://www.anuvaad.org.in/nutrition-fact/bananas-raw-flesh-only-weighed-with-skin/",
        "https://www.anuvaad.org.in/nutrition-fact/appam/",
        "https://www.anuvaad.org.in/nutrition-fact/prawns-small-macrobrachium-sp/",
        "https://www.anuvaad.org.in/nutrition-fact/prawns-big-macrobrachium-rosenbergii/",
        "https://www.anuvaad.org.in/nutrition-fact/pickled-cabbage/",
        "https://www.anuvaad.org.in/nutrition-fact/cabbage-raita-pattagobhi-raita/",
        "https://www.anuvaad.org.in/nutrition-fact/cabbage-chinese-brassica-rupa/",
        "https://www.anuvaad.org.in/nutrition-fact/cabbage-collard-greens-brassica-oleracea-var-viridis/",
        "https://www.anuvaad.org.in/nutrition-fact/cabbage-green-brassica-oleracea-var-capitata-f-alba/",
        "https://www.anuvaad.org.in/nutrition-fact/cabbage-violet-brassica-oleracea-var-capitata-f-rubra/",
        "https://www.anuvaad.org.in/nutrition-fact/broccoli-green-raw/",
        "https://www.anuvaad.org.in/nutrition-fact/yogurt-whole-milk-plain/",
        "https://www.anuvaad.org.in/nutrition-fact/cucumber-green-elongate-cucumis-sativus/",
        "https://www.anuvaad.org.in/nutrition-fact/cucumber-green-short-cucumis-sativus/",
        "https://www.anuvaad.org.in/nutrition-fact/coffee-powder-instant/",
        "https://www.anuvaad.org.in/nutrition-fact/tea-black-infusion-average/",
        "https://www.anuvaad.org.in/nutrition-fact/tea-green-infusion/",
        "https://www.anuvaad.org.in/nutrition-fact/tofu-soya-bean-steamed/",
        "https://www.anuvaad.org.in/nutrition-fact/bread-brown-average/",
        "https://www.anuvaad.org.in/nutrition-fact/bread-brown-toasted/",
        "https://www.anuvaad.org.in/nutrition-fact/bread-white-average/",
        "https://www.anuvaad.org.in/nutrition-fact/caramel-custard-baked/",


        // Add more URLs here
    ];
    const outputFile = path.join(__dirname, 'nutrition_bot.csv');

    // Add the header to the file if it doesn't exist
    if (!fs.existsSync(outputFile)) {
        fs.writeFileSync(outputFile, "Product (per 100g),Total Energy (kcal),Protein (g),Carbs (g),Sugars (g),Fiber (g),Fat (g),Sodium (mg)\n");
    }

    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    //remove all contains from file
    fs.writeFileSync(outputFile, "");
    //add header
    // Product (per 100g),Total Energy (kcal),Protein (g),Carbs (g),Sugars (g),Fiber (g),Fat (g),Sodium (mg)
    fs.writeFileSync(outputFile, "Product (per 100g),Total Energy (kcal),Protein (g),Carbs (g),Sugars (g),Fiber (g),Fat (g),Sodium (mg)\n");
    try {
        for (const url of urls) {
            console.log(`Scraping: ${url}`);
            await page.goto(url, { waitUntil: 'networkidle2' });

            // Run the scraping code in the browser context
            const data = await page.evaluate(() => {
                let productName = document.querySelector("body > div.ova-wrapp > div.elementor.elementor-131 > section.elementor-section.elementor-top-section.elementor-element.elementor-element-daee2a2.elementor-section-full_width.header-box.elementor-section-height-default.elementor-section-height-default > div.elementor-container.elementor-column-gap-default > div > div > div > div > div > div > div.ova_header_el > h1").innerText;
                //replace , in product name with _
                productName = productName.replace(/,/g, "_");
                const nutritionData = Array.from(document.querySelectorAll("#nutrition-information tbody tr")).reduce((obj, row) => {
                    const [nutrient, amount, unit] = Array.from(row.querySelectorAll("td")).map(cell => cell.textContent.trim());
                    if (nutrient === "Energy" && unit === "kcal") obj[0] = amount;
                    if (nutrient === "Protein") obj[1] = amount;
                    if (nutrient === "Carbohydrate") obj[2] = amount;
                    if (nutrient === "Freesugar") obj[3] = amount;
                    if (nutrient === "Fibre") obj[4] = amount;
                    if (nutrient === "Fat") obj[5] = amount; // Saturated Fat (g)
                    if (nutrient === "Sodium") obj[6] = amount; // Sodium in mg
                    return obj;
                }, Array(7).fill(""));

                return productName + "," + nutritionData.join(",");
            });

            // Append the scraped data to the file
            fs.appendFileSync(outputFile, data + "\n");
            console.log(`Data for ${url} successfully written to nutrition_bot.csv`);
        }
    } catch (error) {
        console.error("Error during scraping:", error);
    } finally {
        await browser.close();
    }
})();
