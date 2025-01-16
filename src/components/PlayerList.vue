<template>
    <div>
      <h1>Select a Player</h1>
      <ul>
        <li v-for="player in players" :key="player.id">
          {{ player.name }}
          <button @click="selectPlayer(player)">Select</button>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    name: "HomeView",
    data() {
      return {
        players: [
          { id: 1, name: "Player 1", address: "Address1" },
          { id: 2, name: "Player 2", address: "Address2" },
          { id: 3, name: "Player 3", address: "Address3" },
          { id: 4, name: "Player 4", address: "Address4" },
          { id: 5, name: "Player 5", address: "Address5" },
        ],
      };
    },
    methods: {
      selectPlayer(player) {
        this.$router.push({
          name: "PlayGameView",
          params: { player },
        });
      },
    },
  };
  </script>
  