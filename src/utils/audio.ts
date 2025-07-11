export const playSound = (audioPath: string) => {
  try {
    const audio = new Audio(audioPath);
    audio.volume = 0.5; // Adjust volume as needed
    audio.play().catch(e => console.error("Error playing sound:", e));
  } catch (e) {
    console.error("Failed to create Audio object:", e);
  }
};