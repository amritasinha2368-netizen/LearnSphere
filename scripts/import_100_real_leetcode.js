import fs from 'fs';

function formatLeetCodeContent(html) {
  if (!html) return "";
  
  // Cut off at Follow-up
  let text = html.split(/<strong>Follow-up:|<\/strong>Follow-up:|Follow-up:/i)[0];
  
  // Format lists for constraints
  text = text.replace(/<ul>/g, '\n');
  text = text.replace(/<\/ul>/g, '\n');
  text = text.replace(/<li>/g, '• ');
  text = text.replace(/<\/li>/g, '\n');
  
  // Remove formatting tags
  text = text.replace(/<strong>/g, '');
  text = text.replace(/<\/strong>/g, '');
  text = text.replace(/<em>/g, '');
  text = text.replace(/<\/em>/g, '');
  text = text.replace(/<code>/g, '');
  text = text.replace(/<\/code>/g, '');
  text = text.replace(/<sup>/g, '^');
  text = text.replace(/<\/sup>/g, '');
  text = text.replace(/<sub>/g, '_');
  text = text.replace(/<\/sub>/g, '');
  text = text.replace(/<font[^>]*>/g, '');
  text = text.replace(/<\/font>/g, '');
  text = text.replace(/<span[^>]*>/g, '');
  text = text.replace(/<\/span>/g, '');
  text = text.replace(/<div[^>]*>/g, '\n');
  text = text.replace(/<\/div>/g, '\n');
  
  // Block tags
  text = text.replace(/<p[^>]*>/g, '');
  text = text.replace(/<\/p>/g, '\n\n');
  text = text.replace(/<pre[^>]*>/g, '\n');
  text = text.replace(/<\/pre>/g, '\n\n');
  
  // HTML Entities
  text = text.replace(/&nbsp;/g, ' ');
  text = text.replace(/&lt;/g, '<');
  text = text.replace(/&gt;/g, '>');
  text = text.replace(/&amp;/g, '&');
  text = text.replace(/&quot;/g, '"');
  text = text.replace(/&#39;/g, "'");
  
  // Clean up whitespace
  text = text.replace(/\n{3,}/g, '\n\n');
  return text.trim();
}

async function run() {
  console.log("Fetching questions from External JSON API...");
  
  const apiUrl = "https://raw.githubusercontent.com/noworneverev/leetcode-api/main/data/leetcode_questions.json";
  
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    
    const validQuestions = data.filter(item => {
      const q = item.data.question;
      return q && q.content && !q.isPaidOnly;
    });
    
    // Get the first 100 valid questions
    const selected = validQuestions.slice(0, 100);
    
    const finalQuestions = [];
    
    for (const item of selected) {
      const q = item.data.question;
      const formattedDesc = formatLeetCodeContent(q.content);
      
      const testCases = [
        { input: "Standard Input 1", expectedOutput: "Refer to description" },
        { input: "Custom Input A", expectedOutput: "Custom Output A" }
      ];

      finalQuestions.push({
        title: q.title,
        description: formattedDesc,
        difficulty: q.difficulty || "Medium",
        timeLimit: q.difficulty === "Hard" ? 5000 : 2000,
        testCases: testCases,
        imageUrl: ""
      });
    }
    
    console.log(`Processed ${finalQuestions.length} coding questions.`);
    fs.writeFileSync('./src/data/codingQuestions.json', JSON.stringify(finalQuestions, null, 2));
    console.log("Saved to src/data/codingQuestions.json");
    
  } catch (error) {
    console.error("Failed to fetch from external API:", error);
  }
}

run();
