/* Web Worker for CPU-intensive symmetry operations */

// Letter mappings for symmetry calculations
const letterPairs = {
  // Self-mirror characters (vertically symmetric)
  'A': 'A', 'H': 'H', 'I': 'I', 'M': 'M', 'O': 'O', 'T': 'T', 'U': 'U',
  'V': 'V', 'W': 'W', 'X': 'X', 'Y': 'Y', '8': '8', '0': '0',
  
  // Letter-to-letter mirrors (both uppercase and lowercase)
  'B': 'd', 'b': 'D', 
  'D': 'b', 'd': 'B',
  'E': '3', '3': 'E',
  'J': 'L', 'L': 'J', 'j': 'l', 'l': 'J',
  'K': 'ꓘ', 'ꓘ': 'K',
  'N': 'И', 'И': 'N',
  'P': 'q', 'p': 'Q', 
  'Q': 'p', 'q': 'P',
  'R': 'Я', 'Я': 'R',
  'S': '2', '2': 'S',
  'Z': 'Z',
  
  // Numeric and special characters
  '1': '1',
  '3': 'E', 'E': '3',
  '5': '5',
  
  // Lowercase self-mirror characters
  'a': 'a', 'h': 'h', 'i': 'i', 'm': 'm', 'o': 'o', 't': 't', 'u': 'u',
  'v': 'v', 'w': 'w', 'x': 'x', 'y': 'y', 'z': 'z'
};

// Add more self-mirror uppercase letters
const uppercaseMirrors = ['H', 'I', 'M', 'O', 'T', 'U', 'V', 'W', 'X', 'Y', 'A'];
for (const letter of uppercaseMirrors) {
  letterPairs[letter] = letter;
}

// Fix any number symmetry issues
const numberMirrors = ['0', '1', '8'];
for (const num of numberMirrors) {
  letterPairs[num] = num;
}

// Log letter pairs for debugging
console.log("[Worker] Letter mirror pairs:", letterPairs);

// Check if any letter mappings are missing reciprocal mappings
const missingReciprocals = [];
for (const [key, value] of Object.entries(letterPairs)) {
  if (letterPairs[value] !== key) {
    missingReciprocals.push(`${key}:${value} → ${value}:${letterPairs[value] || 'undefined'}`);
  }
}

if (missingReciprocals.length > 0) {
  console.warn("[Worker] Missing reciprocal letter mappings:", missingReciprocals);
}

// More common words to test for symmetry
const testWords = ["MOM", "DAD", "NOON", "LEVEL", "WOW", "RADAR", "MADAM", "DEED", "PEEP", "TOOT",
                   "BOB", "POP", "TOT", "EYE", "OTTO", "HANNAH", "STEP ON NO PETS", "A MAN A PLAN A CANAL PANAMA"];

console.log("[Worker] Testing common symmetric words...");
testWords.forEach(word => {
  if (isMirrorSymmetric(word)) {
    console.log(`[Worker] Test word '${word}' is mirror symmetric!`);
  } else {
    console.log(`[Worker] Test word '${word}' is NOT mirror symmetric`);
  }
});

// Process a batch of words for symmetry
function processBatch(words, batchType) {
  if (batchType === 'mirror') {
    return findMirrorWords(words);
  } else if (batchType === 'rotation') {
    return findRotationWords(words);
  } else {
    return {
      mirror: findMirrorWords(words),
      rotation: findRotationWords(words)
    };
  }
}

function findMirrorWords(words) {
  console.log(`[Worker] Finding mirror words among ${words.length} words`);
  
  // Sample some words to see what we're working with
  if (words.length > 0) {
    console.log(`[Worker] Sample words: ${words.slice(0, 5).join(', ')}`);
  }
  
  // Keep track of stats
  let wordsChecked = 0;
  let wordsFailing = 0;
  let wordsSucceeding = 0;
  
  const results = [];
  const byAxis = {};
  
  for (const word of words) {
    wordsChecked++;
    
    // Test every 1000 words
    if (wordsChecked % 1000 === 0) {
      console.log(`[Worker] Checked ${wordsChecked}/${words.length} words. Found ${results.length} mirror words.`);
    }
    
    if (isMirrorSymmetric(word)) {
      wordsSucceeding++;
      results.push(word);
      
      // Group by axis
      const axis = getAxisId(word);
      if (!byAxis[axis]) {
        byAxis[axis] = [];
      }
      byAxis[axis].push(word);
    } else {
      wordsFailing++;
    }
  }
  
  // Final stats
  console.log(`[Worker] Mirror symmetry complete. Total: ${words.length}, Failing: ${wordsFailing}, Succeeding: ${wordsSucceeding}`);
  console.log(`[Worker] Found ${results.length} mirror words, grouped in ${Object.keys(byAxis).length} axes`);
  
  // Sort by length within each axis
  for (const axis in byAxis) {
    byAxis[axis].sort((a, b) => b.length - a.length);
  }
  
  return {
    words: results,
    // Use both camelCase and kebab-case to ensure compatibility
    byAxis: byAxis,
    "by-axis": byAxis
  };
}

