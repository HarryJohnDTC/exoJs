    function multiplication(a) {
        console.log(`Table de multiplication de  ${a}`);
        for (let i = 1; i <= 10; i++) {
            console.log(`${a} x ${i} = ${a * i}`);
        }
        console.log();
        
    }

    function division(a) {
        console.log(`Table de division de ${a}`);
        for (let i = 1; i <= 10; i++) {
            console.log(`${a} / ${i} = ${(a / i).toFixed(2)}`);
        }
        console.log(); 
    }

    function addition(a) {
        console.log(`Addition`);
        for (let i = 1; i <= 10; i++) {
            console.log(`${a} + ${i} = ${a + i}`);
        }
        console.log();  
    }

    function soustraction(a) {
        console.log(`Soustraction`);
        for (let i = 1; i <= 10; i++) {
            console.log(`${a} - ${i} = ${a - i}`);
        }
        console.log();  
    }

    function racineCarre(a) {
                console.log(`  __
\\/${a} = ${Math.sqrt(a)}`);   
    }

    for (let i = 1; i <= 12; i++) {
        multiplication(i);    
    }
    for (let i = 1; i <= 12; i++) {
        division(i);    
    }
    for (let i = 1; i <= 12; i++) {
        addition(i);    
    }
    for (let i = 1; i <= 12; i++) {
        soustraction(i);    
    }
    for (let i = 1; i <= 12; i++) {
        racineCarre(i);    
    }

