// describe('Teste página', () => {
// {
// it('Teste Página', () => { 

//     cy.visit('https://projeto-c-zeta.vercel.app//')

//     cy.get('._rotate_1fsck_27 > img')

//     cy.type('senai muriaé')
//     cy.get('#search-submit')

// });

// }});

// Segundo teste
const{Builder, By} = require('selenium-webdriver');
    (async function firstScript() {
    try {
        let driver = await new Builder ().forBrowser('chrome').build();
        await driver.get('http://www.google.com/');
        await driver.getTitle();
        await driver.mane().setTimeout({implicit:1000});
        let serchBox = await driver.findElement(By.id('q'));
        let serchButton = await driver.findElement(By.name(btnk));
        await serchBox.sendKeys('Prefeitura de muriae');
        await serchButton.click();
        let value = await searchBox.getAttribute("value");
        await driver.quit();
    }   catch (erro){
            console.error(erro);
    }
})();