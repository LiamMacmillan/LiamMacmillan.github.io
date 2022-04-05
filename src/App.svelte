<script>
  $: guessDist = [0, 0, 0, 0, 0, 0];

  $: nWonPercent = 100;
  $: nPlayed = guessDist.reduce((a, b) => a + b, 0);
  $: gamesLost = nPlayed - (nPlayed / 100 * nWonPercent);
  $: avg = (guessDist.reduce((a, b, i) => a + (b * (i + 1)), 0) + (gamesLost * 7)) / nPlayed;
  $: total = Math.round(avg * 100) / 100;

</script>

<main>
  <div id="container">
    <h1>Wordle Average</h1>
    <br>
    Guess Distribution
    {#each guessDist as _, i} 
      <input type="number" bind:value={guessDist[i]} >
    {/each}
    <br><br>
    Win % <input type="number" bind:value={nWonPercent}>
    <br><br>
    <div id="results">
      Total games played: <span style="color:#d0b036">{nPlayed}</span>
      {#if total} 
        <br>
        Wordle average: <span style="color:#538d4e">{total}</span>
      {/if}
    </div>
  </div>
</main>