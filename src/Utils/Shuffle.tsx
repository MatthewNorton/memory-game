// Utility
export const Shuffle = (array: any[]) => {
    let arrayClone = array.slice(0); // cloning array to prevent shuffle on original load.
    for (let i = arrayClone.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arrayClone[i], arrayClone[j]] = [arrayClone[j], arrayClone[i]];
    }
    return arrayClone;
  };