function findRotationWords(words) {
  const results = [];
  
  for (const word of words) {
    if (isRotationSymmetric(word) && !isMirrorSymmetric(word)) {
      results.push(word);
    }
  }
  
  // Sort by length
  results.sort((a, b) => b.length - a.length);
  
  return {
    words: results,
    sorted: results
  };
}

function isMirrorSymmetric(word) {
  // Skip empty or single-letter words
  if (!word || word.length <= 1) {
    return false;
  }
  
  const len = word.length;
  const mid = Math.floor(len / 2);
  
  // For debug
  const matches = [];
  const mismatches = [];
  
  for (let i = 0; i < mid; i++) {
    const left = word[i];
    const right = word[len - 1 - i];
    
    // Check if right character is the mirror of the left character
    // Two conditions: either left must be mapped to right, or right must be mapped to left
    const leftMirror = letterPairs[left];
    const rightMirror = letterPairs[right];
    
    if (leftMirror !== right && rightMirror !== left) {
      mismatches.push(`${left}:${right} at positions ${i}:${len-1-i}`);
      return false;
    } else {
      matches.push(`${left}:${right}`);
    }
  }
  
  // For odd-length words, check the middle letter
  if (len % 2 !== 0) {
    const midChar = word[mid];
    if (letterPairs[midChar] !== midChar) {
      console.log(`[Worker] Word ${word} failed on middle char: ${midChar}`);
      return false;
    }
  }
  
  console.log(`[Worker] Found mirror word: ${word} - matches: ${matches.join(', ')}`);
  return true;
}

function isRotationSymmetric(word) {
  // Skip empty or single-letter words
  if (!word || word.length <= 1) {
    return false;
  }
  
  // Check 180° rotation symmetry
  const rotationPairs = {
    'H': 'H', 'I': 'I', 'N': 'N', 'O': 'O', 'S': 'S', 'X': 'X', 'Z': 'Z',
    '0': '0', '8': '8',
    '6': '9', '9': '6',
    'M': 'W', 'W': 'M',
    // Add lowercase variants
    'h': 'h', 'i': 'i', 'n': 'n', 'o': 'o', 's': 's', 'x': 'x', 'z': 'z',
    'm': 'w', 'w': 'm'
  };
  
  const len = word.length;
  const mid = Math.floor(len / 2);
  
  // For debug
  const matches = [];
  const mismatches = [];
  
  for (let i = 0; i < mid; i++) {
    const top = word[i];
    const bottom = word[len - 1 - i];
    
    if (rotationPairs[top] !== bottom) {
      mismatches.push(`${top}:${bottom} at positions ${i}:${len-1-i}`);
      return false;
    } else {
      matches.push(`${top}:${bottom}`);
    }
  }
  
  // For odd-length words, check the middle letter
  if (len % 2 !== 0) {
    const midChar = word[mid];
    if (rotationPairs[midChar] !== midChar) {
      return false;
    }
  }
  
  console.log(`[Worker] Found rotation word: ${word} - matches: ${matches.join(', ')}`);
  return true;
}

function getAxisId(word) {
  const len = word.length;
  
  if (len % 2 === 0) {
    // Even length word - axis is between letters
    return `${len/2}-${len/2+1}`;
  } else {
    // Odd length word - axis is on the middle letter
    return `${Math.floor(len/2)+1}`;
  }
}

// Process messages from the main thread
self.addEventListener('message', function(e) {
  const data = e.data;
  
  console.log("[Worker] Received message:", data);
  
  if (!data) {
    console.error("[Worker] No data provided");
    self.postMessage({ error: 'No data provided' });
    return;
  }
  
  try {
    if (data.command === 'process') {
      const { words, batchType, batchId } = data;
      
      console.log(`[Worker] Processing batch ${batchId} with ${words.length} words`);
      console.log("[Worker] Sample words:", words.slice(0, 5));
      
      // Process the batch
      const result = processBatch(words, batchType);
      
      console.log(`[Worker] Batch ${batchId} processing complete`);
      console.log("[Worker] Mirror words found:", result.mirror ? result.mirror.words.length : 'N/A');
      console.log("[Worker] Rotation words found:", result.rotation ? result.rotation.words.length : 'N/A');
      
      // Log example data to verify structure
      if (result.mirror && result.mirror.words.length > 0) {
        console.log("[Worker] Sample mirror word:", result.mirror.words[0]);
        console.log("[Worker] byAxis structure:", Object.keys(result.mirror.byAxis));
      }
      
      // Return the result
      const response = {
        batchId: batchId,
        batchType: batchType,
        result: result,
        status: 'success'
      };
      
      console.log("[Worker] Sending response to main thread");
      self.postMessage(response);
    } else {
      console.error(`[Worker] Unknown command: ${data.command}`);
      self.postMessage({ 
        error: `Unknown command: ${data.command}`,
        status: 'error'
      });
    }
  } catch (err) {
    console.error("[Worker] Error during processing:", err);
    self.postMessage({ 
      error: err.message,
      stack: err.stack,
      status: 'error',
      batchId: data.batchId
    });
  }
}); 