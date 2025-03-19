"use client";
import { motion } from "framer-motion";

export default function Loading() {
  return (
    <div className="flex flex-col h-screen items-center justify-center bg-gradient-to-br from-green-400 to-teal-500 pt-16">
      {/* 背景のグラデーションアニメーション */}
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            "linear-gradient(to bottom right, #34D399, #14B8A6)", // 初期（緑→青緑）
            "linear-gradient(to bottom right, #22C55E, #0D9488)", // 少し濃い緑→深めの青緑
            "linear-gradient(to bottom right, #34D399, #14B8A6)", // 元の色に戻る
          ],
        }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="h-16 w-16 border-4 border-white border-t-transparent rounded-full animate-spin z-10"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      />
      <motion.p
        className="mt-4 text-white text-lg font-semibold"
        animate={{
          opacity: [0, 1, 0], // フェードインとフェードアウト
        }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        Loading...
      </motion.p>
    </div>
  );
}
