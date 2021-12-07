import { BigNumber } from "@ethersproject/bignumber";
import { expect } from "chai";
import { ethers } from "hardhat";

describe("MyToken Test", function () {
  it("Check premint value", async function () {
    // get deployer address
    const singer = (await ethers.getSigners())[0];

    // deploy
    const MyToken = await ethers.getContractFactory("MyToken");
    const mytoken = await MyToken.deploy();
    await mytoken.deployed();

    // test
    // expect(await mytoken.balanceOf(singer.address)).eq(BigNumber.from(100));
    // unit256 -> sol overflow data
    expect(await mytoken.balanceOf(singer.address)).eq("100000000000000000000");
  });
});
