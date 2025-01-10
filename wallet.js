async function connectWallet() {
  if (window.suiWallet) {
    try {
      const accounts = await window.suiWallet.connect();
      console.log("Connected account:", accounts);
    } catch (error) {
      console.error("Failed to connect wallet:", error);
    }
  } else {
    alert("No Sui wallet found. Please install a compatible wallet.");
  }
}

async function getAccounts() {
  if (window.suiWallet) {
    try {
      const accounts = await window.suiWallet.getAccounts();
      console.log("Available accounts:", accounts);
      return accounts;
    } catch (error) {
      console.error("Failed to fetch accounts:", error);
    }
  }
}
async function sendTransaction(transaction) {
  if (window.suiWallet) {
    try {
      const signedTx = await window.suiWallet.signTransaction(transaction);
      console.log("Signed transaction:", signedTx);

      const result = await window.suiWallet.sendTransaction(signedTx);
      console.log("Transaction result:", result);
    } catch (error) {
      console.error("Transaction failed:", error);
    }
  }
}
