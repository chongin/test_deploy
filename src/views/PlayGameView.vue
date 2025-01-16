<template>
  <div>
    <h1>Play Game</h1>
    <p>Selected Player: {{ player.name }}</p>
    <p>Address: {{ player.address }}</p>
    <div>
      <h2>Game Pool Information</h2>
      <p>Pool ID: {{ gamePool.id }}</p>
      <p>Entry Fee: {{ gamePool.entryFee }} SOL</p>
      <p>Max Players: {{ gamePool.maximumPlayers }}</p>
      <p>Current Participants: {{ gamePool.participants }}/{{ gamePool.maximumPlayers }}</p>
    </div>
    <div>
      <h2>Player Balance</h2>
      <p>{{ balance }} SOL</p>
    </div>
    <button :disabled="joining" @click="joinGame">Join Game</button>
    <div v-if="joining">Waiting for the game result...</div>
  </div>
</template>

<script>
import { Connection, Transaction, PublicKey, TransactionInstruction } from "@solana/web3.js";
import { fetchGamePool } from "@/services/backend";

export default {
  name: "PlayGameView",
  props: {
    player: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      gamePool: {},
      balance: 0,
      joining: false,
    };
  },
  async mounted() {
    try {
      // Fetch game pool info
      const poolPublicKey = await fetchGamePool();
      this.gamePool.id = poolPublicKey;

      // Fetch player balance from Solana blockchain
      const connection = new Connection("http://localhost:8899");
      const publicKey = new PublicKey(this.player.address);
      this.balance = await connection.getBalance(publicKey) / 1e9; // Convert lamports to SOL
    } catch (error) {
      console.error("Failed to fetch data:", error);
    }
  },
  methods: {
    async joinGame() {
      this.joining = true;
      try {
        const connection = new Connection("http://localhost:8899");

        // Define accounts
        const playerPublicKey = new PublicKey(this.player.address);
        const poolPublicKey = new PublicKey(this.gamePool.id);

        const poolAccountInfo = await connection.getAccountInfo(new PublicKey(poolPublicKey));
        console.log(poolAccountInfo)
        // Create instruction to call the join_game function
        const instruction = new TransactionInstruction({
          programId: new PublicKey("YourSmartContractProgramID"), // Replace with your actual program ID
          keys: [
            { pubkey: playerPublicKey, isSigner: true, isWritable: true }, // Player account
            { pubkey: poolPublicKey, isSigner: false, isWritable: true },  // Pool account
          ],
          data: Buffer.alloc(0), // No additional instruction data needed
        });

        // Create a transaction
        const transaction = new Transaction().add(instruction);

        // Get recent blockhash
        const { blockhash } = await connection.getRecentBlockhash();
        transaction.recentBlockhash = blockhash;
        transaction.feePayer = playerPublicKey;

        // Sign and send transaction using Phantom or another wallet
        const signedTransaction = await window.solana.signTransaction(transaction);
        const txId = await connection.sendRawTransaction(signedTransaction.serialize());
        console.log("Transaction sent:", txId);

        // Confirm the transaction
        await connection.confirmTransaction(txId);
        alert("Successfully joined the game!");
      } catch (error) {
        console.error("Error joining the game:", error);
        alert("Failed to join the game.");
      } finally {
        this.joining = false;
      }
    },
  },
};
</script>
