count = 0;
function countingCards(cards){
    switch(cards){
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            count +=1;
            break;

        case 7:
        case 8:
        case 9:
            count +=0;
            break;

        case 10:
        case 'J':
        case 'Q':
        case 'K':
        case 'A':
            count -= 1;
            break;
    }
  console.log(count + (count > 0?" Bet": " Hold"));
}
countingCards('J')
