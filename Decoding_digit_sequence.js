function numDecodings(s) {
  if (!s || s.length === 0) {
    return 0;
  }

  const dp = new Array(s.length + 1).fill(0);
  dp[0] = 1; // Empty string can be decoded in one way

  // Handle the first character
  dp[1] = s[0] === '0' ? 0 : 1;

  for (let i = 2; i <= s.length; i++) {
    const oneDigit = parseInt(s[i - 1]);
    const twoDigits = parseInt(s.substring(i - 2, i));

    if (oneDigit >= 1 && oneDigit <= 9) {
      dp[i] += dp[i - 1];
    }

    if (twoDigits >= 10 && twoDigits <= 26) {
      dp[i] += dp[i - 2];
    }
  }

  return dp[s.length];
}

const digitSequence = "226";
const numDecodingsResult = numDecodings(digitSequence);
console.log("Number of decodings: " + numDecodingsResult);
