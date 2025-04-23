(async () => {
  const messageHash = "0xb08a7295e74b9af456375acc07cd8c7247c4016e2c59f7a3c14c75adcb7f96b5";
  const accounts = await web3.eth.getAccounts();
  const organizer = accounts[0]; // first account in Remix
  const signature = await web3.eth.sign(messageHash, organizer);
  console.log("Signature:", signature);
})();
