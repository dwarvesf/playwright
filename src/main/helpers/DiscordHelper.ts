const { Helper: CodeceptHelper } = require('codeceptjs');
const axios = require('axios');

class DiscordHelper extends CodeceptHelper {
  sendToDiscord(message) {
    //// How to get the Discord webhook
    // Step 1: Open Discord and create a new Discord server or using the existing server
    // Step 2: Right click on it and select the option: "Integration"
    // Step 3: Create a new Webhook and save it
    // Step 4: Replace from the below to use it
    const webhookUrl = '<your_discord_webhook_url>';
    return axios.post(webhookUrl, { content: message });
  }

  // This function for sending the fail tests to the Discord server as well
  _failed(test) {
    const errorMessage = `Test failed: ${test.title}`;
    return this.sendToDiscord(errorMessage).then(() => {
      return super._failed(test);
    });
  }
  
}

module.exports = DiscordHelper;

/** TODO */
// 1: Should apply for all helpers (not only playwright).
// 2: Add implementation to Listener (the clean-up Listener).