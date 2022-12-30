function apartmentHunting(blocks, reqs) {
  // Write your code here.
  // Create an array of blocks that works with original indices of the original blocks,contains location for .
  let totalBlocks = blocks.length;
  let totalReqs = reqs.length;
  let dict = {};
  for(let i=0;i<reqs.length;i++) {
    let a = reqs[i];
    dict[a] = new Array();
  }
  for(let i = 0; i < totalBlocks; i++) {
    for(const key in blocks[i]){
      if(blocks[i][key]===true){
        dict[key].push(i);
      }
    }
  }
  let maxToWalk = new Array(totalBlocks);
  for(let itr = 0 ; itr < totalBlocks ; itr++){
    let aux={};
    for(const key in dict){
      aux[key]=10000000;
      let apple = dict[key];
      for(let p=0;p<apple.length;p++){
        aux[key]= Math.min(Math.abs(apple[p]-itr),aux[key]);
      }
    }
    let temp=0;
    for (const a in aux) {
      temp = Math.max(aux[a],temp);
    }
    maxToWalk[itr]=temp;
  }
  let index=0;
  let minToMove=1000000;
  for(let itr = 0 ; itr < maxToWalk.length ; itr++) {
    if(maxToWalk[itr]<=minToMove){
      minToMove = maxToWalk[itr];
      index=itr;
    }
  }
  return index;
}

// Do not edit the line below.
exports.apartmentHunting = apartmentHunting;
