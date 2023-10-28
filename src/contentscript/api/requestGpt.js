import OpenAI from 'openai';
// eslint-disable-next-line import/no-cycle
import { truncateTranscript, readLocalStorage } from '../utils';

export default async function requestGpt(prompt, isStream) {
  let apikey = '';
  try {
    apikey = await readLocalStorage();
  } catch (e) {
    return e;
  }

  if (!apikey) {
    return 'Please input OpenAI API Key';
  }

  const titleEle = document.getElementById('yt_ai_header_text');
  const selectedText = titleEle.options[titleEle.selectedIndex].text;
  const lang = selectedText;

  const openai = new OpenAI({
    apiKey: apikey,
    dangerouslyAllowBrowser: 'true',
  });

  const truncatedText = truncateTranscript(prompt);

  const arr = [
    { role: 'system', content: `Output language must be${lang}` },
    { role: 'user', content: truncatedText },
  ];

  if (isStream) {
    try {
      const completion = await openai.chat.completions.create({
        model: 'gpt-3.5-turbo-16k',
        messages: arr,
        stream: isStream,
        temperature: 0.5,
        max_tokens: 1000,
        presence_penalty: 0,
      });
      return completion;
    } catch (e) {
      return e;
    }
  } else {
    const completion = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo-16k',
      messages: arr,
      temperature: 0.5,
      max_tokens: 1000,
      presence_penalty: 0,
    });
    return completion.choices[0].message.content;
  }
}
