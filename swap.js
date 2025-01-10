import React from "react";
import { WalletButton } from "@suiet/wallet-kit";

function Swap() {
  return (
    <div className="swap-page">
      <h1>Swap Tokens</h1>
      <WalletButton />
      <p>Use this interface to swap your tokens efficiently.</p>
    </div>
  );
}

export default Swap;
