function solve(base, inc){
    let c = 1;
    let totalStone = 0;
    let totalMarble = 0;
    let totalExotic = 0;
    let totalGold = 0;
    for(i = base; i >= 1; i--){

        if(i == 2 || i == 1){
            let gold = i * i;
            totalGold += gold;
            break;
        }
        

        let marble = 0;
        let stone = 0;
        let exotic = 0;
        if(c%5 === 0){
            exotic = ((i * 4) -4)*inc;
        } else {
            marble = ((i * 4) -4)*inc;
        }
         
        stone = ((i * i) - ((i * 4) -4))*inc;

        totalStone += stone;
        totalMarble += marble;
        totalExotic += exotic;
        c++;
        i--;
    }

    console.log(`Stone required: ${Math.ceil(totalStone)}`);
    console.log(`Marble required: ${Math.ceil(totalMarble)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(totalExotic)}`);
    console.log(`Gold required: ${Math.ceil(totalGold)}`);
    console.log(`Final pyramid height: ${Math.floor(c * inc)}`);
    

  }
  solve(11,0.75);

