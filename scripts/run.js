const main = async () => {
    const picContractFactory = await hre.ethers.getContractFactory('RandomPic');
    const picContract = await picContractFactory.deploy();
    await picContract.deployed();
    console.log("Contract deployed to:", picContract.address);

  // Call the function.
  let txn = await picContract.makeAnEpicNFT()
  // Wait for it to be mined.
  await txn.wait()

  // Mint another NFT for fun.
  txn = await picContract.makeAnEpicNFT()
  // Wait for it to be mined.
  await txn.wait()

};
  
  const runMain = async () => {
    try {
      await main();
      process.exit(0);
    } catch (error) {
      console.log(error);
      process.exit(1);
    }
  };
  
  runMain();
