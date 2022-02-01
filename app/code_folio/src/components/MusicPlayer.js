import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
} from "react-bootstrap";

const MusicPlayer = () => {
  return (
    <Container fluid="xl">
      <Card className="music-card">
        <Row>
            <Col>
                <Card.Body>
                <Card.Title className='music-title'>Music By Me</Card.Title>
                    <iframe src="https://open.spotify.com/embed/artist/5H3quYd39ySxPrLLzM52Cb?utm_source=generator&theme=0" width="100%" height="350" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" title='music-player' className="music-player"></iframe>
                </Card.Body>
            </Col>
            <Col>
                <Card.Body>
                    <Card.Text className='music-text'>
                         This is a sampling of some of the music I have produced, this is my way of journaling my feelings and experiences. I think that music is awesome and I'm not sure what life would be like without it. Enjoy!
                    </Card.Text>
                </Card.Body>
            </Col>
        </Row>
      </Card>
    </Container>
  );
};

export default MusicPlayer;
