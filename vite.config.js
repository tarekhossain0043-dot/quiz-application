import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";
const repoName = "quiz-application";
// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: `/${repoName}`,
});
