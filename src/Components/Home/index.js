import React from 'react';

function Home() {
    return (
        <Container className="home-container">
            <Row>
                <Column className="h2-column">
                    <h2>Choose Your Zodiac Sign</h2>
                </Column>
            </Row>
            <Row className="sign-row">
                <Column className="sign-column" sm={6} lg={3}>
                    Sign 1
                </Column>
                <Column className="sign-column" sm={6} lg={3}>
                    Sign
                </Column> 2
                <Column className="sign-column" sm={6} lg={3}>
                    Sign 3
                </Column>
                <Column className="sign-column" sm={6} lg={3}>
                    Sign 4
                </Column>
                <Column className="sign-column" sm={6} lg={3}>
                    Sign 5
                </Column>
                <Column className="sign-column" sm={6} lg={3}>
                    Sign 6
                </Column>
                <Column className="sign-column" sm={6} lg={3}>
                    Sign 7
                </Column>
                <Column className="sign-column" sm={6} lg={3}>
                    Sign 8
                </Column>
                <Column className="sign-column" sm={6} lg={3}>
                    Sign 9
                </Column>
                <Column className="sign-column" sm={6} lg={3}>
                    Sign 10
                </Column>
                <Column className="sign-column" sm={6} lg={3}>
                    Sign 11
                </Column>
                <Column className="sign-column" sm={6} lg={3}>
                    Sign 12
                </Column>
            </Row>
        </Container>
    )
}

export default Home;