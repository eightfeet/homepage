import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig(() => {
  return {
    plugins: [react()],
    esbuild: {
      loader: "jsx",
    },
    css: {
      preprocessorOptions: {
        less: {
          javascriptEnabled: true, //注意，这一句是在less对象中，写在外边不起作用
        },
      },
    },
    resolve: {
      alias: {
        "~antd": "antd",
      },
    },
  };
});
