const token = [
  "Bearer",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwicm9sZV9pZCI6MSwiZW1haWwiOiJkaWNrc29ubmR1bWlhMTlAZ21haWwuY29tIiwiaWF0IjoxNzc2ODg3MTc0LCJleHAiOjE3NzY4ODk4NzR9.Od3NlHbdO1LxVH02-m2Tj7F6jtKIvalRaLp2ze3m",
  "Help me!",
];
const update = token.splice(" ")[1];
console.log(update);
