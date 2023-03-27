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
    cy.contains('Welcome');
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
    cy.get(':nth-child(3) > .MuiButtonBase-root').click()

  });
})


describe('Test NFL Page images', () => {
  it('test image on NFL plage', () => {

    cy.get('img')

  });
})


describe('Test NFL Page Drpodown List', () => {
  it('test dropdown of teams on NFL page', () => {

    cy.get('#NFL-team-dropdown').click()

  });
})


describe('Test NFL Over Button', () => {
  it('test over button on NFL page', () => {
    cy.get('[value="Over"]')

  });
})


describe('Test NFL Under Button', () => {
  it('test under button on NFL page', () => {
    cy.get('[value="Under"]')

  });
})


describe('Test NBA Page images', () => {
  it('go to NBA page and check images', () => {
    cy.visit('/NBA');
    cy.get('img')

  });
})

describe('Test NBA Page Dropdown', () => {
  it('go to NBA page and check dropdown', () => {
    cy.visit('/NBA');
    cy.get('#nba-team-dropdown').click()

  });
})


describe('Test NBA Over Button', () => {
  it('go to NBA page and check Over button', () => {
    cy.visit('/NBA');
    cy.get('[value="Over"]')

  });
})


describe('Test NBA Under Button', () => {
  it('go to NBA page and check Under Button', () => {
    cy.visit('/NBA');
    cy.get('[value="Under"]')
  });
})


describe('Test Button Functionalities', () => {
  it('test buttons on appbar and their functionality', () => {
    cy.get(':nth-child(5) > .MuiButtonBase-root').click()

  });
})

describe('Test Premier League Page images', () => {
  it('go to Premier league page and check images', () => {
    cy.visit('/EPL');
    cy.get('img')

  });
})

describe('Test Premier League Page Dropdown', () => {
  it('go to Premier league page and check dropdown', () => {
    cy.visit('/EPL');
    cy.get('#epl-player-dropdown')

  });
})


describe('Test Primer League Over Button', () => {
  it('go to Premier league page and check Over button', () => {
    cy.visit('/EPL');
    cy.get('[value="Over"]')

  });
})


describe('Test Priemer Under Button', () => {
  it('go to Premier league page and check Under Button', () => {
    cy.visit('/EPL');
    cy.get('[value="Under"]').click()

  });
})