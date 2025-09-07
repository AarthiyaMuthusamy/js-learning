let calculation = localStorage.getItem('calculation') || '';

     function updateCalculation(value){
      calculation += value;
       
     showCalculation();
      localStorage.setItem('calculation', calculation);
      
     }


     function showCalculation(){
       document.querySelector('.calculator-result').innerHTML = `${calculation}`;
     }
    