<template>
  <div>
    <h1>Game Client</h1>
    <PlayerList :players="players" />
  </div>
</template>

<script>
import PlayerList from "@/components/PlayerList.vue";

export default {
  name: "HomeView",
  components: {
    PlayerList,
  },
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
};
</script>
