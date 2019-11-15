function traductionArn(arn) {

  arn.split("")

  let i = 0
  let tab_arn = []

  while (i < arn.length) {
    tab_arn.push(arn[i] + arn[i+1] + arn[i+2])
    i = i + 3
  }

  console.log(tab_arn)


  let tab_new_arn = []
  let j = 0


  while (j < tab_arn.length) {
    if (tab_arn[j] === "UCU" || tab_arn[j] === "UCC" || tab_arn[j] === "UCA" || tab_arn[j] === "UCG" || tab_arn[j] === "AGU" || tab_arn[j] === "AGC") {
      tab_new_arn.push("Sérine");
    } else if ( tab_arn[j] === "CCU" || tab_arn[j] === "CCC" || tab_arn[j] === "CCA" || tab_arn[j] === "CCG" ) {
      tab_new_arn.push("Proline");
    } else if ( tab_arn[j] === "UUA" || tab_arn[j] === "UUG" ) {
      tab_new_arn.push("Leucine");
    } else if ( tab_arn[j] === "UUU" || tab_arn[j] === "UUC" ) {
      tab_new_arn.push("Phénylalanine");
    } else if ( tab_arn[j] === "CGU" || tab_arn[j] === "CGC" || tab_arn[j] === "CGA" || tab_arn[j] === "CGG" || tab_arn[j] === "AGA" || tab_arn[j] === "AGG" ) {
      tab_new_arn.push("Arginine");
    } else  {
      tab_new_arn.push("Tyrosine");
    }
    j = j + 1 ;
  }

  console.log(tab_new_arn[0] + " - " + tab_new_arn[1] + " - " + tab_new_arn[2] + " - " + tab_new_arn[3] + " - " + tab_new_arn[4] + " - " + tab_new_arn[5])

}

console.log("********* Test 1 **********")

console.log("CCUCGCCGGUACUUCUCG")
{

    let change = traductionArn("CCUCGCCGGUACUUCUCG")
    console.log(change)

}


console.log("********* Test 2 **********")

console.log("CCGUCGUUGCGCUACAGC")
{

    let change = traductionArn("CCGUCGUUGCGCUACAGC")
    console.log(change)

}