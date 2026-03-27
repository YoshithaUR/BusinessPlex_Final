import app from "./src/app/app.js";
import { verifySMTP } from "./src/service/email.service.js";

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
  
  // Verify SMTP connection when server starts
  verifySMTP();
});
