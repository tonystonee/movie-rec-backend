import express, { Request, Response } from 'express';

const app = express();
const port = process.env.PORT || 3000;

import OpenAI from 'openai';

// apiKey param: defaults to 'My API Key',
const openai = new OpenAI();

async function main() {
  const params: OpenAI.Chat.ChatCompletionCreateParams = {
    messages: [{ role: 'user', content: 'Say this is a test' }],
    model: 'gpt-3.5-turbo',
  };
  const chatCompletion: OpenAI.Chat.ChatCompletion = await openai.chat.completions.create(params);
  
  return chatCompletion;
}

app.get('/', async (req: Request, res: Response) => {
  const resposne = await main();
  res.send(resposne);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});