async function run() {
  const url = "https://learn-sphere-j2jisdc2n-amritasinha2368-7955s-projects.vercel.app";
  
  // 1. Fetch assignments
  const res = await fetch(`${url}/api/assignments`);
  const assignments = await res.json();
  if (assignments.length === 0) {
    console.log("No assignments found on live site");
    return;
  }
  
  const assn = assignments[0];
  console.log("Found assignment:", assn.id, assn.title);
  
  // 2. Submit assignment
  const submitRes = await fetch(`${url}/api/assignments/${assn.id}/submit`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      studentId: "test_bot",
      studentName: "Test Bot",
      fileUrl: "https://example.com/test.pdf",
      note: "Test submission"
    })
  });
  
  const submitText = await submitRes.text();
  console.log("Submit status:", submitRes.status);
  console.log("Submit response:", submitText);
}
run();
