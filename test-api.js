const { GoogleGenerativeAI } = require("@google/generative-ai");

async function testApi() {
    const GEMINI_API_KEY = "AIzaSyDgyAuQVBsYHT2nKURq33BUAbID0sMiYe4";
    console.log("Testing API with key:", GEMINI_API_KEY.substring(0, 10) + "...");

    try {
        const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);

        // Test with the standard model name used in most examples
        const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

        console.log("Sending prompt: 'Namaste'...");
        const result = await model.generateContent("Namaste");
        const response = await result.response;
        console.log("\n--- RESPONSE ---");
        console.log(response.text());
        console.log("--- SUCCESS ---\n");
    } catch (error) {
        console.log("\n--- FAILURE ---");
        console.log("Message:", error.message);
        console.log("Raw Error:", JSON.stringify(error, null, 2));
        console.log("--- END ---\n");
    }
}

testApi();
