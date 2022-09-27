import React from 'react';
import madera from '../img/madera.jpg'
import planta from '../img/planta.jpg'
import styled from 'styled-components';

const Card = () => {
    return (
        <ContentCard>
                <Img src={planta} alt="" />
            <ContentInfo>
                <h2>Nombre</h2>
                <div>
                    <p>Descripcion</p>
                    <p>fertilizante</p>
                    <p>Riego</p>
                </div>
            </ContentInfo>
        </ContentCard>
    );
}


const ContentCard = styled.div`
    width: 12rem;
    height: 20rem;
`

const Img = styled.img`
     width: 12rem;
     height: 20rem;
     object-fit: cover;
     object-position: bottom;
     position: absolute;
`

const ContentInfo = styled.div`
    top: 87%;
    left: 50%;
    position: relative;
`


export default Card;
