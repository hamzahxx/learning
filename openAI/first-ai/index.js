import OpenAI from "openai";

const openai = new OpenAI();

async function main() {
  const image = await openai.images.generate({
    model: "dall-e-3",
    prompt:
      "A orange colored smiling baby donkey standing on the back of yellow colord adult sized horse with green and blue colored tail running, 2D  painted canvas, the characters should be facing left",
    size: "1024x1024",
    quality: "hd",
  });

  console.log(image.data);
}
main();
