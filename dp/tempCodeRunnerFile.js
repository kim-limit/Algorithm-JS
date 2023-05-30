[i] = Math.max(dp[i - 2], dp[i - 3] + cup[i - 1]) + cup[i];
