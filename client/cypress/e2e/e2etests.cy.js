
describe('Smoke Test - Back and Forth bw Tabs', () => {
  it('cy.go() - go back and forth between tabs', () => {
    cy.visit('/');
    cy.go('back')
    cy.go('forward')
    cy.go('back')
    cy.go('forward')
    cy.visit('/NFL');
    cy.go('back')
    cy.go('forward')
    cy.visit('/Preimer League');
    cy.go('back')
    cy.go('forward')
  });


})

describe('Smoke Test - NBA Page', () => {
  it('can view the NBA page', () => {
    cy.visit('/NBA');
  });
});


describe('Smoke Test - NFL Page', () => {
  it('can view the NFL page', () => {
    cy.visit('/NFL');
  });
});

describe('Smoke Test - EPL Page', () => {
  it('can view the NFL page', () => {
    cy.visit('/Premier League');
  });
});

describe('Smoke Test', () => {
  it('can view the home page', () => {
    cy.visit('/');
    cy.contains('Welcome to VASA Sports!')
  });
});



describe('Smoke Test', () => {
  it('has home button', () => {
    cy.visit('/');
    cy.contains('Home');
  });
});
describe('Smoke Test', () => {
  it('has nfl tab', () => {
    cy.visit('/');
    cy.contains('NFL');
  });


});


describe('Smoke Test', () => {
  it('has nba tab', () => {
    cy.visit('/');
    cy.contains('NBA');
  });
});


describe('Smoke Test', () => {
  it('has epl tab', () => {
    cy.visit('/');
    cy.contains('Premier League');
  });
});


describe('Smoke Test - Reload Pages', () => {
  it('cy.reload() - can reload the page', () => {
    cy.reload()
    cy.reload(true)
  });
})

describe('Test - Make Sure it Works on Different Devices and their Dimensions', () => {
  it('cy.viewport() - can be viewed on different devices and their dimensions', () => {
    cy.viewport('macbook-15')
    cy.viewport('macbook-16')
    cy.viewport('macbook-13')
  });
})


describe('Test Button Functionalities', () => {
  it('test buttons on appbar and their functionality', () => {
    cy.get(':nth-child(2) > .MuiButtonBase-root').click()
  });
})


describe('Test Button Functionalities', () => {
  it('test buttons on appbar and their functionality', () => {
    cy.get(':nth-child(3) > .MuiButtonBase-root')

  });
})

describe('Test Button Functionalities', () => {
  it('test buttons on appbar and their functionality', () => {
    cy.get(':nth-child(4) > .MuiButtonBase-root')

  });
})


describe('Test Button Functionalities', () => {
  it('test buttons on appbar and their functionality', () => {
    cy.get(':nth-child(5) > .MuiButtonBase-root')

  });
})



describe('Test NBA homepage card button functionality', () => {
  it('test buttons on homepage card and their functionality', () => {
    cy.get('.MuiGrid-root > :nth-child(4) > .MuiButtonBase-root').click()
    cy.visit("/")

  });
})

describe('Test NFL homepage card button functionalities', () => {
  it('test buttons on homepage card and their functionality', () => {
    cy.get('.MuiGrid-root > :nth-child(5) > .MuiButtonBase-root').click()
    cy.visit("/")

  });
})

describe('Test Premier League homepage card button functionalities', () => {
  it('test buttons on homepage card and their functionality', () => {
    cy.get(':nth-child(6) > .MuiButtonBase-root').click()
    cy.visit("/")

  });
})


describe('Test NBA Page and Whos that NBA Team Game', () => {
  it('test functionalities on NBA Page', () => {
    cy.visit('/NBA')
    cy.get(':nth-child(4) > .MuiBox-root > .MuiPaper-root > .MuiCardContent-root > div > .MuiButtonBase-root').click()
    cy.get('img')

  });
})


describe('Test NBA Page and Whos that player Game', () => {
  it('test functionalities on NBA Page', () => {
    cy.get(':nth-child(3) > .MuiBox-root > .MuiPaper-root > .MuiCardContent-root > div > .MuiButtonBase-root').click()
    cy.get('#nba-player-dropdown')

  });
})

describe('Test NBA Page and Over/Under Game', () => {
  it('test functionalities on NBA Page', () => {
    cy.get(':nth-child(5) > .MuiBox-root > .MuiPaper-root > .MuiCardContent-root > div > .MuiButtonBase-root').click()
    cy.get('[value="Over"]')
    cy.get('[value="Under"]')

  });
})


describe('Test NFL Page and Whos that NFL Team Game', () => {
  it('test functionalities on NFL Page', () => {
    cy.visit('/NFL')
    cy.get(':nth-child(4) > .MuiBox-root > .MuiPaper-root > .MuiCardContent-root > div > .MuiButtonBase-root').click()
    cy.get('img')

  });
})


describe('Test NFL Page and Whos that player Game', () => {
  it('test functionalities on NFL Page', () => {
    cy.get(':nth-child(3) > .MuiBox-root > .MuiPaper-root > .MuiCardContent-root > div > .MuiButtonBase-root').click()
    cy.get('#nfl-player-dropdown')

  });
})

describe('Test NFL Page and Over/Under Game', () => {
  it('test functionalities on NFL Page', () => {
    cy.get(':nth-child(5) > .MuiBox-root > .MuiPaper-root > .MuiCardContent-root > div > .MuiButtonBase-root').click()
    cy.get('[value="Over"]')
    cy.get('[value="Under"]')


  });
})

describe('Test Premier League Page and Whos that Premier League Team Game', () => {
  it('test functionalities on Premier League Page', () => {
    cy.visit('/EPL')
    cy.get(':nth-child(4) > .MuiBox-root > .MuiPaper-root > .MuiCardContent-root > div > .MuiButtonBase-root').click()
    cy.get('img')

  });
})


describe('Test Premeir League Page and Whos that player Game', () => {
  it('test functionalities on Premier League Page', () => {
    cy.get(':nth-child(3) > .MuiBox-root > .MuiPaper-root > .MuiCardContent-root > div > .MuiButtonBase-root').click()
    cy.get('#epl-team-dropdown')

  });
})

describe('Test Premeir Page and Over/Under Game', () => {
  it('test functionalities on Premier League Page', () => {
    cy.get(':nth-child(5) > .MuiBox-root > .MuiPaper-root > .MuiCardContent-root > div > .MuiButtonBase-root').click()
    cy.get('[value="Over"]')
    cy.get('[value="Under"]')


  });
})











