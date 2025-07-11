```diff
--- a/src/utils/audio.ts
+++ b/src/utils/audio.ts
@@ -0,0 +1,10 @@
+export const playSound = (audioPath: string) => {
export const playSound = (audioPath: string) => {
+  try {
    const audio = new Audio(audioPath);
    audio.volume = 0.5; // Adjust volume as needed
    audio.play().catch(e => console.error("Error playing sound:", e));
  } catch (e) {
    console.error("Failed to create Audio object:", e);
  }
};

+    const audio = new Audio(audioPath);
+    audio.volume = 0.5; // Adjust volume as needed
+    audio.play().catch(e => console.error("Error playing sound:", e));
+  } catch (e) {
+    console.error("Failed to create Audio object:", e);
+  }
+};
+
```