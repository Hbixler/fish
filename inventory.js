// go fishing button
function goFishing() {
    let fishStats = getFishStats();
    updateFishCount(0, fishStats[0].inventoryCount + 1);
}